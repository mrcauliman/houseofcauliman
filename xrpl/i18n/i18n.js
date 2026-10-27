/* XRPL LAYMAN language runtime. No network calls. English catalog is the fallback. */
(function () {
  "use strict";

  var STORAGE_KEY = "xrpl-layman-language";
  var ORIGIN = "https://houseofcauliman.com";
  var LANGS = [
    { id: "en", slug: "", htmlLang: "en", dir: "ltr", hreflang: "en", native: "English" },
    { id: "pt-BR", slug: "pt-br", htmlLang: "pt-BR", dir: "ltr", hreflang: "pt-BR", native: "Português (Brasil)" },
    { id: "es", slug: "es", htmlLang: "es", dir: "ltr", hreflang: "es", native: "Español" },
    { id: "fr", slug: "fr", htmlLang: "fr", dir: "ltr", hreflang: "fr", native: "Français" },
    { id: "de", slug: "de", htmlLang: "de", dir: "ltr", hreflang: "de", native: "Deutsch" },
    { id: "ja", slug: "ja", htmlLang: "ja", dir: "ltr", hreflang: "ja", native: "日本語" },
    { id: "ko", slug: "ko", htmlLang: "ko", dir: "ltr", hreflang: "ko", native: "한국어" },
    { id: "zh-CN", slug: "zh-cn", htmlLang: "zh-CN", dir: "ltr", hreflang: "zh-CN", native: "中文（简体）" },
    { id: "hi", slug: "hi", htmlLang: "hi", dir: "ltr", hreflang: "hi", native: "हिन्दी" },
    { id: "ar", slug: "ar", htmlLang: "ar", dir: "rtl", hreflang: "ar", native: "العربية" }
  ];
  var BY_ID = {};
  var BY_SLUG = {};
  LANGS.forEach(function (lang) {
    BY_ID[lang.id] = lang;
    if (lang.slug) BY_SLUG[lang.slug] = lang;
  });

  function catalogs() {
    return window.XRPL_CATALOGS || {};
  }

  function lookup(lang, key) {
    var tables = catalogs();
    var local = tables[lang] || {};
    if (Object.prototype.hasOwnProperty.call(local, key) && local[key] !== "") return local[key];
    var english = tables.en || {};
    if (lang !== "en" && Object.prototype.hasOwnProperty.call(english, key) && english[key] !== "") return english[key];
    return null;
  }

  function fill(template, vars) {
    if (!vars) return template;
    return template.replace(/\{([A-Za-z0-9_]+)\}/g, function (_match, name) {
      return Object.prototype.hasOwnProperty.call(vars, name) ? String(vars[name]) : "{" + name + "}";
    });
  }

  function isolateRuns(value) {
    if (document.documentElement.getAttribute("dir") !== "rtl") return value;
    return String(value).replace(/[A-Za-z0-9$][A-Za-z0-9$._:%+\-]*/g, function (match) {
      return "\u2066" + match + "\u2069";
    });
  }

  function translate(key, fallback, vars) {
    var template = lookup(state.lang, key);
    if (template == null) template = fallback == null ? "" : fallback;
    return isolateRuns(fill(template, vars));
  }

  function catalogComplete(lang) {
    var tables = catalogs();
    var english = tables.en || {};
    var local = tables[lang] || {};
    var keys = Object.keys(english);
    if (!keys.length) return lang === "en";
    for (var i = 0; i < keys.length; i += 1) {
      if (!Object.prototype.hasOwnProperty.call(local, keys[i]) || local[keys[i]] === "") return false;
    }
    return true;
  }

  function sitePath() {
    var path = location.pathname;
    var at = path.indexOf("/xrpl/");
    if (at < 0) return "/xrpl/";
    return path.slice(at);
  }

  function restOf(path) {
    var value = path || "";
    if (value.indexOf("/xrpl/") === 0) value = value.slice(6);
    else if (value === "/xrpl") value = "";
    var parts = value.split("/");
    if (BY_SLUG[parts[0]]) parts.shift();
    value = parts.join("/");
    if (value === "index.html") return "";
    if (value.slice(-11) === "/index.html") return value.slice(0, -10);
    return value;
  }

  function pathFor(rest, lang) {
    var slug = BY_ID[lang] ? BY_ID[lang].slug : "";
    var prefix = "/xrpl/" + (slug ? slug + "/" : "");
    if (!rest) return prefix;
    return prefix + rest;
  }

  function localizePath(path, lang) {
    return pathFor(restOf(path), BY_ID[lang] ? lang : "en");
  }

  function localizeHref(href, lang) {
    if (!href || href.charAt(0) === "#" || href.indexOf("mailto:") === 0 || href.indexOf("javascript:") === 0) return href;
    var url;
    try {
      url = new URL(href, ORIGIN);
    } catch (error) {
      return href;
    }
    if (url.hostname !== "houseofcauliman.com" && href.charAt(0) !== "/") return href;
    if (url.pathname.indexOf("/xrpl/") !== 0) return href;
    if (url.pathname.indexOf("/xrpl/i18n/") === 0) return href;
    var next = localizePath(url.pathname, lang) + url.search + url.hash;
    if (/^https?:\/\//i.test(href)) return url.origin + next;
    return next;
  }

  function replaceChildren(element, nodes) {
    if (element.replaceChildren) {
      element.replaceChildren.apply(element, nodes);
      return;
    }
    while (element.firstChild) element.removeChild(element.firstChild);
    nodes.forEach(function (node) { element.appendChild(node); });
  }

  function applyElement(element) {
    if (element.getAttribute("data-i18n-skip")) return;
    var key = element.getAttribute("data-i18n");
    if (!key) return;
    var template = lookup(state.lang, key);
    if (template == null) return;
    var slots = {};
    Array.prototype.forEach.call(element.children, function (child) {
      var name = child.getAttribute && child.getAttribute("data-i18n-slot");
      if (name) slots[name] = child;
    });
    var names = Object.keys(slots);
    if (!names.length) {
      if (!element.querySelector("*")) element.textContent = isolateRuns(template);
      return;
    }
    var used = {};
    var missing = false;
    template.replace(/\{([A-Za-z0-9_]+)\}/g, function (_match, name) {
      if (!slots[name]) missing = true;
      used[name] = true;
      return "";
    });
    names.forEach(function (name) { if (!used[name]) missing = true; });
    if (missing) return;
    var nodes = [];
    var pattern = /\{([A-Za-z0-9_]+)\}/g;
    var last = 0;
    var match;
    while ((match = pattern.exec(template))) {
      if (match.index > last) nodes.push(document.createTextNode(isolateRuns(template.slice(last, match.index))));
      nodes.push(slots[match[1]]);
      last = match.index + match[0].length;
    }
    if (last < template.length) nodes.push(document.createTextNode(isolateRuns(template.slice(last))));
    replaceChildren(element, nodes);
  }

  function translateTree() {
    var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n]")).reverse();
    nodes.forEach(applyElement);
    document.querySelectorAll("[data-i18n-attr]").forEach(function (element) {
      element.getAttribute("data-i18n-attr").split(",").forEach(function (pair) {
        var splitAt = pair.indexOf(":");
        if (splitAt < 1) return;
        var attr = pair.slice(0, splitAt);
        var key = pair.slice(splitAt + 1);
        var value = lookup(state.lang, key);
        if (value != null) element.setAttribute(attr, isolateRuns(value));
      });
    });
  }

  function updateLinks(lang) {
    document.querySelectorAll("a[href]").forEach(function (link) {
      var href = link.getAttribute("href");
      var next = localizeHref(href, lang);
      if (next !== href) link.setAttribute("href", next);
    });
  }

  function updateTitle(lang) {
    var page = document.documentElement.getAttribute("data-xrpl-page");
    if (!page) return;
    var title = lookup(lang, "meta." + page + ".title");
    if (title) document.title = title;
    var description = lookup(lang, "meta." + page + ".description");
    var meta = document.querySelector('meta[name="description"]');
    if (description && meta) meta.setAttribute("content", description);
  }

  function englishRest() {
    return restOf(sitePath());
  }

  function absolute(lang) {
    return ORIGIN + pathFor(englishRest(), lang);
  }

  function updateSeo(lang) {
    var nodes = document.head.childNodes;
    var start = null;
    var end = null;
    Array.prototype.forEach.call(nodes, function (node) {
      if (node.nodeType !== 8) return;
      if (node.nodeValue === "xrpl-seo-start") start = node;
      if (node.nodeValue === "xrpl-seo-end") end = node;
    });
    if (!start || !end) return;
    while (start.nextSibling && start.nextSibling !== end) start.parentNode.removeChild(start.nextSibling);
    function add(rel, attrs) {
      var link = document.createElement("link");
      link.rel = rel;
      Object.keys(attrs).forEach(function (key) { link.setAttribute(key, attrs[key]); });
      start.parentNode.insertBefore(link, end);
    }
    add("canonical", { href: absolute(lang) });
    LANGS.forEach(function (item) {
      if (!catalogComplete(item.id)) return;
      add("alternate", { hreflang: item.hreflang, href: absolute(item.id) });
    });
    add("alternate", { hreflang: "x-default", href: absolute("en") });
  }

  function updateUrl(lang) {
    if (location.protocol !== "http:" && location.protocol !== "https:") return;
    var next = pathFor(englishRest(), lang) + location.search + location.hash;
    var current = location.pathname + location.search + location.hash;
    if (next !== current) history.replaceState({ xrplLang: lang }, "", next);
  }

  function ensureSelector() {
    var select = document.getElementById("xrpl-language");
    if (!select) {
      var bar = document.querySelector(".appbar");
      if (!bar) return null;
      var label = document.createElement("label");
      label.className = "xrpl-lang";
      label.htmlFor = "xrpl-language";
      var text = document.createElement("span");
      text.setAttribute("data-i18n", "lang.label");
      text.textContent = "Language";
      select = document.createElement("select");
      select.id = "xrpl-language";
      label.appendChild(text);
      label.appendChild(select);
      bar.appendChild(label);
    }
    if (select.dataset.ready !== "1" || select.options.length !== LANGS.length) {
      replaceChildren(select, LANGS.map(function (lang) {
        var option = document.createElement("option");
        option.value = lang.id;
        option.textContent = lang.native;
        option.lang = lang.htmlLang;
        if (lang.dir === "rtl") option.dir = "rtl";
        return option;
      }));
      select.dataset.ready = "1";
    }
    return select;
  }

  var state = { lang: "en" };

  function initialLanguage() {
    var parts = sitePath().replace(/^\/xrpl\/?/, "").split("/");
    if (BY_SLUG[parts[0]]) return BY_SLUG[parts[0]].id;
    try {
      var saved = localStorage.getItem(STORAGE_KEY) || "";
      if (BY_ID[saved]) return saved;
    } catch (error) {
      return "en";
    }
    return "en";
  }

  function apply(lang) {
    if (!BY_ID[lang]) lang = "en";
    state.lang = lang;
    document.documentElement.lang = BY_ID[lang].htmlLang;
    document.documentElement.dir = BY_ID[lang].dir;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (error) { /* private mode */ }
    var select = ensureSelector();
    translateTree();
    updateLinks(lang);
    updateTitle(lang);
    updateSeo(lang);
    if (select) {
      select.value = lang;
      if (!select.dataset.bound) {
        select.addEventListener("change", function () { apply(select.value); });
        select.dataset.bound = "1";
      }
    }
    updateUrl(lang);
    document.dispatchEvent(new CustomEvent("xrpl:language", { detail: { lang: lang } }));
  }

  window.XRPL_I18N = {
    languages: LANGS,
    t: function (key, fallback, vars) { return translate(key, fallback, vars); },
    apply: apply,
    get lang() { return state.lang; },
    localizeHref: function (href) { return localizeHref(href, state.lang); }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { apply(initialLanguage()); });
  } else {
    apply(initialLanguage());
  }
})();
