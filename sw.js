const CACHE = 'ww1-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './1914_country.jpg',
  './1914_alliance.jpg',
  './1915_country.jpg',
  './1915_alliance.jpg',
  './1916_country.jpg',
  './1916_alliance.jpg',
  './1917_country.jpg',
  './1917_alliance.jpg',
  './1918_country.jpg',
  './1918_alliance.jpg',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).catch(() => {})
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
