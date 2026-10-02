const fs = require("fs");
const { Client, Wallet, getNFTokenID } = require("xrpl");
const { Pool } = require("pg");

const ISSUER = "rfgFM8z2abu2uahXFaRre8aWw9PEv48QbS";
const TAXON = 520026;
const FLAGS = 8;
const TRANSFER_FEE = 5000;

const XRPL_WS =
  process.env.THE52_XRPL_WS ||
  "wss://xrplcluster.com";

const ENV_FILE = "/etc/house-nft-enrollment.env";

function envValue(name) {
  const line = fs.readFileSync(ENV_FILE, "utf8")
    .split(/\r?\n/)
    .find(x => x.startsWith(`${name}=`));

  return line
    ? line.slice(name.length + 1).trim()
    : null;
}

const DATABASE_URL =
  process.env.DATABASE_URL ||
  envValue("DATABASE_URL");

const ISSUER_SEED_FILE =
  process.env.THE52_ISSUER_SEED_FILE ||
  "/etc/house-the52-mint.seed";

if (!DATABASE_URL) {
  throw new Error("DATABASE_URL is required");
}

function readIssuerWallet() {
  const seed = fs.readFileSync(
    ISSUER_SEED_FILE,
    "utf8"
  ).trim();

  if (!seed) {
    throw new Error("Issuer seed file is empty");
  }

  const wallet = Wallet.fromSeed(seed);

  if (wallet.address !== ISSUER) {
    throw new Error(
      "Issuer seed does not match locked THE 52 issuer"
    );
  }

  return wallet;
}

const pool = new Pool({
  connectionString: DATABASE_URL
});

function uriHex(uri) {
  return Buffer.from(uri, "utf8")
    .toString("hex")
    .toUpperCase();
}

async function getDrop(dropId) {
  const r = await pool.query(`
    SELECT id, drop_date, drop_name, frozen_at, metadata_uri
    FROM nft_weekly_drops
    WHERE id=$1
  `, [dropId]);

  if (!r.rowCount) {
    throw new Error(`Drop ${dropId} not found`);
  }

  return r.rows[0];
}

async function bindMetadata(dropId, metadataUri) {
  if (!metadataUri || !metadataUri.startsWith("ipfs://")) {
    throw new Error("Metadata URI must be ipfs://...");
  }

  await getDrop(dropId);

  const locked = await pool.query(`
    SELECT EXISTS (
      SELECT 1
      FROM nft_weekly_recipients
      WHERE drop_id=$1
        AND (
          mint_attempts > 0
          OR mint_tx_hash IS NOT NULL
          OR nftoken_id IS NOT NULL
          OR mint_status IS DISTINCT FROM 'pending'
        )
    )
    OR EXISTS (
      SELECT 1
      FROM nft_weekly_public_copies
      WHERE drop_id=$1
        AND (
          mint_attempts > 0
          OR mint_tx_hash IS NOT NULL
          OR nftoken_id IS NOT NULL
          OR mint_status IS DISTINCT FROM 'pending'
        )
    ) AS locked
  `, [dropId]);

  if (locked.rows[0].locked) {
    throw new Error("Metadata cannot change after mint activity begins");
  }

  await pool.query(`
    UPDATE nft_weekly_drops
    SET metadata_uri=$2
    WHERE id=$1
  `, [dropId, metadataUri]);

  console.log(`Drop ${dropId} metadata bound`);
  console.log(metadataUri);
}

async function fetchTx(client, txHash) {
  try {
    const r = await client.request({
      command: "tx",
      transaction: txHash,
      binary: false
    });

    return r.result;
  } catch (e) {
    const code = String(
      e?.data?.error || e?.message || ""
    );

    if (code.includes("txnNotFound")) {
      return null;
    }

    throw e;
  }
}

async function finalizeRecipientMint(row, tx) {
  if (
    tx.validated !== true ||
    tx.meta?.TransactionResult !== "tesSUCCESS"
  ) {
    throw new Error(
      `Mint ${row.mint_tx_hash} is not validated tesSUCCESS`
    );
  }

  const nftId = getNFTokenID(tx.meta);

  if (!nftId) {
    throw new Error("Unable to derive NFTokenID");
  }

  const issuerSelf = row.xrpl_address === ISSUER;

  const db = await pool.connect();

  try {
    await db.query("BEGIN");

    await db.query(`
      UPDATE nft_weekly_recipients
      SET
        mint_status='minted',
        nftoken_id=$2,
        mint_error=NULL,
        minted_at=NOW(),
        delivered=CASE WHEN $3 THEN TRUE ELSE delivered END,
        delivery_tx_hash=CASE WHEN $3 THEN mint_tx_hash ELSE delivery_tx_hash END,
        claim_offer_status=CASE WHEN $3 THEN 'not_required' ELSE claim_offer_status END
      WHERE id=$1
    `, [row.id, nftId, issuerSelf]);

    const edition = await db.query(`
      SELECT
        (
          SELECT COUNT(*)::int
          FROM nft_weekly_recipients
          WHERE
            drop_id=$1
            AND mint_status='minted'
            AND nftoken_id IS NOT NULL
        )
        +
        (
          SELECT COUNT(*)::int
          FROM nft_weekly_public_copies
          WHERE
            drop_id=$1
            AND mint_status='minted'
            AND nftoken_id IS NOT NULL
        ) AS verified_edition
    `, [row.drop_id]);

    await db.query(`
      UPDATE nft_weekly_mint_exceptions
      SET
        status='minted',
        edition_after=$4,
        nftoken_id=$2,
        mint_tx_hash=$3,
        minted_at=NOW(),
        completed_at=NOW(),
        failure_reason=NULL,
        updated_at=NOW()
      WHERE
        recipient_id=$1
        AND status IN ('approved','failed')
    `, [
      row.id,
      nftId,
      row.mint_tx_hash,
      Number(edition.rows[0].verified_edition)
    ]);

    await db.query("COMMIT");
  } catch (error) {
    try {
      await db.query("ROLLBACK");
    } catch {}

    throw error;
  } finally {
    db.release();
  }

  console.log(`MINT VERIFIED ${row.x_handle}`);
  console.log(`NFT ${nftId}`);

  if (issuerSelf) {
    console.log("Issuer-self subscriber: no claim offer required");
  }
}

async function finalizePublicMint(row, tx) {
  if (
    tx.validated !== true ||
    tx.meta?.TransactionResult !== "tesSUCCESS"
  ) {
    throw new Error(
      `Public mint ${row.mint_tx_hash} is not validated tesSUCCESS`
    );
  }

  const nftId = getNFTokenID(tx.meta);

  if (!nftId) {
    throw new Error("Unable to derive public NFTokenID");
  }

  await pool.query(`
    UPDATE nft_weekly_public_copies
    SET
      mint_status='minted',
      nftoken_id=$2,
      mint_error=NULL,
      minted_at=NOW()
    WHERE id=$1
  `, [row.id, nftId]);

  console.log("PUBLIC MINT VERIFIED");
  console.log(`NFT ${nftId}`);
}

function getCreatedOfferId(meta) {
  for (const item of meta?.AffectedNodes || []) {
    const node = item.CreatedNode;
    if (node?.LedgerEntryType === "NFTokenOffer") {
      return node.LedgerIndex;
    }
  }
  return null;
}

