/* global workbox:false */

self.importScripts('docs/4.1/assets/js/vendor/workbox-sw.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "docs/4.1/about/boosted-history/index.html",
    "revision": "7f3a2d812b3613265b3e2657be581a7e"
  },
  {
    "url": "docs/4.1/about/boosted-license/index.html",
    "revision": "03d3375d6df3263fe6dee56e08a08d55"
  },
  {
    "url": "docs/4.1/about/brand/index.html",
    "revision": "f1314b1b69d891a25a68ad0af4d1eda3"
  },
  {
    "url": "docs/4.1/about/index.html",
    "revision": "8db500073459b0622d87d1b0e30ba337"
  },
  {
    "url": "docs/4.1/about/license/index.html",
    "revision": "b50ddc54d70ebb2d0e65a02a91416695"
  },
  {
    "url": "docs/4.1/about/orange-brand/index.html",
    "revision": "f68bc35d314ce577c1951afa1363e755"
  },
  {
    "url": "docs/4.1/about/overview/index.html",
    "revision": "a496f55191eeb6a7c01ed0216db8d7ce"
  },
  {
    "url": "docs/4.1/about/translations/index.html",
    "revision": "b221b872ce709d219678e748932e92e3"
  },
  {
    "url": "docs/4.1/assets/brand/bootstrap-outline.svg",
    "revision": "93998c8ffa206f4b730ef50ad20692c5"
  },
  {
    "url": "docs/4.1/assets/brand/bootstrap-punchout.svg",
    "revision": "59cc410ba9e916189b9ea54f03bb4574"
  },
  {
    "url": "docs/4.1/assets/brand/bootstrap-social-logo.png",
    "revision": "1e9e93d863b7811934889f9aac89c7de"
  },
  {
    "url": "docs/4.1/assets/brand/bootstrap-social.png",
    "revision": "56be615bbca4502de5d55d721dae917f"
  },
  {
    "url": "docs/4.1/assets/brand/bootstrap-solid.svg",
    "revision": "ba23603c8668f4fe65dc2c7996053224"
  },
  {
    "url": "docs/4.1/assets/css/docs.min.css",
    "revision": "348657d02b76d03383bc1a3214c3c94e"
  },
  {
    "url": "docs/4.1/assets/img/arbo_zip.png",
    "revision": "f630be720d6ee833ebbc59b724a93556"
  },
  {
    "url": "docs/4.1/assets/img/bill.png",
    "revision": "ac10785c37e9a1d1df37075ad1dec17c"
  },
  {
    "url": "docs/4.1/assets/img/blue.png",
    "revision": "8c055a53a00aa47f17d527e0c4fb2e27"
  },
  {
    "url": "docs/4.1/assets/img/boosted_logo_3D.png",
    "revision": "ab3273ad69111f26fcbdbeb9a3fde68a"
  },
  {
    "url": "docs/4.1/assets/img/boosted-migrate.png",
    "revision": "5406590a3fec02744f75947771993333"
  },
  {
    "url": "docs/4.1/assets/img/boosted-only-components.png",
    "revision": "f81c6faee33a39a5e6d6c7c884b6ce9f"
  },
  {
    "url": "docs/4.1/assets/img/bootstrap-stack.png",
    "revision": "7384412324c769e447d3c4f86e9ff068"
  },
  {
    "url": "docs/4.1/assets/img/bootstrap-themes.png",
    "revision": "3976b58ff407451e8e8b598fdcde2cd2"
  },
  {
    "url": "docs/4.1/assets/img/favicons/android-chrome-192x192.png",
    "revision": "9198316f3ef47449c64234ea53c1dd8e"
  },
  {
    "url": "docs/4.1/assets/img/favicons/android-chrome-512x512.png",
    "revision": "f711fd9fc2cf8d1161c71d0dd54f6061"
  },
  {
    "url": "docs/4.1/assets/img/favicons/apple-touch-icon-114x114.png",
    "revision": "374e0646c40627dd74cd25e5f8885733"
  },
  {
    "url": "docs/4.1/assets/img/favicons/apple-touch-icon-120x120.png",
    "revision": "a29e606e64a2600dc9a85089cf2ce991"
  },
  {
    "url": "docs/4.1/assets/img/favicons/apple-touch-icon-144x144.png",
    "revision": "cda2d1d68fb771b498ab4438bf82e0a8"
  },
  {
    "url": "docs/4.1/assets/img/favicons/apple-touch-icon-152x152.png",
    "revision": "03350d97a531bebe49901c01dea59b8f"
  },
  {
    "url": "docs/4.1/assets/img/favicons/apple-touch-icon-180x180.png",
    "revision": "996f68f20038b8e67265f7f47d98d499"
  },
  {
    "url": "docs/4.1/assets/img/favicons/apple-touch-icon-57x57.png",
    "revision": "df9f376eadef72942c27e33cb0534f7f"
  },
  {
    "url": "docs/4.1/assets/img/favicons/apple-touch-icon-60x60.png",
    "revision": "36fbc1c605635312c12d2098457cd911"
  },
  {
    "url": "docs/4.1/assets/img/favicons/apple-touch-icon-72x72.png",
    "revision": "02de8c7e092c6a9c60ac8d59679c5a95"
  },
  {
    "url": "docs/4.1/assets/img/favicons/apple-touch-icon-76x76.png",
    "revision": "a93e4c0e6cb491e670f1a91400737207"
  },
  {
    "url": "docs/4.1/assets/img/favicons/apple-touch-icon.png",
    "revision": "0b8eb5d372555514483cee59accfec62"
  },
  {
    "url": "docs/4.1/assets/img/favicons/favicon-16x16.png",
    "revision": "deb3878e7b2189826d588260adc030d3"
  },
  {
    "url": "docs/4.1/assets/img/favicons/favicon-32x32.png",
    "revision": "f5afa5449894ce121fefa80d28721c8d"
  },
  {
    "url": "docs/4.1/assets/img/favicons/manifest.json",
    "revision": "964ec5aca056e0257879e18dab88fb08"
  },
  {
    "url": "docs/4.1/assets/img/favicons/ms-icon-310x310.png",
    "revision": "1e4448749b24fef0e33d7e5a4c8ff079"
  },
  {
    "url": "docs/4.1/assets/img/favicons/mstile-144x144.png",
    "revision": "768cdc02ec4f1ae7397d0f463b4655c3"
  },
  {
    "url": "docs/4.1/assets/img/favicons/mstile-150x150.png",
    "revision": "231bf3045f78c5152a9f3343ee3657e8"
  },
  {
    "url": "docs/4.1/assets/img/favicons/mstile-310x150.png",
    "revision": "d9518957dc960582cd978d9c222bde0d"
  },
  {
    "url": "docs/4.1/assets/img/favicons/mstile-310x310.png",
    "revision": "10e2219da3c3f26823f20e31e241bf83"
  },
  {
    "url": "docs/4.1/assets/img/favicons/mstile-70x70.png",
    "revision": "22cf8ead556c9f944a85a652f16b685c"
  },
  {
    "url": "docs/4.1/assets/img/favicons/safari-pinned-tab.svg",
    "revision": "a1c98a0b7a19a3ba4c3101392f92497f"
  },
  {
    "url": "docs/4.1/assets/img/generate_font.png",
    "revision": "d2abb63dde0424a7838ced8a240405e2"
  },
  {
    "url": "docs/4.1/assets/img/green.png",
    "revision": "cc14b61ad187236ff3a742c68fe69b20"
  },
  {
    "url": "docs/4.1/assets/img/import_projects.png",
    "revision": "73afd7dd0a006840e8f5c8cdac63a35a"
  },
  {
    "url": "docs/4.1/assets/img/manage_projects.png",
    "revision": "514010e30c47846bbbb6cd32c027de7c"
  },
  {
    "url": "docs/4.1/assets/img/new_project.png",
    "revision": "615dc66597721814abf869c64dfa2e60"
  },
  {
    "url": "docs/4.1/assets/img/param_export.png",
    "revision": "b1eb455849f8c2366bc30a8f3d076b79"
  },
  {
    "url": "docs/4.1/assets/img/pink.png",
    "revision": "fb002702b28ee61e2c6828132c748e5f"
  },
  {
    "url": "docs/4.1/assets/img/preference.png",
    "revision": "cfc72e61349c4c4ce8bc660f169de97d"
  },
  {
    "url": "docs/4.1/assets/img/select_mode.png",
    "revision": "342c3b2f20f2d23a8a98ffcca2288175"
  },
  {
    "url": "docs/4.1/assets/img/shop.png",
    "revision": "792161716a14290b208db30a629f3f15"
  },
  {
    "url": "docs/4.1/assets/img/templates.png",
    "revision": "9458873adea125092ef7eb68f66d6936"
  },
  {
    "url": "docs/4.1/assets/img/thumb_blue.png",
    "revision": "d9b4c60b69108cc4d761e438f02bb325"
  },
  {
    "url": "docs/4.1/assets/img/thumb_yellow.png",
    "revision": "cdb49b16f88fa5464ad19242ce3353ae"
  },
  {
    "url": "docs/4.1/assets/img/timer.png",
    "revision": "23ffd9dc0e5ab2a697f29e76cd712ca4"
  },
  {
    "url": "docs/4.1/assets/img/unlock.png",
    "revision": "e61d11b7b471415c6f89c220bdbdf778"
  },
  {
    "url": "docs/4.1/assets/img/warning_icon.png",
    "revision": "ec58421625b123af0c7ccf9230cb3a31"
  },
  {
    "url": "docs/4.1/assets/js/docs.min.js",
    "revision": "4e2c61aaa65718d71880421bd5298b45"
  },
  {
    "url": "docs/4.1/assets/js/src/application-boosted.js",
    "revision": "ac06d7a0b6cb70d2d412bc5bae7063f7"
  },
  {
    "url": "docs/4.1/assets/js/src/application.js",
    "revision": "58e9dd04a980d79126d8ea191ced6644"
  },
  {
    "url": "docs/4.1/assets/js/src/ie-emulation-modes-warning.js",
    "revision": "c6e7032adf9bd98ac39e83c83108977b"
  },
  {
    "url": "docs/4.1/assets/js/src/pwa.js",
    "revision": "cac6034355863d6205e66862f6a729f7"
  },
  {
    "url": "docs/4.1/assets/js/src/search.js",
    "revision": "d68b5471c2af6740356dd02e7e059b69"
  },
  {
    "url": "docs/4.1/assets/js/vendor/anchor.min.js",
    "revision": "01e6254e9f69c0c00f05060b0e1990fc"
  },
  {
    "url": "docs/4.1/assets/js/vendor/clipboard.min.js",
    "revision": "3f3688138a1b9fc4ef669ce9056b6674"
  },
  {
    "url": "docs/4.1/assets/js/vendor/holder.min.js",
    "revision": "6266d87979b32f717d298f7adf36984a"
  },
  {
    "url": "docs/4.1/assets/js/vendor/jquery-slim.min.js",
    "revision": "99b0a83cf1b0b1e2cb16041520e87641"
  },
  {
    "url": "docs/4.1/assets/js/vendor/jquery.tablesorter.min.js",
    "revision": "8e0586b3eb8fbe9644dab492f85c6ed7"
  },
  {
    "url": "docs/4.1/assets/js/vendor/popper.min.js",
    "revision": "83fb8c4d9199dce0224da0206423106f"
  },
  {
    "url": "docs/4.1/assets/js/vendor/workbox-sw.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "docs/4.1/boosted-migration/index.html",
    "revision": "6db7416d9fe10635ee2098aea76c9278"
  },
  {
    "url": "docs/4.1/boostwatch/index.html",
    "revision": "57002a77ba519b9027e9c99143b4fadc"
  },
  {
    "url": "docs/4.1/browser-bugs/index.html",
    "revision": "d8a65fd108b7ffd601f38f2f1c45cf8a"
  },
  {
    "url": "docs/4.1/components/alerts/index.html",
    "revision": "799079d94c37ccc2862e69ec80fac933"
  },
  {
    "url": "docs/4.1/components/badge/index.html",
    "revision": "239aab8bdfb26adbeab510495b879013"
  },
  {
    "url": "docs/4.1/components/breadcrumb/index.html",
    "revision": "5637cba159fc8e580644b67e4a3279f5"
  },
  {
    "url": "docs/4.1/components/button-group/index.html",
    "revision": "2e20f6ab64d2755c7822cce3fe178e96"
  },
  {
    "url": "docs/4.1/components/buttons/index.html",
    "revision": "0a8c33ac54a05f40dbafbcfc170194b4"
  },
  {
    "url": "docs/4.1/components/card/index.html",
    "revision": "362b56938d976deb00002a06902d1d0d"
  },
  {
    "url": "docs/4.1/components/carousel/index.html",
    "revision": "8e7fad6e4f1e1099731aa682f65e1684"
  },
  {
    "url": "docs/4.1/components/collapse/index.html",
    "revision": "0c02d02493025678dd751b613c4e1640"
  },
  {
    "url": "docs/4.1/components/custom-carousel/index.html",
    "revision": "c025011300215438a919c7febd467141"
  },
  {
    "url": "docs/4.1/components/dropdowns/index.html",
    "revision": "663ba2f06366479eb8b35f6985a7234e"
  },
  {
    "url": "docs/4.1/components/forms/index.html",
    "revision": "13891c5cf96218e0893aa247f5b11a7d"
  },
  {
    "url": "docs/4.1/components/index.html",
    "revision": "ade0cc7d8521e33548c54983a8948e49"
  },
  {
    "url": "docs/4.1/components/input-group/index.html",
    "revision": "f4f7c99c224daa57dbf9869bc01cfed4"
  },
  {
    "url": "docs/4.1/components/jumbotron/index.html",
    "revision": "4fc51eef4e1957f636b5d9268b032884"
  },
  {
    "url": "docs/4.1/components/list-group/index.html",
    "revision": "2d6a876ab6c07654b2c1425ce4a19560"
  },
  {
    "url": "docs/4.1/components/local-navigation/index.html",
    "revision": "22363b28113435b9f7daac356425e05c"
  },
  {
    "url": "docs/4.1/components/modal/index.html",
    "revision": "51dd99ad587ca2d80dd60ae375de853b"
  },
  {
    "url": "docs/4.1/components/navbar-orange/index.html",
    "revision": "554ad200dd07e126b4bd9e07c66cc11c"
  },
  {
    "url": "docs/4.1/components/navbar/index.html",
    "revision": "8a3b5866ceb984b4d1970374f0b3a9bc"
  },
  {
    "url": "docs/4.1/components/navs/index.html",
    "revision": "15622532a328f1cdce1d1bccc604d6d1"
  },
  {
    "url": "docs/4.1/components/orange-footer/index.html",
    "revision": "9c09e04317010af85567ea9c371409d6"
  },
  {
    "url": "docs/4.1/components/orange-megamenu/index.html",
    "revision": "79b870e4369ea75f722aa5ddeacbd422"
  },
  {
    "url": "docs/4.1/components/orange-popin/index.html",
    "revision": "4e7094a31df7127ed3235f13187b0556"
  },
  {
    "url": "docs/4.1/components/pagination/index.html",
    "revision": "46f20551930c73b4450d1cb15673f7b6"
  },
  {
    "url": "docs/4.1/components/popovers/index.html",
    "revision": "b4e4dc70dba49c1c0fe7652fbe5d982e"
  },
  {
    "url": "docs/4.1/components/priority-nav/index.html",
    "revision": "48f6408ab8a5e5a128edd71ae3d2bbc3"
  },
  {
    "url": "docs/4.1/components/progress/index.html",
    "revision": "65600a70db95524af7e6952f0ff8299e"
  },
  {
    "url": "docs/4.1/components/scroll-up/index.html",
    "revision": "bc7a4831be4795c4d4a00c6ce732042c"
  },
  {
    "url": "docs/4.1/components/scrollspy/index.html",
    "revision": "83c8eaf97b4ec19a2f26993158258a81"
  },
  {
    "url": "docs/4.1/components/stepbar/index.html",
    "revision": "0d9c7ed15462182c2e3bc7b2690d9e9f"
  },
  {
    "url": "docs/4.1/components/tooltips/index.html",
    "revision": "907f90072c81e8f499c79c8865b6a595"
  },
  {
    "url": "docs/4.1/content/code/index.html",
    "revision": "af835cd688cd644fab685d041fc55046"
  },
  {
    "url": "docs/4.1/content/figures/index.html",
    "revision": "6ddcea55e5ee0a47c107d038a7583a7f"
  },
  {
    "url": "docs/4.1/content/images/index.html",
    "revision": "3f76e502095f4be26ed3c8739604537f"
  },
  {
    "url": "docs/4.1/content/index.html",
    "revision": "7d7efc35a483c1c3d5d9d84c31c21f85"
  },
  {
    "url": "docs/4.1/content/reboot/index.html",
    "revision": "b74eef1282f92674c7f02261a43126ec"
  },
  {
    "url": "docs/4.1/content/tables/index.html",
    "revision": "84eec209c16def9f263d69636ab57915"
  },
  {
    "url": "docs/4.1/content/typography/index.html",
    "revision": "cf54dcf54d64471b8327dd4a6a0eb8f2"
  },
  {
    "url": "docs/4.1/dist/css/boosted-grid.css",
    "revision": "154c5e888ecf4da4e87e8bfbfec3bdd8"
  },
  {
    "url": "docs/4.1/dist/css/boosted-grid.min.css",
    "revision": "3774128b689ac4ebf029a8fac173f626"
  },
  {
    "url": "docs/4.1/dist/css/boosted-reboot.css",
    "revision": "85f6d318916f433be49b2554db1b21e2"
  },
  {
    "url": "docs/4.1/dist/css/boosted-reboot.min.css",
    "revision": "546e6f67824fedf0c82d265f820a1ed6"
  },
  {
    "url": "docs/4.1/dist/css/boosted-rtl.css",
    "revision": "eb11ddd18d30fd680ce9296980ea6105"
  },
  {
    "url": "docs/4.1/dist/css/boosted-rtl.min.css",
    "revision": "948558fcbe94941bd4eef8d18993fde2"
  },
  {
    "url": "docs/4.1/dist/css/boosted.css",
    "revision": "7f8462ee2b5040afe123a2dd05cebec5"
  },
  {
    "url": "docs/4.1/dist/css/boosted.min.css",
    "revision": "9d7962c5ddfd52aca0f3e6de27b6f7df"
  },
  {
    "url": "docs/4.1/dist/css/o-rtl.css",
    "revision": "9f6c9aa6514aa5785df3d1a7b00b89be"
  },
  {
    "url": "docs/4.1/dist/css/orangeHelvetica.css",
    "revision": "2d5cdd1a06a55128b6830467c72c9c70"
  },
  {
    "url": "docs/4.1/dist/css/orangeHelvetica.min.css",
    "revision": "e75586ccf155285bbcb88fda3da7440d"
  },
  {
    "url": "docs/4.1/dist/css/orangeIcons.css",
    "revision": "200b6c9059713b5f0fe8fb9a3b4abc05"
  },
  {
    "url": "docs/4.1/dist/css/orangeIcons.min.css",
    "revision": "06de6569a2b4de8dcb682c51525f095b"
  },
  {
    "url": "docs/4.1/dist/css/vendor/swiper.min.css",
    "revision": "f29b1aec530d4ecb1255894948203345"
  },
  {
    "url": "docs/4.1/dist/fonts/HelvNeue55_W1G.svg",
    "revision": "ec80141aa0497e837989ae5650d2b2d7"
  },
  {
    "url": "docs/4.1/dist/fonts/HelvNeue75_W1G.svg",
    "revision": "d49e6dec5d8996c24a282a1d4f3030b6"
  },
  {
    "url": "docs/4.1/dist/fonts/icon-orange.svg",
    "revision": "1f69163afb64dca81826e210cd99ed4d"
  },
  {
    "url": "docs/4.1/dist/img/orange_logo.svg",
    "revision": "086916e9e2d8f8c38d2ecfba359ab991"
  },
  {
    "url": "docs/4.1/dist/js/boosted.bundle.js",
    "revision": "16a9db8d16e8de7796b364ca6f16d9c8"
  },
  {
    "url": "docs/4.1/dist/js/boosted.bundle.min.js",
    "revision": "8a76f7264c6d261c7d8658d0ae363b6a"
  },
  {
    "url": "docs/4.1/dist/js/boosted.js",
    "revision": "61a14904baf121a21eb184aed526a057"
  },
  {
    "url": "docs/4.1/dist/js/boosted.min.js",
    "revision": "b71f8f9ff99ba9266ce163dd59769a74"
  },
  {
    "url": "docs/4.1/dist/js/vendor/swiper.min.js",
    "revision": "317fd00903b68a157500b40495e8d74e"
  },
  {
    "url": "docs/4.1/examples/administration-edition-page/example.css",
    "revision": "8a43544b65e06b9408f16598477e0b07"
  },
  {
    "url": "docs/4.1/examples/administration-edition-page/images/logo-orange.png",
    "revision": "3978402625900ab1deca4e6474bd9c21"
  },
  {
    "url": "docs/4.1/examples/administration-edition-page/index.html",
    "revision": "8609431f9ef3fb50a58a0dac53836489"
  },
  {
    "url": "docs/4.1/examples/administration-mainpage/edit.html",
    "revision": "8609431f9ef3fb50a58a0dac53836489"
  },
  {
    "url": "docs/4.1/examples/administration-mainpage/example.css",
    "revision": "8a43544b65e06b9408f16598477e0b07"
  },
  {
    "url": "docs/4.1/examples/administration-mainpage/images/logo-orange.png",
    "revision": "3978402625900ab1deca4e6474bd9c21"
  },
  {
    "url": "docs/4.1/examples/administration-mainpage/index.html",
    "revision": "176097e210e2fa00b3774062e3d95e2e"
  },
  {
    "url": "docs/4.1/examples/album/album.css",
    "revision": "e884afc370b7f73395903344ed35cea2"
  },
  {
    "url": "docs/4.1/examples/album/index.html",
    "revision": "e1679ea9988df4cee22c3f33fbf50e54"
  },
  {
    "url": "docs/4.1/examples/blog/blog.css",
    "revision": "098be9399aa2bda1a8d62d2c720ab225"
  },
  {
    "url": "docs/4.1/examples/blog/index.html",
    "revision": "444e4e7bcbbd799d9504fc1c8a0901fa"
  },
  {
    "url": "docs/4.1/examples/carousel/carousel.css",
    "revision": "3b49c931ffcdc36b7595cfef61833025"
  },
  {
    "url": "docs/4.1/examples/carousel/index.html",
    "revision": "e860faa0be66c317707d6b50a1f4a621"
  },
  {
    "url": "docs/4.1/examples/checkout/form-validation.css",
    "revision": "8e5fb15c4155f38020798e5c2bfb38b7"
  },
  {
    "url": "docs/4.1/examples/checkout/index.html",
    "revision": "e57fd78bf1091f0ac023babd68c113d9"
  },
  {
    "url": "docs/4.1/examples/content-panel/css/style006.css",
    "revision": "3ba574e0523034b094af1eacc9eb3ae1"
  },
  {
    "url": "docs/4.1/examples/content-panel/index.html",
    "revision": "5f7324600dce678be4731d2b109d7775"
  },
  {
    "url": "docs/4.1/examples/cover/cover.css",
    "revision": "211daf4eee015cb38fb10893c4645bbb"
  },
  {
    "url": "docs/4.1/examples/cover/index.html",
    "revision": "4d59d3bded7fe6b181c7248147d61872"
  },
  {
    "url": "docs/4.1/examples/dashboard-orange-branded/gabarit.css",
    "revision": "c4bd3d14aefa5295f333b21a3d717954"
  },
  {
    "url": "docs/4.1/examples/dashboard-orange-branded/images/Cancel.png",
    "revision": "1c07cf2e5ed7fee1e38a51a6d708d936"
  },
  {
    "url": "docs/4.1/examples/dashboard-orange-branded/images/logo-orange.png",
    "revision": "3978402625900ab1deca4e6474bd9c21"
  },
  {
    "url": "docs/4.1/examples/dashboard-orange-branded/images/Ok.png",
    "revision": "42065eff02ab72c2e8a15e56db793fae"
  },
  {
    "url": "docs/4.1/examples/dashboard-orange-branded/images/Warning.png",
    "revision": "63ad763bb2a0e5cc63d54a9c1e578f6a"
  },
  {
    "url": "docs/4.1/examples/dashboard-orange-branded/index.html",
    "revision": "0d610fc3b566dcc6b4303d06c2a55ecf"
  },
  {
    "url": "docs/4.1/examples/dashboard/dashboard.css",
    "revision": "58e66f4dae74a72052e9c5252171e0f8"
  },
  {
    "url": "docs/4.1/examples/dashboard/index.html",
    "revision": "fcd685b741e50e3a74c56c95f47dbf33"
  },
  {
    "url": "docs/4.1/examples/demo/css/bundle.css",
    "revision": "57083eda50c3ccd26cc6a959c4ebeb42"
  },
  {
    "url": "docs/4.1/examples/demo/index.html",
    "revision": "586215e295d31ee2dcdec05a02017a6b"
  },
  {
    "url": "docs/4.1/examples/demo/js/main.js",
    "revision": "31b186f2d8d4a237ebc8116da93b4dac"
  },
  {
    "url": "docs/4.1/examples/floating-labels/floating-labels.css",
    "revision": "09fa5920e645876f3ba65eb85f4f2b28"
  },
  {
    "url": "docs/4.1/examples/floating-labels/index.html",
    "revision": "e94e7e8688cd95c2523ca30db15b4564"
  },
  {
    "url": "docs/4.1/examples/grid/grid.css",
    "revision": "4cd2e5cc5e19dc692d50ed6f077154ef"
  },
  {
    "url": "docs/4.1/examples/grid/index.html",
    "revision": "5fda7e204e91e560f954d35a3dcae59a"
  },
  {
    "url": "docs/4.1/examples/index.html",
    "revision": "ad38acf78201442eed6b8b252fe91faf"
  },
  {
    "url": "docs/4.1/examples/jumbotron/index.html",
    "revision": "b0ea19cb9d051f1b77202caf3fc7467f"
  },
  {
    "url": "docs/4.1/examples/jumbotron/jumbotron.css",
    "revision": "0ef7edc6babea5a47645bda0c45368aa"
  },
  {
    "url": "docs/4.1/examples/navbar-bottom/index.html",
    "revision": "66710488e5dfe1c8b550cf4fe95083a8"
  },
  {
    "url": "docs/4.1/examples/navbar-fixed/index.html",
    "revision": "853a0bcb3d16bf1023da86b73a1db895"
  },
  {
    "url": "docs/4.1/examples/navbar-fixed/navbar-top-fixed.css",
    "revision": "3d46ddff119cfe2886a34b72aefd42a6"
  },
  {
    "url": "docs/4.1/examples/navbar-static/index.html",
    "revision": "d3d6f92c8de363ef95f8c458a76d1b93"
  },
  {
    "url": "docs/4.1/examples/navbar-static/navbar-top.css",
    "revision": "ae704085e05c4bc6a705b225b03a5aea"
  },
  {
    "url": "docs/4.1/examples/navbars/index.html",
    "revision": "1507db6a56dec362e46f10bada982fec"
  },
  {
    "url": "docs/4.1/examples/navbars/navbar.css",
    "revision": "f95ea8bb033949bba31b05925773e223"
  },
  {
    "url": "docs/4.1/examples/news-template/css/example.css",
    "revision": "4ca6c344281a6904c33130ea0a087348"
  },
  {
    "url": "docs/4.1/examples/news-template/index.html",
    "revision": "d685de0e087a1e21c4fa297e5080a251"
  },
  {
    "url": "docs/4.1/examples/offcanvas/index.html",
    "revision": "4ffe4abbb92b23ae2e7f6fac27362f4a"
  },
  {
    "url": "docs/4.1/examples/offcanvas/offcanvas.css",
    "revision": "708a755e83b96d289c3165ef83e13d9d"
  },
  {
    "url": "docs/4.1/examples/offcanvas/offcanvas.js",
    "revision": "5c0edf2d5a4d88ec65e801c0f58ef23a"
  },
  {
    "url": "docs/4.1/examples/orange-form/form.js",
    "revision": "53d38711d70440ec66baef611c6bf773"
  },
  {
    "url": "docs/4.1/examples/orange-form/images/logo-orange.png",
    "revision": "3978402625900ab1deca4e6474bd9c21"
  },
  {
    "url": "docs/4.1/examples/orange-form/index.html",
    "revision": "14bdc801c80771cb40726efb0dd9e31a"
  },
  {
    "url": "docs/4.1/examples/orange-form/styles.css",
    "revision": "a8b20e7f95048c66bc0d7cb0613a12ff"
  },
  {
    "url": "docs/4.1/examples/orange-grid/index-fluid.html",
    "revision": "d3b86d5e10511f0fd071155fd9f4c346"
  },
  {
    "url": "docs/4.1/examples/orange-grid/index.html",
    "revision": "57196e26f90aa4620d285060d165b154"
  },
  {
    "url": "docs/4.1/examples/orange-grid/styles.css",
    "revision": "89b7506be0f04d9f94cebfe9c43ebcc8"
  },
  {
    "url": "docs/4.1/examples/orange-homepage/images/discovery-frame-carousel-whitetext.png",
    "revision": "4494834274bc03cf4242d5e656d502ac"
  },
  {
    "url": "docs/4.1/examples/orange-homepage/images/discovery-frame-carousel.png",
    "revision": "76d10a9e3f09fa11342512924555dc98"
  },
  {
    "url": "docs/4.1/examples/orange-homepage/images/discovery-frame.png",
    "revision": "bd95ffc357e9f5d6fa0c3386f42f3d5a"
  },
  {
    "url": "docs/4.1/examples/orange-homepage/images/discovery-popout-2byslide.png",
    "revision": "5a15cf11de5c329df0b890c20482753a"
  },
  {
    "url": "docs/4.1/examples/orange-homepage/images/discovery-popout.png",
    "revision": "0f3b8ff70a5b9c8e59ad1359ee5c75c1"
  },
  {
    "url": "docs/4.1/examples/orange-homepage/images/Fun-frame_frame-carousel.png",
    "revision": "c9b2c674634842cb76592f409b0a4960"
  },
  {
    "url": "docs/4.1/examples/orange-homepage/images/logo-orange.png",
    "revision": "3978402625900ab1deca4e6474bd9c21"
  },
  {
    "url": "docs/4.1/examples/orange-homepage/images/popular-services-1.png",
    "revision": "6cea6eeac842c10ea590cdacdd75b9ff"
  },
  {
    "url": "docs/4.1/examples/orange-homepage/images/popular-services-2.png",
    "revision": "13f95d6fb606d4933abb0099254ef5ca"
  },
  {
    "url": "docs/4.1/examples/orange-homepage/images/popular-services-3.png",
    "revision": "db1770e16c587889cf8d2fb17a1c12bf"
  },
  {
    "url": "docs/4.1/examples/orange-homepage/index.html",
    "revision": "8c2d22702629437f1a5ae89334b44710"
  },
  {
    "url": "docs/4.1/examples/orange-homepage/sample.css",
    "revision": "b0f19bce321284ca3cd1615222d9a09e"
  },
  {
    "url": "docs/4.1/examples/pricing/index.html",
    "revision": "578a8fec787edeccdb5386d9c4e31b89"
  },
  {
    "url": "docs/4.1/examples/pricing/pricing.css",
    "revision": "c06793e3c3a28147e7efcec8c2636538"
  },
  {
    "url": "docs/4.1/examples/product-details/css/style012.css",
    "revision": "79e1b949c809293d2e25ccf94e1d050f"
  },
  {
    "url": "docs/4.1/examples/product-details/img/label_discount.png",
    "revision": "bdbf98c0e4356cf6b7ecc94a83d70eba"
  },
  {
    "url": "docs/4.1/examples/product-details/img/picture_device_3.png",
    "revision": "62ee70a0bea3b36c35e4eb4e27571c36"
  },
  {
    "url": "docs/4.1/examples/product-details/img/picture_klif1.png",
    "revision": "e09c5b52ff25065054ad28fb21f1cda2"
  },
  {
    "url": "docs/4.1/examples/product-details/img/stars_sprite.png",
    "revision": "5c6818cfde14e72e0617eac40d5472c4"
  },
  {
    "url": "docs/4.1/examples/product-details/index.html",
    "revision": "905e25a710a03bf47367addf8ed5a2fc"
  },
  {
    "url": "docs/4.1/examples/product/index.html",
    "revision": "81aff3c71c3e217125852b722375aadd"
  },
  {
    "url": "docs/4.1/examples/product/product.css",
    "revision": "e4efe420b0a96e18293c1afeb20ce6d3"
  },
  {
    "url": "docs/4.1/examples/quick-links/css/style002.css",
    "revision": "fd3e4959b40b6cf566e23471ff029e7b"
  },
  {
    "url": "docs/4.1/examples/quick-links/img/icn_facebook_black.png",
    "revision": "575d7dca6f29ec894c6c5afc92dfc94c"
  },
  {
    "url": "docs/4.1/examples/quick-links/img/icn_messaging_black.png",
    "revision": "92af4354304f8c9da5174262f06e3053"
  },
  {
    "url": "docs/4.1/examples/quick-links/img/icn_music_black.png",
    "revision": "0d83230a49789fa50be2adacb4740201"
  },
  {
    "url": "docs/4.1/examples/quick-links/img/icn_top_black.png",
    "revision": "2d4002b5095aace21c88e3699f109b7d"
  },
  {
    "url": "docs/4.1/examples/quick-links/index.html",
    "revision": "47f0c43d7af4fdb2f13ac90080741d02"
  },
  {
    "url": "docs/4.1/examples/rtl-administration-edition-page/example.css",
    "revision": "8a43544b65e06b9408f16598477e0b07"
  },
  {
    "url": "docs/4.1/examples/rtl-administration-edition-page/images/logo-orange.png",
    "revision": "3978402625900ab1deca4e6474bd9c21"
  },
  {
    "url": "docs/4.1/examples/rtl-administration-edition-page/index.html",
    "revision": "958be0ec07fd0ea2d91a7c6e12887f60"
  },
  {
    "url": "docs/4.1/examples/rtl-administration-mainpage/edit.html",
    "revision": "958be0ec07fd0ea2d91a7c6e12887f60"
  },
  {
    "url": "docs/4.1/examples/rtl-administration-mainpage/example.css",
    "revision": "8a43544b65e06b9408f16598477e0b07"
  },
  {
    "url": "docs/4.1/examples/rtl-administration-mainpage/images/logo-orange.png",
    "revision": "3978402625900ab1deca4e6474bd9c21"
  },
  {
    "url": "docs/4.1/examples/rtl-administration-mainpage/index.html",
    "revision": "d26f4ee22c4a9ab2c0002267c81e4413"
  },
  {
    "url": "docs/4.1/examples/rtl-album/album.css",
    "revision": "e884afc370b7f73395903344ed35cea2"
  },
  {
    "url": "docs/4.1/examples/rtl-album/index.html",
    "revision": "0d63338d48013049801a96b38ccc0ab3"
  },
  {
    "url": "docs/4.1/examples/rtl-blog/blog.css",
    "revision": "098be9399aa2bda1a8d62d2c720ab225"
  },
  {
    "url": "docs/4.1/examples/rtl-blog/index.html",
    "revision": "c24022a0f42e6f60f94c15ccdcb40d56"
  },
  {
    "url": "docs/4.1/examples/rtl-carousel/carousel.css",
    "revision": "3b49c931ffcdc36b7595cfef61833025"
  },
  {
    "url": "docs/4.1/examples/rtl-carousel/index.html",
    "revision": "84f5215f24e3b1a4f5bc16edbba6f313"
  },
  {
    "url": "docs/4.1/examples/rtl-checkout/form-validation.css",
    "revision": "8e5fb15c4155f38020798e5c2bfb38b7"
  },
  {
    "url": "docs/4.1/examples/rtl-checkout/index.html",
    "revision": "e2c2a26bf8d04a24cc41f751d4680976"
  },
  {
    "url": "docs/4.1/examples/rtl-content-panel/css/style006.css",
    "revision": "3ba574e0523034b094af1eacc9eb3ae1"
  },
  {
    "url": "docs/4.1/examples/rtl-content-panel/index.html",
    "revision": "d0eb1fa9ab8c723fa096caa92076507e"
  },
  {
    "url": "docs/4.1/examples/rtl-cover/cover.css",
    "revision": "211daf4eee015cb38fb10893c4645bbb"
  },
  {
    "url": "docs/4.1/examples/rtl-cover/index.html",
    "revision": "db1511c28b8aa0962659e415ce1a2a32"
  },
  {
    "url": "docs/4.1/examples/rtl-dashboard-orange-branded/gabarit.css",
    "revision": "c4bd3d14aefa5295f333b21a3d717954"
  },
  {
    "url": "docs/4.1/examples/rtl-dashboard-orange-branded/images/Cancel.png",
    "revision": "1c07cf2e5ed7fee1e38a51a6d708d936"
  },
  {
    "url": "docs/4.1/examples/rtl-dashboard-orange-branded/images/logo-orange.png",
    "revision": "3978402625900ab1deca4e6474bd9c21"
  },
  {
    "url": "docs/4.1/examples/rtl-dashboard-orange-branded/images/Ok.png",
    "revision": "42065eff02ab72c2e8a15e56db793fae"
  },
  {
    "url": "docs/4.1/examples/rtl-dashboard-orange-branded/images/Warning.png",
    "revision": "63ad763bb2a0e5cc63d54a9c1e578f6a"
  },
  {
    "url": "docs/4.1/examples/rtl-dashboard-orange-branded/index.html",
    "revision": "0afc69150b45c64f1fbe97a3e2b34826"
  },
  {
    "url": "docs/4.1/examples/rtl-dashboard/dashboard.css",
    "revision": "58e66f4dae74a72052e9c5252171e0f8"
  },
  {
    "url": "docs/4.1/examples/rtl-dashboard/index.html",
    "revision": "99572672132902d265bad51bbef786e6"
  },
  {
    "url": "docs/4.1/examples/rtl-demo/css/bundle.css",
    "revision": "57083eda50c3ccd26cc6a959c4ebeb42"
  },
  {
    "url": "docs/4.1/examples/rtl-demo/index.html",
    "revision": "728c07be6341b172fbbe6ec9f18d271b"
  },
  {
    "url": "docs/4.1/examples/rtl-demo/js/main.js",
    "revision": "31b186f2d8d4a237ebc8116da93b4dac"
  },
  {
    "url": "docs/4.1/examples/rtl-floating-labels/floating-labels.css",
    "revision": "09fa5920e645876f3ba65eb85f4f2b28"
  },
  {
    "url": "docs/4.1/examples/rtl-floating-labels/index.html",
    "revision": "9a03799e60b0e55ef5ef61221025a295"
  },
  {
    "url": "docs/4.1/examples/rtl-grid/grid.css",
    "revision": "4cd2e5cc5e19dc692d50ed6f077154ef"
  },
  {
    "url": "docs/4.1/examples/rtl-grid/index.html",
    "revision": "7ea3247af7fbab453c9b3db86208daab"
  },
  {
    "url": "docs/4.1/examples/rtl-jumbotron/index.html",
    "revision": "011b92a72121f09b63a42b6f20f909aa"
  },
  {
    "url": "docs/4.1/examples/rtl-jumbotron/jumbotron.css",
    "revision": "0ef7edc6babea5a47645bda0c45368aa"
  },
  {
    "url": "docs/4.1/examples/rtl-navbar-bottom/index.html",
    "revision": "eab7c54167da50a6420b56474093d85c"
  },
  {
    "url": "docs/4.1/examples/rtl-navbar-fixed/index.html",
    "revision": "c3b5efa4237b97e4f4031b5be3e92b76"
  },
  {
    "url": "docs/4.1/examples/rtl-navbar-fixed/navbar-top-fixed.css",
    "revision": "3d46ddff119cfe2886a34b72aefd42a6"
  },
  {
    "url": "docs/4.1/examples/rtl-navbar-static/index.html",
    "revision": "09e5078db41c9f31448fa0ed04af6337"
  },
  {
    "url": "docs/4.1/examples/rtl-navbar-static/navbar-top.css",
    "revision": "ae704085e05c4bc6a705b225b03a5aea"
  },
  {
    "url": "docs/4.1/examples/rtl-navbars/index.html",
    "revision": "314c7b783c47d85cbc4809463fdc23d9"
  },
  {
    "url": "docs/4.1/examples/rtl-navbars/navbar.css",
    "revision": "f95ea8bb033949bba31b05925773e223"
  },
  {
    "url": "docs/4.1/examples/rtl-news-template/css/example.css",
    "revision": "4ca6c344281a6904c33130ea0a087348"
  },
  {
    "url": "docs/4.1/examples/rtl-news-template/index.html",
    "revision": "a3d6bff2d14212574e56d3fa38ba6e09"
  },
  {
    "url": "docs/4.1/examples/rtl-offcanvas/index.html",
    "revision": "dbb31f71fd283f0d41ff63aba1b36342"
  },
  {
    "url": "docs/4.1/examples/rtl-offcanvas/offcanvas.css",
    "revision": "708a755e83b96d289c3165ef83e13d9d"
  },
  {
    "url": "docs/4.1/examples/rtl-offcanvas/offcanvas.js",
    "revision": "5c0edf2d5a4d88ec65e801c0f58ef23a"
  },
  {
    "url": "docs/4.1/examples/rtl-orange-form/form.js",
    "revision": "53d38711d70440ec66baef611c6bf773"
  },
  {
    "url": "docs/4.1/examples/rtl-orange-form/images/logo-orange.png",
    "revision": "3978402625900ab1deca4e6474bd9c21"
  },
  {
    "url": "docs/4.1/examples/rtl-orange-form/index.html",
    "revision": "843443ac5b7b0a494b3e45794fa56e95"
  },
  {
    "url": "docs/4.1/examples/rtl-orange-form/styles.css",
    "revision": "a8b20e7f95048c66bc0d7cb0613a12ff"
  },
  {
    "url": "docs/4.1/examples/rtl-orange-grid/index-fluid.html",
    "revision": "b0cd15205ad3636820bf01e0d15b02e4"
  },
  {
    "url": "docs/4.1/examples/rtl-orange-grid/index.html",
    "revision": "f5337ae12169278fc22d78ee39f74d82"
  },
  {
    "url": "docs/4.1/examples/rtl-orange-grid/styles.css",
    "revision": "89b7506be0f04d9f94cebfe9c43ebcc8"
  },
  {
    "url": "docs/4.1/examples/rtl-orange-homepage/images/discovery-frame-carousel-whitetext.png",
    "revision": "4494834274bc03cf4242d5e656d502ac"
  },
  {
    "url": "docs/4.1/examples/rtl-orange-homepage/images/discovery-frame-carousel.png",
    "revision": "76d10a9e3f09fa11342512924555dc98"
  },
  {
    "url": "docs/4.1/examples/rtl-orange-homepage/images/discovery-frame.png",
    "revision": "bd95ffc357e9f5d6fa0c3386f42f3d5a"
  },
  {
    "url": "docs/4.1/examples/rtl-orange-homepage/images/discovery-popout-2byslide.png",
    "revision": "5a15cf11de5c329df0b890c20482753a"
  },
  {
    "url": "docs/4.1/examples/rtl-orange-homepage/images/discovery-popout.png",
    "revision": "0f3b8ff70a5b9c8e59ad1359ee5c75c1"
  },
  {
    "url": "docs/4.1/examples/rtl-orange-homepage/images/Fun-frame_frame-carousel.png",
    "revision": "c9b2c674634842cb76592f409b0a4960"
  },
  {
    "url": "docs/4.1/examples/rtl-orange-homepage/images/logo-orange.png",
    "revision": "3978402625900ab1deca4e6474bd9c21"
  },
  {
    "url": "docs/4.1/examples/rtl-orange-homepage/images/popular-services-1.png",
    "revision": "6cea6eeac842c10ea590cdacdd75b9ff"
  },
  {
    "url": "docs/4.1/examples/rtl-orange-homepage/images/popular-services-2.png",
    "revision": "13f95d6fb606d4933abb0099254ef5ca"
  },
  {
    "url": "docs/4.1/examples/rtl-orange-homepage/images/popular-services-3.png",
    "revision": "db1770e16c587889cf8d2fb17a1c12bf"
  },
  {
    "url": "docs/4.1/examples/rtl-orange-homepage/index.html",
    "revision": "57c5a0abe4f8843bd1e7685cbfbd854b"
  },
  {
    "url": "docs/4.1/examples/rtl-orange-homepage/sample.css",
    "revision": "b0f19bce321284ca3cd1615222d9a09e"
  },
  {
    "url": "docs/4.1/examples/rtl-pricing/index.html",
    "revision": "da7af9da3d6c503ed283f7e5430ae8ac"
  },
  {
    "url": "docs/4.1/examples/rtl-pricing/pricing.css",
    "revision": "c06793e3c3a28147e7efcec8c2636538"
  },
  {
    "url": "docs/4.1/examples/rtl-product-details/css/style012.css",
    "revision": "79e1b949c809293d2e25ccf94e1d050f"
  },
  {
    "url": "docs/4.1/examples/rtl-product-details/img/label_discount.png",
    "revision": "bdbf98c0e4356cf6b7ecc94a83d70eba"
  },
  {
    "url": "docs/4.1/examples/rtl-product-details/img/picture_device_3.png",
    "revision": "62ee70a0bea3b36c35e4eb4e27571c36"
  },
  {
    "url": "docs/4.1/examples/rtl-product-details/img/picture_klif1.png",
    "revision": "e09c5b52ff25065054ad28fb21f1cda2"
  },
  {
    "url": "docs/4.1/examples/rtl-product-details/img/stars_sprite.png",
    "revision": "5c6818cfde14e72e0617eac40d5472c4"
  },
  {
    "url": "docs/4.1/examples/rtl-product-details/index.html",
    "revision": "0f03c496fa3b7656162f28396b2a0239"
  },
  {
    "url": "docs/4.1/examples/rtl-product/index.html",
    "revision": "5bb810a42f41bd806e90abbd17ae9f8e"
  },
  {
    "url": "docs/4.1/examples/rtl-product/product.css",
    "revision": "e4efe420b0a96e18293c1afeb20ce6d3"
  },
  {
    "url": "docs/4.1/examples/rtl-quick-links/css/style002.css",
    "revision": "fd3e4959b40b6cf566e23471ff029e7b"
  },
  {
    "url": "docs/4.1/examples/rtl-quick-links/img/icn_facebook_black.png",
    "revision": "575d7dca6f29ec894c6c5afc92dfc94c"
  },
  {
    "url": "docs/4.1/examples/rtl-quick-links/img/icn_messaging_black.png",
    "revision": "92af4354304f8c9da5174262f06e3053"
  },
  {
    "url": "docs/4.1/examples/rtl-quick-links/img/icn_music_black.png",
    "revision": "0d83230a49789fa50be2adacb4740201"
  },
  {
    "url": "docs/4.1/examples/rtl-quick-links/img/icn_top_black.png",
    "revision": "2d4002b5095aace21c88e3699f109b7d"
  },
  {
    "url": "docs/4.1/examples/rtl-quick-links/index.html",
    "revision": "a65aadec5a43d5709da60fe0c8ac8f06"
  },
  {
    "url": "docs/4.1/examples/rtl-sign-in/index.html",
    "revision": "90e987d9b334a1e3c8b1e76f6783c5ca"
  },
  {
    "url": "docs/4.1/examples/rtl-sign-in/signin.css",
    "revision": "00e205f17ee0cd3f59d5e1e1e9cf3b3f"
  },
  {
    "url": "docs/4.1/examples/rtl-starter-template/index.html",
    "revision": "a9b7b15f18324c85a9e3adab2d4f4bd2"
  },
  {
    "url": "docs/4.1/examples/rtl-starter-template/starter-template.css",
    "revision": "8cb4aab3660723b641b6458f1a1d3ab1"
  },
  {
    "url": "docs/4.1/examples/rtl-sticky-footer-navbar/index.html",
    "revision": "c883f15ed39fe308d6919d91ebfb3159"
  },
  {
    "url": "docs/4.1/examples/rtl-sticky-footer-navbar/sticky-footer-navbar.css",
    "revision": "a51b70aef5bfe1be8f23dd14cc87af5e"
  },
  {
    "url": "docs/4.1/examples/rtl-sticky-footer/index.html",
    "revision": "96d3191628c491360535e4c581145ed1"
  },
  {
    "url": "docs/4.1/examples/rtl-sticky-footer/sticky-footer.css",
    "revision": "09630d01995ef9c0f8fc9ae622f00466"
  },
  {
    "url": "docs/4.1/examples/rtl-tooltip-viewport/index.html",
    "revision": "0365977b322fc252bf6040d0d6a809b2"
  },
  {
    "url": "docs/4.1/examples/rtl-tooltip-viewport/tooltip-viewport.css",
    "revision": "59ee4352f399bfe798346b4be4a5f88f"
  },
  {
    "url": "docs/4.1/examples/rtl-tooltip-viewport/tooltip-viewport.js",
    "revision": "8b7dceb6d175f264b789114201387bfa"
  },
  {
    "url": "docs/4.1/examples/screenshots/administration-edition-page.png",
    "revision": "63ae598c730eb1c6c991533a82ab4bbc"
  },
  {
    "url": "docs/4.1/examples/screenshots/administration-mainpage.png",
    "revision": "474c038576e57d38921125c3001fb22a"
  },
  {
    "url": "docs/4.1/examples/screenshots/album.png",
    "revision": "0df6fb8df1eb12ee597865519e213012"
  },
  {
    "url": "docs/4.1/examples/screenshots/blog.png",
    "revision": "017a1ea3e00d611371813a5014ba9d6d"
  },
  {
    "url": "docs/4.1/examples/screenshots/carousel.png",
    "revision": "801e2c9ea624c45bf8ac0f55a8b5d2d5"
  },
  {
    "url": "docs/4.1/examples/screenshots/checkout.png",
    "revision": "13148de13c28790f8621b83fb6dd4e74"
  },
  {
    "url": "docs/4.1/examples/screenshots/content-panel.png",
    "revision": "c9818457223448438c5d5e8e03927121"
  },
  {
    "url": "docs/4.1/examples/screenshots/cover.png",
    "revision": "31993dd9d659f71cea403e798e0fbe31"
  },
  {
    "url": "docs/4.1/examples/screenshots/dashboard-orange-branded.png",
    "revision": "adceb4d139ae02b3fb36781bdf076a77"
  },
  {
    "url": "docs/4.1/examples/screenshots/dashboard.png",
    "revision": "d62163e67c381a5dfa97c586d8ee4999"
  },
  {
    "url": "docs/4.1/examples/screenshots/floating-labels.png",
    "revision": "45d5c1f86246e7ba81dacc17fecf74b1"
  },
  {
    "url": "docs/4.1/examples/screenshots/grid.png",
    "revision": "81a3ea4fad82e77080f7dc373aca8a08"
  },
  {
    "url": "docs/4.1/examples/screenshots/jumbotron.png",
    "revision": "d63539577681c87e0dbab26396741cd3"
  },
  {
    "url": "docs/4.1/examples/screenshots/navbar-bottom.png",
    "revision": "b7cfcf7c25348ac5007d835a30e32ea0"
  },
  {
    "url": "docs/4.1/examples/screenshots/navbar-fixed.png",
    "revision": "cdb073013a973d1e4786812a9c13cd38"
  },
  {
    "url": "docs/4.1/examples/screenshots/navbar-static.png",
    "revision": "cf7f59e2c5c13f1f9a23f15e01cd4836"
  },
  {
    "url": "docs/4.1/examples/screenshots/navbars.png",
    "revision": "b269d23436db6d602d6247d82130008b"
  },
  {
    "url": "docs/4.1/examples/screenshots/news-template.png",
    "revision": "3aa08b61314bc815c1069f2f7f567766"
  },
  {
    "url": "docs/4.1/examples/screenshots/offcanvas.png",
    "revision": "d01cf3f7d5d1b0a07732fff249b4102e"
  },
  {
    "url": "docs/4.1/examples/screenshots/orange-form.png",
    "revision": "643cbc72c98d03d8a4d920b09ca3806a"
  },
  {
    "url": "docs/4.1/examples/screenshots/orange-homepage.png",
    "revision": "e8b485b680df418d2b81611674bc244d"
  },
  {
    "url": "docs/4.1/examples/screenshots/pricing.png",
    "revision": "f73c4aa0b4652eac79bb612be65a606d"
  },
  {
    "url": "docs/4.1/examples/screenshots/product-details.png",
    "revision": "0dbc8600c6529be3230b6ed69823fe4a"
  },
  {
    "url": "docs/4.1/examples/screenshots/product.png",
    "revision": "cf8f4bd9ab76ef9156456f0df301802d"
  },
  {
    "url": "docs/4.1/examples/screenshots/quick-links.png",
    "revision": "db46ebdc2d348f8d276b035696085cbd"
  },
  {
    "url": "docs/4.1/examples/screenshots/sign-in.png",
    "revision": "68e2c99063b6d5032fb1015df716ee10"
  },
  {
    "url": "docs/4.1/examples/screenshots/starter-template.png",
    "revision": "a4e0cb634e81143313ca4e45d21e3a40"
  },
  {
    "url": "docs/4.1/examples/screenshots/sticky-footer-navbar.png",
    "revision": "008086ea92971c932779a600d7d0d351"
  },
  {
    "url": "docs/4.1/examples/screenshots/sticky-footer.png",
    "revision": "a269aa921e9275967aeea559ad55e01e"
  },
  {
    "url": "docs/4.1/examples/sign-in/index.html",
    "revision": "63e767a9b5427b36939a4b5f7a70fbef"
  },
  {
    "url": "docs/4.1/examples/sign-in/signin.css",
    "revision": "00e205f17ee0cd3f59d5e1e1e9cf3b3f"
  },
  {
    "url": "docs/4.1/examples/starter-template/index.html",
    "revision": "59f3078eb2074f374c53d850996e97d1"
  },
  {
    "url": "docs/4.1/examples/starter-template/starter-template.css",
    "revision": "8cb4aab3660723b641b6458f1a1d3ab1"
  },
  {
    "url": "docs/4.1/examples/sticky-footer-navbar/index.html",
    "revision": "632b3cd5035b5a901df706048a403c37"
  },
  {
    "url": "docs/4.1/examples/sticky-footer-navbar/sticky-footer-navbar.css",
    "revision": "a51b70aef5bfe1be8f23dd14cc87af5e"
  },
  {
    "url": "docs/4.1/examples/sticky-footer/index.html",
    "revision": "a63a0bf57d68f95cdc7e24003813ebb4"
  },
  {
    "url": "docs/4.1/examples/sticky-footer/sticky-footer.css",
    "revision": "09630d01995ef9c0f8fc9ae622f00466"
  },
  {
    "url": "docs/4.1/examples/tooltip-viewport/index.html",
    "revision": "59c45285b98bc9d3bc140b18d10de006"
  },
  {
    "url": "docs/4.1/examples/tooltip-viewport/tooltip-viewport.css",
    "revision": "59ee4352f399bfe798346b4be4a5f88f"
  },
  {
    "url": "docs/4.1/examples/tooltip-viewport/tooltip-viewport.js",
    "revision": "8b7dceb6d175f264b789114201387bfa"
  },
  {
    "url": "docs/4.1/extend/approach/index.html",
    "revision": "b7988464c7d951fc59f5f9f9c775f0bf"
  },
  {
    "url": "docs/4.1/extend/icons/index.html",
    "revision": "3e1974ba3183c5eea3f7e4f7a75b8f17"
  },
  {
    "url": "docs/4.1/extend/index.html",
    "revision": "23777039828596a5dce92e2920f326ec"
  },
  {
    "url": "docs/4.1/getting-started/accessibility/index.html",
    "revision": "2c5497d102a7e534d2d3a36e48249b16"
  },
  {
    "url": "docs/4.1/getting-started/best-practices/index.html",
    "revision": "bbd5e6df6de11bc35b83a6431cbd1c6b"
  },
  {
    "url": "docs/4.1/getting-started/browsers-devices/index.html",
    "revision": "f1ea6cd42e0e355d0ea89fb02830686c"
  },
  {
    "url": "docs/4.1/getting-started/build-tools/index.html",
    "revision": "fa1c981a0da4f354b3aaf6b71d8fbf4c"
  },
  {
    "url": "docs/4.1/getting-started/contents/index.html",
    "revision": "b0c6d1e01f7862b04f1bbf6d7da0b3df"
  },
  {
    "url": "docs/4.1/getting-started/download/index.html",
    "revision": "455039fa0790db5ede98334bc601587a"
  },
  {
    "url": "docs/4.1/getting-started/index.html",
    "revision": "13d3814c349a708a0047312a4e4911c6"
  },
  {
    "url": "docs/4.1/getting-started/introduction/index.html",
    "revision": "3a0a1e0c6d880221b8d4df2258a05698"
  },
  {
    "url": "docs/4.1/getting-started/javascript/index.html",
    "revision": "34b32df48f13e0f09a8a71901f74225a"
  },
  {
    "url": "docs/4.1/getting-started/options/index.html",
    "revision": "9582b1f3ae59762ed4333fccd0309040"
  },
  {
    "url": "docs/4.1/getting-started/rtl/index.html",
    "revision": "264b9be41e6538128c6e82d0f271ba34"
  },
  {
    "url": "docs/4.1/getting-started/theming/index.html",
    "revision": "45b6cb8e4f1d010b97bc94338594e098"
  },
  {
    "url": "docs/4.1/getting-started/webpack/index.html",
    "revision": "c94f07f00e48f542532dabb91829d369"
  },
  {
    "url": "docs/4.1/history/index.html",
    "revision": "8db500073459b0622d87d1b0e30ba337"
  },
  {
    "url": "docs/4.1/index.html",
    "revision": "13d3814c349a708a0047312a4e4911c6"
  },
  {
    "url": "docs/4.1/layout/grid/index.html",
    "revision": "09cba35eeccff0021d0cbf001b6090e5"
  },
  {
    "url": "docs/4.1/layout/index.html",
    "revision": "6c972a883ac31d2d1bbec9dfcb16c661"
  },
  {
    "url": "docs/4.1/layout/media-object/index.html",
    "revision": "2f284c2624ee682b9015b4715f9aff04"
  },
  {
    "url": "docs/4.1/layout/overview/index.html",
    "revision": "cbdbde00e0bd6dbb9ebe7eb61c9c853a"
  },
  {
    "url": "docs/4.1/layout/utilities-for-layout/index.html",
    "revision": "657cbe10f7ec2d87172b881a0dde9614"
  },
  {
    "url": "docs/4.1/migration/index.html",
    "revision": "d30c55f3d1c55d222eaa8c1a7b50e7e6"
  },
  {
    "url": "docs/4.1/team/index.html",
    "revision": "8db500073459b0622d87d1b0e30ba337"
  },
  {
    "url": "docs/4.1/utilities/borders/index.html",
    "revision": "cd9884c2cd54079cf2d7284f4001c9ab"
  },
  {
    "url": "docs/4.1/utilities/clearfix/index.html",
    "revision": "a5ce2b4df079e8ad01a008805f38e114"
  },
  {
    "url": "docs/4.1/utilities/close-icon/index.html",
    "revision": "5218a00fdc803c6b7e207086cc0d1ef8"
  },
  {
    "url": "docs/4.1/utilities/colors/index.html",
    "revision": "db9053046b56c073a48c409c10a087ce"
  },
  {
    "url": "docs/4.1/utilities/display/index.html",
    "revision": "b879c370176e58b3e472ce4a2f1c7c74"
  },
  {
    "url": "docs/4.1/utilities/embed/index.html",
    "revision": "971ef98d2a6c0c4acb3c7d81d36f942c"
  },
  {
    "url": "docs/4.1/utilities/flex/index.html",
    "revision": "928d201c691cb88f105a50b63cc52968"
  },
  {
    "url": "docs/4.1/utilities/float/index.html",
    "revision": "e97160e8cf08a31cacc1dd54e2687a58"
  },
  {
    "url": "docs/4.1/utilities/image-replacement/index.html",
    "revision": "cd20b5485c4f2e0beb8bfba173519c32"
  },
  {
    "url": "docs/4.1/utilities/index.html",
    "revision": "e443722fc4e1b260e6046c12a4e00572"
  },
  {
    "url": "docs/4.1/utilities/position/index.html",
    "revision": "c0118cd772034e937d131981f0b3a9a9"
  },
  {
    "url": "docs/4.1/utilities/screenreaders/index.html",
    "revision": "aa9c05bf5e1d8ae927294e12cec0ab99"
  },
  {
    "url": "docs/4.1/utilities/shadows/index.html",
    "revision": "6eebacf85d8df312beeea6907425b9ec"
  },
  {
    "url": "docs/4.1/utilities/sizing/index.html",
    "revision": "14e8714f00d53a8f5da72de581da4e9a"
  },
  {
    "url": "docs/4.1/utilities/spacing/index.html",
    "revision": "8f80875272a862b75ff84ddfc2ae2ea0"
  },
  {
    "url": "docs/4.1/utilities/text/index.html",
    "revision": "e3b7cd2faf778a2640a25a677a6b87d6"
  },
  {
    "url": "docs/4.1/utilities/vertical-align/index.html",
    "revision": "08548666aa004cf9975ff5d308777d43"
  },
  {
    "url": "docs/4.1/utilities/visibility/index.html",
    "revision": "4dea0d3f1abd9a21bbb4324682bb7c7b"
  },
  {
    "url": "docs/getting-started/index.html",
    "revision": "13d3814c349a708a0047312a4e4911c6"
  },
  {
    "url": "docs/index.html",
    "revision": "13d3814c349a708a0047312a4e4911c6"
  },
  {
    "url": "examples/index.html",
    "revision": "434f2ddca3179539e995ff4e5e83d26b"
  },
  {
    "url": "index.html",
    "revision": "cab1d07a5705bb6a994aac2ca5e2a3fb"
  },
  {
    "url": "redirects.json",
    "revision": "561f10e272f52434f9d7b7642ffd5149"
  }
])
