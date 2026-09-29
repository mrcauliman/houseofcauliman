const express = require("express");
const rateLimit = require("express-rate-limit");
const { execFile } = require("child_process");
const { promisify } = require("util");
const { shell, esc, fmtDate, badge } = require("./ui");
const fs = require("fs/promises");
const path = require("path");
const {
  ISSUE_ROOT,
  ISSUE_STATUSES,
  ensureIssueTables
} = require("./issues");

const execFileAsync = promisify(execFile);

function createAdminRouter({ pool, sendConfirmationEmail }) {
  const router = express.Router();

  router.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 120,
    standardHeaders: true,
    legacyHeaders: false
  }));

  router.use(express.urlencoded({
    extended: false,
    limit: "100kb"
  }));

  router.use((req, res, next) => {
    res.setHeader("Cache-Control", "no-store");
    res.setHeader("X-Robots-Tag", "noindex, nofollow");

    if (req.houseAdminWalletAuthenticated !== true) {
      return res.sendStatus(401);
    }

    next();
  });

  router.get("/", async (req, res) => {
    const q = String(req.query.q || "")
      .trim()
      .toLowerCase();

    await ensureIssueTables(pool);

    const issueSummary = await pool.query(`
      SELECT
        COUNT(*) FILTER (
          WHERE status <> 'resolved'
        )::int AS open_count,

        COUNT(*) FILTER (
          WHERE
            status <> 'resolved'
            AND release_day = TRUE
        )::int AS release_day_count,

        COUNT(*) FILTER (
          WHERE status = 'action_required'
        )::int AS action_count

      FROM the52_delivery_issues
    `);

    const issueCounts =
      issueSummary.rows[0] || {};

    const result = await pool.query(`
      SELECT
        r.*,

        latest.drop_id AS latest_drop_id,
        latest.drop_date AS latest_drop_date,
        latest.drop_name AS latest_drop_name,

        latest.recipient_id,
        latest.recipient_wallet,
        latest.recipient_handle,

        latest.mint_status,
        latest.mint_tx_hash,
        latest.nftoken_id,
        latest.mint_error,

        latest.claim_offer_status,
        latest.claim_offer_id,
        latest.claim_offer_tx_hash,
        latest.claim_error,

        latest.claim_accept_status,
        latest.claim_accept_tx_hash,
        latest.claim_accept_error,
        latest.claim_accepted_at,

        latest.recipient_delivered,
        latest.delivery_tx_hash,

        COALESCE(history.drop_count, 0)::int
          AS drop_count,

        COALESCE(history.minted_count, 0)::int
          AS minted_count,

        COALESCE(history.delivered_count, 0)::int
          AS delivered_count,

        COALESCE(history.open_claim_count, 0)::int
          AS open_claim_count,

        COALESCE(history.blocked_count, 0)::int
          AS blocked_count,

        EXISTS (
          SELECT 1
          FROM nft_wallet_change_requests wc
          WHERE
            wc.registration_id = r.id
            AND wc.status = 'pending'
        ) AS wallet_change_pending

      FROM nft_subscriber_registrations r

      LEFT JOIN LATERAL (
        SELECT
          d.id AS drop_id,
          d.drop_date,
          d.drop_name,

          wr.id AS recipient_id,
          wr.xrpl_address AS recipient_wallet,
          wr.x_handle AS recipient_handle,

          wr.mint_status,
          wr.mint_tx_hash,
          wr.nftoken_id,
          wr.mint_error,

          wr.claim_offer_status,
          wr.claim_offer_id,
          wr.claim_offer_tx_hash,
          wr.claim_error,

          wr.claim_accept_status,
          wr.claim_accept_tx_hash,
          wr.claim_accept_error,
          wr.claim_accepted_at,

          wr.delivered AS recipient_delivered,
          wr.delivery_tx_hash

        FROM nft_weekly_recipients wr
        JOIN nft_weekly_drops d
          ON d.id = wr.drop_id

        WHERE wr.registration_id = r.id

        ORDER BY d.drop_date DESC, wr.id DESC
        LIMIT 1
      ) latest ON TRUE

      LEFT JOIN LATERAL (
        SELECT
          COUNT(*) AS drop_count,

          COUNT(*) FILTER (
            WHERE wr.mint_status = 'minted'
          ) AS minted_count,

          COUNT(*) FILTER (
            WHERE wr.delivered = TRUE
          ) AS delivered_count,

          COUNT(*) FILTER (
            WHERE wr.claim_offer_status = 'open'
          ) AS open_claim_count,

          COUNT(*) FILTER (
            WHERE wr.claim_offer_status = 'blocked'
          ) AS blocked_count

        FROM nft_weekly_recipients wr
        WHERE wr.registration_id = r.id
      ) history ON TRUE

      WHERE
        $1 = ''

        OR LOWER(r.x_handle) LIKE $2
        OR LOWER(COALESCE(r.email,'')) LIKE $2
        OR LOWER(r.xrpl_address) LIKE $2

        OR LOWER(COALESCE(latest.nftoken_id,'')) LIKE $2
        OR LOWER(COALESCE(latest.mint_tx_hash,'')) LIKE $2
        OR LOWER(COALESCE(latest.claim_offer_id,'')) LIKE $2
        OR LOWER(COALESCE(latest.claim_offer_tx_hash,'')) LIKE $2
        OR LOWER(COALESCE(latest.claim_accept_tx_hash,'')) LIKE $2
        OR LOWER(COALESCE(latest.delivery_tx_hash,'')) LIKE $2
        OR LOWER(COALESCE(latest.drop_name,'')) LIKE $2

      ORDER BY r.registered_at DESC
      LIMIT 500
    `, [q, `%${q}%`]);

    const walletChanges = await pool.query(`
      SELECT
        id,
        x_handle,
        COALESCE(old_x_handle, x_handle) AS old_x_handle,
        COALESCE(new_x_handle, x_handle) AS new_x_handle,
        old_xrpl_address,
        new_xrpl_address,
        requested_at
      FROM nft_wallet_change_requests
      WHERE status = 'pending'
      ORDER BY requested_at ASC
    `);

    const total = result.rows.length;

    const delivered = result.rows.filter(
      r => Number(r.delivered_count || 0) > 0
    ).length;

    const openClaims = result.rows.reduce(
      (sum, r) => sum + Number(r.open_claim_count || 0),
      0
    );

    const attention = result.rows.filter(r =>
      r.wallet_change_pending ||
      r.claim_offer_status === "blocked" ||
      Boolean(r.claim_error) ||
      Boolean(r.claim_accept_error) ||
      Boolean(r.mint_error) ||
      (
        r.claim_offer_status === "accepted" &&
        r.recipient_delivered !== true
      )
    ).length;

    const people = result.rows.map(r => {
      const emailStatus = r.confirmation_email_sent
        ? badge("Email sent", "good")
        : badge("No email", "neutral");

      const registrationStatus =
        r.status === "excluded"
          ? badge("EXCLUDED", "warn")
          : badge("REGISTERED", "neutral");

      const nftStatus =
        r.wallet_change_pending
          ? badge("WALLET CHANGE PENDING", "warn")
          : !r.recipient_id
          ? badge("REGISTERED / NOT YET FROZEN", "neutral")
          : r.recipient_delivered
          ? badge("DELIVERED / OWNED", "good")
          : r.claim_offer_status === "blocked"
          ? badge("WALLET INACTIVE / BLOCKED", "warn")
          : r.mint_status === "error" || r.mint_error
          ? badge("MINT ERROR", "warn")
          : r.claim_error || r.claim_accept_error
          ? badge("CLAIM ERROR", "warn")
          : r.mint_status === "pending"
          ? badge("READY TO MINT", "neutral")
          : r.mint_status !== "minted"
          ? badge("NEEDS RECONCILIATION", "warn")
          : r.claim_offer_status === "open"
          ? badge("CLAIM OPEN", "neutral")
          : r.claim_accept_status === "pending" ||
            r.claim_accept_status === "submitted"
          ? badge("CLAIM SUBMITTING", "neutral")
          : r.claim_offer_status === "accepted"
          ? badge("NEEDS RECONCILIATION", "warn")
          : r.claim_offer_status === "not_required"
          ? badge("DELIVERED / OWNED", "good")
          : badge("CLAIM READY", "neutral");

      return `
        <div class="person">

          <div>
            <input
              class="check bulk-check"
              type="checkbox"
              name="ids"
              value="${r.id}"
              data-wallet="${esc(r.xrpl_address)}"
              data-handle="${esc(r.x_handle)}"
              form="bulkForm"
            >
          </div>

          <div>
            <div class="handle">
              ${esc(r.x_handle)}
            </div>

            <div class="small">
              ${esc(r.email || "No email provided")}
            </div>

            <div style="margin-top:9px;display:flex;gap:6px;flex-wrap:wrap">
              ${emailStatus}
              ${registrationStatus}
              ${nftStatus}
            </div>

            <div class="small" style="margin-top:9px">
              Eligible ${fmtDate(r.eligible_week)}
            </div>

            ${
              r.latest_drop_name
                ? `<div class="small" style="margin-top:6px">
                     Latest ${esc(r.latest_drop_name)}
                   </div>`
                : ""
            }

            <div class="small" style="margin-top:6px">
              Drops ${Number(r.drop_count || 0)}
              · Minted ${Number(r.minted_count || 0)}
              · Delivered ${Number(r.delivered_count || 0)}
            </div>

            ${
              r.nftoken_id
                ? `<div class="small" style="margin-top:6px">
                     NFT ${esc(r.nftoken_id)}
                   </div>`
                : ""
            }

            ${
              r.claim_error || r.claim_accept_error || r.mint_error
                ? `<div class="small" style="margin-top:6px">
                     ${esc(
                       r.claim_error ||
                       r.claim_accept_error ||
                       r.mint_error
                     )}
                   </div>`
                : ""
            }
          </div>

          <div class="wallet-block">
            <div class="small">XRPL WALLET</div>
            <div class="wallet">
              ${esc(r.xrpl_address)}
            </div>
          </div>

          <div class="control-block">

            <form
              method="post"
              action="/admin/${r.id}"
              style="display:grid;gap:8px"
            >

              <label class="small">
                𝕏 HANDLE
              </label>

              <input
                type="text"
                name="x_handle"
                value="${esc(r.x_handle)}"
                maxlength="16"
                autocomplete="off"
                spellcheck="false"
              >

              <label style="display:flex;gap:8px;align-items:center">
                <input
                  type="checkbox"
                  name="excluded"
                  ${r.status === "excluded" ? "checked" : ""}
                >
                <span class="small">
                  EXCLUDE FROM FUTURE DROPS
                </span>
              </label>

              <button
                class="btn primary"
                type="submit"
              >
                SAVE REGISTRATION
              </button>

            </form>

          </div>

        </div>
      `;
    }).join("");

    const walletChangeRows = walletChanges.rows.map(r => {
      const handleChanged =
        String(r.old_x_handle || "").toLowerCase() !==
        String(r.new_x_handle || "").toLowerCase();

      const walletChanged =
        String(r.old_xrpl_address || "") !==
        String(r.new_xrpl_address || "");

      return `
      <div class="person wallet-change-row">

        <div>
          ${badge("PENDING", "warn")}
        </div>

        <div>
          <div class="handle">
            REGISTRATION CHANGE
          </div>

          <div class="small">
            Requested ${fmtDate(r.requested_at)}
          </div>
        </div>

        <div class="wallet-block">

          <div class="small">𝕏 HANDLE</div>
          <div class="wallet">
            ${esc(r.old_x_handle)}
            →
            ${
              handleChanged
                ? esc(r.new_x_handle)
                : "NO CHANGE"
            }
          </div>

          <div class="small" style="margin-top:10px">
            XAMAN WALLET
          </div>
          <div class="wallet">
            ${esc(r.old_xrpl_address)}
            →
            ${
              walletChanged
                ? esc(r.new_xrpl_address)
                : "NO CHANGE"
            }
          </div>

        </div>

        <div class="control-block">
          <form
            method="post"
            action="/admin/wallet-change/${r.id}/approve"
            style="margin-bottom:8px"
          >
            <button class="btn primary" type="submit">
              APPROVE
            </button>
          </form>

          <form
            method="post"
            action="/admin/wallet-change/${r.id}/reject"
          >
            <button class="btn secondary" type="submit">
              REJECT
            </button>
          </form>
        </div>

      </div>
    `;
    }).join("");

    const body = `

      ${
        walletChanges.rows.length
          ? `
            <div class="card">
              <div class="handle" style="margin-bottom:12px">
                Pending Registration Changes
              </div>

              ${walletChangeRows}
            </div>
          `
          : ""
      }

      <div class="grid four">

        <div class="stat">
          <div class="num">${total}</div>
          <div class="label">Registrations</div>
        </div>

        <div class="stat">
          <div class="num">${openClaims}</div>
          <div class="label">Open Claims</div>
        </div>

        <div class="stat">
          <div class="num">${delivered}</div>
          <div class="label">Collectors Delivered</div>
        </div>

        <div class="stat">
          <div class="num">${attention}</div>
          <div class="label">Needs Attention</div>
        </div>

      </div>

      <div class="card">
        <div class="grid three">

          <div>
            <div class="small">OPEN ISSUES</div>
            <div class="handle">
              ${Number(issueCounts.open_count || 0)}
            </div>
          </div>

          <div>
            <div class="small">RELEASE-DAY ISSUES</div>
            <div class="handle">
              ${Number(issueCounts.release_day_count || 0)}
            </div>
          </div>

          <div>
            <div class="small">ACTION REQUIRED</div>
            <div class="handle">
              ${Number(issueCounts.action_count || 0)}
            </div>
          </div>

        </div>
      </div>

      <div class="card">

        <form
          method="get"
          action="/admin/"
          class="grid two"
        >
          <div>
            <label>Search registrations</label>

            <input
              type="search"
              name="q"
              value="${esc(q)}"
              placeholder="Handle, wallet, NFT, transaction or drop"
            >
          </div>

          <div
            class="actions"
            style="align-self:end"
          >
            <button class="btn primary">
              SEARCH
            </button>

            <a
              class="btn secondary"
              href="/admin/export.csv"
            >
              EXPORT CSV
            </a>

            <a
              class="btn secondary"
              href="/admin/weekly/"
            >
              WEEKLY DROPS
            </a>

            <a
              class="btn secondary"
              href="/admin/issues"
            >
              ISSUES (${Number(issueCounts.open_count || 0)})
            </a>
          </div>
        </form>

      </div>

      <form
        id="bulkForm"
        method="post"
        action="/admin/bulk"
      ></form>

      <form
        id="missingEmailForm"
        method="post"
        action="/admin/resend-missing"
      ></form>

      <div class="card toolbar">

        <div class="actions">

          <button
            type="button"
            class="btn secondary"
            data-action="select-all"
          >
            SELECT ALL
          </button>

          <button
            type="button"
            class="btn secondary"
            data-action="clear-all"
          >
            CLEAR
          </button>

          <button
            type="button"
            class="btn secondary"
            data-action="copy-bulk-handles"
          >
            COPY SELECTED HANDLES
          </button>

          <button
            class="btn secondary"
            type="submit"
            form="missingEmailForm"
          >
            SEND MISSING CONFIRMATIONS
          </button>

        </div>

      </div>

      <div class="card">

        ${
          people ||
          `<div class="small">No registrations found.</div>`
        }

      </div>
    `;

    const script = `
      function selectAll() {
        document
          .querySelectorAll(".bulk-check")
          .forEach(el => el.checked = true);
      }

      function clearAll() {
        document
          .querySelectorAll(".bulk-check")
          .forEach(el => el.checked = false);
      }
    `;

    res.send(shell({
      title: "THE 52 NFT Administration",
      subtitle:
        "Automatic NFT operations, subscriber reconciliation and exceptions.",
      body,
      script
    }));
  });

  router.post("/bulk", async (req, res) => {
    let ids = req.body.ids || [];

    if (!Array.isArray(ids)) {
      ids = [ids];
    }

    ids = ids
      .map(Number)
      .filter(Number.isInteger);

    if (!ids.length) {
      return res.redirect("/admin/");
    }

    res.redirect("/admin/");
  });


  async function sendRegistrationConfirmation(id) {
    const result = await pool.query(`
      SELECT *
      FROM nft_subscriber_registrations
      WHERE id = $1
      LIMIT 1
    `, [id]);

    if (!result.rows.length) {
      return {
        sent: false,
        error: "Registration not found"
      };
    }

    const registration = result.rows[0];

    if (!registration.email) {
      return {
        sent: false,
        error: "No email address"
      };
    }

    const delivery = await sendConfirmationEmail(
      registration,
      registration.email
    );

    await pool.query(`
      UPDATE nft_subscriber_registrations
      SET
        confirmation_email_sent = $1,

        confirmation_email_sent_at =
          CASE
            WHEN $1
            THEN NOW()
            ELSE confirmation_email_sent_at
          END,

        confirmation_email_id = $2,
        confirmation_email_error = $3,
        updated_at = NOW()

      WHERE id = $4
    `, [
      Boolean(delivery.sent),
      delivery.id || null,
      delivery.error || null,
      id
    ]);

    return delivery;
  }

  router.post("/resend-missing", async (req, res) => {
    const result = await pool.query(`
      SELECT id
      FROM nft_subscriber_registrations
      WHERE
        email IS NOT NULL
        AND confirmation_email_sent = FALSE
      ORDER BY id
    `);

    for (const row of result.rows) {
      try {
        await sendRegistrationConfirmation(row.id);
      } catch (error) {
        await pool.query(`
          UPDATE nft_subscriber_registrations
          SET
            confirmation_email_error = $1,
            updated_at = NOW()
          WHERE id = $2
        `, [
          error.message || String(error),
          row.id
        ]);
      }
    }

    res.redirect("/admin/");
  });

  router.post("/resend/:id", async (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
      return res.sendStatus(400);
    }

    await sendRegistrationConfirmation(id);

    res.redirect("/admin/");
  });

  router.post("/wallet-change/:id/approve", async (req, res) => {
    const requestId = Number(req.params.id);

    if (!Number.isInteger(requestId)) {
      return res.sendStatus(400);
    }

    try {
      await execFileAsync(
        process.execPath,
        [
          require("path").join(
            __dirname,
            "the52-mint-runner.js"
          ),
          "migrate-wallet-change",
          String(requestId)
        ],
        {
          cwd: __dirname,
          timeout: 120000,
          maxBuffer: 1024 * 1024
        }
      );

      return res.redirect("/admin/");
    } catch (error) {
      console.error(
        "Registration change migration failed",
        requestId,
        error?.stderr || error?.message || error
      );

      return res.status(409).send(
        "Wallet change could not be completed. " +
        "No database approval was recorded."
      );
    }
  });


  router.post("/wallet-change/:id/reject", async (req, res) => {
    const requestId = Number(req.params.id);

    if (!Number.isInteger(requestId)) {
      return res.sendStatus(400);
    }

    await pool.query(`
      UPDATE nft_wallet_change_requests
      SET
        status = 'rejected',
        reviewed_at = NOW()
      WHERE
        id = $1
        AND status = 'pending'
    `, [requestId]);

    return res.redirect("/admin/");
  });


  router.get("/issues", async (req, res) => {
    await ensureIssueTables(pool);

    const status =
      String(req.query.status || "").trim();

    const q =
      String(req.query.q || "")
        .trim()
        .toLowerCase();

    const params = [];
    const where = [];

    if (status && ISSUE_STATUSES.has(status)) {
      params.push(status);
      where.push(`i.status = $${params.length}`);
    }

    if (q) {
      params.push(`%${q}%`);
      const n = params.length;

      where.push(`(
        LOWER(COALESCE(i.report_id,'')) LIKE $${n}
        OR LOWER(COALESCE(i.x_handle,'')) LIKE $${n}
        OR LOWER(COALESCE(i.xrpl_address,'')) LIKE $${n}
        OR LOWER(COALESCE(i.description,'')) LIKE $${n}
        OR LOWER(COALESCE(d.drop_name,'')) LIKE $${n}
        OR LOWER(COALESCE(r.nftoken_id,'')) LIKE $${n}
        OR LOWER(COALESCE(r.mint_tx_hash,'')) LIKE $${n}
        OR LOWER(COALESCE(r.claim_offer_id,'')) LIKE $${n}
        OR LOWER(COALESCE(r.claim_offer_tx_hash,'')) LIKE $${n}
      )`);
    }

    const result = await pool.query(`
      SELECT
        i.*,
        d.drop_date,
        d.drop_name,
        r.nftoken_id,
        r.mint_status,
        r.mint_tx_hash,
        r.claim_offer_id,
        r.claim_offer_status,
        r.claim_offer_tx_hash,
        r.claim_accept_tx_hash,
        r.delivered,

        (
          SELECT COUNT(*)::int
          FROM the52_delivery_issue_screenshots s
          WHERE s.issue_id = i.id
        ) AS screenshot_count

      FROM the52_delivery_issues i

      LEFT JOIN nft_weekly_drops d
        ON d.id = i.drop_id

      LEFT JOIN nft_weekly_recipients r
        ON r.id = i.recipient_id

      ${where.length
        ? "WHERE " + where.join(" AND ")
        : ""}

      ORDER BY
        CASE
          WHEN i.status = 'action_required'
          THEN 0 ELSE 1
        END,
        CASE
          WHEN i.release_day
          THEN 0 ELSE 1
        END,
        i.submitted_at DESC

      LIMIT 500
    `, params);

    const issueRows =
      result.rows.map(i => {
        const state =
          i.status === "resolved"
            ? badge("RESOLVED", "good")
            : i.status === "action_required"
            ? badge("ACTION REQUIRED", "warn")
            : i.status === "waiting_on_subscriber"
            ? badge("WAITING ON SUBSCRIBER", "neutral")
            : i.status === "investigating"
            ? badge("INVESTIGATING", "neutral")
            : badge("OPEN", "warn");

        return `
          <div class="person">

            <div>
              ${
                i.release_day
                  ? badge("RELEASE DAY", "warn")
                  : badge("ISSUE", "neutral")
              }
            </div>

            <div>
              <div class="handle">
                ${esc(i.report_id)}
              </div>

              <div class="small">
                ${esc(i.x_handle || "No handle")}
                · ${esc(i.xrpl_address)}
              </div>

              <div class="small" style="margin-top:6px">
                ${esc(i.issue_type)}
                · ${fmtDate(i.submitted_at)}
              </div>

              ${
                i.drop_name
                  ? `<div class="small" style="margin-top:6px">
                       ${esc(i.drop_name)}
                     </div>`
                  : ""
              }

              <div style="margin-top:9px">
                ${state}

                ${
                  Number(i.screenshot_count || 0)
                    ? badge(
                        `${Number(i.screenshot_count)} SCREENSHOT` +
                        (
                          Number(i.screenshot_count) === 1
                            ? ""
                            : "S"
                        ),
                        "neutral"
                      )
                    : ""
                }
              </div>

              <div class="small" style="margin-top:9px">
                ${esc(i.description)}
              </div>

              <div class="small" style="margin-top:9px">
                Registration
                ${i.diagnostic_registration_found ? "✓" : "✕"}
                · Frozen
                ${i.diagnostic_frozen ? "✓" : "✕"}
                · Minted
                ${i.diagnostic_minted ? "✓" : "✕"}
                · Delivered
                ${i.diagnostic_delivered ? "✓" : "✕"}
                · Owned
                ${
                  i.diagnostic_owned === true
                    ? "✓"
                    : i.diagnostic_owned === false
                    ? "✕"
                    : "?"
                }
                · Wallet
                ${
                  i.diagnostic_wallet_active === true
                    ? "ACTIVE"
                    : i.diagnostic_wallet_active === false
                    ? "INACTIVE"
                    : "UNKNOWN"
                }
              </div>

              ${
                i.diagnostic_claim_status
                  ? `<div class="small" style="margin-top:6px">
                       Claim ${esc(i.diagnostic_claim_status)}
                     </div>`
                  : ""
              }

              ${
                i.diagnostic_error
                  ? `<div class="small" style="margin-top:6px">
                       Diagnostic error
                       ${esc(i.diagnostic_error)}
                     </div>`
                  : ""
              }

              <div class="actions" style="margin-top:12px">
                <a
                  class="btn secondary"
                  href="/admin/issues/${encodeURIComponent(i.report_id)}"
                >
                  OPEN ISSUE
                </a>
              </div>
            </div>

          </div>
        `;
      }).join("");

    const options = [
      ["", "All"],
      ["open", "Open"],
      ["investigating", "Investigating"],
      ["waiting_on_subscriber", "Waiting on subscriber"],
      ["action_required", "Action required"],
      ["resolved", "Resolved"]
    ].map(([value, label]) =>
      `<option
        value="${esc(value)}"
        ${status === value ? "selected" : ""}
      >
        ${esc(label)}
      </option>`
    ).join("");

    const body = `
      <div class="card">
        <form
          method="get"
          action="/admin/issues"
          class="grid two"
        >
          <div>
            <label>Search issues</label>

            <input
              type="search"
              name="q"
              value="${esc(q)}"
              placeholder="Report, handle, wallet, NFT or transaction"
            >
          </div>

          <div>
            <label>Status</label>

            <select name="status">
              ${options}
            </select>
          </div>

          <div class="actions">
            <button class="btn primary">
              FILTER
            </button>

            <a
              class="btn secondary"
              href="/admin/"
            >
              NFT ADMIN
            </a>
          </div>
        </form>
      </div>

      <div class="card">
        ${
          issueRows ||
          `<div class="small">No issues found.</div>`
        }
      </div>
    `;

    res.send(shell({
      title: "THE 52 Subscriber Issues",
      subtitle:
        "Delivery diagnostics, screenshots and resolution queue.",
      body
    }));
  });

  router.get(
    "/issues/:reportId",
    async (req, res) => {
      await ensureIssueTables(pool);

      const result = await pool.query(`
        SELECT
          i.*,
          d.drop_date,
          d.drop_name,
          r.nftoken_id,
          r.mint_status,
          r.mint_tx_hash,
          r.claim_offer_id,
          r.claim_offer_status,
          r.claim_offer_tx_hash,
          r.claim_accept_status,
          r.claim_accept_tx_hash,
          r.delivered,
          r.delivery_tx_hash

        FROM the52_delivery_issues i

        LEFT JOIN nft_weekly_drops d
          ON d.id = i.drop_id

        LEFT JOIN nft_weekly_recipients r
          ON r.id = i.recipient_id

        WHERE i.report_id = $1
        LIMIT 1
      `, [
        String(req.params.reportId || "")
      ]);

      if (!result.rowCount) {
        return res.sendStatus(404);
      }

      const issue = result.rows[0];

      const screenshots = await pool.query(`
        SELECT
          id,
          mime_type,
          byte_size,
          uploaded_at
        FROM the52_delivery_issue_screenshots
        WHERE issue_id = $1
        ORDER BY id
      `, [issue.id]);

      const events = await pool.query(`
        SELECT
          event_type,
          from_status,
          to_status,
          note,
          created_at
        FROM the52_delivery_issue_events
        WHERE issue_id = $1
        ORDER BY created_at DESC, id DESC
      `, [issue.id]);

      const screenshotRows =
        screenshots.rows.map(shot => `
          <div class="small" style="margin-bottom:8px">
            Screenshot ${shot.id}
            · ${Math.ceil(Number(shot.byte_size) / 1024)} KB
            ·
            <a
              href="/admin/issues/${encodeURIComponent(issue.report_id)}/screenshot/${shot.id}"
              target="_blank"
              rel="noopener"
            >
              VIEW
            </a>
          </div>
        `).join("");

      const eventRows =
        events.rows.map(event => `
          <div class="small" style="margin-bottom:10px">
            ${fmtDate(event.created_at)}
            · ${esc(event.event_type)}

            ${
              event.from_status || event.to_status
                ? ` · ${esc(event.from_status || "")}
                   → ${esc(event.to_status || "")}`
                : ""
            }

            ${
              event.note
                ? `<br>${esc(event.note)}`
                : ""
            }
          </div>
        `).join("");

      const options = [
        ["open", "Open"],
        ["investigating", "Investigating"],
        ["waiting_on_subscriber", "Waiting on subscriber"],
        ["action_required", "Action required"],
        ["resolved", "Resolved"]
      ].map(([value, label]) =>
        `<option
          value="${esc(value)}"
          ${issue.status === value ? "selected" : ""}
        >
          ${esc(label)}
        </option>`
      ).join("");

      const body = `
        <div class="card">

          <div class="handle">
            ${esc(issue.report_id)}
          </div>

          <div class="small" style="margin-top:6px">
            ${esc(issue.x_handle || "No handle")}
            · ${esc(issue.xrpl_address)}
          </div>

          <div class="small" style="margin-top:6px">
            ${esc(issue.issue_type)}
            · ${fmtDate(issue.submitted_at)}
            ${issue.release_day ? " · RELEASE DAY" : ""}
          </div>

          ${
            issue.drop_name
              ? `<div class="small" style="margin-top:6px">
                   ${esc(issue.drop_name)}
                 </div>`
              : ""
          }

          <div style="margin-top:16px">
            ${esc(issue.description)}
          </div>

        </div>

        <div class="card">

          <div class="handle">
            AUTOMATIC DIAGNOSTICS
          </div>

          <div class="small" style="margin-top:10px">
            Registration
            ${issue.diagnostic_registration_found ? "YES" : "NO"}
            <br>

            Frozen roster
            ${issue.diagnostic_frozen ? "YES" : "NO"}
            <br>

            Minted
            ${issue.diagnostic_minted ? "YES" : "NO"}
            <br>

            Claim
            ${esc(issue.diagnostic_claim_status || "N/A")}
            <br>

            Delivered record
            ${issue.diagnostic_delivered ? "YES" : "NO"}
            <br>

            Verified XRPL ownership
            ${
              issue.diagnostic_owned === true
                ? "YES"
                : issue.diagnostic_owned === false
                ? "NO"
                : "UNKNOWN"
            }
            <br>

            Wallet active
            ${
              issue.diagnostic_wallet_active === true
                ? "YES"
                : issue.diagnostic_wallet_active === false
                ? "NO"
                : "UNKNOWN"
            }
          </div>

          ${
            issue.nftoken_id
              ? `<div class="small" style="margin-top:10px">
                   NFT ${esc(issue.nftoken_id)}
                 </div>`
              : ""
          }

          ${
            issue.mint_tx_hash
              ? `<div class="small" style="margin-top:6px">
                   Mint TX ${esc(issue.mint_tx_hash)}
                 </div>`
              : ""
          }

          ${
            issue.claim_offer_id
              ? `<div class="small" style="margin-top:6px">
                   Claim offer ${esc(issue.claim_offer_id)}
                 </div>`
              : ""
          }

          ${
            issue.claim_accept_tx_hash
              ? `<div class="small" style="margin-top:6px">
                   Accept TX ${esc(issue.claim_accept_tx_hash)}
                 </div>`
              : ""
          }

          ${
            issue.diagnostic_error
              ? `<div class="small" style="margin-top:10px">
                   Diagnostic error
                   ${esc(issue.diagnostic_error)}
                 </div>`
              : ""
          }

        </div>

        <div class="card">
          <div class="handle">SCREENSHOTS</div>

          <div style="margin-top:10px">
            ${
              screenshotRows ||
              `<div class="small">No screenshots attached.</div>`
            }
          </div>
        </div>

        <div class="card">

          <form
            method="post"
            action="/admin/issues/${encodeURIComponent(issue.report_id)}/status"
          >
            <label>Status</label>

            <select name="status">
              ${options}
            </select>

            <label style="margin-top:12px">
              Internal notes
            </label>

            <textarea
              name="note"
              maxlength="3000"
              rows="6"
            >${esc(issue.admin_notes || "")}</textarea>

            <div class="actions" style="margin-top:12px">

              <button class="btn primary">
                UPDATE ISSUE
              </button>

              <a
                class="btn secondary"
                href="/admin/issues"
              >
                BACK TO ISSUES
              </a>

            </div>
          </form>

        </div>

        <div class="card">
          <div class="handle">HISTORY</div>

          <div style="margin-top:10px">
            ${eventRows}
          </div>
        </div>
      `;

      res.send(shell({
        title: "THE 52 Issue",
        subtitle:
          "Subscriber delivery investigation.",
        body
      }));
    }
  );

  router.get(
    "/issues/:reportId/screenshot/:screenshotId",
    async (req, res) => {
      await ensureIssueTables(pool);

      const screenshotId =
        Number(req.params.screenshotId);

      if (
        !Number.isSafeInteger(screenshotId) ||
        screenshotId < 1
      ) {
        return res.sendStatus(404);
      }

      const result = await pool.query(`
        SELECT
          s.storage_name,
          s.mime_type,
          i.id AS issue_id
        FROM the52_delivery_issue_screenshots s
        JOIN the52_delivery_issues i
          ON i.id = s.issue_id
        WHERE
          i.report_id = $1
          AND s.id = $2
        LIMIT 1
      `, [
        String(req.params.reportId || ""),
        screenshotId
      ]);

      if (!result.rowCount) {
        return res.sendStatus(404);
      }

      const row = result.rows[0];

      const filePath =
        path.join(
          ISSUE_ROOT,
          String(row.issue_id),
          row.storage_name
        );

      try {
        const data =
          await fs.readFile(filePath);

        res.setHeader(
          "Content-Type",
          row.mime_type
        );

        res.setHeader(
          "Content-Disposition",
          "inline"
        );

        res.setHeader(
          "Cache-Control",
          "private, no-store"
        );

        res.setHeader(
          "X-Content-Type-Options",
          "nosniff"
        );

        return res.send(data);
      } catch {
        return res.sendStatus(404);
      }
    }
  );

  router.post(
    "/issues/:reportId/status",
    async (req, res) => {
      await ensureIssueTables(pool);

      const reportId =
        String(req.params.reportId || "");

      const status =
        String(req.body.status || "");

      const note =
        String(req.body.note || "")
          .trim()
          .slice(0, 3000);

      if (!ISSUE_STATUSES.has(status)) {
        return res.sendStatus(400);
      }

      const client =
        await pool.connect();

      try {
        await client.query("BEGIN");

        const current =
          await client.query(`
            SELECT
              id,
              status,
              admin_notes
            FROM the52_delivery_issues
            WHERE report_id = $1
            FOR UPDATE
          `, [reportId]);

        if (!current.rowCount) {
          await client.query("ROLLBACK");
          return res.sendStatus(404);
        }

        const row =
          current.rows[0];

        await client.query(`
          UPDATE the52_delivery_issues
          SET
            status = $1,
            admin_notes = $2,
            updated_at = NOW(),
            resolved_at = CASE
              WHEN $1 = 'resolved'
              THEN COALESCE(resolved_at, NOW())
              ELSE NULL
            END
          WHERE id = $3
        `, [
          status,
          note || null,
          row.id
        ]);

        if (
          row.status !== status ||
          String(row.admin_notes || "") !== note
        ) {
          await client.query(`
            INSERT INTO the52_delivery_issue_events (
              issue_id,
              event_type,
              from_status,
              to_status,
              note
            )
            VALUES (
              $1,
              'admin_update',
              $2,
              $3,
              $4
            )
          `, [
            row.id,
            row.status,
            status,
            note || null
          ]);
        }

        await client.query("COMMIT");

        return res.redirect(
          303,
          `/admin/issues/${encodeURIComponent(reportId)}`
        );
      } catch (error) {
        await client.query("ROLLBACK");
        throw error;
      } finally {
        client.release();
      }
    }
  );

  router.post("/:id", async (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
      return res.sendStatus(400);
    }

    const rawHandle = String(req.body.x_handle || "").trim();
    const xHandle = rawHandle
      ? (rawHandle.startsWith("@") ? rawHandle : "@" + rawHandle)
      : "";

    const xHandleNormalized = xHandle
      .replace(/^@+/, "")
      .trim()
      .toLowerCase();

    if (!xHandleNormalized) {
      return res.status(400).send("X handle is required.");
    }

    if (!/^[a-z0-9_]{1,15}$/i.test(xHandleNormalized)) {
      return res.status(400).send("Invalid X handle.");
    }

    const duplicate = await pool.query(`
      SELECT id, x_handle
      FROM nft_subscriber_registrations
      WHERE x_handle_normalized = $1
        AND id <> $2
      LIMIT 1
    `, [xHandleNormalized, id]);

    if (duplicate.rows.length) {
      return res.status(409).send(
        `That X handle is already registered to ${duplicate.rows[0].x_handle}.`
      );
    }

    await pool.query(`
      UPDATE nft_subscriber_registrations
      SET
        x_handle = $1,
        x_handle_normalized = $2,
        status = CASE
          WHEN $3 THEN 'excluded'
          WHEN status = 'excluded' THEN 'pending'
          ELSE status
        END,
        updated_at = NOW()
      WHERE id = $4
    `, [
      xHandle,
      xHandleNormalized,
      req.body.excluded === "on",
      id
    ]);

    res.redirect("/admin/");
  });

  router.get("/export.csv", async (req, res) => {
    const result = await pool.query(`
      SELECT
        r.x_handle,
        r.xrpl_address,
        r.email,
        r.eligible_week,

        CASE
          WHEN r.status = 'excluded'
          THEN TRUE
          ELSE FALSE
        END AS excluded_from_future_drops,

        r.subscription_verified,

        COALESCE(history.drop_count, 0)::int
          AS drop_count,

        COALESCE(history.minted_count, 0)::int
          AS minted_count,

        COALESCE(history.delivered_count, 0)::int
          AS delivered_count,

        latest.drop_date AS latest_drop_date,
        latest.drop_name AS latest_drop_name,
        latest.mint_status AS latest_mint_status,
        latest.mint_tx_hash AS latest_mint_tx_hash,
        latest.nftoken_id AS latest_nftoken_id,
        latest.claim_offer_status AS latest_claim_status,
        latest.claim_offer_id AS latest_claim_offer_id,
        latest.claim_offer_tx_hash AS latest_claim_tx_hash,
        latest.claim_accept_tx_hash AS latest_accept_tx_hash,
        latest.delivered AS latest_delivered

      FROM nft_subscriber_registrations r

      LEFT JOIN LATERAL (
        SELECT
          d.drop_date,
          d.drop_name,
          wr.mint_status,
          wr.mint_tx_hash,
          wr.nftoken_id,
          wr.claim_offer_status,
          wr.claim_offer_id,
          wr.claim_offer_tx_hash,
          wr.claim_accept_tx_hash,
          wr.delivered

        FROM nft_weekly_recipients wr
        JOIN nft_weekly_drops d
          ON d.id = wr.drop_id

        WHERE wr.registration_id = r.id

        ORDER BY d.drop_date DESC, wr.id DESC
        LIMIT 1
      ) latest ON TRUE

      LEFT JOIN LATERAL (
        SELECT
          COUNT(*) AS drop_count,

          COUNT(*) FILTER (
            WHERE wr.mint_status = 'minted'
          ) AS minted_count,

          COUNT(*) FILTER (
            WHERE wr.delivered = TRUE
          ) AS delivered_count

        FROM nft_weekly_recipients wr
        WHERE wr.registration_id = r.id
      ) history ON TRUE

      ORDER BY r.registered_at
    `);

    const cols = Object.keys(
      result.rows[0] || {}
    );

    const csv = [
      cols.join(","),

      ...result.rows.map(row =>
        cols.map(c =>
          `"${String(row[c] ?? "")
            .replaceAll('"', '""')}"`
        ).join(",")
      )
    ].join("\n");

    res.type("text/csv");

    res.setHeader(
      "Content-Disposition",
      'attachment; filename="the52-nft-operations.csv"'
    );

    res.send(csv);
  });

  return router;
}

module.exports = {
  createAdminRouter
};
