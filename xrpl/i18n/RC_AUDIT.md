# XRPL LAYMAN release-candidate audit

Audit date: 2026-10-27. Branch `cursor/xrpl-layman-i18n-276c`. Base `feature/xrpl-layman-i18n-foundation-20261023` (`178afca5f86537e0b3a261e415f000b47fd5da7f`). This audit started from `3d2b635ce9fa10a41cf788ef565b951fdbb44e03`.

Production stayed locked. Nothing in this audit merged, deployed, published, force-pushed, or edited `main`, the GitHub Pages source, `/sitemap.xml`, `CNAME`, or `robots.txt`.

`xrpl/i18n/release.json` still has English as `source` and pt-BR, es, fr, de, ja, ko, zh-CN, hi, and ar as `unapproved`. Approval and reversal checks used in-memory copies or a temp directory. They did not write `release.json`.

Passing these checks is not native-speaker approval. Approved rows in the review packets remain 0.

## Release-state security

`release.json` is the only switch. The generator and the browser runtime both refuse to treat a language as public unless that switch allows it and the catalog is complete.

What was checked, and what passed:

- Generated pages match `release.json`. `check_release.py` renders the site in memory and compares every generated file to disk. A mismatch fails the check.
- Unapproved pages (direct URL, no JavaScript) carry a self canonical, the English notice “Translation under review. This is not a certified XRPL LAYMAN translation.”, `noindex, follow` with `data-xrpl-robots`, and no `hreflang`. Confirmed on the raw HTML for `/xrpl/ja/definitions.html`, `/xrpl/pt-br/definitions.html`, and `/xrpl/zh-cn/`.
- English pages carry `hreflang` `en` and `x-default` only, no review notice, and `data-xrpl-public="1"`. Unapproved pages do not have that attribute.
- The language selector keeps every unapproved language, with ` (under review)` after the native name. English is never marked.
- `xrpl/i18n/sitemap.proposed.xml` has 13 English URLs, including `https://houseofcauliman.com/xrpl/`, and no `/xrpl/ja/` or `/xrpl/pt-br/` URL. `/sitemap.xml` still lists only `https://houseofcauliman.com/`.
- An omitted Japanese catalog key, with `ja` forced to `approved` in memory, stays out of `hreflang` and the proposed sitemap, keeps the notice and `noindex`, and the selector still says `日本語 (under review)`.
- In the browser, deleting `meta.definitions.title` from the Japanese catalog and setting `XRPL_RELEASE.ja` to `approved` made the title fall back to the English sentence `XRPL Definitions | XRPL LAYMAN`. The page still had the notice, `noindex, follow`, no `hreflang`, and the under-review option. The same omission on the English page left the public cluster at `en, x-default` and kept Japanese marked under review.
- Setting `XRPL_RELEASE.ja` to `approved` on a page that was not baked with `data-xrpl-public` did not remove `noindex` or the notice and did not add `hreflang`. `release.js` alone cannot certify a stale page.
- Injecting a Japanese `hreflang` alternate into the rendered Japanese definitions page makes `audit_release_output` reject the tree. The generator writes nothing when that audit fails.
- A temp-directory write that fails the audit, and a write whose audit raises, both restore the previous file bytes and leave no `.xrpl-tmp` file. A write that passes the audit keeps the new bytes. This does not touch the site tree.
- In-memory transition for pt-BR only: unapproved, then `approved`, then unapproved again. `release.json` bytes were unchanged.
  - 13 pt-BR pages changed: `hreflang` became `en`, `pt-BR`, `x-default`; the notice and `noindex` were removed; `data-xrpl-public="1"` was added.
  - 13 English pages changed, because the public cluster changed.
  - `sitemap.proposed.xml` and `release.js` changed.
  - The other eight dashboards changed only the `Português (Brasil)` option label. Their lesson pages stayed byte-identical. Japanese definitions kept the notice and gained no `hreflang`.
  - Rendering the unapproved state again matched the original render byte for byte.
