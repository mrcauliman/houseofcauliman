# XRPL LAYMAN localization

English is the source language. The pages stay static HTML and JavaScript. Nothing in this folder calls a translation API or adds a runtime dependency.

## Audit

The public site is `https://houseofcauliman.com/xrpl/`. This repository is the static site itself:

- `CNAME` is `houseofcauliman.com`.
- `.nojekyll` is present, so GitHub Pages publishes every file, including new locale directories.
- There is no `.htaccess`, nginx config, Netlify config, Vercel config, or GitHub Actions workflow.
- `sitemap.xml` lists only the homepage. It was left unchanged.

GitHub Pages cannot run server redirects for this tree. Locale URLs are real files. There is no redirect from `/xrpl/` to a locale, and no redirect back, so a redirect loop is not possible.

### Pages

| Public URL | File | What it teaches |
| --- | --- | --- |
| `/xrpl/` | `xrpl/index.html` | Dashboard: Foundation, Definitions, Wallets, Usage, Safety, Investing Reality, The House, Builders Hub |
| `/xrpl/definitions.html` | same | Foundation lesson. Both Foundation and Definitions cards open this page. Progress meter, trust-line visualizer, reserve calculator, quiz |
| `/xrpl/wallet-basics.html` | same | Custody, seed, funding, signing, regular keys, multisign, quiz |
| `/xrpl/usage.html` | same | Payments, destination tags, trust lines, DEX fields, AMM slippage calculator, NFTs, quiz |
| `/xrpl/safety.html` | same | Keys, issuer checks, phishing, signing, custody, compromise response, quiz |
| `/xrpl/investing-reality.html` | same | Liquidity, market-cap calculator, position-to-liquidity calculator, issuer controls, quiz |
| `/xrpl/builders/` | `xrpl/builders/index.html` | Builders Hub path and quiz |
| `/xrpl/builders/*.html` | six lessons | Create a token, NFTs, trust lines, issuer control, Xaman flows, project launch. Checklists, worked examples, quizzes |

There is no separate `foundation.html`. `xrpl/index.html.bak_definitions_link` is an unused backup and was not edited. Illustrations under `/assets/xrpl/` contain no sentences and were not edited. Transaction formulas were not edited.

### Previous language work

`a5bd6b2` and `178afca` (House of Cauliman, on `feature/xrpl-layman-i18n-foundation-20261023`) added `xrpl/i18n/dashboard.js` and a dashboard `<select>`. That script stored `xrpl-layman-language` and rewrote headings with `.xrpl-app-card h2` by index. Those position selectors are gone. The same storage key remains. Headings now use `data-i18n` keys.

## How language works

1. `xrpl/i18n/tools/annotate.py` marked user-facing text with stable `data-i18n` keys and wrote `catalogs/en.json`. English copy stays in the HTML.
2. `xrpl/i18n/i18n.js` reads the URL slug, then `localStorage`, then English. It swaps text for `[data-i18n]` without reloading, and it keeps the `#lesson` hash. After the swap it scrolls that hashed section back into view, so a taller or shorter translation does not leave the section off the screen. The raw scroll offset can still change. An unprefixed `/xrpl/` URL follows the saved language and `history.replaceState` updates the address bar on `http` and `https` only. A locale URL such as `/xrpl/es/definitions.html` wins over the saved language.
3. Quiz correctness stays on `data-correct` and `data-choice-id`. It is never compared to the button label.
4. Calculator math is unchanged. Only the sentences around the numbers are translated. `$XRP` stays `$XRP`. The reserve example is still `1 + objects * 0.2`, displayed with `toFixed(1)`. The investing market-cap figure is a US dollar amount. It is formatted with `toLocaleString('en-US')` and `currency: 'USD'` on every language, so a browser in another region cannot turn `$2,000` into `2.000 $` or `US$ 2.000`. The grouping stays the same English comma the rest of the site already uses.
5. Arabic sets `dir="rtl"`. A whole English phrase such as `XRP Ledger` or `House of Cauliman` is one left-to-right isolate, including a parenthetical gloss such as `(trust line)`. The brand heading `XRPL LAYMAN` stays left-to-right as well, because the two words are separate elements. Addresses, hashes, codes, and numbers stay inside that same isolate rule.

Switching language rewrites in-page links that point at `/xrpl/` so the next click stays in that language. Links to `/`, `/terms.html`, `/privacy.html`, `/disclaimer.html`, and outside sites are unchanged. Those pages are not translated and are not given `hreflang`.

