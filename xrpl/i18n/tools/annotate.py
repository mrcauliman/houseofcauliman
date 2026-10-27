#!/usr/bin/env python3
"""Add stable data-i18n keys to XRPL LAYMAN pages and write catalogs/en.json.

English text stays in the HTML, so the pages still render with JavaScript
disabled. Re-running is refused after data-xrpl-i18n is set; use --extract
to refresh en.json from the annotated tree.
"""
from __future__ import annotations

import hashlib
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
sys.path.insert(0, str(Path(__file__).resolve().parent))
from htmltree import Node, find_all, first, parse, serialize, walk_elements  # noqa: E402

PAGES = [
    ("xrpl/index.html", "index"),
    ("xrpl/definitions.html", "definitions"),
    ("xrpl/wallet-basics.html", "wallet"),
    ("xrpl/usage.html", "usage"),
    ("xrpl/safety.html", "safety"),
    ("xrpl/investing-reality.html", "reality"),
    ("xrpl/builders/index.html", "builders"),
    ("xrpl/builders/create-token.html", "create-token"),
    ("xrpl/builders/nft-basics.html", "nft-basics"),
    ("xrpl/builders/trust-lines.html", "trust-lines"),
    ("xrpl/builders/issuer-control.html", "issuer-control"),
    ("xrpl/builders/xaman-flows.html", "xaman"),
    ("xrpl/builders/project-launch-basics.html", "launch"),
]

INLINE = {
    "a", "abbr", "b", "bdi", "br", "code", "em", "i", "mark", "small",
    "span", "strong", "sub", "sup", "u",
}
SKIP_EXACT = {
    "XRPL LAYMAN", "XRPL", "LAYMAN", "XRP", "$XRP", "USD", "TOKEN", "NFT",
    "NFTs", "AMM", "AMMs", "DEX", "URI", "NFTokenID", "NFTokenPage",
    "TakerGets", "TakerPays", "MPT", "MPTs", "houseofcauliman.com",
    "→", "←", "✓", "·", "🌐", "CLUB", "AUGUR", "Xaman",
}
SHARED = {
    "Dashboard": "nav.dashboard",
    "Definitions": "nav.definitions",
    "Wallets": "nav.wallets",
    "Usage": "nav.usage",
    "Safety": "nav.safety",
    "Reality": "nav.reality",
    "Builders": "nav.builders",
    "Back to Dashboard": "nav.backDashboard",
    "Back to XRPL LAYMAN": "nav.backHome",
    "A House of Cauliman Project": "footer.project",
    "Terms": "footer.terms",
    "Privacy": "footer.privacy",
    "Disclaimer": "footer.disclaimer",
    "© 2026 House of Cauliman. All rights reserved.": "footer.rights",
    "Did it click?": "quiz.heading",
    "Keep moving": "next.heading",
    "Yes": "common.yes",
    "No": "common.no",
    "Wrong:": "common.wrong",
    "Truth:": "common.truth",
    "Create Trustline": "definitions.trust.create",
    "Language": "lang.label",
    "Dashboard language": "lang.select",
    "Saved on this device. It applies to every XRPL LAYMAN page.": "lang.note",
    "Skip to lesson": "a11y.skip",
}
EXTRA = {
    "definitions.trust.remove": "Remove Trustline",
    "definitions.trust.active": "Trustline active. This wallet can now hold this issuer’s TOKEN asset, subject to its limit and settings.",
    "definitions.trust.inactive": "No trustline exists. This wallet can’t hold this issuer’s TOKEN asset.",
    "definitions.reserve.one": "1 $XRP base reserve + {objects} owned object × 0.2 $XRP.",
    "definitions.reserve.many": "1 $XRP base reserve + {objects} owned objects × 0.2 $XRP.",
    "usage.slippage.copy": "Trade size is {pct}% of the selected pool side before a {fee}% fee.",
    "reality.cap.copy": "Displayed market cap is {mult}× the selected liquidity.",
    "reality.ratio.copy": "Your position is {pct}% of the selected exit liquidity.",
    "quiz.feedback.correct": "Correct.",
    "quiz.feedback.notYet": "Not yet.",
    "quiz.feedback.keepGoing": "Keep going.",
    "quiz.feedback.review": "Review the lesson and try again.",
    "builders.progress": "{checked} of {total} practice steps checked. This page only; reloading resets them. This is not certification.",
}
ADDRESS_RE = re.compile(r"r[1-9A-HJ-NP-Za-km-z]{24,}")
HASH_RE = re.compile(r"\b[A-Fa-f0-9]{64}\b")
SKIP_CLASS = {"lesson-number", "flow-arrow", "xrpl-app-arrow", "progress-fill", "trust-line"}
SKIP_DYNAMIC_IDS = {"reserveCopy", "reserveValue", "impactCopy", "impactValue", "capCopy", "capValue", "ratioCopy", "ratioValue"}
EARLY_SCRIPT = """(function(){
  var KNOWN={"en":1,"pt-BR":1,"es":1,"fr":1,"de":1,"ja":1,"ko":1,"zh-CN":1,"hi":1,"ar":1};
  var SLUGS={"pt-br":"pt-BR","es":"es","fr":"fr","de":"de","ja":"ja","ko":"ko","zh-cn":"zh-CN","hi":"hi","ar":"ar"};
  var path=location.pathname, at=path.indexOf("/xrpl/"), lang="";
  if(at>=0){
    var slug=path.slice(at+6).split("/")[0];
    if(SLUGS[slug]) lang=SLUGS[slug];
  }
  if(!lang){ try{ lang=localStorage.getItem("xrpl-layman-language")||""; }catch(e){} }
  if(!KNOWN[lang]) return;
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==="ar"?"rtl":"ltr";
})();"""


