"""Small HTML tree parser and serializer for the XRPL LAYMAN static pages.

Script, style, and svg subtrees are copied verbatim from the source so
transaction examples, calculators, and icons are not reformatted.
"""
from __future__ import annotations

import html as html_lib
from html.parser import HTMLParser

VOID = {
    "area", "base", "br", "col", "embed", "hr", "img", "input", "link",
    "meta", "source", "track", "wbr",
}
RAW = {"script", "style", "svg"}


class Node:
    def __init__(self, kind, **data):
        self.kind = kind
        self.tag = data.get("tag")
        self.attrs = list(data.get("attrs") or [])
        self.children = []
        self.text = data.get("text") or ""
        self.raw = data.get("raw")
        self.parent = None

    def attr(self, name, default=None):
        for key, value in self.attrs:
            if key == name:
                return value
        return default

    def set_attr(self, name, value):
        for index, (key, _value) in enumerate(self.attrs):
            if key == name:
                self.attrs[index] = (key, value)
                return
        self.attrs.append((name, value))

    def add_class(self, class_name):
        current = self.attr("class") or ""
        parts = current.split()
        if class_name not in parts:
            parts.append(class_name)
            self.set_attr("class", " ".join(parts))

    def text_content(self):
        if self.kind == "text":
            return self.text
        if self.kind != "element":
            return ""
        return "".join(child.text_content() for child in self.children)


def _line_offsets(source):
    offsets = [0]
    total = 0
    for line in source.splitlines(keepends=True):
        total += len(line)
        offsets.append(total)
    return offsets


class _Parser(HTMLParser):
    def __init__(self, source):
        super().__init__(convert_charrefs=False)
        self.source = source
        self.offsets = _line_offsets(source)
        self.root = Node("document")
        self.stack = [self.root]
        self.raw_depth = 0
        self.raw_tag = None
        self.raw_start = None

    def abs_pos(self):
        line, col = self.getpos()
        if line - 1 >= len(self.offsets):
            return len(self.source)
        return self.offsets[line - 1] + col

    def handle_decl(self, decl):
        if self.raw_depth:
            return
        self._append(Node("doctype", text=decl))

    def handle_comment(self, data):
        if self.raw_depth:
            return
        self._append(Node("comment", text=data))

    def handle_starttag(self, tag, attrs):
        self._start(tag, attrs, void=tag in VOID)

    def handle_startendtag(self, tag, attrs):
        self._start(tag, attrs, void=True)

    def _start(self, tag, attrs, void):
        if self.raw_depth:
            if tag == self.raw_tag:
                self.raw_depth += 1
            return
        node = Node("element", tag=tag, attrs=attrs)
        self._append(node)
        if tag in RAW:
            self.raw_depth = 1
            self.raw_tag = tag
            self.raw_start = self.abs_pos()
            return
        if not void:
            self.stack.append(node)

    def handle_endtag(self, tag):
        if self.raw_depth:
            if tag != self.raw_tag:
                return
            self.raw_depth -= 1
            if self.raw_depth == 0:
                end = self.abs_pos()
                gt = self.source.find(">", end)
                node = self.stack[-1].children[-1]
                node.raw = self.source[self.raw_start:gt + 1]
                node.children = []
                self.raw_tag = None
                self.raw_start = None
            return
        for index in range(len(self.stack) - 1, 0, -1):
            if self.stack[index].tag == tag:
                del self.stack[index:]
                return

    def handle_data(self, data):
        if self.raw_depth or not data:
            return
        self._append(Node("text", text=data))

    def handle_entityref(self, name):
        if self.raw_depth:
            return
        self._append(Node("text", text=html_lib.unescape(f"&{name};")))

    def handle_charref(self, name):
        if self.raw_depth:
            return
        self._append(Node("text", text=html_lib.unescape(f"&#{name};")))

    def _append(self, node):
        parent = self.stack[-1]
        node.parent = parent
        parent.children.append(node)


def parse(source):
    parser = _Parser(source)
    parser.feed(source)
    parser.close()
    return parser.root


def _escape_text(text):
    return (
        text.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
    )


def _escape_attr(value):
    return (
        str(value).replace("&", "&amp;")
        .replace('"', "&quot;")
        .replace("<", "&lt;")
    )


def _serialize_attrs(attrs):
    chunks = []
    for key, value in attrs:
        if value is None:
            chunks.append(f" {key}")
        else:
            chunks.append(f' {key}="{_escape_attr(value)}"')
    return "".join(chunks)


def _serialize(node, out, raw_text=False):
    if node.kind == "document":
        for child in node.children:
            _serialize(child, out, raw_text)
        return
    if node.kind == "doctype":
        out.append(f"<!{node.text}>")
        return
    if node.kind == "comment":
        out.append(f"<!--{node.text}-->")
        return
    if node.kind == "text":
        out.append(node.text if raw_text else _escape_text(node.text))
        return
    if node.raw is not None:
        out.append(node.raw)
        return
    attrs = _serialize_attrs(node.attrs)
    if node.tag in VOID:
        out.append(f"<{node.tag}{attrs}>")
        return
    out.append(f"<{node.tag}{attrs}>")
    child_raw = raw_text or node.tag in {"script", "style"}
    for child in node.children:
        _serialize(child, out, child_raw)
    out.append(f"</{node.tag}>")


def serialize(root):
    out = []
    _serialize(root, out)
    text = "".join(out)
    if not text.endswith("\n"):
        text += "\n"
    return text


def walk_elements(node, visitor):
    if node.kind == "element":
        visitor(node)
        if node.raw is not None or node.tag in RAW:
            return
    for child in getattr(node, "children", []):
        walk_elements(child, visitor)


def find_all(node, tag=None, attr=None, value=None):
    found = []

    def visit(element):
        if tag and element.tag != tag:
            return
        if attr is not None:
            current = element.attr(attr)
            if value is None:
                if current is None:
                    return
            elif current != value and not (attr == "class" and value in (current or "").split()):
                return
        found.append(element)

    walk_elements(node, visit)
    return found


def first(node, tag=None, attr=None, value=None):
    found = find_all(node, tag, attr, value)
    return found[0] if found else None
