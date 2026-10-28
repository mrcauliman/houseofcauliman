#!/usr/bin/env python3
"""TEST ONLY mechanical declared-state tests; no reviewer authentication."""
import copy
import json
import unittest
from pathlib import Path
from unittest.mock import patch

import check_release as check
import import_review as importer
from build_locales import load_catalogs, render_site, snapshot_sources


class DeclaredStateTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.catalogs = load_catalogs()
        cls.sources = snapshot_sources()
        cls.release_path = check.ROOT / 'xrpl/i18n/release.json'
        cls.original_release = cls.release_path.read_bytes()
        cls.held = copy.deepcopy(check.held_fixture())
        cls.base = render_site(cls.sources, cls.catalogs, cls.held)
        cls.one = copy.deepcopy(cls.held)
        cls.one['languages']['pt-BR'] = 'approved'
        cls.one_files = render_site(cls.sources, cls.catalogs, cls.one)
        cls.mixed = copy.deepcopy(cls.one)
        cls.mixed['languages']['ja'] = 'approved'
        cls.mixed_files = render_site(cls.sources, cls.catalogs, cls.mixed)

    @classmethod
    def tearDownClass(cls):
        assert cls.release_path.read_bytes() == cls.original_release

    def test_presentation_hides_labels_without_changing_release_gates(self):
        hidden = copy.deepcopy(self.held)
        hidden['presentation'] = {'show_review_labels': False}
        files = render_site(self.sources, self.catalogs, hidden)
        self.assertEqual(check.audit_declared_output(files, hidden, self.catalogs), [])
        self.assertEqual(hidden['languages'], self.held['languages'])
        self.assertEqual(files['xrpl/i18n/sitemap.proposed.xml'], self.base['xrpl/i18n/sitemap.proposed.xml'])
        for lang, slug, *_ in check.LANGS:
            for rel in check.PAGES:
                path = 'xrpl/' + (slug + '/' if slug else '') + rel.removeprefix('xrpl/')
                text = files[path]
                self.assertNotIn('xrpl-review-notice', text)
                self.assertNotIn('(under review)', text)
                if lang != 'en':
                    self.assertIn('noindex, follow', text)
                    self.assertNotIn('hreflang=', text)
                    self.assertNotIn('data-xrpl-public', text)
        hidden['presentation']['show_review_labels'] = True
        self.assertEqual(render_site(self.sources, self.catalogs, hidden), self.base)

    def test_invalid_presentation_is_rejected(self):
        for value in [None, [], {'show_review_labels': 'false'}, {'show_review_labels': 0}, {'unknown': False}]:
            declaration = copy.deepcopy(self.held)
            declaration['presentation'] = value
            self.assertTrue(check.declared_state_errors(declaration))

    def test_held_and_mixed_declarations_are_dynamic(self):
        for declaration, files, loc_count in [(self.held,self.base,13), (self.one,self.one_files,26), (self.mixed,self.mixed_files,39)]:
            with self.subTest(public=loc_count):
                self.assertEqual(check.audit_declared_output(files,declaration,self.catalogs),[])
                self.assertEqual(files['xrpl/i18n/sitemap.proposed.xml'].count('<loc>'),loc_count)

    def test_one_approval_does_not_promote_others(self):
        for lang,slug,*_rest in check.LANGS:
            if lang in {'en','pt-BR'}:
                continue
            for rel in check.PAGES:
                text=self.one_files['xrpl/'+slug+'/'+rel.removeprefix('xrpl/')]
                self.assertIn('noindex, follow',text)
                self.assertIn(check.NOTICE,text)
                self.assertNotIn('hreflang=',text)
                self.assertNotIn('data-xrpl-public',text)
            self.assertNotIn('/xrpl/'+slug+'/',self.one_files['xrpl/i18n/sitemap.proposed.xml'])

    def test_withdrawal_restores_held_output(self):
        withdrawn=copy.deepcopy(self.one)
        withdrawn['languages']['pt-BR']='unapproved'
        files=render_site(self.sources,self.catalogs,withdrawn)
        self.assertEqual(files,self.base)
        self.assertEqual(check.audit_declared_output(files,withdrawn,self.catalogs),[])

    def test_invalid_missing_or_unknown_states_cannot_pass(self):
        invalid=[None,{}, {'languages':{}}, {'languages':dict(self.held['languages'],ja='unknown')},
                 {'languages':dict(self.held['languages'],ja=[])}, {'languages':dict(self.held['languages'],en='approved')}]
        missing=copy.deepcopy(self.held)
        del missing['languages']['ja']
        invalid.append(missing)
        extra=copy.deepcopy(self.held)
        extra['languages']['xx']='approved'
        invalid.append(extra)
        for state in invalid:
            with self.subTest(state=state):
                self.assertTrue(check.audit_declared_output(self.base,state,self.catalogs))

    def test_incomplete_approved_catalog_renders_fail_closed(self):
        catalogs=copy.deepcopy(self.catalogs)
        catalogs['ja'].pop(next(iter(catalogs['ja'])))
        declared=copy.deepcopy(self.held)
        declared['languages']['ja']='approved'
        files=render_site(self.sources,catalogs,declared)
        self.assertEqual(check.audit_declared_output(files,declared,catalogs),[])
        self.assertFalse(check.declared_public(declared,catalogs,'ja'))
        self.assertIn('noindex, follow',files['xrpl/ja/definitions.html'])
        self.assertNotIn('hreflang=',files['xrpl/ja/definitions.html'])
        self.assertNotIn('/xrpl/ja/',files['xrpl/i18n/sitemap.proposed.xml'])

    def test_independent_oracle_rejects_each_metadata_tamper(self):
        page='xrpl/ja/definitions.html'
        cases=[(page,self.base[page].replace('noindex, follow','index, follow')),
               (page,self.base[page].replace(check.NOTICE,'Certified')),
               (page,self.base[page].replace('<html ', '<html data-xrpl-public="1" ',1)),
               (page,self.base[page].replace('<!--xrpl-seo-end-->','<link rel="alternate" hreflang="ja" href="https://houseofcauliman.com/xrpl/ja/definitions.html"><!--xrpl-seo-end-->',1)),
               ('xrpl/ja/index.html',self.base['xrpl/ja/index.html'].replace(' (under review)</option>','</option>',1)),
               ('xrpl/i18n/sitemap.proposed.xml',self.base['xrpl/i18n/sitemap.proposed.xml'].replace('</urlset>','<url><loc>https://houseofcauliman.com/xrpl/ja/</loc></url></urlset>'))]
        for path,text in cases:
            with self.subTest(path=path,text=text[:20]):
                files=dict(self.base)
                self.assertNotEqual(text,files[path])
                files[path]=text
                self.assertTrue(check.audit_declared_output(files,self.held,self.catalogs))

    def test_partial_reviews_never_change_release_state(self):
        fields,actual=importer.read_csv(check.ROOT/'xrpl/i18n/review-packages/ja.csv')
        row=copy.deepcopy(actual[0]);key=row['key']
        row.update(approve='approve',reviewer='TEST ONLY FIXTURE',date='2026-10-28')
        english={key:self.catalogs['en'][key]};catalog={key:self.catalogs['ja'][key]}
        before=copy.deepcopy(self.held)
        self.assertEqual(check.packet_decision_errors('ja',[row],english,catalog,None,importer),[])
        self.assertTrue(check.packet_decision_errors('ja',[row],english,catalog,None,importer,True))
        corrected=copy.deepcopy(row);corrected['approve']=''
        record={'language':'ja','rows':{key:{'status':'corrected','reviewer':corrected['reviewer'],'date':corrected['date']}}}
        self.assertEqual(check.packet_decision_errors('ja',[corrected],english,catalog,record,importer),[])
        self.assertTrue(check.packet_decision_errors('ja',[corrected],english,catalog,record,importer,True))
        self.assertFalse(check.declared_public(self.held,self.catalogs,'ja'))
        self.assertEqual(self.held,before)
        self.assertEqual(self.release_path.read_bytes(),self.original_release)
        bad=copy.deepcopy(record);bad['rows'][key]['reviewer']='GPT'
        self.assertTrue(check.packet_decision_errors('ja',[corrected],english,catalog,bad,importer))

    def test_importer_negative_fixtures_discard_real_decisions(self):
        import test_import_review as fixtures
        actual=importer.read_csv(check.ROOT/'xrpl/i18n/review-packages/ja.csv')[1][0]
        pending=dict(actual,approve='approve',reviewer='TEST ONLY FIXTURE',date='2026-10-28')
        before=copy.deepcopy(pending)
        with patch.object(fixtures.import_review,'read_csv',return_value=(importer.COLUMNS,[pending])):
            isolated=fixtures._clone_rows()
        self.assertEqual(pending,before)
        for column in ('approve','correction','reviewer','date'):
            self.assertEqual(isolated[0][column],'')


if __name__=='__main__':
    unittest.main(verbosity=2)
