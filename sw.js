const CACHE_NAME = 'zimgroceries-v1';
const urlsToCache = [
  '/ZimGroceries/',
  '/ZimGroceries/index.html',
  '/ZimGroceries/luckson27.txt',
  '/ZimGroceries/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
