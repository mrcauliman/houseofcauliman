const express = require("express");
const { shell, esc, fmtDate, badge } = require("./ui");

function normalizeHandles(text) {
  return [...new Set(
    String(text || "")
      .split(/[\s,]+/)
      .map(v => v.trim().replace(/^@+/, "").toLowerCase())
      .filter(v => /^[a-z0-9_]{1,15}$/.test(v))
  )];
}

function csvCell(v) {
  return `"${String(v ?? "").replaceAll('"', '""')}"`;
}

function dateOnly(value) {
  if (!value) return "";

  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }

  const text = String(value);

  const match = text.match(/\d{4}-\d{2}-\d{2}/);

  if (match) {
    return match[0];
  }

  const parsed = new Date(value);

  if (!Number.isNaN(parsed.getTime())) {
    return parsed.toISOString().slice(0, 10);
  }

  return text.slice(0, 10);
}

function createWeeklyRouter({ pool }) {
  const router = express.Router();

  async function ensureTables() {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS nft_weekly_drops (
        id BIGSERIAL PRIMARY KEY,
        drop_date DATE NOT NULL UNIQUE,
        drop_name TEXT NOT NULL,
        frozen_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS nft_weekly_recipients (
        id BIGSERIAL PRIMARY KEY,
        drop_id BIGINT NOT NULL
          REFERENCES nft_weekly_drops(id)
          ON DELETE CASCADE,
        registration_id BIGINT NOT NULL,
        x_handle TEXT NOT NULL,
        xrpl_address TEXT NOT NULL,
        email TEXT,
        delivered BOOLEAN NOT NULL DEFAULT FALSE,
        delivery_tx_hash TEXT,
        UNIQUE(drop_id, registration_id)
      );
    `);
  }

  router.use(express.urlencoded({
    extended: false,
    limit: "100kb"
  }));

  router.get("/", async (req, res) => {
    await ensureTables();

    const drops = await pool.query(`
      SELECT
        d.id,
        d.drop_date,
        d.drop_name,
        d.frozen_at,
        COUNT(r.id)::int AS recipients
      FROM nft_weekly_drops d
      LEFT JOIN nft_weekly_recipients r
        ON r.drop_id = d.id
      GROUP BY d.id
      ORDER BY d.drop_date DESC
    `);

    const history = drops.rows.map(d => `
      <div class="person">

        <div>
          ${badge(String(d.recipients), "info")}
        </div>

        <div>
          <div class="handle">
            ${esc(d.drop_name)}
          </div>

          <div class="small">
            ${fmtDate(d.drop_date)}
          </div>
        </div>

        <div class="wallet-block small">
          ${d.recipients} frozen recipient${d.recipients === 1 ? "" : "s"}
        </div>

        <div class="control-block">
          <a
            class="btn secondary"
            href="/admin/weekly/drop/${d.id}"
          >
            VIEW DROP
          </a>
        </div>

      </div>
    `).join("");

    const body = `
      <div class="card">

        <div class="grid two">

          <div>
            <label>Drop date</label>

            <input
              type="date"
              name="drop_date"
              form="reconcileForm"
              required
            >
          </div>

          <div>
            <label>Drop name</label>

            <input
              type="text"
              name="drop_name"
              form="reconcileForm"
              placeholder="THE 52 #01 · THE BUILDER"
              required
            >
          </div>

        </div>

        <div style="margin-top:18px">

          <label>
            Active 𝕏 subscriber handles
          </label>

          <div class="small" style="margin-bottom:9px">
            Paste ACTIVE paid 𝕏 subscriber handles here.
            One @handle per line. Do not paste XRPL wallet addresses.
          </div>

          <textarea
            name="handles"
            form="reconcileForm"
            placeholder="@mrcauliman&#10;@subscriber2&#10;@subscriber3"
            required
          ></textarea>

        </div>

        <form
          id="reconcileForm"
          method="post"
          action="/admin/weekly/reconcile"
        ></form>

        <div style="margin-top:16px">

          <button
            class="btn primary"
            type="submit"
            form="reconcileForm"
          >
            COMPARE SUBSCRIBERS
          </button>

        </div>

      </div>

      <div class="card">

        <div class="handle" style="margin-bottom:12px">
          Frozen Drops
        </div>

        ${
          history ||
          `<div class="small">No weekly drops frozen yet.</div>`
        }

      </div>
    `;

    res.send(shell({
      title: "Weekly NFT Drops",
      subtitle:
        "Match active 𝕏 subscribers to registered XRPL wallets and build the weekly drop roster.",
      body,
      backHref: "/admin/"
    }));
  });

  router.post("/reconcile", async (req, res) => {
    await ensureTables();

    const handles = normalizeHandles(req.body.handles);
    const dropDate = String(req.body.drop_date || "");
    const dropName = String(req.body.drop_name || "").trim();

    if (!dropDate || !dropName) {
      return res.status(400).send(
        "Drop date and drop name are required."
      );
    }

    if (!handles.length) {
      return res.status(400).send(
        "No valid 𝕏 handles found. Paste active subscriber handles such as @mrcauliman, not XRPL wallet addresses."
      );
    }

    const registrations = await pool.query(`
      SELECT
        id,
        x_handle,
        x_handle_normalized,
        xrpl_address,
        email,
        eligible_week,
        wallet_verified,
        subscription_verified,
        status
      FROM nft_subscriber_registrations
      ORDER BY id
    `);

    const byHandle = new Map(
      registrations.rows.map(r => [
        r.x_handle_normalized,
        r
      ])
    );

    const ready = [];
    const missingWallet = [];
    const nextWeek = [];
    const excluded = [];

    for (const handle of handles) {
      const row = byHandle.get(handle);

      if (!row) {
        missingWallet.push(`@${handle}`);
        continue;
      }

      const eligible =
        dateOnly(row.eligible_week);

      if (eligible > dropDate) {
        nextWeek.push(row);
        continue;
      }

      if (row.status === "excluded") {
        excluded.push(row);
        continue;
      }

      ready.push(row);
    }

    const activeSet = new Set(handles);

    const notActive = registrations.rows.filter(r =>
      dateOnly(r.eligible_week) <= dropDate &&
      !activeSet.has(r.x_handle_normalized) &&
      r.status !== "excluded"
    );

    const readyRows = ready.map(r => `
      <div class="person">

        <div>
          <input
            class="check eligible-check"
            type="checkbox"
            name="registration_ids"
            value="${r.id}"
            data-wallet="${esc(r.xrpl_address)}"
            form="freezeForm"
            checked
          >
        </div>

        <div>

          <div class="handle">
            ${esc(r.x_handle)}
          </div>

          <div class="small">
            ${esc(r.email || "No email provided")}
          </div>

          <div
            style="
              margin-top:8px;
              display:flex;
              gap:6px;
              flex-wrap:wrap
            "
          >
            ${
              r.wallet_verified
                ? badge("Wallet verified", "good")
                : badge("Wallet registered", "info")
            }

            ${
              r.subscription_verified
                ? badge("Previously X verified", "good")
                : badge("Weekly match", "warn")
            }
          </div>

        </div>

        <div class="wallet-block">

          <div class="small">
            XRPL WALLET
          </div>

          <div class="wallet">
            ${esc(r.xrpl_address)}
          </div>

        </div>

        <div class="control-block">
          ${badge("ELIGIBLE", "good")}
        </div>

      </div>
    `).join("");

    const exceptionList = (items, type) => {
      if (!items.length) {
        return `<div class="small">None</div>`;
      }

      return items.map(item => {
        const text =
          typeof item === "string"
            ? item
            : item.x_handle;

        return `
          <div
            style="
              padding:10px 0;
              border-top:1px solid var(--line)
            "
          >
            ${badge(text, type)}
          </div>
        `;
      }).join("");
    };

    const body = `

      <div class="grid four">

        <div class="stat">
          <div class="num">${ready.length}</div>
          <div class="label">Eligible</div>
        </div>

        <div class="stat">
          <div class="num">${missingWallet.length}</div>
          <div class="label">Missing Wallet</div>
        </div>

        <div class="stat">
          <div class="num">${nextWeek.length}</div>
          <div class="label">Next Week</div>
        </div>

        <div class="stat">
          <div class="num">${notActive.length}</div>
          <div class="label">Not Active</div>
        </div>

      </div>

      <div class="card toolbar">

        <div class="actions">

          <button
            type="button"
            class="btn primary"
            data-action="select-eligible"
          >
            SELECT ALL ELIGIBLE
          </button>

          <button
            type="button"
            class="btn secondary"
            data-action="clear-eligible"
          >
            CLEAR ALL
          </button>

          <button
            type="button"
            class="btn secondary"
            data-action="copy-eligible-wallets"
          >
            COPY SELECTED WALLETS
          </button>

          <button
            class="btn primary"
            type="submit"
            form="freezeForm"
            id="freezeButton"
          >
            FREEZE SELECTED WALLETS
          </button>

        </div>

      </div>

      <div class="card">

        <div
          style="
            display:flex;
            justify-content:space-between;
            align-items:center;
            gap:12px;
            margin-bottom:8px
          "
        >
          <div class="handle">
            Ready for Drop
          </div>

          ${badge(`${ready.length} eligible`, "good")}
        </div>

        ${
          readyRows ||
          `<div class="small">No eligible wallets found.</div>`
        }

      </div>

      <form
        id="freezeForm"
        method="post"
        action="/admin/weekly/freeze"
      >

        <input
          type="hidden"
          name="drop_date"
          value="${esc(dropDate)}"
        >

        <input
          type="hidden"
          name="drop_name"
          value="${esc(dropName)}"
        >

      </form>

      <div class="grid two">

        <div class="card">

          <div class="handle">
            Missing Wallet Registration
          </div>

          <div class="small" style="margin:5px 0 12px">
            Active 𝕏 subscribers not found in House registration.
          </div>

          ${exceptionList(missingWallet, "bad")}

        </div>

        <div class="card">

          <div class="handle">
            Starts Next Week
          </div>

          <div class="small" style="margin:5px 0 12px">
            Registered after this drop's eligibility window.
          </div>

          ${exceptionList(nextWeek, "warn")}

        </div>

        <div class="card">

          <div class="handle">
            Registered But Not Active
          </div>

          <div class="small" style="margin:5px 0 12px">
            Has a registered wallet but was not in the active 𝕏 subscriber list.
          </div>

          ${exceptionList(notActive, "neutral")}

        </div>

        <div class="card">

          <div class="handle">
            Excluded
          </div>

          <div class="small" style="margin:5px 0 12px">
            Manually excluded registrations.
          </div>

          ${exceptionList(excluded, "bad")}

        </div>

      </div>
    `;

    const script = `
      function updateCount() {
        const selected =
          document.querySelectorAll(
            ".eligible-check:checked"
          ).length;

        const button =
          document.getElementById("freezeButton");

        button.textContent =
          "FREEZE " +
          selected +
          " SELECTED WALLET" +
          (selected === 1 ? "" : "S");

        button.disabled = selected === 0;
      }

      function selectEligible() {
        document
          .querySelectorAll(".eligible-check")
          .forEach(el => el.checked = true);

        updateCount();
      }

      function clearEligible() {
        document
          .querySelectorAll(".eligible-check")
          .forEach(el => el.checked = false);

        updateCount();
      }

      document
        .querySelectorAll(".eligible-check")
        .forEach(el =>
          el.addEventListener("change", updateCount)
        );

      updateCount();
    `;

    res.send(shell({
      title: dropName,
      subtitle:
        `Weekly reconciliation for ${fmtDate(dropDate)}`,
      body,
      script,
      backHref: "/admin/weekly/"
    }));
  });

  router.post("/freeze", async (req, res) => {
    await ensureTables();

    let ids = req.body.registration_ids || [];

    if (!Array.isArray(ids)) {
      ids = [ids];
    }

    ids = ids
      .map(Number)
      .filter(Number.isInteger);

    const dropDate = String(req.body.drop_date || "");
    const dropName = String(req.body.drop_name || "").trim();

    if (!ids.length || !dropDate || !dropName) {
      return res.status(400).send(
        "No recipients selected."
      );
    }

    const client = await pool.connect();

    try {
      await client.query("BEGIN");

      const drop = await client.query(`
        INSERT INTO nft_weekly_drops (
          drop_date,
          drop_name
        )
        VALUES ($1, $2)

        ON CONFLICT (drop_date)
        DO UPDATE SET
          drop_name = EXCLUDED.drop_name,
          frozen_at = NOW()

        RETURNING id
      `, [
        dropDate,
        dropName
      ]);

      const dropId = drop.rows[0].id;

      await client.query(`
        DELETE FROM nft_weekly_recipients
        WHERE drop_id = $1
      `, [dropId]);

      const selected = await client.query(`
        SELECT
          id,
          x_handle,
          xrpl_address,
          email
        FROM nft_subscriber_registrations
        WHERE
          id = ANY($1::bigint[])
          AND eligible_week <= $2
          AND status <> 'excluded'
      `, [
        ids,
        dropDate
      ]);

      for (const row of selected.rows) {
        await client.query(`
          INSERT INTO nft_weekly_recipients (
            drop_id,
            registration_id,
            x_handle,
            xrpl_address,
            email
          )
          VALUES ($1,$2,$3,$4,$5)
        `, [
          dropId,
          row.id,
          row.x_handle,
          row.xrpl_address,
          row.email
        ]);
      }

      await client.query("COMMIT");

      res.redirect(
        `/admin/weekly/drop/${dropId}`
      );

    } catch (error) {
      await client.query("ROLLBACK");
      throw error;

    } finally {
      client.release();
    }
  });

  router.get("/drop/:id", async (req, res) => {
    await ensureTables();

    const drop = await pool.query(`
      SELECT *
      FROM nft_weekly_drops
      WHERE id = $1
    `, [
      Number(req.params.id)
    ]);

    if (!drop.rows.length) {
      return res.sendStatus(404);
    }

    const recipients = await pool.query(`
      SELECT *
      FROM nft_weekly_recipients
      WHERE drop_id = $1
      ORDER BY x_handle
    `, [
      Number(req.params.id)
    ]);

    const d = drop.rows[0];

    const walletList = recipients.rows
      .map((r, i) =>
        `${i + 1}. ${r.x_handle}\n${r.xrpl_address}`
      )
      .join("\n\n");

    const scriptText =
`HOUSE OF CAULIMAN — WEEKLY NFT DROP PACKET

DROP
${d.drop_name}

DROP DATE
${dateOnly(d.drop_date)}

CONFIRMED XRPL RECIPIENTS
${recipients.rows.length}

${walletList}

JARVIS

This is the finalized House of Cauliman subscriber NFT drop packet.

Validate the recipient set for duplicate wallets, duplicate handles, invalid XRPL addresses, missing values, and eligibility conflicts.

Do not add anyone who is not included in this frozen recipient set.

Prepare the execution plan for this week's NFT distribution and give me the exact next production step.`;

    const recipientRows = recipients.rows.map(r => `
      <div
        class="person frozen-recipient"
        data-wallet="${esc(r.xrpl_address)}"
      >

        <div>
          ${r.delivered
            ? badge("✓", "good")
            : badge("•", "neutral")}
        </div>

        <div>
          <div class="handle">
            ${esc(r.x_handle)}
          </div>

          <div class="small">
            ${esc(r.email || "No email")}
          </div>
        </div>

        <div class="wallet-block wallet">
          ${esc(r.xrpl_address)}
        </div>

        <div class="control-block">

          <form
            method="post"
            action="/admin/weekly/drop/${d.id}/recipient/${r.id}"
          >

            <label>
              Delivery status
            </label>

            <select name="delivery_status">
              <option
                value="ready"
                ${!r.delivered ? "selected" : ""}
              >
                Ready
              </option>

              <option
                value="delivered"
                ${r.delivered ? "selected" : ""}
              >
                Delivered
              </option>
            </select>

            <div style="margin-top:8px">
              <input
                type="text"
                name="delivery_tx_hash"
                value="${esc(r.delivery_tx_hash || "")}"
                placeholder="XRPL transaction hash"
              >
            </div>

            <button
              class="btn primary"
              type="submit"
              style="margin-top:8px"
            >
              SAVE DELIVERY
            </button>

          </form>

        </div>

      </div>
    `).join("");

    const body = `

      <div class="grid four">

        <div class="stat">
          <div class="num">
            ${recipients.rows.length}
          </div>

          <div class="label">
            Frozen Wallets
          </div>
        </div>

        <div class="stat">
          <div class="num">
            ${
              recipients.rows.filter(
                r => r.delivered
              ).length
            }
          </div>

          <div class="label">
            Delivered
          </div>
        </div>

        <div class="stat">
          <div class="num">
            ${
              recipients.rows.filter(
                r => !r.delivered
              ).length
            }
          </div>

          <div class="label">
            Remaining
          </div>
        </div>

        <div class="stat">
          <div class="num">
            ${fmtDate(d.drop_date)}
          </div>

          <div class="label">
            Drop Date
          </div>
        </div>

      </div>

      <div class="card">

        <div class="actions">

          <a
            class="btn primary"
            href="/admin/weekly/drop/${d.id}/export.csv"
          >
            DOWNLOAD DROP CSV
          </a>

          <button
            class="btn secondary"
            type="button"
            data-action="copy-frozen-wallets"
          >
            COPY FROZEN WALLETS
          </button>

          <button
            class="btn secondary"
            type="button"
            data-action="copy-script"
          >
            COPY JARVIS SCRIPT
          </button>

        </div>

      </div>

      <div class="card">

        <div class="handle" style="margin-bottom:10px">
          JARVIS Drop Script
        </div>

        <textarea
          id="jarvisScript"
          class="scriptbox"
          rows="28"
          readonly
        >${esc(scriptText)}</textarea>

      </div>

      <div class="card">

        <div class="handle" style="margin-bottom:8px">
          Frozen Recipient Set
        </div>

        ${
          recipientRows ||
          `<div class="small">No recipients.</div>`
        }

      </div>
    `;

    const script = `
      async function copyScript() {
        const box =
          document.getElementById("jarvisScript");

        try {
          await navigator.clipboard.writeText(
            box.value
          );

          alert("JARVIS drop script copied.");
        } catch {
          box.select();
          document.execCommand("copy");
          alert("JARVIS drop script copied.");
        }
      }
    `;

    res.send(shell({
      title: d.drop_name,
      subtitle:
        `Frozen weekly drop · ${fmtDate(d.drop_date)}`,
      body,
      script,
      backHref: "/admin/weekly/"
    }));
  });

  router.post(
    "/drop/:dropId/recipient/:recipientId",
    async (req, res) => {
      await ensureTables();

      const dropId = Number(req.params.dropId);
      const recipientId = Number(req.params.recipientId);

      if (
        !Number.isInteger(dropId) ||
        !Number.isInteger(recipientId)
      ) {
        return res.sendStatus(400);
      }

      const delivered =
        req.body.delivery_status === "delivered";

      const txHash =
        String(req.body.delivery_tx_hash || "")
          .trim() || null;

      await pool.query(`
        UPDATE nft_weekly_recipients
        SET
          delivered = $1,
          delivery_tx_hash = $2
        WHERE
          id = $3
          AND drop_id = $4
      `, [
        delivered,
        txHash,
        recipientId,
        dropId
      ]);

      res.redirect(
        `/admin/weekly/drop/${dropId}`
      );
    }
  );

  router.get(
    "/drop/:id/export.csv",
    async (req, res) => {
      await ensureTables();

      const result = await pool.query(`
        SELECT
          x_handle,
          xrpl_address,
          email,
          delivered,
          delivery_tx_hash
        FROM nft_weekly_recipients
        WHERE drop_id = $1
        ORDER BY x_handle
      `, [
        Number(req.params.id)
      ]);

      const rows = [
        "x_handle,xrpl_address,email,delivered,delivery_tx_hash",

        ...result.rows.map(r =>
          [
            csvCell(r.x_handle),
            csvCell(r.xrpl_address),
            csvCell(r.email),
            csvCell(r.delivered),
            csvCell(r.delivery_tx_hash)
          ].join(",")
        )
      ];

      res.type("text/csv");

      res.setHeader(
        "Content-Disposition",
        'attachment; filename="house-weekly-drop.csv"'
      );

      res.send(rows.join("\n"));
    }
  );

  return router;
}

module.exports = {
  createWeeklyRouter
};
