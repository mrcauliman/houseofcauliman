"use strict";
const crypto = require("crypto");
const fs = require("fs");
const { getCard } = require("./the52-cards");
const ISSUER = "rfgFM8z2abu2uahXFaRre8aWw9PEv48QbS";
const hash = bytes => crypto.createHash("sha256").update(bytes).digest("hex");

// No wallet/signing dependency: this utility only controls publication.
function validateManifest(card, m, bytes, now = new Date()) {
  if (!m || m.card !== card.number || m.dropDate !== card.dropDate) throw new Error("Manifest card/date mismatch");
  if (m.approvedMasterSha256 !== card.sha256) throw new Error("Manifest master hash mismatch");
  if (m.releaseEnabled !== true) throw new Error("Release is not explicitly enabled");
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(Z|[+-]\d{2}:\d{2})$/.test(m.releaseAt || "")) throw new Error("Approved releaseAt time and timezone required");
  const at = new Date(m.releaseAt);
  if (!Number.isFinite(at.getTime()) || now < at) throw new Error("Release embargo is active");
  const day = new Intl.DateTimeFormat("en-CA", {timeZone:"America/Los_Angeles",year:"numeric",month:"2-digit",day:"2-digit"}).format(at);
  if (day !== card.dropDate) throw new Error("Release must fall on the Pacific drop date");
  for (const key of ["metadataUri", "imageUri"]) {
    if (!/^ipfs:\/\/(Qm[1-9A-HJ-NP-Za-km-z]{44}|bafy[a-z2-7]{20,})$/.test(m[key] || "")) throw new Error(`Final pinned ${key} required`);
    if (Buffer.byteLength(m[key], "utf8") > 256) throw new Error("URI exceeds 256 bytes");
  }
  if (!/^[a-f0-9]{64}$/.test(m.metadataSha256 || "") || hash(bytes) !== m.metadataSha256) throw new Error("Metadata hash mismatch");
  const data = JSON.parse(bytes.toString("utf8"));
  if (data.name !== `THE 52 — ${card.number} ${card.name}` || data.image !== m.imageUri || data.external_url !== "https://houseofcauliman.com/the52/") throw new Error("Metadata identity mismatch");
  const expected = {Collection:"THE 52",Card:`${card.number}/52`,Character:card.name.toLowerCase().replace(/\b\w/g,x=>x.toUpperCase()),Network:"XRPL"};
  if (!Array.isArray(data.attributes) || data.attributes.length !== 4 || Object.entries(expected).some(([k,v])=>data.attributes.filter(a=>a.trait_type===k && a.value===v).length!==1)) throw new Error("Metadata traits mismatch");
  return data;
}