async function claimNext(dropId) {
  await getDrop(dropId);

  const q = await pool.query(`
    SELECT *
    FROM nft_weekly_recipients
    WHERE drop_id=$1
      AND mint_status='minted'
      AND delivered=FALSE
      AND xrpl_address <> $2
      AND claim_offer_status IS DISTINCT FROM 'open'
      AND claim_offer_status IS DISTINCT FROM 'accepted'
      AND claim_offer_status IS DISTINCT FROM 'blocked'
    ORDER BY id
    LIMIT 1
  `, [dropId, ISSUER]);

  if (!q.rowCount) {
    console.log("No subscriber needs a claim offer");
    return;
  }

  const row = q.rows[0];
  const wallet = readIssuerWallet();
  const client = new Client(XRPL_WS);

  await client.connect();

  try {
    // Never submit an NFTokenCreateOffer to an XRPL account
    // that does not exist on the validated ledger.
    try {
      await client.request({
        command: "account_info",
        account: row.xrpl_address,
        ledger_index: "validated"
      });
    } catch (e) {
      const message =
        "Destination XRPL account does not exist. Claim blocked until wallet is activated.";

      await pool.query(`
        UPDATE nft_weekly_recipients
        SET
          claim_offer_status='blocked',
          claim_offer_tx_hash=NULL,
          claim_offer_id=NULL,
          claim_error=$2
        WHERE id=$1
      `, [row.id, message]);

      console.log(`BLOCKED ${row.x_handle}`);
      console.log(`Destination ${row.xrpl_address}`);
      console.log(message);
      return;
    }
    if (row.claim_offer_tx_hash) {
      const tx = await fetchTx(client, row.claim_offer_tx_hash);

      if (!tx) {
        throw new Error(
          `Stored claim hash ${row.claim_offer_tx_hash} not found. Retry blocked.`
        );
      }

      if (
        tx.validated !== true ||
        tx.meta?.TransactionResult !== "tesSUCCESS"
      ) {
        throw new Error(
          `Claim offer ${row.claim_offer_tx_hash} is not validated tesSUCCESS`
        );
      }

      const offerId = getCreatedOfferId(tx.meta);

      if (!offerId) {
        throw new Error("Unable to derive NFTokenOffer ID");
      }

      await pool.query(`
        UPDATE nft_weekly_recipients
        SET
          claim_offer_id=$2,
          claim_offer_status='open',
          claim_error=NULL,
          claim_created_at=NOW()
        WHERE id=$1
      `, [row.id, offerId]);

      console.log(`CLAIM OFFER VERIFIED ${row.x_handle}`);
      console.log(`Offer ${offerId}`);
      return;
    }

    const prepared = await client.autofill({
      TransactionType: "NFTokenCreateOffer",
      Account: ISSUER,
      NFTokenID: row.nftoken_id,
      Amount: "0",
      Flags: 1,
      Destination: row.xrpl_address
    });

    const signed = wallet.sign(prepared);

    await pool.query(`
      UPDATE nft_weekly_recipients
      SET
        claim_offer_status='submitting',
        claim_offer_tx_hash=$2,
        claim_attempts=claim_attempts+1,
        claim_error=NULL
      WHERE id=$1
    `, [row.id, signed.hash]);

    console.log(`Submitting claim offer ${row.x_handle}`);
    console.log(`Destination ${row.xrpl_address}`);
    console.log(`Tx ${signed.hash}`);

    try {
      const result = await client.submitAndWait(signed.tx_blob);

      if (
        result.result.validated !== true ||
        result.result.meta?.TransactionResult !== "tesSUCCESS"
      ) {
        throw new Error("Claim offer did not validate tesSUCCESS");
      }

      const offerId = getCreatedOfferId(result.result.meta);

      if (!offerId) {
        throw new Error("Unable to derive NFTokenOffer ID");
      }

      await pool.query(`
        UPDATE nft_weekly_recipients
        SET
          claim_offer_id=$2,
          claim_offer_status='open',
          claim_error=NULL,
          claim_created_at=NOW()
        WHERE id=$1
      `, [row.id, offerId]);

      console.log(`CLAIM OFFER VERIFIED ${row.x_handle}`);
      console.log(`Offer ${offerId}`);

    } catch (e) {
      await pool.query(`
        UPDATE nft_weekly_recipients
        SET claim_error=$2
        WHERE id=$1
      `, [row.id, String(e.message || e).slice(0,1000)]);
      throw e;
    }

  } finally {
    await client.disconnect();
  }
}

async function mintNext(dropId) {
  const drop = await getDrop(dropId);

  if (!drop.metadata_uri) {
    throw new Error("Drop metadata_uri is not bound");
  }

  const wallet = readIssuerWallet();
  const client = new Client(XRPL_WS);

  await client.connect();

  try {
    let q = await pool.query(`
      SELECT *
      FROM nft_weekly_recipients
      WHERE drop_id=$1
        AND mint_status IS DISTINCT FROM 'minted'
      ORDER BY id
      LIMIT 1
    `, [dropId]);

    if (q.rowCount) {
      const row = q.rows[0];

      if (row.mint_tx_hash) {
        const tx = await fetchTx(client, row.mint_tx_hash);

        if (!tx) {
          throw new Error(
            `Stored mint hash ${row.mint_tx_hash} not found. Retry blocked.`
          );
        }

        await finalizeRecipientMint(row, tx);
        return;
      }

      const prepared = await client.autofill({
        TransactionType: "NFTokenMint",
        Account: ISSUER,
        NFTokenTaxon: TAXON,
        Flags: FLAGS,
        TransferFee: TRANSFER_FEE,
        URI: uriHex(drop.metadata_uri)
      });

      const signed = wallet.sign(prepared);

      await pool.query(`
        UPDATE nft_weekly_recipients
        SET
          mint_status='submitting',
          mint_tx_hash=$2,
          mint_attempts=mint_attempts+1,
          mint_error=NULL
        WHERE id=$1
      `, [row.id, signed.hash]);

      console.log(`Submitting ${row.x_handle}`);
      console.log(`Tx ${signed.hash}`);

      try {
        const result = await client.submitAndWait(signed.tx_blob);

        await finalizeRecipientMint(
          { ...row, mint_tx_hash: signed.hash },
          result.result
        );
      } catch (e) {
        const failureReason =
          String(e.message || e).slice(0,1000);

        const db = await pool.connect();

        try {
          await db.query("BEGIN");

          await db.query(`
            UPDATE nft_weekly_recipients
            SET mint_error=$2
            WHERE id=$1
          `, [row.id, failureReason]);

          await db.query(`
            UPDATE nft_weekly_mint_exceptions
            SET
              status='failed',
              failure_reason=$2,
              updated_at=NOW()
            WHERE
              recipient_id=$1
              AND status='approved'
          `, [row.id, failureReason]);

          await db.query("COMMIT");
        } catch (auditError) {
          try {
            await db.query("ROLLBACK");
          } catch {}

          throw auditError;
        } finally {
          db.release();
        }

        throw e;
      }

      return;
    }

    q = await pool.query(`
      SELECT *
      FROM nft_weekly_public_copies
      WHERE drop_id=$1
        AND mint_status IS DISTINCT FROM 'minted'
      LIMIT 1
    `, [dropId]);

    if (!q.rowCount) {
      console.log("All mints complete");
      return;
    }

    const row = q.rows[0];

    if (row.mint_tx_hash) {
      const tx = await fetchTx(client, row.mint_tx_hash);

      if (!tx) {
        throw new Error(
          `Stored public mint hash ${row.mint_tx_hash} not found. Retry blocked.`
        );
      }

      await finalizePublicMint(row, tx);
      return;
    }

    const prepared = await client.autofill({
      TransactionType: "NFTokenMint",
      Account: ISSUER,
      NFTokenTaxon: TAXON,
      Flags: FLAGS,
      TransferFee: TRANSFER_FEE,
      URI: uriHex(drop.metadata_uri)
    });

    const signed = wallet.sign(prepared);

    await pool.query(`
      UPDATE nft_weekly_public_copies
      SET
        mint_status='submitting',
        mint_tx_hash=$2,
        mint_attempts=mint_attempts+1,
        mint_error=NULL
      WHERE id=$1
    `, [row.id, signed.hash]);

    console.log("Submitting public MONOLITH copy");
    console.log(`Tx ${signed.hash}`);

    try {
      const result = await client.submitAndWait(signed.tx_blob);

      await finalizePublicMint(
        { ...row, mint_tx_hash: signed.hash },
        result.result
      );
    } catch (e) {
      await pool.query(`
        UPDATE nft_weekly_public_copies
        SET mint_error=$2
        WHERE id=$1
      `, [row.id, String(e.message || e).slice(0,1000)]);

      throw e;
    }

  } finally {
    await client.disconnect();
  }
}







