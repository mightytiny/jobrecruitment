# Distributing KarKhmer as a Standalone App — Plan (postponed)

> **Status:** Wanted, **postponed** as of 2026-06-12 at the user's request.
> Self-contained — a new conversation can read this and execute it.
> The site is already a **PWA** (manifest + `sw.js` service worker, committed
> 2026-06-12, commit `c68eaf7`). "Standalone app" = wrapping that PWA in a native
> shell for the app stores or as a downloadable installer. **No app rewrite needed.**

---

## The recommended path: Android / Google Play via TWA

For a Cambodian job board the audience is overwhelmingly Android, so **Google Play
via a Trusted Web Activity (TWA)** is the high-value target. A TWA is a thin native
Android wrapper that loads the existing PWA full-screen with no browser UI.

### Hard prerequisite — a custom domain (shared with the SMTP work)

A TWA proves it owns the website via a **Digital Asset Links** file served at
`https://<domain>/.well-known/assetlinks.json`. On the current host
`mightytiny.github.io` this can't be placed reliably at the shared root, so
**this is blocked on registering a custom domain** — the *same* domain dependency
as `docs/custom-smtp-plan.md`. **One domain unblocks both.** Point the domain at
GitHub Pages, then host `assetlinks.json` (the build tool generates its contents
from the app's signing-key SHA-256 fingerprint).

### Other prerequisites
- **Google Play Developer account** — $25, one-time.
- A signing key (keystore) — the build tool creates one; **back it up**, it's
  required for every future update.

### Steps (when un-postponed)
1. Register the custom domain and point it at GitHub Pages; confirm the PWA loads
   and is installable from `https://<domain>/`.
2. Generate the Android package from the live manifest, via either:
   - **PWABuilder** (https://www.pwabuilder.com) — paste the manifest URL, download
     the Android package; easiest. **Or**
   - **Bubblewrap** (CLI): `npm i -g @bubblewrap/cli`, `bubblewrap init
     --manifest https://<domain>/manifest.json`, `bubblewrap build`.
3. Take the generated `assetlinks.json` and commit it to the site at
   `/.well-known/assetlinks.json`; redeploy and verify it's served at the domain
   root over HTTPS.
4. Create the Play Console app, upload the `.aab`, fill store listing (title,
   description, screenshots, icon — reuse the 512 icon), set content rating &
   data-safety form, submit for review.
5. After approval, test install from Play on a real device; confirm it opens
   full-screen with no address bar and that Supabase data loads.

**Rough cost:** ~$25 (Play account) + ~$12/year (domain, already needed for SMTP).

---

## Alternative paths (lower priority)

### Sideloadable APK (no store)
The same TWA/Bubblewrap build also produces an `.apk` you can distribute directly
(download link, Telegram). No $25, no review — but users must enable "install from
unknown sources," and there's **no auto-update**. Still cleaner with a real domain
(asset-link verification removes the browser address bar; without it the TWA shows
a Chrome URL bar).

### iOS / App Store
No TWA equivalent. Wrap in a WKWebView via **PWABuilder's iOS path** or
**Capacitor**. Needs an **Apple Developer account ($99/year)** and a **Mac with
Xcode**. Apple scrutinizes thin website wrappers (App Store Guideline 4.2 "minimum
functionality") — risk of rejection unless it feels genuinely app-like. Lower ROI
for a primarily-Android local audience.

### Both Android + iOS from one codebase
**Capacitor** (https://capacitorjs.com) wraps the web app as a native project for
both platforms and allows adding native plugins later (push, camera, etc.). Most
work and cost; requires all the prerequisites above. Consider only if iOS becomes a
real requirement.

---

## Decisions to settle (when resumed)
- Which target(s): Play Store (recommended) / sideloaded APK / iOS / both.
- Which domain to register (shared decision with SMTP — pick one for KarKhmer).
- Tooling: PWABuilder (fastest) vs. Bubblewrap (more control) vs. Capacitor (cross-platform).

## Related / context
- **Depends on the custom domain** from `docs/custom-smtp-plan.md` — register once,
  unblock both.
- PWA groundwork already done: `manifest.json`, `sw.js`, icons (192/512 maskable),
  HTTPS via GitHub Pages.
