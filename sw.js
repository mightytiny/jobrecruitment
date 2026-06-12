/* KarKhmer service worker — makes the site installable and resilient offline.
   Bump CACHE_VERSION whenever the precached shell changes to force an update. */
const CACHE_VERSION = "v1";
const PRECACHE = "karkhmer-shell-" + CACHE_VERSION;
const RUNTIME  = "karkhmer-runtime-" + CACHE_VERSION;

/* The app shell: enough to boot the SPA offline. User data is NOT cached here. */
const SHELL = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(PRECACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== PRECACHE && k !== RUNTIME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;                 // never interfere with writes
  const url = new URL(req.url);

  // Supabase API: always live, never cached (fresh data, auth tokens, privacy).
  if (url.hostname.endsWith(".supabase.co")) return;

  // SPA navigations: try network, fall back to the cached shell when offline.
  if (req.mode === "navigate") {
    e.respondWith(fetch(req).catch(() => caches.match("./index.html")));
    return;
  }

  // Static assets (own files, fonts, pinned CDN script): stale-while-revalidate.
  e.respondWith(
    caches.match(req).then(cached => {
      const fromNet = fetch(req).then(res => {
        if (res && (res.ok || res.type === "opaque")) {
          const copy = res.clone();
          caches.open(RUNTIME).then(c => c.put(req, copy));
        }
        return res;
      }).catch(() => cached);
      return cached || fromNet;
    })
  );
});
