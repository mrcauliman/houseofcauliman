#!/usr/bin/env python3
"""Bake static locale pages for GitHub Pages.

Hosting is a static file tree (CNAME + .nojekyll, no redirects). Each
translated language gets a real directory such as /xrpl/pt-br/. English
URLs stay where they are. hreflang, the review notice, robots, and
sitemap.proposed.xml follow xrpl/i18n/release.json. English is always
the source. An unapproved language stays at its existing URL and is not
listed as a certified alternate.
"""
from __future__ import annotations

import json
import os
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from htmltree import Node, find_all, first, parse, serialize, walk_elements  # noqa: E402

ROOT = Path(__file__).resolve().parents[3]
ORIGIN = "https://houseofcauliman.com"
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
LANGS = [
    ("en", "", "en", "ltr", "en"),
    ("pt-BR", "pt-br", "pt-BR", "ltr", "pt-BR"),
    ("es", "es", "es", "ltr", "es"),
    ("fr", "fr", "fr", "ltr", "fr"),
    ("de", "de", "de", "ltr", "de"),
    ("ja", "ja", "ja", "ltr", "ja"),
    ("ko", "ko", "ko", "ltr", "ko"),
    ("zh-CN", "zh-cn", "zh-CN", "ltr", "zh-CN"),
    ("hi", "hi", "hi", "ltr", "hi"),
    ("ar", "ar", "ar", "rtl", "ar"),
]
SLUGS = {slug for _lang, slug, _html, _dir, _href in LANGS if slug}
REVIEW_NOTICE = "Translation under review. This is not a certified XRPL LAYMAN translation."
REVIEW_SUFFIX = " (under review)"
LANG_ORDER = [lang for lang, _slug, _html, _dir, _href in LANGS]


def load_catalogs():
    catalogs = {}
    folder = ROOT / "xrpl/i18n/catalogs"
    for path in folder.glob("*.json"):
        catalogs[path.stem] = json.loads(path.read_text(encoding="utf-8"))
    return catalogs


def complete(catalogs, lang):
    english = catalogs.get("en") or {}
    local = catalogs.get(lang) or {}
    return bool(english) and all(key in local and local[key] != "" for key in english)


def load_release(path=None):
    path = path or (ROOT / "xrpl/i18n/release.json")
    data = json.loads(path.read_text(encoding="utf-8"))
    languages = data.get("languages")
    if not isinstance(languages, dict) or list(languages) != LANG_ORDER:
        raise SystemExit("release.json languages must be en, pt-BR, es, fr, de, ja, ko, zh-CN, hi, ar")
    if languages["en"] != "source":
        raise SystemExit("release.json en must be source")
    for lang in LANG_ORDER[1:]:
        if languages[lang] not in {"unapproved", "approved"}:
            raise SystemExit(f"release.json {lang} must be unapproved or approved")
    return data


def is_public(release, lang, catalogs=None):
    status = release["languages"][lang]
    allowed = status == "source" if lang == "en" else status == "approved"
    if not allowed:
        return False
    if catalogs is not None and not complete(catalogs, lang):
        return False
    return True


def hreflang_codes(release, catalogs):
    return [href for lang, _slug, _html, _dir, href in LANGS if is_public(release, lang, catalogs)]


def sitemap_locs(release, catalogs):
    locs = []
    for lang, slug, _html, _dir, _href in LANGS:
        if not is_public(release, lang, catalogs):
            continue
        for rel in PAGES:
            locs.append(ORIGIN + public_path(rel, slug))
    return locs


def public_rest(rel):
    rel = rel[len("xrpl/"):]
    if rel == "index.html":
        return ""
    if rel.endswith("/index.html"):
        return rel[: -len("index.html")]
    return rel


def public_path(rel, slug):
    rest = public_rest(rel)
    prefix = "/xrpl/" + (slug + "/" if slug else "")
    return prefix if not rest else prefix + rest