- Uppercase catalog ids are not used as URLs. The local static server returned 404 for `/xrpl/pt-BR/definitions.html`, `/xrpl/PT-BR/`, and `/xrpl/zh-CN/`, and 200 for `/xrpl/pt-br/definitions.html` and `/xrpl/zh-cn/`. Generated HTML contains neither `/xrpl/pt-BR/` nor `/xrpl/zh-CN/`.
- Shared lesson links on a locale page stay under that locale prefix. `builders.css` and `builders.js` stay at `/xrpl/builders/` on purpose.

## Reviewer-import tests

Samples lived in a temporary directory next to `FAKE_NOT_AN_APPROVAL.txt`. They were not copied into `review-packages/approvals/` and were not used to edit `release.json`. The harness is `xrpl/i18n/tools/test_import_review.py`. The label file is `xrpl/i18n/tools/fixtures/import_review/FAKE_NOT_AN_APPROVAL.txt`.

`check_release.py` hashed `release.json`, every catalog, and every review-package file before and after the sample run. The hashes matched.

Rejected, with no apply (`--apply` was passed and returned non-zero):

- duplicate keys
- date `2026-13-40`
- missing reviewer
- reviewer `GPT`
- reviewer `automated`
- both `approve` and a correction
- `approve` set to `yes`
- a correction that dropped a preserved token (`XRPL`)
- a correction that dropped `{s1}`
- a CSV whose header is not the package header

Accepted only inside the temp directory, on a two-key fake catalog:

- approving one row left the sentence unchanged and recorded only that key
- a correction was written only to the temp catalog
- an apply whose markdown packet did not contain the key restored the catalog bytes and did not leave `approvals/broken.json`

`import_review.py --self-test` also passed. The importer never writes `release.json`.

## Production compatibility

Read from GitHub on 2026-10-27. Not changed.

| Item | Current value |
| --- | --- |
| Pages source | branch `main`, path `/` |
| Build type | `legacy` (the built-in Pages deployment; no project build step) |
| CNAME | `houseofcauliman.com` |
| HTTPS | enforced |
| Pages status | `built`, public, `https://houseofcauliman.com/` |
| Latest Pages build | commit `fd967eec23f33d148d5f15e33b75ecc8e7eb3f3e` (`main`) |
| Workflows | `pages-build-deployment` only. This branch has no `.github` workflows |
| Jekyll | disabled by an empty `.nojekyll`. No `_config.yml` and no `Gemfile` |
| Live sitemap | `/sitemap.xml` lists only `https://houseofcauliman.com/` |
| robots.txt | `Allow: /` and `Sitemap: https://houseofcauliman.com/sitemap.xml` |

`main` currently serves the English XRPL pages only. It does not contain `xrpl/pt-br/` or the other locale directories. `xrpl/index.html.bak_definitions_link` is already on `main` and on the foundation branch. This branch does not add or remove it.

Generated HTML, `catalogs.js`, `release.js`, and `i18n.js` are committed. Pages will serve those files as they are. There is nothing for Pages to compile.

Asset and canonical URLs are absolute (`/xrpl/…`, `/assets/…`, `https://houseofcauliman.com/…`). A crawl of every locale page found 0 relative `href` or `src` values. That matters because a locale lesson is two directories deeper than the English lesson, so a relative `../` would point at the wrong file.

GitHub Pages on Linux is case-sensitive. Directory names are `pt-br` and `zh-cn`. Catalog ids stay `pt-BR` and `zh-CN`. A link that uses the catalog id as a path 404s.

Jekyll is off, so `xrpl/i18n/*.json` and the locale directories are published. Do not remove `.nojekyll`. With Jekyll on, folders whose names start with `_` are dropped, and JSON handling is not the same as a raw copy. This tree has no underscore directories.

