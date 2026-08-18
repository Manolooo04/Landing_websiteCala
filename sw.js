const CACHE_NAME = 'cala-shell-v1';
const APP_SHELL = [
  '/',
  '/index.html',
  '/styles.css',
  '/corporate.css',
  '/script.js',
  '/cala-logo.svg',
  '/cala-signature.svg',
  '/404.html',
  '/offline.html'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  if (event.request.mode !== 'navigate') return;

  event.respondWith(
    fetch(event.request).catch(() => caches.match('/offline.html'))
  );
});
