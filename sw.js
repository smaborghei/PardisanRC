self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('report-cards-v2').then((cache) => cache.addAll([
      './', 'index.html', 'main.js', 'template.pdf'
    ]))
  );
});
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
});
