#!/usr/bin/env node
/**
 * Report per-language catalog coverage against English.
 * Exits 1 when a required catalog is missing a key, drops a placeholder,
 * or drops a preserved token such as $XRP or an example address.
 */
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const required = ["en", "pt-BR", "es", "fr", "de", "ja", "ko", "zh-CN", "hi", "ar"];
const token = /\$XRP|\bXRPL LAYMAN\b|\bXRPL\b|\bXaman\b|\bTestnet\b|\bMainnet\b|\bNFTokenID\b|\bNFTokenPage\b|\bTakerGets\b|\bTakerPays\b|\bAUGUR\b|\bHouse of Cauliman\b|r[1-9A-HJ-NP-Za-km-z]{24,}|\b0\.2\b/g;

function load(lang) {
  const path = join(root, "catalogs", `${lang}.json`);
  if (!existsSync(path)) return null;
  return JSON.parse(readFileSync(path, "utf8"));
}

function placeholders(value) {
  return [...String(value).matchAll(/\{([A-Za-z0-9_]+)\}/g)].map((match) => match[1]).sort();
}

function sameList(left, right) {
  return left.length === right.length && left.every((item, index) => item === right[index]);
}

const english = load("en");
if (!english) {
  console.error("Missing catalogs/en.json");
  process.exit(1);
}
const keys = Object.keys(english).sort();
let failed = false;
const report = [];

for (const lang of required) {
  const catalog = load(lang);
  if (!catalog) {
    failed = true;
    report.push({ lang, coverage: "0.0%", present: 0, missing: keys.length, identical: 0, problems: ["catalog file missing"] });
    continue;
  }
  const missing = [];
  const problems = [];
  let identical = 0;
  keys.forEach((key) => {
    const source = english[key];
    if (!Object.prototype.hasOwnProperty.call(catalog, key) || catalog[key] === "") {
      missing.push(key);
      return;
    }
    const value = String(catalog[key]);
    if (value === source) identical += 1;
    if (!sameList(placeholders(source), placeholders(value))) {
      problems.push(`${key}: placeholders ${placeholders(source).join(",")} -> ${placeholders(value).join(",")}`);
    }
    const needed = source.match(token) || [];
    needed.forEach((item) => {
      if (!value.includes(item)) problems.push(`${key}: dropped ${item}`);
    });
  });
  const present = keys.length - missing.length;
  const coverage = `${((present / keys.length) * 100).toFixed(1)}%`;
  if (missing.length || problems.length) failed = true;
  report.push({
    lang,
    coverage,
    present,
    missing: missing.length,
    identical,
    problems: problems.slice(0, 12),
    missingSample: missing.slice(0, 12)
  });
}

console.log(JSON.stringify({ keys: keys.length, languages: report }, null, 2));
process.exit(failed ? 1 : 0);