def collapse(text):
    return re.sub(r"\s+", " ", text).strip()


def is_skippable_text(text):
    if text in SKIP_EXACT:
        return True
    if not text:
        return True
    if re.fullmatch(r"[\d\s.,:%+\-–—/|·•]+", text):
        return True
    if re.fullmatch(r"[A-Za-z]", text):
        return True
    if re.fullmatch(r"\d+(\.\d+)?\s*\$XRP", text):
        return True
    if ADDRESS_RE.fullmatch(text) or HASH_RE.fullmatch(text):
        return True
    return False


def slugify(text):
    value = text.lower().replace("$xrp", "xrp").replace("’", "'")
    value = re.sub(r"\{[a-z0-9_]+\}", " ", value)
    value = re.sub(r"[^a-z0-9]+", "-", value).strip("-")
    return value[:36].strip("-")


class Catalog:
    def __init__(self):
        self.strings = {}
        self.by_text = {}

    def key_for(self, text):
        text = collapse(text)
        if text in SHARED:
            key = SHARED[text]
            self._put(key, text)
            return key
        if text in self.by_text:
            return self.by_text[text]
        digest = hashlib.sha1(text.encode("utf-8")).hexdigest()[:8]
        slug = slugify(text)
        key = f"{slug}.{digest}" if slug else f"s.{digest}"
        base = key
        suffix = 2
        while key in self.strings and self.strings[key] != text:
            key = f"{base}-{suffix}"
            suffix += 1
        self._put(key, text)
        return key

    def _put(self, key, text):
        if key in self.strings and self.strings[key] != text:
            raise SystemExit(f"Key collision for {key!r}:\n {self.strings[key]!r}\n {text!r}")
        self.strings[key] = text
        self.by_text[text] = key

    def add_fixed(self, key, text):
        if key not in self.strings:
            self._put(key, text)


def direct_text(element):
    return "".join(child.text for child in element.children if child.kind == "text")


def has_direct_text(element):
    return any(child.kind == "text" and child.text.strip() for child in element.children)


def mark_isolated(element):
    element.set_attr("dir", "ltr")
    element.add_class("xrpl-ltr")
    element.set_attr("translate", "no")


def annotate_attrs(element, catalog):
    pairs = []
    for name in ("aria-label", "alt", "title", "data-explanation"):
        value = element.attr(name)
        if not value:
            continue
        text = collapse(value)
        if is_skippable_text(text):
            continue
        key = catalog.key_for(text)
        pairs.append(f"{name}:{key}")
    if pairs:
        element.set_attr("data-i18n-attr", ",".join(pairs))


def assign_simple(element, catalog):
    text = collapse(element.text_content())
    if ADDRESS_RE.search(text) and not ADDRESS_RE.fullmatch(text):
        split_addresses(element, text, catalog)
        return
    if is_skippable_text(text):
        if ADDRESS_RE.fullmatch(text) or HASH_RE.fullmatch(text) or text in {"$XRP", "NFTokenID", "NFTokenPage", "TakerGets", "TakerPays", "URI"} or re.fullmatch(r"[A-Za-z]", text):
            mark_isolated(element)
        return
    element.set_attr("data-i18n", catalog.key_for(text))


def split_addresses(element, text, catalog):
    element.children = []
    cursor = 0
    slot = 1
    for match in ADDRESS_RE.finditer(text):
        before = text[cursor:match.start()]
        if before:
            element.children.append(Node("text", text=before))
        bdi = Node("element", tag="bdi", attrs=[("data-i18n-slot", f"addr{slot}")])
        bdi.children.append(Node("text", text=match.group(0)))
        mark_isolated(bdi)
        bdi.parent = element
        element.children.append(bdi)
        slot += 1
        cursor = match.end()
    tail = text[cursor:]
    if tail:
        element.children.append(Node("text", text=tail))
    for child in element.children:
        child.parent = element
    assign_template(element, catalog)


