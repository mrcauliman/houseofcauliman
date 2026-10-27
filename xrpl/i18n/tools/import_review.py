#!/usr/bin/env python3
"""Validate a returned review CSV and, with --apply, record human decisions.

This script does not approve a language. It never writes xrpl/i18n/release.json
and it never treats an automated check as native-speaker approval.
"""
from __future__ import annotations

import csv
import datetime as dt
import json
import re
import subprocess
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
I18N = ROOT / "xrpl/i18n"
PACKAGES = I18N / "review-packages"
LANGS = ["pt-BR", "es", "fr", "de", "ja", "ko", "zh-CN", "hi", "ar"]
COLUMNS = [
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
LOCKED = COLUMNS[:10]
TOKEN = re.compile(
    r"\$XRP|\bXRPL LAYMAN\b|\bXRPL\b|\bXaman\b|\bTestnet\b|\bMainnet\b|\bNFTokenID\b|"
    r"\bNFTokenPage\b|\bTakerGets\b|\bTakerPays\b|\bAUGUR\b|\bHouse of Cauliman\b|"
    r"r[1-9A-HJ-NP-Za-km-z]{24,}|\b0\.2\b"
)
from needs_review import PATTERN as FLAG  # noqa: E402
BANNED_REVIEWER = re.compile(
    r"\b(ai|automated|automation|cursor|bot|gpt|chatgpt|claude|grok|llm|machine|"
    r"script|model|assistant|openai|anthropic)\b",
    re.I,
)


def placeholders(value):
    return sorted(re.findall(r"\{([A-Za-z0-9_]+)\}", value))


def flagged_keys(english):
    return [key for key in english if FLAG.search(english[key] or "")]


def read_csv(path):
    with path.open(encoding="utf-8", newline="") as handle:
        reader = csv.DictReader(handle)
        if reader.fieldnames != COLUMNS:
            return reader.fieldnames, []
        return reader.fieldnames, list(reader)


def load_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def reviewer_rejected(name):
    return bool(BANNED_REVIEWER.search(name))


def valid_date(value):
    if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", value):
        return False
    try:
        dt.date.fromisoformat(value)
    except ValueError:
        return False
    return True


def validate(lang, csv_path, english, catalog, package_rows):
    errors = []
    if lang not in LANGS:
        return [f"{lang} is not a review language"]
    if Path(csv_path).name != f"{lang}.csv":
        errors.append(f"return the file as {lang}.csv")
    fieldnames, rows = read_csv(Path(csv_path))
    if fieldnames != COLUMNS:
        errors.append("CSV header does not match the package")
        return errors
    expected = set(flagged_keys(english))
    seen = []
    package = {row["key"]: row for row in package_rows}
    returned_keys = [row.get("key", "") for row in rows]
    if len(returned_keys) != len(set(returned_keys)):
        errors.append("duplicate keys in the returned CSV")
    missing = sorted(expected - set(returned_keys))
    extra = sorted(set(returned_keys) - expected)
    if missing:
        errors.append("missing keys: " + ", ".join(missing[:8]))
    if extra:
        errors.append("extra keys: " + ", ".join(extra[:8]))
    for row in rows:
        key = row.get("key", "")
        seen.append(key)
        prefix = key or "(blank key)"
        if key not in expected or key not in package:
            continue
        source = english[key]
        for column in LOCKED:
            expected_value = package[key][column]
            if column == "english":
                expected_value = source
            if column == "translation":
                expected_value = catalog.get(key, "")
            if row.get(column, "") != expected_value:
                errors.append(f"{prefix}: {column} was edited")
                break
        if row.get("english", "") != source:
            continue
        approve = (row.get("approve") or "").strip()
        correction = (row.get("correction") or "").strip()
        reviewer = (row.get("reviewer") or "").strip()
        date = (row.get("date") or "").strip()
        if approve not in {"", "approve"}:
            errors.append(f"{prefix}: approve must be approve or empty")
        if approve and correction:
            errors.append(f"{prefix}: a row cannot both approve and correct")
        decided = bool(approve or correction)
        if not decided:
            if reviewer or date:
                errors.append(f"{prefix}: blank rows leave reviewer and date empty")
            continue
        if not reviewer or reviewer_rejected(reviewer):
            errors.append(f"{prefix}: reviewer must be a human name")
        if not valid_date(date):
            errors.append(f"{prefix}: date must be YYYY-MM-DD")
        if not correction:
            continue
        current = catalog.get(key, "")
        if correction == current:
            errors.append(f"{prefix}: correction matches the current translation; use approve")
        if placeholders(source) != placeholders(correction):
            errors.append(f"{prefix}: correction changed placeholders")
        for token in TOKEN.findall(source):
            if token not in correction:
                errors.append(f"{prefix}: correction dropped {token}")
    return errors


def _write_csv(path, rows):
    with path.open("w", encoding="utf-8", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=COLUMNS, lineterminator="\n")
        writer.writeheader()
        writer.writerows(rows)


def _update_md(text, decisions):
    lines = text.splitlines()
    approved_by_section = {}
    for row in decisions:
        if row["approve"] == "approve":
            approved_by_section[row["section_order"]] = approved_by_section.get(row["section_order"], 0) + 1
    for index, line in enumerate(lines):
        match = re.match(r"^\| (\d+)\. ", line)
        if match and line.rstrip().endswith("|") and line.count("|") >= 4:
            count = approved_by_section.get(match.group(1), 0)
            lines[index] = re.sub(r"\| (\d+) \|$", f"| {count} |", line)
        if line.startswith("| Total |"):
            total = sum(approved_by_section.values())
            lines[index] = re.sub(r"\| (\d+) \|$", f"| {total} |", line)
    rendered = "\n".join(lines) + ("\n" if text.endswith("\n") else "")
    for row in decisions:
        key = row["key"]
        start = rendered.find(f"`{key}`")
        if start < 0:
            raise SystemExit(f"package markdown is missing {key}")
        end = rendered.find("\n### ", start)
        if end < 0:
            end = len(rendered)
        block = rendered[start:end]
        translation = row["translation"]
        if "\n" in translation:
            raise SystemExit(f"{key}: translation cannot be written into the markdown row")
        block2, n1 = re.subn(
            r"- Current translation:.*",
            "- Current translation: " + translation,
            block,
            count=1,
        )
        block2, n2 = re.subn(r"- Approve:.*", "- Approve: " + row["approve"], block2, count=1)
        block2, n3 = re.subn(r"- Correction:.*", "- Correction: " + row["correction"], block2, count=1)
        block2, n4 = re.subn(r"- Reviewer:.*", "- Reviewer: " + row["reviewer"], block2, count=1)
        block2, n5 = re.subn(r"- Date:.*", "- Date: " + row["date"], block2, count=1)
        if min(n1, n2, n3, n4, n5) != 1:
            raise SystemExit(f"package markdown fields missing for {key}")
        rendered = rendered[:start] + block2 + rendered[end:]
    return rendered


def apply_rows(lang, rows, english, catalog, package_rows, catalog_path, package_csv, package_md, approvals_path, run_checks):
    by_key = {row["key"]: row for row in rows}
    merged = []
    approval_rows = {}
    if approvals_path.exists():
        previous = load_json(approvals_path)
        approval_rows = dict(previous.get("rows") or {})
    changed = 0
    for original in package_rows:
        key = original["key"]
        incoming = by_key[key]
        approve = (incoming.get("approve") or "").strip()
        correction = (incoming.get("correction") or "").strip()
        reviewer = (incoming.get("reviewer") or "").strip()
        date = (incoming.get("date") or "").strip()
        row = dict(original)
        if approve or correction:
            changed += 1
            if correction:
                catalog[key] = correction
                row["translation"] = correction
                row["approve"] = ""
                row["correction"] = ""
                status = "corrected"
            else:
                row["approve"] = "approve"
                row["correction"] = ""
                status = "approved"
            row["reviewer"] = reviewer
            row["date"] = date
            approval_rows[key] = {"status": status, "reviewer": reviewer, "date": date}
        merged.append(row)
    backups = {}
    for path in (catalog_path, package_csv, package_md, approvals_path):
        backups[path] = path.read_bytes() if path.exists() else None
    approvals_path.parent.mkdir(parents=True, exist_ok=True)
    try:
        catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        _write_csv(package_csv, merged)
        if package_md.exists():
            package_md.write_text(_update_md(package_md.read_text(encoding="utf-8"), merged), encoding="utf-8")
        record = {
            "language": lang,
            "note": "Human CSV decisions. This is not certification and it does not change release.json.",
            "rows": approval_rows,
        }
        approvals_path.write_text(json.dumps(record, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        if run_checks:
            subprocess.run(["node", str(I18N / "check-catalogs.mjs")], cwd=ROOT, check=True)
            subprocess.run([sys.executable, str(I18N / "tools/check_behavior.py")], cwd=ROOT, check=True)
    except Exception:
        for path, payload in backups.items():
            if payload is None:
                if path.exists():
                    path.unlink()
            else:
                path.write_bytes(payload)
        raise
    return changed


def _package_rows(lang):
    _fields, rows = read_csv(PACKAGES / f"{lang}.csv")
    return rows


def main(argv):
    if argv == ["--self-test"]:
        return self_test()
    apply = "--apply" in argv
    args = [arg for arg in argv if arg != "--apply"]
    if len(args) != 2:
        print("usage: import_review.py <lang> <file.csv> [--apply]", file=sys.stderr)
        return 2
    lang, csv_path = args
    english = load_json(I18N / "catalogs/en.json")
    catalog_path = I18N / "catalogs" / f"{lang}.json"
    if not catalog_path.exists():
        print(f"missing {catalog_path}", file=sys.stderr)
        return 1
    catalog = load_json(catalog_path)
    package_csv = PACKAGES / f"{lang}.csv"
    package_rows = _package_rows(lang)
    errors = validate(lang, csv_path, english, catalog, package_rows)
    decided = 0
    if not errors:
        _fields, rows = read_csv(Path(csv_path))
        decided = sum(1 for row in rows if (row.get("approve") or "").strip() or (row.get("correction") or "").strip())
        print(f"{lang}: {len(rows)} rows, {decided} decisions, 0 errors")
    else:
        print(f"{lang}: {len(errors)} errors")
        print("\n".join(errors))
        return 1
    if not apply:
        print("dry-run: no files written")
        return 0
    changed = apply_rows(
        lang,
        rows,
        english,
        catalog,
        package_rows,
        catalog_path,
        package_csv,
        PACKAGES / f"{lang}.md",
        PACKAGES / "approvals" / f"{lang}.json",
        True,
    )
    print(f"applied {changed} decisions for {lang}. release.json was not changed. This is not approval.")
    return 0


def self_test():
    release_path = I18N / "release.json"
    before = release_path.read_bytes()
    with tempfile.TemporaryDirectory() as tmp_name:
        tmp = Path(tmp_name)
        english = {
            "seed.example": "Never share a seed. Keep {s1} and $XRP and XRPL.",
            "plain.example": "Hello",
        }
        catalog = {
            "seed.example": "シードを共有しない。{s1} と $XRP と XRPL を保つ。",
            "plain.example": "こんにちは",
        }
        base = {
            "section_order": "1",
            "risk_tier": "Wallet recovery and seed",
            "key": "seed.example",
            "page": "Definitions",
            "page_url": "/xrpl/definitions.html",
            "heading": "Seed",
            "purpose": "Secret",
            "reader_must_understand": "Do not share it.",
            "english": english["seed.example"],
            "translation": catalog["seed.example"],
            "approve": "",
            "correction": "",
            "reviewer": "",
            "date": "",
        }
        package = [dict(base)]
        csv_path = tmp / "ja.csv"
        _write_csv(csv_path, [dict(base, approve="approve", reviewer="Amina Okonkwo", date="2026-10-27")])
        errors = validate("ja", csv_path, english, catalog, package)
        if errors:
            print("self-test approve row failed", errors)
            return 1
        bad_name = tmp / "wrong.csv"
        _write_csv(bad_name, package)
        if not any("ja.csv" in item for item in validate("ja", bad_name, english, catalog, package)):
            print("self-test filename check failed")
            return 1
        cases = [
            ("reviewer", dict(base, approve="approve", reviewer="GPT bot", date="2026-10-27")),
            ("both", dict(base, approve="approve", correction="x", reviewer="Amina Okonkwo", date="2026-10-27")),
            ("date", dict(base, approve="approve", reviewer="Amina Okonkwo", date="2026-13-40")),
            ("word", dict(base, approve="yes", reviewer="Amina Okonkwo", date="2026-10-27")),
            ("english", dict(base, english="changed", approve="approve", reviewer="Amina Okonkwo", date="2026-10-27")),
            ("translation", dict(base, translation="changed", approve="approve", reviewer="Amina Okonkwo", date="2026-10-27")),
            ("token", dict(base, correction="no dollar", reviewer="Amina Okonkwo", date="2026-10-27")),
            ("placeholder", dict(base, correction="Keep $XRP and XRPL.", reviewer="Amina Okonkwo", date="2026-10-27")),
            ("same", dict(base, correction=catalog["seed.example"], reviewer="Amina Okonkwo", date="2026-10-27")),
            ("blank-meta", dict(base, reviewer="Amina Okonkwo")),
            ("aisha-passes-later", dict(base, approve="approve", reviewer="Aisha Rahman", date="2026-10-27")),
        ]
        for name, row in cases:
            path = tmp / "ja.csv"
            _write_csv(path, [row])
            got = validate("ja", path, english, catalog, package)
            if name == "aisha-passes-later":
                if got:
                    print("self-test Aisha should pass", got)
                    return 1
                continue
            if not got:
                print("self-test failed to reject", name)
                return 1
        extra = dict(base, key="plain.example")
        _write_csv(csv_path, [base, extra])
        if not validate("ja", csv_path, english, catalog, package):
            print("self-test extra key failed")
            return 1
        catalog_path = tmp / "ja.json"
        catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        package_csv = tmp / "package.csv"
        _write_csv(package_csv, package)
        md = tmp / "ja.md"
        md.write_text(
            "\n".join([
                "| 1. Wallet recovery and seed | 1 | 0 |",
                "| Total | 1 | 0 |",
                "",
                "### 1.1 `seed.example`",
                "",
                "- Current translation: " + catalog["seed.example"],
                "- Approve:",
                "- Correction:",
                "- Reviewer:",
                "- Date:",
                "",
            ]) + "\n",
            encoding="utf-8",
        )
        approvals = tmp / "approvals" / "ja.json"
        _write_csv(csv_path, [dict(base, approve="approve", reviewer="Amina Okonkwo", date="2026-10-27")])
        _fields, rows = read_csv(csv_path)
        apply_rows("ja", rows, english, dict(catalog), package, catalog_path, package_csv, md, approvals, False)
        saved = load_json(catalog_path)
        if saved["seed.example"] != catalog["seed.example"]:
            print("self-test approve changed the catalog")
            return 1
        record = load_json(approvals)
        if record["rows"]["seed.example"]["status"] != "approved":
            print("self-test missing approval record")
            return 1
        _write_csv(csv_path, [dict(base)])
        _fields, blank_rows = read_csv(csv_path)
        apply_rows("ja", blank_rows, english, load_json(catalog_path), _package_rows_from(package_csv), catalog_path, package_csv, md, approvals, False)
        if "seed.example" not in load_json(approvals)["rows"]:
            print("self-test blank row erased an approval")
            return 1
        corrected = "新しい {s1} $XRP XRPL の文。"
        fresh_catalog = dict(catalog)
        fresh_path = tmp / "ja2.json"
        fresh_path.write_text(json.dumps(fresh_catalog, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        _write_csv(package_csv, package)
        _write_csv(csv_path, [dict(base, correction=corrected, reviewer="Amina Okonkwo", date="2026-10-27")])
        _fields, rows = read_csv(csv_path)
        apply_rows("ja", rows, english, fresh_catalog, package, fresh_path, package_csv, md, tmp / "approvals" / "ja2.json", False)
        if load_json(fresh_path)["seed.example"] != corrected:
            print("self-test correction was not applied")
            return 1
        _fields, written = read_csv(package_csv)
        if written[0]["translation"] != corrected or written[0]["correction"] != "":
            print("self-test CSV was not updated")
            return 1
        if release_path.read_bytes() != before:
            print("self-test wrote release.json")
            return 1
    print("import_review self-test passed")
    return 0


def _package_rows_from(path):
    _fields, rows = read_csv(path)
    return rows


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
