#!/usr/bin/env python3
"""Write one reviewer packet per language. Reviewers do not need the source tree.

The 230 security and finance strings are the same set as NEEDS_REVIEW.md.
A string is filed under the first tier below. Destination tags are checked
before the broader signing tier so a destination-tag sentence is not buried
there. Seed still wins when a sentence also mentions a later topic.
"""
from __future__ import annotations

import csv
import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from htmltree import parse, walk_elements  # noqa: E402

ROOT = Path(__file__).resolve().parents[1]
REPO = ROOT.parents[1]
OUT = ROOT / "review-packages"
LANGS = ["pt-BR", "es", "fr", "de", "ja", "ko", "zh-CN", "hi", "ar"]
NATIVE = {
    "pt-BR": "Português (Brasil)",
    "es": "Español",
    "fr": "Français",
    "de": "Deutsch",
    "ja": "日本語",
    "ko": "한국어",
    "zh-CN": "中文（简体）",
    "hi": "हिन्दी",
    "ar": "العربية",
}
PAGES = [
    ("xrpl/index.html", "Dashboard", "/xrpl/"),
    ("xrpl/definitions.html", "Definitions", "/xrpl/definitions.html"),
    ("xrpl/wallet-basics.html", "Wallets", "/xrpl/wallet-basics.html"),
    ("xrpl/usage.html", "Usage", "/xrpl/usage.html"),
    ("xrpl/safety.html", "Safety", "/xrpl/safety.html"),
    ("xrpl/investing-reality.html", "Investing reality", "/xrpl/investing-reality.html"),
    ("xrpl/builders/index.html", "Builders hub", "/xrpl/builders/"),
    ("xrpl/builders/create-token.html", "Create a token", "/xrpl/builders/create-token.html"),
    ("xrpl/builders/nft-basics.html", "NFT basics", "/xrpl/builders/nft-basics.html"),
    ("xrpl/builders/trust-lines.html", "Trust lines lesson", "/xrpl/builders/trust-lines.html"),
    ("xrpl/builders/issuer-control.html", "Issuer control", "/xrpl/builders/issuer-control.html"),
    ("xrpl/builders/xaman-flows.html", "Xaman flows", "/xrpl/builders/xaman-flows.html"),
    ("xrpl/builders/project-launch-basics.html", "Project launch", "/xrpl/builders/project-launch-basics.html"),
]
UNIVERSE = re.compile(
    r"seed|secret|trust ?line|trustline|destination tag|signer|regular key|master key|"
    r"blackhole|freeze|quorum|delegat|slippage|AMM|DEX|TakerGets|TakerPays|"
    r"NFToken|burn|reserve|phishing|blind|multisign|Xaman|MPT|fee",
    re.I,
)
# Check order. Display order is the list further down.
CLASSIFY = [
    ("Wallet recovery and seed", re.compile(r"seed|secret|recover", re.I)),
    ("Destination tags", re.compile(r"destination tag", re.I)),
    ("Signing", re.compile(
        r"signer|regular key|master key|multisign|signature|\bsign(?:ed|ing|er|s)?\b|blind|delegat|quorum",
        re.I,
    )),
    ("Trust lines", re.compile(r"trust ?line|trustline", re.I)),
    ("Reserves and fees", re.compile(r"reserve|\bfees?\b", re.I)),
    ("DEX and AMM", re.compile(r"slippage|\bAMM\b|\bDEX\b|TakerGets|TakerPays", re.I)),
    ("NFTs", re.compile(r"NFToken|\bNFT\b|burn", re.I)),
]
DISPLAY = [
    "Wallet recovery and seed",
    "Signing",
    "Destination tags",
    "Trust lines",
    "Reserves and fees",
    "DEX and AMM",
    "NFTs",
    "Other security and finance",
]
PURPOSE = {
    "Wallet recovery and seed": "This sentence is about the secret that can recreate the account.",
    "Signing": "This sentence is about who is allowed to authorize a transaction.",
    "Destination tags": "This sentence is about the extra number some receiving accounts require so a payment is credited to the right person.",
    "Trust lines": "This sentence is about the opt-in that lets an account hold an issued token.",
    "Reserves and fees": "This sentence is about XRP an account must keep, or about a fee.",
    "DEX and AMM": "This sentence is about exchanging tokens, including slippage and the offer fields.",
    "NFTs": "This sentence is about NFToken objects and what a holder or an issuer can change.",
    "Other security and finance": "This sentence is other security or finance teaching, such as freeze, blackhole, phishing, Xaman, or MPTs.",
}
MUST = {
    "Wallet recovery and seed": "A seed or secret is not a resettable password. Anyone who has it can control the account. Changing an app password does not fix a leaked seed.",
    "Signing": "A signature authorizes the exact transaction the signer approved. A sign-in is not a payment, and the wrong signer, key, or quorum does not become valid because the interface looked finished.",
    "Destination tags": "Some destinations require a destination tag. Omitting it, or inventing one, can send the payment to the wrong place. The tag is not a memo and not a seed.",
    "Trust lines": "A trust line creates the holding relationship for an issued token. It is not an endorsement, not proof the token is safe, and not a promise the issuer will redeem it.",
    "Reserves and fees": "The teaching example is a 1 $XRP base reserve plus 0.2 $XRP for each qualifying owned object. The usual transaction fee is destroyed. It is not paid to validators. Live reserves can change by fee voting, so software should query the network.",
    "DEX and AMM": "A trade can move the price. Slippage is that movement. TakerGets and TakerPays name the two sides of an offer. Neither field is a guarantee of a future price.",
    "NFTs": "An NFT on the ledger is an NFToken. The owner does not get to rewrite the issuer’s mint-time rules. A transfer fee is not a seed and not a trust line.",
    "Other security and finance": "Keep the English warning. Freeze is not destruction. A blackhole is not proof a project is safe. MPTs are a different standard from trust-line tokens. A false quiz answer must stay false.",
}
GLOSSARY = [
    ("XRPL", "The XRP Ledger. Keep the letters XRPL."),
    ("XRPL LAYMAN", "The name of this lesson site. Keep both words, in that order."),
    ("$XRP", "The way this site writes the reserve and fee unit. Keep the dollar sign."),
    ("XRP", "The asset. Keep the letters XRP."),
    ("Xaman", "A wallet application. Keep the name."),
    ("Testnet", "The public test network. Keep the name."),
    ("Mainnet", "The public network with real assets. Keep the name."),
    ("NFT", "A non-fungible token. The short label often stays NFT."),
    ("NFTokenID", "The ledger’s identifier for one NFT. Do not translate the field name."),
    ("NFTokenPage", "The ledger page that stores NFTs. Do not translate the field name."),
    ("DEX", "The built-in exchange. Keep the letters DEX."),
    ("AMM", "An automated market maker. Keep the letters AMM."),
    ("TakerGets", "One side of a DEX offer. Do not translate the field name."),
    ("TakerPays", "The other side of a DEX offer. Do not translate the field name."),
    ("MPT", "A multi-purpose token. It is a different standard from a trust-line token."),
    ("URI", "The link field on an NFT. Keep the letters URI."),
    ("Seed", "Some short labels are still the English word Seed on purpose."),
    ("Trust line", "Some short labels are still the English words Trust line on purpose."),
    ("Freeze", "Some short labels are still the English word Freeze on purpose."),
    ("Destination Tag", "Some short labels are still the English words Destination Tag on purpose."),
    ("Regular key", "An extra signing key. The English name may stay beside the translation."),
    ("Master key", "The original signing key. The English name may stay beside the translation."),
    ("AUGUR", "A name used in an example. Keep the spelling."),
    ("House of Cauliman", "The publisher of this site. Keep the name, in that order."),
]