The diff from the foundation branch to this branch is only under `xrpl/`. It does not change `sitemap.xml`, `CNAME`, `robots.txt`, or `.nojekyll`.

## Deploy procedure

Do not run these steps as part of this audit. Merging this branch does not publish the site. Publishing happens only when `main` changes, because Pages builds `main` at `/`.

1. On the candidate commit, confirm `xrpl/i18n/release.json`: `en` is `source`. Leave every other language `unapproved` unless a person has accepted that one language. Approving one language does not approve the others.
2. From a clean checkout, run:
   - `node xrpl/i18n/check-catalogs.mjs`
   - `python3 xrpl/i18n/tools/check_behavior.py`
   - `python3 xrpl/i18n/tools/check_release.py`
   - `python3 xrpl/i18n/tools/build_locales.py`
3. `check_release.py` must pass after the build. It fails if generated HTML, `release.js`, or `sitemap.proposed.xml` disagree with `release.json`.
4. Confirm the diff still does not touch `/sitemap.xml`, `CNAME`, `robots.txt`, or `.nojekyll`.
5. Review and merge this branch into `feature/xrpl-layman-i18n-foundation-20261023` only. That merge does not update Pages.
6. Publish later, in a separate reviewed merge from the foundation branch to `main`. Pages then runs `pages-build-deployment` on `main`. There is no build command to add. The committed HTML is what is served.
7. After that merge, confirm the Pages build commit equals the merge commit before sharing any locale URL.
8. Do not copy `xrpl/i18n/sitemap.proposed.xml` over `/sitemap.xml`. While the nine languages are unapproved, the proposed file lists the 13 English XRPL URLs only. Putting it on the live sitemap is a later decision, after a language is actually approved, and it is a separate change from CNAME and `robots.txt`.

## Rollback procedure

Do not run these steps as part of this audit. Do not force-push `main`.

1. To undo a merge that already reached `main`, revert that merge commit on `main` and push the revert. Pages rebuilds the reverted tree. A revert keeps history. A force-push does not.
2. To withdraw one language after it was marked `approved`: set only that language back to `unapproved` in `xrpl/i18n/release.json`, run `python3 xrpl/i18n/tools/build_locales.py`, commit, and merge to `main` through review. The rebuild removes that language from `hreflang` and from `sitemap.proposed.xml`, restores the notice and `noindex`, and removes `data-xrpl-public`. Other languages stay as they were. Keep the locale directories. A shared URL should keep opening and should show the unapproved notice. Deleting the directory is not the rollback.
3. The runtime also downgrades a page when `release.js` says `unapproved`, even if an older HTML file was baked as public. The disk check is still required before deploy, because a crawler that does not run JavaScript trusts the baked tags.
4. To undo a bad review import, restore that language’s catalog, `review-packages/<lang>.csv`, the markdown packet, and `review-packages/approvals/<lang>.json` from the previous commit. The importer does not change `release.json`. Then re-run `node xrpl/i18n/check-catalogs.mjs` and `python3 xrpl/i18n/tools/build_locales.py`.
5. After any publish or revert, confirm `/sitemap.xml`, `CNAME`, and `robots.txt` still match the pre-publish `main` copies unless a separate reviewed change said otherwise.

## Diff, secrets, and cleanup

`git diff origin/feature/xrpl-layman-i18n-foundation-20261023...HEAD` before this audit document was 184 paths, all under `xrpl/`. No files outside `xrpl/`. No change to `sitemap.xml`, `CNAME`, `robots.txt`, or `.nojekyll`.

A scan of that diff and of the uncommitted audit edits found no AWS access-key ids, GitHub tokens, Slack tokens, PEM private keys, or password assignments.

`xrpl/i18n/tools/.gitignore` already ignores `__pycache__/` and `*.pyc`. A local `__pycache__` directory was deleted and was not tracked. No `node_modules` and no screenshots are in the branch. Nothing tracked was unnecessary, so there is no cleanup commit. The inherited `xrpl/index.html.bak_definitions_link` file was left in place because removing it would be a change this branch did not author.