const MONOLITH_NFT_MARKET_BASE = "https://monolithxrpl.com";

async function monolithPost(path, body) {
  const response = await fetch(
    `${MONOLITH_NFT_MARKET_BASE}${path}`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(body)
    }
  );

  let data = null;

  try {
    data = await response.json();
  } catch (_) {
    data = null;
  }

  if (!response.ok) {
    const error = new Error(
      `MONOLITH ${path} failed HTTP ${response.status}: ` +
      `${data?.error || "unknown_error"}`
    );

    error.statusCode = response.status;
    error.responseData = data;
    throw error;
  }

  if (!data || data.ok !== true) {
    throw new Error(
      `MONOLITH ${path} returned invalid success response`
    );
  }

  return data;
}

function decodeNftUri(uriHexValue) {
  const value = String(uriHexValue || "").trim();

  if (!value || !/^[0-9A-Fa-f]+$/.test(value) || value.length % 2 !== 0) {
    return null;
  }

  try {
    return Buffer.from(value, "hex").toString("utf8");
  } catch (_) {
    return null;
  }
}

async function getOwnedNFToken(client, account, nftokenId) {
  let marker = undefined;

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

    const result = await client.request(request);

    const found = (result.result.account_nfts || []).find(
      nft => nft.NFTokenID === nftokenId
    );

    if (found) {
      return found;
    }

    marker = result.result.marker;
  } while (marker);

  return null;
}

function printXamanApproval(label, payloadUuid, signUrl) {
  console.log("");
  console.log(label);
  console.log(`Payload UUID: ${payloadUuid}`);

  if (signUrl) {
    console.log(`Xaman: ${signUrl}`);
  }

  console.log("");
  console.log(
    "Approve this exact request in Xaman, then rerun the same list-public command."
  );
}