def assign_template(element, catalog):
    parts = []
    slot = 1
    for child in list(element.children):
        if child.kind == "text":
            parts.append(re.sub(r"\s+", " ", child.text))
            continue
        if child.kind != "element":
            continue
        name = f"br{slot}" if child.tag == "br" else f"s{slot}"
        slot += 1
        child.set_attr("data-i18n-slot", name)
        if child.tag != "br":
            annotate_element(child, catalog)
        parts.append("{" + name + "}")
    template = collapse("".join(parts))
    bare = re.sub(r"\{[A-Za-z0-9_]+\}", "", template).strip()
    if not bare:
        return
    element.set_attr("data-i18n", catalog.key_for(template))


def annotate_element(element, catalog):
    if element.kind != "element" or element.raw is not None:
        return
    if element.tag in {"script", "style", "svg"}:
        return
    annotate_attrs(element, catalog)
    if element.tag in {"option", "select", "input", "textarea", "br", "img", "meta", "link", "hr", "source", "path", "circle"}:
        return
    classes = set((element.attr("class") or "").split())
    if classes & SKIP_CLASS:
        return
    if element.attr("id") in SKIP_DYNAMIC_IDS:
        mark_isolated(element)
        element.set_attr("data-i18n-skip", "dynamic")
        return
    if "result-value" in classes:
        mark_isolated(element)
    elements = [child for child in element.children if child.kind == "element"]
    controls = [child for child in elements if child.tag in {"input", "select", "textarea"}]
    if controls:
        for child in elements:
            annotate_element(child, catalog)
        return
    texts = has_direct_text(element)
    blocks = [child for child in elements if child.tag not in INLINE]
    if blocks or not texts:
        for child in elements:
            annotate_element(child, catalog)
        if texts and blocks:
            wrap_loose_text(element, catalog)
        elif texts and not elements:
            assign_simple(element, catalog)
        elif texts and elements and not blocks:
            assign_template(element, catalog)
        return
    if elements:
        assign_template(element, catalog)
        return
    assign_simple(element, catalog)


def wrap_loose_text(element, catalog):
    slot = 1
    rebuilt = []
    for child in element.children:
        if child.kind == "text" and child.text.strip():
            span = Node("element", tag="span")
            span.parent = element
            span.children.append(Node("text", text=child.text))
            span.children[0].parent = span
            assign_simple(span, catalog)
            rebuilt.append(span)
        else:
            rebuilt.append(child)
        slot += 1
    element.children = rebuilt


def add_quiz_ids(root, page):
    questions = [element for element in find_all(root, attr="class", value="quiz-question")]
    for index, question in enumerate(questions, start=1):
        question.set_attr("data-quiz-id", f"{page}-q{index}")
        buttons = []

        def visit(element):
            if element.attr("data-correct") is not None and element.tag == "button":
                buttons.append(element)

        walk_elements(question, visit)
        # walk_elements also visits the question itself; buttons are descendants.
        seen = []
        for button in buttons:
            if button is question:
                continue
            seen.append(button)
        for choice, button in enumerate(seen, start=1):
            button.set_attr("data-choice-id", f"{page}-q{index}-c{choice}")


def ensure_support_nodes(root, page):
    html_node = first(root, tag="html")
    if html_node is None:
        raise SystemExit("Missing html element")
    html_node.set_attr("data-xrpl-page", page)
    html_node.set_attr("data-xrpl-i18n", "1")
    head = first(html_node, tag="head")
    body = first(html_node, tag="body")
    if head is None or body is None:
        raise SystemExit(f"Missing head or body for {page}")
    if not any(child.kind == "comment" and child.text == "xrpl-seo-start" for child in head.children):
        head.children.insert(0, Node("comment", text="xrpl-seo-start"))
        head.children.insert(1, Node("comment", text="xrpl-seo-end"))
    if not any(child.kind == "element" and child.attr("src") == "/xrpl/i18n/i18n.css" for child in head.children):
        link = Node("element", tag="link", attrs=[("rel", "stylesheet"), ("href", "/xrpl/i18n/i18n.css")])
        head.children.insert(0, link)
    if not any(child.kind == "element" and child.attr("data-xrpl-early") == "1" for child in head.children):
        script = Node("element", tag="script", attrs=[("data-xrpl-early", "1")])
        script.children.append(Node("text", text=EARLY_SCRIPT))
        head.children.insert(0, script)
    body.children = [
        child for child in body.children
        if not (child.kind == "element" and child.tag == "script" and (child.attr("src") or "").endswith("/xrpl/i18n/dashboard.js"))
    ]
    sources = [child.attr("src") for child in body.children if child.kind == "element" and child.tag == "script"]
    if "/xrpl/i18n/catalogs.js" not in sources:
        body.children.append(Node("element", tag="script", attrs=[("src", "/xrpl/i18n/catalogs.js"), ("defer", None)]))
    if "/xrpl/i18n/i18n.js" not in sources:
        body.children.append(Node("element", tag="script", attrs=[("src", "/xrpl/i18n/i18n.js"), ("defer", None)]))


