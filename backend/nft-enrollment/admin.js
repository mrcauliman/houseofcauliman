const express = require("express");
const rateLimit = require("express-rate-limit");
const { shell, esc, fmtDate, badge } = require("./ui");

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

    const result = await pool.query(`
      SELECT *
      FROM nft_subscriber_registrations
      WHERE
        $1 = ''
        OR LOWER(x_handle) LIKE $2
        OR LOWER(COALESCE(email,'')) LIKE $2
        OR LOWER(xrpl_address) LIKE $2
      ORDER BY registered_at DESC
      LIMIT 500
    `, [q, `%${q}%`]);

    const walletChanges = await pool.query(`
      SELECT
        id,
        x_handle,
        old_xrpl_address,
        new_xrpl_address,
        requested_at
      FROM nft_wallet_change_requests
      WHERE status = 'pending'
      ORDER BY requested_at ASC
    `);

    const total = result.rows.length;

    const xVerified = result.rows.filter(
      r => r.subscription_verified
    ).length;

    const walletVerified = result.rows.filter(
      r => r.wallet_verified
    ).length;

    const active = result.rows.filter(
      r => r.status === "active"
    ).length;

    const people = result.rows.map(r => {
      const emailStatus = r.confirmation_email_sent
        ? badge("Email sent", "good")
        : badge("No email", "neutral");

      const xStatus = r.subscription_verified
        ? badge("𝕏 verified", "good")
        : badge("𝕏 pending", "warn");

      const walletStatus = r.wallet_verified
        ? badge("Wallet verified", "good")
        : badge("Wallet pending", "warn");


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
              ${xStatus}
              ${walletStatus}
            </div>

            <div class="small" style="margin-top:9px">
              Eligible ${fmtDate(r.eligible_week)}
            </div>
          </div>

          <div class="wallet-block">
            <div class="small">XRPL WALLET</div>
            <div class="wallet">
              ${esc(r.xrpl_address)}
            </div>
          </div>

          <div class="control-block">

            <form method="post" action="/admin/${r.id}">

              <div class="toggle-row">
                <span>𝕏 verified</span>

                <label class="switch">
                  <input
                    type="checkbox"
                    name="subscription_verified"
                    ${r.subscription_verified ? "checked" : ""}
                  >
                  <span class="slider"></span>
                </label>
              </div>

              <div class="toggle-row">
                <span>Wallet verified</span>

                <label class="switch">
                  <input
                    type="checkbox"
                    name="wallet_verified"
                    ${r.wallet_verified ? "checked" : ""}
                  >
                  <span class="slider"></span>
                </label>
              </div>


              <div style="margin:10px 0">
                <select name="status">
                  ${[
                    "pending",
                    "active",
                    "inactive",
                    "excluded"
                  ].map(s => `
                    <option
                      value="${s}"
                      ${r.status === s ? "selected" : ""}
                    >
                      ${s}
                    </option>
                  `).join("")}
                </select>
              </div>

              <button class="btn primary" type="submit">
                SAVE
              </button>

            </form>

          </div>

        </div>
      `;
    }).join("");

    const walletChangeRows = walletChanges.rows.map(r => `
      <div class="person">

        <div>
          ${badge("PENDING", "warn")}
        </div>

        <div>
          <div class="handle">
            ${esc(r.x_handle)}
          </div>

          <div class="small">
            Wallet change requested ${fmtDate(r.requested_at)}
          </div>
        </div>

        <div class="wallet-block">
          <div class="small">CURRENT WALLET</div>
          <div class="wallet">
            ${esc(r.old_xrpl_address)}
          </div>

          <div class="small" style="margin-top:10px">
            NEW XAMAN WALLET
          </div>
          <div class="wallet">
            ${esc(r.new_xrpl_address)}
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
    `).join("");

    const body = `

      ${
        walletChanges.rows.length
          ? `
            <div class="card">
              <div class="handle" style="margin-bottom:12px">
                Pending Wallet Changes
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
          <div class="num">${xVerified}</div>
          <div class="label">𝕏 Verified</div>
        </div>

        <div class="stat">
          <div class="num">${walletVerified}</div>
          <div class="label">Wallet Verified</div>
        </div>

        <div class="stat">
          <div class="num">${active}</div>
          <div class="label">Active</div>
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
              placeholder="Handle, email or XRPL wallet"
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
            class="btn primary"
            name="action"
            value="verify_x"
            form="bulkForm"
          >
            MARK 𝕏 VERIFIED
          </button>

          <button
            class="btn primary"
            name="action"
            value="verify_wallet"
            form="bulkForm"
          >
            MARK WALLET VERIFIED
          </button>

          <button
            class="btn primary"
            name="action"
            value="activate"
            form="bulkForm"
          >
            SET ACTIVE
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
      title: "Subscriber Administration",
      subtitle:
        "Manage registrations, verification and weekly NFT eligibility.",
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

    const action = String(req.body.action || "");

    if (action === "verify_x") {
      await pool.query(`
        UPDATE nft_subscriber_registrations
        SET
          subscription_verified = TRUE,
          updated_at = NOW()
        WHERE id = ANY($1::bigint[])
      `, [ids]);
    }

    if (action === "verify_wallet") {
      await pool.query(`
        UPDATE nft_subscriber_registrations
        SET
          wallet_verified = TRUE,
          updated_at = NOW()
        WHERE id = ANY($1::bigint[])
      `, [ids]);
    }

    if (action === "activate") {
      await pool.query(`
        UPDATE nft_subscriber_registrations
        SET
          status = 'active',
          updated_at = NOW()
        WHERE id = ANY($1::bigint[])
      `, [ids]);
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

    const client = await pool.connect();

    try {
      await client.query("BEGIN");

      const request = await client.query(`
        SELECT *
        FROM nft_wallet_change_requests
        WHERE id = $1
        FOR UPDATE
      `, [requestId]);

      if (!request.rows.length) {
        await client.query("ROLLBACK");
        return res.sendStatus(404);
      }

      const change = request.rows[0];

      if (change.status !== "pending") {
        await client.query("ROLLBACK");
        return res.status(409).send(
          "Wallet change request is no longer pending."
        );
      }

      const registration = await client.query(`
        SELECT id, xrpl_address
        FROM nft_subscriber_registrations
        WHERE id = $1
        FOR UPDATE
      `, [change.registration_id]);

      if (
        !registration.rows.length ||
        registration.rows[0].xrpl_address !== change.old_xrpl_address
      ) {
        await client.query("ROLLBACK");
        return res.status(409).send(
          "Subscriber wallet changed after this request was submitted."
        );
      }

      const duplicate = await client.query(`
        SELECT id
        FROM nft_subscriber_registrations
        WHERE
          xrpl_address = $1
          AND id <> $2
        LIMIT 1
      `, [
        change.new_xrpl_address,
        change.registration_id
      ]);

      if (duplicate.rows.length) {
        await client.query("ROLLBACK");
        return res.status(409).send(
          "New wallet is already assigned to another subscriber."
        );
      }

      await client.query(`
        UPDATE nft_subscriber_registrations
        SET
          xrpl_address = $1,
          wallet_verified = FALSE,
          updated_at = NOW()
        WHERE id = $2
      `, [
        change.new_xrpl_address,
        change.registration_id
      ]);

      await client.query(`
        UPDATE nft_wallet_change_requests
        SET
          status = 'approved',
          reviewed_at = NOW()
        WHERE id = $1
      `, [requestId]);

      await client.query("COMMIT");
      return res.redirect("/admin/");
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    } finally {
      client.release();
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

  router.post("/:id", async (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
      return res.sendStatus(400);
    }

    const allowedStatuses = new Set([
      "pending",
      "active",
      "inactive",
      "excluded"
    ]);

    const status = allowedStatuses.has(req.body.status)
      ? req.body.status
      : "pending";

    await pool.query(`
      UPDATE nft_subscriber_registrations
      SET
        subscription_verified = $1,
        wallet_verified = $2,
        status = $3,
        updated_at = NOW()
      WHERE id = $4
    `, [
      req.body.subscription_verified === "on",
      req.body.wallet_verified === "on",
      status,
      id
    ]);

    res.redirect("/admin/");
  });

  router.get("/export.csv", async (req, res) => {
    const result = await pool.query(`
      SELECT
        x_handle,
        xrpl_address,
        email,
        eligible_week,
        status,
        subscription_verified,
        wallet_verified,
        delivered
      FROM nft_subscriber_registrations
      ORDER BY registered_at
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
      'attachment; filename="house-nft-registrations.csv"'
    );

    res.send(csv);
  });

  return router;
}

module.exports = {
  createAdminRouter
};
