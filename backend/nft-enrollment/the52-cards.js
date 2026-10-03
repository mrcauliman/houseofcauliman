"use strict";

// Card identity only. Release-state remains database controlled and defaults closed.
// Master dimensions are descriptive; approved bytes, not nominal dimensions, are authoritative.
const THE52_CARDS = Object.freeze({
  "01": Object.freeze({
    number: "01", name: "THE BUILDER", dropDate: "2026-09-27",
    master: "/opt/house-the52-private/01/THE52_01_The_Builder_MASTER.png",
    sha256: "77be82d4dc891376322d57adf7b336f9568754ac76fd8afea31966c3a28a85d4"
  }),
  "02": Object.freeze({
    number: "02", name: "THE WHALE", dropDate: "2026-10-04",
    master: "/opt/house-the52-private/02/THE52_02_The_Whale_MASTER.png",
    sha256: "cc6a1380698633672e1f505be3a20c93505d4ead1651c02f7e99420fa2259458",
    holderMedia: "/opt/house-the52-private/02/THE52_02_The_Whale_HOLDER_UNLOCK.png",
    holderSha256: "aba4565240c8606e04b38c11fc57423f356a6892e24f44adbef320a4ff6aac26"
  })
});

function getCard(number) {
  const key = String(number || "").padStart(2, "0");
  return Object.hasOwn(THE52_CARDS, key) ? THE52_CARDS[key] : null;
}

const THE52_ISSUER = "rfgFM8z2abu2uahXFaRre8aWw9PEv48QbS";
module.exports = { THE52_CARDS, THE52_ISSUER, getCard };
