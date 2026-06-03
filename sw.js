// KarKhmer service worker — app-shell caching.
// Bump CACHE when you change any precached file so clients pick up the new version.
const CACHE = "karkhmer-v2";
const ASSETS = [
  "./",
  "./index.html",
  "./app.js",
  "./style.css",
  "./manifest.json",
  "./hero.jpg",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  // Only handle same-origin GETs. Supabase/CDN/font requests fall through to the network.
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;

  // Navigations: serve cached shell, fall back to network, then offline to index.html.
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req).catch(() => caches.match(req).then((r) => r || caches.match("./index.html")))
    );
    return;
  }

  // Static assets: cache-first, then network (and cache a copy for next time).
  e.respondWith(
    caches.match(req).then((cached) =>
      cached ||
      fetch(req).then((res) => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      })
    )
  );
});
