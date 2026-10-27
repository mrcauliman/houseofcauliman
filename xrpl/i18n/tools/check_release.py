#!/usr/bin/env python3
"""Prove the release gate, the USD pin, and the review packets.

The in-memory language flip never writes release.json. Passing this script
is not native-speaker approval.
"""
from __future__ import annotations

import importlib.util
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
sys.path.insert(0, str(Path(__file__).resolve().parent))
from build_locales import (  # noqa: E402
    LANGS,
    PAGES,
    REVIEW_NOTICE,
    fill_seo,
    hreflang_codes,
    is_public,
    load_catalogs,
    load_release,
    public_path,
    sitemap_locs,
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