## URL and SEO choice

Generated directories, committed next to the English pages:

- `/xrpl/pt-br/`
- `/xrpl/es/`
- `/xrpl/fr/`
- `/xrpl/de/`
- `/xrpl/ja/`
- `/xrpl/ko/`
- `/xrpl/zh-cn/`
- `/xrpl/hi/`
- `/xrpl/ar/`

Each directory repeats the English page paths (`definitions.html`, `wallet-basics.html`, `builders/create-token.html`, and the rest). `index.html` is served as the directory URL. A locale page sets `lang`, `dir`, the translated `<title>` and description, and a self canonical URL.

`xrpl/i18n/release.json` is the only release switch. English is `source` and always public. Each other language is `unapproved` or `approved`. The default is `unapproved` for all nine. Approving one language does not approve any other. The file does not publish the site.

Unapproved languages stay in the selector, with ` (under review)` after the native name, and their existing lesson URLs keep working. Hiding them would make a shared draft link look finished. They are not certified: the page shows the English notice “Translation under review. This is not a certified XRPL LAYMAN translation.”, a `noindex, follow` robots tag, and no `hreflang`. `xrpl/i18n/sitemap.proposed.xml` lists only public languages. A public page lists `hreflang` for the public languages plus `x-default` (English). `xrpl/i18n/release.js` is generated from `release.json` so the browser can apply the same rule without a network request.

Fonts for Japanese, Korean, Simplified Chinese, Hindi, and Arabic use the operating-system UI font first (`Hiragino Sans`, `Yu Gothic`, `Apple SD Gothic Neo`, `Malgun Gothic`, `PingFang SC`, `Microsoft YaHei`, `Noto Sans Devanagari`, `Noto Naskh Arabic`, and the other names in `i18n.css`). `system-ui` is not in those stacks, because it is often a Latin font and would hide a later CJK font. `WenQuanYi Micro Hei` and `Droid Sans Fallback` cover CJK when the OS font is absent. No font file is added and no third-party font CDN is used. A CJK subset would be large and would have to be rebuilt whenever the copy changes, while current Windows, macOS, and Android devices already ship a UI font for these scripts.

`xrpl/i18n/tools/build_locales.py` is the generator. Regenerate after catalog edits:

```bash
python3 xrpl/i18n/tools/bundle_catalogs.py
node xrpl/i18n/check-catalogs.mjs
python3 xrpl/i18n/tools/build_locales.py
python3 xrpl/i18n/tools/check_behavior.py
```

Do not edit files under `xrpl/pt-br/` and the other locale directories by hand. Edit the English HTML or the JSON catalogs, then run the generator.

## Preserved tokens

Do not translate or rewrite: `$XRP`, addresses, transaction hashes, `NFTokenID`, `NFTokenPage`, `TakerGets`, `TakerPays`, `XRPL`, `XRPL LAYMAN`, `Xaman`, `Testnet`, `Mainnet`, `AUGUR`, `House of Cauliman`, and `{placeholder}` tokens. The reserve numbers `1` and `0.2` stay in the example. They are the numbers already printed on the page, not a live reserve query.

## Checks

- `node xrpl/i18n/check-catalogs.mjs` prints coverage for en, pt-BR, es, fr, de, ja, ko, zh-CN, hi, and ar. It fails if a key, placeholder, `$XRP`, or preserved token is missing.
- `python3 xrpl/i18n/tools/check_behavior.py` checks quiz ids, the calculator formulas, and the en-US USD market-cap format.
- `python3 xrpl/i18n/tools/check_release.py` checks the release gate, the nine review packets, and the CSV importer. Passing it is not native-speaker approval.
- `python3 xrpl/i18n/tools/needs_review.py` writes `NEEDS_REVIEW.md` for the security and finance strings. Those translations stay close to the English and still need a human XRPL review.
- `python3 xrpl/i18n/tools/import_review.py <lang> <file.csv>` checks a returned review CSV. `--apply` writes corrections and records the reviewer’s name and date. It does not set `release.json` to `approved`. See `review-packages/REVIEWER_INSTRUCTIONS.md`.

## Publishing

This work stops before merge and before deploy. GitHub Pages will show it only after the reviewed branch is merged into the branch Pages already serves. Do not merge that yourself as part of this change, and do not edit `CNAME`, `robots.txt`, or `sitemap.xml` here.
