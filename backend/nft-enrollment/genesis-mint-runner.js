const fs = require("fs");

const ENV_FILE = "/etc/house-nft-enrollment.env";
const STATE_DIR = "/var/lib/house-nft-enrollment";
const STATE_FILE = `${STATE_DIR}/mrcauliman-genesis-pass-100.json`;

const ISSUER = "rfgFM8z2abu2uahXFaRre8aWw9PEv48QbS";
const TAXON = 26001;
const FLAGS = 10;
const TRANSFER_FEE = 5000;
const TOTAL_SUPPLY = 100;

const METADATA_URI =
  "ipfs://QmT6BqoFeAECV7Krin9VCHbwv6TPWxxpatEPbHux2im1FS";

const URI_HEX =
  Buffer.from(METADATA_URI, "utf8")
    .toString("hex")
    .toUpperCase();

const FIRST = {
  number: 1,
  status: "validated",
  payloadUuid: "d3511f87-67c6-463c-bd16-69ac097def34",
  txHash: "C4F05DAF206BFFA50BB97102017E8447CD8AAB5790254A45304EA45353883686",
  nftId: "000A138849588295B82B938BC17754D3CA09FAE1F0E88A4DDA35F91705D7B7EB",
  ledgerIndex: 107104191
};

function envValue(name) {
  const text = fs.readFileSync(ENV_FILE, "utf8");

  const line = text
    .split(/\r?\n/)
    .find(x => x.startsWith(`${name}=`));

  if (!line) {
    throw new Error(`Missing ${name}`);
  }

  return line.slice(name.length + 1).trim();
}

const XAMAN_API_KEY = envValue("XAMAN_API_KEY");
const XAMAN_API_SECRET = envValue("XAMAN_API_SECRET");

function loadState() {
  fs.mkdirSync(STATE_DIR, {
    recursive: true,
    mode: 0o700
  });

  if (!fs.existsSync(STATE_FILE)) {
    const initial = {
      collection: "MRCAULIMAN Genesis Pass",
      issuer: ISSUER,
      taxon: TAXON,
      flags: FLAGS,
      transferFee: TRANSFER_FEE,
      metadataUri: METADATA_URI,
      totalSupply: TOTAL_SUPPLY,
      issuerRetained: 1,
      publicSupply: 99,
      passes: [FIRST]
    };

    fs.writeFileSync(
      STATE_FILE,
      JSON.stringify(initial, null, 2) + "\n",
      { mode: 0o600 }
    );

    return initial;
  }

  return JSON.parse(
    fs.readFileSync(STATE_FILE, "utf8")
  );
}

function saveState(state) {
  fs.writeFileSync(
    STATE_FILE,
    JSON.stringify(state, null, 2) + "\n",
    { mode: 0o600 }
  );
}

async function xaman(path, options = {}) {
  const response = await fetch(
    `https://xumm.app/api/v1/platform${path}`,
    {
      ...options,
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": XAMAN_API_KEY,
        "X-API-Secret": XAMAN_API_SECRET,
        ...(options.headers || {})
      }
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      `Xaman ${response.status}: ${JSON.stringify(data)}`
    );
  }

  return data;
}

async function xrpl(method, params) {
  const response = await fetch(
    "https://xrplcluster.com/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        method,
        params: [params]
      })
    }
  );

  const data = await response.json();

  if (!response.ok || data.result?.status === "error") {
    throw new Error(
      `XRPL error: ${JSON.stringify(data)}`
    );
  }

  return data.result;
}

