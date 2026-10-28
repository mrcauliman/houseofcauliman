#!/usr/bin/env python3
"""Prove the release gate, the USD pin, and the review packets.

The declared-state check is mechanical, not reviewer authentication or owner
authorization. --expect-held additionally requires the current all-unapproved,
zero-decision state. Synthetic transitions start from an explicit held fixture.
"""
from __future__ import annotations

import argparse
import copy
import importlib.util
import json
import re
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
sys.path.insert(0, str(Path(__file__).resolve().parent))
from build_locales import (  # noqa: E402
    LANGS,
    PAGES,
    REVIEW_NOTICE,
    audit_release_output,
    commit_generated,
    fill_seo,
    hreflang_codes,
    is_public,
    load_catalogs,
    load_release,
    public_path,
    render_site,
    sitemap_locs,
    snapshot_sources,
    stale_locale_files,
)
from htmltree import find_all, parse  # noqa: E402
from needs_review import LANGS as REVIEW_LANGS  # noqa: E402
from needs_review import PATTERN as FLAG  # noqa: E402

ORIGIN = "https://houseofcauliman.com"
NOTICE = REVIEW_NOTICE


def hreflangs(text):
    root = parse(text)
    return [node.attr("hreflang") for node in find_all(root, tag="link") if node.attr("hreflang")]


def load_import_review():
    path = Path(__file__).resolve().parent / "import_review.py"
    spec = importlib.util.spec_from_file_location("import_review", path)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def _test_commit_restores():
    """A rejected or crashed write must leave the previous bytes in place."""
    with tempfile.TemporaryDirectory() as tmp_name:
        root = Path(tmp_name)
        page = root / "nested" / "page.html"
        page.parent.mkdir(parents=True)
        page.write_text("OLD", encoding="utf-8")
        other = root / "keep.html"
        other.write_text("KEEP", encoding="utf-8")
        files = {"nested/page.html": "NEW", "keep.html": "CHANGED"}

        def rejected(_disk):
            return ["forced mismatch"]

        try:
            commit_generated(files, root, rejected)
        except SystemExit as exc:
            if "forced mismatch" not in str(exc):
                return "audit rejection raised an unexpected error"
        else:
            return "audit rejection did not abort the write"
        if page.read_text(encoding="utf-8") != "OLD" or other.read_text(encoding="utf-8") != "KEEP":
            return "audit rejection left new bytes on disk"
        if list(root.rglob("*.xrpl-tmp")):
            return "audit rejection left a temporary file"

        def crashed(_disk):
            raise RuntimeError("partial write")

        try:
            commit_generated(files, root, crashed)
        except RuntimeError:
            pass
        else:
            return "crashed write did not raise"
        if page.read_text(encoding="utf-8") != "OLD" or other.read_text(encoding="utf-8") != "KEEP":
            return "crashed write left new bytes on disk"

        commit_generated(files, root, lambda _disk: [])
        if page.read_text(encoding="utf-8") != "NEW" or other.read_text(encoding="utf-8") != "CHANGED":
            return "successful write did not stick"
    return ""


def declared_state_errors(release):
    """Structural declaration validation, never owner/reviewer authentication."""
    order = [item[0] for item in LANGS]
    languages = release.get("languages") if isinstance(release, dict) else None
    if not isinstance(languages, dict) or list(languages) != order:
        return ["release.json must declare exactly the ordered supported languages"]
    errors = []
    if languages["en"] != "source":
        errors.append("English must be source")
    for lang in order[1:]:
        if not isinstance(languages[lang], str) or languages[lang] not in {"unapproved", "approved"}:
            errors.append(f"{lang}: invalid release state")
    return errors


def held_fixture():
    """Explicit TEST ONLY baseline independent of the actual declaration."""
    return {"languages": {lang: "source" if lang == "en" else "unapproved"
                          for lang, *_rest in LANGS}}


def declared_public(release, catalogs, lang):
    english = catalogs.get("en") or {}
    local = catalogs.get(lang) or {}
    complete = bool(english) and all(key in local and local[key] != "" for key in english)
    status = release["languages"][lang]
    return complete and status == ("source" if lang == "en" else "approved")


def native_labels():
    runtime = (ROOT / "xrpl/i18n/i18n.js").read_text(encoding="utf-8")
    return {lang: json.loads(label) for lang, label in
            re.findall(r'\{ id: "([^"]+)"[^\n]+native: ("[^"]+")', runtime)}


