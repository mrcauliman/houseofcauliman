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

const THE52_PRIVATE_MEDIA = {
  "01": "/opt/house-the52-private/01/THE52_01_The_Builder_MASTER.png"
};

const MONOLITH_MARKET_URL =
  "https://monolithxrpl.com/nft-market/";
const MONOLITH_API_ORIGIN =
  "https://monolithxrpl.com";
const MONOLITH_LOOKUP_TIMEOUT_MS = 4000;

async function getMonolithNftLastSale(nftId) {
  const id = String(nftId || "").trim();

  if (!id) return null;

  const controller = new AbortController();
  const timer = setTimeout(
    () => controller.abort(),
    MONOLITH_LOOKUP_TIMEOUT_MS
  );

  try {
    const response = await fetch(
      `${MONOLITH_API_ORIGIN}/api/nft-market/nft/${encodeURIComponent(id)}/last-sale`,
      {
        signal: controller.signal,
        headers: {
          accept: "application/json"
        }
      }
    );

    if (!response.ok) {
      throw new Error(
        `MONOLITH NFT last-sale HTTP ${response.status}`
      );
    }

    const data = await response.json();

    if (
      data?.ok !== true ||
      data?.nftId !== id
    ) {
      throw new Error(
        "MONOLITH NFT last-sale response invalid"
      );
    }

    return data.lastSale || null;
  } finally {
    clearTimeout(timer);
  }
}

