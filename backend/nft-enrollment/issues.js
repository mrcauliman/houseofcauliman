const express = require("express");
const crypto = require("crypto");
const fs = require("fs/promises");
const path = require("path");
const rateLimit = require("express-rate-limit");
const { Client } = require("xrpl");

const ISSUE_ROOT =
  "/opt/house-the52-private/issues";

const XRPL_WS =
  process.env.THE52_XRPL_WS ||
  process.env.XRPL_WS ||
  "wss://xrplcluster.com";

const MAX_SCREENSHOTS = 5;
const MAX_SCREENSHOT_BYTES = 5 * 1024 * 1024;

const ISSUE_TYPES = new Set([
  "did_not_receive",
  "claim_not_working",
  "wallet_changed",
  "wrong_wallet",
  "nft_not_showing",
  "other"
]);

const ISSUE_STATUSES = new Set([
  "open",
  "investigating",
  "waiting_on_subscriber",
  "action_required",
  "resolved"
]);

function reportId() {
  const stamp = new Date()
    .toISOString()
    .slice(0, 10)
    .replaceAll("-", "");

  return (
    "T52-" +
    stamp +
    "-" +
    crypto.randomBytes(5)
      .toString("hex")
      .toUpperCase()
  );
}

function detectImage(buffer) {
  if (
    buffer.length >= 8 &&
    buffer.subarray(0, 8).equals(
      Buffer.from([
        0x89, 0x50, 0x4e, 0x47,
        0x0d, 0x0a, 0x1a, 0x0a
      ])
    )
  ) {
    return {
      extension: "png",
      mime: "image/png"
    };
  }

  if (
    buffer.length >= 3 &&
    buffer[0] === 0xff &&
    buffer[1] === 0xd8 &&
    buffer[2] === 0xff
  ) {
    return {
      extension: "jpg",
      mime: "image/jpeg"
    };
  }

  if (
    buffer.length >= 12 &&
    buffer.toString("ascii", 0, 4) === "RIFF" &&
    buffer.toString("ascii", 8, 12) === "WEBP"
  ) {
    return {
      extension: "webp",
      mime: "image/webp"
    };
  }

  return null;
}

