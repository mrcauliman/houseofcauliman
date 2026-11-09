#!/usr/bin/env python3
"""TEST ONLY: check_release derives language sets/counts instead of hard-coding them."""
import unittest

import check_release as check

TEN = ["en", "pt-BR", "es", "fr", "de", "ja", "ko", "zh-CN", "hi", "ar"]
ELEVEN = TEN + ["sv"]


def release_for(langs):
    return {"languages": {lang: "source" if lang == "en" else "unapproved" for lang in langs}}


def catalogs_for(langs):
    return {lang: {"k": "v"} for lang in langs}


class LanguageSetTests(unittest.TestCase):
    def check_consistent(self, langs):
        release = release_for(langs)
        translated = [lang for lang in langs if lang != "en"]
        self.assertEqual(check.translation_langs(release), translated)
        self.assertEqual(check.language_set_errors(release, catalogs_for(langs), translated, langs), [])
        self.assertEqual(len(check.translation_langs(release)), len(langs) - 1)

    def test_ten_languages_consistent(self):
        self.check_consistent(TEN)

    def test_eleven_languages_consistent(self):
        self.check_consistent(ELEVEN)

    def test_catalog_without_release_entry_is_reported(self):
        errors = check.language_set_errors(release_for(TEN), catalogs_for(ELEVEN), TEN[1:], TEN)
        self.assertTrue(any("catalogs" in e for e in errors))

    def test_release_entry_without_review_package_is_reported(self):
        errors = check.language_set_errors(release_for(ELEVEN), catalogs_for(ELEVEN), TEN[1:], ELEVEN)
        self.assertTrue(any("review languages" in e for e in errors))

    def test_locale_table_mismatch_is_reported(self):
        errors = check.language_set_errors(release_for(ELEVEN), catalogs_for(ELEVEN), ELEVEN[1:], TEN)
        self.assertTrue(any("locale table" in e for e in errors))

    def test_source_must_be_english_only(self):
        release = release_for(TEN)
        release["languages"]["es"] = "source"
        errors = check.language_set_errors(release, catalogs_for(TEN), TEN[1:], TEN)
        self.assertTrue(any("source languages" in e for e in errors))

    def test_count_words(self):
        self.assertEqual(check.count_word(9), "nine")
        self.assertEqual(check.count_word(10), "ten")
        self.assertEqual(check.count_word(40), "40")

    def test_live_tree_is_consistent(self):
        release = check.load_release()
        errors = check.language_set_errors(release, check.load_catalogs(), check.REVIEW_LANGS,
                                           [lang for lang, *_rest in check.LANGS])
        self.assertEqual(errors, [])
        self.assertEqual(check.locale_slugs(), {slug for _l, slug, *_r in check.LANGS if slug})
        self.assertNotIn("pt-br", check.locale_slugs(exclude={"pt-BR"}))


if __name__ == "__main__":
    unittest.main(verbosity=2)
