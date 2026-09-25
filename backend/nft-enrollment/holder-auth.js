const express = require("express");
const crypto = require("crypto");
const rateLimit = require("express-rate-limit");
const { Xumm } = require("xumm");
const { Client } = require("xrpl");
const { verifySignature } = require("verify-xrpl-signature");
const { isValidClassicAddress } = require("ripple-address-codec");

const COOKIE_NAME = "__Host-hoc_holder_session";
const SESSION_TTL_MS = 24 * 60 * 60 * 1000;

const API_ORIGIN = "https://api.houseofcauliman.com";
const WEB_ORIGIN = "https://houseofcauliman.com";

const XRPL_WS =
  process.env.THE52_XRPL_WS ||
  process.env.XRPL_WS ||
  "wss://xrplcluster.com";

const THE52_CARDS = {
  "01": {
    name: "THE BUILDER",
    dropDate: "2026-09-27"
  }
};

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

function createHolderAuth({ pool }) {
  const router = express.Router();

  const apiKey = process.env.XAMAN_API_KEY || "";
  const apiSecret = process.env.XAMAN_API_SECRET || "";
  const sessionSecret =
    process.env.HOLDER_SESSION_SECRET || "";

  const configured = Boolean(
    apiKey &&
    apiSecret &&
    sessionSecret
  );

  const xumm = configured
    ? new Xumm(apiKey, apiSecret)
    : null;

  let initPromise = null;

  function hmac(value) {
    return crypto
      .createHmac("sha256", sessionSecret)
      .update(`holder:${String(value)}`)
      .digest("hex");
  }

  function ensureTables() {
    if (!initPromise) {
      initPromise = pool.query(`
        CREATE TABLE IF NOT EXISTS holder_wallet_challenges (
          payload_uuid TEXT PRIMARY KEY,
          nonce_hash TEXT NOT NULL,
          return_path TEXT NOT NULL DEFAULT '/the52/',
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          expires_at TIMESTAMPTZ NOT NULL,
          used_at TIMESTAMPTZ,
          status TEXT NOT NULL DEFAULT 'created'
        );

        CREATE TABLE IF NOT EXISTS holder_wallet_sessions (
          id BIGSERIAL PRIMARY KEY,
          token_hash TEXT NOT NULL UNIQUE,
          xrpl_address TEXT NOT NULL,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          expires_at TIMESTAMPTZ NOT NULL,
          last_seen_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          revoked_at TIMESTAMPTZ
        );

        CREATE INDEX IF NOT EXISTS
          idx_holder_wallet_sessions_active
        ON holder_wallet_sessions (
          token_hash,
          expires_at
        )
        WHERE revoked_at IS NULL;

        CREATE TABLE IF NOT EXISTS the52_release_state (
          card_number TEXT PRIMARY KEY,
          released BOOLEAN NOT NULL DEFAULT FALSE,
          released_at TIMESTAMPTZ
        );

        INSERT INTO the52_release_state (
          card_number,
          released
        )
        VALUES ('01', FALSE)
        ON CONFLICT (card_number) DO NOTHING;
      `).catch(error => {
        initPromise = null;
        throw error;
      });
    }

    return initPromise;
  }

  function setSessionCookie(res, token) {
    res.cookie(
      COOKIE_NAME,
      token,
      {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/",
        maxAge: SESSION_TTL_MS
      }
    );
  }

  function clearSessionCookie(res) {
    res.clearCookie(
      COOKIE_NAME,
      {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        path: "/"
      }
    );
  }

  async function getSession(req) {
    if (!configured) {
      return null;
    }

    await ensureTables();

    const token =
      parseCookies(req.headers.cookie)[COOKIE_NAME];

    if (!token) {
      return null;
    }

    const tokenHash = hmac(token);

    const result = await pool.query(`
      SELECT
        id,
        xrpl_address,
        expires_at
      FROM holder_wallet_sessions
      WHERE
        token_hash = $1
        AND revoked_at IS NULL
        AND expires_at > NOW()
      LIMIT 1
    `, [tokenHash]);

    if (!result.rowCount) {
      return null;
    }

    await pool.query(`
      UPDATE holder_wallet_sessions
      SET last_seen_at = NOW()
      WHERE id = $1
    `, [result.rows[0].id]);

    return {
      ...result.rows[0],
      token,
      csrfToken: hmac(`csrf:${token}`)
    };
  }

  async function getCardTokenIds(card) {
    const result = await pool.query(`
      SELECT nftoken_id
      FROM nft_weekly_recipients r
      JOIN nft_weekly_drops d
        ON d.id = r.drop_id
      WHERE
        d.drop_date = $1
        AND r.mint_status = 'minted'
        AND r.nftoken_id IS NOT NULL

      UNION

      SELECT p.nftoken_id
      FROM nft_weekly_public_copies p
      JOIN nft_weekly_drops d
        ON d.id = p.drop_id
      WHERE
        d.drop_date = $1
        AND p.mint_status = 'minted'
        AND p.nftoken_id IS NOT NULL
    `, [card.dropDate]);

    return result.rows
      .map(row => row.nftoken_id)
      .filter(Boolean);
  }

  async function accountOwnedTokenIds(
    account,
    candidateIds
  ) {
    if (!candidateIds.length) {
      return [];
    }

    const wanted = new Set(candidateIds);
    const owned = [];

    const client = new Client(XRPL_WS);
    await client.connect();

    try {
      let marker;

      do {
        const request = {
          command: "account_nfts",
          account,
          ledger_index: "validated",
          limit: 400
        };

        if (marker) {
          request.marker = marker;
        }

        const result =
          await client.request(request);

        for (
          const nft of result.result.account_nfts || []
        ) {
          if (wanted.has(nft.NFTokenID)) {
            owned.push(nft.NFTokenID);
          }
        }

        if (owned.length === wanted.size) {
          break;
        }

        marker = result.result.marker;
      } while (marker);
    } finally {
      await client.disconnect();
    }

    return owned;
  }

  const startLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 20,
    standardHeaders: true,
    legacyHeaders: false
  });

  const ownershipLimiter = rateLimit({
    windowMs: 60 * 1000,
    limit: 30,
    standardHeaders: true,
    legacyHeaders: false
  });

  router.get(
    "/auth/start",
    startLimiter,
    async (req, res) => {
      try {
        if (!configured || !xumm) {
          return res.status(503).json({
            ok: false,
            error:
              "Holder wallet authentication is not configured."
          });
        }

        await ensureTables();

        const returnPath =
          String(req.query.return || "") === "/the52/"
            ? "/the52/"
            : "/the52/";

        await pool.query(`
          DELETE FROM holder_wallet_challenges
          WHERE expires_at <
            NOW() - INTERVAL '1 day';

          DELETE FROM holder_wallet_sessions
          WHERE expires_at <
            NOW() - INTERVAL '1 day';
        `);

        const nonce =
          crypto.randomBytes(32).toString("hex");

        const created =
          await xumm.payload.create({
            txjson: {
              TransactionType: "SignIn"
            },

            options: {
              force_network: "MAINNET",

              return_url: {
                web:
                  `${API_ORIGIN}` +
                  `/holder/auth/callback` +
                  `?payload={id}`,

                app:
                  `${API_ORIGIN}` +
                  `/holder/auth/callback` +
                  `?payload={id}`
              }
            },

            custom_meta: {
              identifier:
                `hoc-holder-${nonce.slice(0, 24)}`,

              instruction:
                "Sign in to verify House of Cauliman " +
                "NFT ownership. No payment or XRPL " +
                "transaction will be submitted."
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
          INSERT INTO holder_wallet_challenges (
            payload_uuid,
            nonce_hash,
            return_path,
            expires_at
          )
          VALUES (
            $1,
            $2,
            $3,
            NOW() + INTERVAL '5 minutes'
          )
        `, [
          created.uuid,
          hmac(nonce),
          returnPath
        ]);

        return res.redirect(
          303,
          created.next.always
        );
      } catch (error) {
        console.error(
          "Holder auth start failed",
          error
        );

        return res
          .status(502)
          .json({
            ok: false,
            error:
              "Could not start Xaman sign in."
          });
      }
    }
  );

  router.get(
    "/auth/callback",
    async (req, res) => {
      const payloadUuid =
        String(req.query.payload || "").trim();

      try {
        if (!configured || !xumm) {
          return res.status(503).send(
            "Holder authentication is not configured."
          );
        }

        if (
          !/^[0-9a-fA-F-]{36}$/.test(
            payloadUuid
          )
        ) {
          return res.status(400).send(
            "Invalid sign-in response."
          );
        }

        await ensureTables();

        const claimed =
          await pool.query(`
            UPDATE holder_wallet_challenges
            SET
              used_at = NOW(),
              status = 'verifying'
            WHERE
              payload_uuid = $1
              AND used_at IS NULL
              AND expires_at > NOW()
            RETURNING return_path
          `, [payloadUuid]);

        if (!claimed.rowCount) {
          return res.status(401).send(
            "That sign-in request expired " +
            "or was already used."
          );
        }

        const payload =
          await xumm.payload.get(payloadUuid);

        if (
          !payload?.meta?.resolved ||
          !payload?.meta?.signed
        ) {
          await pool.query(`
            UPDATE holder_wallet_challenges
            SET status = 'rejected'
            WHERE payload_uuid = $1
          `, [payloadUuid]);

          return res.status(401).send(
            "The Xaman sign-in request was not signed."
          );
        }

        const blob =
          String(payload?.response?.hex || "");

        const xamanAccount =
          String(
            payload?.response?.account || ""
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
            verification?.signedBy || ""
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
          !verification?.signatureValid ||
          !isValidClassicAddress(signedBy)
        ) {
          throw new Error(
            "XRPL signature verification failed"
          );
        }

        if (
          xamanAccount &&
          !safeEqual(
            xamanAccount,
            signedBy
          )
        ) {
          throw new Error(
            "Xaman account mismatch"
          );
        }

        const token =
          crypto
            .randomBytes(32)
            .toString("base64url");

        await pool.query(`
          INSERT INTO holder_wallet_sessions (
            token_hash,
            xrpl_address,
            expires_at
          )
          VALUES (
            $1,
            $2,
            NOW() + INTERVAL '24 hours'
          )
        `, [
          hmac(token),
          signedBy
        ]);

        await pool.query(`
          UPDATE holder_wallet_challenges
          SET status = 'used'
          WHERE payload_uuid = $1
        `, [payloadUuid]);

        setSessionCookie(res, token);

        const returnPath =
          claimed.rows[0].return_path === "/the52/"
            ? "/the52/"
            : "/the52/";

        return res.redirect(
          303,
          `${WEB_ORIGIN}${returnPath}?wallet=connected`
        );
      } catch (error) {
        console.error(
          "Holder auth callback failed",
          error
        );

        if (payloadUuid) {
          try {
            await pool.query(`
              UPDATE holder_wallet_challenges
              SET status = 'failed'
              WHERE payload_uuid = $1
            `, [payloadUuid]);
          } catch {}
        }

        return res
          .status(401)
          .send(
            "Wallet sign in failed. " +
            "Start a new request and try again."
          );
      }
    }
  );

  router.get(
    "/me",
    async (req, res) => {
      try {
        const session =
          await getSession(req);

        res.setHeader(
          "Cache-Control",
          "no-store"
        );

        if (!session) {
          return res.status(401).json({
            ok: false,
            signedIn: false
          });
        }

        return res.json({
          ok: true,
          signedIn: true,
          xrplAddress:
            session.xrpl_address,
          csrfToken:
            session.csrfToken
        });
      } catch (error) {
        console.error(
          "Holder session lookup failed",
          error
        );

        return res.status(503).json({
          ok: false,
          error:
            "Holder authentication unavailable"
        });
      }
    }
  );

  router.get(
    "/the52/:card/release",
    async (req, res) => {
      try {
        await ensureTables();

        const cardNumber =
          String(req.params.card || "")
            .padStart(2, "0");

        const card = THE52_CARDS[cardNumber];

        if (!card) {
          return res.status(404).json({
            ok: false,
            error: "THE 52 card is not available."
          });
        }

        const result = await pool.query(`
          SELECT released, released_at
          FROM the52_release_state
          WHERE card_number = $1
          LIMIT 1
        `, [cardNumber]);

        const row = result.rows[0] || {};

        res.setHeader("Cache-Control", "no-store");

        return res.json({
          ok: true,
          card: cardNumber,
          name: card.name,
          released: row.released === true,
          releasedAt: row.released_at || null
        });
      } catch (error) {
        console.error("THE 52 release lookup failed", error);

        return res.status(503).json({
          ok: false,
          error: "Release state unavailable"
        });
      }
    }
  );

  router.get(
    "/the52/:card",
    ownershipLimiter,
    async (req, res) => {
      try {
        const session =
          await getSession(req);

        res.setHeader(
          "Cache-Control",
          "no-store"
        );

        if (!session) {
          return res.status(401).json({
            ok: false,
            signedIn: false
          });
        }

        const cardNumber =
          String(req.params.card || "")
            .padStart(2, "0");

        const card =
          THE52_CARDS[cardNumber];

        if (!card) {
          return res.status(404).json({
            ok: false,
            error:
              "THE 52 card is not available."
          });
        }

        const tokenIds =
          await getCardTokenIds(card);

        const ownedTokenIds =
          await accountOwnedTokenIds(
            session.xrpl_address,
            tokenIds
          );

        return res.json({
          ok: true,
          signedIn: true,
          card: cardNumber,
          name: card.name,
          xrplAddress:
            session.xrpl_address,
          released:
            tokenIds.length > 0,
          mintedSupply:
            tokenIds.length,
          owner:
            ownedTokenIds.length > 0,
          ownedCount:
            ownedTokenIds.length,
          ownedTokenIds
        });
      } catch (error) {
        console.error(
          "THE 52 ownership lookup failed",
          error
        );

        return res.status(503).json({
          ok: false,
          error:
            "Ownership verification unavailable"
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

        if (!session) {
          clearSessionCookie(res);

          return res.json({
            ok: true
          });
        }

        const supplied =
          String(
            req.headers["x-hoc-csrf"] || ""
          );

        if (
          !safeEqual(
            supplied,
            session.csrfToken
          )
        ) {
          return res.sendStatus(403);
        }

        await pool.query(`
          UPDATE holder_wallet_sessions
          SET revoked_at = NOW()
          WHERE id = $1
        `, [session.id]);

        clearSessionCookie(res);

        return res.json({
          ok: true
        });
      } catch (error) {
        console.error(
          "Holder logout failed",
          error
        );

        clearSessionCookie(res);

        return res.status(500).json({
          ok: false
        });
      }
    }
  );

  return {
    router,
    getSession
  };
}

module.exports = {
  createHolderAuth
};
