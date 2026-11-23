// Google Play is in closed testing (since Nov 2026; iPhone is live). A stranger tapping the Play
// badge gets "item not found", so the badge carries a "closed testing" tag (beside Google's
// artwork, never drawn on it) and a line under it says how to join: email. The footer partials
// carry the same words by hand. When the Play listing goes public, delete this file, its
// imports, the .tag/.testing CSS and scripts/testing.test.mjs.
export const JOIN = 'mailto:hello@mohamedgado.com?subject=Hadeed%20Android%20closed%20testing';
const T = {
  en: { tag: 'Closed testing', note: 'On Android, Hadeed is in closed testing on Google Play. To join the test, email' },
  ar: { tag: 'اختبار مغلق', note: 'على أندرويد، حديد في مرحلة الاختبار المغلق على Google Play. للانضمام إلى الاختبار راسلنا على' },
};
export const playTag = (lang) => `<span class="tag">${T[lang].tag}</span>`;
export const testingNote = (lang) =>
  `<p class="testing">${T[lang].note} <a href="${JOIN}" dir="ltr">hello@mohamedgado.com</a>.</p>`;
