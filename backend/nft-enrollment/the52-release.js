const crypto = require("crypto");
const fs = require("fs");
const { Pool } = require("pg");

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is required");
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === "production"
    ? { rejectUnauthorized: false }
    : false
});

const CARD = {
  number: "01",
  dropDate: "2026-09-27",
  master: "/opt/house-the52-private/01/THE52_01_The_Builder_MASTER.png",
  sha256: "a2fa4e031f831ccf9f3be9e013c1300f232e3e951a7a4058b1509cb6097b9ffd"
};

function hashFile(path) {
  return crypto.createHash("sha256")
    .update(fs.readFileSync(path))
    .digest("hex");
}

async function status() {
  const release = await pool.query(`
    SELECT released, released_at
    FROM the52_release_state
    WHERE card_number='01'
  `);

  const drop = await pool.query(`
    SELECT id
    FROM nft_weekly_drops
    WHERE drop_date=$1
    ORDER BY id DESC
    LIMIT 1
  `, [CARD.dropDate]);

  const dropId = drop.rows[0]?.id || null;

  let recipients = { total: 0, minted: 0 };
  let publicCopy = { total: 0, minted: 0 };

  if (dropId) {
    recipients = (await pool.query(`
      SELECT
        COUNT(*)::int total,
        COUNT(*) FILTER (
          WHERE mint_status='minted'
          AND nftoken_id IS NOT NULL
        )::int minted
      FROM nft_weekly_recipients
      WHERE drop_id=$1
    `, [dropId])).rows[0];

    publicCopy = (await pool.query(`
      SELECT
        COUNT(*)::int total,
        COUNT(*) FILTER (
          WHERE mint_status='minted'
          AND nftoken_id IS NOT NULL
        )::int minted
      FROM nft_weekly_public_copies
      WHERE drop_id=$1
    `, [dropId])).rows[0];
  }

  const masterExists = fs.existsSync(CARD.master);
  const masterHash = masterExists ? hashFile(CARD.master) : null;

  return {
    released: release.rows[0]?.released === true,
    releasedAt: release.rows[0]?.released_at || null,
    dropId,
    recipients,
    publicCopy,
    masterExists,
    masterHash,
    masterValid: masterHash === CARD.sha256
  };
}

async function main() {
  const cmd = process.argv[2] || "status";
  const state = await status();

  console.log(JSON.stringify(state, null, 2));

  if (cmd === "status") return;

  if (
    cmd !== "release" ||
    process.argv[3] !== "CONFIRM_RELEASE_01"
  ) {
    throw new Error("Release requires: release CONFIRM_RELEASE_01");
  }

  if (state.released) return;
  if (!state.masterValid) throw new Error("Builder master verification failed");
  if (!state.dropId) throw new Error("Drop is not frozen");
  if (Number(state.recipients.total) < 1) throw new Error("Frozen roster is empty");
  if (Number(state.recipients.minted) !== Number(state.recipients.total)) {
    throw new Error("Subscriber minting is incomplete");
  }
  if (Number(state.publicCopy.total) !== 1 || Number(state.publicCopy.minted) !== 1) {
    throw new Error("Public copy is not complete");
  }

  const result = await pool.query(`
    UPDATE the52_release_state
    SET released=TRUE, released_at=NOW()
    WHERE card_number='01'
      AND released=FALSE
    RETURNING released_at
  `);

  if (!result.rowCount) throw new Error("Release state did not change");

  console.log("01 THE BUILDER RELEASED");
}

main()
  .catch(err => {
    console.error("ERROR:", err.message);
    process.exitCode = 1;
  })
  .finally(() => pool.end());
