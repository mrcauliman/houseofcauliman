const express = require("express");

function esc(v) {
  return String(v ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

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
      <li>
        <a href="/admin/weekly/drop/${d.id}">
          ${esc(d.drop_date)} · ${esc(d.drop_name)}
        </a>
        · ${d.recipients} wallets
      </li>
    `).join("");

    res.send(`
      <h1>Weekly NFT Drop</h1>

      <p>
        Paste the current active 𝕏 subscriber handles.
        House will compare them against registered XRPL wallets.
      </p>

      <form method="post" action="/admin/weekly/reconcile">

        <label>Drop date</label><br>
        <input type="date" name="drop_date" required>
        <br><br>

        <label>Drop name</label><br>
        <input
          name="drop_name"
          placeholder="THE 52 #01 · THE BUILDER"
          required
        >
        <br><br>

        <label>Active 𝕏 subscriber handles</label><br>
        <textarea
          name="handles"
          rows="18"
          cols="60"
          placeholder="@handle1&#10;@handle2&#10;@handle3"
          required
        ></textarea>
        <br><br>

        <button type="submit">
          COMPARE SUBSCRIBERS
        </button>

      </form>

      <h2>Frozen Drops</h2>

      <ul>
        ${history || "<li>No drops frozen yet.</li>"}
      </ul>

      <p>
        <a href="/admin/">← Back to NFT Admin</a>
      </p>
    `);
  });

  router.post("/reconcile", async (req, res) => {
    await ensureTables();

    const handles = normalizeHandles(req.body.handles);
    const dropDate = String(req.body.drop_date || "");
    const dropName = String(req.body.drop_name || "").trim();

    if (!handles.length || !dropDate || !dropName) {
      return res.status(400).send("Missing drop information.");
    }

    const registrations = await pool.query(`
      SELECT
        id,
        x_handle,
        x_handle_normalized,
        xrpl_address,
        email,
        eligible_week
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

    for (const handle of handles) {
      const row = byHandle.get(handle);

      if (!row) {
        missingWallet.push(`@${handle}`);
        continue;
      }

      const eligible =
        String(row.eligible_week).slice(0, 10);

      if (eligible > dropDate) {
        nextWeek.push(row);
        continue;
      }

      ready.push(row);
    }

    const activeSet = new Set(handles);

    const notActive = registrations.rows.filter(r =>
      String(r.eligible_week).slice(0, 10) <= dropDate &&
      !activeSet.has(r.x_handle_normalized)
    );

    const readyRows = ready.map(r => `
      <tr>
        <td>${esc(r.x_handle)}</td>
        <td>${esc(r.xrpl_address)}</td>
      </tr>
    `).join("");

    res.send(`
      <h1>Weekly Reconciliation</h1>

      <h2>READY · ${ready.length}</h2>

      <table border="1" cellpadding="8">
        <tr>
          <th>𝕏 Handle</th>
          <th>XRPL Wallet</th>
        </tr>
        ${readyRows}
      </table>

      <h2>MISSING WALLET · ${missingWallet.length}</h2>
      <pre>${esc(missingWallet.join("\n") || "None")}</pre>

      <h2>NEXT WEEK · ${nextWeek.length}</h2>
      <pre>${esc(
        nextWeek.map(r => r.x_handle).join("\n") || "None"
      )}</pre>

      <h2>REGISTERED BUT NOT ACTIVE · ${notActive.length}</h2>
      <pre>${esc(
        notActive.map(r => r.x_handle).join("\n") || "None"
      )}</pre>

      <form method="post" action="/admin/weekly/freeze">

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

        <textarea
          name="handles"
          style="display:none"
        >${esc(handles.join("\n"))}</textarea>

        <button type="submit">
          FREEZE READY LIST
        </button>

      </form>

      <p>
        <a href="/admin/weekly/">
          ← Start over
        </a>
      </p>
    `);
  });

  router.post("/freeze", async (req, res) => {
    await ensureTables();

    const handles = normalizeHandles(req.body.handles);
    const dropDate = String(req.body.drop_date || "");
    const dropName = String(req.body.drop_name || "").trim();

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
          drop_name = EXCLUDED.drop_name

        RETURNING id
      `, [dropDate, dropName]);

      const dropId = drop.rows[0].id;

      await client.query(
        `DELETE FROM nft_weekly_recipients
         WHERE drop_id = $1`,
        [dropId]
      );

      if (handles.length) {
        const ready = await client.query(`
          SELECT
            id,
            x_handle,
            xrpl_address,
            email
          FROM nft_subscriber_registrations
          WHERE
            x_handle_normalized = ANY($1)
            AND eligible_week <= $2
        `, [handles, dropDate]);

        for (const row of ready.rows) {
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

    const drop = await pool.query(
      `SELECT * FROM nft_weekly_drops WHERE id=$1`,
      [Number(req.params.id)]
    );

    if (!drop.rows.length) {
      return res.sendStatus(404);
    }

    const recipients = await pool.query(`
      SELECT *
      FROM nft_weekly_recipients
      WHERE drop_id=$1
      ORDER BY x_handle
    `, [Number(req.params.id)]);

    const d = drop.rows[0];

    const walletList = recipients.rows
      .map((r, i) =>
        `${i + 1}. ${r.x_handle}\n${r.xrpl_address}`
      )
      .join("\n\n");

    const script = `HOUSE OF CAULIMAN — WEEKLY NFT DROP PACKET

DROP
${d.drop_name}

DROP DATE
${String(d.drop_date).slice(0,10)}

CONFIRMED XRPL RECIPIENTS
${recipients.rows.length}

${walletList}

JARVIS

This is the finalized House of Cauliman subscriber NFT drop packet.

Validate the recipient set for duplicates, invalid XRPL addresses, missing values, and eligibility conflicts.

Do not add anyone who is not included in this frozen recipient set.

Prepare the execution plan for this week's NFT distribution and give me the exact next production step.`;

    res.send(`
      <h1>${esc(d.drop_name)}</h1>

      <p>
        Frozen recipient count:
        <strong>${recipients.rows.length}</strong>
      </p>

      <p>
        <a href="/admin/weekly/drop/${d.id}/export.csv">
          DOWNLOAD DROP CSV
        </a>
      </p>

      <h2>JARVIS DROP SCRIPT</h2>

      <textarea
        rows="35"
        cols="90"
        readonly
      >${esc(script)}</textarea>

      <p>
        <a href="/admin/weekly/">
          ← Weekly Drops
        </a>
      </p>
    `);
  });

  router.get("/drop/:id/export.csv", async (req, res) => {
    await ensureTables();

    const result = await pool.query(`
      SELECT
        x_handle,
        xrpl_address,
        email
      FROM nft_weekly_recipients
      WHERE drop_id=$1
      ORDER BY x_handle
    `, [Number(req.params.id)]);

    const rows = [
      "x_handle,xrpl_address,email",
      ...result.rows.map(r =>
        [
          csvCell(r.x_handle),
          csvCell(r.xrpl_address),
          csvCell(r.email)
        ].join(",")
      )
    ];

    res.type("text/csv");

    res.setHeader(
      "Content-Disposition",
      'attachment; filename="house-weekly-drop.csv"'
    );

    res.send(rows.join("\n"));
  });

  return router;
}

module.exports = {
  createWeeklyRouter
};
