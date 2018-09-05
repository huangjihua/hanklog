/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ecea4565cf412afd07f0817e47fd0006"
  },
  {
    "url": "assets/css/0.styles.945ee641.css",
    "revision": "0402b999dcff21dc6ff601966f24c85b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4abd0d15.js",
    "revision": "d16fe372f0d744bae9e73c901c6cda0a"
  },
  {
    "url": "assets/js/11.b95ecd79.js",
    "revision": "b3fd477ad293407f258ff41458324153"
  },
  {
    "url": "assets/js/12.bbe95956.js",
    "revision": "47ab7f90515e1845eea7d6b88c75ac0a"
  },
  {
    "url": "assets/js/13.8b17127d.js",
    "revision": "a18aaeff696d71a0c90cba449135a834"
  },
  {
    "url": "assets/js/14.922ecf17.js",
    "revision": "e2b81c0e90a2249d336b8e8d3c2c872a"
  },
  {
    "url": "assets/js/15.c51686db.js",
    "revision": "e614f3a39695727337431b2e8456d1a2"
  },
  {
    "url": "assets/js/2.24ff8c48.js",
    "revision": "c311d9de1c7cab04be626085aa148119"
  },
  {
    "url": "assets/js/3.728e8320.js",
    "revision": "f7b65097f0a03d90f863163b8886cce8"
  },
  {
    "url": "assets/js/4.1e5093c7.js",
    "revision": "23fbce836b6f7ce32d33e1a051e96df4"
  },
  {
    "url": "assets/js/5.fab1034b.js",
    "revision": "9a2d0c178bae0baf87e347e44c877a19"
  },
  {
    "url": "assets/js/6.8418e91c.js",
    "revision": "141055b6db7c716bc883c8c3e51dd284"
  },
  {
    "url": "assets/js/7.8780ca2d.js",
    "revision": "456cccd6a0a36b7a7615a9d10dee8458"
  },
  {
    "url": "assets/js/8.913927bc.js",
    "revision": "c23143bd81d3b9d93583e4c9e1b5c30e"
  },
  {
    "url": "assets/js/9.0b7b27a0.js",
    "revision": "b30e1fc2bc24158614f00e7a9f4736a0"
  },
  {
    "url": "assets/js/app.e3405a50.js",
    "revision": "47db23cf7c37366a444c2c08bb9d129f"
  },
  {
    "url": "basics/EventLoop.html",
    "revision": "d839dd0d65a4034e05628562f2e907e4"
  },
  {
    "url": "basics/index.html",
    "revision": "1777b8e0d49da4f7a6386bf5a4f24f89"
  },
  {
    "url": "basics/web缓存策略.html",
    "revision": "b2d145ff73e5b1490f0bdb4eeef7cd6a"
  },
  {
    "url": "basics/如何学习前端.html",
    "revision": "a5410be2be530ab1f0c5bfe8dbe4c230"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "05ff968e5e6fc3962d542429be00628d"
  },
  {
    "url": "efficiency/index.html",
    "revision": "5b70a87c408a20276c65ca51b90f153b"
  },
  {
    "url": "efficiency/你不知道的构建工具.html",
    "revision": "ff9d1fe9563ef86d84525ed74e40aa07"
  },
  {
    "url": "frame/index.html",
    "revision": "d9d1495f3bec4759c247d0ef4ea61712"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "images/build-tools.jpeg",
    "revision": "8a513b7c6fcf35babd6987f533e08c52"
  },
  {
    "url": "images/eventloop-1.jpg",
    "revision": "3a59c624e6ff95a7e8c5a23c979f5abe"
  },
  {
    "url": "images/fe-pro-tree.jpg",
    "revision": "349d21d387d1b158fdfc5bf7f02edcfc"
  },
  {
    "url": "images/frame.jpg",
    "revision": "5c78cad63c12fd77202dd7b8d7df2f7e"
  },
  {
    "url": "images/front_end_build_tools.png",
    "revision": "367e3e724894f250a8ca709c7eada921"
  },
  {
    "url": "images/module-tools.jpg",
    "revision": "eb4502e5eb69998e568b6097c41d72af"
  },
  {
    "url": "images/what-is-front-end-dev.png",
    "revision": "e63ca0895a3c783f0792148dadd82a46"
  },
  {
    "url": "index.html",
    "revision": "e5c2fd00a68265f390acc5c69047e63d"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "question/index.html",
    "revision": "302ea7a725ee37cda7e0be5d436cab63"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