def audit_declared_output(files, release, catalogs):
    """Independent per-page oracle derived from declaration AND completeness.

    This proves output consistency only. It never proves authentic review,
    native competence, owner acceptance or permission to publish.
    """
    errors = declared_state_errors(release)
    if errors:
        return errors  # Invalid/missing states must never pass the check.
    public = [lang for lang, *_rest in LANGS if declared_public(release, catalogs, lang)]
    names = native_labels()
    if set(names) != {item[0] for item in LANGS}:
        return ["runtime native selector labels could not be read"]

    def url(rel, slug):
        rest = rel.removeprefix("xrpl/")
        if rest.endswith("index.html"):
            rest = rest[:-len("index.html")]
        return ORIGIN + "/xrpl/" + (slug + "/" if slug else "") + rest

    expected_locs = [url(rel, slug) for lang, slug, *_rest in LANGS if lang in public for rel in PAGES]
    proposed = files.get("xrpl/i18n/sitemap.proposed.xml", "")
    try:
        import xml.etree.ElementTree as ET
        sitemap = ET.fromstring(proposed)
        locs = [node.text for node in sitemap.findall("{http://www.sitemaps.org/schemas/sitemap/0.9}url/{http://www.sitemaps.org/schemas/sitemap/0.9}loc")]
    except ET.ParseError:
        locs = None
    if locs != expected_locs:
        errors.append("proposed sitemap does not exactly match declared public languages")
    if "Do not replace /sitemap.xml" not in proposed:
        errors.append("proposed sitemap lost its warning")
    for rel in PAGES:
        for lang, slug, html_lang, direction, _href in LANGS:
            name = "xrpl/" + (slug + "/" if slug else "") + rel.removeprefix("xrpl/")
            text = files.get(name)
            if text is None:
                errors.append(f"{name}: missing page")
                continue
            tree = parse(text)
            html = find_all(tree, tag="html")
            if len(html) != 1:
                errors.append(f"{name}: expected one html element")
                continue
            public_page = lang in public
            if (html[0].attr("lang"), html[0].attr("dir")) != (html_lang, direction):
                errors.append(f"{name}: lang/dir mismatch")
            if html[0].attr("data-xrpl-public") != ("1" if public_page else None):
                errors.append(f"{name}: public marker mismatch")
            links = find_all(tree, tag="link")
            canonical = [node.attr("href") for node in links if node.attr("rel") == "canonical"]
            if canonical != [url(rel, slug)]:
                errors.append(f"{name}: canonical mismatch")
            alternate = [(node.attr("rel"), node.attr("hreflang"), node.attr("href"))
                         for node in links if node.attr("hreflang") is not None]
            expected = [("alternate", href, url(rel, other_slug)) for other_lang, other_slug, _html, _dir, href in LANGS if other_lang in public]
            expected.append(("alternate", "x-default", url(rel, "")))
            if alternate != (expected if public_page else []):
                errors.append(f"{name}: exact hreflang cluster mismatch")
            robots = [(node.attr("content"), node.attr("data-xrpl-robots"))
                      for node in find_all(tree, tag="meta") if node.attr("name") == "robots"]
            if robots != ([] if public_page else [("noindex, follow", "1")]):
                errors.append(f"{name}: robots mismatch")
            notices = find_all(tree, attr="id", value="xrpl-review-notice")
            if public_page and notices or not public_page and (len(notices) != 1 or notices[0].text_content() != NOTICE):
                errors.append(f"{name}: review notice mismatch")
            if rel == "xrpl/index.html":
                selects = find_all(tree, tag="select", attr="id", value="xrpl-language")
                options = find_all(selects[0], tag="option") if len(selects) == 1 else []
                actual = [(node.attr("value"), node.text_content()) for node in options]
                expected_options = [(option_lang, names[option_lang] + ("" if option_lang in public else " (under review)")) for option_lang, *_rest in LANGS]
                if actual != expected_options:
                    errors.append(f"{name}: selector mismatch")
    return errors


