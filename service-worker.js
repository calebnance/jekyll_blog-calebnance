const cacheName = "cn-blog";

const offlineUrl = "offline.html";

const filesToCache = [
  "/",
  "/index.html",
  offlineUrl,
  "https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css",
  "/assets/css/main.css",
  "https://code.jquery.com/jquery-3.3.1.slim.min.js",
  "https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"
];

self.addEventListener("install", function(e) {
  console.log("[ServiceWorker] Install");
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log("[ServiceWorker] Caching app shell");
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("activate", e => {
  console.log("[ServiceWorker] Activate");
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(
        keyList.map(function(key) {
          if (key !== cacheName) {
            console.log("[ServiceWorker] Removing old cache", key);

            return caches.delete(key);
          }
        })
      );
    })
  );

  return self.clients.claim();
});

self.addEventListener("fetch", event => {
  // request.mode = navigate isn't supported in all browsers
  // so include a check for Accept: text/html header.
  if (
    event.request.mode === "navigate" ||
    (event.request.method === "GET" &&
      event.request.headers.get("accept").includes("text/html"))
  ) {
    event.respondWith(
      fetch(event.request.url).catch(error => {
        // return the offline page
        return caches.match(offlineUrl);
      })
    );
  } else {
    // respond with everything else if we can
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  }

  // event.respondWith(
  //   caches.match(event.request, {ignoreSearch:true}).then(response => {
  //     return response || fetch(event.request);
  //   })
  // );
});