def classify(source):
    for name, pattern in CLASSIFY:
        if pattern.search(source):
            return name
    return "Other security and finance"


def page_index():
    found = {}
    for rel, label, url in PAGES:
        root = parse((REPO / rel).read_text(encoding="utf-8"))
        state = {"heading": label}

        def visit(element):
            if element.tag in {"h1", "h2", "h3"}:
                text = " ".join(element.text_content().split())
                if text:
                    state["heading"] = text
            keys = []
            key = element.attr("data-i18n")
            if key:
                keys.append(key)
            attr_map = element.attr("data-i18n-attr") or ""
            for pair in attr_map.split(","):
                if ":" in pair:
                    keys.append(pair.split(":", 1)[1])
            for item in keys:
                bucket = found.setdefault(item, [])
                row = {"page": label, "url": url, "heading": state["heading"]}
                if row not in bucket:
                    bucket.append(row)

        walk_elements(root, visit)
    return found


def instructions(lang):
    return f"""# XRPL LAYMAN review package: {NATIVE[lang]}

This file is for a native speaker of {NATIVE[lang]}. You do not need the website source code, and you do not need to open the site. The English sentence and the current {NATIVE[lang]} translation are both in this file. The CSV next to this file has the same rows.

Nothing in this package is native-approved. The Approve, Correction, Reviewer, and Date lines are blank on purpose.

## How to review

1. Read one row at a time. The sections follow this order: wallet recovery and seed, signing, destination tags, trust lines, reserves and fees, DEX and AMM, NFTs, then other security and finance copy.
2. A sentence is filed under the first matching section. Seed wins over every later topic. A destination-tag sentence is in the destination-tag section even if it also mentions signing.
3. Decide whether a reader of {NATIVE[lang]} learns the same fact as the English, including every “not”, “never”, and “cannot”. A quiz answer that is false in English must stay false.
4. Do not change `$XRP`, the numbers `1` and `0.2`, account addresses, `NFTokenID`, `NFTokenPage`, `TakerGets`, or `TakerPays`.
5. Terms in the glossary stay in English. A parenthetical gloss such as `(trust line)` or `(seed)` may stay next to the translated term.
6. If the translation is right, write `approve` on the Approve line. If it should change, leave Approve blank and write the full replacement on the Correction line.
7. Write your name and the date yourself. Do not mark a row approved for someone else.

## Glossary of terms kept in English

| Term | Keep it because |
| --- | --- |
""" + "\n".join(f"| `{term}` | {reason} |" for term, reason in GLOSSARY) + "\n"


