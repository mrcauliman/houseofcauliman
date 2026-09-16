const express = require("express");
const helmet = require("helmet");
const { Pool } = require("pg");
const { DateTime } = require("luxon");
const { isValidClassicAddress } = require("ripple-address-codec");

const app = express();

const PORT = process.env.PORT || 3000;

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

function getEligibleWeek() {
  const now = DateTime.now().setZone("America/Los_Angeles");

  let daysUntilSunday = 7 - now.weekday;

  if (now.weekday === 7) {
    daysUntilSunday = 7;
  }

  const sunday = now
    .plus({ days: daysUntilSunday })
    .startOf("day");

  return sunday.toISODate();
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

      source TEXT NOT NULL DEFAULT 'house_web'
    );
  `);

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

app.post("/register", async (req, res) => {
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
