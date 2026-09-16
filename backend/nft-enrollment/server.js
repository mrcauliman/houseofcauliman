const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const { createAdminRouter } = require("./admin");
const { Pool } = require("pg");
const { DateTime } = require("luxon");
const { isValidClassicAddress } = require("ripple-address-codec");

const app = express();

app.set("trust proxy", 1);

const PORT = process.env.PORT || 3000;
const FIRST_DROP_DATE = "2026-09-27";

const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const MAIL_FROM =
  process.env.MAIL_FROM ||
  "House of Cauliman <registration@houseofcauliman.com>";
const MAIL_REPLY_TO =
  process.env.MAIL_REPLY_TO ||
  "houseofcauliman@gmail.com";

const ALLOWED_ORIGINS = new Set([
  "https://houseofcauliman.com",
  "https://www.houseofcauliman.com"
]);

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is required");
  process.exit(1);
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false
});

app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" }
  })
);

app.use(express.json({ limit: "20kb" }));

app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (origin && ALLOWED_ORIGINS.has(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
  }

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,OPTIONS"
  );

  if (req.method === "OPTIONS") {
    if (!origin || !ALLOWED_ORIGINS.has(origin)) {
      return res.sendStatus(403);
    }

    return res.sendStatus(204);
  }

  next();
});

function normalizeHandle(value) {
  if (typeof value !== "string") return "";

  return value
    .trim()
    .replace(/^@+/, "")
    .toLowerCase();
}

function validHandle(value) {
  return /^[a-z0-9_]{1,15}$/.test(value);
}

function normalizeEmail(value) {
  if (typeof value !== "string") return null;

  const email = value.trim().toLowerCase();

  return email || null;
}

function validEmail(value) {
  if (!value) return true;

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function sendConfirmationEmail(registration, email) {
  if (!email || !RESEND_API_KEY) {
    return {
      sent: false,
      id: null,
      error: email ? "RESEND_API_KEY is not configured" : null
    };
  }

  const xHandle = escapeHtml(registration.x_handle);
  const xrplAddress = escapeHtml(registration.xrpl_address);

  const html = `
<!doctype html>
<html>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif;color:#111111;">

<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f4f5;padding:32px 16px;">
<tr>
<td align="center">

<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;background:#ffffff;border:1px solid #dedede;border-radius:14px;overflow:hidden;">

<tr>
<td style="padding:28px 32px;text-align:center;border-bottom:1px solid #ececec;">
<div style="font-size:22px;font-weight:800;letter-spacing:.04em;">
HOUSE OF CAULIMAN
</div>
</td>
</tr>

<tr>
<td style="padding:32px;">

<div style="font-size:22px;font-weight:800;margin-bottom:18px;">
NFT Registration Confirmed
</div>

<p style="font-size:16px;line-height:1.6;margin:0 0 26px;">
Your XRPL wallet has been registered for House of Cauliman subscriber NFT drops.
</p>

<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;margin-bottom:28px;">

<tr>
<td style="padding:16px;border:1px solid #e5e5e5;">
<div style="font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:#666666;margin-bottom:7px;">
𝕏 handle
</div>
<div style="font-size:16px;font-weight:700;">
${xHandle}
</div>
</td>
</tr>

<tr>
<td style="padding:16px;border:1px solid #e5e5e5;border-top:0;">
<div style="font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:#666666;margin-bottom:7px;">
XRPL wallet
</div>
<div style="font-size:14px;font-weight:700;word-break:break-all;">
${xrplAddress}
</div>
</td>
</tr>

</table>

<p style="font-size:15px;line-height:1.6;margin:0;">
Your 𝕏 subscription must remain active and your registration must be in before the weekly cutoff to qualify for that week's NFT.
</p>

</td>
</tr>

<tr>
<td style="padding:20px 32px;text-align:center;background:#111111;color:#ffffff;font-size:13px;font-weight:700;">
House of Cauliman
</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>`;

  const text = `House of Cauliman NFT Registration Confirmed

Your XRPL wallet has been registered for House of Cauliman subscriber NFT drops.

𝕏 handle
${registration.x_handle}

XRPL wallet
${registration.xrpl_address}

Your 𝕏 subscription must remain active and your registration must be in before the weekly cutoff to qualify for that week's NFT.

House of Cauliman`;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: MAIL_FROM,
        to: [email],
        reply_to: MAIL_REPLY_TO,
        subject: "House of Cauliman NFT Registration Confirmed",
        text,
        html
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        sent: false,
        id: null,
        error: data.message || "Resend rejected the email"
      };
    }

    return {
      sent: true,
      id: data.id || null,
      error: null
    };
  } catch (error) {
    return {
      sent: false,
      id: null,
      error: String(error.message || error)
    };
  }
}