def packet_decision_errors(lang, rows, english, catalog, record, importer, expect_held=False):
    """Check existing packet/record syntax, not provenance or release authority.

    Pending CSV decisions and applied corrected records may exist while held.
    Neither changes or implies the declaration. No new evidence schema is used.
    """
    errors = []
    records = {}
    if record is not None:
        if not isinstance(record, dict) or record.get("language") != lang or not isinstance(record.get("rows"), dict):
            return [f"{lang}: malformed existing decision record"]
        records = record["rows"]
    if expect_held and (record is not None or any(row.get(column) for row in rows for column in ("approve", "correction", "reviewer", "date"))):
        errors.append(f"{lang}: --expect-held requires blank decisions and no decision record")
    by_key = {row["key"]: row for row in rows}
    if set(records) - set(by_key):
        errors.append(f"{lang}: decision record contains unknown keys")
    for row in rows:
        key = row["key"]
        decision = records.get(key)
        if decision is None:
            # Existing importer validation supports pending approve OR correction.
            errors.extend(importer.validate(lang, f"{lang}.csv", {key: english[key]},
                                             {key: catalog.get(key, "")}, [row], parsed=(importer.COLUMNS, [row])))
            continue
        if not isinstance(decision, dict):
            errors.append(f"{lang} {key}: invalid decision object")
            continue
        status = decision.get("status")
        reviewer = decision.get("reviewer")
        date = decision.get("date")
        if status not in {"approved", "corrected"} or not isinstance(reviewer, str) or not reviewer.strip() or importer.reviewer_rejected(reviewer) or not isinstance(date, str) or not importer.valid_date(date):
            errors.append(f"{lang} {key}: invalid decision metadata")
        if row.get("reviewer") != reviewer or row.get("date") != date or row.get("correction") or row.get("approve") != ("approve" if status == "approved" else ""):
            errors.append(f"{lang} {key}: packet/decision record mismatch")
        for column in importer.COLUMNS:
            problem = importer.cell_problem(row.get(column))
            if problem:
                errors.append(f"{lang} {key} {column}: {problem}")
        if any("\n" in (row.get(column) or "") or "\r" in (row.get(column) or "") for column in ("approve", "correction", "reviewer", "date")):
            errors.append(f"{lang} {key}: multiline decision metadata")
    return errors


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--expect-held", action="store_true",
                        help="require all nine translations unapproved and no reviewer decisions")
    args = parser.parse_args(argv)
    errors = []
    try:
        release = load_release()
    except (SystemExit, OSError, ValueError, TypeError, AttributeError) as exc:
        print(f"invalid release declaration: {exc}")
        return 1
    errors.extend(declared_state_errors(release))
    if errors:
        print("\n".join(errors))
        return 1
    if args.expect_held:
        for lang in REVIEW_LANGS:
            if release["languages"][lang] != "unapproved":
                errors.append(f"{lang}: --expect-held requires unapproved")
    if "under review" not in release.get("policy", "") or "does not publish" not in release.get("policy", ""):
        errors.append("release policy does not record the selector decision")
    catalogs = load_catalogs()
    if not isinstance(catalogs.get("en"), dict) or not catalogs["en"]:
        print("English source catalog is missing or empty")
        return 1
    live = (ROOT / "sitemap.xml").read_text(encoding="utf-8")
    if "/xrpl/" in live:
        errors.append("live sitemap.xml contains an xrpl url")

    reality = (ROOT / "xrpl/investing-reality.html").read_text(encoding="utf-8")
    ja_reality = (ROOT / "xrpl/ja/investing-reality.html").read_text(encoding="utf-8")
    pinned = "toLocaleString('en-US',{style:'currency',currency:'USD'"
    if pinned not in reality or pinned not in ja_reality:
        errors.append("market cap is not pinned to en-US on english and ja")
    if "c=p*s" not in reality:
        errors.append("cap formula changed")

    css = (ROOT / "xrpl/i18n/i18n.css").read_text(encoding="utf-8")
    if "fonts.googleapis.com" in css or "fonts.gstatic.com" in css or "@font-face" in css:
        errors.append("font css uses a remote font or a new font file")
    for needle in ("WenQuanYi Micro Hei", "Droid Sans Fallback", "Noto Sans Devanagari", "Noto Naskh Arabic", "Hiragino Sans", "Malgun Gothic", "Microsoft YaHei"):
        if needle not in css:
            errors.append("font stack missing " + needle)
    if 'html[lang="ja"] body{font-family:"Noto Sans CJK JP"' in css:
        errors.append("ja stack still starts at an uninstalled Noto CJK family")

    english = catalogs["en"]
    flagged = [key for key in english if FLAG.search(english[key] or "")]
    if len(flagged) != 230:
        errors.append(f"flagged set is {len(flagged)}")
    importer = load_import_review()
    decisions_dir = ROOT / "xrpl/i18n/review-packages/approvals"
    for path in decisions_dir.glob("*.json"):
        if path.stem not in REVIEW_LANGS:
            errors.append(f"unknown decision record {path.name}")
    for lang, _slug, _html, _direction, _href in LANGS:
        if lang == "en":
            continue
        csv_path = ROOT / "xrpl/i18n/review-packages" / f"{lang}.csv"
        md = (ROOT / "xrpl/i18n/review-packages" / f"{lang}.md").read_text(encoding="utf-8")
        try:
            _fields, rows = importer.read_csv(csv_path)
        except importer.ReviewInputError as exc:
            errors.append(f"{lang}: {exc}")
            continue
        keys = [row["key"] for row in rows]
        if len(rows) != len(flagged) or len(set(keys)) != len(flagged) or set(keys) != set(flagged):
            errors.append(f"{lang} package key set {len(rows)}")
            continue
        for row in rows:
            if row["english"] != english[row["key"]] or row["translation"] != catalogs.get(lang, {}).get(row["key"]):
                errors.append(f"{lang} {row['key']} text drift")
            if not all(row[column] for column in ("risk_tier", "page", "purpose", "reader_must_understand")):
                errors.append(f"{lang} {row['key']} missing context")
            if f"`{row['key']}`" not in md:
                errors.append(f"{lang} markdown missing {row['key']}")
        record_path = decisions_dir / f"{lang}.json"
        try:
            record = json.loads(record_path.read_text(encoding="utf-8")) if record_path.exists() else None
        except (OSError, ValueError) as exc:
            errors.append(f"{lang}: cannot read decision record: {exc}")
            continue
        errors.extend(packet_decision_errors(lang, rows, english, catalogs.get(lang, {}), record, importer, args.expect_held))
        if "- Approve:" not in md or "## Glossary" not in md:
            errors.append(f"{lang} markdown missing instructions or glossary")

    if importer.self_test() != 0:
        errors.append("import_review self-test failed")
    import test_import_review
    try:
        if test_import_review.main() != 0:
            errors.append("import_review sample tests failed")
    except SystemExit as exc:
        errors.append(f"import_review sample tests failed: {exc}")

    runtime = (ROOT / "xrpl/i18n/i18n.js").read_text(encoding="utf-8")
    if "if (!catalogComplete(id)) return false;" not in runtime:
        errors.append("runtime ignores a missing catalog key")
    if 'getAttribute("data-xrpl-public")' not in runtime:
        errors.append("runtime can promote a page that was baked unapproved")
    restore_error = _test_commit_restores()
    if restore_error:
        errors.append(restore_error)

    release_bytes = (ROOT / "xrpl/i18n/release.json").read_bytes()
    sources = snapshot_sources()
    declared_files = render_site(sources, catalogs, release)
    disk_files = {}
    for rel, text in declared_files.items():
        disk_path = ROOT / rel
        if not disk_path.exists():
            errors.append(f"disk missing generated file: {rel}")
            continue
        disk_files[rel] = disk_path.read_text(encoding="utf-8")
        if disk_files[rel] != text:
            errors.append(f"disk does not match release.json: {rel}")
    errors.extend(stale_locale_files(set(declared_files)))
    errors.extend(audit_release_output(disk_files, release, catalogs))
    errors.extend(audit_declared_output(disk_files, release, catalogs))

    # All following transitions are TEST ONLY, independent of actual declaration.
    fixture_release = copy.deepcopy(held_fixture())
    base_files = render_site(sources, catalogs, fixture_release)
    errors.extend(audit_declared_output(base_files, fixture_release, catalogs))
    tampered = dict(base_files)
    marker = "<!--xrpl-seo-end-->"
    tamper_page = "xrpl/ja/definitions.html"
    if marker not in tampered[tamper_page]:
        errors.append("tamper fixture missing seo marker")
    else:
        tampered[tamper_page] = tampered[tamper_page].replace(
            marker,
            '<link rel="alternate" hreflang="ja" href="https://houseofcauliman.com/xrpl/ja/definitions.html">' + marker,
            1,
        )
        if not audit_release_output(tampered, fixture_release, catalogs):
            errors.append("tampered unapproved hreflang was accepted")

    approved = copy.deepcopy(fixture_release)
    approved["languages"]["pt-BR"] = "approved"
    mid = render_site(sources, catalogs, approved)
    changed = sorted(path for path in base_files if base_files[path] != mid[path])
    pt_changed = [path for path in changed if path.startswith("xrpl/pt-br/")]
    other_locales = [
        path for path in changed
        if path.startswith("xrpl/") and path.split("/")[1] in {"es", "fr", "de", "ja", "ko", "zh-cn", "hi", "ar"}
    ]
    native = "Português (Brasil)"
    marked = f">{native} (under review)</option>"
    unmarked = f">{native}</option>"
    # Lesson pages bake no language selector, so they stay byte-identical.
    # Each other dashboard changes only the approved language's option label.
    if len(other_locales) != 8 or any(not path.endswith("/index.html") for path in other_locales):
        errors.append(f"pt-BR approval touched {len(other_locales)} other locale files")
    for path in other_locales:
        expected = base_files[path].replace(marked, unmarked, 1)
        if mid[path] != expected or hreflangs(mid[path]) or REVIEW_NOTICE not in mid[path] or "data-xrpl-public" in mid[path]:
            errors.append(f"{path} changed beyond the pt-BR selector label")
            break
    if len(pt_changed) != 13:
        errors.append(f"pt-BR approval changed {len(pt_changed)} pt-BR files")
    if "xrpl/i18n/sitemap.proposed.xml" not in changed or "xrpl/i18n/release.js" not in changed:
        errors.append("pt-BR approval did not change the sitemap and release.js")
    english_changed = [
        path for path in changed
        if path.startswith("xrpl/") and not path.startswith("xrpl/i18n/") and path.split("/")[1] not in {
            "pt-br", "es", "fr", "de", "ja", "ko", "zh-cn", "hi", "ar",
        }
    ]
    if len(english_changed) != 13:
        errors.append(f"english hreflang cluster changed {len(english_changed)} files")
    mid_errors = audit_release_output(mid, approved, catalogs) + audit_declared_output(mid, approved, catalogs)
    if mid_errors:
        errors.append("approved render failed audit: " + mid_errors[0])
    if hreflangs(mid["xrpl/ja/definitions.html"]):
        errors.append("ja gained hreflang when only pt-BR was approved")
    if REVIEW_NOTICE not in mid["xrpl/ja/definitions.html"]:
        errors.append("ja lost its notice when pt-BR was approved")
    if hreflangs(mid["xrpl/pt-br/definitions.html"]) != ["en", "pt-BR", "x-default"]:
        errors.append("pt-BR hreflang " + ",".join(hreflangs(mid["xrpl/pt-br/definitions.html"])))
    if REVIEW_NOTICE in mid["xrpl/pt-br/definitions.html"] or "data-xrpl-robots" in mid["xrpl/pt-br/definitions.html"]:
        errors.append("approved pt-BR is still marked under review")
    if 'data-xrpl-public="1"' not in mid["xrpl/pt-br/definitions.html"]:
        errors.append("approved pt-BR is missing data-xrpl-public")
    if "data-xrpl-public" in mid["xrpl/ja/definitions.html"]:
        errors.append("ja was baked public when only pt-BR was approved")
    reverted = copy.deepcopy(approved)
    reverted["languages"]["pt-BR"] = "unapproved"
    back = render_site(sources, catalogs, reverted)
    if back != base_files:
        errors.append("reversal did not restore the unapproved render")

    thin = copy.deepcopy(catalogs)
    thin["ja"].pop(next(iter(thin["ja"])))
    claim = copy.deepcopy(fixture_release)
    claim["languages"]["ja"] = "approved"
    hidden = render_site(sources, thin, claim)
    errors.extend(audit_declared_output(hidden, claim, thin))
    hidden_page = hidden["xrpl/ja/definitions.html"]
    if hreflangs(hidden_page) or REVIEW_NOTICE not in hidden_page or "noindex" not in hidden_page:
        errors.append("a missing translation key made ja indexable")
    if "/xrpl/ja/" in hidden["xrpl/i18n/sitemap.proposed.xml"]:
        errors.append("a missing translation key put ja in the sitemap")
    if ">日本語 (under review)</option>" not in hidden["xrpl/ja/index.html"]:
        errors.append("incomplete ja is unmarked in the selector")
    if "data-xrpl-public" in hidden_page:
        errors.append("a missing translation key marked ja public")
    if (ROOT / "xrpl/i18n/release.json").read_bytes() != release_bytes:
        errors.append("release audit wrote release.json")

    if errors:
        print("\n".join(errors))
        return 1
    print("declared-state release consistency checks passed")
    print("packages: 9 languages x 230 keys; decision metadata checked structurally")
    print("public: " + ", ".join(lang for lang, *_rest in LANGS if declared_public(release, catalogs, lang)))
    if args.expect_held:
        print("held-state checks passed: nine unapproved languages, zero reviewer decisions")
    print("Not proof of authentic reviewers, native competence, owner acceptance or publication authorization.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