async function listPublic(dropId, usdInput) {
  const drop = await getDrop(dropId);

  const usdText = String(usdInput || "").trim();

  if (!/^\d+(?:\.\d{1,2})?$/.test(usdText)) {
    throw new Error(
      "USD ask must be a positive dollar amount with at most 2 decimals"
    );
  }

  const usdNumber = Number(usdText);
  const askUsdCents = Math.round(usdNumber * 100);

  if (
    !Number.isFinite(usdNumber) ||
    usdNumber <= 0 ||
    !Number.isSafeInteger(askUsdCents) ||
    askUsdCents <= 0
  ) {
    throw new Error("Invalid USD ask");
  }

  if (!drop.metadata_uri || !drop.metadata_uri.startsWith("ipfs://")) {
    throw new Error("Drop metadata_uri is not bound");
  }

  const q = await pool.query(`
    SELECT *
    FROM nft_weekly_public_copies
    WHERE drop_id=$1
  `, [dropId]);

  if (q.rowCount !== 1) {
    throw new Error(
      `Expected exactly one public-copy row for drop ${dropId}; found ${q.rowCount}`
    );
  }

  let row = q.rows[0];

  if (row.destination !== "monolith_public") {
    throw new Error(
      `Public copy destination is ${row.destination}; expected monolith_public`
    );
  }

  if (row.mint_status !== "minted") {
    throw new Error(
      `Public copy is not minted; current mint_status=${row.mint_status}`
    );
  }

  if (
    !row.nftoken_id ||
    !/^[0-9A-Fa-f]{64}$/.test(row.nftoken_id)
  ) {
    throw new Error("Public copy does not have a valid NFTokenID");
  }

  if (row.monolith_listing_status === "active") {
    console.log("PUBLIC MONOLITH LISTING ALREADY ACTIVE");
    console.log(`Drop ID: ${dropId}`);
    console.log(`NFT: ${row.nftoken_id}`);
    console.log(`Listing ID: ${row.monolith_listing_id || "unknown"}`);
    console.log(`Status: ${row.monolith_listing_status}`);
    console.log(`Offer index: ${row.offer_index || "unknown"}`);
    console.log(`Authorization tx: ${row.authorization_tx_hash || "unknown"}`);
    return;
  }

  const client = new Client(XRPL_WS);
  await client.connect();

  try {
    const ownedNft = await getOwnedNFToken(
      client,
      ISSUER,
      row.nftoken_id
    );

    if (!ownedNft) {
      throw new Error(
        `Locked seller ${ISSUER} does not own public NFT ${row.nftoken_id}`
      );
    }

    const ledgerUri = decodeNftUri(ownedNft.URI);

    if (!ledgerUri) {
      throw new Error(
        "Unable to decode public NFT on-ledger URI"
      );
    }

    if (ledgerUri !== drop.metadata_uri) {
      throw new Error(
        `Public NFT metadata mismatch. Ledger=${ledgerUri} Drop=${drop.metadata_uri}`
      );
    }
  } finally {
    await client.disconnect();
  }

  /*
   * STAGE 1
   * No MONOLITH listing exists yet. Start or resume seller SignIn.
   */
  if (!row.monolith_listing_id) {
    if (!row.monolith_auth_payload_uuid) {
      let started;

      try {
        started = await monolithPost(
          "/api/nft-market/list/start",
          {
            nftId: row.nftoken_id,
            returnUrl: "https://monolithxrpl.com/nft-market/"
          }
        );
      } catch (e) {
        const existing = e.responseData?.activeListing;

        if (
          e.statusCode === 409 &&
          e.responseData?.error === "nft_already_listed" &&
          existing?.listingId
        ) {
          if (existing.nftId !== row.nftoken_id) {
            throw new Error(
              "Recovered MONOLITH listing NFTokenID mismatch"
            );
          }

          if (existing.sellerWallet !== ISSUER) {
            throw new Error(
              "Recovered MONOLITH listing seller mismatch"
            );
          }

          if (
            existing.askUsdCents != null &&
            existing.askUsdCents !== askUsdCents
          ) {
            throw new Error(
              `Recovered MONOLITH USD ask mismatch: expected ${askUsdCents}, got ${existing.askUsdCents}`
            );
          }

          const recoveredStatus =
            existing.status || "pending_sell_offer";

          if (recoveredStatus === "active") {
            if (!existing.sellTxHash) {
              throw new Error(
                "Recovered active MONOLITH listing missing authorization transaction hash"
              );
            }

            if (!existing.xrplOfferIndex) {
              throw new Error(
                "Recovered active MONOLITH listing missing XRPL offer index"
              );
            }

            await pool.query(`
              UPDATE nft_weekly_public_copies
              SET
                monolith_listing_id=$2,
                monolith_listing_status='active',
                authorization_tx_hash=$3,
                offer_index=$4,
                listed_at=COALESCE(listed_at, NOW())
              WHERE id=$1
            `, [
              row.id,
              existing.listingId,
              existing.sellTxHash,
              existing.xrplOfferIndex
            ]);

            console.log("");
            console.log("RECOVERED ACTIVE PUBLIC MONOLITH LISTING");
            console.log(`Drop ID: ${dropId}`);
            console.log(`NFT: ${row.nftoken_id}`);
            console.log(`Listing ID: ${existing.listingId}`);
            console.log(`USD ask: $${(askUsdCents / 100).toFixed(2)}`);
            console.log(`XRP ask: ${existing.askXrp || "not returned"}`);
            console.log(`Offer index: ${existing.xrplOfferIndex}`);
            console.log(`Authorization tx: ${existing.sellTxHash}`);
            console.log("Status: active");
            return;
          }

          await pool.query(`
            UPDATE nft_weekly_public_copies
            SET
              monolith_listing_id=$2,
              monolith_listing_status=$3
            WHERE id=$1
          `, [
            row.id,
            existing.listingId,
            recoveredStatus
          ]);

          row = {
            ...row,
            monolith_listing_id: existing.listingId,
            monolith_listing_status: recoveredStatus
          };

          console.log(
            `Recovered existing MONOLITH listing ${existing.listingId}`
          );
        } else {
          throw e;
        }
      }

      if (started) {
        const payloadUuid = started.auth?.payloadUuid;
        const signUrl = started.auth?.signUrl || null;

        if (!payloadUuid) {
          throw new Error(
            "MONOLITH list/start did not return auth payloadUuid"
          );
        }

        await pool.query(`
          UPDATE nft_weekly_public_copies
          SET
            monolith_listing_status='pending_seller_auth',
            monolith_auth_payload_uuid=$2,
            monolith_auth_sign_url=$3
          WHERE id=$1
        `, [row.id, payloadUuid, signUrl]);

        printXamanApproval(
          "XAMAN APPROVAL 1 OF 2: MONOLITH SELLER SIGN-IN",
          payloadUuid,
          signUrl
        );

        return;
      }
    }

    if (!row.monolith_listing_id) {
      console.log("Resuming existing MONOLITH seller SignIn");

      if (row.monolith_auth_sign_url) {
        console.log(`Xaman: ${row.monolith_auth_sign_url}`);
      }

      const verified = await monolithPost(
        "/api/nft-market/list/verify",
        {
          nftId: row.nftoken_id,
          payloadUuid: row.monolith_auth_payload_uuid,
          askUsdCents
        }
      );

      const listing = verified.listing;

      if (!listing?.listingId) {
        throw new Error(
          "MONOLITH list/verify did not return listingId"
        );
      }

      if (listing.nftId !== row.nftoken_id) {
        throw new Error(
          "MONOLITH returned listing for unexpected NFTokenID"
        );
      }

      if (listing.sellerWallet !== ISSUER) {
        throw new Error(
          `MONOLITH seller mismatch: ${listing.sellerWallet}`
        );
      }

      if (listing.askUsdCents !== askUsdCents) {
        throw new Error(
          `MONOLITH USD ask mismatch: expected ${askUsdCents}, got ${listing.askUsdCents}`
        );
      }

      await pool.query(`
        UPDATE nft_weekly_public_copies
        SET
          monolith_listing_id=$2,
          monolith_listing_status=$3
        WHERE id=$1
      `, [
        row.id,
        listing.listingId,
        listing.status || "pending_sell_offer"
      ]);

      row = {
        ...row,
        monolith_listing_id: listing.listingId,
        monolith_listing_status:
          listing.status || "pending_sell_offer"
      };

      console.log(
        `MONOLITH seller verified. Listing ${listing.listingId} created.`
      );
    }
  }

  /*
   * STAGE 2
   * MONOLITH listing exists. Start or resume broker authorization.
   */
  if (
    row.monolith_listing_status !== "active" &&
    !row.monolith_sell_payload_uuid
  ) {
    const sellStarted = await monolithPost(
      "/api/nft-market/sell-offer/start",
      {
        listingId: row.monolith_listing_id,
        returnUrl: "https://monolithxrpl.com/nft-market/"
      }
    );

    const payloadUuid = sellStarted.sellOffer?.payloadUuid;
    const signUrl = sellStarted.sellOffer?.signUrl || null;

    if (!payloadUuid) {
      throw new Error(
        "MONOLITH sell-offer/start did not return payloadUuid"
      );
    }

    await pool.query(`
      UPDATE nft_weekly_public_copies
      SET
        monolith_listing_status='pending_sell_offer',
        monolith_sell_payload_uuid=$2,
        monolith_sell_sign_url=$3
      WHERE id=$1
    `, [row.id, payloadUuid, signUrl]);

    printXamanApproval(
      "XAMAN APPROVAL 2 OF 2: MONOLITH BROKER AUTHORIZATION",
      payloadUuid,
      signUrl
    );

    return;
  }

  if (row.monolith_listing_status !== "active") {
    console.log("Resuming existing MONOLITH broker authorization");

    if (row.monolith_sell_sign_url) {
      console.log(`Xaman: ${row.monolith_sell_sign_url}`);
    }

    const verified = await monolithPost(
      "/api/nft-market/sell-offer/verify",
      {
        listingId: row.monolith_listing_id,
        payloadUuid: row.monolith_sell_payload_uuid
      }
    );

    const listing = verified.listing;

    if (!listing?.listingId) {
      throw new Error(
        "MONOLITH sell-offer/verify did not return listing"
      );
    }

    if (listing.listingId !== row.monolith_listing_id) {
      throw new Error("MONOLITH listing ID changed unexpectedly");
    }

    if (listing.nftId !== row.nftoken_id) {
      throw new Error(
        "MONOLITH active listing NFTokenID mismatch"
      );
    }

    if (listing.sellerWallet !== ISSUER) {
      throw new Error(
        "MONOLITH active listing seller mismatch"
      );
    }

    if (listing.status !== "active") {
      throw new Error(
        `MONOLITH listing is not active; status=${listing.status}`
      );
    }

    if (listing.askUsdCents !== askUsdCents) {
      throw new Error(
        `MONOLITH active USD ask mismatch: expected ${askUsdCents}, got ${listing.askUsdCents}`
      );
    }

    const authorizationTxHash =
      listing.sellTxHash ||
      verified.xrpl?.txHash ||
      verified.xrpl?.hash ||
      null;

    const offerIndex =
      listing.xrplOfferIndex ||
      verified.xrpl?.offerIndex ||
      null;

    if (!authorizationTxHash) {
      throw new Error(
        "MONOLITH active listing missing authorization transaction hash"
      );
    }

    if (!offerIndex) {
      throw new Error(
        "MONOLITH active listing missing XRPL offer index"
      );
    }

    await pool.query(`
      UPDATE nft_weekly_public_copies
      SET
        monolith_listing_status='active',
        authorization_tx_hash=$2,
        offer_index=$3,
        listed_at=COALESCE(listed_at, NOW())
      WHERE id=$1
    `, [
      row.id,
      authorizationTxHash,
      offerIndex
    ]);

    console.log("");
    console.log("PUBLIC MONOLITH LISTING ACTIVE");
    console.log(`Drop ID: ${dropId}`);
    console.log(`NFT: ${row.nftoken_id}`);
    console.log(`Listing ID: ${listing.listingId}`);
    console.log(`USD ask: $${(askUsdCents / 100).toFixed(2)}`);
    console.log(`XRP ask: ${listing.askXrp || "not returned"}`);
    console.log(`Offer index: ${offerIndex}`);
    console.log(`Authorization tx: ${authorizationTxHash}`);
    console.log(`Status: ${listing.status}`);
  }
}

