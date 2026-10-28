#!/usr/bin/env python3
"""List security and finance strings that need a human XRPL review."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PATTERN = re.compile(
    r"seed|secret|trust ?line|trustline|destination tag|signer|regular key|master key|"
    r"blackhole|freeze|quorum|delegat|slippage|AMM|DEX|TakerGets|TakerPays|"
    r"NFToken|burn|reserve|phishing|blind|multisign|Xaman|MPT|fee",
    re.I,
)
LANGS = ["pt-BR", "es", "fr", "de", "ja", "ko", "zh-CN", "hi", "ar"]


def main():
    english = json.loads((ROOT / "catalogs/en.json").read_text(encoding="utf-8"))
    catalogs = {}
    for lang in LANGS:
        path = ROOT / "catalogs" / f"{lang}.json"
        if path.exists():
            catalogs[lang] = json.loads(path.read_text(encoding="utf-8"))
    lines = [
        "# Needs human review",
        "",
        "These strings are security or finance teaching copy. The translations stay close to the English and do not add ledger behavior that the English page does not state. They are not a certified XRPL translation.",
        "",
        "Preserved on purpose: `$XRP`, addresses, `NFTokenID`, `NFTokenPage`, `TakerGets`, `TakerPays`, and the reserve example numbers `1` and `0.2`.",
        "",
    ]
    count = 0
    for key in sorted(english):
        source = english[key]
        if not PATTERN.search(source):
            continue
        count += 1
        lines.append(f"## `{key}`")
        lines.append("")
        lines.append(f"- en: {source}")
        for lang, catalog in catalogs.items():
            value = catalog.get(key)
            if value and value != source:
                lines.append(f"- {lang}: {value}")
            elif value == source:
                lines.append(f"- {lang}: (same as English)")
            else:
                lines.append(f"- {lang}: (missing)")
        lines.append("")
    lines.append(f"Count: {count} English strings.")
    lines.append("")
    destination = ROOT / "NEEDS_REVIEW.md"
    destination.write_text("\n".join(lines), encoding="utf-8")
    print(f"wrote {destination} ({count} strings)")


if __name__ == "__main__":
    main()
