
const CACHE_NAME = 'puntoyoga-v1';
const urlsToCache = [
  'index.html', 'eventi.html', 'mappa.html',
  'profili.html', 'bacheca.html'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(urlsToCache)));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
