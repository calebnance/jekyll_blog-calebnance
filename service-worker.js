var cacheName = 'cn-blog';
var filesToCache = [
  '/',
  '/index.html',
  '/assets/css/bootstrap.min.css',
  '/assets/css/main.css',
  '/assets/js/jquery-3.1.1.min.js',
  '/assets/js/bootstrap.min.js'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});
