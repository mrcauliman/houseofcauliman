#!/usr/bin/env python3
"""Prove the release gate, the USD pin, and the review packets.

The in-memory language flip never writes release.json. Passing this script
is not native-speaker approval.
"""
from __future__ import annotations

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


def main():
    errors = []
    release = load_release()
    languages = release["languages"]
    if languages["en"] != "source":
        errors.append("en is not source")
    for lang in REVIEW_LANGS:
        if languages[lang] != "unapproved":
            errors.append(f"{lang} default is {languages[lang]}")
    if "under review" not in release.get("policy", "") or "does not publish" not in release.get("policy", ""):
        errors.append("release policy does not record the selector decision")

    catalogs = load_catalogs()
    en_def = (ROOT / "xrpl/definitions.html").read_text(encoding="utf-8")
    ja_def = (ROOT / "xrpl/ja/definitions.html").read_text(encoding="utf-8")
    if hreflangs(en_def) != ["en", "x-default"]:
        errors.append("english hreflang " + ",".join(hreflangs(en_def)))
    if "xrpl-review-notice" in en_def or "data-xrpl-robots" in en_def:
        errors.append("english definitions is marked unapproved")
    if 'src="/xrpl/i18n/release.js"' not in en_def:
        errors.append("english page missing release.js")
    if NOTICE not in ja_def or 'content="noindex, follow"' not in ja_def:
        errors.append("ja definitions missing notice or noindex")
    if hreflangs(ja_def):
        errors.append("ja definitions has hreflang " + ",".join(hreflangs(ja_def)))
    if 'hreflang="pt-BR"' in ja_def or 'hreflang="ja"' in ja_def:
        errors.append("ja definitions advertises an alternate")

    en_index = (ROOT / "xrpl/index.html").read_text(encoding="utf-8")
    ja_index = (ROOT / "xrpl/ja/index.html").read_text(encoding="utf-8")
    if ">English</option>" not in en_index or ">English (under review)</option>" in en_index:
        errors.append("english option label changed")
    if ">日本語 (under review)</option>" not in ja_index:
        errors.append("ja selector is not marked under review")

    proposed = (ROOT / "xrpl/i18n/sitemap.proposed.xml").read_text(encoding="utf-8")
    locs = re.findall(r"<loc>([^<]+)</loc>", proposed)
    if len(locs) != 13:
        errors.append(f"proposed sitemap has {len(locs)} locs")
    if ORIGIN + "/xrpl/" not in locs:
        errors.append("proposed sitemap missing the english dashboard")
    if any("/xrpl/ja/" in loc or "/xrpl/pt-br/" in loc or "/xrpl/ar/" in loc for loc in locs):
        errors.append("proposed sitemap includes an unapproved language")
    if "Do not replace /sitemap.xml" not in proposed:
        errors.append("proposed sitemap lost its warning")
    live = (ROOT / "sitemap.xml").read_text(encoding="utf-8")
    if "/xrpl/" in live:
        errors.append("live sitemap.xml contains an xrpl url")

    disk = json.loads((ROOT / "xrpl/i18n/release.json").read_text(encoding="utf-8"))
    flipped = json.loads(json.dumps(disk))
    flipped["languages"]["pt-BR"] = "approved"
    if hreflang_codes(flipped, catalogs) != ["en", "pt-BR"]:
        errors.append("pt-BR flip changed more than pt-BR: " + ",".join(hreflang_codes(flipped, catalogs)))
    root = parse((ROOT / "xrpl/definitions.html").read_text(encoding="utf-8"))
    fill_seo(root, "xrpl/definitions.html", "en", "", catalogs, flipped)
    from htmltree import serialize
    flipped_en = hreflangs(serialize(root))
    if flipped_en != ["en", "pt-BR", "x-default"]:
        errors.append("flipped english hreflang " + ",".join(flipped_en))
    ja_root = parse((ROOT / "xrpl/definitions.html").read_text(encoding="utf-8"))
    fill_seo(ja_root, "xrpl/definitions.html", "ja", "ja", catalogs, flipped)
    if hreflangs(serialize(ja_root)):
        errors.append("flipped ja gained hreflang")
    locs_flipped = sitemap_locs(flipped, catalogs)
    if sum("/xrpl/pt-br/" in loc or loc == ORIGIN + "/xrpl/pt-br/" for loc in locs_flipped) < 13:
        errors.append("pt-BR flip did not add pt-BR sitemap urls")
    if any("/xrpl/ja/" in loc or "/xrpl/es/" in loc for loc in locs_flipped):
        errors.append("pt-BR flip published another language")
    if len(locs_flipped) != 26:
        errors.append(f"pt-BR flip sitemap count {len(locs_flipped)}")
    after = json.loads((ROOT / "xrpl/i18n/release.json").read_text(encoding="utf-8"))
    if after != disk:
        errors.append("flip test wrote release.json")
    if not is_public(disk, "en", catalogs) or is_public(disk, "ja", catalogs):
        errors.append("public check disagrees with the default file")

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
    import csv
    required = {
        "key", "english", "translation", "risk_tier", "page", "purpose",
        "reader_must_understand", "approve", "correction", "reviewer", "date",
    }
    for lang, _slug, _html, _direction, _href in LANGS:
        if lang == "en":
            continue
        csv_path = ROOT / "xrpl/i18n/review-packages" / f"{lang}.csv"
        md = (ROOT / "xrpl/i18n/review-packages" / f"{lang}.md").read_text(encoding="utf-8")
        with csv_path.open(encoding="utf-8", newline="") as handle:
            rows = list(csv.DictReader(handle))
        keys = [row["key"] for row in rows]
        if len(rows) != 230 or len(set(keys)) != 230 or set(keys) != set(flagged):
            errors.append(f"{lang} package key set {len(rows)}")
        if not required.issubset(rows[0].keys()):
            errors.append(f"{lang} CSV missing columns")
        for row in rows:
            if row["english"] != english[row["key"]] or row["translation"] != catalogs[lang][row["key"]]:
                errors.append(f"{lang} {row['key']} text drift")
                break
            if not row["risk_tier"] or not row["page"] or not row["purpose"] or not row["reader_must_understand"]:
                errors.append(f"{lang} {row['key']} missing context")
                break
            if row["approve"] or row["correction"] or row["reviewer"] or row["date"]:
                errors.append(f"{lang} has a filled approval field")
                break
            if f"`{row['key']}`" not in md:
                errors.append(f"{lang} markdown missing {row['key']}")
                break
        if "- Approve:" not in md or "## Glossary" not in md and "## Glossary of terms kept in English" not in md:
            errors.append(f"{lang} markdown missing instructions or glossary")

    importer = load_import_review()
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
    base_files = render_site(sources, catalogs, release)
    for rel, text in base_files.items():
        disk_path = ROOT / rel
        if not disk_path.exists() or disk_path.read_text(encoding="utf-8") != text:
            errors.append(f"disk does not match release.json: {rel}")
    errors.extend(stale_locale_files(set(base_files)))
    errors.extend(audit_release_output(base_files, release, catalogs))
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
        if not audit_release_output(tampered, release, catalogs):
            errors.append("tampered unapproved hreflang was accepted")

    approved = copy.deepcopy(release)
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
    mid_errors = audit_release_output(mid, approved, catalogs)
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
    claim = copy.deepcopy(release)
    claim["languages"]["ja"] = "approved"
    hidden = render_site(sources, thin, claim)
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

    for rel in PAGES:
        text = (ROOT / rel).read_text(encoding="utf-8")
        if hreflangs(text) != ["en", "x-default"]:
            errors.append(f"{rel} hreflang drifted")
        if "xrpl-review-notice" in text:
            errors.append(f"{rel} english page has a review notice")
    sample = ORIGIN + public_path("xrpl/definitions.html", "pt-br")
    if sample in proposed:
        errors.append("default proposed sitemap contains pt-BR definitions")

    if errors:
        print("\n".join(errors))
        return 1
    print("release checks passed")
    print("packages: 9 languages x 230 keys, approval fields blank")
    print("public: en; unapproved excluded from hreflang and sitemap.proposed.xml")
    return 0


if __name__ == "__main__":
    sys.exit(main())
