# hadeed-privacy

The published privacy policy for **Hadeed** (`com.mohamedgado.hadeed`), the offline
gym log for Android and iPhone.

- **Privacy policy:** https://vette1123.github.io/hadeed-privacy/
- **Get Hadeed:** https://hadeed.mohamedgado.com/?s=github&m=repo
- **About the app:** https://www.mohamedgado.com/projects/hadeed
- **Install page:** https://www.mohamedgado.com/projects/hadeed/go (Arabic: https://www.mohamedgado.com/projects/hadeed/go-ar)
- **App on the App Store:** https://apps.apple.com/app/id6837665349
- **App on Google Play:** https://play.google.com/store/apps/details?id=com.mohamedgado.hadeed

The policy URL is referenced from the Google Play listing and from inside the app
(Settings → Privacy policy, and About), so it must always resolve.

## What Hadeed is

A gym log for Android and iPhone. You tap the muscles you want to train on a body map, log your sets,
and watch your numbers move. 500+ exercises with animated illustrations, routines and
plans, five home-screen widgets, a Wear OS companion, and a rest timer that fires on
time. Sixteen languages, including Arabic.

## Why the policy is this short

Everything Hadeed stores stays on the device. There is no account, no backend, no
sync and no ad SDK. Since November 2026 the app sends anonymous usage events and
crash reports to PostHog (EU) so bugs can be found and fixed; the policy lists
exactly what those carry. Workouts, weights, notes, food, photos and the profile
never leave the phone.

If that ever changes, this page is updated *before* the version that changes it ships.

## Layout

| File | Purpose |
|---|---|
| `index.html` | The policy itself, English + Arabic in one self-contained page |
| `404.html` | Fallback for bad paths |
| `robots.txt`, `sitemap.xml` | Indexing |

No build step, no dependencies, no JavaScript. Edit the HTML and push; GitHub Pages
serves it from `main`.
