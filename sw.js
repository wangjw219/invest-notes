// 最小 service worker：让 PWA 可安装（添加到主屏幕）
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open("invest-notes-v1").then((c) => c.addAll([".", "manifest.webmanifest"])));
  self.skipWaiting();
});
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((hit) => hit ?? fetch(e.request)),
  );
});