async function mintAll(dropId) {
  await getDrop(dropId);

  let completed = 0;

  while (true) {
    const remainingRecipients = await pool.query(`
      SELECT count(*)::int AS count
      FROM nft_weekly_recipients
      WHERE drop_id=$1
        AND mint_status IS DISTINCT FROM 'minted'
    `, [dropId]);

    const remainingPublic = await pool.query(`
      SELECT count(*)::int AS count
      FROM nft_weekly_public_copies
      WHERE drop_id=$1
        AND mint_status IS DISTINCT FROM 'minted'
    `, [dropId]);

    const remaining =
      remainingRecipients.rows[0].count +
      remainingPublic.rows[0].count;

    if (remaining === 0) {
      console.log(`MINT ALL COMPLETE: ${completed} processed`);
      return;
    }

    console.log(`MINT ALL: ${remaining} remaining`);
    await mintNext(dropId);
    completed++;
  }
}

async function claimAll(dropId) {
  await getDrop(dropId);

  let completed = 0;

  while (true) {
    const remaining = await pool.query(`
      SELECT count(*)::int AS count
      FROM nft_weekly_recipients
      WHERE drop_id=$1
        AND mint_status='minted'
        AND delivered=FALSE
        AND xrpl_address <> $2
        AND claim_offer_status IS DISTINCT FROM 'open'
        AND claim_offer_status IS DISTINCT FROM 'accepted'
    `, [dropId, ISSUER]);

    if (remaining.rows[0].count === 0) {
      console.log(`CLAIM ALL COMPLETE: ${completed} processed`);
      return;
    }

    console.log(`CLAIM ALL: ${remaining.rows[0].count} remaining`);
    await claimNext(dropId);
    completed++;
  }
}

async function accountOwnsNFToken(client, account, nftokenId) {
  let marker = undefined;

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

    const result = await client.request(request);

    const found = (result.result.account_nfts || []).some(
      nft => nft.NFTokenID === nftokenId
    );

    if (found) {
      return true;
    }

    marker = result.result.marker;
  } while (marker);

  return false;
}

async function reconcileClaims(dropId) {
  await getDrop(dropId);

  const q = await pool.query(`
    SELECT *
    FROM nft_weekly_recipients
    WHERE drop_id=$1
      AND mint_status='minted'
      AND delivered=FALSE
      AND xrpl_address <> $2
      AND claim_offer_status IS DISTINCT FROM 'blocked'
    ORDER BY id
  `, [dropId, ISSUER]);

  if (!q.rowCount) {
    console.log("No subscriber deliveries need reconciliation");
    return;
  }

  const client = new Client(XRPL_WS);
  await client.connect();

  let accepted = 0;
  let pending = 0;

  try {
    for (const row of q.rows) {
      if (!row.nftoken_id) {
        console.log(`SKIP ${row.x_handle} missing NFTokenID`);
        pending++;
        continue;
      }

      const owns = await accountOwnsNFToken(
        client,
        row.xrpl_address,
        row.nftoken_id
      );

      if (!owns) {
        console.log(`PENDING ${row.x_handle}`);
        pending++;
        continue;
      }

      await pool.query(`
        UPDATE nft_weekly_recipients
        SET
          delivered=TRUE,
          claim_offer_status='accepted',
          claim_accepted_at=COALESCE(claim_accepted_at, NOW()),
          claim_error=NULL
        WHERE id=$1
      `, [row.id]);

      console.log(`DELIVERED ${row.x_handle}`);
      console.log(`NFT ${row.nftoken_id}`);
      accepted++;
    }
  } finally {
    await client.disconnect();
  }

  console.log(
    `Reconciliation complete: accepted=${accepted} pending=${pending}`
  );
}

async function reconcileAllClaims() {
  const q = await pool.query(`
    SELECT DISTINCT drop_id
    FROM nft_weekly_recipients
    WHERE mint_status='minted'
      AND delivered=FALSE
      AND xrpl_address <> $1
      AND claim_offer_status IS DISTINCT FROM 'blocked'
    ORDER BY drop_id
  `, [ISSUER]);

  if (!q.rowCount) {
    console.log("No THE 52 claims need reconciliation");
    return;
  }

  console.log(
    `Reconciling ${q.rowCount} THE 52 drop(s): ` +
    q.rows.map(row => row.drop_id).join(", ")
  );

  for (const row of q.rows) {
    console.log(`--- DROP ${row.drop_id} ---`);
    await reconcileClaims(Number(row.drop_id));
  }
}

async function dryRun(dropDate, metadataUri) {
  const recipients = await pool.query(`
    SELECT
      id,
      x_handle,
      xrpl_address
    FROM nft_subscriber_registrations
    WHERE eligible_week <= $1
      AND status <> 'excluded'
    ORDER BY x_handle
  `, [dropDate]);

  console.log(`THE 52 DRY RUN`);
  console.log(`Drop date: ${dropDate}`);
  console.log(`Issuer: ${ISSUER}`);
  console.log(`Taxon: ${TAXON}`);
  console.log(`Flags: ${FLAGS}`);
  console.log(`TransferFee: ${TRANSFER_FEE}`);
  console.log(`Metadata: ${metadataUri}`);
  console.log(`Subscribers: ${recipients.rowCount}`);
  console.log(`Public copies: 1`);
  console.log(`Expected total mints: ${recipients.rowCount + 1}`);

  for (const r of recipients.rows) {
    console.log(
      `SUBSCRIBER ${r.id} ${r.x_handle} -> ${r.xrpl_address}`
    );
  }

  console.log(`PUBLIC -> issuer retained for MONOLITH`);
}

async function preview(dropDate) {
  const recipients = await pool.query(`
    SELECT
      id,
      x_handle,
      xrpl_address,
      eligible_week,
      status
    FROM nft_subscriber_registrations
    WHERE eligible_week <= $1
      AND status <> 'excluded'
    ORDER BY x_handle
  `, [dropDate]);

  console.log(`Preview date: ${dropDate}`);
  console.log(`Eligible subscribers: ${recipients.rowCount}`);

  for (const r of recipients.rows) {
    console.log(
      `${r.id} ${r.x_handle} ${r.xrpl_address}`
    );
  }

  console.log(`Expected total mints: ${recipients.rowCount + 1}`);
}


