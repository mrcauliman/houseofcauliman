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

async function ensureWeeklyTables(pool) {
  await pool.query(`
      CREATE TABLE IF NOT EXISTS nft_weekly_drops (
        id BIGSERIAL PRIMARY KEY,
        drop_date DATE NOT NULL UNIQUE,
        drop_name TEXT NOT NULL,
        frozen_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );

      ALTER TABLE nft_weekly_drops
        ADD COLUMN IF NOT EXISTS metadata_uri TEXT;

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
        mint_status TEXT NOT NULL DEFAULT 'pending',
        mint_tx_hash TEXT,
        nftoken_id TEXT,
        mint_attempts INTEGER NOT NULL DEFAULT 0,
        mint_error TEXT,
        minted_at TIMESTAMPTZ,
        claim_offer_id TEXT,
        claim_offer_tx_hash TEXT,
        claim_offer_status TEXT NOT NULL DEFAULT 'pending',
        claim_attempts INTEGER NOT NULL DEFAULT 0,
        claim_error TEXT,
        claim_created_at TIMESTAMPTZ,
        claim_accepted_at TIMESTAMPTZ,
        UNIQUE(drop_id, registration_id)
      );

      ALTER TABLE nft_weekly_recipients
        ADD COLUMN IF NOT EXISTS
          mint_status TEXT NOT NULL DEFAULT 'pending';

      ALTER TABLE nft_weekly_recipients
        ADD COLUMN IF NOT EXISTS
          mint_tx_hash TEXT;

      ALTER TABLE nft_weekly_recipients
        ADD COLUMN IF NOT EXISTS
          nftoken_id TEXT;

      ALTER TABLE nft_weekly_recipients
        ADD COLUMN IF NOT EXISTS
          mint_attempts INTEGER NOT NULL DEFAULT 0;

      ALTER TABLE nft_weekly_recipients
        ADD COLUMN IF NOT EXISTS
          mint_error TEXT;

      ALTER TABLE nft_weekly_recipients
        ADD COLUMN IF NOT EXISTS
          minted_at TIMESTAMPTZ;

      ALTER TABLE nft_weekly_recipients
        ADD COLUMN IF NOT EXISTS claim_offer_id TEXT;

      ALTER TABLE nft_weekly_recipients
        ADD COLUMN IF NOT EXISTS claim_offer_tx_hash TEXT;

      ALTER TABLE nft_weekly_recipients
        ADD COLUMN IF NOT EXISTS
          claim_attempts INTEGER NOT NULL DEFAULT 0;

      ALTER TABLE nft_weekly_recipients
        ADD COLUMN IF NOT EXISTS claim_error TEXT;

      ALTER TABLE nft_weekly_recipients
        ADD COLUMN IF NOT EXISTS
          claim_offer_status TEXT NOT NULL DEFAULT 'pending';

      ALTER TABLE nft_weekly_recipients
        ADD COLUMN IF NOT EXISTS claim_created_at TIMESTAMPTZ;

      ALTER TABLE nft_weekly_recipients
        ADD COLUMN IF NOT EXISTS claim_accepted_at TIMESTAMPTZ;

      ALTER TABLE nft_weekly_recipients
        ADD COLUMN IF NOT EXISTS claim_accept_status TEXT
          NOT NULL DEFAULT 'idle';

      ALTER TABLE nft_weekly_recipients
        ADD COLUMN IF NOT EXISTS claim_accept_payload_uuid TEXT;

      ALTER TABLE nft_weekly_recipients
        ADD COLUMN IF NOT EXISTS claim_accept_tx_hash TEXT;

      ALTER TABLE nft_weekly_recipients
        ADD COLUMN IF NOT EXISTS claim_accept_attempts INTEGER
          NOT NULL DEFAULT 0;

      ALTER TABLE nft_weekly_recipients
        ADD COLUMN IF NOT EXISTS claim_accept_error TEXT;

      CREATE UNIQUE INDEX IF NOT EXISTS
        nft_weekly_recipients_mint_tx_hash_uidx
      ON nft_weekly_recipients (mint_tx_hash)
      WHERE mint_tx_hash IS NOT NULL;

      CREATE UNIQUE INDEX IF NOT EXISTS
        nft_weekly_recipients_nftoken_id_uidx
      ON nft_weekly_recipients (nftoken_id)
      WHERE nftoken_id IS NOT NULL;

      CREATE TABLE IF NOT EXISTS nft_weekly_mint_exceptions (
        id BIGSERIAL PRIMARY KEY,
        drop_id BIGINT NOT NULL
          REFERENCES nft_weekly_drops(id)
          ON DELETE CASCADE,
        registration_id BIGINT NOT NULL,
        reason_code TEXT NOT NULL,
        justification TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'approved',
        approved_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        approved_by TEXT,
        recipient_id BIGINT
          REFERENCES nft_weekly_recipients(id)
          ON DELETE RESTRICT,
        edition_before INTEGER NOT NULL,
        edition_after INTEGER,
        nftoken_id TEXT,
        mint_tx_hash TEXT,
        minted_at TIMESTAMPTZ,
        completed_at TIMESTAMPTZ,
        failure_reason TEXT,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        UNIQUE(drop_id, registration_id)
      );

      ALTER TABLE nft_weekly_mint_exceptions
        ADD COLUMN IF NOT EXISTS edition_after INTEGER;

      ALTER TABLE nft_weekly_mint_exceptions
        ADD COLUMN IF NOT EXISTS approved_by TEXT;

      CREATE UNIQUE INDEX IF NOT EXISTS
        nft_weekly_mint_exceptions_recipient_uidx
      ON nft_weekly_mint_exceptions (recipient_id)
      WHERE recipient_id IS NOT NULL;

      CREATE UNIQUE INDEX IF NOT EXISTS
        nft_weekly_mint_exceptions_nftoken_uidx
      ON nft_weekly_mint_exceptions (nftoken_id)
      WHERE nftoken_id IS NOT NULL;

      CREATE TABLE IF NOT EXISTS nft_weekly_public_copies (
        id BIGSERIAL PRIMARY KEY,
        drop_id BIGINT NOT NULL UNIQUE
          REFERENCES nft_weekly_drops(id)
          ON DELETE CASCADE,
        destination TEXT NOT NULL DEFAULT 'monolith_public',
        mint_status TEXT NOT NULL DEFAULT 'pending',
        mint_tx_hash TEXT,
        nftoken_id TEXT,
        mint_attempts INTEGER NOT NULL DEFAULT 0,
        mint_error TEXT,
        minted_at TIMESTAMPTZ,
        monolith_listing_id TEXT,
        monolith_listing_status TEXT,
        monolith_auth_payload_uuid TEXT,
        monolith_auth_sign_url TEXT,
        monolith_sell_payload_uuid TEXT,
        monolith_sell_sign_url TEXT,
        authorization_tx_hash TEXT,
        offer_index TEXT,
        listed_at TIMESTAMPTZ
      );

      ALTER TABLE nft_weekly_public_copies
        ADD COLUMN IF NOT EXISTS monolith_auth_payload_uuid TEXT;

      ALTER TABLE nft_weekly_public_copies
        ADD COLUMN IF NOT EXISTS monolith_auth_sign_url TEXT;

      ALTER TABLE nft_weekly_public_copies
        ADD COLUMN IF NOT EXISTS monolith_sell_payload_uuid TEXT;

      ALTER TABLE nft_weekly_public_copies
        ADD COLUMN IF NOT EXISTS monolith_sell_sign_url TEXT;

      CREATE UNIQUE INDEX IF NOT EXISTS
        nft_weekly_public_copies_mint_tx_hash_uidx
      ON nft_weekly_public_copies (mint_tx_hash)
      WHERE mint_tx_hash IS NOT NULL;

      CREATE UNIQUE INDEX IF NOT EXISTS
        nft_weekly_public_copies_nftoken_id_uidx
      ON nft_weekly_public_copies (nftoken_id)
      WHERE nftoken_id IS NOT NULL;
  `);
}

