const express = require("express");
const crypto = require("crypto");
const rateLimit = require("express-rate-limit");
const { Xumm } = require("xumm");
const { verifySignature } = require("verify-xrpl-signature");
const { isValidClassicAddress } = require("ripple-address-codec");

const COOKIE_NAME = "__Host-hoc_admin_session";
const SESSION_TTL_MS = 4 * 60 * 60 * 1000;
const ADMIN_ORIGIN = "https://api.houseofcauliman.com";

function esc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function parseCookies(header) {
  const out = {};

  for (const part of String(header || "").split(";")) {
    const i = part.indexOf("=");
    if (i < 1) continue;

    const key = part.slice(0, i).trim();
    const value = part.slice(i + 1).trim();

    try {
      out[key] = decodeURIComponent(value);
    } catch {
      out[key] = value;
    }
  }

  return out;
}

function safeEqual(a, b) {
  const x = Buffer.from(String(a || ""));
  const y = Buffer.from(String(b || ""));

  return x.length === y.length &&
    crypto.timingSafeEqual(x, y);
}

function createAdminAuth({ pool }) {
  const router = express.Router();

  const apiKey = process.env.XAMAN_API_KEY || "";
  const apiSecret = process.env.XAMAN_API_SECRET || "";
  const adminAddress = process.env.ADMIN_XRPL_ADDRESS || "";
  const sessionSecret = process.env.ADMIN_SESSION_SECRET || "";

  const configured = Boolean(
    apiKey &&
    apiSecret &&
    sessionSecret &&
    isValidClassicAddress(adminAddress)
  );

  const xumm = configured
    ? new Xumm(apiKey, apiSecret)
    : null;

  let initPromise = null;

  function ensureTables() {
    if (!initPromise) {
      initPromise = pool.query(`
        CREATE TABLE IF NOT EXISTS admin_wallet_challenges (
          payload_uuid TEXT PRIMARY KEY,
          nonce_hash TEXT NOT NULL,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          expires_at TIMESTAMPTZ NOT NULL,
          used_at TIMESTAMPTZ,
          status TEXT NOT NULL DEFAULT 'created'
        );

        CREATE TABLE IF NOT EXISTS admin_wallet_sessions (
          id BIGSERIAL PRIMARY KEY,
          token_hash TEXT NOT NULL UNIQUE,
          xrpl_address TEXT NOT NULL,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          expires_at TIMESTAMPTZ NOT NULL,
          last_seen_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          revoked_at TIMESTAMPTZ
        );

        CREATE INDEX IF NOT EXISTS
          idx_admin_wallet_sessions_active
        ON admin_wallet_sessions (token_hash, expires_at)
        WHERE revoked_at IS NULL;

        CREATE TABLE IF NOT EXISTS admin_auth_failures (
          id BIGSERIAL PRIMARY KEY,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          payload_uuid TEXT,
          claimed_address TEXT,
          reason TEXT NOT NULL,
          ip_hash TEXT,
          user_agent TEXT
        );
      `).catch(error => {
        initPromise = null;
        throw error;
      });
    }

    return initPromise;
  }

  function hmac(value) {
    return crypto
      .createHmac("sha256", sessionSecret)
      .update(String(value))
      .digest("hex");
  }

  function csrfForToken(token) {
    return hmac(`csrf:${token}`);
  }

  function validCsrf(req, session) {
    const bodyToken = String(
      req.body?._csrf || ""
    );

    return Boolean(
      bodyToken &&
      session?.csrfToken &&
      safeEqual(
        bodyToken,
        session.csrfToken
      )
    );
  }

  function requestIpHash(req) {
    const raw = String(
      req.ip ||
      req.socket?.remoteAddress ||
      ""
    );

    return raw ? hmac(raw) : null;
  }

  async function logFailure(
    req,
    reason,
    payloadUuid = null,
    claimedAddress = null
  ) {
    try {
      await ensureTables();

      await pool.query(`
        INSERT INTO admin_auth_failures (
          payload_uuid,
          claimed_address,
          reason,
          ip_hash,
          user_agent
        )
        VALUES ($1, $2, $3, $4, $5)
      `, [
        payloadUuid,
        claimedAddress,
        String(reason).slice(0, 300),
        requestIpHash(req),
        String(req.get("user-agent") || "").slice(0, 500)
      ]);
    } catch (error) {
      console.error(
        "Admin auth failure logging failed",
        error
      );
    }
  }

  async function getSession(req) {
    if (!configured) return null;

    const token =
      parseCookies(req.headers.cookie)[COOKIE_NAME];

    if (
      !token ||
      token.length < 32 ||
      token.length > 256
    ) {
      return null;
    }

    await ensureTables();

    const tokenHash = hmac(token);

    const result = await pool.query(`
      SELECT
        id,
        xrpl_address,
        expires_at
      FROM admin_wallet_sessions
      WHERE
        token_hash = $1
        AND revoked_at IS NULL
        AND expires_at > NOW()
      LIMIT 1
    `, [tokenHash]);

    if (!result.rows.length) {
      return null;
    }

    const session = result.rows[0];

    if (!safeEqual(
      session.xrpl_address,
      adminAddress
    )) {
      return null;
    }

    pool.query(`
      UPDATE admin_wallet_sessions
      SET last_seen_at = NOW()
      WHERE id = $1
    `, [session.id]).catch(error => {
      console.error(
        "Admin session touch failed",
        error
      );
    });

    return {
      ...session,
      csrfToken: csrfForToken(token)
    };
  }

  function setSessionCookie(res, token) {
    const maxAge =
      Math.floor(SESSION_TTL_MS / 1000);

    res.append(
      "Set-Cookie",
      `${COOKIE_NAME}=${encodeURIComponent(token)}; ` +
      `Path=/; HttpOnly; Secure; ` +
      `SameSite=Lax; Max-Age=${maxAge}`
    );
  }

  function clearSessionCookie(res) {
    res.append(
      "Set-Cookie",
      `${COOKIE_NAME}=; Path=/; HttpOnly; ` +
      `Secure; SameSite=Lax; Max-Age=0`
    );
  }

  function loginPage(message = "") {
    return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta
  name="viewport"
  content="width=device-width,initial-scale=1"
>
<meta
  name="robots"
  content="noindex,nofollow"
>
<title>House of Cauliman Admin</title>

<style>
:root {
  color-scheme: dark;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 22px;
  background: #090b10;
  color: #f4f7fb;
  font-family:
    system-ui,
    -apple-system,
    Segoe UI,
    Roboto,
    Arial,
    sans-serif;
}

.card {
  width: min(520px, 100%);
  background: #111722;
  border: 1px solid #2a3547;
  border-radius: 20px;
  padding: 28px;
}

.eyebrow {
  color: #d8b45c;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: .12em;
  text-transform: uppercase;
}

h1 {
  margin: 10px 0 8px;
  font-size: 30px;
  line-height: 1.08;
}

p {
  color: #b8c3d1;
  line-height: 1.6;
}

.btn {
  width: 100%;
  margin-top: 12px;
  border: 0;
  border-radius: 14px;
  padding: 15px 18px;
  background: #d8b45c;
  color: #090b10;
  font-size: 15px;
  font-weight: 900;
  cursor: pointer;
}

.note,
.error {
  margin-top: 18px;
  padding: 12px 14px;
  border-radius: 12px;
  font-size: 13px;
}

.note {
  background: #0b111a;
  border: 1px solid #2a3547;
  color: #b8c3d1;
}

.error {
  background: #2a1114;
  border: 1px solid #7f1d1d;
  color: #fecaca;
}
</style>
</head>

<body>
<main class="card">

<div class="eyebrow">
  House of Cauliman
</div>

<h1>
  Admin Wallet Sign In
</h1>

<p>
  Authenticate with the authorized
  Xaman/XRPL wallet.
  This is a signature-only sign in.
  No payment is requested and nothing
  is submitted to the XRPL.
</p>

${
  message
    ? `<div class="error">${esc(message)}</div>`
    : ""
}

<a
  class="btn"
  href="/admin/auth/start"
  style="display:block;text-align:center;text-decoration:none"
>
  SIGN IN WITH XAMAN
</a>

<div class="note">
  Only the configured admin XRPL
  address is accepted.
</div>

</main>
</body>
</html>`;
  }

  router.use((req, res, next) => {
    res.setHeader(
      "Cache-Control",
      "no-store"
    );

    res.setHeader(
      "X-Robots-Tag",
      "noindex, nofollow"
    );

    next();
  });

  router.get(
    "/login",
    async (req, res) => {
      try {
        const session =
          await getSession(req);

        if (session) {
          return res.redirect(
            303,
            "/admin/"
          );
        }

        return res
          .type("html")
          .send(
            loginPage(
              configured
                ? ""
                : "Wallet authentication is not configured."
            )
          );
      } catch (error) {
        console.error(
          "Admin login page failed",
          error
        );

        return res
          .status(500)
          .type("html")
          .send(
            loginPage(
              "Authentication service unavailable."
            )
          );
      }
    }
  );

  const startLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 20,
    standardHeaders: true,
    legacyHeaders: false
  });

  router.get(
    "/auth/start",
    startLimiter,
    async (req, res) => {
      try {
        if (!configured || !xumm) {
          return res
            .status(503)
            .type("html")
            .send(
              loginPage(
                "Wallet authentication is not configured."
              )
            );
        }

        await ensureTables();

        await pool.query(`
          DELETE FROM admin_wallet_challenges
          WHERE
            expires_at <
            NOW() - INTERVAL '1 day';

          DELETE FROM admin_wallet_sessions
          WHERE
            expires_at <
            NOW() - INTERVAL '1 day';
        `);

        const nonce =
          crypto
            .randomBytes(32)
            .toString("hex");

        const created =
          await xumm.payload.create({
            txjson: {
              TransactionType: "SignIn"
            },

            options: {
              force_network: "MAINNET",

              return_url: {
                web:
                  `${ADMIN_ORIGIN}` +
                  `/admin/auth/callback` +
                  `?payload={id}`,

                app:
                  `${ADMIN_ORIGIN}` +
                  `/admin/auth/callback` +
                  `?payload={id}`
              }
            },

            custom_meta: {
              identifier:
                `hoc-admin-${nonce.slice(0, 24)}`,

              instruction:
                "Sign in to House of Cauliman Admin. " +
                "No payment or XRPL transaction " +
                "will be submitted."
            }
          });

        if (
          !created?.uuid ||
          !created?.next?.always
        ) {
          throw new Error(
            "Xaman did not return a valid sign-in payload"
          );
        }

        await pool.query(`
          INSERT INTO admin_wallet_challenges (
            payload_uuid,
            nonce_hash,
            expires_at
          )
          VALUES (
            $1,
            $2,
            NOW() + INTERVAL '5 minutes'
          )
        `, [
          created.uuid,
          hmac(nonce)
        ]);

        return res.redirect(
          303,
          created.next.always
        );
      } catch (error) {
        console.error(
          "Admin auth start failed",
          error
        );

        await logFailure(
          req,
          `auth_start_failed:${
            error.message || error
          }`
        );

        return res
          .status(502)
          .type("html")
          .send(
            loginPage(
              "Could not start Xaman sign in. Try again."
            )
          );
      }
    }
  );

  router.get(
    "/auth/callback",
    async (req, res) => {
      const payloadUuid =
        String(
          req.query.payload || ""
        ).trim();

      try {
        if (!configured || !xumm) {
          return res
            .status(503)
            .type("html")
            .send(
              loginPage(
                "Wallet authentication is not configured."
              )
            );
        }

        if (
          !/^[0-9a-fA-F-]{36}$/.test(
            payloadUuid
          )
        ) {
          await logFailure(
            req,
            "callback_invalid_payload_uuid",
            payloadUuid || null
          );

          return res
            .status(400)
            .type("html")
            .send(
              loginPage(
                "Invalid sign-in response."
              )
            );
        }

        await ensureTables();

        const claimed =
          await pool.query(`
            UPDATE admin_wallet_challenges
            SET
              used_at = NOW(),
              status = 'verifying'
            WHERE
              payload_uuid = $1
              AND used_at IS NULL
              AND expires_at > NOW()
            RETURNING payload_uuid
          `, [payloadUuid]);

        if (!claimed.rows.length) {
          await logFailure(
            req,
            "challenge_expired_used_or_unknown",
            payloadUuid
          );

          return res
            .status(401)
            .type("html")
            .send(
              loginPage(
                "That sign-in request expired " +
                "or was already used. Start again."
              )
            );
        }

        const payload =
          await xumm.payload.get(
            payloadUuid
          );

        if (
          !payload?.meta?.resolved ||
          !payload?.meta?.signed
        ) {
          await pool.query(`
            UPDATE admin_wallet_challenges
            SET status = 'rejected'
            WHERE payload_uuid = $1
          `, [payloadUuid]);

          await logFailure(
            req,
            "payload_not_signed",
            payloadUuid
          );

          return res
            .status(401)
            .type("html")
            .send(
              loginPage(
                "The Xaman sign-in request " +
                "was not signed."
              )
            );
        }

        const blob =
          String(
            payload?.response?.hex ||
            ""
          );

        const xamanAccount =
          String(
            payload?.response?.account ||
            ""
          );

        if (!blob) {
          throw new Error(
            "Signed payload blob missing"
          );
        }

        const verification =
          verifySignature(blob);

        const signedBy =
          String(
            verification?.signedBy ||
            ""
          );

        const requestType =
          String(
            payload
              ?.request_json
              ?.TransactionType ||

            payload
              ?.payload
              ?.txjson
              ?.TransactionType ||

            ""
          );

        if (
          requestType &&
          requestType !== "SignIn"
        ) {
          throw new Error(
            "Unexpected Xaman payload type"
          );
        }

        if (
          !verification?.signatureValid
        ) {
          throw new Error(
            "XRPL signature verification failed"
          );
        }

        if (
          !safeEqual(
            signedBy,
            adminAddress
          )
        ) {
          await logFailure(
            req,
            "unauthorized_signer",
            payloadUuid,
            signedBy ||
              xamanAccount ||
              null
          );

          throw new Error(
            "Unauthorized XRPL signer"
          );
        }

        if (
          xamanAccount &&
          !safeEqual(
            xamanAccount,
            adminAddress
          )
        ) {
          await logFailure(
            req,
            "xaman_account_mismatch",
            payloadUuid,
            xamanAccount
          );

          throw new Error(
            "Xaman account mismatch"
          );
        }

        const token =
          crypto
            .randomBytes(32)
            .toString("base64url");

        const tokenHash =
          hmac(token);

        await pool.query(`
          INSERT INTO admin_wallet_sessions (
            token_hash,
            xrpl_address,
            expires_at
          )
          VALUES (
            $1,
            $2,
            NOW() + INTERVAL '4 hours'
          )
        `, [
          tokenHash,
          adminAddress
        ]);

        await pool.query(`
          UPDATE admin_wallet_challenges
          SET status = 'used'
          WHERE payload_uuid = $1
        `, [payloadUuid]);

        setSessionCookie(
          res,
          token
        );

        return res.redirect(
          303,
          "/admin/"
        );
      } catch (error) {
        console.error(
          "Admin auth callback failed",
          error
        );

        if (payloadUuid) {
          try {
            await pool.query(`
              UPDATE admin_wallet_challenges
              SET status = 'failed'
              WHERE payload_uuid = $1
            `, [payloadUuid]);
          } catch {}
        }

        await logFailure(
          req,
          `callback_failed:${
            error.message || error
          }`,
          payloadUuid || null
        );

        return res
          .status(401)
          .type("html")
          .send(
            loginPage(
              "Wallet sign in failed. " +
              "Start a new request and try again."
            )
          );
      }
    }
  );

  router.get(
    "/csrf",
    async (req, res) => {
      try {
        const session =
          await getSession(req);

        if (!session) {
          return res
            .status(401)
            .json({
              ok: false,
              error: "Admin authentication required"
            });
        }

        res.setHeader(
          "Cache-Control",
          "no-store"
        );

        return res.json({
          ok: true,
          csrfToken: session.csrfToken
        });
      } catch (error) {
        console.error(
          "Admin CSRF token failed",
          error
        );

        return res
          .status(503)
          .json({
            ok: false,
            error: "Admin authentication unavailable"
          });
      }
    }
  );

  router.post(
    "/logout",
    async (req, res) => {
      try {
        const session =
          await getSession(req);

        if (
          !session ||
          !validCsrf(req, session)
        ) {
          await logFailure(
            req,
            "logout_csrf_rejected",
            null,
            session?.xrpl_address || null
          );

          return res.sendStatus(403);
        }

        const token =
          parseCookies(
            req.headers.cookie
          )[COOKIE_NAME];

        if (
          token &&
          configured
        ) {
          await ensureTables();

          await pool.query(`
            UPDATE admin_wallet_sessions
            SET revoked_at = NOW()
            WHERE token_hash = $1
          `, [
            hmac(token)
          ]);
        }

        clearSessionCookie(res);

        return res.redirect(
          303,
          "/admin/login"
        );
      } catch (error) {
        console.error(
          "Admin logout failed",
          error
        );

        clearSessionCookie(res);

        return res.redirect(
          303,
          "/admin/login"
        );
      }
    }
  );

  async function gate(
    req,
    res,
    next
  ) {
    try {
      res.setHeader(
        "Cache-Control",
        "no-store"
      );

      res.setHeader(
        "X-Robots-Tag",
        "noindex, nofollow"
      );

      const session =
        await getSession(req);

      if (session) {
        req.houseAdminWalletAuthenticated =
          true;

        req.houseAdminAddress =
          session.xrpl_address;

        req.houseAdminCsrfToken =
          session.csrfToken;

        if (
          [
            "POST",
            "PUT",
            "PATCH",
            "DELETE"
          ].includes(req.method)
        ) {
          if (!validCsrf(req, session)) {
            await logFailure(
              req,
              "csrf_token_rejected",
              null,
              session.xrpl_address
            );

            return res.sendStatus(403);
          }
        }

        return next();
      }

      if (
        req.method === "GET" ||
        req.method === "HEAD"
      ) {
        return res.redirect(
          303,
          "/admin/login"
        );
      }

      return res
        .status(401)
        .type("text/plain")
        .send(
          "Admin authentication required"
        );
    } catch (error) {
      console.error(
        "Admin auth gate failed",
        error
      );

      return res
        .status(503)
        .type("text/plain")
        .send(
          "Admin authentication unavailable"
        );
    }
  }

  return {
    router,
    gate,
    getSession
  };
}

module.exports = {
  createAdminAuth
};
