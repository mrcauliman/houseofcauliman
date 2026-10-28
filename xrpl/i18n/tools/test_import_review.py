#!/usr/bin/env python3
"""Exercise import_review.py with fake samples.

Nothing here is a native-speaker approval. Failed imports must leave the
real catalogs, review packets, and release.json byte-identical.
"""
from __future__ import annotations

import hashlib
import shutil
import sys
import tempfile
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import import_review  # noqa: E402

ROOT = import_review.ROOT
I18N = import_review.I18N


def tree_hashes():
    paths = [I18N / "release.json"]
    for folder in (I18N / "catalogs", I18N / "review-packages"):
        for path in folder.rglob("*"):
            if path.is_file() and "__pycache__" not in path.parts and path.suffix != ".pyc":
                paths.append(path)
    return {str(path.relative_to(ROOT)): hashlib.sha256(path.read_bytes()).hexdigest() for path in paths}


def _clone_rows():
    _fields, rows = import_review.read_csv(I18N / "review-packages" / "ja.csv")
    # TEST ONLY baseline: real partial decisions must not turn a negative
    # fixture (e.g. missing reviewer) into a valid apply. Never edit the packet.
    return [dict(row, approve="", correction="", reviewer="", date="") for row in rows]


def _fail(samples, name, rows):
    path = samples / "ja.csv"
    import_review._write_csv(path, rows)
    code = import_review.main(["ja", str(path), "--apply"])
    if code == 0:
        raise SystemExit(f"fake {name} was applied")