function createReleaseTools({pool, readFile=p=>fs.readFileSync(p), now=()=>new Date()}) {
  async function status(number, db=pool) {
    const card=getCard(number);
    if(!card)throw new Error("Unknown THE 52 card");
    const release=await db.query("SELECT released,released_at FROM the52_release_state WHERE card_number=$1",[card.number]);
    const drop=await db.query("SELECT id,metadata_uri,frozen_at FROM nft_weekly_drops WHERE drop_date=$1",[card.dropDate]);
    const dropId=drop.rows[0]?.id||null;
    let recipients={total:0,minted:0,unique_nfts:0,self_copies:0},publicCopy={total:0,minted:0,unique_nfts:0},uniqueEdition=0;
    if(dropId) {
      recipients=(await db.query(`SELECT COUNT(*)::int total,
        COUNT(*) FILTER (WHERE mint_status='minted' AND nftoken_id IS NOT NULL)::int minted,
        COUNT(DISTINCT nftoken_id)::int unique_nfts,
        COUNT(*) FILTER (WHERE xrpl_address=$2)::int self_copies
        FROM nft_weekly_recipients WHERE drop_id=$1`,[dropId,ISSUER])).rows[0];
      publicCopy=(await db.query(`SELECT COUNT(*)::int total,
        COUNT(*) FILTER (WHERE mint_status='minted' AND nftoken_id IS NOT NULL)::int minted,
        COUNT(DISTINCT nftoken_id)::int unique_nfts
        FROM nft_weekly_public_copies WHERE drop_id=$1`,[dropId])).rows[0];
      uniqueEdition=(await db.query(`SELECT COUNT(DISTINCT nftoken_id)::int total FROM (
        SELECT nftoken_id FROM nft_weekly_recipients WHERE drop_id=$1
        UNION ALL SELECT nftoken_id FROM nft_weekly_public_copies WHERE drop_id=$1
      ) edition`,[dropId])).rows[0].total;
    }
    let masterHash=null;try{masterHash=hash(readFile(card.master));}catch{}
    let holderHash=null;
    if(card.holderMedia){try{holderHash=hash(readFile(card.holderMedia));}catch{}}
    return {card:card.number,released:release.rows[0]?.released===true,releaseStateExists:release.rowCount===1,
      releasedAt:release.rows[0]?.released_at||null,dropId,frozenAt:drop.rows[0]?.frozen_at||null,
      metadataUri:drop.rows[0]?.metadata_uri||null,recipients,publicCopy,uniqueEdition,masterHash,masterValid:masterHash===card.sha256,
      holderHash,holderValid:!card.holderMedia || holderHash===card.holderSha256};
  }
  async function release(number,m,bytes,confirmation,pins) {
    const card=getCard(number);
    if(!card || confirmation!==`CONFIRM_RELEASE_${card.number}`)throw new Error("Explicit matching card confirmation required");
    validateManifest(card,m,bytes,now());
    if(!pins || pins.metadataHash!==m.metadataSha256 || pins.imageHash!==card.sha256 || pins.metadataUri!==m.metadataUri || pins.imageUri!==m.imageUri)throw new Error("Pinned metadata/media verification required");
    const db=await pool.connect();
    try {
      await db.query("BEGIN");
      await db.query("SELECT card_number FROM the52_release_state WHERE card_number=$1 FOR UPDATE",[card.number]);
      const state=await status(card.number,db);
      if(state.released){await db.query("ROLLBACK");return {...state,alreadyReleased:true};}
      if(!state.releaseStateExists)throw new Error("Inert release-state migration required");
      if(!state.masterValid)throw new Error("Approved master verification failed");
      if(!state.holderValid)throw new Error("Approved holder-entry image verification failed");
      if(!state.dropId || !state.frozenAt)throw new Error("Drop is not frozen");
      if(state.metadataUri!==m.metadataUri)throw new Error("Frozen drop metadata mismatch");
      const r=state.recipients,p=state.publicCopy;
      if(r.total<1 || r.minted!==r.total || r.unique_nfts!==r.total || r.self_copies!==1)throw new Error("Subscriber mint/self-copy verification incomplete");
      if(p.total!==1 || p.minted!==1 || p.unique_nfts!==1)throw new Error("Exactly one verified public copy required");
      if(state.uniqueEdition!==r.total+1)throw new Error("Duplicate NFT across subscriber/public editions");
      const updated=await db.query("UPDATE the52_release_state SET released=TRUE,released_at=NOW() WHERE card_number=$1 AND released=FALSE RETURNING released_at",[card.number]);
      if(updated.rowCount!==1)throw new Error("Release state did not change");
      await db.query("COMMIT");return {...state,released:true,releasedAt:updated.rows[0].released_at};
    }catch(e){await db.query("ROLLBACK");throw e;}finally{db.release();}
  }
  return {status,release};
}

async function verifyPins(m,card,fetcher=fetch) {
  const out={metadataUri:m.metadataUri,imageUri:m.imageUri};
  for(const [field,expected] of [["metadata",m.metadataSha256],["image",card.sha256]]) {
    let verified=false;
    for(const gateway of ["https://gateway.pinata.cloud/ipfs/","https://ipfs.io/ipfs/"]) {
      try {
        const response=await fetcher(gateway+m[`${field}Uri`].slice(7),{signal:AbortSignal.timeout(20000)});
        if(!response.ok)continue;
        const reader=response.body.getReader(),chunks=[];let size=0;
        try{for(;;){const {done,value}=await reader.read();if(done)break;size+=value.length;if(size>12*1024*1024)throw new Error("Pinned asset too large");chunks.push(Buffer.from(value));}}finally{await reader.cancel().catch(()=>{});}
        if(hash(Buffer.concat(chunks))!==expected)continue;
        out[`${field}Hash`]=expected;verified=true;break;
      }catch{}
    }
    if(!verified)throw new Error(`Unable to verify pinned ${field} bytes`);
  }
  return out;
}

async function main() {
  const [cmd="status",number="01",manifestPath,metadataPath,confirmation]=process.argv.slice(2);
  if(!["status","verify","release"].includes(cmd) || !getCard(number))throw new Error("Usage: status <card> | verify <card> <manifest.json> <metadata.json> | release <card> <manifest.json> <metadata.json> CONFIRM_RELEASE_<card>");
  let m,bytes,pins;
  if(cmd!=="status") {
    m=JSON.parse(fs.readFileSync(manifestPath,"utf8"));bytes=fs.readFileSync(metadataPath);
    validateManifest(getCard(number),m,bytes);
    pins=await verifyPins(m,getCard(number));
    if(cmd==="verify"){console.log(JSON.stringify({card:number,pins,ready:true},null,2));return;}
  }
  if(!process.env.DATABASE_URL)throw new Error("DATABASE_URL is required");
  const {Pool}=require("pg"),pool=new Pool({connectionString:process.env.DATABASE_URL});
  try {
    const operations=createReleaseTools({pool});
    console.log(JSON.stringify(cmd==="status"?await operations.status(number):await operations.release(number,m,bytes,confirmation,pins),null,2));
  }finally{await pool.end();}
}
if(require.main===module)main().catch(e=>{console.error("ERROR:",e.message);process.exitCode=1;});
module.exports={validateManifest,createReleaseTools,verifyPins};
