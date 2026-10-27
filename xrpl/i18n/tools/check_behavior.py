#!/usr/bin/env python3
"""Static checks that quizzes, calculators, and locale URLs stay intact."""
from __future__ import annotations

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from htmltree import find_all, parse, walk_elements  # noqa: E402

ROOT = Path(__file__).resolve().parents[3]
PAGES = [
    "xrpl/index.html",
    "xrpl/definitions.html",
    "xrpl/wallet-basics.html",
    "xrpl/usage.html",
    "xrpl/safety.html",
    "xrpl/investing-reality.html",
    "xrpl/builders/index.html",
    "xrpl/builders/create-token.html",
    "xrpl/builders/nft-basics.html",
    "xrpl/builders/trust-lines.html",
    "xrpl/builders/issuer-control.html",
    "xrpl/builders/xaman-flows.html",
    "xrpl/builders/project-launch-basics.html",
]


def main():
    errors = []
    seen = set()
    correct = 0
    for rel in PAGES:
        text = (ROOT / rel).read_text(encoding="utf-8")
        root = parse(text)
        buttons = []

        def visit(element):
            if element.tag == "button" and element.attr("data-correct") is not None:
                buttons.append(element)

        walk_elements(root, visit)
        for button in buttons:
            correct += 1
            value = button.attr("data-correct")
            choice = button.attr("data-choice-id")
            if value not in {"true", "false"}:
                errors.append(f"{rel}: data-correct is {value!r}")
            if not choice:
                errors.append(f"{rel}: quiz button missing data-choice-id")
            elif choice in seen:
                errors.append(f"duplicate choice id {choice}")
            else:
                seen.add(choice)
        if 'script src="/xrpl/i18n/i18n.js"' not in text and "script src='/xrpl/i18n/i18n.js'" not in text:
            errors.append(f"{rel}: missing i18n runtime")
    definitions = (ROOT / "xrpl/definitions.html").read_text(encoding="utf-8")
    usage = (ROOT / "xrpl/usage.html").read_text(encoding="utf-8")
    reality = (ROOT / "xrpl/investing-reality.html").read_text(encoding="utf-8")
    dashboard = (ROOT / "xrpl/i18n/dashboard.js").read_text(encoding="utf-8")
    if "const reserve = 1 + objects * .2;" not in definitions:
        errors.append("reserve formula changed")
    if "reserve.toFixed(1) + \" $XRP\"" not in definitions:
        errors.append("reserve display changed")
    if "pct=t/p*100" not in usage or "pct.toFixed(2)+'%'" not in usage:
        errors.append("slippage math changed")
    if "c=p*s" not in reality or "currency:'USD'" not in reality or "r=p/d*100" not in reality:
        errors.append("investing calculator math changed")
    if "dataset.correct" not in (ROOT / "xrpl/builders/builders.js").read_text(encoding="utf-8"):
        errors.append("builder quiz no longer reads data-correct")
    if ".xrpl-app-card h2" in dashboard:
        errors.append("dashboard shim still uses position-based headings")
    print(f"quiz buttons {correct} unique choices {len(seen)}")
    if errors:
        print("\n".join(errors))
        return 1
    print("behavior checks passed")
    return 0


if __name__ == "__main__":
    sys.exit(main())