def _success_cases(samples):
    english = {
        "fixture.seed": "FAKE FIXTURE seed. Keep {s1} and $XRP and XRPL.",
        "fixture.other": "FAKE FIXTURE second seed sentence.",
    }
    catalog = {
        "fixture.seed": "FAKE FIXTURE 訳 {s1} $XRP XRPL。",
        "fixture.other": "FAKE FIXTURE 二つ目。",
    }
    def row(key, translation, **updates):
        base = {
            "section_order": "1",
            "risk_tier": "Wallet recovery and seed",
            "key": key,
            "page": "Fixture",
            "page_url": "/xrpl/definitions.html",
            "heading": "FAKE",
            "purpose": "FAKE FIXTURE, not a review.",
            "reader_must_understand": "This row is not an approval.",
            "english": english[key],
            "translation": translation,
            "approve": "",
            "correction": "",
            "reviewer": "",
            "date": "",
        }
        base.update(updates)
        return base

    package = [row("fixture.seed", catalog["fixture.seed"]), row("fixture.other", catalog["fixture.other"])]
    csv_path = samples / "ja.csv"
    import_review._write_csv(csv_path, [
        row("fixture.seed", catalog["fixture.seed"], approve="approve", reviewer="Amina Okonkwo", date="2026-10-27"),
        row("fixture.other", catalog["fixture.other"]),
    ])
    errors = import_review.validate("ja", csv_path, english, catalog, package)
    if errors:
        raise SystemExit("fake partial approval rejected: " + "; ".join(errors))
    catalog_path = samples / "ja.json"
    catalog_path.write_text(__import__("json").dumps(catalog, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    package_csv = samples / "package.csv"
    import_review._write_csv(package_csv, package)
    md = samples / "ja.md"
    md.write_text(
        "\n".join([
            "| 1. Wallet recovery and seed | 2 | 0 |",
            "| Total | 2 | 0 |",
            "",
            "### 1.1 `fixture.seed`",
            "",
            "- Current translation: " + catalog["fixture.seed"],
            "- Approve:",
            "- Correction:",
            "- Reviewer:",
            "- Date:",
            "",
            "### 1.2 `fixture.other`",
            "",
            "- Current translation: " + catalog["fixture.other"],
            "- Approve:",
            "- Correction:",
            "- Reviewer:",
            "- Date:",
            "",
        ]),
        encoding="utf-8",
    )
    before = catalog_path.read_bytes()
    _fields, incoming = import_review.read_csv(csv_path)
    import_review.apply_rows(
        "ja", incoming, english, dict(catalog), package,
        catalog_path, package_csv, md, samples / "approvals" / "ja.json", False,
    )
    saved = import_review.load_json(catalog_path)
    if saved["fixture.seed"] != catalog["fixture.seed"]:
        raise SystemExit("fake approval changed the sentence")
    record = import_review.load_json(samples / "approvals" / "ja.json")
    if set(record["rows"]) != {"fixture.seed"}:
        raise SystemExit("incomplete fake review recorded a blank row")
    if record["rows"]["fixture.seed"]["status"] != "approved":
        raise SystemExit("fake approval status missing")

    corrected = "FAKE FIXTURE 修正 {s1} $XRP XRPL。"
    fresh = samples / "corrected.json"
    fresh.write_bytes(before)
    import_review._write_csv(package_csv, package)
    import_review._write_csv(csv_path, [
        row("fixture.seed", catalog["fixture.seed"], correction=corrected, reviewer="Amina Okonkwo", date="2026-10-27"),
        row("fixture.other", catalog["fixture.other"]),
    ])
    _fields, incoming = import_review.read_csv(csv_path)
    import_review.apply_rows(
        "ja", incoming, english, dict(catalog), package,
        fresh, package_csv, md, samples / "approvals" / "corrected.json", False,
    )
    if import_review.load_json(fresh)["fixture.seed"] != corrected:
        raise SystemExit("fake correction was not applied")

    broken = samples / "broken.json"
    broken.write_bytes(before)
    (samples / "missing.md").write_text("# FAKE FIXTURE\n\nNo review rows here.\n", encoding="utf-8")
    try:
        import_review.apply_rows(
            "ja", incoming, english, dict(catalog), package,
            broken, package_csv, samples / "missing.md", samples / "approvals" / "broken.json", False,
        )
    except RuntimeError:
        restored = True
    else:
        restored = False
    if not restored or broken.read_bytes() != before:
        raise SystemExit("failed fake import did not restore the catalog")
    if (samples / "approvals" / "broken.json").exists():
        raise SystemExit("failed fake import left an approval file")


def main():
    before = tree_hashes()
    with tempfile.TemporaryDirectory(prefix="xrpl-fake-review-") as tmp_name:
        samples = Path(tmp_name)
        note = Path(__file__).resolve().parent / "fixtures" / "import_review" / "FAKE_NOT_AN_APPROVAL.txt"
        shutil.copy(note, samples / "FAKE_NOT_AN_APPROVAL.txt")
        rows = _clone_rows()
        first = dict(rows[0])
        duplicate = rows + [dict(first)]
        bad_date = [dict(row) for row in rows]
        bad_date[0]["approve"] = "approve"
        bad_date[0]["reviewer"] = "Amina Okonkwo"
        bad_date[0]["date"] = "2026-13-40"
        missing_name = [dict(row) for row in rows]
        missing_name[0]["approve"] = "approve"
        missing_name[0]["date"] = "2026-10-27"
        ai_name = [dict(row) for row in rows]
        ai_name[0]["approve"] = "approve"
        ai_name[0]["reviewer"] = "GPT"
        ai_name[0]["date"] = "2026-10-27"
        tool_name = [dict(row) for row in rows]
        tool_name[0]["approve"] = "approve"
        tool_name[0]["reviewer"] = "automated"
        tool_name[0]["date"] = "2026-10-27"
        both = [dict(row) for row in rows]
        both[0]["approve"] = "approve"
        both[0]["correction"] = "FAKE"
        both[0]["reviewer"] = "Amina Okonkwo"
        both[0]["date"] = "2026-10-27"
        invalid = [dict(row) for row in rows]
        invalid[0]["approve"] = "yes"
        invalid[0]["reviewer"] = "Amina Okonkwo"
        invalid[0]["date"] = "2026-10-27"
        token = [dict(row) for row in rows]
        token_index = next(index for index, row in enumerate(token) if "$XRP" in row["english"] or "XRPL" in row["english"])
        token[token_index]["correction"] = "FAKE FIXTURE without the preserved token."
        token[token_index]["reviewer"] = "Amina Okonkwo"
        token[token_index]["date"] = "2026-10-27"
        placeholder = [dict(row) for row in rows]
        place_index = next(index for index, row in enumerate(placeholder) if "{s1}" in row["english"])
        placeholder[place_index]["correction"] = placeholder[place_index]["english"].replace("{s1}", "")
        placeholder[place_index]["reviewer"] = "Amina Okonkwo"
        placeholder[place_index]["date"] = "2026-10-27"
        _fail(samples, "duplicate", duplicate)
        _fail(samples, "bad-date", bad_date)
        _fail(samples, "missing-reviewer", missing_name)
        _fail(samples, "ai-name", ai_name)
        _fail(samples, "tool-name", tool_name)
        _fail(samples, "both", both)
        _fail(samples, "invalid-approve", invalid)
        _fail(samples, "token", token)
        _fail(samples, "placeholder", placeholder)
        (samples / "ja.csv").write_text("not,the,header\n1,2,3\n", encoding="utf-8")
        if import_review.main(["ja", str(samples / "ja.csv"), "--apply"]) == 0:
            raise SystemExit("fake invalid header was applied")
        _success_cases(samples)
    after = tree_hashes()
    if before != after:
        changed = [path for path in before if before.get(path) != after.get(path)]
        raise SystemExit("real review files changed: " + ", ".join(changed))
    print("import_review fake-sample tests passed")
    return 0


if __name__ == "__main__":
    sys.exit(main())