def main():
    english = json.loads((ROOT / "catalogs/en.json").read_text(encoding="utf-8"))
    catalogs = {
        lang: json.loads((ROOT / "catalogs" / f"{lang}.json").read_text(encoding="utf-8"))
        for lang in LANGS
    }
    where = page_index()
    flagged = [(key, english[key]) for key in sorted(english) if UNIVERSE.search(english[key])]
    grouped = {name: [] for name in DISPLAY}
    for key, source in flagged:
        grouped[classify(source)].append((key, source))
    OUT.mkdir(parents=True, exist_ok=True)
    columns = [
        "section_order",
        "risk_tier",
        "key",
        "page",
        "page_url",
        "heading",
        "purpose",
        "reader_must_understand",
        "english",
        "translation",
        "approve",
        "correction",
        "reviewer",
        "date",
    ]
    for lang in LANGS:
        lines = [instructions(lang), "## Counts", ""]
        lines.append("| Section | Rows | Approved |")
        lines.append("| --- | ---: | ---: |")
        for index, name in enumerate(DISPLAY, start=1):
            lines.append(f"| {index}. {name} | {len(grouped[name])} | 0 |")
        lines.append(f"| Total | {len(flagged)} | 0 |")
        lines.append("")
        rows = []
        for index, name in enumerate(DISPLAY, start=1):
            lines.append(f"## {index}. {name}")
            lines.append("")
            lines.append(PURPOSE[name])
            lines.append("")
            lines.append(f"What the reader must understand for this whole section: {MUST[name]}")
            lines.append("")
            for item_index, (key, source) in enumerate(grouped[name], start=1):
                places = where.get(key) or [{"page": "Shared chrome or meta text", "url": "", "heading": ""}]
                page = "; ".join(place["page"] for place in places)
                url = "; ".join(place["url"] for place in places if place["url"])
                heading = "; ".join(place["heading"] for place in places if place["heading"])
                translation = catalogs[lang].get(key, "")
                same = translation == source
                lines.append(f"### {index}.{item_index} `{key}`")
                lines.append("")
                lines.append(f"- Risk tier: {name}")
                lines.append(f"- Page: {page}" + (f" ({url})" if url else ""))
                if heading:
                    lines.append(f"- Heading on that page: {heading}")
                lines.append(f"- Purpose: {PURPOSE[name]}")
                lines.append(f"- What the reader must understand: {MUST[name]} The English wording to preserve is: {source}")
                lines.append(f"- English: {source}")
                if same:
                    lines.append(f"- Current translation: (same as the English) {translation}")
                else:
                    lines.append(f"- Current translation: {translation}")
                lines.append("- Approve:")
                lines.append("- Correction:")
                lines.append("- Reviewer:")
                lines.append("- Date:")
                lines.append("")
                rows.append({
                    "section_order": index,
                    "risk_tier": name,
                    "key": key,
                    "page": page,
                    "page_url": url,
                    "heading": heading,
                    "purpose": PURPOSE[name],
                    "reader_must_understand": MUST[name] + " The English wording to preserve is: " + source,
                    "english": source,
                    "translation": translation,
                    "approve": "",
                    "correction": "",
                    "reviewer": "",
                    "date": "",
                })
        (OUT / f"{lang}.md").write_text("\n".join(lines).rstrip() + "\n", encoding="utf-8")
        with (OUT / f"{lang}.csv").open("w", encoding="utf-8", newline="") as handle:
            writer = csv.DictWriter(handle, fieldnames=columns)
            writer.writeheader()
            writer.writerows(rows)
        print(f"{lang}: {len(rows)} rows")
    print("total flagged", len(flagged))
    for name in DISPLAY:
        print(f"  {len(grouped[name]):3} {name}")


if __name__ == "__main__":
    main()
