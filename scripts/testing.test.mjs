// node --test scripts/testing.test.mjs
// Google Play is in closed testing: a Play link that 404s for a stranger must say so. Every
// built page with a Play badge tags it "closed testing" and says how to join (email).
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const pages = ['index.html', 'go.html', 'go-ar.html', '404.html', ...fs.readdirSync(path.join(repo, 'features')).filter((f) => f.endsWith('.html')).map((f) => `features/${f}`), ...fs.readdirSync(path.join(repo, 'features/en')).map((f) => `features/en/${f}`)];

test('every Play badge is tagged closed testing, with the join email beside it', () => {
  for (const file of pages) {
    const html = fs.readFileSync(path.join(repo, file), 'utf8');
    const badges = html.match(/<a [^>]*class="play"[^>]*>[\s\S]*?<\/a>/g) || [];
    assert.ok(badges.length, `${file}: no Play badge`);
    for (const b of badges) assert.match(b, /<span class="tag">/, `${file}: Play badge without the closed-testing tag`);
    const notes = (html.match(/<p class="testing">[\s\S]*?mailto:hello@mohamedgado.com[\s\S]*?<\/p>/g) || []).length;
    assert.equal(notes, badges.length, `${file}: ${badges.length} Play badges, ${notes} join lines`);
  }
});