def lookup(catalogs, lang, key):
    local = catalogs.get(lang) or {}
    if key in local and local[key] != "":
        return local[key]
    english = catalogs.get("en") or {}
    if key in english:
        return english[key]
    return None


# Keep this in step with LATIN_PHRASE in xrpl/i18n/i18n.js. A phrase such as
# "XRP Ledger" or "House of Cauliman" is one isolate, so Arabic does not
# reverse the English word order. Parentheses that wrap the phrase stay inside.
_LATIN = r"[A-Za-z0-9$][A-Za-z0-9$._:%+\-]*"
_SEP = r"(?:[ \t]+[+&]?[ \t]*|[ \t]*/[ \t]*)"
_PHRASE = re.compile(rf"\(?{_LATIN}(?:{_SEP}{_LATIN})*\)?")


def isolate(value, direction):
    if direction != "rtl":
        return value
    return _PHRASE.sub(lambda match: "\u2066" + match.group(0) + "\u2069", value)


def apply_tree(node, catalogs, lang, direction):
    if node.kind == "element" and node.raw is None and node.tag not in {"script", "style", "svg"}:
        for child in list(node.children):
            apply_tree(child, catalogs, lang, direction)
        if node.attr("data-i18n-skip"):
            return
        key = node.attr("data-i18n")
        if key:
            template = lookup(catalogs, lang, key)
            if template is not None:
                slots = {
                    child.attr("data-i18n-slot"): child
                    for child in node.children
                    if child.kind == "element" and child.attr("data-i18n-slot")
                }
                if not slots and not any(child.kind == "element" for child in node.children):
                    node.children = [Node("text", text=isolate(template, direction))]
                elif slots:
                    names = set(re.findall(r"\{([A-Za-z0-9_]+)\}", template))
                    if names == set(slots):
                        rebuilt = []
                        last = 0
                        for match in re.finditer(r"\{([A-Za-z0-9_]+)\}", template):
                            if match.start() > last:
                                rebuilt.append(Node("text", text=isolate(template[last:match.start()], direction)))
                            rebuilt.append(slots[match.group(1)])
                            last = match.end()
                        if last < len(template):
                            rebuilt.append(Node("text", text=isolate(template[last:], direction)))
                        node.children = rebuilt
        attr_map = node.attr("data-i18n-attr")
        if attr_map:
            for pair in attr_map.split(","):
                if ":" not in pair:
                    continue
                name, key = pair.split(":", 1)
                value = lookup(catalogs, lang, key)
                if value is not None:
                    node.set_attr(name, isolate(value, direction))
        return
    for child in getattr(node, "children", []):
        apply_tree(child, catalogs, lang, direction)


def rewrite_links(root, slug):
    for link in find_all(root, tag="a"):
        href = link.attr("href")
        if not href or href.startswith("#") or href.startswith("mailto:"):
            continue
        absolute = href.startswith("http://") or href.startswith("https://")
        path = href
        suffix = ""
        if absolute:
            if "houseofcauliman.com" not in href or "/xrpl/" not in href:
                continue
            path = href[href.index("/xrpl/"):]
        elif not path.startswith("/xrpl/") or path.startswith("/xrpl/i18n/"):
            continue
        hash_at = path.find("#")
        query_at = path.find("?")
        cut = len(path)
        if hash_at >= 0:
            cut = min(cut, hash_at)
        if query_at >= 0:
            cut = min(cut, query_at)
        suffix = path[cut:]
        path = path[:cut]
        rest = path[len("/xrpl/"):]
        parts = rest.split("/")
        if parts and parts[0] in SLUGS:
            parts = parts[1:]
            rest = "/".join(parts)
        if rest == "index.html":
            rest = ""
        elif rest.endswith("/index.html"):
            rest = rest[: -len("index.html")]
        prefix = "/xrpl/" + (slug + "/" if slug else "")
        next_path = prefix if not rest else prefix + rest
        if absolute:
            next_path = ORIGIN + next_path
        link.set_attr("href", next_path + suffix)