async function ensureIssueTables(pool) {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS the52_delivery_issues (
      id BIGSERIAL PRIMARY KEY,
      report_id TEXT NOT NULL UNIQUE,

      registration_id BIGINT
        REFERENCES nft_subscriber_registrations(id),

      recipient_id BIGINT
        REFERENCES nft_weekly_recipients(id),

      drop_id BIGINT
        REFERENCES nft_weekly_drops(id),

      x_handle TEXT,
      xrpl_address TEXT NOT NULL,

      issue_type TEXT NOT NULL,
      description TEXT NOT NULL,

      status TEXT NOT NULL DEFAULT 'open',

      release_day BOOLEAN NOT NULL DEFAULT FALSE,

      diagnostic_registration_found BOOLEAN,
      diagnostic_frozen BOOLEAN,
      diagnostic_minted BOOLEAN,
      diagnostic_claim_status TEXT,
      diagnostic_delivered BOOLEAN,
      diagnostic_owned BOOLEAN,
      diagnostic_wallet_active BOOLEAN,
      diagnostic_error TEXT,

      admin_notes TEXT,

      submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      resolved_at TIMESTAMPTZ
    );

    CREATE INDEX IF NOT EXISTS
      idx_the52_delivery_issues_status
    ON the52_delivery_issues (
      status,
      submitted_at DESC
    );

    CREATE INDEX IF NOT EXISTS
      idx_the52_delivery_issues_wallet
    ON the52_delivery_issues (
      xrpl_address,
      submitted_at DESC
    );

    CREATE TABLE IF NOT EXISTS
      the52_delivery_issue_screenshots (
        id BIGSERIAL PRIMARY KEY,

        issue_id BIGINT NOT NULL
          REFERENCES the52_delivery_issues(id)
          ON DELETE CASCADE,

        storage_name TEXT NOT NULL UNIQUE,
        mime_type TEXT NOT NULL,
        byte_size INTEGER NOT NULL,

        uploaded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );

    CREATE INDEX IF NOT EXISTS
      idx_the52_issue_screenshots_issue
    ON the52_delivery_issue_screenshots(issue_id);

    CREATE TABLE IF NOT EXISTS
      the52_delivery_issue_events (
        id BIGSERIAL PRIMARY KEY,

        issue_id BIGINT NOT NULL
          REFERENCES the52_delivery_issues(id)
          ON DELETE CASCADE,

        event_type TEXT NOT NULL,
        from_status TEXT,
        to_status TEXT,
        note TEXT,

        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );

    CREATE INDEX IF NOT EXISTS
      idx_the52_issue_events_issue
    ON the52_delivery_issue_events(
      issue_id,
      created_at
    );
  `);
}

async function ledgerDiagnostics(wallet, nftokenId) {
  const client = new Client(XRPL_WS);

  let walletActive = null;
  let owned = null;

  try {
    await client.connect();

    try {
      await client.request({
        command: "account_info",
        account: wallet,
        ledger_index: "validated"
      });

      walletActive = true;
    } catch (error) {
      const result =
        error?.data?.error ||
        error?.data?.error_message ||
        error?.message ||
        "";

      if (
        String(result).includes("actNotFound") ||
        String(result).includes("Account not found")
      ) {
        walletActive = false;
      } else {
        throw error;
      }
    }

    if (walletActive && nftokenId) {
      owned = false;
      let marker = undefined;

      do {
        const response = await client.request({
          command: "account_nfts",
          account: wallet,
          ledger_index: "validated",
          limit: 400,
          ...(marker ? { marker } : {})
        });

        const nfts =
          response.result?.account_nfts || [];

        if (
          nfts.some(nft =>
            String(nft.NFTokenID || "") ===
            String(nftokenId)
          )
        ) {
          owned = true;
          break;
        }

        marker = response.result?.marker;
      } while (marker);
    }

    return {
      walletActive,
      owned,
      error: null
    };
  } catch (error) {
    return {
      walletActive,
      owned,
      error:
        String(error?.message || error)
          .slice(0, 1000)
    };
  } finally {
    if (client.isConnected()) {
      await client.disconnect().catch(() => {});
    }
  }
}

async function findRegistration(pool, wallet) {
  const result = await pool.query(`
    SELECT
      id,
      x_handle,
      xrpl_address
    FROM nft_subscriber_registrations
    WHERE LOWER(xrpl_address) = LOWER($1)
    ORDER BY id DESC
    LIMIT 1
  `, [wallet]);

  return result.rows[0] || null;
}

async function findRecipientForDrop(
  pool,
  registrationId,
  dropId
) {
  if (!registrationId || !dropId) {
    return null;
  }

  const result = await pool.query(`
    SELECT
      wr.*,
      d.drop_date,
      d.drop_name
    FROM nft_weekly_recipients wr
    JOIN nft_weekly_drops d
      ON d.id = wr.drop_id
    WHERE
      wr.registration_id = $1
      AND wr.drop_id = $2
    LIMIT 1
  `, [
    registrationId,
    dropId
  ]);

  return result.rows[0] || null;
}

async function buildDiagnostics(
  pool,
  wallet,
  dropId
) {
  const registration =
    await findRegistration(pool, wallet);

  const recipient =
    await findRecipientForDrop(
      pool,
      registration?.id || null,
      dropId
    );

  const ledger = await ledgerDiagnostics(
    wallet,
    recipient?.nftoken_id || null
  );

  return {
    registration,
    recipient,
    walletActive: ledger.walletActive,
    owned: ledger.owned,
    error: ledger.error
  };
}

function createIssueRouter({
  pool,
  getSession,
  safeEqual
}) {
  const router = express.Router();

  const issueLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 20,
    standardHeaders: true,
    legacyHeaders: false
  });

  const uploadLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 30,
    standardHeaders: true,
    legacyHeaders: false
  });

  router.get(
    "/issues/options",
    issueLimiter,
    async (req, res) => {
      try {
        const session = await getSession(req);

        res.setHeader("Cache-Control", "no-store");

        if (!session) {
          return res.status(401).json({
            ok: false,
            signedIn: false
          });
        }

        const registration =
          await findRegistration(
            pool,
            session.xrpl_address
          );

        if (!registration) {
          return res.json({
            ok: true,
            signedIn: true,
            drops: []
          });
        }

        const result = await pool.query(`
          SELECT
            d.id,
            d.drop_date,
            d.drop_name,
            wr.id AS recipient_id,
            wr.mint_status,
            wr.claim_offer_status,
            wr.delivered,
            wr.nftoken_id
          FROM nft_weekly_recipients wr
          JOIN nft_weekly_drops d
            ON d.id = wr.drop_id
          WHERE wr.registration_id = $1
          ORDER BY d.drop_date DESC, d.id DESC
        `, [registration.id]);

        return res.json({
          ok: true,
          signedIn: true,
          drops: result.rows.map(row => ({
            id: String(row.id),
            dropDate:
              typeof row.drop_date === "string"
                ? row.drop_date.slice(0, 10)
                : row.drop_date
                    .toISOString()
                    .slice(0, 10),
            dropName: row.drop_name,
            recipientId: String(row.recipient_id),
            mintStatus: row.mint_status,
            claimStatus: row.claim_offer_status,
            delivered: Boolean(row.delivered),
            nftokenId: row.nftoken_id || null
          }))
        });
      } catch (error) {
        console.error(
          "THE 52 issue options failed",
          error
        );

        return res.status(503).json({
          ok: false,
          error: "Delivery issue options unavailable"
        });
      }
    }
  );

  router.post(
    "/issues",
    issueLimiter,
    express.json({ limit: "20kb" }),
    async (req, res) => {
      try {
        const session = await getSession(req);

        res.setHeader("Cache-Control", "no-store");

        if (!session) {
          return res.status(401).json({
            ok: false,
            signedIn: false
          });
        }

        const supplied =
          String(req.headers["x-hoc-csrf"] || "");

        if (!safeEqual(
          supplied,
          session.csrfToken
        )) {
          return res.status(403).json({
            ok: false,
            error: "Invalid CSRF token"
          });
        }

        const issueType =
          String(req.body?.issueType || "");

        const dropId =
          String(req.body?.dropId || "").trim();

        const description =
          String(req.body?.description || "")
            .trim();

        if (!/^[1-9][0-9]*$/.test(dropId)) {
          return res.status(400).json({
            ok: false,
            error: "Select the affected THE 52 card."
          });
        }

        if (!ISSUE_TYPES.has(issueType)) {
          return res.status(400).json({
            ok: false,
            error: "Invalid issue type"
          });
        }

        if (
          description.length < 5 ||
          description.length > 3000
        ) {
          return res.status(400).json({
            ok: false,
            error:
              "Description must be between 5 and 3000 characters."
          });
        }

        await ensureIssueTables(pool);

        const diagnostics =
          await buildDiagnostics(
            pool,
            session.xrpl_address,
            dropId
          );

        const registration =
          diagnostics.registration;

        const recipient =
          diagnostics.recipient;

        if (!registration || !recipient) {
          return res.status(404).json({
            ok: false,
            error:
              "That THE 52 card is not assigned to your registered wallet."
          });
        }

        const pacificDate =
          new Intl.DateTimeFormat(
            "en-CA",
            {
              timeZone: "America/Los_Angeles",
              year: "numeric",
              month: "2-digit",
              day: "2-digit"
            }
          )
            .formatToParts(new Date())
            .reduce((parts, part) => {
              parts[part.type] = part.value;
              return parts;
            }, {});

        const todayPacific =
          `${pacificDate.year}-` +
          `${pacificDate.month}-` +
          `${pacificDate.day}`;

        const recipientDropDate =
          recipient?.drop_date
            ? (
                typeof recipient.drop_date === "string"
                  ? recipient.drop_date.slice(0, 10)
                  : [
                      recipient.drop_date.getUTCFullYear(),
                      String(
                        recipient.drop_date.getUTCMonth() + 1
                      ).padStart(2, "0"),
                      String(
                        recipient.drop_date.getUTCDate()
                      ).padStart(2, "0")
                    ].join("-")
              )
            : null;

        const releaseDay =
          Boolean(
            recipientDropDate &&
            recipientDropDate === todayPacific
          );

        const id = reportId();

        const result = await pool.query(`
          INSERT INTO the52_delivery_issues (
            report_id,
            registration_id,
            recipient_id,
            drop_id,
            x_handle,
            xrpl_address,
            issue_type,
            description,
            release_day,

            diagnostic_registration_found,
            diagnostic_frozen,
            diagnostic_minted,
            diagnostic_claim_status,
            diagnostic_delivered,
            diagnostic_owned,
            diagnostic_wallet_active,
            diagnostic_error
          )
          VALUES (
            $1,$2,$3,$4,$5,$6,$7,$8,$9,
            $10,$11,$12,$13,$14,$15,$16,$17
          )
          RETURNING
            id,
            report_id,
            submitted_at
        `, [
          id,
          registration?.id || null,
          recipient?.id || null,
          recipient?.drop_id || null,
          registration?.x_handle ||
            recipient?.x_handle ||
            null,
          session.xrpl_address,
          issueType,
          description,
          releaseDay,

          Boolean(registration),
          Boolean(recipient),
          recipient
            ? recipient.mint_status === "minted"
            : false,
          recipient?.claim_offer_status || null,
          recipient?.delivered ?? false,
          diagnostics.owned,
          diagnostics.walletActive,
          diagnostics.error
        ]);

        const issue = result.rows[0];

        await pool.query(`
          INSERT INTO the52_delivery_issue_events (
            issue_id,
            event_type,
            to_status,
            note
          )
          VALUES ($1, 'created', 'open', $2)
        `, [
          issue.id,
          "Subscriber submitted delivery issue."
        ]);

        return res.status(201).json({
          ok: true,
          reportId: issue.report_id,
          submittedAt: issue.submitted_at,
          releaseDay,
          message:
            "Your report has been received. " +
            "Release-day issues are reviewed by the end of the day. " +
            "Resolution may depend on wallet or XRPL conditions."
        });
      } catch (error) {
        console.error(
          "THE 52 issue submission failed",
          error
        );

        return res.status(500).json({
          ok: false,
          error:
            "Your report could not be submitted."
        });
      }
    }
  );

  router.post(
    "/issues/:reportId/screenshots",
    uploadLimiter,
    express.raw({
      type: [
        "image/png",
        "image/jpeg",
        "image/webp"
      ],
      limit: MAX_SCREENSHOT_BYTES
    }),
    async (req, res) => {
      try {
        const session = await getSession(req);

        res.setHeader("Cache-Control", "no-store");

        if (!session) {
          return res.status(401).json({
            ok: false,
            signedIn: false
          });
        }

        const supplied =
          String(req.headers["x-hoc-csrf"] || "");

        if (!safeEqual(
          supplied,
          session.csrfToken
        )) {
          return res.status(403).json({
            ok: false,
            error: "Invalid CSRF token"
          });
        }

        const contentType =
          String(req.headers["content-type"] || "")
            .split(";", 1)[0]
            .trim()
            .toLowerCase();

        if (![
          "image/png",
          "image/jpeg",
          "image/webp"
        ].includes(contentType)) {
          return res.status(415).json({
            ok: false,
            error:
              "Only PNG, JPEG and WebP screenshots are accepted."
          });
        }

        if (
          !Buffer.isBuffer(req.body) ||
          !req.body.length
        ) {
          return res.status(400).json({
            ok: false,
            error: "Screenshot is empty."
          });
        }

        const image = detectImage(req.body);

        if (!image) {
          return res.status(415).json({
            ok: false,
            error:
              "Only PNG, JPEG and WebP screenshots are accepted."
          });
        }

        await ensureIssueTables(pool);

        const issueResult = await pool.query(`
          SELECT id, report_id
          FROM the52_delivery_issues
          WHERE
            report_id = $1
            AND LOWER(xrpl_address) = LOWER($2)
          LIMIT 1
        `, [
          String(req.params.reportId || ""),
          session.xrpl_address
        ]);

        if (!issueResult.rowCount) {
          return res.sendStatus(404);
        }

        const issue = issueResult.rows[0];

        const countResult = await pool.query(`
          SELECT COUNT(*)::int AS count
          FROM the52_delivery_issue_screenshots
          WHERE issue_id = $1
        `, [issue.id]);

        if (
          Number(countResult.rows[0].count) >=
          MAX_SCREENSHOTS
        ) {
          return res.status(409).json({
            ok: false,
            error:
              `Maximum ${MAX_SCREENSHOTS} screenshots per report.`
          });
        }

        const directory =
          path.join(
            ISSUE_ROOT,
            String(issue.id)
          );

        await fs.mkdir(directory, {
          recursive: true,
          mode: 0o700
        });

        const storageName =
          crypto.randomBytes(24)
            .toString("hex") +
          "." +
          image.extension;

        const filePath =
          path.join(directory, storageName);

        await fs.writeFile(
          filePath,
          req.body,
          {
            mode: 0o600,
            flag: "wx"
          }
        );

        try {
          const inserted = await pool.query(`
            INSERT INTO
              the52_delivery_issue_screenshots (
                issue_id,
                storage_name,
                mime_type,
                byte_size
              )
            VALUES ($1,$2,$3,$4)
            RETURNING id, uploaded_at
          `, [
            issue.id,
            storageName,
            image.mime,
            req.body.length
          ]);

          return res.status(201).json({
            ok: true,
            screenshotId:
              inserted.rows[0].id,
            uploadedAt:
              inserted.rows[0].uploaded_at
          });
        } catch (error) {
          await fs.unlink(filePath).catch(() => {});
          throw error;
        }
      } catch (error) {
        if (
          error?.type === "entity.too.large"
        ) {
          return res.status(413).json({
            ok: false,
            error:
              "Screenshot exceeds the 5 MB limit."
          });
        }

        console.error(
          "THE 52 screenshot upload failed",
          error
        );

        return res.status(500).json({
          ok: false,
          error:
            "Screenshot could not be uploaded."
        });
      }
    }
  );

  return router;
}

module.exports = {
  ISSUE_ROOT,
  ISSUE_STATUSES,
  ensureIssueTables,
  createIssueRouter
};
