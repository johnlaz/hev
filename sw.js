/* HEV Guide service worker (companion to index.html)
 * - Precaches the page so the guide opens offline. Fonts and the header image are embedded in index.html; the manifest and small icons are cached alongside it.
 * - Pages: network first (so updates arrive), cache as fallback.
 * - Cross-origin requests (YouTube embeds and thumbnails) are never touched.
 * To ship an update: change VERSION, redeploy. Installed copies get a "Reload" prompt.
 */
const VERSION = 'v1.0.1';
const CACHE = 'hev-guide-' + VERSION;
const PRECACHE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-maskable-192.png', './apple-touch-icon.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(PRECACHE)));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('hev-guide-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put('./index.html', copy));
          return res;
        })
        .catch(() => caches.match('./index.html').then((r) => r || caches.match('./')))
    );
    return;
  }

  event.respondWith(
    caches.match(req).then((cached) => {
      const network = fetch(req)
        .then((res) => { if (res && res.ok) caches.open(CACHE).then((c) => c.put(req, res.clone())); return res; })
        .catch(() => cached);
      return cached || network;
    })
  );
});
