#!/usr/bin/env python3
"""TEST ONLY: isolated parser/export/apply regressions, never human approval."""
import contextlib
import csv
import hashlib
import io
import json
import subprocess
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

import import_review as m


def tree(root):
    return {p.relative_to(root).as_posix(): hashlib.sha256(p.read_bytes()).hexdigest()
            for p in root.rglob('*') if p.is_file()}


class HardenedImportTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory(prefix='xrpl-test-only-')
        self.root = Path(self.tmp.name)
        self.i18n = self.root / 'site/xrpl/i18n'
        self.packets = self.i18n / 'review-packages'
        self.packets.mkdir(parents=True)
        (self.i18n / 'catalogs').mkdir()
        self.source = 'TEST ONLY seed: keep {s1}, $XRP, XRPL and 0.2.'
        self.translation = 'TEST ONLY 日本語 {s1}, $XRP, XRPL 0.2.'
        self.row = dict.fromkeys(m.COLUMNS, '')
        self.row.update(section_order='1', risk_tier='TEST ONLY', key='fixture.seed',
                        page='Fixture', page_url='/xrpl/definitions.html', heading='TEST ONLY',
                        purpose='Context, with a quoted comma', reader_must_understand='TEST ONLY',
                        english=self.source, translation=self.translation)
        self.english = {'fixture.seed': self.source}
        self.catalog = {'fixture.seed': self.translation}
        for lang, data in [('en', self.english), ('ja', self.catalog)]:
            (self.i18n / f'catalogs/{lang}.json').write_text(json.dumps(data, ensure_ascii=False), encoding='utf-8')
        (self.i18n / 'release.json').write_text('{"TEST_ONLY":true,"languages":{"en":"source","ja":"unapproved"}}', encoding='utf-8')
        self.raw(self.packets / 'ja.csv', [self.row])
        self.md = self.packets / 'ja.md'
        self.md.write_text('### 1.1 `fixture.seed`\n\n- Current translation: '+self.translation+
                           '\n- Approve:\n- Correction:\n- Reviewer:\n- Date:\n', encoding='utf-8')
        self.incoming = self.root / 'incoming/ja.csv'
        self.incoming.parent.mkdir()
        self.raw(self.incoming, [self.row])
        self.stack = contextlib.ExitStack()
        self.stack.enter_context(patch.object(m, 'ROOT', self.root / 'site'))
        self.stack.enter_context(patch.object(m, 'I18N', self.i18n))
        self.stack.enter_context(patch.object(m, 'PACKAGES', self.packets))
        self.stack.enter_context(contextlib.redirect_stdout(io.StringIO()))
        self.stack.enter_context(contextlib.redirect_stderr(io.StringIO()))

    def tearDown(self):
        self.stack.close()
        self.tmp.cleanup()

    def raw(self, path, rows, header=None):
        # Deliberately bypass production export guard to construct hostile TEST ONLY input.
        with path.open('w', encoding='utf-8', newline='') as f:
            writer = csv.writer(f, lineterminator='\n')
            writer.writerow(m.COLUMNS if header is None else header)
            for row in rows:
                writer.writerow([row[c] for c in m.COLUMNS] if isinstance(row, dict) else row)

    def decision(self, **values):
        return dict(self.row, reviewer='TEST ONLY FIXTURE', date='2026-10-28', **values)

    def rejected(self):
        before = tree(self.i18n)
        self.assertEqual(m.main(['ja', str(self.incoming), '--apply']), 1)
        self.assertEqual(before, tree(self.i18n))

    def test_headers(self):
        for header in [[], m.COLUMNS[:-1], m.COLUMNS+['extra'],
                       m.COLUMNS[:-1]+['reviewer'], list(reversed(m.COLUMNS)),
                       [' section_order']+m.COLUMNS[1:]]:
            with self.subTest(header=header):
                self.raw(self.incoming, [self.row], header)
                self.rejected()

    def test_empty_and_header_only(self):
        self.incoming.write_bytes(b'')
        self.rejected()
        self.raw(self.incoming, [])
        self.rejected()

    def test_width_even_blank_decisions(self):
        cells = [self.row[c] for c in m.COLUMNS]
        for values in [cells+['extra'], cells[:-1], []]:
            self.raw(self.incoming, [values])
            self.rejected()

    def test_malformed_quotes_utf8_and_size(self):
        header = ','.join(m.COLUMNS)+'\n'
        for data in [(header+'"unterminated').encode(), (header+'"x"junk,').encode(),
                     b'\xff\xfe', (header+'x'*140000).encode()]:
            self.incoming.write_bytes(data)
            self.rejected()

    def test_bom_and_unicode_roundtrip(self):
        data = self.incoming.read_bytes()
        self.incoming.write_bytes(b'\xef\xbb\xbf'+data)
        fields, rows = m.read_csv(self.incoming)
        self.assertEqual(fields, m.COLUMNS)
        self.assertEqual(rows, [self.row])
        self.assertEqual(m.main(['ja', str(self.incoming)]), 0)
        self.incoming.write_bytes(b'\xef\xbb\xbf\xef\xbb\xbf'+data)
        self.rejected()

    def test_quoted_comma_quote_and_locked_newline(self):
        row = dict(self.row, purpose='Context, "quoted"\nsecond line')
        self.raw(self.packets/'ja.csv', [row])
        self.raw(self.incoming, [row])
        self.assertEqual(m.read_csv(self.incoming)[1], [row])
        self.assertEqual(m.main(['ja', str(self.incoming)]), 0)

    def test_formula_prefixes_and_controls(self):
        for column in ['correction', 'reviewer']:
            for value in ['=1+1', '+1', '-1', '@SUM(1)', '  =1', '\t=1', '\r=1',
                          '\n=1', '\ufeff=1', '\u200b=1', '\u00a0=1', '＝1',
                          'Text\x00hidden', 'Text\tcell']:
                with self.subTest(column=column, value=value):
                    row = self.decision(approve='approve') if column=='reviewer' else self.decision(correction=value)
                    row[column] = value
                    self.raw(self.incoming, [row])
                    self.rejected()

    def test_multiline_editable_fields_rejected(self):
        for column in ['correction', 'reviewer', 'date', 'approve']:
            row = self.decision(approve='approve')
            row[column] = 'Text\n- Approve: approve'
            self.raw(self.incoming, [row])
            self.rejected()

    def test_export_preflight_does_not_truncate(self):
        for column in m.COLUMNS:
            row = dict(self.row)
            row[column] = '\ufeff=1+1'
            target = self.root / 'export.csv'
            target.write_bytes(b'KEEP')
            with self.assertRaises(m.ReviewInputError):
                m._write_csv(target, [row])
            self.assertEqual(target.read_bytes(), b'KEEP')

    def test_tool_names_with_unicode_bypass(self):
        for name in ['GPT', 'automated', 'ＧＰＴ', 'G\u200bPT', '\ufeffChatGPT']:
            self.raw(self.incoming, [dict(self.decision(approve='approve'), reviewer=name)])
            self.rejected()

    def test_token_and_placeholder_boundaries(self):
        for value in ['Text {s1} $XRP XRPLfoo 0.2', 'Text {s1} $XRPfoo XRPL 0.2',
                      'Text $XRP XRPL 0.2', 'Text {s1} $XRP XRPL 0.20']:
            self.raw(self.incoming, [self.decision(correction=value)])
            self.rejected()
        source = dict(self.english, **{'fixture.seed': self.source+' XRPL'})
        row = dict(self.row, english=source['fixture.seed'])
        incoming = dict(row, correction='Text {s1} $XRP XRPL 0.2', reviewer='TEST ONLY FIXTURE', date='2026-10-28')
        self.raw(self.incoming, [incoming])
        self.assertTrue(m.validate('ja', self.incoming, source, self.catalog, [row]))

    def test_actual_japanese_nft_catalog_correction(self):
        real_i18n = Path(__file__).resolve().parents[1]
        key = 'an-nft-doesn-t-always-equal-one-owne.12e690f6'
        english = json.loads((real_i18n/'catalogs/en.json').read_text(encoding='utf-8'))
        japanese = json.loads((real_i18n/'catalogs/ja.json').read_text(encoding='utf-8'))
        row = next(r for r in m.read_csv(real_i18n/'review-packages/ja.csv')[1] if r['key'] == key)
        correction = japanese[key].replace('XRPLは', 'XRPLでは', 1)
        self.assertNotEqual(correction, japanese[key])
        self.assertIn('NFTokenPageオブジェクト', correction)
        self.raw(self.incoming, [dict(row, correction=correction, reviewer='TEST ONLY FIXTURE', date='2026-10-28')])
        self.assertEqual(m.validate('ja', self.incoming, {key: english[key]}, {key: japanese[key]}, [row]), [])
        for token in ['XRPL', 'NFTokenPage']:
            altered = correction.replace(token, token+'foo')
            self.raw(self.incoming, [dict(row, correction=altered, reviewer='TEST ONLY FIXTURE', date='2026-10-28')])
            self.assertTrue(m.validate('ja', self.incoming, {key: english[key]}, {key: japanese[key]}, [row]))

    def test_latin_tokens_touch_non_latin_text(self):
        tokens = ['$XRP', 'XRPL', 'XRPL LAYMAN', 'Xaman', 'Testnet', 'Mainnet',
                  'NFTokenID', 'NFTokenPage', 'TakerGets', 'TakerPays', 'AUGUR',
                  'House of Cauliman', '0.2']
        for token in tokens:
            for left, right in [('日本語', 'は'), ('中文', '让'), ('हिन्दी', 'में')]:
                with self.subTest(token=token, left=left):
                    self.assertIn(token, m.TOKEN.findall(left+token+right))
            for altered in ['a'+token, token+'foo', token+'_suffix']:
                self.assertNotIn(token, m.TOKEN.findall(altered))

    def test_zero_decisions_apply_is_true_noop(self):
        before = tree(self.i18n)
        with patch.object(m.subprocess, 'run') as run:
            self.assertEqual(m.main(['ja', str(self.incoming), '--apply']), 0)
            run.assert_not_called()
        self.assertEqual(tree(self.i18n), before)

    def test_valid_correction_preserves_text_is_not_approval(self):
        correction = '  TEST ONLY 日本語, "引用" {s1} $XRP XRPL 0.2  '
        self.raw(self.incoming, [self.decision(correction=correction)])
        release = (self.i18n/'release.json').read_bytes()
        with patch.object(m.subprocess, 'run') as run:
            self.assertEqual(m.main(['ja', str(self.incoming), '--apply']), 0)
            self.assertEqual(run.call_count, 2)
        self.assertEqual(json.loads((self.i18n/'catalogs/ja.json').read_text(encoding='utf-8'))['fixture.seed'], correction)
        row = m.read_csv(self.packets/'ja.csv')[1][0]
        self.assertEqual(row['approve'], '')
        self.assertEqual(row['translation'], correction)
        record = json.loads((self.packets/'approvals/ja.json').read_text())
        self.assertEqual(record['rows']['fixture.seed']['status'], 'corrected')
        self.assertEqual((self.i18n/'release.json').read_bytes(), release)

    def test_parse_once_no_reopen_race(self):
        self.raw(self.incoming, [self.decision(approve='approve')])
        real_read = m.read_csv
        reads = []
        def change_after_read(path):
            result = real_read(path)
            if path == self.incoming:
                reads.append(path)
                path.write_bytes(b'not,the,validated,input')
            return result
        with patch.object(m, 'read_csv', side_effect=change_after_read), patch.object(m.subprocess, 'run'):
            self.assertEqual(m.main(['ja', str(self.incoming), '--apply']), 0)
        self.assertEqual(len(reads), 1)
        record = json.loads((self.packets/'approvals/ja.json').read_text())
        self.assertEqual(record['rows']['fixture.seed']['status'], 'approved')

    def test_markdown_failure_rolls_back(self):
        self.md.write_text('# TEST ONLY missing key\n', encoding='utf-8')
        self.raw(self.incoming, [self.decision(correction='New {s1} $XRP XRPL 0.2')])
        self.rejected()

    def test_downstream_failure_rolls_back(self):
        self.raw(self.incoming, [self.decision(correction='New {s1} $XRP XRPL 0.2')])
        with patch.object(m.subprocess, 'run', side_effect=subprocess.CalledProcessError(1, ['TEST ONLY'])):
            self.rejected()

    def test_unsupported_language(self):
        before = tree(self.i18n)
        self.assertEqual(m.main(['../en', str(self.incoming), '--apply']), 1)
        self.assertEqual(before, tree(self.i18n))


if __name__ == '__main__':
    unittest.main(verbosity=2)
