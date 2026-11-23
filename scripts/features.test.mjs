// node --test scripts/features.test.mjs
// The feature pages are generated from data, so the data is where a mistake hides: a slug that
// is not a file, a related card that points nowhere, a title that Google would cut.
import test from 'node:test';
import assert from 'node:assert/strict';
import { FEATURES, UI } from './features-data.mjs';
import { buildAll } from './build-features.mjs';

const slugs = new Set(FEATURES.map((f) => f.slug));

test('every feature is complete in both languages', () => {
  assert.equal(slugs.size, FEATURES.length, 'duplicate slug');
  for (const f of FEATURES) {
    for (const lang of ['ar', 'en']) {
      const c = f[lang];
      assert.ok(c.points.length >= 4, `${f.slug} ${lang}: points`);
      assert.ok(c.faq.length >= 3, `${f.slug} ${lang}: faq`);
      assert.ok([...c.title].length <= 60, `${f.slug} ${lang}: title ${[...c.title].length}`);
      assert.ok(c.description.length >= 110 && c.description.length <= 170, `${f.slug} ${lang}: description ${c.description.length}`);
    }
    for (const r of f.related) assert.ok(slugs.has(r) && r !== f.slug, `${f.slug}: related ${r}`);
    if (f.shot) assert.ok(UI.en.shotAlt[f.shot] && UI.ar.shotAlt[f.shot], `${f.slug}: shot alt`);
  }
});

test('one page per feature per language, plus both hubs', () => {
  const files = [...buildAll().keys()];
  assert.equal(files.length, FEATURES.length * 2 + 2);
  assert.ok(files.includes('features/index.html') && files.includes('features/en/index.html'));
});

test('a page with an FAQ says so in JSON-LD, with the same questions it shows', () => {
  const html = buildAll().get('features/en/workout-planner.html');
  assert.match(html, /"@type":"FAQPage"/);
  for (const [q] of FEATURES.find((f) => f.slug === 'workout-planner').en.faq) assert.ok(html.includes(`<summary>${q}</summary>`));
  assert.match(html, /"applicationCategory":"HealthApplication"/);
});

// Rafiq's page depth: an offline section and four questions, in the page and in its FAQ schema.
// The built pages on disk are checked too, so a data change that was never rebuilt fails here.
test('every feature page carries the offline section and four FAQ answers', async () => {
  const fs = await import('node:fs');
  const built = buildAll();
  for (const f of FEATURES) {
    for (const lang of ['ar', 'en']) {
      const file = lang === 'ar' ? `features/${f.slug}.html` : `features/en/${f.slug}.html`;
      for (const html of [built.get(file), fs.readFileSync(new URL(`../${file}`, import.meta.url), 'utf8')]) {
        assert.ok(html.includes(`<h2>${f[lang].offline.h}</h2>`), `${file}: offline section`);
        assert.equal((html.match(/"@type":\s*"Question"/g) || []).length, 4, `${file}: FAQ schema`);
      }
    }
  }
});

// The hero phone is each feature page's largest paint: fetched first, with its real 480x1002
// box reserved so nothing shifts when it lands (nafis's 983/985 was copied in by mistake).
test('the hero shot loads first and reserves its real size', () => {
  for (const [file, html] of buildAll()) {
    const img = html.match(/<figure class="shot">[\s\S]*?<img [^>]*>/)?.[0];
    if (!img) continue;
    assert.match(img, /width="480" height="1002"/, `${file}: hero size`);
    assert.match(img, /fetchpriority="high"/, `${file}: hero priority`);
    assert.doesNotMatch(img, /loading="lazy"/, `${file}: hero must not be lazy`);
  }
});
