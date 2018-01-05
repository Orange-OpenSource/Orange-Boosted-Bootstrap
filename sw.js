self.importScripts('/assets/js/vendor/workbox-sw.prod.v2.1.2.js')

const workboxSW = new self.WorkboxSW()
workboxSW.precache([
  {
    "url": "assets/brand/bootstrap-outline.svg",
    "revision": "9537646a9202cb5dca44e9034c1b414b"
  },
  {
    "url": "assets/brand/bootstrap-punchout.svg",
    "revision": "372e344ac243c4fa7c6c8b8a2af0e5ff"
  },
  {
    "url": "assets/brand/bootstrap-social-logo.png",
    "revision": "1e9e93d863b7811934889f9aac89c7de"
  },
  {
    "url": "assets/brand/bootstrap-social.png",
    "revision": "56be615bbca4502de5d55d721dae917f"
  },
  {
    "url": "assets/brand/bootstrap-solid.svg",
    "revision": "ea931a5b98a97e8b8658d9f6d537329e"
  },
  {
    "url": "assets/css/docs.min.css",
    "revision": "b2ecf45f44df92d8e4aef4d5a4c9f100"
  },
  {
    "url": "assets/img/arbo_zip.png",
    "revision": "f630be720d6ee833ebbc59b724a93556"
  },
  {
    "url": "assets/img/bill.png",
    "revision": "ac10785c37e9a1d1df37075ad1dec17c"
  },
  {
    "url": "assets/img/blue.png",
    "revision": "8c055a53a00aa47f17d527e0c4fb2e27"
  },
  {
    "url": "assets/img/boosted logo 3D.png",
    "revision": "dc18291fe3d255c77a10c82338d677ab"
  },
  {
    "url": "assets/img/boosted-migrate.png",
    "revision": "5406590a3fec02744f75947771993333"
  },
  {
    "url": "assets/img/boosted-only-components.png",
    "revision": "f81c6faee33a39a5e6d6c7c884b6ce9f"
  },
  {
    "url": "assets/img/bootstrap-stack.png",
    "revision": "7384412324c769e447d3c4f86e9ff068"
  },
  {
    "url": "assets/img/bootstrap-themes.png",
    "revision": "3976b58ff407451e8e8b598fdcde2cd2"
  },
  {
    "url": "assets/img/favicons/android-chrome-192x192.png",
    "revision": "9198316f3ef47449c64234ea53c1dd8e"
  },
  {
    "url": "assets/img/favicons/android-chrome-512x512.png",
    "revision": "f711fd9fc2cf8d1161c71d0dd54f6061"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon-114x114.png",
    "revision": "374e0646c40627dd74cd25e5f8885733"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon-120x120.png",
    "revision": "a29e606e64a2600dc9a85089cf2ce991"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon-144x144.png",
    "revision": "cda2d1d68fb771b498ab4438bf82e0a8"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon-152x152.png",
    "revision": "03350d97a531bebe49901c01dea59b8f"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon-180x180.png",
    "revision": "996f68f20038b8e67265f7f47d98d499"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon-57x57.png",
    "revision": "df9f376eadef72942c27e33cb0534f7f"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon-60x60.png",
    "revision": "36fbc1c605635312c12d2098457cd911"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon-72x72.png",
    "revision": "02de8c7e092c6a9c60ac8d59679c5a95"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon-76x76.png",
    "revision": "a93e4c0e6cb491e670f1a91400737207"
  },
  {
    "url": "assets/img/favicons/apple-touch-icon.png",
    "revision": "0b8eb5d372555514483cee59accfec62"
  },
  {
    "url": "assets/img/favicons/favicon-16x16.png",
    "revision": "deb3878e7b2189826d588260adc030d3"
  },
  {
    "url": "assets/img/favicons/favicon-32x32.png",
    "revision": "f5afa5449894ce121fefa80d28721c8d"
  },
  {
    "url": "assets/img/favicons/manifest.json",
    "revision": "775f22e82b8fcf892bc2d4e5a39414f3"
  },
  {
    "url": "assets/img/favicons/ms-icon-310x310.png",
    "revision": "1e4448749b24fef0e33d7e5a4c8ff079"
  },
  {
    "url": "assets/img/favicons/mstile-144x144.png",
    "revision": "768cdc02ec4f1ae7397d0f463b4655c3"
  },
  {
    "url": "assets/img/favicons/mstile-150x150.png",
    "revision": "231bf3045f78c5152a9f3343ee3657e8"
  },
  {
    "url": "assets/img/favicons/mstile-310x150.png",
    "revision": "d9518957dc960582cd978d9c222bde0d"
  },
  {
    "url": "assets/img/favicons/mstile-310x310.png",
    "revision": "10e2219da3c3f26823f20e31e241bf83"
  },
  {
    "url": "assets/img/favicons/mstile-70x70.png",
    "revision": "22cf8ead556c9f944a85a652f16b685c"
  },
  {
    "url": "assets/img/favicons/safari-pinned-tab.svg",
    "revision": "a1c98a0b7a19a3ba4c3101392f92497f"
  },
  {
    "url": "assets/img/generate_font.png",
    "revision": "d2abb63dde0424a7838ced8a240405e2"
  },
  {
    "url": "assets/img/green.png",
    "revision": "cc14b61ad187236ff3a742c68fe69b20"
  },
  {
    "url": "assets/img/import_projects.png",
    "revision": "73afd7dd0a006840e8f5c8cdac63a35a"
  },
  {
    "url": "assets/img/manage_projects.png",
    "revision": "514010e30c47846bbbb6cd32c027de7c"
  },
  {
    "url": "assets/img/new_project.png",
    "revision": "615dc66597721814abf869c64dfa2e60"
  },
  {
    "url": "assets/img/param_export.png",
    "revision": "b1eb455849f8c2366bc30a8f3d076b79"
  },
  {
    "url": "assets/img/pink.png",
    "revision": "fb002702b28ee61e2c6828132c748e5f"
  },
  {
    "url": "assets/img/preference.png",
    "revision": "cfc72e61349c4c4ce8bc660f169de97d"
  },
  {
    "url": "assets/img/select_mode.png",
    "revision": "342c3b2f20f2d23a8a98ffcca2288175"
  },
  {
    "url": "assets/img/shop.png",
    "revision": "792161716a14290b208db30a629f3f15"
  },
  {
    "url": "assets/img/templates.png",
    "revision": "9458873adea125092ef7eb68f66d6936"
  },
  {
    "url": "assets/img/thumb_blue.png",
    "revision": "d9b4c60b69108cc4d761e438f02bb325"
  },
  {
    "url": "assets/img/thumb_yellow.png",
    "revision": "cdb49b16f88fa5464ad19242ce3353ae"
  },
  {
    "url": "assets/img/timer.png",
    "revision": "23ffd9dc0e5ab2a697f29e76cd712ca4"
  },
  {
    "url": "assets/img/unlock.png",
    "revision": "e61d11b7b471415c6f89c220bdbdf778"
  },
  {
    "url": "assets/img/warning_icon.png",
    "revision": "ec58421625b123af0c7ccf9230cb3a31"
  },
  {
    "url": "assets/js/docs.min.js",
    "revision": "d392885e9b2b691bb2ff1cdcfa683139"
  },
  {
    "url": "assets/js/src/application-boosted.js",
    "revision": "a0c84c5f2b9eecfa8a1819253bb54c59"
  },
  {
    "url": "assets/js/src/application.js",
    "revision": "5f0e90ef7a987bd12a7f13d030b2a202"
  },
  {
    "url": "assets/js/src/ie-emulation-modes-warning.js",
    "revision": "cd93c9a569232ea30bb22244eebff1e0"
  },
  {
    "url": "assets/js/src/pwa.js",
    "revision": "e707568440725d56f34b93b0bb2350a4"
  },
  {
    "url": "assets/js/vendor/anchor.min.js",
    "revision": "01e6254e9f69c0c00f05060b0e1990fc"
  },
  {
    "url": "assets/js/vendor/clipboard.min.js",
    "revision": "3e5e0fa949e0e7c5ed5fed7b4cc0ee00"
  },
  {
    "url": "assets/js/vendor/holder.min.js",
    "revision": "6266d87979b32f717d298f7adf36984a"
  },
  {
    "url": "assets/js/vendor/jquery-slim.min.js",
    "revision": "5f48fc77cac90c4778fa24ec9c57f37d"
  },
  {
    "url": "assets/js/vendor/jquery.tablesorter.min.js",
    "revision": "096f8307a0ada79a93a6a95f46022a5a"
  },
  {
    "url": "assets/js/vendor/popper.min.js",
    "revision": "70d3fda195602fe8b75e0097eed74dde"
  },
  {
    "url": "assets/js/vendor/workbox-sw.prod.v2.1.2.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "dist/css/boosted-grid.css",
    "revision": "d5f69e80079c21bacf4c7f331e15bcb1"
  },
  {
    "url": "dist/css/boosted-grid.min.css",
    "revision": "20d0e7013c0c7fa743ffd7097c80702f"
  },
  {
    "url": "dist/css/boosted-reboot.css",
    "revision": "627065c3450fcfe8850f565695bd162f"
  },
  {
    "url": "dist/css/boosted-reboot.min.css",
    "revision": "215b0a22a9a85a48e52f8e31650ed118"
  },
  {
    "url": "dist/css/boosted-rtl.css",
    "revision": "a79505ccd61edc337df1406a171bd448"
  },
  {
    "url": "dist/css/boosted-rtl.min.css",
    "revision": "7353e272ee5025982a9bf5c02abb8ec1"
  },
  {
    "url": "dist/css/boosted.css",
    "revision": "750e400fc34ee773aedc76b1e0039fed"
  },
  {
    "url": "dist/css/boosted.min.css",
    "revision": "51b18741e2885ecb7716ebbab155a371"
  },
  {
    "url": "dist/css/o-rtl.css",
    "revision": "9f6c9aa6514aa5785df3d1a7b00b89be"
  },
  {
    "url": "dist/css/orangeHelvetica.css",
    "revision": "1becdf2a477beee29c1919cf967310cb"
  },
  {
    "url": "dist/css/orangeHelvetica.min.css",
    "revision": "e75586ccf155285bbcb88fda3da7440d"
  },
  {
    "url": "dist/css/orangeIcons.css",
    "revision": "cc6cf720ad34c6da214c622faa0f993c"
  },
  {
    "url": "dist/css/orangeIcons.min.css",
    "revision": "fac8015e7745761b210140a54a6cb913"
  },
  {
    "url": "dist/css/vendor/swiper.min.css",
    "revision": "6af34d0737ad0ca608111771cf74cc79"
  },
  {
    "url": "dist/fonts/HelvNeue55_W1G.svg",
    "revision": "ec80141aa0497e837989ae5650d2b2d7"
  },
  {
    "url": "dist/fonts/HelvNeue75_W1G.svg",
    "revision": "d49e6dec5d8996c24a282a1d4f3030b6"
  },
  {
    "url": "dist/fonts/icon-orange.svg",
    "revision": "1f69163afb64dca81826e210cd99ed4d"
  },
  {
    "url": "dist/img/orange_logo.svg",
    "revision": "086916e9e2d8f8c38d2ecfba359ab991"
  },
  {
    "url": "dist/js/boosted.bundle.js",
    "revision": "0002b540367a663f6abda11972cd231f"
  },
  {
    "url": "dist/js/boosted.bundle.min.js",
    "revision": "41a24049a205d29a0a374cd0c827a11c"
  },
  {
    "url": "dist/js/boosted.js",
    "revision": "660cb97bfdcf87cc4b731cfb66ae2ed0"
  },
  {
    "url": "dist/js/boosted.min.js",
    "revision": "7a7b7389d63d4ac00e9ea7c139cd78ab"
  },
  {
    "url": "dist/js/vendor/jquery.tablesorter.js",
    "revision": "c92115b2aeec2061352d69f0c75e9a7f"
  },
  {
    "url": "dist/js/vendor/swiper.min.js",
    "revision": "fb13ef3e875ca3497ede35d3774be9d3"
  },
  {
    "url": "docs/4.0/about/boosted-history/index.html",
    "revision": "6d6ce1c5183a411910203db74a11b565"
  },
  {
    "url": "docs/4.0/about/boosted-license/index.html",
    "revision": "c3f9a6e59273b450a6ad54cdf4f68669"
  },
  {
    "url": "docs/4.0/about/brand/index.html",
    "revision": "9299bd7553978a8c88fbc77710f55df2"
  },
  {
    "url": "docs/4.0/about/index.html",
    "revision": "3f1b25297d1eac259e028e94c0ca18d8"
  },
  {
    "url": "docs/4.0/about/license/index.html",
    "revision": "fd668f75fd6293a88dd7f971d3ff0cbe"
  },
  {
    "url": "docs/4.0/about/orange-brand/index.html",
    "revision": "585e6fc926b68417e85a9ea79357f869"
  },
  {
    "url": "docs/4.0/about/overview/index.html",
    "revision": "9e8cd9707f2ca912fa8ef9200dcfc628"
  },
  {
    "url": "docs/4.0/about/translations/index.html",
    "revision": "4e01af8d9de1b3af59dba50a3768a7aa"
  },
  {
    "url": "docs/4.0/boosted-migration/index.html",
    "revision": "aba102fc513dfc2147bfafa4e878bcb6"
  },
  {
    "url": "docs/4.0/boostwatch/index.html",
    "revision": "244cdb2e1b53848fca229bfa9f2cefb5"
  },
  {
    "url": "docs/4.0/browser-bugs/index.html",
    "revision": "cb8f1eb45568b7d9704111ee84abf630"
  },
  {
    "url": "docs/4.0/components/alerts/index.html",
    "revision": "86838d32572ec219979ec25469dcb4d5"
  },
  {
    "url": "docs/4.0/components/badge/index.html",
    "revision": "f2da693f0cb6e81372ee83952fe3ff96"
  },
  {
    "url": "docs/4.0/components/breadcrumb/index.html",
    "revision": "1727959059f718a9113d69f1f833361b"
  },
  {
    "url": "docs/4.0/components/button-group/index.html",
    "revision": "fd2f908ff08a19b1dd06d08912d5d641"
  },
  {
    "url": "docs/4.0/components/buttons/index.html",
    "revision": "2c2214f242b21a2d3a70d0ce310ae282"
  },
  {
    "url": "docs/4.0/components/card/index.html",
    "revision": "a929433ef43b5040e97f003e3b76578f"
  },
  {
    "url": "docs/4.0/components/carousel/index.html",
    "revision": "717b93d632d4dd98bf272b3834a435cb"
  },
  {
    "url": "docs/4.0/components/collapse/index.html",
    "revision": "470eabd94d13f5b3d217faa0e9cf8a66"
  },
  {
    "url": "docs/4.0/components/custom-carousel/index.html",
    "revision": "fbb109b780da1d610df8344f47bde4e3"
  },
  {
    "url": "docs/4.0/components/dropdowns/index.html",
    "revision": "973e173c2f739e22b8c03ca35ff22a3f"
  },
  {
    "url": "docs/4.0/components/forms/index.html",
    "revision": "ab03b9976c897df86320507db1eb914c"
  },
  {
    "url": "docs/4.0/components/index.html",
    "revision": "94028bb2d075eba3153420db911d0481"
  },
  {
    "url": "docs/4.0/components/input-group/index.html",
    "revision": "af522c78b45a33dbf0c8d3d60c24a846"
  },
  {
    "url": "docs/4.0/components/jumbotron/index.html",
    "revision": "86948e4a09f76e9ef40c356aa0e39488"
  },
  {
    "url": "docs/4.0/components/list-group/index.html",
    "revision": "fcd60b4dcc4f4ecb8292a424432f57a9"
  },
  {
    "url": "docs/4.0/components/local-navigation/index.html",
    "revision": "c41d683e449372d0b8831e668f01a902"
  },
  {
    "url": "docs/4.0/components/modal/index.html",
    "revision": "a665b9528e57e24e40fb3e498a1903ff"
  },
  {
    "url": "docs/4.0/components/navbar-orange/index.html",
    "revision": "82d513c63077725eb47ef81f3ff429ec"
  },
  {
    "url": "docs/4.0/components/navbar/index.html",
    "revision": "f4516c78b563b91dff37bc30953fec7e"
  },
  {
    "url": "docs/4.0/components/navs/index.html",
    "revision": "0437d5f64a259e1954d4a619885eb0c2"
  },
  {
    "url": "docs/4.0/components/orange-footer/index.html",
    "revision": "d2e3a3985a241e8113ad7c5cc326812f"
  },
  {
    "url": "docs/4.0/components/orange-megamenu/index.html",
    "revision": "3a1b6f3fc15f865e8dc2b422f6b04872"
  },
  {
    "url": "docs/4.0/components/orange-popin/index.html",
    "revision": "20b4fdd094901e96a564a9c7cd0b4959"
  },
  {
    "url": "docs/4.0/components/pagination/index.html",
    "revision": "b6e97e6fb82cf97a72e1834a04b6495a"
  },
  {
    "url": "docs/4.0/components/popovers/index.html",
    "revision": "81b2cc9734ac077729291c082998107c"
  },
  {
    "url": "docs/4.0/components/priority-nav/index.html",
    "revision": "c0e53ef95ee95c6ad030871f34d1b7f7"
  },
  {
    "url": "docs/4.0/components/progress/index.html",
    "revision": "9a8b907355b0b6095a62711bca3d61d7"
  },
  {
    "url": "docs/4.0/components/scroll-up/index.html",
    "revision": "77c2f3692111b837511144f85ae6261e"
  },
  {
    "url": "docs/4.0/components/scrollspy/index.html",
    "revision": "7e29f1ed55a55a6021c7d4497d27d93f"
  },
  {
    "url": "docs/4.0/components/stepbar/index.html",
    "revision": "c72afc1beaf8d4c48afa1481f6e9dd37"
  },
  {
    "url": "docs/4.0/components/tooltips/index.html",
    "revision": "87558b69774f7ca7a03fe8c492fd8ba0"
  },
  {
    "url": "docs/4.0/content/code/index.html",
    "revision": "0a62467373fafc56402bea67d463fbad"
  },
  {
    "url": "docs/4.0/content/figures/index.html",
    "revision": "3170f47f33d8e9a2f608598a55d5a608"
  },
  {
    "url": "docs/4.0/content/images/index.html",
    "revision": "14a5b492616e2662139cdd87c34ac6ed"
  },
  {
    "url": "docs/4.0/content/index.html",
    "revision": "14412c4adcfd295bdb9d3f5a3778f115"
  },
  {
    "url": "docs/4.0/content/reboot/index.html",
    "revision": "56395d33b39bd5a3759fe276e2d59e10"
  },
  {
    "url": "docs/4.0/content/tables/index.html",
    "revision": "564f44f3c2d4460cb7edbc5061b1fd22"
  },
  {
    "url": "docs/4.0/content/typography/index.html",
    "revision": "7288b58c2c6fdb93b724c4cae778571c"
  },
  {
    "url": "docs/4.0/examples/album/album.css",
    "revision": "c55364aec72e931ec6e447fef8d7d1fb"
  },
  {
    "url": "docs/4.0/examples/album/index.html",
    "revision": "bb28d1fe39e62753497973c2a812b69c"
  },
  {
    "url": "docs/4.0/examples/blog/blog.css",
    "revision": "750f2ac42509b1d901295d087cac5ef6"
  },
  {
    "url": "docs/4.0/examples/blog/index.html",
    "revision": "4042ac64414aedcf6435d82f40624290"
  },
  {
    "url": "docs/4.0/examples/carousel/carousel.css",
    "revision": "e1ef0ffa84cc98db13f90dd02b9981e7"
  },
  {
    "url": "docs/4.0/examples/carousel/index.html",
    "revision": "99b151f41e1ea0f882c07742851f5d6f"
  },
  {
    "url": "docs/4.0/examples/cover/cover.css",
    "revision": "1d0127b6309e72780dd3e87093a9d7e3"
  },
  {
    "url": "docs/4.0/examples/cover/index.html",
    "revision": "5365e8d8b7862595ad2cfc5db006d019"
  },
  {
    "url": "docs/4.0/examples/dashboard/dashboard.css",
    "revision": "cea2ce48e209721ca537d8ffcad510b9"
  },
  {
    "url": "docs/4.0/examples/dashboard/index.html",
    "revision": "5ae82fe1d819044317ea7efea924d79c"
  },
  {
    "url": "docs/4.0/examples/demo/assets/bill.png",
    "revision": "ac10785c37e9a1d1df37075ad1dec17c"
  },
  {
    "url": "docs/4.0/examples/demo/assets/blue.png",
    "revision": "8c055a53a00aa47f17d527e0c4fb2e27"
  },
  {
    "url": "docs/4.0/examples/demo/assets/green.png",
    "revision": "cc14b61ad187236ff3a742c68fe69b20"
  },
  {
    "url": "docs/4.0/examples/demo/assets/pink.png",
    "revision": "fb002702b28ee61e2c6828132c748e5f"
  },
  {
    "url": "docs/4.0/examples/demo/assets/shop.png",
    "revision": "792161716a14290b208db30a629f3f15"
  },
  {
    "url": "docs/4.0/examples/demo/assets/timer.png",
    "revision": "23ffd9dc0e5ab2a697f29e76cd712ca4"
  },
  {
    "url": "docs/4.0/examples/demo/assets/unlock.png",
    "revision": "e61d11b7b471415c6f89c220bdbdf778"
  },
  {
    "url": "docs/4.0/examples/demo/css/bundle.css",
    "revision": "948aa2fa24b6b43662295d6069966871"
  },
  {
    "url": "docs/4.0/examples/demo/index.html",
    "revision": "48289566e7adf1b2c34fccc8dd41ebb6"
  },
  {
    "url": "docs/4.0/examples/demo/js/main.js",
    "revision": "570bde5177c94f2cd9861ccaaa5133dc"
  },
  {
    "url": "docs/4.0/examples/grid/grid.css",
    "revision": "4cd2e5cc5e19dc692d50ed6f077154ef"
  },
  {
    "url": "docs/4.0/examples/grid/index.html",
    "revision": "b75c861bf32f7ab524a774cad2f0e0bf"
  },
  {
    "url": "docs/4.0/examples/index.html",
    "revision": "540bb0f6660da9abf5c940d375bf9686"
  },
  {
    "url": "docs/4.0/examples/jumbotron/index.html",
    "revision": "fbaac93d33e537054bfaa13a1b6f0717"
  },
  {
    "url": "docs/4.0/examples/jumbotron/jumbotron.css",
    "revision": "0ef7edc6babea5a47645bda0c45368aa"
  },
  {
    "url": "docs/4.0/examples/justified-nav/index.html",
    "revision": "ee1f0723945c6b9ca966c9d06e7325bf"
  },
  {
    "url": "docs/4.0/examples/justified-nav/justified-nav.css",
    "revision": "74b0be6ad3b421b43288545b9628253f"
  },
  {
    "url": "docs/4.0/examples/module-002-quick-links/css/style002.css",
    "revision": "fd3e4959b40b6cf566e23471ff029e7b"
  },
  {
    "url": "docs/4.0/examples/module-002-quick-links/img/icn_facebook_black.png",
    "revision": "575d7dca6f29ec894c6c5afc92dfc94c"
  },
  {
    "url": "docs/4.0/examples/module-002-quick-links/img/icn_messaging_black.png",
    "revision": "92af4354304f8c9da5174262f06e3053"
  },
  {
    "url": "docs/4.0/examples/module-002-quick-links/img/icn_music_black.png",
    "revision": "0d83230a49789fa50be2adacb4740201"
  },
  {
    "url": "docs/4.0/examples/module-002-quick-links/img/icn_top_black.png",
    "revision": "2d4002b5095aace21c88e3699f109b7d"
  },
  {
    "url": "docs/4.0/examples/module-002-quick-links/index.html",
    "revision": "e17b13357c43e300237c03f478b08149"
  },
  {
    "url": "docs/4.0/examples/module-006-content-panel/css/style006.css",
    "revision": "e271c5f3c5ebf3c1d545c20543cdcac7"
  },
  {
    "url": "docs/4.0/examples/module-006-content-panel/index.html",
    "revision": "6d22f7f4ff9b6b22c49e346afa58de01"
  },
  {
    "url": "docs/4.0/examples/module-012-product-details/css/style012.css",
    "revision": "79e1b949c809293d2e25ccf94e1d050f"
  },
  {
    "url": "docs/4.0/examples/module-012-product-details/img/label_discount.png",
    "revision": "bdbf98c0e4356cf6b7ecc94a83d70eba"
  },
  {
    "url": "docs/4.0/examples/module-012-product-details/img/picture_device_3.png",
    "revision": "62ee70a0bea3b36c35e4eb4e27571c36"
  },
  {
    "url": "docs/4.0/examples/module-012-product-details/img/picture_klif1.png",
    "revision": "e09c5b52ff25065054ad28fb21f1cda2"
  },
  {
    "url": "docs/4.0/examples/module-012-product-details/img/stars_sprite.png",
    "revision": "5c6818cfde14e72e0617eac40d5472c4"
  },
  {
    "url": "docs/4.0/examples/module-012-product-details/index.html",
    "revision": "b6b923f8c965e6bb9e5b6565f92e100f"
  },
  {
    "url": "docs/4.0/examples/narrow-jumbotron/index.html",
    "revision": "8bbaa6ff15e64569ff7f64407779df4b"
  },
  {
    "url": "docs/4.0/examples/narrow-jumbotron/narrow-jumbotron.css",
    "revision": "4e5fb23757fb40f595167cd4e14447de"
  },
  {
    "url": "docs/4.0/examples/navbar-bottom/index.html",
    "revision": "bd9fca5d883e960f821bc26fc2fb6fec"
  },
  {
    "url": "docs/4.0/examples/navbar-top-fixed/index.html",
    "revision": "12333076aa6a72dab821bbec7c67c5fb"
  },
  {
    "url": "docs/4.0/examples/navbar-top-fixed/navbar-top-fixed.css",
    "revision": "3d46ddff119cfe2886a34b72aefd42a6"
  },
  {
    "url": "docs/4.0/examples/navbar-top/index.html",
    "revision": "d488d2c4e1c4b9de6f25b89699812759"
  },
  {
    "url": "docs/4.0/examples/navbar-top/navbar-top.css",
    "revision": "ae704085e05c4bc6a705b225b03a5aea"
  },
  {
    "url": "docs/4.0/examples/navbars/index.html",
    "revision": "0124db2b6e6139df77392b1f5c346868"
  },
  {
    "url": "docs/4.0/examples/navbars/navbar.css",
    "revision": "f95ea8bb033949bba31b05925773e223"
  },
  {
    "url": "docs/4.0/examples/offcanvas/index.html",
    "revision": "cdcadc502dcd641b6c23201a4e1f2f5c"
  },
  {
    "url": "docs/4.0/examples/offcanvas/offcanvas.css",
    "revision": "77eca95a4f55dd917ba95db9ac28bac9"
  },
  {
    "url": "docs/4.0/examples/offcanvas/offcanvas.js",
    "revision": "fe67880b053d4a4a9f318db8e0e71fb2"
  },
  {
    "url": "docs/4.0/examples/orange-admin/edit.html",
    "revision": "cdc7d293dcdb06034199c3b84a8529dd"
  },
  {
    "url": "docs/4.0/examples/orange-admin/example.css",
    "revision": "8a43544b65e06b9408f16598477e0b07"
  },
  {
    "url": "docs/4.0/examples/orange-admin/images/logo-orange.png",
    "revision": "3978402625900ab1deca4e6474bd9c21"
  },
  {
    "url": "docs/4.0/examples/orange-admin/index.html",
    "revision": "590f9cae68bfaf7b61c3ce8bcddf84a2"
  },
  {
    "url": "docs/4.0/examples/orange-brand-2015/images/discovery-frame-carousel-whitetext.png",
    "revision": "4494834274bc03cf4242d5e656d502ac"
  },
  {
    "url": "docs/4.0/examples/orange-brand-2015/images/discovery-frame-carousel.png",
    "revision": "76d10a9e3f09fa11342512924555dc98"
  },
  {
    "url": "docs/4.0/examples/orange-brand-2015/images/discovery-frame.png",
    "revision": "bd95ffc357e9f5d6fa0c3386f42f3d5a"
  },
  {
    "url": "docs/4.0/examples/orange-brand-2015/images/discovery-popout-2byslide.png",
    "revision": "5a15cf11de5c329df0b890c20482753a"
  },
  {
    "url": "docs/4.0/examples/orange-brand-2015/images/discovery-popout.png",
    "revision": "0f3b8ff70a5b9c8e59ad1359ee5c75c1"
  },
  {
    "url": "docs/4.0/examples/orange-brand-2015/images/Fun-frame_frame-carousel.png",
    "revision": "c9b2c674634842cb76592f409b0a4960"
  },
  {
    "url": "docs/4.0/examples/orange-brand-2015/images/logo-orange.png",
    "revision": "3978402625900ab1deca4e6474bd9c21"
  },
  {
    "url": "docs/4.0/examples/orange-brand-2015/images/popular-services-1.png",
    "revision": "6cea6eeac842c10ea590cdacdd75b9ff"
  },
  {
    "url": "docs/4.0/examples/orange-brand-2015/images/popular-services-2.png",
    "revision": "13f95d6fb606d4933abb0099254ef5ca"
  },
  {
    "url": "docs/4.0/examples/orange-brand-2015/images/popular-services-3.png",
    "revision": "db1770e16c587889cf8d2fb17a1c12bf"
  },
  {
    "url": "docs/4.0/examples/orange-brand-2015/index.html",
    "revision": "4381cc8bb8b387ccb038570fcdbd9420"
  },
  {
    "url": "docs/4.0/examples/orange-brand-2015/sample.css",
    "revision": "b0f19bce321284ca3cd1615222d9a09e"
  },
  {
    "url": "docs/4.0/examples/orange-dashboard/gabarit.css",
    "revision": "c4bd3d14aefa5295f333b21a3d717954"
  },
  {
    "url": "docs/4.0/examples/orange-dashboard/images/Cancel.png",
    "revision": "1c07cf2e5ed7fee1e38a51a6d708d936"
  },
  {
    "url": "docs/4.0/examples/orange-dashboard/images/logo-orange.png",
    "revision": "3978402625900ab1deca4e6474bd9c21"
  },
  {
    "url": "docs/4.0/examples/orange-dashboard/images/Ok.png",
    "revision": "42065eff02ab72c2e8a15e56db793fae"
  },
  {
    "url": "docs/4.0/examples/orange-dashboard/images/Warning.png",
    "revision": "63ad763bb2a0e5cc63d54a9c1e578f6a"
  },
  {
    "url": "docs/4.0/examples/orange-dashboard/index.html",
    "revision": "46390b994ea4bb3b3f0207c4c9cb890b"
  },
  {
    "url": "docs/4.0/examples/orange-form/form.js",
    "revision": "53d38711d70440ec66baef611c6bf773"
  },
  {
    "url": "docs/4.0/examples/orange-form/images/logo-orange.png",
    "revision": "3978402625900ab1deca4e6474bd9c21"
  },
  {
    "url": "docs/4.0/examples/orange-form/index.html",
    "revision": "f14beffb75b3f79532e9d80ec930682a"
  },
  {
    "url": "docs/4.0/examples/orange-form/styles.css",
    "revision": "a8b20e7f95048c66bc0d7cb0613a12ff"
  },
  {
    "url": "docs/4.0/examples/orange-grid/index-fluid.html",
    "revision": "93e80b69a31a7238926f686e22b76aa1"
  },
  {
    "url": "docs/4.0/examples/orange-grid/index.html",
    "revision": "d93d6da1e3ca23c8b5e8b006c518736f"
  },
  {
    "url": "docs/4.0/examples/orange-grid/styles.css",
    "revision": "89b7506be0f04d9f94cebfe9c43ebcc8"
  },
  {
    "url": "docs/4.0/examples/orange-news/css/example.css",
    "revision": "4ca6c344281a6904c33130ea0a087348"
  },
  {
    "url": "docs/4.0/examples/orange-news/index.html",
    "revision": "0c48721780593157a5efb8b4679268b5"
  },
  {
    "url": "docs/4.0/examples/rtl-album/album.css",
    "revision": "c55364aec72e931ec6e447fef8d7d1fb"
  },
  {
    "url": "docs/4.0/examples/rtl-album/index.html",
    "revision": "882ddd9568c76d21d277b1f0869d0d05"
  },
  {
    "url": "docs/4.0/examples/rtl-blog/blog.css",
    "revision": "750f2ac42509b1d901295d087cac5ef6"
  },
  {
    "url": "docs/4.0/examples/rtl-blog/index.html",
    "revision": "b873305cc42b12464707d4d79bd50f38"
  },
  {
    "url": "docs/4.0/examples/rtl-carousel/carousel.css",
    "revision": "e1ef0ffa84cc98db13f90dd02b9981e7"
  },
  {
    "url": "docs/4.0/examples/rtl-carousel/index.html",
    "revision": "f9ecf2a8d022a2547224d4c93ec6a114"
  },
  {
    "url": "docs/4.0/examples/rtl-cover/cover.css",
    "revision": "1d0127b6309e72780dd3e87093a9d7e3"
  },
  {
    "url": "docs/4.0/examples/rtl-cover/index.html",
    "revision": "145fb81dfc1dedb52bf3b98063c99a30"
  },
  {
    "url": "docs/4.0/examples/rtl-dashboard/dashboard.css",
    "revision": "cea2ce48e209721ca537d8ffcad510b9"
  },
  {
    "url": "docs/4.0/examples/rtl-dashboard/index.html",
    "revision": "558032f33abd2f3ba24c92fb3cc78b9f"
  },
  {
    "url": "docs/4.0/examples/rtl-demo/assets/bill.png",
    "revision": "ac10785c37e9a1d1df37075ad1dec17c"
  },
  {
    "url": "docs/4.0/examples/rtl-demo/assets/blue.png",
    "revision": "8c055a53a00aa47f17d527e0c4fb2e27"
  },
  {
    "url": "docs/4.0/examples/rtl-demo/assets/green.png",
    "revision": "cc14b61ad187236ff3a742c68fe69b20"
  },
  {
    "url": "docs/4.0/examples/rtl-demo/assets/pink.png",
    "revision": "fb002702b28ee61e2c6828132c748e5f"
  },
  {
    "url": "docs/4.0/examples/rtl-demo/assets/shop.png",
    "revision": "792161716a14290b208db30a629f3f15"
  },
  {
    "url": "docs/4.0/examples/rtl-demo/assets/timer.png",
    "revision": "23ffd9dc0e5ab2a697f29e76cd712ca4"
  },
  {
    "url": "docs/4.0/examples/rtl-demo/assets/unlock.png",
    "revision": "e61d11b7b471415c6f89c220bdbdf778"
  },
  {
    "url": "docs/4.0/examples/rtl-demo/css/bundle.css",
    "revision": "948aa2fa24b6b43662295d6069966871"
  },
  {
    "url": "docs/4.0/examples/rtl-demo/index.html",
    "revision": "1574a914e002550756601f85d6f8cbfe"
  },
  {
    "url": "docs/4.0/examples/rtl-demo/js/main.js",
    "revision": "570bde5177c94f2cd9861ccaaa5133dc"
  },
  {
    "url": "docs/4.0/examples/rtl-grid/grid.css",
    "revision": "4cd2e5cc5e19dc692d50ed6f077154ef"
  },
  {
    "url": "docs/4.0/examples/rtl-grid/index.html",
    "revision": "d076052a8e9352a14fa882a9d623864b"
  },
  {
    "url": "docs/4.0/examples/rtl-jumbotron/index.html",
    "revision": "308d542487ccbf7287db94c0062ff148"
  },
  {
    "url": "docs/4.0/examples/rtl-jumbotron/jumbotron.css",
    "revision": "0ef7edc6babea5a47645bda0c45368aa"
  },
  {
    "url": "docs/4.0/examples/rtl-justified-nav/index.html",
    "revision": "a290d3678c6bd306ef02c82390e28d27"
  },
  {
    "url": "docs/4.0/examples/rtl-justified-nav/justified-nav.css",
    "revision": "74b0be6ad3b421b43288545b9628253f"
  },
  {
    "url": "docs/4.0/examples/rtl-module-002-quick-links/css/style002.css",
    "revision": "fd3e4959b40b6cf566e23471ff029e7b"
  },
  {
    "url": "docs/4.0/examples/rtl-module-002-quick-links/img/icn_facebook_black.png",
    "revision": "575d7dca6f29ec894c6c5afc92dfc94c"
  },
  {
    "url": "docs/4.0/examples/rtl-module-002-quick-links/img/icn_messaging_black.png",
    "revision": "92af4354304f8c9da5174262f06e3053"
  },
  {
    "url": "docs/4.0/examples/rtl-module-002-quick-links/img/icn_music_black.png",
    "revision": "0d83230a49789fa50be2adacb4740201"
  },
  {
    "url": "docs/4.0/examples/rtl-module-002-quick-links/img/icn_top_black.png",
    "revision": "2d4002b5095aace21c88e3699f109b7d"
  },
  {
    "url": "docs/4.0/examples/rtl-module-002-quick-links/index.html",
    "revision": "8c18b8f37d3a086e5c3375c200559175"
  },
  {
    "url": "docs/4.0/examples/rtl-module-006-content-panel/css/style006.css",
    "revision": "e271c5f3c5ebf3c1d545c20543cdcac7"
  },
  {
    "url": "docs/4.0/examples/rtl-module-006-content-panel/index.html",
    "revision": "f3d15ad3c41291e49dba023c54ecfe35"
  },
  {
    "url": "docs/4.0/examples/rtl-module-012-product-details/css/style012.css",
    "revision": "79e1b949c809293d2e25ccf94e1d050f"
  },
  {
    "url": "docs/4.0/examples/rtl-module-012-product-details/img/label_discount.png",
    "revision": "bdbf98c0e4356cf6b7ecc94a83d70eba"
  },
  {
    "url": "docs/4.0/examples/rtl-module-012-product-details/img/picture_device_3.png",
    "revision": "62ee70a0bea3b36c35e4eb4e27571c36"
  },
  {
    "url": "docs/4.0/examples/rtl-module-012-product-details/img/picture_klif1.png",
    "revision": "e09c5b52ff25065054ad28fb21f1cda2"
  },
  {
    "url": "docs/4.0/examples/rtl-module-012-product-details/img/stars_sprite.png",
    "revision": "5c6818cfde14e72e0617eac40d5472c4"
  },
  {
    "url": "docs/4.0/examples/rtl-module-012-product-details/index.html",
    "revision": "4448f5132ff79aaadddb88c597694e75"
  },
  {
    "url": "docs/4.0/examples/rtl-narrow-jumbotron/index.html",
    "revision": "8660812990dcc93a917e6c855c8f300f"
  },
  {
    "url": "docs/4.0/examples/rtl-narrow-jumbotron/narrow-jumbotron.css",
    "revision": "4e5fb23757fb40f595167cd4e14447de"
  },
  {
    "url": "docs/4.0/examples/rtl-navbar-bottom/index.html",
    "revision": "925e9dc14abf439d38bed1fe31081507"
  },
  {
    "url": "docs/4.0/examples/rtl-navbar-top-fixed/index.html",
    "revision": "bd4d6cbad11cda1493778dfd5440e95b"
  },
  {
    "url": "docs/4.0/examples/rtl-navbar-top-fixed/navbar-top-fixed.css",
    "revision": "3d46ddff119cfe2886a34b72aefd42a6"
  },
  {
    "url": "docs/4.0/examples/rtl-navbar-top/index.html",
    "revision": "105d6583ac371177cb717148c4b7473e"
  },
  {
    "url": "docs/4.0/examples/rtl-navbar-top/navbar-top.css",
    "revision": "ae704085e05c4bc6a705b225b03a5aea"
  },
  {
    "url": "docs/4.0/examples/rtl-navbars/index.html",
    "revision": "dac1b07940cf8a5cf9f5d2a188073be5"
  },
  {
    "url": "docs/4.0/examples/rtl-navbars/navbar.css",
    "revision": "f95ea8bb033949bba31b05925773e223"
  },
  {
    "url": "docs/4.0/examples/rtl-offcanvas/index.html",
    "revision": "e65da22d167ce0efa7f9088fedaaadf7"
  },
  {
    "url": "docs/4.0/examples/rtl-offcanvas/offcanvas.css",
    "revision": "77eca95a4f55dd917ba95db9ac28bac9"
  },
  {
    "url": "docs/4.0/examples/rtl-offcanvas/offcanvas.js",
    "revision": "fe67880b053d4a4a9f318db8e0e71fb2"
  },
  {
    "url": "docs/4.0/examples/rtl-orange-admin/edit.html",
    "revision": "c076ba04c4ef7776b01a320b45f3d0a8"
  },
  {
    "url": "docs/4.0/examples/rtl-orange-admin/example.css",
    "revision": "8a43544b65e06b9408f16598477e0b07"
  },
  {
    "url": "docs/4.0/examples/rtl-orange-admin/images/logo-orange.png",
    "revision": "3978402625900ab1deca4e6474bd9c21"
  },
  {
    "url": "docs/4.0/examples/rtl-orange-admin/index.html",
    "revision": "230a3e42b514e33e8a780c0a40bf7083"
  },
  {
    "url": "docs/4.0/examples/rtl-orange-brand-2015/images/discovery-frame-carousel-whitetext.png",
    "revision": "4494834274bc03cf4242d5e656d502ac"
  },
  {
    "url": "docs/4.0/examples/rtl-orange-brand-2015/images/discovery-frame-carousel.png",
    "revision": "76d10a9e3f09fa11342512924555dc98"
  },
  {
    "url": "docs/4.0/examples/rtl-orange-brand-2015/images/discovery-frame.png",
    "revision": "bd95ffc357e9f5d6fa0c3386f42f3d5a"
  },
  {
    "url": "docs/4.0/examples/rtl-orange-brand-2015/images/discovery-popout-2byslide.png",
    "revision": "5a15cf11de5c329df0b890c20482753a"
  },
  {
    "url": "docs/4.0/examples/rtl-orange-brand-2015/images/discovery-popout.png",
    "revision": "0f3b8ff70a5b9c8e59ad1359ee5c75c1"
  },
  {
    "url": "docs/4.0/examples/rtl-orange-brand-2015/images/Fun-frame_frame-carousel.png",
    "revision": "c9b2c674634842cb76592f409b0a4960"
  },
  {
    "url": "docs/4.0/examples/rtl-orange-brand-2015/images/logo-orange.png",
    "revision": "3978402625900ab1deca4e6474bd9c21"
  },
  {
    "url": "docs/4.0/examples/rtl-orange-brand-2015/images/popular-services-1.png",
    "revision": "6cea6eeac842c10ea590cdacdd75b9ff"
  },
  {
    "url": "docs/4.0/examples/rtl-orange-brand-2015/images/popular-services-2.png",
    "revision": "13f95d6fb606d4933abb0099254ef5ca"
  },
  {
    "url": "docs/4.0/examples/rtl-orange-brand-2015/images/popular-services-3.png",
    "revision": "db1770e16c587889cf8d2fb17a1c12bf"
  },
  {
    "url": "docs/4.0/examples/rtl-orange-brand-2015/index.html",
    "revision": "4e86c0e48958145d5901bd5e15c538ea"
  },
  {
    "url": "docs/4.0/examples/rtl-orange-brand-2015/sample.css",
    "revision": "b0f19bce321284ca3cd1615222d9a09e"
  },
  {
    "url": "docs/4.0/examples/rtl-orange-dashboard/gabarit.css",
    "revision": "c4bd3d14aefa5295f333b21a3d717954"
  },
  {
    "url": "docs/4.0/examples/rtl-orange-dashboard/images/Cancel.png",
    "revision": "1c07cf2e5ed7fee1e38a51a6d708d936"
  },
  {
    "url": "docs/4.0/examples/rtl-orange-dashboard/images/logo-orange.png",
    "revision": "3978402625900ab1deca4e6474bd9c21"
  },
  {
    "url": "docs/4.0/examples/rtl-orange-dashboard/images/Ok.png",
    "revision": "42065eff02ab72c2e8a15e56db793fae"
  },
  {
    "url": "docs/4.0/examples/rtl-orange-dashboard/images/Warning.png",
    "revision": "63ad763bb2a0e5cc63d54a9c1e578f6a"
  },
  {
    "url": "docs/4.0/examples/rtl-orange-dashboard/index.html",
    "revision": "8ae5061a059b7d093184b30f252617e1"
  },
  {
    "url": "docs/4.0/examples/rtl-orange-form/form.js",
    "revision": "53d38711d70440ec66baef611c6bf773"
  },
  {
    "url": "docs/4.0/examples/rtl-orange-form/images/logo-orange.png",
    "revision": "3978402625900ab1deca4e6474bd9c21"
  },
  {
    "url": "docs/4.0/examples/rtl-orange-form/index.html",
    "revision": "5554ebfc712f6efc8e527b4f316f2f68"
  },
  {
    "url": "docs/4.0/examples/rtl-orange-form/styles.css",
    "revision": "a8b20e7f95048c66bc0d7cb0613a12ff"
  },
  {
    "url": "docs/4.0/examples/rtl-orange-grid/index-fluid.html",
    "revision": "e35a6407172dc3006fbd3480c992436d"
  },
  {
    "url": "docs/4.0/examples/rtl-orange-grid/index.html",
    "revision": "3aba2ac446200e909b439ba446729752"
  },
  {
    "url": "docs/4.0/examples/rtl-orange-grid/styles.css",
    "revision": "89b7506be0f04d9f94cebfe9c43ebcc8"
  },
  {
    "url": "docs/4.0/examples/rtl-orange-news/css/example.css",
    "revision": "4ca6c344281a6904c33130ea0a087348"
  },
  {
    "url": "docs/4.0/examples/rtl-orange-news/index.html",
    "revision": "111e5be62080b540088fd840be88a2c8"
  },
  {
    "url": "docs/4.0/examples/rtl-signin/index.html",
    "revision": "81fd47b98b1034f679c4fb67c0bd39e7"
  },
  {
    "url": "docs/4.0/examples/rtl-signin/signin.css",
    "revision": "ba362ab7f11733548cdc4dc14df941a7"
  },
  {
    "url": "docs/4.0/examples/rtl-starter-template/index.html",
    "revision": "5ecd335e01d4bf692a8585e285ae629a"
  },
  {
    "url": "docs/4.0/examples/rtl-starter-template/starter-template.css",
    "revision": "8cb4aab3660723b641b6458f1a1d3ab1"
  },
  {
    "url": "docs/4.0/examples/rtl-sticky-footer-navbar/index.html",
    "revision": "045d1e3e8cce7aac83601cf942b68af3"
  },
  {
    "url": "docs/4.0/examples/rtl-sticky-footer-navbar/sticky-footer-navbar.css",
    "revision": "b2b8896441506c31fce37da2952d5ac5"
  },
  {
    "url": "docs/4.0/examples/rtl-sticky-footer/index.html",
    "revision": "fe598a8fb787d2b100f0f0663e1bd630"
  },
  {
    "url": "docs/4.0/examples/rtl-sticky-footer/sticky-footer.css",
    "revision": "09630d01995ef9c0f8fc9ae622f00466"
  },
  {
    "url": "docs/4.0/examples/rtl-tooltip-viewport/index.html",
    "revision": "a882ad25c39a73959b919954c5692cf9"
  },
  {
    "url": "docs/4.0/examples/rtl-tooltip-viewport/tooltip-viewport.css",
    "revision": "59ee4352f399bfe798346b4be4a5f88f"
  },
  {
    "url": "docs/4.0/examples/rtl-tooltip-viewport/tooltip-viewport.js",
    "revision": "8b7dceb6d175f264b789114201387bfa"
  },
  {
    "url": "docs/4.0/examples/screenshots/album.png",
    "revision": "ffaf0fd56864daafaa2ea23a3f2a8a4c"
  },
  {
    "url": "docs/4.0/examples/screenshots/blog.png",
    "revision": "db2571d976d8b910af2dd7fee0a97794"
  },
  {
    "url": "docs/4.0/examples/screenshots/carousel.png",
    "revision": "3ef960de8ed9de239dbebf855d3e693e"
  },
  {
    "url": "docs/4.0/examples/screenshots/cover.png",
    "revision": "f8234debe0727d830d378804fa6920ba"
  },
  {
    "url": "docs/4.0/examples/screenshots/dashboard.png",
    "revision": "564c98a3e0fb945b7cfa4941a9bfc072"
  },
  {
    "url": "docs/4.0/examples/screenshots/grid.png",
    "revision": "a3501bda7dcdde8a731e60988375ff71"
  },
  {
    "url": "docs/4.0/examples/screenshots/jumbotron-narrow.png",
    "revision": "da2fea942e2b79e889461234b2dce637"
  },
  {
    "url": "docs/4.0/examples/screenshots/jumbotron.png",
    "revision": "56e944951506af4971317a0e1d6a6b53"
  },
  {
    "url": "docs/4.0/examples/screenshots/justified-nav.png",
    "revision": "4f24d1d5953e79423cbe0254adf1ab5e"
  },
  {
    "url": "docs/4.0/examples/screenshots/module-002-quick-links.png",
    "revision": "0b9d6a79b6fa147124e59877b3109176"
  },
  {
    "url": "docs/4.0/examples/screenshots/module-006-content-panels.png",
    "revision": "1aa39ec7214be71f2461c7525a79349f"
  },
  {
    "url": "docs/4.0/examples/screenshots/module-012-product-details.png",
    "revision": "246bf20a1fbbae280c9c53adad871f7b"
  },
  {
    "url": "docs/4.0/examples/screenshots/navbar-bottom.png",
    "revision": "88f890990c2f75a00cec172d401aef10"
  },
  {
    "url": "docs/4.0/examples/screenshots/navbar-fixed.png",
    "revision": "c3af88c33126f669f2006f9e2c629fa2"
  },
  {
    "url": "docs/4.0/examples/screenshots/navbar-static.png",
    "revision": "a289e262bb99e84a494fad461082e8f3"
  },
  {
    "url": "docs/4.0/examples/screenshots/navbar.png",
    "revision": "c93f7634deb8db461efd121fae384de7"
  },
  {
    "url": "docs/4.0/examples/screenshots/offcanvas.png",
    "revision": "983be61f621aac2d19131df71a8ae309"
  },
  {
    "url": "docs/4.0/examples/screenshots/sign-in.png",
    "revision": "11f97fb403f227e059e00c4afa6a12fd"
  },
  {
    "url": "docs/4.0/examples/screenshots/starter-template.png",
    "revision": "a12386401c848ad90d4e3627858e973d"
  },
  {
    "url": "docs/4.0/examples/screenshots/sticky-footer-navbar.png",
    "revision": "3047deed467cfc70d9ab33b1ac75cda6"
  },
  {
    "url": "docs/4.0/examples/screenshots/sticky-footer.png",
    "revision": "525e473da6359f1db1c5c1769190c438"
  },
  {
    "url": "docs/4.0/examples/signin/index.html",
    "revision": "4c4a591d1ddf2e70abad3fb078d0f1eb"
  },
  {
    "url": "docs/4.0/examples/signin/signin.css",
    "revision": "ba362ab7f11733548cdc4dc14df941a7"
  },
  {
    "url": "docs/4.0/examples/starter-template/index.html",
    "revision": "d0b814258927ae601a7d7d2ae7ad476d"
  },
  {
    "url": "docs/4.0/examples/starter-template/starter-template.css",
    "revision": "8cb4aab3660723b641b6458f1a1d3ab1"
  },
  {
    "url": "docs/4.0/examples/sticky-footer-navbar/index.html",
    "revision": "9a331d8558899477a7d7e72e9f0a360a"
  },
  {
    "url": "docs/4.0/examples/sticky-footer-navbar/sticky-footer-navbar.css",
    "revision": "b2b8896441506c31fce37da2952d5ac5"
  },
  {
    "url": "docs/4.0/examples/sticky-footer/index.html",
    "revision": "3ec4aa3ecc0352fe457261cf76863347"
  },
  {
    "url": "docs/4.0/examples/sticky-footer/sticky-footer.css",
    "revision": "09630d01995ef9c0f8fc9ae622f00466"
  },
  {
    "url": "docs/4.0/examples/tooltip-viewport/index.html",
    "revision": "ea418fb433eb4f3b35907bd876340763"
  },
  {
    "url": "docs/4.0/examples/tooltip-viewport/tooltip-viewport.css",
    "revision": "59ee4352f399bfe798346b4be4a5f88f"
  },
  {
    "url": "docs/4.0/examples/tooltip-viewport/tooltip-viewport.js",
    "revision": "8b7dceb6d175f264b789114201387bfa"
  },
  {
    "url": "docs/4.0/extend/approach/index.html",
    "revision": "5861923c5258cbc9db94b4620a25f61d"
  },
  {
    "url": "docs/4.0/extend/icons/index.html",
    "revision": "4c185568063b727a250e2ae2b0bece7d"
  },
  {
    "url": "docs/4.0/extend/index.html",
    "revision": "b4b2aed64a9377c12c50f2b03fdad56d"
  },
  {
    "url": "docs/4.0/getting-started/accessibility/index.html",
    "revision": "5e14846549e9370238415bd21e260048"
  },
  {
    "url": "docs/4.0/getting-started/best-practices/index.html",
    "revision": "ba261d67cd7f2d5af4e1872b8d91b09a"
  },
  {
    "url": "docs/4.0/getting-started/browsers-devices/index.html",
    "revision": "5441b3ad9deeb773c4e8a87c3c254cb0"
  },
  {
    "url": "docs/4.0/getting-started/build-tools/index.html",
    "revision": "563735a92d2c8de90acd68e3d7b2057f"
  },
  {
    "url": "docs/4.0/getting-started/contents/index.html",
    "revision": "2ed82103b280e0728175a263ade955ad"
  },
  {
    "url": "docs/4.0/getting-started/download/index.html",
    "revision": "bd404adfdd31b9ea8892eeb46eec21d3"
  },
  {
    "url": "docs/4.0/getting-started/index.html",
    "revision": "57e26c10c593d202f21562bbdbea29ba"
  },
  {
    "url": "docs/4.0/getting-started/introduction/index.html",
    "revision": "a5deb0ba596302e7f986e57c6a5281a2"
  },
  {
    "url": "docs/4.0/getting-started/javascript/index.html",
    "revision": "6f1af65c716170fb9f570b9f9f9db999"
  },
  {
    "url": "docs/4.0/getting-started/options/index.html",
    "revision": "8a739ddae58e1dcd3d0e9577ca28ba65"
  },
  {
    "url": "docs/4.0/getting-started/theming/index.html",
    "revision": "21442b366928493afc0b2c529ab8591d"
  },
  {
    "url": "docs/4.0/getting-started/webpack/index.html",
    "revision": "df2d85d7ae1e55d1bbcb4462b3c59c06"
  },
  {
    "url": "docs/4.0/history/index.html",
    "revision": "3f1b25297d1eac259e028e94c0ca18d8"
  },
  {
    "url": "docs/4.0/index.html",
    "revision": "57e26c10c593d202f21562bbdbea29ba"
  },
  {
    "url": "docs/4.0/layout/grid/index.html",
    "revision": "846c2056f1510855cdb914628218f443"
  },
  {
    "url": "docs/4.0/layout/index.html",
    "revision": "ae291800c54fe36284ccd51cf345753f"
  },
  {
    "url": "docs/4.0/layout/media-object/index.html",
    "revision": "5d6ca62e31bd3613a8986caa37a4ff03"
  },
  {
    "url": "docs/4.0/layout/overview/index.html",
    "revision": "dd3f840de89c378a9125f8383e88b129"
  },
  {
    "url": "docs/4.0/layout/utilities-for-layout/index.html",
    "revision": "59c0b4d0c47c913c44fe3cfe2e00ac12"
  },
  {
    "url": "docs/4.0/migration/index.html",
    "revision": "a8cf51b17b484ccd674b8e92cc341b74"
  },
  {
    "url": "docs/4.0/team/index.html",
    "revision": "3f1b25297d1eac259e028e94c0ca18d8"
  },
  {
    "url": "docs/4.0/utilities/borders/index.html",
    "revision": "dc4d31a63dffe992373da3b205c46c0c"
  },
  {
    "url": "docs/4.0/utilities/clearfix/index.html",
    "revision": "a718a563d609174e29077137da9d11d4"
  },
  {
    "url": "docs/4.0/utilities/close-icon/index.html",
    "revision": "ea8ed56137f918a12df739ac9b2b30ce"
  },
  {
    "url": "docs/4.0/utilities/colors/index.html",
    "revision": "3070f61921d2c2adc79be6801597ad33"
  },
  {
    "url": "docs/4.0/utilities/display/index.html",
    "revision": "7c5c09d55e1ffbd3ed4e76a42471cb4f"
  },
  {
    "url": "docs/4.0/utilities/embed/index.html",
    "revision": "bc9de0ca5c328fbc25d09a742a23a52a"
  },
  {
    "url": "docs/4.0/utilities/flex/index.html",
    "revision": "6c5952e29654ed7df779ffee4a555b52"
  },
  {
    "url": "docs/4.0/utilities/float/index.html",
    "revision": "455f0ec9941e95e42347f41890da0018"
  },
  {
    "url": "docs/4.0/utilities/image-replacement/index.html",
    "revision": "38e0332acaec8c6346c8f5ba23eb23fe"
  },
  {
    "url": "docs/4.0/utilities/index.html",
    "revision": "9535669550592dc86dd2f013f633bd4d"
  },
  {
    "url": "docs/4.0/utilities/position/index.html",
    "revision": "438f78bd8ae76242d1fbc50db176d8de"
  },
  {
    "url": "docs/4.0/utilities/screenreaders/index.html",
    "revision": "8a6d4530f069ae30c206af98e969f41d"
  },
  {
    "url": "docs/4.0/utilities/sizing/index.html",
    "revision": "6592c3f2e8f9f68371f9d084facdce76"
  },
  {
    "url": "docs/4.0/utilities/spacing/index.html",
    "revision": "88a444a2cf6cf4ca80201f7ed76776c0"
  },
  {
    "url": "docs/4.0/utilities/text/index.html",
    "revision": "697112e2f1e6b53ae193a03aaf2eaed9"
  },
  {
    "url": "docs/4.0/utilities/vertical-align/index.html",
    "revision": "86d31a40f16f5b2a999b5c10f7336ba1"
  },
  {
    "url": "docs/4.0/utilities/visibility/index.html",
    "revision": "e84c05b2775717c9e14e595ad1ae424b"
  },
  {
    "url": "docs/getting-started/index.html",
    "revision": "57e26c10c593d202f21562bbdbea29ba"
  },
  {
    "url": "docs/index.html",
    "revision": "57e26c10c593d202f21562bbdbea29ba"
  },
  {
    "url": "examples/index.html",
    "revision": "38a63ddbe36f754094dc45abf0174269"
  },
  {
    "url": "index.html",
    "revision": "0f0d40f09911cce34702861ae795adb5"
  },
  {
    "url": "redirects.json",
    "revision": "36bf77a9083ab9b4dfcffe235909f690"
  },
  {
    "url": "sw.js",
    "revision": "42f72988cbd613ae00b4a2c3390712ae"
  }
])
