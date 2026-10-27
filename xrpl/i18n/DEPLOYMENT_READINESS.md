# Deployment readiness

Pre-merge review of `cursor/xrpl-layman-i18n-276c`. Do not merge this branch to `main`. Do not deploy it from the review itself. Do not edit `CNAME`, `robots.txt`, or `sitemap.xml`.

Remote tip verified with `git ls-remote` before this review commit: `2e504a879183d15ffd0b0c3d34c38f6af11e01fa`. `feature/xrpl-layman-i18n-foundation-20261023` was still `178afca5f86537e0b3a261e415f000b47fd5da7f`. No JARVIS commits were on either branch.

`1a8c281` is not the tip. It is the earlier commit `docs(xrpl): list security strings that need human review`. `2e504a8` came after it and is the tip this review started from.

## Blockers

1. A native speaker still has to approve every class (c) string in `REVIEW_AUDIT.md`. The meaning check did not find a remaining reversal, and it is not a certification.
2. This agent cannot open the pull request. GitHub returned `must be a collaborator` on 27 October 2026. Compare URL:

https://github.com/mrcauliman/houseofcauliman/compare/feature/xrpl-layman-i18n-foundation-20261023...cursor/xrpl-layman-i18n-276c?expand=1

Suggested title: `Add XRPL LAYMAN catalogs and locale pages`

Suggested body:

```
## Summary

Keyed localization for the static XRPL LAYMAN pages under `/xrpl/`. English stays canonical and the existing English URLs stay. Each other language is a generated directory (`/xrpl/pt-br/`, `/xrpl/es/`, `/xrpl/fr/`, `/xrpl/de/`, `/xrpl/ja/`, `/xrpl/ko/`, `/xrpl/zh-cn/`, `/xrpl/hi/`, `/xrpl/ar/`) with `lang`, `dir`, a self canonical, and `hreflang` including `x-default`.

No redirects. Arabic pages set `dir=rtl` and keep addresses, hashes, numbers, and code left-to-right.

Do not merge this to `main` and do not deploy it until the class (c) strings in `xrpl/i18n/REVIEW_AUDIT.md` are approved. `CNAME`, `robots.txt`, and `sitemap.xml` are untouched.

## Checks

- `node xrpl/i18n/check-catalogs.mjs` exited 0. All 10 catalogs have 1013 keys.
- `python3 xrpl/i18n/tools/check_behavior.py` passed: 92 quiz buttons, unique choice ids, reserve `1 + objects * .2`, slippage `pct=t/p*100`, investing `c=p*s` and `r=p/d*100`.
- Static crawl of every locale page: 13 pages per language, 0 missing internal href/src targets, hreflang and canonical targets exist, quiz `data-correct` matches English on all 92 choices (44 marked true).

## Review

`xrpl/i18n/REVIEW_AUDIT.md` classifies the 230 security and finance strings. Two meaning errors were fixed (pt-BR “choose the standard deliberately”, Hindi reserve “plus”). Class (c) still needs a native speaker.
```

## Not a blocker for page load

- All 10 languages: 13 pages exist (`index`, `definitions`, `wallet-basics`, `usage`, `safety`, `investing-reality`, and the seven Builders Hub pages).
- Each page sets `lang` and `dir` (`ar` is `rtl`, the others `ltr`).
- Each page has canonical plus hreflang for en, pt-BR, es, fr, de, ja, ko, zh-CN, hi, ar, and `x-default`. Those targets map to files in the repo.
- Lesson chrome links Dashboard, Definitions, Wallets, Usage, Safety, and Reality inside the same locale. The dashboard cards link those lessons plus Builders Hub. Builder pages link the builder lessons. That is the same link set as English, with the locale prefix added. Definitions does not add a Builders item in the top bar; English did not either.
- `https://houseofcauliman.com` in the footer is the site root (`index.html`), which exists. `/terms.html`, `/privacy.html`, and `/disclaimer.html` exist and are not translated.
- Calculator formulas are present in every locale copy. This review did not re-click the calculators. The earlier headless Chrome run, on the tree before the two wording fixes, got reserve `3.0 $XRP` from inputs 2, 3, and 5; slippage `5.00%` from pool 1000, trade 50, fee 0.50; market cap `$2,000` and `20.0×` from price 2, supply 1000, liquidity 100; position ratio `25.0%` from position 25 and depth 100. Those formulas were not edited by the wording fix.

