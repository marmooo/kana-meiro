var CACHE_NAME = "2022-10-20 09:35";
var urlsToCache = [
  "/kana-meiro/",
  "/kana-meiro/index.js",
  "/kana-meiro/words.lst",
  "/kana-meiro/mp3/incorrect1.mp3",
  "/kana-meiro/mp3/cat.mp3",
  "/kana-meiro/mp3/correct3.mp3",
  "/kana-meiro/favicon/favicon.svg",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function (cache) {
        return cache.addAll(urlsToCache);
      }),
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }),
  );
});

self.addEventListener("activate", function (event) {
  var cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        }),
      );
    }),
  );
});
