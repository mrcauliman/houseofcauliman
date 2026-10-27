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
2. `xrpl/i18n/i18n.js` reads the URL slug, then `localStorage`, then English. It swaps text for `[data-i18n]` without reloading, so the scroll position and any `#lesson` hash stay put. It then updates the address bar with `history.replaceState` on `http` and `https` only.
3. Quiz correctness stays on `data-correct` and `data-choice-id`. It is never compared to the button label.
4. Calculator math is unchanged. Only the sentences around the numbers are translated. `$XRP` stays `$XRP`. The reserve example is still `1 + objects * 0.2`, displayed with `toFixed(1)`.
5. Arabic sets `dir="rtl"`. Addresses, hashes, codes, and numbers are isolated left-to-right.

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

Each directory repeats the English page paths (`definitions.html`, `wallet-basics.html`, `builders/create-token.html`, and the rest). `index.html` is served as the directory URL. A locale page sets `lang`, `dir`, the translated `<title>` and description, a self canonical URL, and `hreflang` alternates including `x-default` (English). `hreflang` is written only for languages whose catalog contains every English key.

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
- `python3 xrpl/i18n/tools/check_behavior.py` checks quiz ids and the calculator formulas.
- `python3 xrpl/i18n/tools/needs_review.py` writes `NEEDS_REVIEW.md` for the security and finance strings. Those translations stay close to the English and still need a human XRPL review.

## Publishing

This work stops before merge and before deploy. GitHub Pages will show it only after the reviewed branch is merged into the branch Pages already serves. Do not merge that yourself as part of this change, and do not edit `CNAME`, `robots.txt`, or `sitemap.xml` here.