## Outstanding risks

- Class (c) wording can still be awkward or ambiguous to a native reader. pt-BR, fr, and de leave some short security labels in English on purpose (`Seed`, `Trust line`, `Freeze`, and, in German, `Destination Tag`).
- An unprefixed `/xrpl/` URL follows the saved `xrpl-layman-language` value and `history.replaceState` updates the address bar. A locale URL wins over the saved value.
- The hash is kept on a language switch. The raw scroll offset can change when the text above the section is taller or shorter.
- `sitemap.xml` still lists only the English home page. It was left unchanged on purpose, so search engines will not see the locale URLs from the sitemap until someone updates it in a later, explicit change.
- Visitor fonts have to cover Arabic, Devanagari, and CJK. The pages name Noto families and fall back to the system font.
- Machine translation is not a source of new XRPL rules. Where the English is a teaching example, the numbers stay the teaching example.

## Deploy steps after approval

1. Finish native review of `REVIEW_AUDIT.md` class (c). Fix catalogs, then regenerate. Do not hand-edit `xrpl/pt-br/` or the other locale directories.
2. Open the compare URL above against `feature/xrpl-layman-i18n-foundation-20261023`, not `main`.
3. Merge only into the branch GitHub Pages already serves, after that review. Publishing is that merge. There is no redirect rule to add. The locale directories are real files.
4. Regenerate command, if catalogs change again:

```bash
python3 xrpl/i18n/tools/bundle_catalogs.py
node xrpl/i18n/check-catalogs.mjs
python3 xrpl/i18n/tools/build_locales.py
python3 xrpl/i18n/tools/check_behavior.py
python3 xrpl/i18n/tools/needs_review.py
```

## Tests this review actually ran

- `git ls-remote origin refs/heads/cursor/xrpl-layman-i18n-276c` and `refs/heads/feature/xrpl-layman-i18n-foundation-20261023`.
- `node xrpl/i18n/check-catalogs.mjs` after the two wording fixes: exit 0, 1013 keys, 100% coverage, 0 missing, 0 placeholder or token problems for all 10 languages.
- `python3 xrpl/i18n/tools/check_behavior.py`: passed, 92 quiz buttons, 92 unique choice ids.
- Static crawl after rebuilding the locale pages: 13 pages × 10 languages, 0 missing internal `href`/`src` files, 0 quiz `data-correct` mismatches, reserve / slippage / investing formulas present in every language.
- The two corrected sentences are present in `xrpl/pt-br/builders/create-token.html` and `xrpl/hi/definitions.html`.

Headless Chrome language, quiz, and calculator clicks were run on the previous tip (`2e504a8`), before these two wording fixes. They were not repeated in this review. The wording fix does not change calculator code.

## Release-prep pass

`APPROVAL_CHECKLIST.md` lists all 230 review strings for each of the nine translations. Approved rows: 0 in every language. `sitemap.proposed.xml` is not the live sitemap.

Four meaning errors were corrected and baked: German “display support”, Arabic “existence on the ledger” (including the media sentence outside the 230), Chinese trust-line heading, and Korean “scammers can trick you”. `i18n.js` now scrolls the hashed section back into view after a language swap.

Headless Chrome on this tree, cache disabled, desktop 1280×900 and mobile 390×844:

