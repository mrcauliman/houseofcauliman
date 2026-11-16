#!/usr/bin/env python3
"""Check that every XRPL LAYMAN page carries the Content-Security-Policy meta
and that each inline <script> body is allowed by a sha256 hash in it.

Run after editing any inline script or after build_locales.py. Exit 1 on a
mismatch: an inline script whose hash is missing from the CSP will be blocked
by browsers. Update the meta in the English source pages, then rebuild.
"""
from __future__ import annotations

import base64
import hashlib
import re
import sys
from pathlib import Path

XRPL = Path(__file__).resolve().parents[2]
META = re.compile(r'<meta http-equiv="Content-Security-Policy" content="([^"]*)">')
INLINE = re.compile(r"<script(?![^>]*\bsrc=)[^>]*>(.*?)</script>", re.S)


def main() -> int:
    errors = []
    pages = sorted(XRPL.rglob("*.html"))
    for page in pages:
        text = page.read_text(encoding="utf-8")
        found = META.findall(text)
        rel = page.relative_to(XRPL.parent)
        if len(found) != 1:
            errors.append(f"{rel}: expected 1 CSP meta, found {len(found)}")
            continue
        if text.find("Content-Security-Policy") > text.find("<script"):
            errors.append(f"{rel}: CSP meta must come before the first script")
        policy = found[0]
        for body in INLINE.findall(text):
            digest = base64.b64encode(hashlib.sha256(body.encode("utf-8")).digest()).decode()
            if f"'sha256-{digest}'" not in policy:
                errors.append(f"{rel}: inline script sha256-{digest} not allowed by CSP")
        if re.search(r"\son[a-z]+=\"", text):
            errors.append(f"{rel}: inline event handler attribute would be blocked by CSP")
    print(f"pages checked: {len(pages)}; problems: {len(errors)}")
    for line in errors:
        print(line)
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
