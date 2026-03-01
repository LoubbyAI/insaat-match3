const CACHE='insaat-v1';
const ASSETS=['./', './İnşaat Match-3 v6.html'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));
});

self.addEventListener('fetch',e=>{
  e.respondWith(
    caches.match(e.request).then(r=>r||fetch(e.request))
  );
});