async function createNext() {
  const state = loadState();

  const pending = state.passes.find(
    p => p.status === "awaiting_signature"
  );

  if (pending) {
    console.log(
      `Pass #${pending.number} is still pending.`
    );
    console.log(
      `Sign: https://xumm.app/sign/${pending.payloadUuid}`
    );
    return;
  }

  const validated = state.passes.filter(
    p => p.status === "validated"
  );

  const nextNumber =
    Math.max(...validated.map(p => p.number)) + 1;

  if (nextNumber > TOTAL_SUPPLY) {
    console.log("All 100 Genesis Passes are minted.");
    return;
  }

  const id =
    `MRCAULIMAN_GENESIS_PASS_${String(nextNumber).padStart(3, "0")}`;

  const payload = {
    txjson: {
      TransactionType: "NFTokenMint",
      Account: ISSUER,
      NFTokenTaxon: TAXON,
      Flags: FLAGS,
      TransferFee: TRANSFER_FEE,
      URI: URI_HEX
    },
    options: {
      submit: true
    },
    custom_meta: {
      identifier: id,
      instruction:
        `Mint MRCAULIMAN Genesis Pass #${nextNumber} of 100`
    }
  };

  const created = await xaman(
    "/payload",
    {
      method: "POST",
      body: JSON.stringify(payload)
    }
  );

  if (!created.uuid) {
    throw new Error("Xaman returned no payload UUID");
  }

  state.passes.push({
    number: nextNumber,
    status: "awaiting_signature",
    payloadUuid: created.uuid,
    createdAt: new Date().toISOString()
  });

  saveState(state);

  console.log(`Genesis Pass #${nextNumber} ready.`);
  console.log(`Payload: ${created.uuid}`);
  console.log(`Sign: ${created.next?.always}`);
}

async function verifyPending() {
  const state = loadState();

  const pending = state.passes.find(
    p => p.status === "awaiting_signature"
  );

  if (!pending) {
    console.log("No pending Genesis Pass.");
    return;
  }

  const payload =
    await xaman(`/payload/${pending.payloadUuid}`);

  if (!payload.meta?.signed) {
    console.log(
      `Pass #${pending.number} has not been signed yet.`
    );
    console.log(
      `Sign: https://xumm.app/sign/${pending.payloadUuid}`
    );
    return;
  }

  const txHash = payload.response?.txid;

  if (!txHash) {
    throw new Error(
      "Payload is signed but Xaman returned no transaction hash."
    );
  }

  const tx = await xrpl("tx", {
    transaction: txHash,
    binary: false
  });

  if (
    tx.validated !== true ||
    tx.meta?.TransactionResult !== "tesSUCCESS"
  ) {
    throw new Error(
      `Transaction not successfully validated: ${txHash}`
    );
  }

  const nfts = await xrpl("account_nfts", {
    account: ISSUER,
    ledger_index: "validated"
  });

  const alreadyKnown = new Set(
    state.passes
      .filter(p => p.nftId)
      .map(p => p.nftId)
  );

  const matching = (nfts.account_nfts || [])
    .filter(nft =>
      nft.Issuer === ISSUER &&
      nft.NFTokenTaxon === TAXON &&
      nft.Flags === FLAGS &&
      nft.TransferFee === TRANSFER_FEE &&
      nft.URI === URI_HEX &&
      !alreadyKnown.has(nft.NFTokenID)
    );

  if (matching.length !== 1) {
    throw new Error(
      `Expected exactly 1 new Genesis Pass, found ${matching.length}.`
    );
  }

  const nft = matching[0];

  pending.status = "validated";
  pending.txHash = txHash;
  pending.nftId = nft.NFTokenID;
  pending.nftSerial = nft.nft_serial;
  pending.ledgerIndex = tx.ledger_index;
  pending.validatedAt = new Date().toISOString();

  saveState(state);

  console.log(
    `Genesis Pass #${pending.number} VERIFIED`
  );
  console.log(`Tx: ${pending.txHash}`);
  console.log(`NFT: ${pending.nftId}`);
  console.log(
    `Progress: ${
      state.passes.filter(
        p => p.status === "validated"
      ).length
    } / ${TOTAL_SUPPLY}`
  );
}

function status() {
  const state = loadState();

  const validated = state.passes.filter(
    p => p.status === "validated"
  );

  const pending = state.passes.find(
    p => p.status === "awaiting_signature"
  );

  console.log(
    `MRCAULIMAN Genesis Pass: ${validated.length}/${TOTAL_SUPPLY} validated`
  );

  if (pending) {
    console.log(
      `Pending: #${pending.number} ${pending.payloadUuid}`
    );
  }

  const last = validated.at(-1);

  if (last) {
    console.log(
      `Last: #${last.number} ${last.nftId}`
    );
  }
}

(async () => {
  const command = process.argv[2];

  if (command === "create") {
    await createNext();
  } else if (command === "verify") {
    await verifyPending();
  } else if (command === "status") {
    status();
  } else {
    console.log(
      "Usage: node genesis-mint-runner.js create|verify|status"
    );
  }
})().catch(error => {
  console.error("ERROR:", error.message);
  process.exit(1);
});
