'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d74922e9d9afdec21d63e77e72655be3",
".git/config": "fa27b7bba498c88cf00fb1499ddf9f90",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ff1a44f6bfa08688cdf2535cd44aca06",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "42f66a616fec2571646bdb5c7ab3a5e1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1a395af85b0e964785e2fa1cb6481e5a",
".git/logs/refs/heads/main": "65757bb195711443deb898a9f51bff15",
".git/logs/refs/heads/master": "df090876c6b4a1092fcfc1ff0ee85b7d",
".git/logs/refs/remotes/origin/main": "42636a31450a33041b20b7e89057192c",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/07/f965a6769f0618c2a166e57b9197d9633e4ae4": "62b1d20e4db36a16a907b7d4b6d8b441",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0d/612e70dce7c951a02e16382160e64125b725db": "e663fb21178b0921bcdb51ff713b3015",
".git/objects/16/87b40abfaf9b374757b1d1b4cc22f569a1cfa9": "dfc185779caeb0831de52614aa2a4a20",
".git/objects/1a/c7fed18a58963392314028c4140cf1d5677b5c": "863298d7e1301ab81f956fb0ea29798a",
".git/objects/1b/e4ac210bb5e73e739aad049428400e820d2731": "6bf560b03885014942af08209f8730cd",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/1f/c703b5ee972e6bb58754f78acafd7fab344f7e": "24461e405b9d43bbbd3c29c21b6965bb",
".git/objects/20/32e1cbbd15c69c4ab9065e9fa433d839e774da": "706760f2d332487efa2d125a36ab78c6",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/55/a565130029ffe9d4cde8cb5762a8ee9d0019e2": "2316f1aecda4cd65612aa27de5b50fa1",
".git/objects/5b/2c242d3c7ff508d01b704bce1bcda55197c3eb": "98da71ddc80ffbcdc1b58e8732341f74",
".git/objects/5f/5e7a9a1c53769c840e6c0162cde61ce4d1ab3f": "f5bf68166e497d38835718989f708ed6",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/3b819f44ac39df919f1caf363486757ae50833": "9d5b0507976d09424fee4a735c039ca4",
".git/objects/63/ccdd4f1df84de2232dc528f0da5dee7eac96c1": "a2249e88d382736ef0910508d91bea3c",
".git/objects/66/bf27eb7a6fba6c5a4c3ce6cf0e6bdd9b90363b": "9f2803b8ee9440a89c69fefd87f351ba",
".git/objects/6a/64dc77c78e7a6808aa68180b4fdee52f0d5a35": "bdddeed19125153bac55a86253b70e18",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/f0369fa4f6ee40553690254f9585c52b86140c": "3b317bfb93d97027d19bb3cecdb3d04b",
".git/objects/8a/c7bbcf0572609b9e15ec02c0b722f38ab5a0d9": "538cb8aaffac51af3700970460c896dc",
".git/objects/8b/8cd4e4df7ee75757cf79d863098bc44524fd03": "b7337634a5d56714edab5dcbd5b1094a",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/9e/9ebf51e13f925db830e56bb1dfc574a2a57b6e": "b64c3c141e49c2273bd82fdb8cf5462d",
".git/objects/a0/dbb3c52de45974a99d87a3e16c35d270bf0f7c": "4575ee7f08a56387d00809aec8c4fc73",
".git/objects/a6/e56db2b08fd42c781646e5ee465274d9c251b4": "b521effb375a85984cffd745b009638c",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/ba/cc1b4e1577c26ddb22d0e762d7d417aa6e26e4": "e904ced4e1c28d22e695d57916c4eafe",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/bd4b6ae4ff399ff2466d121f1c0c211d300671": "058a2b0633ca04c4349f51b33ece8c22",
".git/objects/bc/1046d0348a0ba609204b4bc7a500673a8e304a": "7aad463e8cdc4a254637176f4f5b6471",
".git/objects/bf/54dc9a7f28474e6d2c1b0420cf07ec0a6ae7c5": "187b5f2125de2d430fc2be44fbd87db2",
".git/objects/c7/98a484dd4992924fa13dd89570538b053f33e3": "f7276373ccfc95819428f1e3cbdb83c3",
".git/objects/c8/d6b23f2096196fe9dcbc21bcb5a996e0d88b55": "958075e275a9aab3333256115e1edf20",
".git/objects/c9/598a326205c968af881d6de088470560595756": "4ba8b5b9ba3978ee16880aa038dd3e89",
".git/objects/cf/ec784228c3a3cfefb7623e9f6893bf6654c111": "2f38aa8c11a1ccd38860cb6fb393c751",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/e0/3fbc4b1638f9e3e2185583aee02b138a45dc04": "e0a2905efc5981a9534f24c24ccf1907",
".git/objects/e4/24a14a49d093e6bb01f8b0402c34a46fb28de6": "bff9d78695da04ca70ae0f486a45bad7",
".git/objects/e6/5c55a5b595e20e25bd59a1c8bd161d5b13e8a3": "a790fab1222de456f3faf3ebd3e8b99d",
".git/objects/e8/c70c9f2ec056ac9ece05f873057f7dabd1fd31": "8ce7f3864efbe4bfe941fadc2b983926",
".git/objects/f4/ffd3bfd17faaa84b3f7489e56e6dcee90b93cf": "ae1065da1267d5aa3ff719356356a4aa",
".git/ORIG_HEAD": "871c7684132162b72d89754607573bfb",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "871c7684132162b72d89754607573bfb",
".git/refs/heads/master": "a48e97cb75d2ca45ba9858ac749fc67f",
".git/refs/remotes/origin/main": "871c7684132162b72d89754607573bfb",
"assets/AssetManifest.bin": "b2f65fbda0d603e841188cb4e344c369",
"assets/AssetManifest.json": "1884f99fd7dde8f78eb927134dcd6a04",
"assets/assets/3.json": "942cda9c2445492b4301667a2877894e",
"assets/assets/4.json": "29da33d0a71babd22b8f7c160f42ffa5",
"assets/assets/5.json": "c2d5d674445a7a99c9b25b6d7b94e2ec",
"assets/assets/6.json": "a739b39e29746feddc46d3e50ea605d8",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "37f7e9d5f08836ce848d87a7f7e274c4",
"assets/NOTICES": "c51180e583448141ccd4d2ee7635e720",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "2d7f31ba709d19e365a0556a6b931e6f",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "562c4db0484fa1fd4c75a62f4e940664",
"icons/Icon-512.png": "19626cc55ec5b4a6601a2eca2cfacd8e",
"icons/Icon-maskable-192.png": "562c4db0484fa1fd4c75a62f4e940664",
"icons/Icon-maskable-512.png": "19626cc55ec5b4a6601a2eca2cfacd8e",
"index.html": "171a5fca4064ecad0a9081d59a63598e",
"/": "171a5fca4064ecad0a9081d59a63598e",
"main.dart.js": "6f0f3f64f72ba9aafa5fe7bfb3e6bd64",
"manifest.json": "5288bd471554616e292e65788f01a00b",
"version.json": "5cfc60a9f396f247fa605e985ac79b61"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