async function migrateWalletChange(requestId) {
  if (!Number.isInteger(requestId)) {
    throw new Error("Invalid wallet change request ID");
  }

  const wallet = readIssuerWallet();
  const client = new Client(XRPL_WS);

  await client.connect();

  try {
    const requestResult = await pool.query(`
      SELECT *
      FROM nft_wallet_change_requests
      WHERE id=$1
      LIMIT 1
    `, [requestId]);

    if (!requestResult.rowCount) {
      throw new Error(`Wallet change ${requestId} not found`);
    }

    const change = requestResult.rows[0];

    if (change.status === "approved") {
      console.log(`Wallet change ${requestId} is already approved`);
      return;
    }

    if (change.status !== "pending") {
      throw new Error(
        `Wallet change ${requestId} is not pending`
      );
    }

    const registrationResult = await pool.query(`
      SELECT *
      FROM nft_subscriber_registrations
      WHERE id=$1
      LIMIT 1
    `, [change.registration_id]);

    if (!registrationResult.rowCount) {
      throw new Error(
        `Registration ${change.registration_id} not found`
      );
    }

    const registration = registrationResult.rows[0];

    const oldXHandle =
      String(change.old_x_handle || change.x_handle || "").trim();

    const newXHandle =
      String(change.new_x_handle || change.x_handle || "").trim();

    const oldXHandleNormalized =
      oldXHandle.replace(/^@/, "").toLowerCase();

    const newXHandleNormalized =
      newXHandle.replace(/^@/, "").toLowerCase();

    const handleChanged =
      oldXHandleNormalized !== newXHandleNormalized;

    const walletChanged =
      String(change.old_xrpl_address || "") !==
      String(change.new_xrpl_address || "");

    if (
      String(registration.xrpl_address || "") !==
      String(change.old_xrpl_address || "")
    ) {
      throw new Error(
        "Subscriber wallet changed after this request was submitted"
      );
    }

    if (!handleChanged && !walletChanged) {
      throw new Error(
        "Registration change does not modify the X handle or wallet"
      );
    }

    if (handleChanged) {
      const duplicateHandle = await pool.query(`
        SELECT id
        FROM nft_subscriber_registrations
        WHERE
          x_handle_normalized=$1
          AND id<>$2
        LIMIT 1
      `, [
        newXHandleNormalized,
        change.registration_id
      ]);

      if (duplicateHandle.rowCount) {
        throw new Error(
          `X handle @${newXHandleNormalized} is already registered`
        );
      }
    }

    if (!walletChanged) {
      const db = await pool.connect();

      try {
        await db.query("BEGIN");

        const lockedRequest = await db.query(`
          SELECT *
          FROM nft_wallet_change_requests
          WHERE id=$1
            AND status='pending'
          FOR UPDATE
        `, [requestId]);

        if (!lockedRequest.rowCount) {
          throw new Error(
            "Registration change request is no longer pending"
          );
        }

        const lockedRegistration = await db.query(`
          SELECT *
          FROM nft_subscriber_registrations
          WHERE id=$1
          FOR UPDATE
        `, [change.registration_id]);

        if (
          !lockedRegistration.rowCount ||
          String(lockedRegistration.rows[0].xrpl_address) !==
            String(change.old_xrpl_address) ||
          String(
            lockedRegistration.rows[0].x_handle_normalized || ""
          ).toLowerCase() !== oldXHandleNormalized
        ) {
          throw new Error(
            "Subscriber registration changed while request was pending"
          );
        }

        await db.query(`
          UPDATE nft_subscriber_registrations
          SET
            x_handle=$1,
            x_handle_normalized=$2,
            updated_at=NOW()
          WHERE id=$3
        `, [
          `@${newXHandleNormalized}`,
          newXHandleNormalized,
          change.registration_id
        ]);

        /*
         * Keep undelivered recipient identity aligned with the
         * corrected subscriber registration. Historical delivered
         * recipient records remain unchanged.
         */
        await db.query(`
          UPDATE nft_weekly_recipients
          SET x_handle=$1
          WHERE
            registration_id=$2
            AND delivered=FALSE
        `, [
          `@${newXHandleNormalized}`,
          change.registration_id
        ]);

        await db.query(`
          UPDATE nft_wallet_change_requests
          SET
            status='approved',
            reviewed_at=NOW()
          WHERE id=$1
        `, [requestId]);

        await db.query("COMMIT");

        console.log(
          `HANDLE CHANGE APPROVED ${oldXHandle} -> ` +
          `@${newXHandleNormalized}`
        );
      } catch (e) {
        await db.query("ROLLBACK");
        throw e;
      } finally {
        db.release();
      }

      return;
    }

    try {
      await client.request({
        command: "account_info",
        account: change.new_xrpl_address,
        ledger_index: "validated"
      });
    } catch {
      throw new Error(
        `New wallet is not activated on XRPL: ${change.new_xrpl_address}`
      );
    }

    const recipients = await pool.query(`
      SELECT *
      FROM nft_weekly_recipients
      WHERE registration_id=$1
        AND mint_status='minted'
        AND delivered=FALSE
        AND xrpl_address=$2
        AND claim_offer_status='open'
      ORDER BY id
    `, [
      change.registration_id,
      change.old_xrpl_address
    ]);

    console.log(
      `Wallet migration ${requestId} ${change.x_handle}: ` +
      `${recipients.rowCount} open THE 52 claim(s)`
    );

    const migrations = [];

    for (const row of recipients.rows) {
      if (!row.nftoken_id) {
        throw new Error(
          `Recipient ${row.id} has no NFT ID`
        );
      }

      /*
       * Read the issuer's validated NFT offer objects directly.
       * Do not use nft_sell_offers with nft_id here.
       */
      const offerObjects = await client.request({
        command: "account_objects",
        account: ISSUER,
        type: "nft_offer",
        ledger_index: "validated"
      });

      const offers =
        offerObjects.result?.account_objects || [];

      const oldOffer = offers.find(offer =>
        String(offer.index || "") ===
          String(row.claim_offer_id || "") &&
        String(offer.NFTokenID || "") ===
          String(row.nftoken_id) &&
        String(offer.Owner || "") === String(ISSUER) &&
        String(offer.Destination || "") ===
          String(change.old_xrpl_address)
      );

      const newOffer = offers.find(offer =>
        String(offer.NFTokenID || "") ===
          String(row.nftoken_id) &&
        String(offer.Owner || "") === String(ISSUER) &&
        String(offer.Destination || "") ===
          String(change.new_xrpl_address)
      );

      /*
       * Recovery case:
       *
       * If the replacement offer already exists, it means a previous
       * execution got through XRPL but may not have completed the DB
       * transaction. Reuse that offer instead of creating another one.
       */
      if (newOffer) {
        console.log(
          `EXISTING REPLACEMENT ${row.x_handle} ` +
          `offer ${newOffer.index}`
        );

        /*
         * If the old offer survived alongside the replacement, remove it.
         * There must never be two valid delivery offers for this claim.
         */
        if (oldOffer) {
          const cancelPrepared = await client.autofill({
            TransactionType: "NFTokenCancelOffer",
            Account: ISSUER,
            NFTokenOffers: [oldOffer.index]
          });

          const cancelSigned = wallet.sign(cancelPrepared);
          const cancelResult =
            await client.submitAndWait(cancelSigned.tx_blob);

          if (
            cancelResult.result.validated !== true ||
            cancelResult.result.meta?.TransactionResult !== "tesSUCCESS"
          ) {
            throw new Error(
              `Old offer cancellation failed for ${row.x_handle}: ` +
              `${cancelResult.result.meta?.TransactionResult || "unvalidated"}`
            );
          }

          console.log(
            `OLD OFFER REMOVED ${row.x_handle} ${oldOffer.index}`
          );
        }

        migrations.push({
          recipientId: row.id,
          nftokenId: row.nftoken_id,
          offerId: newOffer.index,
          txHash: row.claim_offer_tx_hash
        });

        continue;
      }

      /*
       * Normal case:
       * old offer exists, replacement doesn't.
       */
      if (oldOffer) {
        console.log(
          `CANCEL ${row.x_handle} ${oldOffer.index}`
        );

        const cancelPrepared = await client.autofill({
          TransactionType: "NFTokenCancelOffer",
          Account: ISSUER,
          NFTokenOffers: [oldOffer.index]
        });

        const cancelSigned = wallet.sign(cancelPrepared);
        const cancelResult =
          await client.submitAndWait(cancelSigned.tx_blob);

        if (
          cancelResult.result.validated !== true ||
          cancelResult.result.meta?.TransactionResult !== "tesSUCCESS"
        ) {
          throw new Error(
            `Cancellation failed for ${row.x_handle}: ` +
            `${cancelResult.result.meta?.TransactionResult || "unvalidated"}`
          );
        }

        console.log(
          `OLD OFFER CANCELED ${row.x_handle}`
        );
      }

      /*
       * Recovery case:
       * old offer may have already been canceled by a previous attempt.
       * Before creating anything, confirm the issuer still owns the NFT.
       */
      const issuerNFTs = await client.request({
        command: "account_nfts",
        account: ISSUER,
        ledger_index: "validated"
      });

      const issuerOwnsNFT =
        (issuerNFTs.result?.account_nfts || []).some(
          nft => String(nft.NFTokenID) === String(row.nftoken_id)
        );

      if (!issuerOwnsNFT) {
        throw new Error(
          `Issuer no longer owns NFT ${row.nftoken_id}; ` +
          `refusing replacement offer`
        );
      }

      /*
       * Re-read issuer NFT offer objects after cancellation/recovery.
       *
       * Do not use nft_sell_offers here. The XRPL server does not
       * accept nft_id for that command in this environment.
       */
      const latestObjects = await client.request({
        command: "account_objects",
        account: ISSUER,
        type: "nft_offer",
        ledger_index: "validated"
      });

      const replacementAlreadyExists =
        (latestObjects.result?.account_objects || []).find(offer =>
          String(offer.NFTokenID || "") === String(row.nftoken_id) &&
          String(offer.Owner || "") === String(ISSUER) &&
          String(offer.Destination || "") ===
            String(change.new_xrpl_address)
        );

      if (replacementAlreadyExists) {
        migrations.push({
          recipientId: row.id,
          nftokenId: row.nftoken_id,
          offerId: replacementAlreadyExists.index,
          txHash: row.claim_offer_tx_hash
        });

        console.log(
          `REUSING EXISTING REPLACEMENT ${row.x_handle} ` +
          `offer ${replacementAlreadyExists.index}`
        );

        continue;
      }

      const prepared = await client.autofill({
        TransactionType: "NFTokenCreateOffer",
        Account: ISSUER,
        NFTokenID: row.nftoken_id,
        Amount: "0",
        Flags: 1,
        Destination: change.new_xrpl_address
      });

      const signed = wallet.sign(prepared);

      console.log(
        `CREATE ${row.x_handle} replacement ${signed.hash}`
      );

      const result =
        await client.submitAndWait(signed.tx_blob);

      if (
        result.result.validated !== true ||
        result.result.meta?.TransactionResult !== "tesSUCCESS"
      ) {
        throw new Error(
          `Replacement offer failed for ${row.x_handle}: ` +
          `${result.result.meta?.TransactionResult || "unvalidated"}`
        );
      }

      const offerId = getCreatedOfferId(result.result.meta);

      if (!offerId) {
        throw new Error(
          `Unable to derive replacement offer ID for ${row.x_handle}`
        );
      }

      /*
       * Verify the replacement directly from the issuer's validated
       * NFT offer ledger objects.
       */
      const verify = await client.request({
        command: "account_objects",
        account: ISSUER,
        type: "nft_offer",
        ledger_index: "validated"
      });

      const replacement =
        (verify.result?.account_objects || []).find(offer =>
          String(offer.index || "") === String(offerId) &&
          String(offer.NFTokenID || "") === String(row.nftoken_id) &&
          String(offer.Owner || "") === String(ISSUER) &&
          String(offer.Destination || "") ===
            String(change.new_xrpl_address)
        );

      if (!replacement) {
        throw new Error(
          `Replacement offer ${offerId} could not be verified`
        );
      }

      migrations.push({
        recipientId: row.id,
        nftokenId: row.nftoken_id,
        offerId,
        txHash: signed.hash
      });

      console.log(
        `MIGRATION VERIFIED ${row.x_handle} ` +
        `NFT ${row.nftoken_id} OFFER ${offerId}`
      );
    }

    /*
     * Reconcile database state only after XRPL state is verified.
     * If this transaction fails, rerunning the command will detect
     * the already-existing replacement offer instead of minting/
     * creating another one.
     */
    const db = await pool.connect();

    try {
      await db.query("BEGIN");

      const lockedRequest = await db.query(`
        SELECT *
        FROM nft_wallet_change_requests
        WHERE id=$1
          AND status='pending'
        FOR UPDATE
      `, [requestId]);

      if (!lockedRequest.rowCount) {
        throw new Error(
          "Wallet change request is no longer pending"
        );
      }

      const lockedRegistration = await db.query(`
        SELECT *
        FROM nft_subscriber_registrations
        WHERE id=$1
        FOR UPDATE
      `, [change.registration_id]);

      if (
        !lockedRegistration.rowCount ||
        String(lockedRegistration.rows[0].xrpl_address) !==
          String(change.old_xrpl_address) ||
        String(
          lockedRegistration.rows[0].x_handle_normalized || ""
        ).toLowerCase() !== oldXHandleNormalized
      ) {
        throw new Error(
          "Subscriber registration changed while migration was running"
        );
      }

      for (const migration of migrations) {
        await db.query(`
          UPDATE nft_weekly_recipients
          SET
            xrpl_address=$2,
            claim_offer_status='open',
            claim_offer_id=$3,
            claim_offer_tx_hash=COALESCE($4, claim_offer_tx_hash),
            claim_error=NULL
          WHERE
            id=$1
            AND delivered=FALSE
        `, [
          migration.recipientId,
          change.new_xrpl_address,
          migration.offerId,
          migration.txHash
        ]);
      }

      await db.query(`
        UPDATE nft_subscriber_registrations
        SET
          xrpl_address=$1,
          x_handle=$2,
          x_handle_normalized=$3,
          wallet_verified=FALSE,
          updated_at=NOW()
        WHERE id=$4
      `, [
        change.new_xrpl_address,
        `@${newXHandleNormalized}`,
        newXHandleNormalized,
        change.registration_id
      ]);

      /*
       * Undelivered recipient rows follow the current subscriber
       * identity. Delivered historical records are preserved.
       */
      await db.query(`
        UPDATE nft_weekly_recipients
        SET x_handle=$1
        WHERE
          registration_id=$2
          AND delivered=FALSE
      `, [
        `@${newXHandleNormalized}`,
        change.registration_id
      ]);

      await db.query(`
        UPDATE nft_wallet_change_requests
        SET
          status='approved',
          reviewed_at=NOW()
        WHERE id=$1
      `, [requestId]);

      await db.query("COMMIT");

      console.log(
        `REGISTRATION CHANGE APPROVED ${oldXHandle} -> ` +
        `@${newXHandleNormalized} | ` +
        `${change.old_xrpl_address} -> ${change.new_xrpl_address}`
      );

      console.log(
        `Migrated ${migrations.length} THE 52 claim(s)`
      );
    } catch (e) {
      await db.query("ROLLBACK");
      throw e;
    } finally {
      db.release();
    }
  } finally {
    await client.disconnect();
  }
}