- 13 pages loaded for en, pt-BR, es, fr, de, ja, ko, zh-CN, hi, and ar. `lang` and `dir` matched. hreflang order was en, pt-BR, es, fr, de, ja, ko, zh-CN, hi, ar, x-default.
- 92 quiz buttons clicked in each language. 0 class mismatches. Builder feedback was present. A Japanese issuer-control click showed `correct` and `正解。 レギュラーキー（regular key）は、別の署名経路です。`
- Reserve inputs 2, 3, and 5 produced `3.0 $XRP` in all 10 languages. Slippage pool 1000, trade 50, fee 0.50 produced `5.00%`, and the copy included 5.00 and 0.50. Position 25 and depth 100 produced `25.0%`. Market cap at price 2, supply 1000, liquidity 100 was `$2,000` with copy containing `20.0`. That currency string used the browser locale, not the page language.
- 19 internal links checked per language, 0 missing. Horizontal overflow was 0 on the desktop pages and on each mobile dashboard.
- Saved language `ja` rewrote `/xrpl/` to `/xrpl/ja/` and `/xrpl/definitions.html#reserves` to `/xrpl/ja/definitions.html#reserves`. Opening `/xrpl/es/definitions.html#reserves` used Spanish and then stored `es`.
- A follow-up on the same tree waited for `#reserves` after each language change. All 10 stayed on that hash, on the localized URL, with the section inside the viewport. Arabic was `rtl`. A 200ms sample inside the main pass caught the smooth scroll mid-way and is not the settled result.
- Arabic wallet text contained U+2066 isolates. On Arabic definitions, the reserve input and `#reserveValue` computed `direction:ltr`.
- Glyph rasters for العربية, हिन्दी, 日本語, 한국어, and 中文 differed from the missing-glyph box. Arabic and Devanagari resolved to the named Noto families, which are installed. The named Noto CJK families are not installed; Japanese, Korean, and Chinese fell through to `system-ui` and still drew glyphs via WenQuanYi Micro Hei and Droid Sans Fallback. A machine without a CJK fallback can show boxes even though the CSS names Noto CJK.

## Quality pass

Production is still locked. `sitemap.xml` was not edited. `sitemap.proposed.xml` stays a proposal.

Visual checks in headless Chrome, cache disabled:

- Japanese issuer-control heading `誰がまだルールを変えられるかを知る` at 1280×900 now breaks as `誰がまだルールを変えられるかを` / `知る`. `word-break` computed `auto-phrase`, `line-break` `strict`, `overflow-wrap` `break-word`. The last line is the word 知る, not the single character る. Page overflow was 0.
- Arabic dashboard brand boxes: XRPL left 215, LAYMAN left 436, so the order is XRPL then LAYMAN. The intro is one isolate, `XRP Ledger.` The House card is one isolate, `House of Cauliman.` The definitions title is `تعريفات ⁦XRPL⁩ | ⁦XRPL LAYMAN⁩`.
- Hindi dashboard at 390×844: page overflow 0, no measured clipping, tagline line-height 27.2px on a 16px font (1.7). French card titles, including `Réalité de l’investissement`, overflowed 0px at 1280.
- Language select on the dashboard and on a lesson: 10 options, each with `lang`, Arabic option `dir=rtl`, accessible name `Language`, padding `9px 12px`, radius `10px`, min-height `40px`. Tabbing to it matched `:focus-visible` with outline `rgb(255, 204, 102) solid 3px`.

Catalog and behavior checks after these edits: `check-catalogs.mjs` exit 0, 1013 keys, 100% coverage, 0 problems. `check_behavior.py` passed, 92 buttons, 92 choice ids, and the phrase-isolate samples passed. Static crawl: 13×10 pages, 0 broken internal links, 0 quiz mismatches. The crawl still reports that the dashboard does not link to itself and that the definitions top bar does not link to `/xrpl/builders/`. That is the original English nav.

Headless pass after the edits, same viewports: 0 script errors. 92 quiz clicks per language, 0 mismatches, 0 missing builder feedback. Reserve `3.0 $XRP`, slippage `5.00%`, ratio `25.0%` on desktop and again on mobile for all 10 languages. 19 internal links per language, 0 missing. Desktop page overflow 0. Mobile overflow 0 on the dashboard, definitions, usage, investing reality, and issuer-control pages. `#reserves` stayed visible after each language change. Saved `ja` still rewrites an unprefixed URL. A locale URL still wins.

`lang.select` now matches `lang.label` in every catalog. The Chinese trust-line heading is `信任线（trust line）所不表示的含义`. Neither change is native approval. Approved rows remain 0. Reviewer packets are `xrpl/i18n/review-packages/<lang>.md` and `.csv`.
