const CACHE_NAME = "2024-02-25 09:42";
const urlsToCache = [
  "/kana-meiro/",
  "/kana-meiro/index.js",
  "/kana-meiro/words.lst",
  "/kana-meiro/mp3/incorrect1.mp3",
  "/kana-meiro/mp3/cat.mp3",
  "/kana-meiro/mp3/correct3.mp3",
  "/kana-meiro/favicon/favicon.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName)),
      );
    }),
  );
});
