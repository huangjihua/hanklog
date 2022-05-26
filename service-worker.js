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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "25b1a245c4df49452c0241fdc52145e7"
  },
  {
    "url": "assets/css/0.styles.397774a2.css",
    "revision": "d8b0e7679c87d496c5af7adbd3d9b932"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5e1e7c51.js",
    "revision": "8232d3f0a0e56785358cf77dc982add8"
  },
  {
    "url": "assets/js/11.5c4ef481.js",
    "revision": "c4e8317f32a5bc92a1b79a9751dfe6b3"
  },
  {
    "url": "assets/js/12.8839f655.js",
    "revision": "a0102b09623e8f48fe26dea38f3f6a4b"
  },
  {
    "url": "assets/js/13.4e151495.js",
    "revision": "9dfbc29d9731a47a86bc3fc58f0c6be5"
  },
  {
    "url": "assets/js/14.2e9984da.js",
    "revision": "097c745d144c380551a843ca6053107a"
  },
  {
    "url": "assets/js/15.ba17b528.js",
    "revision": "3d5068d5929f11518cd09c94fe0e1a62"
  },
  {
    "url": "assets/js/16.6c3ec204.js",
    "revision": "e827b643c466becc3d8470d7c39b0f42"
  },
  {
    "url": "assets/js/17.2d5f66b8.js",
    "revision": "128c9e36aa1c5edb584e411e2b5b8782"
  },
  {
    "url": "assets/js/18.7d7e5b37.js",
    "revision": "c8cc62c0ede42423d571af45ca011bd1"
  },
  {
    "url": "assets/js/19.5166eb24.js",
    "revision": "24214cb0b3bc199b712b3ac8f84683d9"
  },
  {
    "url": "assets/js/2.8db9fddc.js",
    "revision": "076218f25bf8debadc1a88639c02f1b6"
  },
  {
    "url": "assets/js/20.2c7d7537.js",
    "revision": "c3c8dff7a9452b1436a8451adcd0c7e7"
  },
  {
    "url": "assets/js/21.9d701cf4.js",
    "revision": "c7ad8e11a9483f1d1c11e2ac64036d35"
  },
  {
    "url": "assets/js/22.d56e889e.js",
    "revision": "adf48ba2de016e83816fda77108c3475"
  },
  {
    "url": "assets/js/23.89a88397.js",
    "revision": "aa129ad6e7450720369d1a37bcd149b4"
  },
  {
    "url": "assets/js/24.931cf3b2.js",
    "revision": "46ab494b8b7941d6b5fb42b93d54b97c"
  },
  {
    "url": "assets/js/25.4ca99d02.js",
    "revision": "6bc8d77a9b4671e015efdd6aba147971"
  },
  {
    "url": "assets/js/26.96941710.js",
    "revision": "f7b58cf2c6f5b467cd97ed7534f66d38"
  },
  {
    "url": "assets/js/27.93b5ed5c.js",
    "revision": "4d9b6d917670abebe82b75e6bfb0adc2"
  },
  {
    "url": "assets/js/28.8475ed89.js",
    "revision": "2b8e46eaa9bd1cee3c0426b142a1d8a4"
  },
  {
    "url": "assets/js/29.598c2397.js",
    "revision": "7c381151142527a485cb065dd225462b"
  },
  {
    "url": "assets/js/3.f7aebfc5.js",
    "revision": "8e61f4d43c80c5c29a92406664697df2"
  },
  {
    "url": "assets/js/30.3de844ae.js",
    "revision": "e4b4f3dd30ee69c0f207ebd0ca947507"
  },
  {
    "url": "assets/js/31.44057285.js",
    "revision": "5f4fd9be83ca21b04a8ae1d1a9d341bc"
  },
  {
    "url": "assets/js/32.4d9da630.js",
    "revision": "810ec7ad19fb1a0e44db478ddef5602d"
  },
  {
    "url": "assets/js/33.4ec2f376.js",
    "revision": "087cd5a5f48bc54ddef5fe72981f1ea7"
  },
  {
    "url": "assets/js/34.e1cf0c45.js",
    "revision": "bfa1225d52a3c375f5b7af1a42f21d74"
  },
  {
    "url": "assets/js/35.b70bcf50.js",
    "revision": "ece39b394eff80e6c9ab05f21419600f"
  },
  {
    "url": "assets/js/36.19d099ec.js",
    "revision": "fd9308643da98a627e0077d2ade6a845"
  },
  {
    "url": "assets/js/4.27eb6165.js",
    "revision": "14142baf1ee419f797cda0e1540e709c"
  },
  {
    "url": "assets/js/5.ba79ee64.js",
    "revision": "56332c763908c70dc9f658b821b20e9f"
  },
  {
    "url": "assets/js/6.2c7048c0.js",
    "revision": "1e9b1ace8b7cb0d8c8a01f3def20dd7a"
  },
  {
    "url": "assets/js/7.b2999dac.js",
    "revision": "cceb429932f1239f1cd06aa76ba28077"
  },
  {
    "url": "assets/js/8.273d7777.js",
    "revision": "6e8d43ea70df49358c520813d4ec163b"
  },
  {
    "url": "assets/js/9.42f237ae.js",
    "revision": "23a5d714876b7c0ce7f8f6d063139b11"
  },
  {
    "url": "assets/js/app.e938e4a2.js",
    "revision": "07a4a9a49a51d7f4adaa885279f89513"
  },
  {
    "url": "basics/EventLoop.html",
    "revision": "6e39c07cef690439c7c0b70ea9b0efd8"
  },
  {
    "url": "basics/index.html",
    "revision": "90322a801835726a3b6b13bca73a6283"
  },
  {
    "url": "basics/web缓存策略.html",
    "revision": "9ca4d340f94dce151f508b4254cb0044"
  },
  {
    "url": "basics/如何学习前端.html",
    "revision": "5d4b3a0dbc2947603a77d012a0f5563e"
  },
  {
    "url": "basics/重绘和和回流.html",
    "revision": "4c0cada305a6870d4ce9af318f71103e"
  },
  {
    "url": "css/index.html",
    "revision": "39f1fc8a28423b484941c78b5a3fdf38"
  },
  {
    "url": "css/layout/index.html",
    "revision": "dd7816a371c7fe5ff9b03ea54408c217"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "5076f1a2c709653e7f14d5c4a4d17bd4"
  },
  {
    "url": "efficiency/gulp使用总结.html",
    "revision": "64eb34aa4c03916c076b3e348d3138d2"
  },
  {
    "url": "efficiency/index.html",
    "revision": "e9ec550cb4d38a4c16898ff9f2ad25b7"
  },
  {
    "url": "efficiency/你不知道的构建工具.html",
    "revision": "315b8a798529fcf230a8899073adf086"
  },
  {
    "url": "frame/index.html",
    "revision": "0d4149e255222dd06bb835d26c4667b9"
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
    "url": "images/data-type-change.jpg",
    "revision": "d470ad60245385d5d8d5be1bc078ff40"
  },
  {
    "url": "images/data-type-change.png",
    "revision": "3e0a1d9cf107008836e0b71bb98a6eaf"
  },
  {
    "url": "images/eventloop-1.jpg",
    "revision": "3a59c624e6ff95a7e8c5a23c979f5abe"
  },
  {
    "url": "images/eventloop-2.jpg",
    "revision": "21654d2e72b82610d9b9fdcb5fc9b31f"
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
    "url": "images/Function.prototype.bind.png",
    "revision": "4fd58df4d263bc6208582f5d2975166c"
  },
  {
    "url": "images/module-tools.jpg",
    "revision": "eb4502e5eb69998e568b6097c41d72af"
  },
  {
    "url": "images/obj.__proto__.constructor.png",
    "revision": "6d937fe8232b7a6c6f6940ee6a431ce9"
  },
  {
    "url": "images/obj.__proto__.png",
    "revision": "9bfa35483f4da441350deeac8aca2ea1"
  },
  {
    "url": "images/reflux-redrawing.png",
    "revision": "aeb50e474cb98bd798421dadda17eb9a"
  },
  {
    "url": "images/this.png",
    "revision": "69a475acbeefd3c961dee22851f5b0a2"
  },
  {
    "url": "images/undefined@2x.png",
    "revision": "500891194fbaaa55e1bc48ece4410319"
  },
  {
    "url": "images/what-is-front-end-dev.png",
    "revision": "e63ca0895a3c783f0792148dadd82a46"
  },
  {
    "url": "images/图解原型链.svg",
    "revision": "8b6a8ba9e5e7c1c3900cf48708b96df3"
  },
  {
    "url": "index.html",
    "revision": "d3ab3fdadcfaa0e77967f640ce6b627e"
  },
  {
    "url": "javascript/basics/index.html",
    "revision": "e2b1a42d01ce9af973f4cfd6d66c795a"
  },
  {
    "url": "javascript/basics/JS原始类型有那些.html",
    "revision": "9e6998139b17e510d4e3fbda1ef42580"
  },
  {
    "url": "javascript/basics/作用域问题.html",
    "revision": "4fc5adb8d3218df550a0f92a9db77374"
  },
  {
    "url": "javascript/basics/原型和原型链.html",
    "revision": "0503e65e50ba71b974765169c8bfd6c8"
  },
  {
    "url": "javascript/basics/实用的工具函数.html",
    "revision": "ce90a31428d25bab6b779dd49ffda283"
  },
  {
    "url": "javascript/basics/改变this那些事.html",
    "revision": "462db17e4efe95ba9ec3c32b55ec2ce4"
  },
  {
    "url": "javascript/es5/index.html",
    "revision": "56926374bed8e8f054064cdd2e6ed4c5"
  },
  {
    "url": "javascript/es5/引用数据类型.html",
    "revision": "5824af7b873706ef7e734f261b52ac14"
  },
  {
    "url": "javascript/es6/index.html",
    "revision": "3a8207d21f445e1b6fd4714f455939a2"
  },
  {
    "url": "javascript/es7/index.html",
    "revision": "e109b93fe984cff0c307ff4bb3c5d8fc"
  },
  {
    "url": "javascript/es8/index.html",
    "revision": "7a0ca098a5555f8cc9d89d6e18d36ca9"
  },
  {
    "url": "javascript/index.html",
    "revision": "98793928dd8285a8f87ed513fe475f49"
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
    "revision": "fd6faadb1aa628fa74a59b0f1cc7ed8d"
  },
  {
    "url": "react/17/React源码解析-架构.html",
    "revision": "b04bedd1e85b6535aac75b864ae840dd"
  },
  {
    "url": "react/hooks/useRequest源码解析.html",
    "revision": "8ff90b97fc61d853a435be7c7c8a4868"
  },
  {
    "url": "react/index.html",
    "revision": "5dfeda07e9e6ae98bbf40bf5b31889cb"
  },
  {
    "url": "vue/index.html",
    "revision": "b9b3b731addf0e7d6cc5f5ee23a202fe"
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