def fill_seo(root, rel, lang_id, canonical_slug, catalogs, release):
    html_node = first(root, tag="html")
    head = first(html_node, tag="head")
    start = end = None
    for child in head.children:
        if child.kind == "comment" and child.text == "xrpl-seo-start":
            start = child
        if child.kind == "comment" and child.text == "xrpl-seo-end":
            end = child
    if start is None or end is None:
        raise SystemExit(f"Missing SEO markers in {rel}")
    start_index = head.children.index(start)
    end_index = head.children.index(end)
    kept = head.children[: start_index + 1] + head.children[end_index:]
    head.children = kept
    end = next(child for child in head.children if child.kind == "comment" and child.text == "xrpl-seo-end")
    insert_at = head.children.index(end)
    links = [Node("element", tag="link", attrs=[("rel", "canonical"), ("href", ORIGIN + public_path(rel, canonical_slug))])]
    # Unapproved pages keep a self canonical and do not advertise alternates.
    if is_public(release, lang_id, catalogs):
        for lang, slug, _html, _dir, href_lang in LANGS:
            if not is_public(release, lang, catalogs):
                continue
            links.append(Node("element", tag="link", attrs=[
                ("rel", "alternate"),
                ("hreflang", href_lang),
                ("href", ORIGIN + public_path(rel, slug)),
            ]))
        links.append(Node("element", tag="link", attrs=[
            ("rel", "alternate"),
            ("hreflang", "x-default"),
            ("href", ORIGIN + public_path(rel, "")),
        ]))
    for offset, link in enumerate(links):
        head.children.insert(insert_at + offset, link)


def release_js_text(release):
    payload = json.dumps(release["languages"], ensure_ascii=False, indent=2)
    return (
        "/* Generated from xrpl/i18n/release.json. Do not edit by hand. */\n"
        f"window.XRPL_RELEASE = {payload};\n"
    )


def release_script_src(_release=None):
    return "/xrpl/i18n/release.js"


def ensure_release_script(root, release):
    src = release_script_src(release)
    scripts = find_all(root, tag="script")
    i18n = None
    found = None
    for script in scripts:
        current = (script.attr("src") or "").split("?", 1)[0]
        if current == "/xrpl/i18n/release.js":
            found = script
        if current == "/xrpl/i18n/i18n.js":
            i18n = script
    if found is not None:
        if (found.attr("src") or "") == src and any(key == "defer" for key, _value in found.attrs):
            return
        # Parsed script bodies are stored verbatim. Clear that copy so the
        # normalized src is the one that gets written.
        found.raw = None
        found.children = []
        found.set_attr("src", src)
        if not any(key == "defer" for key, _value in found.attrs):
            found.attrs.append(("defer", None))
        return
    if i18n is None or i18n.parent is None:
        raise SystemExit("missing i18n.js script tag")
    node = Node("element", tag="script", attrs=[("src", src), ("defer", None)])
    parent = i18n.parent
    node.parent = parent
    parent.children.insert(parent.children.index(i18n), node)


def _option_text(option):
    return "".join(child.text for child in option.children if child.kind == "text")


def mark_options(root, release, catalogs):
    select = first(root, tag="select", attr="id", value="xrpl-language")
    if select is None:
        return
    for option in select.children:
        if option.kind != "element" or option.tag != "option":
            continue
        lang = option.attr("value")
        if lang not in release["languages"]:
            continue
        text = _option_text(option)
        base = text[: -len(REVIEW_SUFFIX)] if text.endswith(REVIEW_SUFFIX) else text
        new = base if is_public(release, lang, catalogs) else base + REVIEW_SUFFIX
        if new == text:
            continue
        text_node = Node("text", text=new)
        text_node.parent = option
        option.children = [text_node]


def _remove_nodes(nodes):
    for node in nodes:
        parent = node.parent
        if parent is not None:
            parent.children = [child for child in parent.children if child is not node]


def remove_notice(root):
    found = []

    def visit(element):
        if element.attr("id") == "xrpl-review-notice":
            found.append(element)

    walk_elements(root, visit)
    _remove_nodes(found)