function createWeeklyRouter({ pool }) {
  const router = express.Router();

  const ensureTables = () => ensureWeeklyTables(pool);

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
          ${d.recipients} subscriber recipient${d.recipients === 1 ? "" : "s"}
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

      const mintActivity = await client.query(`
        SELECT EXISTS (
          SELECT 1
          FROM nft_weekly_recipients
          WHERE
            drop_id = $1
            AND (
              mint_attempts > 0
              OR mint_tx_hash IS NOT NULL
              OR nftoken_id IS NOT NULL
              OR minted_at IS NOT NULL
              OR mint_status <> 'pending'
            )
        )
        OR EXISTS (
          SELECT 1
          FROM nft_weekly_public_copies
          WHERE
            drop_id = $1
            AND (
              mint_attempts > 0
              OR mint_tx_hash IS NOT NULL
              OR nftoken_id IS NOT NULL
              OR minted_at IS NOT NULL
              OR mint_status <> 'pending'
            )
        ) AS locked
      `, [dropId]);

      if (mintActivity.rows[0].locked) {
        await client.query("ROLLBACK");

        return res
          .status(409)
          .type("text/plain")
          .send(
            "This drop already has mint activity and cannot be re-frozen."
          );
      }

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

      await client.query(`
        INSERT INTO nft_weekly_public_copies (
          drop_id
        )
        VALUES ($1)
        ON CONFLICT (drop_id)
        DO NOTHING
      `, [dropId]);

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

  router.post(
    "/drop/:id/exceptional-mint",
    async (req, res) => {
      await ensureTables();

      const dropId = Number(req.params.id);
      const registrationId =
        Number(req.body.registration_id);

      const reasonCode =
        String(req.body.reason_code || "").trim();

      const justification =
        String(req.body.justification || "")
          .trim()
          .slice(0, 3000);

      const confirmation =
        String(req.body.confirmation || "").trim();

      const approvedBy =
        String(req.houseAdminAddress || "").trim();

      const allowedReasons = new Set([
        "verified_system_failure",
        "verified_registration_error",
        "verified_roster_omission",
        "verified_admin_error",
        "approved_subscriber_remediation",
        "admin_approved_exception"
      ]);

      if (
        !Number.isSafeInteger(dropId) ||
        dropId < 1 ||
        !Number.isSafeInteger(registrationId) ||
        registrationId < 1
      ) {
        return res.status(400).type("text/plain").send(
          "Invalid drop or registration."
        );
      }

      if (!approvedBy) {
        return res.status(401).type("text/plain").send(
          "Authenticated admin wallet is required."
        );
      }

      if (!allowedReasons.has(reasonCode)) {
        return res.status(400).type("text/plain").send(
          "A valid exceptional mint reason is required."
        );
      }

      if (justification.length < 10) {
        return res.status(400).type("text/plain").send(
          "A written justification of at least 10 characters is required."
        );
      }

      if (confirmation !== "AUTHORIZE EXCEPTIONAL MINT") {
        return res.status(400).type("text/plain").send(
          "Type AUTHORIZE EXCEPTIONAL MINT exactly to approve."
        );
      }

      const client = await pool.connect();

      try {
        await client.query("BEGIN");

        const drop = await client.query(`
          SELECT
            id,
            drop_date,
            drop_name
          FROM nft_weekly_drops
          WHERE id = $1
          FOR UPDATE
        `, [dropId]);

        if (!drop.rowCount) {
          await client.query("ROLLBACK");
          return res.sendStatus(404);
        }

        const registration = await client.query(`
          SELECT
            id,
            x_handle,
            xrpl_address,
            email,
            eligible_week,
            status
          FROM nft_subscriber_registrations
          WHERE id = $1
          FOR UPDATE
        `, [registrationId]);

        if (!registration.rowCount) {
          await client.query("ROLLBACK");
          return res.status(404).type("text/plain").send(
            "Subscriber registration not found."
          );
        }

        const reg = registration.rows[0];

        if (reg.status === "excluded") {
          await client.query("ROLLBACK");
          return res.status(409).type("text/plain").send(
            "Subscriber is excluded. Review the registration before authorizing a mint."
          );
        }

        const existingRecipient = await client.query(`
          SELECT
            id,
            mint_status,
            mint_tx_hash,
            nftoken_id
          FROM nft_weekly_recipients
          WHERE
            drop_id = $1
            AND registration_id = $2
          LIMIT 1
          FOR UPDATE
        `, [dropId, registrationId]);

        if (existingRecipient.rowCount) {
          await client.query("ROLLBACK");

          const row = existingRecipient.rows[0];

          return res.status(409).type("text/plain").send(
            "This subscriber already has a recipient record for this drop. " +
            "Do not create another NFT. Recipient " +
            row.id +
            ", mint status " +
            row.mint_status +
            (row.nftoken_id
              ? ", NFT " + row.nftoken_id
              : "") +
            "."
          );
        }

        const existingException = await client.query(`
          SELECT id, status
          FROM nft_weekly_mint_exceptions
          WHERE
            drop_id = $1
            AND registration_id = $2
          LIMIT 1
          FOR UPDATE
        `, [dropId, registrationId]);

        if (existingException.rowCount) {
          await client.query("ROLLBACK");
          return res.status(409).type("text/plain").send(
            "An exceptional mint authorization already exists for this subscriber and drop."
          );
        }

        const supply = await client.query(`
          SELECT
            (
              SELECT COUNT(*)::int
              FROM nft_weekly_recipients
              WHERE
                drop_id = $1
                AND mint_status = 'minted'
                AND nftoken_id IS NOT NULL
            )
            +
            (
              SELECT COUNT(*)::int
              FROM nft_weekly_public_copies
              WHERE
                drop_id = $1
                AND mint_status = 'minted'
                AND nftoken_id IS NOT NULL
            )
            AS verified_edition
        `, [dropId]);

        const editionBefore =
          Number(supply.rows[0]?.verified_edition || 0);

        const recipient = await client.query(`
          INSERT INTO nft_weekly_recipients (
            drop_id,
            registration_id,
            x_handle,
            xrpl_address,
            email
          )
          VALUES ($1,$2,$3,$4,$5)
          RETURNING id
        `, [
          dropId,
          reg.id,
          reg.x_handle,
          reg.xrpl_address,
          reg.email
        ]);

        const recipientId = recipient.rows[0].id;

        await client.query(`
          INSERT INTO nft_weekly_mint_exceptions (
            drop_id,
            registration_id,
            reason_code,
            justification,
            status,
            approved_by,
            recipient_id,
            edition_before
          )
          VALUES (
            $1,$2,$3,$4,'approved',$5,$6,$7
          )
        `, [
          dropId,
          registrationId,
          reasonCode,
          justification,
          approvedBy,
          recipientId,
          editionBefore
        ]);

        await client.query("COMMIT");

        return res.redirect(
          303,
          `/admin/weekly/drop/${dropId}?exception=approved`
        );
      } catch (error) {
        try {
          await client.query("ROLLBACK");
        } catch {}

        if (error?.code === "23505") {
          return res.status(409).type("text/plain").send(
            "Duplicate protection blocked this exceptional mint authorization."
          );
        }

        throw error;
      } finally {
        client.release();
      }
    }
  );

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

    const editionResult = await pool.query(`
      SELECT
        (
          SELECT COUNT(*)::int
          FROM nft_weekly_recipients
          WHERE
            drop_id = $1
            AND mint_status = 'minted'
            AND nftoken_id IS NOT NULL
        ) AS subscriber_minted,
        (
          SELECT COUNT(*)::int
          FROM nft_weekly_public_copies
          WHERE
            drop_id = $1
            AND mint_status = 'minted'
            AND nftoken_id IS NOT NULL
        ) AS public_minted
    `, [d.id]);

    const subscriberMinted =
      Number(editionResult.rows[0]?.subscriber_minted || 0);

    const publicMinted =
      Number(editionResult.rows[0]?.public_minted || 0);

    const verifiedEdition =
      subscriberMinted + publicMinted;

    const exceptionCandidates = await pool.query(`
      SELECT
        r.id,
        r.x_handle,
        r.xrpl_address,
        r.email,
        r.eligible_week,
        r.status
      FROM nft_subscriber_registrations r
      WHERE
        r.status <> 'excluded'
        AND NOT EXISTS (
          SELECT 1
          FROM nft_weekly_recipients wr
          WHERE
            wr.drop_id = $1
            AND wr.registration_id = r.id
        )
        AND NOT EXISTS (
          SELECT 1
          FROM nft_weekly_mint_exceptions e
          WHERE
            e.drop_id = $1
            AND e.registration_id = r.id
        )
      ORDER BY LOWER(r.x_handle), r.id
    `, [d.id]);

    const exceptions = await pool.query(`
      SELECT
        e.*,
        r.x_handle,
        r.xrpl_address
      FROM nft_weekly_mint_exceptions e
      LEFT JOIN nft_weekly_recipients r
        ON r.id = e.recipient_id
      WHERE e.drop_id = $1
      ORDER BY e.created_at DESC, e.id DESC
    `, [d.id]);

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

Use this subscriber recipient set as the normal distribution authority. Do not add another recipient unless they have a recorded exceptional mint authorization in THE 52 administration.

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
          <div style="display:flex;gap:6px;flex-wrap:wrap">
            ${
              r.delivered
                ? badge("DELIVERED / OWNED", "good")
                : r.claim_offer_status === "blocked"
                ? badge("WALLET INACTIVE / BLOCKED", "warn")
                : r.claim_error || r.claim_accept_error
                ? badge("CLAIM ERROR", "warn")
                : r.mint_error
                ? badge("MINT ERROR", "warn")
                : r.mint_status !== "minted"
                ? badge("READY TO MINT", "neutral")
                : r.claim_offer_status === "open"
                ? badge("CLAIM OPEN", "neutral")
                : r.claim_accept_status === "pending" ||
                  r.claim_accept_status === "submitted"
                ? badge("CLAIM SUBMITTING", "neutral")
                : r.claim_offer_status === "accepted"
                ? badge("NEEDS RECONCILIATION", "warn")
                : badge("CLAIM READY", "neutral")
            }
          </div>

          ${
            r.nftoken_id
              ? `<div class="small" style="margin-top:8px">
                   NFT ${esc(r.nftoken_id)}
                 </div>`
              : ""
          }

          ${
            r.mint_tx_hash
              ? `<div class="small" style="margin-top:5px">
                   Mint TX ${esc(r.mint_tx_hash)}
                 </div>`
              : ""
          }

          ${
            r.claim_offer_id
              ? `<div class="small" style="margin-top:5px">
                   Claim ${esc(r.claim_offer_id)}
                 </div>`
              : ""
          }

          ${
            r.claim_error || r.claim_accept_error || r.mint_error
              ? `<div class="small" style="margin-top:8px">
                   ${esc(
                     r.claim_error ||
                     r.claim_accept_error ||
                     r.mint_error
                   )}
                 </div>`
              : ""
          }
        </div>

      </div>
    `).join("");

    const body = `

      <div style="margin-bottom:14px">
        <a
          class="btn secondary"
          href="/admin/weekly/"
        >
          ← BACK TO WEEKLY DROPS
        </a>
      </div>

      <div class="grid four">

        <div class="stat">
          <div class="num">
            ${recipients.rows.length}
          </div>

          <div class="label">
            Subscriber Recipients
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
            COPY SUBSCRIBER WALLETS
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
          Verified Edition
        </div>

        <div class="grid four">

          <div class="stat">
            <div class="num">${subscriberMinted}</div>
            <div class="label">Subscriber Minted</div>
          </div>

          <div class="stat">
            <div class="num">${publicMinted}</div>
            <div class="label">Public Minted</div>
          </div>

          <div class="stat">
            <div class="num">${verifiedEdition}</div>
            <div class="label">Verified Edition</div>
          </div>

          <div class="stat">
            <div class="num">${exceptions.rows.length}</div>
            <div class="label">Exceptional Authorizations</div>
          </div>

        </div>

        <div
          class="small"
          style="margin-top:12px"
        >
          Verified edition is derived from successful subscriber
          and public mints. Authorization alone does not increase supply.
        </div>

      </div>

      <div class="card">

        <div class="handle" style="margin-bottom:8px">
          Exceptional Subscriber Mint
        </div>

        <div class="small" style="margin-bottom:14px">
          Use only for a verified omission, system failure,
          registration error, administrative error, approved
          subscriber remediation, or another explicitly approved
          subscriber exception. Claim and delivery problems must
          be repaired against the existing NFT instead.
          <br><br>
          <strong>Authorization does not mint an NFT immediately.</strong>
          It creates an audited exceptional mint authorization and adds
          the subscriber to the controlled mint queue. The NFT is minted
          only when the mint runner executes the authorized recipient.
        </div>

        ${
          exceptionCandidates.rows.length
            ? `
              <form
                method="post"
                action="/admin/weekly/drop/${d.id}/exceptional-mint"
              >

                <label>Subscriber registration</label>

                <select
                  name="registration_id"
                  required
                >
                  <option value="">
                    Select subscriber
                  </option>

                  ${exceptionCandidates.rows.map(r => `
                    <option value="${esc(r.id)}">
                      ${esc(r.x_handle)}
                      · ${esc(r.xrpl_address)}
                      · eligible ${esc(dateOnly(r.eligible_week))}
                    </option>
                  `).join("")}
                </select>

                <label style="margin-top:12px">
                  Reason
                </label>

                <select
                  name="reason_code"
                  required
                >
                  <option value="">
                    Select reason
                  </option>

                  <option value="verified_system_failure">
                    Verified system failure
                  </option>

                  <option value="verified_registration_error">
                    Verified registration error
                  </option>

                  <option value="verified_roster_omission">
                    Verified roster omission
                  </option>

                  <option value="verified_admin_error">
                    Verified administrative error
                  </option>

                  <option value="approved_subscriber_remediation">
                    Approved subscriber remediation
                  </option>

                  <option value="admin_approved_exception">
                    Admin approved subscriber exception
                  </option>
                </select>

                <label style="margin-top:12px">
                  Written justification
                </label>

                <textarea
                  name="justification"
                  rows="5"
                  maxlength="3000"
                  required
                  placeholder="Document exactly why this subscriber requires an exceptional mint."
                ></textarea>

                <div
                  class="small"
                  style="margin-top:12px"
                >
                  Current verified edition
                  <strong>${verifiedEdition}</strong>.
                  If this authorization is later minted successfully,
                  verified edition becomes
                  <strong>${verifiedEdition + 1}</strong>.
                </div>

                <label style="margin-top:12px">
                  Confirmation
                </label>

                <input
                  type="text"
                  name="confirmation"
                  autocomplete="off"
                  required
                  placeholder="AUTHORIZE EXCEPTIONAL MINT"
                >

                <div
                  class="small"
                  style="margin-top:6px"
                >
                  Type <strong>AUTHORIZE EXCEPTIONAL MINT</strong>
                  exactly to confirm. This creates the authorization.
                  It does not submit an XRPL mint transaction.
                </div>

                <button
                  class="btn primary"
                  type="submit"
                  style="margin-top:12px"
                >
                  AUTHORIZE EXCEPTIONAL MINT
                </button>

              </form>
            `
            : `
              <div class="small">
                No subscriber registrations are currently available
                for exceptional recipient authorization.
              </div>
            `
        }

      </div>

      <div class="card">

        <div class="handle" style="margin-bottom:8px">
          Exceptional Mint Audit
        </div>

        ${
          exceptions.rows.length
            ? exceptions.rows.map(e => `
                <div
                  class="person"
                  style="margin-bottom:10px"
                >
                  <div>
                    ${badge(
                      String(e.status || "approved").toUpperCase(),
                      e.status === "minted" ? "good" : "neutral"
                    )}
                  </div>

                  <div>
                    <div class="handle">
                      ${esc(e.x_handle || `Registration ${e.registration_id}`)}
                    </div>

                    <div class="small">
                      ${esc(e.reason_code)}
                    </div>

                    <div class="small" style="margin-top:5px">
                      ${esc(e.justification)}
                    </div>
                  </div>

                  <div class="wallet-block wallet">
                    ${esc(e.xrpl_address || "")}
                  </div>

                  <div class="control-block">
                    <div class="small">
                      Edition ${esc(e.edition_before)}
                      ${e.edition_after != null
                        ? ` → ${esc(e.edition_after)}`
                        : " → pending"}
                    </div>

                    <div class="small" style="margin-top:5px">
                      Approved by
                      ${e.approved_by
                        ? esc(e.approved_by)
                        : "Historical authorization · approver not captured"}
                    </div>

                    ${
                      e.nftoken_id
                        ? `<div class="small" style="margin-top:5px">
                             NFT ${esc(e.nftoken_id)}
                           </div>`
                        : ""
                    }

                    ${
                      e.mint_tx_hash
                        ? `<div class="small" style="margin-top:5px">
                             Mint TX ${esc(e.mint_tx_hash)}
                           </div>`
                        : ""
                    }
                  </div>
                </div>
              `).join("")
            : `
              <div class="small">
                No exceptional mint authorizations for this drop.
              </div>
            `
        }

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
  createWeeklyRouter,
  ensureWeeklyTables
};
