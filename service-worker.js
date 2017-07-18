var v = '1';
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('cn_blog').then(cache => {

      return cache.addAll([
        '/',
        '/index.html?v=' + v,
        '/assets/css/bootstrap.min.css',
        '/assets/css/main.css?v=' + v,
        '/assets/js/jquery-3.1.1.min.js',
        '/assets/js/bootstrap.min.js',
        '/assets/js/scripts.min.js?v=' + v
      ])
      .then(() => self.skipWaiting());
    })
  )
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(
      event.request, {
        ignoreSearch : true
      }
    ).then(response => {

      return response || fetch(event.request);
    }).catch(function(error) {
      console.log('Fetch failed; returning offline page instead.', error);
    })
  );
});
