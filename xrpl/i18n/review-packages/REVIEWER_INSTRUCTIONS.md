# Reviewer instructions

These packets are not an approval. An automated check, including the importer below, cannot certify a translation. Only a person edits `xrpl/i18n/release.json`, and only after this review is accepted.

Edit the CSV, not the Markdown. The Markdown is a reading copy of the same 230 rows.

## Who can review

You can review a language if you can read that language and English well enough to check a security warning, and you are a person. Write your name in `reviewer`. The importer rejects a reviewer value that is a tool or a model name (`ai`, `bot`, `gpt`, `chatgpt`, `claude`, `grok`, `llm`, `cursor`, `automated`, `automation`, `machine`, `script`, `model`, `assistant`, `openai`, `anthropic`). Do not sign a row for someone else.

`date` is the day you decided, as `YYYY-MM-DD`.

## What to return

Return one CSV per language. The filename must be exactly the catalog id:

`pt-BR.csv`, `es.csv`, `fr.csv`, `de.csv`, `ja.csv`, `ko.csv`, `zh-CN.csv`, `hi.csv`, `ar.csv`

Keep the header and every row. Do not add or remove keys. Do not edit these columns: `section_order`, `risk_tier`, `key`, `page`, `page_url`, `heading`, `purpose`, `reader_must_understand`, `english`, `translation`.

On each row, fill only `approve`, `correction`, `reviewer`, and `date`.

## Approve or correction

- `approve` means the current `translation` teaches the same fact as `english`, including every “not”, “never”, and “cannot”. The cell must be the lowercase word `approve`, or empty.
- A correction is not an approval. Leave `approve` empty and put the full replacement sentence in `correction`. Do not write a note, a diff, or only the changed words.
- A row cannot have both `approve` and `correction`.
- A blank row is “not reviewed yet”. Leave `reviewer` and `date` empty on blank rows. Sending a blank row does not erase a decision already recorded for that key.
- A quiz answer that is false in English must stay false. Do not “fix” it into the true claim.
- Keep `$XRP`, `XRPL`, `XRPL LAYMAN`, `Xaman`, `Testnet`, `Mainnet`, `NFTokenID`, `NFTokenPage`, `TakerGets`, `TakerPays`, `AUGUR`, `House of Cauliman`, account addresses, the example number `0.2`, and every `{placeholder}` token. The importer rejects a correction that drops one.

## How a returned CSV is incorporated

From the repository root, dry-run first. This writes nothing:

```bash
python3 xrpl/i18n/tools/import_review.py ja path/to/ja.csv
```

Apply only after the dry-run prints no errors:

```bash
python3 xrpl/i18n/tools/import_review.py ja path/to/ja.csv --apply
```

`--apply` does all of the following, and then stops:

1. Checks the key set, the locked columns, the reviewer, the date, and the preserved tokens.
2. Writes a correction into `xrpl/i18n/catalogs/<lang>.json`. An `approve` row does not change the sentence.
3. Records `reviewer`, `date`, and `approved` or `corrected` in `xrpl/i18n/review-packages/approvals/<lang>.json`.
4. Updates the package CSV and the matching Markdown lines. An applied correction becomes the new `translation`, and `correction` is cleared because it has been used.
5. Runs `node xrpl/i18n/check-catalogs.mjs` and `python3 xrpl/i18n/tools/check_behavior.py`. If either fails, it restores the catalog, the package, and the approval file.

The importer never sets `release.json` to `approved`, even when all 230 rows say `approve`. It never claims the language is native-approved. After the import, regenerate pages with `python3 xrpl/i18n/tools/build_locales.py`. A person then decides whether that one language in `release.json` changes from `unapproved` to `approved`. The other languages stay as they are.

`python3 xrpl/i18n/tools/import_review.py --self-test` checks the importer against temporary files and does not touch the catalogs.
