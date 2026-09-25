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
          OR mint_status <> 'pending'
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
          OR mint_status <> 'pending'
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

  await pool.query(`
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
      AND claim_offer_status <> 'open'
      AND claim_offer_status <> 'accepted'
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
        AND mint_status <> 'minted'
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
        await pool.query(`
          UPDATE nft_weekly_recipients
          SET mint_error=$2
          WHERE id=$1
        `, [row.id, String(e.message || e).slice(0,1000)]);

        throw e;
      }

      return;
    }

    q = await pool.query(`
      SELECT *
      FROM nft_weekly_public_copies
      WHERE drop_id=$1
        AND mint_status <> 'minted'
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
      claim_offer_status,
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

  console.log(
    `${drop.rows[0].drop_name} | ${drop.rows[0].drop_date}`
  );

  console.log(`Subscribers: ${recipients.rowCount}`);

  for (const r of recipients.rows) {
    console.log(
      `${r.id} ${r.x_handle} ${r.mint_status} ${r.claim_offer_status} delivered=${r.delivered}`
    );
  }

  console.log(
    `Public copy: ${
      publicCopy.rowCount
        ? publicCopy.rows[0].mint_status
        : "missing"
    }`
  );
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
  } else if (command === "claim-next" && Number.isInteger(dropId)) {
    await claimNext(dropId);
  } else {
    console.log(
      "Usage: node the52-mint-runner.js dry-run YYYY-MM-DD ipfs://CID | preview YYYY-MM-DD | status <drop_id>"
    );
    process.exit(1);
  }

  await pool.end();
})().catch(error => {
  console.error("ERROR:", error.message);
  process.exit(1);
});
