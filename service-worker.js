self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('cn_blog').then(cache => {

      return cache.addAll([
        '/',
        '/index.html',
        '/assets/css/bootstrap.min.css',
        '/assets/css/main.css',
        '/assets/js/jquery-3.1.1.min.js',
        '/assets/js/bootstrap.min.js',
        '/assets/js/scripts.min.js'
      ])
      .then(() => self.skipWaiting());
    })
  )
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {

      return caches.match(event.request);
    })
  );
});