def insert_notice(root):
    remove_notice(root)
    anchor = first(root, attr="class", value="xrpl-language-row") or first(root, attr="class", value="appbar")
    if anchor is None or anchor.parent is None:
        raise SystemExit("no anchor for the review notice")
    notice = Node("element", tag="p", attrs=[
        ("id", "xrpl-review-notice"),
        ("class", "xrpl-review-notice"),
        ("role", "status"),
    ])
    text = Node("text", text=REVIEW_NOTICE)
    text.parent = notice
    notice.children = [text]
    parent = anchor.parent
    notice.parent = parent
    parent.children.insert(parent.children.index(anchor) + 1, notice)


def set_robots(root, noindex):
    head = first(first(root, tag="html"), tag="head")
    existing = [
        child for child in head.children
        if child.kind == "element" and child.tag == "meta" and child.attr("data-xrpl-robots") is not None
    ]
    _remove_nodes(existing)
    if not noindex:
        return
    meta = Node("element", tag="meta", attrs=[
        ("name", "robots"),
        ("content", "noindex, follow"),
        ("data-xrpl-robots", "1"),
    ])
    meta.parent = head
    head.children.append(meta)


def _set_flag(node, name, value):
    node.attrs = [(key, current) for key, current in node.attrs if key != name]
    if value is not None:
        node.attrs.append((name, value))


def apply_release(root, rel, lang, slug, catalogs, release):
    fill_seo(root, rel, lang, slug, catalogs, release)
    ensure_release_script(root, release)
    mark_options(root, release, catalogs)
    public = is_public(release, lang, catalogs)
    # The runtime may add noindex. It may not remove noindex unless this
    # attribute was baked, so release.js alone cannot certify a stale page.
    _set_flag(first(root, tag="html"), "data-xrpl-public", "1" if public else None)
    if public:
        remove_notice(root)
        set_robots(root, False)
    else:
        insert_notice(root)
        set_robots(root, True)


def sitemap_text(release, catalogs):
    lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        "<!--",
        "Proposed sitemap for XRPL LAYMAN. Generated from xrpl/i18n/release.json.",
        "Do not replace /sitemap.xml with this file.",
        "The live sitemap lists only https://houseofcauliman.com/.",
        "A non-English language is included here only when release.json marks it approved.",
        "Enabling one language does not add the others. None of this publishes the site.",
        "-->",
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ]
    for lang, slug, _html, _dir, _href in LANGS:
        if not is_public(release, lang, catalogs):
            continue
        lines.append(f"  <!-- {lang} -->")
        for rel in PAGES:
            lines.append("  <url>")
            lines.append(f"    <loc>{ORIGIN + public_path(rel, slug)}</loc>")
            lines.append("  </url>")
    lines.append("</urlset>")
    lines.append("")
    return "\n".join(lines)


def set_meta(root, catalogs, lang):
    page = first(root, tag="html").attr("data-xrpl-page")
    direction = next(item[3] for item in LANGS if item[0] == lang)
    title = lookup(catalogs, lang, f"meta.{page}.title")
    title_node = first(root, tag="title")
    if title and title_node is not None:
        title_node.children = [Node("text", text=isolate(title, direction))]
    description = lookup(catalogs, lang, f"meta.{page}.description")
    for meta in find_all(root, tag="meta"):
        if meta.attr("name") == "description" and description:
            meta.set_attr("content", isolate(description, direction))


def output_rel(rel, slug):
    if not slug:
        return rel
    return "xrpl/" + slug + "/" + rel[len("xrpl/"):]


def render_english(source, rel, catalogs, release):
    root = parse(source)
    html_node = first(root, tag="html")
    html_node.set_attr("lang", "en")
    html_node.set_attr("dir", "ltr")
    apply_release(root, rel, "en", "", catalogs, release)
    return serialize(root)


