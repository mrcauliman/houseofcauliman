#!/usr/bin/env python3
"""Write xrpl/i18n/catalogs.js from the JSON catalogs. No dependencies."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CATALOGS = ROOT / "catalogs"
TARGET = ROOT / "catalogs.js"


def main():
    payload = {}
    for path in sorted(CATALOGS.glob("*.json")):
        payload[path.stem] = json.loads(path.read_text(encoding="utf-8"))
    encoded = json.dumps(payload, ensure_ascii=False, separators=(",", ":")).replace("<", "\\u003c")
    TARGET.write_text("window.XRPL_CATALOGS = " + encoded + ";\n", encoding="utf-8")
    print(f"bundled {', '.join(payload)} -> {TARGET.name} ({TARGET.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
