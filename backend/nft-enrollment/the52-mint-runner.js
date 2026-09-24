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

  if (command === "preview") {
    const dropDate = process.argv[3];

    if (!/^\d{4}-\d{2}-\d{2}$/.test(dropDate || "")) {
      throw new Error(
        "Usage: node the52-mint-runner.js preview YYYY-MM-DD"
      );
    }

    await preview(dropDate);
  } else if (command === "status" && Number.isInteger(dropId)) {
    await status(dropId);
  } else {
    console.log(
      "Usage: node the52-mint-runner.js preview YYYY-MM-DD | status <drop_id>"
    );
    process.exit(1);
  }

  await pool.end();
})().catch(error => {
  console.error("ERROR:", error.message);
  process.exit(1);
});