def tweak_dashboard_copy(source):
    source = source.replace(
        '<label for="xrpl-language">🌐 Language / Idioma</label>',
        '<label for="xrpl-language"><span aria-hidden="true">🌐</span> <span>Language</span></label>',
    )
    source = source.replace(
        '<span class="xrpl-language-note">Dashboard preview. Lessons currently in English.</span>',
        '<span class="xrpl-language-note">Saved on this device. It applies to every XRPL LAYMAN page.</span>',
    )
    return source


def capture_meta(root, page, catalog):
    title = first(root, tag="title")
    if title is not None:
        catalog.add_fixed(f"meta.{page}.title", collapse(title.text_content()))
    for meta in find_all(root, tag="meta"):
        if meta.attr("name") == "description" and meta.attr("content"):
            catalog.add_fixed(f"meta.{page}.description", collapse(meta.attr("content")))


def number_inputs(root):
    for element in find_all(root, tag="input"):
        if (element.attr("type") or "").lower() == "number":
            element.set_attr("dir", "ltr")
            element.add_class("xrpl-ltr")


def visible_text(source):
    root = parse(source)
    chunks = []

    def visit(element):
        if element.tag in {"script", "style", "svg"}:
            return
        if element.raw is not None:
            return

    walk_elements(root, visit)
    for node in _text_nodes(root):
        parent = node.parent
        if parent is not None and parent.tag in {"script", "style", "svg"}:
            continue
        if parent is not None and parent.raw is not None:
            continue
        chunks.append(node.text)
    return collapse(" ".join(chunks))


def _text_nodes(node):
    found = []
    if node.kind == "text":
        found.append(node)
    if getattr(node, "raw", None):
        return found
    for child in getattr(node, "children", []):
        found.extend(_text_nodes(child))
    return found


def raw_blocks(source):
    root = parse(source)
    blocks = []

    def visit(element):
        if element.raw is not None:
            blocks.append(element.raw)

    walk_elements(root, visit)
    return blocks


def annotate_file(path, page, catalog, extract_only=False):
    source = path.read_text(encoding="utf-8")
    if not extract_only:
        source = tweak_dashboard_copy(source)
    before_raw = [block for block in raw_blocks(source) if "dashboard.js" not in block]
    before_text = visible_text(source)
    root = parse(source)
    if extract_only:
        raise SystemExit("extract-only is not required; en.json is rewritten by a full annotate")
    if first(root, tag="html") is not None and first(root, tag="html").attr("data-xrpl-i18n") == "1":
        raise SystemExit(f"{path} is already annotated")
    capture_meta(root, page, catalog)
    for child in root.children:
        if child.kind == "element":
            annotate_element(child, catalog)
    add_quiz_ids(root, page)
    number_inputs(root)
    ensure_support_nodes(root, page)
    output = serialize(root)
    cursor = 0
    for block in before_raw:
        found = output.find(block, cursor)
        if found < 0:
            raise SystemExit(f"Raw script/style/svg block missing after annotate in {path}")
        cursor = found + len(block)
    after_text = visible_text(output)
    allowed = {
        collapse(before_text).replace("🌐 Language / Idioma", "🌐 Language").replace(
            "Dashboard preview. Lessons currently in English.",
            "Saved on this device. It applies to every XRPL LAYMAN page.",
        )
    }
    if after_text not in allowed and after_text != before_text:
        # Show a short mismatch to debug without printing the whole page.
        import difflib
        diff = "\n".join(difflib.unified_diff(
            [before_text[i:i+120] for i in range(0, len(before_text), 120)],
            [after_text[i:i+120] for i in range(0, len(after_text), 120)],
            lineterm="", n=1,
        ))
        raise SystemExit(f"Visible text changed in {path}\n{diff[:4000]}")
    path.write_text(output, encoding="utf-8")


def main():
    catalog = Catalog()
    for key, text in EXTRA.items():
        catalog.add_fixed(key, text)
    for rel, page in PAGES:
        annotate_file(ROOT / rel, page, catalog)
    for key, text in list(EXTRA.items()):
        catalog.add_fixed(key, text)
    destination = ROOT / "xrpl/i18n/catalogs/en.json"
    destination.parent.mkdir(parents=True, exist_ok=True)
    ordered = {key: catalog.strings[key] for key in sorted(catalog.strings)}
    destination.write_text(json.dumps(ordered, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"keys {len(ordered)} -> {destination.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