async function status(dropId) {
  const drop = await pool.query(
    "SELECT * FROM nft_weekly_drops WHERE id=$1",
    [dropId]
  );

  if (!drop.rowCount) {
    throw new Error(`Drop ${dropId} not found`);
  }

  const recipients = await pool.query(`
    SELECT
      id,
      x_handle,
      xrpl_address,
      mint_status,
      mint_tx_hash,
      mint_error,
      nftoken_id,
      claim_offer_status,
      claim_offer_id,
      claim_offer_tx_hash,
      claim_error,
      delivered
    FROM nft_weekly_recipients
    WHERE drop_id=$1
    ORDER BY id
  `, [dropId]);

  const publicCopy = await pool.query(`
    SELECT *
    FROM nft_weekly_public_copies
    WHERE drop_id=$1
  `, [dropId]);

  const rows = recipients.rows;

  const minted = rows.filter(r => r.mint_status === "minted").length;
  const mintPending = rows.length - minted;
  const delivered = rows.filter(r => r.delivered).length;
  const openClaims = rows.filter(r => r.claim_offer_status === "open").length;
  const acceptedClaims = rows.filter(r => r.claim_offer_status === "accepted").length;
  const claimSubmitting = rows.filter(r => r.claim_offer_status === "submitting").length;
  const mintErrors = rows.filter(r => r.mint_error).length;
  const claimErrors = rows.filter(r => r.claim_error).length;

  console.log("THE 52 DROP STATUS");
  console.log(`${drop.rows[0].drop_name} | ${drop.rows[0].drop_date}`);
  console.log(`Drop ID: ${dropId}`);
  console.log(`Metadata: ${drop.rows[0].metadata_uri || "UNBOUND"}`);
  console.log("");

  console.log(`Subscribers: ${rows.length}`);
  console.log(`Minted: ${minted}`);
  console.log(`Mint pending: ${mintPending}`);
  console.log(`Delivered: ${delivered}`);
  console.log(`Open claims: ${openClaims}`);
  console.log(`Accepted claims: ${acceptedClaims}`);
  console.log(`Claim submitting: ${claimSubmitting}`);
  console.log(`Mint errors: ${mintErrors}`);
  console.log(`Claim errors: ${claimErrors}`);

  if (publicCopy.rowCount) {
    const pub = publicCopy.rows[0];
    console.log("");
    console.log("PUBLIC MONOLITH COPY");
    console.log(`Mint status: ${pub.mint_status}`);
    console.log(`NFTokenID: ${pub.nftoken_id || "pending"}`);
    console.log(`Mint tx: ${pub.mint_tx_hash || "pending"}`);
    console.log(`Listing status: ${pub.monolith_listing_status || "pending"}`);
    console.log(`Listing ID: ${pub.monolith_listing_id || "pending"}`);
  } else {
    console.log("");
    console.log("PUBLIC MONOLITH COPY: missing");
  }

  const problemRows = rows.filter(
    r =>
      r.mint_error ||
      r.claim_error ||
      r.mint_status === "submitting" ||
      r.claim_offer_status === "submitting"
  );

  if (problemRows.length) {
    console.log("");
    console.log("ATTENTION");
    for (const r of problemRows) {
      console.log(
        `${r.id} ${r.x_handle} mint=${r.mint_status} claim=${r.claim_offer_status} delivered=${r.delivered}`
      );
      if (r.mint_error) console.log(`  mint_error: ${r.mint_error}`);
      if (r.claim_error) console.log(`  claim_error: ${r.claim_error}`);
    }
  }
}