async function getMonolithListingState(listingId) {
  const id = String(listingId || "").trim();

  if (!id) return null;

  const controller = new AbortController();
  const timer = setTimeout(
    () => controller.abort(),
    MONOLITH_LOOKUP_TIMEOUT_MS
  );

  try {
    const response = await fetch(
      `${MONOLITH_API_ORIGIN}/api/nft-market/listing-state/${encodeURIComponent(id)}`,
      {
        signal: controller.signal,
        headers: {
          accept: "application/json"
        }
      }
    );

    if (response.status === 404) {
      return {
        status: "not_found",
        listingId: id
      };
    }

    if (!response.ok) {
      throw new Error(
        `MONOLITH listing-state HTTP ${response.status}`
      );
    }

    const listing = await response.json();

    if (
      listing?.ok !== true ||
      listing?.listingId !== id ||
      !String(listing?.status || "").trim()
    ) {
      throw new Error(
        "MONOLITH listing-state response invalid"
      );
    }

    return {
      status: String(listing.status).trim(),
      listingId: id
    };
  } finally {
    clearTimeout(timer);
  }
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

  async function getCardLastSale(tokenIds) {
    if (!tokenIds.length) {
      return {
        sale: null,
        source: "xrpl",
        stale: false
      };
    }

    try {
      const results = [];
      const batchSize = 6;

      for (
        let i = 0;
        i < tokenIds.length;
        i += batchSize
      ) {
        const batch =
          tokenIds.slice(i, i + batchSize);

        const batchResults = await Promise.all(
          batch.map(async nftId => {
            const sale =
              await getMonolithNftLastSale(nftId);

            return sale
              ? {
                  ...sale,
                  nftId
                }
              : null;
          })
        );

        results.push(...batchResults);
      }

      const sales = results
        .filter(Boolean)
        .sort((a, b) => {
          const ledgerDiff =
            Number(b.ledgerIndex || 0) -
            Number(a.ledgerIndex || 0);

          if (ledgerDiff !== 0) {
            return ledgerDiff;
          }

          return (
            Date.parse(b.soldAt || 0) -
            Date.parse(a.soldAt || 0)
          );
        });

      return {
        sale: sales[0] || null,
        source: "xrpl",
        stale: false
      };
    } catch (error) {
      console.error(
        "THE 52 XRPL last-sale lookup failed",
        error
      );

      return {
        sale: null,
        source: "xrpl",
        stale: true
      };
    }
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
    "/the52/:card/claim",
    ownershipLimiter,
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

        const cardNumber =
          String(req.params.card || "").padStart(2, "0");

        const card = THE52_CARDS[cardNumber];

        if (!card) {
          return res.status(404).json({
            ok: false,
            error: "THE 52 card is not available."
          });
        }

        const result = await pool.query(`
          SELECT
            r.id,
            r.x_handle,
            r.xrpl_address,
            r.nftoken_id,
            r.claim_offer_id,
            r.claim_offer_status,
            r.claim_accept_status,
            r.claim_accept_payload_uuid,
            r.claim_accept_tx_hash,
            r.claim_accept_error,
            r.claim_accepted_at
          FROM nft_weekly_recipients r
          JOIN nft_weekly_drops d
            ON d.id = r.drop_id
          WHERE
            d.drop_date = $1
            AND r.mint_status = 'minted'
            AND LOWER(r.xrpl_address) = LOWER($2)
          ORDER BY r.id DESC
          LIMIT 1
        `, [
          card.dropDate,
          session.xrpl_address
        ]);

        if (!result.rowCount) {
          return res.json({
            ok: true,
            signedIn: true,
            card: cardNumber,
            claim: null
          });
        }

        const row = result.rows[0];

        return res.json({
          ok: true,
          signedIn: true,
          card: cardNumber,
          claim: {
            recipientId: row.id,
            xHandle: row.x_handle,
            xrplAddress: row.xrpl_address,
            nftokenId: row.nftoken_id,
            offerId: row.claim_offer_id,
            offerStatus: row.claim_offer_status,
            acceptStatus: row.claim_accept_status,
            acceptPayloadUuid: row.claim_accept_payload_uuid,
            acceptTxHash: row.claim_accept_tx_hash,
            acceptError: row.claim_accept_error,
            acceptedAt: row.claim_accepted_at
          }
        });
      } catch (error) {
        console.error(
          "THE 52 claim lookup failed",
          error
        );

        return res.status(503).json({
          ok: false,
          error: "Claim lookup unavailable"
        });
      }
    }
  );

  router.post(
    "/the52/:card/claim/accept",
    ownershipLimiter,
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

        if (!configured || !xumm) {
          return res.status(503).json({
            ok: false,
            error: "Xaman signing is not configured."
          });
        }

        const cardNumber =
          String(req.params.card || "").padStart(2, "0");

        const card = THE52_CARDS[cardNumber];

        if (!card) {
          return res.status(404).json({
            ok: false,
            error: "THE 52 card is not available."
          });
        }

        const result = await pool.query(`
          SELECT
            r.*
          FROM nft_weekly_recipients r
          JOIN nft_weekly_drops d
            ON d.id = r.drop_id
          WHERE
            d.drop_date = $1
            AND r.mint_status = 'minted'
            AND LOWER(r.xrpl_address) = LOWER($2)
          ORDER BY r.id DESC
          LIMIT 1
        `, [
          card.dropDate,
          session.xrpl_address
        ]);

        if (!result.rowCount) {
          return res.status(404).json({
            ok: false,
            error: "No THE 52 claim is assigned to this wallet."
          });
        }

        const row = result.rows[0];

        if (!row.nftoken_id) {
          return res.status(409).json({
            ok: false,
            error: "NFT has not been minted for this claim."
          });
        }

        if (!row.claim_offer_id) {
          return res.status(409).json({
            ok: false,
            error: "No open claim offer exists."
          });
        }

        if (
          row.claim_offer_status === "accepted" ||
          row.delivered === true
        ) {
          return res.json({
            ok: true,
            alreadyAccepted: true,
            delivered: true,
            nftokenId: row.nftoken_id
          });
        }

        if (
          row.claim_accept_status === "pending" &&
          row.claim_accept_payload_uuid
        ) {
          const existing =
            await xumm.payload.get(
              row.claim_accept_payload_uuid
            );

          if (
            existing?.meta?.resolved === true &&
            existing?.meta?.signed === true
          ) {
            return res.status(409).json({
              ok: false,
              error:
                "Existing acceptance is resolving. " +
                "Refresh shortly."
            });
          }

          return res.json({
            ok: true,
            pending: true,
            payloadUuid:
              row.claim_accept_payload_uuid,
            payloadUrl:
              existing?.next?.always || null,
            nftokenId: row.nftoken_id,
            offerId: row.claim_offer_id
          });
        }

        const client = new Client(XRPL_WS);
        await client.connect();

        try {
          const offerResponse =
            await client.request({
              command: "account_objects",
              account: ISSUER,
              type: "nft_offer",
              ledger_index: "validated"
            });

          const offers =
            offerResponse.result?.account_objects || [];

          const matching =
            offers.find(offer =>
              String(offer.index || "") ===
                String(row.claim_offer_id) &&
              String(offer.NFTokenID || "") ===
                String(row.nftoken_id) &&
              String(offer.Owner || "") ===
                String(ISSUER) &&
              String(offer.Destination || "") ===
                String(session.xrpl_address)
            );

          if (!matching) {
            return res.status(409).json({
              ok: false,
              error:
                "The assigned claim offer is no longer open " +
                "or does not match this wallet."
            });
          }

          const created =
            await xumm.payload.create({
              txjson: {
                TransactionType:
                  "NFTokenAcceptOffer",

                NFTokenSellOffer:
                  row.claim_offer_id
              },

              options: {
                force_network: "MAINNET",

                return_url: {
                  web:
                    `${API_ORIGIN}` +
                    `/holder/the52/${cardNumber}/claim/callback` +
                    `?payload={id}`,

                  app:
                    `${API_ORIGIN}` +
                    `/holder/the52/${cardNumber}/claim/callback` +
                    `?payload={id}`
                }
              },

              custom_meta: {
                identifier:
                  `hoc-the52-claim-${row.id}`,

                instruction:
                  `Accept THE 52 #${cardNumber} ` +
                  `${card.name} NFT. ` +
                  `No payment is required.`
              }
            });

          if (
            !created?.uuid ||
            !created?.next?.always
          ) {
            throw new Error(
              "Xaman did not return a valid acceptance payload"
            );
          }

          await pool.query(`
            UPDATE nft_weekly_recipients
            SET
              claim_accept_payload_uuid = $2,
              claim_accept_status = 'pending',
              claim_accept_attempts =
                claim_accept_attempts + 1,
              claim_accept_error = NULL
            WHERE id = $1
          `, [
            row.id,
            created.uuid
          ]);

          return res.json({
            ok: true,
            pending: true,
            payloadUuid: created.uuid,
            payloadUrl: created.next.always,
            nftokenId: row.nftoken_id,
            offerId: row.claim_offer_id
          });
        } finally {
          await client.disconnect();
        }
      } catch (error) {
        console.error(
          "THE 52 claim acceptance creation failed",
          error
        );

        return res.status(500).json({
          ok: false,
          error:
            "Could not create the Xaman acceptance request."
        });
      }
    }
  );

  router.get(
    "/the52/:card/claim/callback",
    async (req, res) => {
      const payloadUuid =
        String(req.query.payload || "").trim();

      try {
        await ensureTables();

        if (
          !configured ||
          !xumm ||
          !/^[0-9a-fA-F-]{36}$/.test(payloadUuid)
        ) {
          return res.status(400).send(
            "Invalid claim acceptance response."
          );
        }

        const payload =
          await xumm.payload.get(payloadUuid);

        if (!payload) {
          return res.status(404).send(
            "Claim acceptance payload not found."
          );
        }

        const meta =
          payload.meta || {};

        if (
          meta.resolved !== true ||
          meta.signed !== true
        ) {
          return res.redirect(
            303,
            `${WEB_ORIGIN}/the52/?claim=rejected`
          );
        }

        const txHash =
          String(
            payload.response?.txid ||
            ""
          ).trim();

        if (!txHash) {
          throw new Error(
            "Signed claim acceptance has no transaction hash"
          );
        }

        const cardNumber =
          String(req.params.card || "")
            .padStart(2, "0");

        const client = new Client(XRPL_WS);
        await client.connect();

        try {
          const tx = await client.request({
            command: "tx",
            transaction: txHash,
            binary: false
          });

          const result =
            tx.result;

          if (
            result.validated !== true ||
            result.meta?.TransactionResult !==
              "tesSUCCESS"
          ) {
            throw new Error(
              "Claim acceptance did not validate tesSUCCESS"
            );
          }

          if (
            result.tx_json?.TransactionType !==
              "NFTokenAcceptOffer"
          ) {
            throw new Error(
              "Unexpected transaction type"
            );
          }

          const acceptedOffer =
            String(
              result.tx_json?.NFTokenSellOffer ||
              ""
            );

          if (!acceptedOffer) {
            throw new Error(
              "Accepted offer ID missing"
            );
          }

          const update = await pool.query(`
            UPDATE nft_weekly_recipients
            SET
              claim_accept_tx_hash = $2,
              claim_accept_status = 'submitted',
              claim_accept_error = NULL
            WHERE
              claim_accept_payload_uuid = $1
              AND claim_offer_id = $3
            RETURNING id, xrpl_address, nftoken_id
          `, [
            payloadUuid,
            txHash,
            acceptedOffer
          ]);

          if (!update.rowCount) {
            throw new Error(
              "Acceptance payload does not match an assigned claim"
            );
          }

          return res.redirect(
            303,
            `${WEB_ORIGIN}/the52/?claim=accepted`
          );
        } finally {
          await client.disconnect();
        }
      } catch (error) {
        console.error(
          "THE 52 claim acceptance callback failed",
          error
        );

        try {
          await pool.query(`
            UPDATE nft_weekly_recipients
            SET
              claim_accept_status = 'error',
              claim_accept_error = $2
            WHERE claim_accept_payload_uuid = $1
          `, [
            payloadUuid,
            String(error.message || error).slice(0, 1000)
          ]);
        } catch {}

        return res.redirect(
          303,
          `${WEB_ORIGIN}/the52/?claim=error`
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

        const released = row.released === true;

        if (!released) {
          return res.json({
            ok: true,
            card: cardNumber,
            name: card.name,
            released: false,
            releasedAt: null
          });
        }

        const tokenIds = await getCardTokenIds(card);

        const lastSale =
          await getCardLastSale(tokenIds);

        const listingResult = await pool.query(`
          SELECT
            p.monolith_listing_id,
            p.monolith_listing_status
          FROM nft_weekly_public_copies p
          JOIN nft_weekly_drops d
            ON d.id = p.drop_id
          WHERE d.drop_date = $1
          ORDER BY p.id DESC
          LIMIT 1
        `, [card.dropDate]);

        const listing = listingResult.rows[0] || {};
        const listingId =
          listing.monolith_listing_id || null;

        let listingStatus =
          listing.monolith_listing_status || null;
        let listingSource = "house_db";
        let listingStale = false;

        if (listingId) {
          try {
            const liveListing =
              await getMonolithListingState(listingId);

            if (liveListing) {
              listingStatus = liveListing.status;
              listingSource = "monolith";
            }
          } catch (error) {
            listingStale = true;
            console.error(
              "MONOLITH listing reconciliation failed",
              error
            );
          }
        }

        const listingActive =
          listingStatus === "active" &&
          listingSource === "monolith" &&
          listingStale === false;

        return res.json({
          ok: true,
          card: cardNumber,
          name: card.name,
          released: true,
          releasedAt: row.released_at || null,
          mintedSupply: tokenIds.length,
          imageUrl:
            `${API_ORIGIN}/holder/the52/${cardNumber}/media`,
          lastSale,
          monolith: {
            active: listingActive,
            status: listingStatus,
            listingId,
            url: listingActive ? MONOLITH_MARKET_URL : null,
            source: listingSource,
            stale: listingStale
          }
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
    "/the52/:card/media",
    async (req, res) => {
      try {
        await ensureTables();

        const cardNumber =
          String(req.params.card || "").padStart(2, "0");

        const card = THE52_CARDS[cardNumber];
        const mediaPath = THE52_PRIVATE_MEDIA[cardNumber];

        if (!card || !mediaPath) {
          return res.sendStatus(404);
        }

        const result = await pool.query(`
          SELECT released
          FROM the52_release_state
          WHERE card_number = $1
          LIMIT 1
        `, [cardNumber]);

        if (result.rows[0]?.released !== true) {
          return res.sendStatus(404);
        }

        res.setHeader("Cache-Control", "public, max-age=3600");

        return res.sendFile(mediaPath, error => {
          if (error && !res.headersSent) {
            console.error("THE 52 media send failed", error);
            res.sendStatus(404);
          }
        });
      } catch (error) {
        console.error("THE 52 media lookup failed", error);
        return res.sendStatus(503);
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

        const releaseResult = await pool.query(`
          SELECT released
          FROM the52_release_state
          WHERE card_number = $1
          LIMIT 1
        `, [cardNumber]);

        if (releaseResult.rows[0]?.released !== true) {
          return res.json({
            ok: true,
            signedIn: true,
            card: cardNumber,
            name: card.name,
            released: false,
            owner: false
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
    getSession,
    safeEqual
  };
}

module.exports = {
  createHolderAuth
};