## Checks run on this commit’s parent plus the fail-closed patch

Recorded from this workspace on 2026-10-27. Commands were run after `3f4bb49`. This document is the only later change.

| Check | Result |
| --- | --- |
| `node xrpl/i18n/check-catalogs.mjs` | exit 0. 1013 keys. All 10 languages 100% present, 0 missing, 0 problems |
| `python3 xrpl/i18n/tools/check_behavior.py` | exit 0. 92 quiz buttons, 92 choice ids |
| `python3 xrpl/i18n/tools/check_release.py` | exit 0. Includes the importer self-test, the fake-sample tests, the disk match, the pt-BR flip and reversal, the omitted-key case, and the failed-write restore |
| Static crawl of 13 pages × 10 languages | 0 broken links, 0 quiz mismatches, 0 formula mismatches, 0 SEO issues. Nav report of 2 per language is the known dashboard self-link and the definitions top bar, not a missing lesson |
| Headless Chrome, 10 languages, desktop | `/tmp/xrpl-regress.mjs`. errors `[]`. 13 pages each. 92 quiz clicks each, 0 bad, 0 missing feedback. 19 sampled links, 0 missing. Overflow `[]`. Reserve `3.0 $XRP`, slippage `5.00%`, cap `$2,000` on all 10. Japanese preference rewrites an unprefixed URL to `/xrpl/ja/`. A Spanish locale URL wins over a saved preference. Arabic `dir=rtl` with Latin isolates. Font rasters differ from tofu for all 10 |
| Headless Chrome, desktop and 390×844 mobile | `/tmp/xrpl-quality.mjs`. errors `[]`. Mobile overflow 0 on the dashboard, definitions, usage, investing-reality, and issuer-control for all 10. Mobile reserve `3.0 $XRP`, slippage `5.00%`, ratio `25.0%`, cap `$2,000`. Japanese heading overflow 0. Hindi page overflow 0, tagline line-height 27.2px. Arabic mobile `dir=rtl` |
| Browser release probe | `/tmp/xrpl-release-security.mjs`. errors `[]`. Covered direct URL, omitted-key fallback, stale `release.js` promotion, and the English cluster |

## Commits

| Commit | Subject |
| --- | --- |
| `3f4bb493a334b5fb54e78bc9ba9288980f8a3a24` | Fail closed when a locale is unapproved or a review import fails |
| `3d2b635ce9fa10a41cf788ef565b951fdbb44e03` | Record the release-gate checks and the pull-request refusal |
| `6b279a5b8f4f5c028d7b429b74f77a1607ac9db4` | Add a human CSV importer for XRPL review packets |
| `1b1f59005be932f50689f049db8082ad5a5bff30` | Gate unapproved XRPL translations out of search metadata |

The audit document commit is the tip after this file. `release.json` at that tip still has all nine languages `unapproved`.

## Remaining blockers

- No language has a native-speaker approval. All nine stay `unapproved`. Do not set one to `approved` from this audit.
- This branch cannot be published by itself. Pages serves `main`.
- Opening the pull request needs a collaborator. If the draft request is refused, use the compare URL below. Do not bypass that refusal.

## Recommendation

The unapproved gate holds. An unapproved language is reachable for review and is not indexable or certified, including when a catalog key falls back to English, when the URL is opened directly, when `release.js` says approved but the page was not baked public, and when a write fails. Reviewer imports that fail leave the real catalogs and approval files unchanged.

Review the branch. Do not merge it to `main`, do not deploy it, and do not mark a language approved until a person has accepted that language.

Compare URL: https://github.com/mrcauliman/houseofcauliman/compare/feature/xrpl-layman-i18n-foundation-20261023...cursor/xrpl-layman-i18n-276c?expand=1
