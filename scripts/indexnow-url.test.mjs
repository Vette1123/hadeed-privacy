// node --test scripts/indexnow-url.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import { pageUrl } from './indexnow-url.mjs';

const B = 'https://www.mohamedgado.com/projects/hadeed';
test('each changed file maps to the URL the proxy serves it at', () => {
  assert.equal(pageUrl('index.html', B), `${B}/privacy`);
  assert.equal(pageUrl('go-ar.html', B), `${B}/go-ar`);
  assert.equal(pageUrl('features/index.html', B), `${B}/features`);
  assert.equal(pageUrl('features/en/index.html', B), `${B}/features/en`);
  assert.equal(pageUrl('features/week-plan.html', B), `${B}/features/week-plan`);
  assert.equal(pageUrl('features/en/week-plan.html', B), `${B}/features/en/week-plan`);
  assert.equal(pageUrl('features/en/price-alerts.html', B), `${B}/features/en/price-alerts`);
  assert.equal(pageUrl('delete-account.html', B), `${B}/delete-account`);
});
