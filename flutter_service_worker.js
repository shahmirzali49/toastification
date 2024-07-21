'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "fb2462c18d06a8994ae42cc32f33ed18",
"version.json": "940f4245fc50eb50608c49acd66f5695",
"index.html": "8e81168c048335e5f501b07f18bc0b04",
"/": "8e81168c048335e5f501b07f18bc0b04",
"main.dart.js": "eced8b17a1cd0b633ff34c239cadb098",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"icons/favicon-16x16.png": "c2177fdcfed0c4b3c87d1456f213753d",
"icons/favicon.ico": "e4519f2b852c75f4e04c97c14c4e584f",
"icons/apple-icon.png": "effca59aea8d80791031863ac701f61c",
"icons/apple-icon-144x144.png": "89f3c119b1b430b670a3898ec961cdca",
"icons/android-icon-192x192.png": "589df1faebc62f8bd13933a012a29be1",
"icons/apple-icon-precomposed.png": "effca59aea8d80791031863ac701f61c",
"icons/apple-icon-114x114.png": "0b29890d82d9ee2b24fabd6983e19168",
"icons/ms-icon-310x310.png": "4a5ecd6080a93698c6503486e4692211",
"icons/ms-icon-144x144.png": "89f3c119b1b430b670a3898ec961cdca",
"icons/apple-icon-57x57.png": "4c35c7479179147f44f5c2c3fda1e5a3",
"icons/apple-icon-152x152.png": "f60f673a363d82d8db75df5f954cef6e",
"icons/ms-icon-150x150.png": "b1b70204ece7c1ae3b9eb6ac6d4360e6",
"icons/android-icon-72x72.png": "1b41ef926833226b1c0e967d6b29174e",
"icons/android-icon-96x96.png": "38a84d02fd9833b99aee0784ee8553ef",
"icons/android-icon-36x36.png": "3069231152a72ca4fa634965cc9c4a04",
"icons/apple-icon-180x180.png": "d8f0460ccc9dac5d836a17d8b2e67bf8",
"icons/favicon-96x96.png": "38a84d02fd9833b99aee0784ee8553ef",
"icons/android-icon-48x48.png": "a88bf7ba97878223028eaed1c93e2daf",
"icons/apple-icon-76x76.png": "53cc82116ee3f58227e68f555cdfbbaa",
"icons/apple-icon-60x60.png": "fde0e09b055400f78e8e04e9ddf1eed7",
"icons/android-icon-144x144.png": "89f3c119b1b430b670a3898ec961cdca",
"icons/apple-icon-72x72.png": "1b41ef926833226b1c0e967d6b29174e",
"icons/apple-icon-120x120.png": "cd26dca0c13ceb4dc3d35ab244f213a6",
"icons/favicon-32x32.png": "14d0f24b3062c9b0c1a75e44393aeac5",
"icons/ms-icon-70x70.png": "a13df21697774e7fb355f7e14648a715",
"manifest.json": "18c40e5295a9a6710aaca8f6f3d6b755",
"assets/AssetManifest.json": "2b5657118e8c9623251c02db750db51b",
"assets/NOTICES": "39857b361b2a724ba18563a5e198978c",
"assets/FontManifest.json": "cdb6071e0673e404dcd4f3236b4f4d12",
"assets/AssetManifest.bin.json": "2f091d3e041fcd5e138194dc4c0bcfdb",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "877d5545d71f876ca7c132b892783566",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b392c64816c3c79d6e4b75fcf7396761",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d470823896264f6eae40be08a5697373",
"assets/fonts/PlusJakartaDisplay-Regular.otf": "a81ce9b45769e9a0227e6949a9b4b9c8",
"assets/fonts/PlusJakartaDisplay-Medium.otf": "1f27f846a2a8e5c0b3162e3fb1d78865",
"assets/fonts/MaterialIcons-Regular.otf": "b987792e3a65eec715f5f649c67d0c94",
"assets/fonts/PlusJakartaDisplay-Bold.otf": "1e5642fdde54004e7ac175ceb48b9a1f",
"assets/assets/img/logo-black.png": "7a16ec0e03fabd3d5e268cf807485292",
"assets/assets/img/logo-img.svg": "7e1092f1a6939fbbc3adfe8d6eafbee4",
"assets/assets/img/header.png": "f4b42583f7da6fc92639c13963a5dc6a",
"assets/assets/img/logo.png": "9787b56968ffe49b4720329f3dede579",
"assets/assets/img/logo-text.svg": "7e95427570ff2cfacc2000b26393c090",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
