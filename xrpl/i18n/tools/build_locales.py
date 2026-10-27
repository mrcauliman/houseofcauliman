#!/usr/bin/env python3
"""Bake static locale pages for GitHub Pages.

Hosting is a static file tree (CNAME + .nojekyll, no redirects). Each
translated language gets a real directory such as /xrpl/pt-br/. English
URLs stay where they are. hreflang is emitted only for catalogs that
contain every English key.
"""
from __future__ import annotations

import json
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


def fill_seo(root, rel, canonical_slug, catalogs):
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
    for lang, slug, _html, _dir, href_lang in LANGS:
        if not complete(catalogs, lang):
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


def write_page(rel, slug, html_lang, direction, catalogs):
    root = parse((ROOT / rel).read_text(encoding="utf-8"))
    html_node = first(root, tag="html")
    html_node.set_attr("lang", html_lang)
    html_node.set_attr("dir", direction)
    fill_seo(root, rel, slug, catalogs)
    if slug:
        apply_tree(root, catalogs, html_lang if html_lang != "en" else "en", direction)
        # html_lang for pt-BR matches catalog id. For en, html lang is en.
        set_meta(root, catalogs, {html: lang for lang, _slug, html, _dir, _href in LANGS}[html_lang])
        rewrite_links(root, slug)
    text = serialize(root)
    if slug:
        destination = ROOT / "xrpl" / slug / rel[len("xrpl/"):]
    else:
        destination = ROOT / rel
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text(text, encoding="utf-8")
    return destination


def main():
    catalogs = load_catalogs()
    ready = [lang for lang, slug, _html, _dir, _href in LANGS if complete(catalogs, lang)]
    print("complete catalogs:", ", ".join(ready) or "(none)")
    for rel in PAGES:
        for lang, slug, html_lang, direction, _href in LANGS:
            if lang not in ready:
                continue
            if not slug:
                path = write_page(rel, "", "en", "ltr", catalogs)
            else:
                # Catalog ids are pt-BR, not the html lang attribute alone.
                path = write_locale(rel, lang, slug, html_lang, direction, catalogs)
            print(path.relative_to(ROOT))


def write_locale(rel, lang, slug, html_lang, direction, catalogs):
    root = parse((ROOT / rel).read_text(encoding="utf-8"))
    html_node = first(root, tag="html")
    html_node.set_attr("lang", html_lang)
    html_node.set_attr("dir", direction)
    fill_seo(root, rel, slug, catalogs)
    apply_tree(root, catalogs, lang, direction)
    set_meta(root, catalogs, lang)
    rewrite_links(root, slug)
    text = serialize(root)
    destination = ROOT / "xrpl" / slug / rel[len("xrpl/"):]
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text(text, encoding="utf-8")
    return destination


if __name__ == "__main__":
    main()