def render_locale(source, rel, lang, slug, html_lang, direction, catalogs, release):
    root = parse(source)
    html_node = first(root, tag="html")
    html_node.set_attr("lang", html_lang)
    html_node.set_attr("dir", direction)
    apply_tree(root, catalogs, lang, direction)
    set_meta(root, catalogs, lang)
    rewrite_links(root, slug)
    apply_release(root, rel, lang, slug, catalogs, release)
    return serialize(root)


def render_site(sources, catalogs, release):
    """Render every page in memory. This does not write files."""
    files = {
        "xrpl/i18n/release.js": release_js_text(release),
        "xrpl/i18n/sitemap.proposed.xml": sitemap_text(release, catalogs),
    }
    for rel in PAGES:
        source = sources[rel]
        files[rel] = render_english(source, rel, catalogs, release)
        for lang, slug, html_lang, direction, _href in LANGS:
            if not slug:
                continue
            # Incomplete catalogs are still rendered. Missing keys fall back
            # to English, and is_public stays false, so the page cannot be
            # advertised as a certified translation.
            files[output_rel(rel, slug)] = render_locale(
                source, rel, lang, slug, html_lang, direction, catalogs, release
            )
    return files


def snapshot_sources():
    return {rel: (ROOT / rel).read_text(encoding="utf-8") for rel in PAGES}


def _canonical_and_hreflang(text):
    root = parse(text)
    canon = ""
    hrefs = []
    for node in find_all(root, tag="link"):
        if node.attr("rel") == "canonical":
            canon = node.attr("href") or ""
        if node.attr("hreflang"):
            hrefs.append(node.attr("hreflang"))
    return canon, hrefs


def _option_labels(text):
    root = parse(text)
    select = first(root, tag="select", attr="id", value="xrpl-language")
    if select is None:
        return None
    labels = {}
    for option in select.children:
        if option.kind == "element" and option.tag == "option":
            labels[option.attr("value")] = _option_text(option)
    return labels


def _locale_nav_hrefs(text):
    root = parse(text)
    hrefs = []
    for node in find_all(root, tag="a"):
        href = node.attr("href") or ""
        href = href.split("#", 1)[0].split("?", 1)[0]
        if href.startswith("/xrpl/") and not href.startswith("/xrpl/i18n/"):
            hrefs.append(href)
    return hrefs


def expected_alternates(release, catalogs):
    return [href for lang, _slug, _html, _dir, href in LANGS if is_public(release, lang, catalogs)] + ["x-default"]


def audit_release_output(files, release, catalogs):
    """Return errors when generated text does not match release.json.

    An unapproved or incomplete language must not carry hreflang, must
    carry the review notice and noindex, and must not be in the sitemap.
    """
    errors = []
    script_src = release_script_src(release)
    if files.get("xrpl/i18n/release.js") != release_js_text(release):
        errors.append("release.js does not match release.json")
    if files.get("xrpl/i18n/sitemap.proposed.xml") != sitemap_text(release, catalogs):
        errors.append("sitemap.proposed.xml does not match release.json")
    sitemap = files.get("xrpl/i18n/sitemap.proposed.xml") or ""
    alternates = expected_alternates(release, catalogs)
    for rel in PAGES:
        for lang, slug, _html, _dir, _href in LANGS:
            path = output_rel(rel, slug)
            text = files.get(path)
            if text is None:
                errors.append(f"missing generated file {path}")
                continue
            public = is_public(release, lang, catalogs)
            canon, hrefs = _canonical_and_hreflang(text)
            expect_canon = ORIGIN + public_path(rel, slug)
            if canon != expect_canon:
                errors.append(f"{path} canonical {canon!r}")
            if f'src="{script_src}"' not in text:
                errors.append(f"{path} release.js src is not {script_src}")
            if "/xrpl/pt-BR/" in text or "/xrpl/zh-CN/" in text:
                errors.append(f"{path} uses a case-sensitive catalog id in a URL")
            if public:
                if 'data-xrpl-public="1"' not in text:
                    errors.append(f"{path} public page is missing data-xrpl-public")
                if hrefs != alternates:
                    errors.append(f"{path} hreflang {hrefs}")
                if REVIEW_NOTICE in text or "data-xrpl-robots" in text:
                    errors.append(f"{path} is public but marked under review")
            else:
                if "data-xrpl-public" in text:
                    errors.append(f"{path} unapproved page is marked public")
                if hrefs:
                    errors.append(f"{path} unapproved hreflang {hrefs}")
                if REVIEW_NOTICE not in text:
                    errors.append(f"{path} missing review notice")
                if 'content="noindex, follow"' not in text or "data-xrpl-robots" not in text:
                    errors.append(f"{path} missing noindex")
                if f"<loc>{expect_canon}</loc>" in sitemap:
                    errors.append(f"{path} is in the proposed sitemap")
            if rel == "xrpl/index.html":
                labels = _option_labels(text)
                if not labels:
                    errors.append(f"{path} missing language selector")
                else:
                    for option_lang in LANG_ORDER:
                        label = labels.get(option_lang, "")
                        marked = label.endswith(REVIEW_SUFFIX)
                        if is_public(release, option_lang, catalogs) and marked:
                            errors.append(f"{path} marks public {option_lang} under review")
                        if not is_public(release, option_lang, catalogs) and not marked:
                            errors.append(f"{path} leaves {option_lang} unmarked")
            if slug:
                prefix = "/xrpl/" + slug
                for href in _locale_nav_hrefs(text):
                    if href != prefix and not href.startswith(prefix + "/"):
                        errors.append(f"{path} navigates outside {prefix}: {href}")
                        break
    return errors


