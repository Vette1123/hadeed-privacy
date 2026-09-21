# hadeed-privacy

The published privacy policy for **Hadeed** (`com.mohamedgado.hadeed`), the offline
gym log for Android.

- **Privacy policy:** https://vette1123.github.io/hadeed-privacy/
- **App on Google Play:** https://play.google.com/store/apps/details?id=com.mohamedgado.hadeed

The policy URL is referenced from the Google Play listing and from inside the app
(Settings → Privacy policy, and About), so it must always resolve.

## What Hadeed is

An Android gym log. You tap the muscles you want to train on a body map, log your sets,
and watch your numbers move. 500+ exercises with animated illustrations, routines and
plans, five home-screen widgets, a Wear OS companion, and a rest timer that fires on
time. Sixteen languages, including Arabic.

## Why the policy is this short

Hadeed ships **without the Android internet permission** — it is removed from the
manifest explicitly. There is no account, no backend, no analytics SDK and no ad SDK.
Nothing the app stores is capable of leaving the device, so most of a normal privacy
policy has nothing to describe.

If that ever changes, this page is updated *before* the version that changes it ships.

## Layout

| File | Purpose |
|---|---|
| `index.html` | The policy itself, English + Arabic in one self-contained page |
| `404.html` | Fallback for bad paths |
| `robots.txt`, `sitemap.xml` | Indexing |

No build step, no dependencies, no JavaScript. Edit the HTML and push; GitHub Pages
serves it from `main`.