function getEligibleWeek() {
  const now = DateTime.now().setZone("America/Los_Angeles");

  let daysUntilSunday = 7 - now.weekday;

  if (now.weekday === 7) {
    daysUntilSunday = 7;
  }

  const sunday = now
    .plus({ days: daysUntilSunday })
    .startOf("day");

  const date = sunday.toISODate();
  return date < FIRST_DROP_DATE ? FIRST_DROP_DATE : date;
}

async function initializeDatabase() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS nft_subscriber_registrations (
      id BIGSERIAL PRIMARY KEY,

      x_handle TEXT NOT NULL,
      x_handle_normalized TEXT NOT NULL UNIQUE,

      xrpl_address TEXT NOT NULL UNIQUE,

      email TEXT,

      registered_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

      eligible_week DATE NOT NULL,

      status TEXT NOT NULL DEFAULT 'pending',

      subscription_verified BOOLEAN NOT NULL DEFAULT FALSE,
      wallet_verified BOOLEAN NOT NULL DEFAULT FALSE,

      source TEXT NOT NULL DEFAULT 'house_web',

      confirmation_email_sent BOOLEAN NOT NULL DEFAULT FALSE,
      confirmation_email_sent_at TIMESTAMPTZ,
      confirmation_email_id TEXT,
      confirmation_email_error TEXT,
      delivered BOOLEAN NOT NULL DEFAULT FALSE,
      delivered_at TIMESTAMPTZ
    );
  `);

  await pool.query(`
    ALTER TABLE nft_subscriber_registrations
      ADD COLUMN IF NOT EXISTS confirmation_email_sent BOOLEAN NOT NULL DEFAULT FALSE,
      ADD COLUMN IF NOT EXISTS confirmation_email_sent_at TIMESTAMPTZ,
      ADD COLUMN IF NOT EXISTS confirmation_email_id TEXT,
      ADD COLUMN IF NOT EXISTS confirmation_email_error TEXT,
      ADD COLUMN IF NOT EXISTS delivered BOOLEAN NOT NULL DEFAULT FALSE,
      ADD COLUMN IF NOT EXISTS delivered_at TIMESTAMPTZ;
  `);

  await pool.query(
    `UPDATE nft_subscriber_registrations
     SET eligible_week = $1
     WHERE eligible_week < $1`,
    [FIRST_DROP_DATE]
  );

  await pool.query(`
    CREATE INDEX IF NOT EXISTS
      idx_nft_subscriber_eligible_week
    ON nft_subscriber_registrations (eligible_week);
  `);

  await pool.query(`
    CREATE INDEX IF NOT EXISTS
      idx_nft_subscriber_status
    ON nft_subscriber_registrations (status);
  `);
}

app.get("/health", async (req, res) => {
  try {
    await pool.query("SELECT 1");

    res.json({
      ok: true,
      service: "house-nft-enrollment"
    });
  } catch (error) {
    console.error("Health check failed", error);

    res.status(500).json({
      ok: false
    });
  }
});

const registrationLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 20,
  standardHeaders: true,
  legacyHeaders: false
});

app.post("/register", registrationLimiter, async (req, res) => {
  try {
    const xHandle = normalizeHandle(req.body.x_handle);
    const xrplAddress =
      typeof req.body.xrpl_address === "string"
        ? req.body.xrpl_address.trim()
        : "";

    const email = normalizeEmail(req.body.email);

    if (!validHandle(xHandle)) {
      return res.status(400).json({
        ok: false,
        error: "Enter a valid X handle."
      });
    }

    if (!isValidClassicAddress(xrplAddress)) {
      return res.status(400).json({
        ok: false,
        error: "Enter a valid XRPL public wallet address."
      });
    }

    if (!validEmail(email)) {
      return res.status(400).json({
        ok: false,
        error: "Enter a valid email address or leave it blank."
      });
    }

    const existing = await pool.query(
      `
        SELECT
          x_handle_normalized,
          xrpl_address
        FROM nft_subscriber_registrations
        WHERE
          x_handle_normalized = $1
          OR xrpl_address = $2
        LIMIT 1
      `,
      [xHandle, xrplAddress]
    );

    if (existing.rows.length) {
      const row = existing.rows[0];

      if (
        row.x_handle_normalized === xHandle &&
        row.xrpl_address === xrplAddress
      ) {
        return res.status(200).json({
          ok: true,
          already_registered: true,
          message: "This X handle and XRPL wallet are already registered."
        });
      }

      if (row.x_handle_normalized === xHandle) {
        return res.status(409).json({
          ok: false,
          error: "That X handle already has a registered wallet."
        });
      }

      return res.status(409).json({
        ok: false,
        error: "That XRPL wallet is already registered."
      });
    }

    const eligibleWeek = getEligibleWeek();

    const result = await pool.query(
      `
        INSERT INTO nft_subscriber_registrations (
          x_handle,
          x_handle_normalized,
          xrpl_address,
          email,
          eligible_week
        )
        VALUES ($1, $2, $3, $4, $5)
        RETURNING
          id,
          x_handle,
          xrpl_address,
          eligible_week,
          registered_at,
          status
      `,
      [
        `@${xHandle}`,
        xHandle,
        xrplAddress,
        email,
        eligibleWeek
      ]
    );

    const registration = result.rows[0];

    if (email) {
      const emailResult =
        await sendConfirmationEmail(registration, email);

      await pool.query(
        `
          UPDATE nft_subscriber_registrations
          SET
            confirmation_email_sent = $1,
            confirmation_email_sent_at =
              CASE WHEN $1 THEN NOW() ELSE NULL END,
            confirmation_email_id = $2,
            confirmation_email_error = $3,
            updated_at = NOW()
          WHERE id = $4
        `,
        [
          emailResult.sent,
          emailResult.id,
          emailResult.error,
          registration.id
        ]
      );

      if (!emailResult.sent) {
        console.error(
          "Confirmation email failed",
          emailResult.error
        );
      }
    }

    return res.status(201).json({
      ok: true,
      message: "Your XRPL wallet has been registered.",
      registration: {
        x_handle: registration.x_handle,
        xrpl_address: registration.xrpl_address,
        eligible_week: registration.eligible_week,
        status: registration.status
      }
    });
  } catch (error) {
    console.error("Registration failed", error);

    if (error.code === "23505") {
      return res.status(409).json({
        ok: false,
        error: "That X handle or XRPL wallet is already registered."
      });
    }

    return res.status(500).json({
      ok: false,
      error: "Registration could not be completed."
    });
  }
});

app.use("/admin", createAdminRouter({ pool }));

app.use((req, res) => {
  res.status(404).json({
    ok: false,
    error: "Not found"
  });
});

initializeDatabase()
  .then(() => {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(
        `House NFT enrollment API listening on port ${PORT}`
      );
    });
  })
  .catch((error) => {
    console.error("Database initialization failed", error);
    process.exit(1);
  });