def stale_locale_files(expected):
    errors = []
    for _lang, slug, _html, _dir, _href in LANGS:
        if not slug:
            continue
        folder = ROOT / "xrpl" / slug
        if not folder.exists():
            errors.append(f"missing locale directory {slug}")
            continue
        for path in folder.rglob("*.html"):
            rel = path.relative_to(ROOT).as_posix()
            if rel not in expected:
                errors.append(f"stale generated file {rel}")
    return errors


def commit_generated(files, root, audit):
    """Replace files under root. Restore every backup if audit fails or raises."""
    targets = {root / rel: text for rel, text in files.items()}
    backups = {}
    temps = []
    try:
        for path, text in targets.items():
            path.parent.mkdir(parents=True, exist_ok=True)
            backups[path] = path.read_bytes() if path.exists() else None
            temporary = path.with_name(path.name + ".xrpl-tmp")
            temporary.write_text(text, encoding="utf-8")
            temps.append(temporary)
            os.replace(temporary, path)
        disk = {}
        for rel in files:
            disk_path = root / rel
            if not disk_path.exists():
                raise SystemExit(f"write missed {rel}")
            disk[rel] = disk_path.read_text(encoding="utf-8")
        problems = audit(disk)
        if problems:
            raise SystemExit("generated output does not match release.json:\n" + "\n".join(problems))
    except BaseException:
        for path, payload in backups.items():
            if payload is None:
                if path.exists():
                    path.unlink()
            else:
                path.write_bytes(payload)
        for temporary in temps:
            if temporary.exists():
                temporary.unlink()
        raise


def _write_generated(files):
    def audit(disk):
        problems = audit_release_output(disk, load_release(), load_catalogs())
        problems.extend(stale_locale_files(set(files)))
        return problems

    commit_generated(files, ROOT, audit)
    for rel in files:
        print(rel)


def main():
    catalogs = load_catalogs()
    release = load_release()
    ready = [lang for lang, _slug, _html, _dir, _href in LANGS if complete(catalogs, lang)]
    public = [lang for lang in LANG_ORDER if is_public(release, lang, catalogs)]
    print("complete catalogs:", ", ".join(ready) or "(none)")
    print("public languages:", ", ".join(public) or "(none)")
    files = render_site(snapshot_sources(), catalogs, release)
    problems = audit_release_output(files, release, catalogs)
    if problems:
        print("\n".join(problems))
        raise SystemExit("refusing to write: generated output does not match release.json")
    _write_generated(files)


if __name__ == "__main__":
    main()
