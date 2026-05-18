// --- Service Worker ---
// Allows app to run offline by cache/saving
// and loading even when offline

const CACHE_NAME = "catfo-cache-v1";

const urlsToCache = [
    "assignments/catfo/index.html",
    "assignments/catfo/app.html",
    "assignments/catfo/styles.css",
    "assignments/catfo/app.js",
    "assignments/catfo/data.json",
    "images/tuxedo.jpg",
    "images/tortoiseshell.jpg",
    "images/calico.jpg",
    "images/sphynx.jpg",
    "images/maine_coon.jpg"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(res => res || fetch(event.request))
    );
});