(async () => {
  const command = process.argv[2];
  const dropId = Number(process.argv[3]);

  if (command === "dry-run") {
    const dropDate = process.argv[3];
    const metadataUri = process.argv[4];

    if (!/^\d{4}-\d{2}-\d{2}$/.test(dropDate || "")) {
      throw new Error("Invalid drop date");
    }

    if (!metadataUri || !metadataUri.startsWith("ipfs://")) {
      throw new Error("Metadata URI must be ipfs://...");
    }

    await dryRun(dropDate, metadataUri);
  } else if (command === "preview") {
    const dropDate = process.argv[3];

    if (!/^\d{4}-\d{2}-\d{2}$/.test(dropDate || "")) {
      throw new Error(
        "Usage: node the52-mint-runner.js preview YYYY-MM-DD"
      );
    }

    await preview(dropDate);
  } else if (command === "status" && Number.isInteger(dropId)) {
    await status(dropId);
  } else if (command === "bind-metadata" && Number.isInteger(dropId)) {
    await bindMetadata(dropId, process.argv[4]);
  } else if (command === "mint-next" && Number.isInteger(dropId)) {
    await mintNext(dropId);
  } else if (command === "mint-all" && Number.isInteger(dropId)) {
    if (process.argv[4] !== "CONFIRM_LIVE_MINT") {
      throw new Error(
        "mint-all requires CONFIRM_LIVE_MINT as the final argument"
      );
    }
    await mintAll(dropId);
  } else if (command === "claim-next" && Number.isInteger(dropId)) {
    await claimNext(dropId);
  } else if (command === "claim-all" && Number.isInteger(dropId)) {
    if (process.argv[4] !== "CONFIRM_LIVE_CLAIMS") {
      throw new Error(
        "claim-all requires CONFIRM_LIVE_CLAIMS as the final argument"
      );
    }
    await claimAll(dropId);
  } else if (command === "reconcile-claims" && Number.isInteger(dropId)) {
    await reconcileClaims(dropId);
  } else if (command === "reconcile-all-claims") {
    await reconcileAllClaims();
  } else if (command === "migrate-wallet-change" && Number.isInteger(dropId)) {
    await migrateWalletChange(dropId);
  } else if (command === "list-public" && Number.isInteger(dropId)) {
    await listPublic(dropId, process.argv[4]);
  } else {
    console.log(
      "Usage: node the52-mint-runner.js dry-run YYYY-MM-DD ipfs://CID | preview YYYY-MM-DD | status <drop_id> | bind-metadata <drop_id> ipfs://CID | mint-next <drop_id> | mint-all <drop_id> CONFIRM_LIVE_MINT | claim-next <drop_id> | claim-all <drop_id> CONFIRM_LIVE_CLAIMS | reconcile-claims <drop_id> | reconcile-all-claims | migrate-wallet-change <request_id> | list-public <drop_id> <usd_ask>"
    );
    process.exit(1);
  }

  await pool.end();
})().catch(error => {
  console.error("ERROR:", error.message);
  process.exit(1);
});
