// Where a reader can follow the person who makes Hadeed. Hadeed has no channel of its own yet;
// these are Mohamed Gado's profiles, the same ones masareef, rafiq and nafis link. The footer icons
// and every page's JSON-LD sameAs are checked against this list (scripts/partials.test.mjs).
// who: 'app' goes in the MobileApplication sameAs, who: 'owner' in the Person's.
export const SOCIAL = [
  { key: 'tiktok', who: 'owner', url: 'https://www.tiktok.com/@vetteop' },
  { key: 'x', who: 'owner', url: 'https://x.com/Sadge1996' },
  { key: 'linkedin', who: 'owner', url: 'https://www.linkedin.com/in/mgado' },
];

const STORES = ['https://apps.apple.com/app/id6837665349', 'https://play.google.com/store/apps/details?id=com.mohamedgado.hadeed'];
export const APP_SAME_AS = [...STORES, ...SOCIAL.filter((s) => s.who === 'app').map((s) => s.url)];
export const PERSON_SAME_AS = SOCIAL.filter((s) => s.who === 'owner').map((s) => s.url);
