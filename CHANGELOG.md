<a name="4.5.3"></a>
## [4.5.3](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/compare/v4.5.2...v4.5.3) (2020-10-14)

### Bootstrap 4.5.3

* [Bootstrap 4.5.3](https://github.com/twbs/bootstrap/releases/tag/v4.5.3)

### Boosted

#### Refactors

- **grid**: `make-gutters()` mixin now has a fourth argument to workaround a new stylelint rule ([#488 (diff)](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/488/files#diff-22b47a742226a96b3355c42389db3028))

#### Brand

- **megamenu**: drop `margin-right` for close button ([95636efd](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/509/commits/95636efd5279f12d71811436d171f1084e8c111f))
- **colors**: ensure links get contrast color in background utilities ([568a0e8](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/509/commits/568a0e85181422619b5ece8107f31ea517a25000)) **(!)**
- **breadcrumb**: background-colored example, introducing dark-variant for separator ([94fcde1](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/509/commits/94fcde128d9ce52f1d9bfef750117784ed765604))
- **o-footer**: adjust spacings and sizing to get closer to the UI Kit (#509)
- **buttons**: drop `transition`s, mostly to ensure split button doesn't feels weird on hover ([d7c0d18](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/509/commits/d7c0d1844ad78c768df2e6f05f0bafd702b30d0e)) **(!)**
- **o-link-arrow**: drop underline on default state ([f58256e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/509/commits/f58256ea3e66bd0509df331d636aad5d0947110b))
- **cards**: adjust spacings to get closer to the UI Kit (#509)
- **navbar**:  ensure height is correct, even with minimised megamenu ([5eaf602f](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/515/commits/5eaf602f48d21a71c297720143bee832b98011f2))
- **dropdown**: too much horizontal spacing ([970fe32](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/515/commits/970fe32f4d71d977bd681e4b16126edb9dab1180))

#### Bug fixes

- **cards**: ensure cards groups' margins stick to spacers (#484)
- **reboot**: ensure `legend`s are bold (#477)
- **badges**: middle aligned (#471)
- **badges**: use supporting colours for `background`s (#466)
- **text utilities**: drop `!important` to match `text-emphasis-variant()` (#465)
- **pagination**: add default vertical margins (#467)
- **dropdown**: ensure to rely on dropdown state to rotate caret (#487)
- **buttons & inputs**: fix inacurrate `line-height` since latest type scale changes (#495)
- **o-stepbar**: smaller margin between stepbar items (#497)
- **RTL**: ensure value directives are used and RTLCSS runs after CSS compilation ([b8d17ff](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/515/commits/b8d17ff47b4ef15b1d06a9ea9f0c46de187c02e3))

#### Docs

- **tables**: revamp classless tables in docs theming (#483)
- **badges**: drop the `em` part since Boosted uses `rem` (#471)
- **contrasts table**: update content (#461)
- **o-footer**: ensure to use inversed social buttons in o-footer (#493)
- **modal**: update Orange popin old example (#492)
- **megamenu**: improved examples and wording (#509)
- **boostwatch**: fix a few examples ([4d86d51](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/515/commits/4d86d51241295a349d76f193e568824a2576ee68))


<a name="4.5.2"></a>
## [4.5.2](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/compare/v4.5.0...v4.5.2) (2020-08-18)

### Bootstrap

* [Bootstrap 4.5.1](https://github.com/twbs/bootstrap/releases/tag/v4.5.1)
* [Bootstrap 4.5.2](https://github.com/twbs/bootstrap/releases/tag/v4.5.2)

### Boosted

#### Refactor

* **RTL:** drop `o-rtl.scss` to prefer using RTLCSS directives, and fix carousel arrows ([8316284](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/457/commits/8316284bd89663a7dc3cc37af7e07ccd38a723a0))

#### Bug Fixes

* **alerts:** lock icon size ([29113f1](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/29113f1986b123f371f8abfe9f62fe04e96f6e22))
* **breadcrumb:** ensure separator won't shrink when multiline breadcrumbs, to fix [#394](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/394) ([89aa094](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/89aa09444dfd77314e066c73c846eec43e39a200))
* **buttons:** disabled danger button color was missing ([89cf6ed](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/89cf6edc1552d1f6c0db2ce7f48a5bb1610921c3))
* **buttons:** ensure focus-visible is used on toggle buttons ([aaa8e87](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/aaa8e87ba27d9017007856b1fed7a8e91d03980e))
* **buttons:** sizes for .btn-icon ([d9bc92a](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d9bc92af00d5370697a29ba3f04458a8f3296edc))
* **carousel:** ensure img are 100% wide ([68731b8](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/68731b8e78ae2c431b11d0c904e22ff20094ba4c))
* **color:** better matching light color ([8c59509](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/8c595099d38af6c58f534be2996e33dce6f563cc))
* **dropdown:** use only `padding` to handle height ([3d6878e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/3d6878e6dc93b532f97383973120bac98b424d7e))
* **links:** harmonize links underline over the codebase ([74fdd28](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/74fdd28c426dd3ed0df87f9db86647bbf64780ab))
* **list-group:** increase spacings to ease list-group alignment ([85262af](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/85262affaa5d4a940968d5b4bbdff8440362ad70))
* **modal:** align sizes with breakpoints ([9170a2e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/9170a2eca76483f8fb86bef5be7b45f55e06574f))
* **pagination:** ensure contrasts for focus state to fix [#397](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/397) ([d9c6fc0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d9c6fc003afa06d9a9aa7a61fd52ef26d99fafdf))
* **scrollspy:** `aria-current` set to `location` instead of `page` to fix [#455](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/455) ([add2084](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/add2084b0d1868d17648a2bbe64d36b79c26bb06))
* **toasts:** smaller close button ([eae416b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/eae416b2508068a5b5566cfd1ff94bbbdcba4d9f))
* **tooltips:** ensure content is left-aligned ([170189e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/170189e9fc0c3c3ff81686f7222ffc55ae89e9d7))

#### Features

* **cards:** Orange branded :tada: ([13c6cbc](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/13c6cbcef95d98f0bc6dd2898a482ab90cbc58cd))
* **progress:** Orange branded :tada: ([206b983](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/206b9837c14eee74c37960924e4fc6aeb2835e6f))
* **spinners:** Orange branded :tada: ([aa7bbb5](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/aa7bbb5f29590fab5f75426c3a8a5090aa708f3f))
* **colors:** use `#ff7900` as primary color & drop `color-contrast()` bypass for Orange :heart: ([57d07be](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/57d07befd6abb18e1b9ddd1d4ce0074432b877da)), closes [#ff7900](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/ff7900)
* **fonts:** using Helvetica Neue Arabic :tada: ([6cc2d72](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/6cc2d72e3beb974723d17dc0ff72fa124a2649f4))
* **logo:** drop useless `id` ([9df650c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/9df650c4eb6fbc5e15fc4e834da5ff025847d426))
* **logo:** improve logo again, closes [#438](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/438) ([d6f3a77](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d6f3a773d9f092bd27dc68d61b02ef273bcc190a))
* **modal:** drop `.o-modal` overrides to fix [#391](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/391) ([dfff6e6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/dfff6e66593be4b60541dc7e66867fc5a94064d4))
* **reboot:** handle `<var>` styles in reboot ([1460d1d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1460d1d302d8ddf58c98e8c9a7cc84c7dc64aa39))

#### Docs

* **docs:** fix sample page jQuery SRI ([08ba13f](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/08ba13fe6087f8254c7bc29c3fa19c69c566bb1d))
* **docs:** some English typos ([0d917a4](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/0d917a442991c2514f15a30562906a29b2887fb3))


<a name="4.5.0"></a>
## [4.5.0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/compare/v4.4.1...v4.5.0) (2020-05-13)

### [Bootstrap 4.5.0](https://github.com/twbs/bootstrap/releases/tag/v4.5.0)

#### Highlighted changes

- **New interaction utilities.** Quickly set `user-select` with the new utilities and Sass map.
- New Reboot style for pointer cursors. We now include a `role="button"` selector in Reboot to set cursor: pointer on non-`<button>` element buttons.
- **Examples are now downloadable.** We've added a script to zip up and offer all our Examples as their own download from the docs.
- **Saved ~5%** from the compressed minified JS builds.
- Redesigned docs homepage and navbar to increment us towards v5's new docs design.
- Deprecated `bg-gradient-variant` mixin as it's being removed in v5.
- Updated to jQuery v3.5.1, Jekyll v4, and dropped Node.js < 10.

### Boosted 4.5.0

#### Highlighted changes

- Bootstrap's carousels and Boosted's custom **carousel now looks the same**;
- **Megamenu** was very buggy for a while: works fine now, is mobile-first and RTL compliant;
- **Pagination** works better in small screen, by limiting the number of displayed items depending on viewport and wrapping as a worst case scenario;
- Improved **IE11** compatibility;
- `sass-math-pow` is not a dependency anymore :tada:

#### Details

<details>
<summary>Orange brand</summary>

* **italic:** em & .font-italic now render as bold to match the brand and improve retro-compatibility with Bootstrap ([158f5e3](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/158f5e3b35607a782c402ec3f7da96b3cd0e108e))
* **breadcrumbs:** ensure breadcrumbs items are underlined to fix [#372](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/372) ([6389048](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/63890480828117b90800eea0f716ffcf1397d7db))
</details>

<details>
<summary>Carousels</summary>

* **carousel:** play/pause button not working ([7a4045d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/7a4045d0dddf2051ce1112cb2bfcc3968c527251))
* **carousel:** remove legacy overrides in custom carousel to fix [#328](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/328) ([b8ae072](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/b8ae072e5ec315ceac2adbe5e7af825d25cdc3eb))
* **carousels:** prev/next buttons in RTL ([728e805](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/728e80517c0b0061ea017dc2334ca341c089d64b))
* **carousel:** same design for native and custom carousels ([3df37db](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/3df37db547bb65ddc30ea23f63bdfc5b52128e94))
* **o-carousel:** harmonize prev/next icons with BS carousels' ([265f44b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/265f44ba8244680cc29527fdd62d7e25c41e5932))
</details>

<details>
<summary>Megamenu</summary>

* **megamenu:** close mega-menu-panels when closing mega-menu ([5679eb1](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/5679eb179e0d3ab7595ce740849bb4154ce798c7))
* **megamenu:** default MediaQuery should always match ([d5172ad](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d5172ad18dd09a4e97b6e510f0c9c6b95393da22))
* **megamenu:** default to mobile view ([e7c1096](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e7c1096f3772c5b954249afbb5cbdd382d1260ea))
* **megamenu:** ensure subnav are shown when going back to desktop ([d4e35fb](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d4e35fbd2a0a2c07a684101fd5774de56160bd99))
* **megamenu:** event listeners unbinding doesn't work, wrapping functions instead ([738bc5a](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/738bc5ad4abf32447cc8483fe051e120711c3a42))
* **megamenu:** fully RTL compliant :tada: ([b7d871e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/b7d871e9abb8205ed9e991c66d855ff2a9dc9e0a))
* **megamenu:** overlapping subnav items on IE11 ([12cddab](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/12cddab734f97d2946fdb68b66cc6e25a9ae5c30))
* **megamenu:** remove .active when closing megamenu to fix [#330](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/330) ([4ba00d1](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/4ba00d159176d50aee67658d2d3b53edc28b53af))
* **megamenu:** handle orientation change correctly ([a06f188](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/a06f18853db3aa523336b9f932830be1f1a99563))
* **megamenu:** improve current visual state on small screen ([1d47d79](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1d47d79f908a4795435d0ea042d069cd3aeaa80a))
* **megamenu:** listen to media query events instead of window.orientationchange ([7246490](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/72464907a5c5e83662fac8baf1f43a69e4906d15))
* **megamenu:** mobile first styling to close [#340](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/340) ([c8d0e8e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/c8d0e8eec05dd416b9125208d7a594e6325b75fc))
* **megamenu:** ensure event listeners & ARIA are only set up on breakpoints they should, to close [#330](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/330) ([92e449e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/92e449e2171929a5275dcce5df770722ff840da1))
</details>

<details>
<summary>Pagination</summary>

* **pagination:** ensure it wraps if needed, to close [#317](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/317) ([02406a6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/02406a6f34b04cb71c215a4517454a9ff8d32abf))
* **pagination:** limit number of pagination items to display on smaller breakpoints for [#317](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/317) ([4bad17b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/4bad17b090a3bdd585ab8dcb67b81a0f647ab604))
</details>

<details>
<summary>Accessibility</summary>

* **color contrasts:** use [@ysds](https://github.com/ysds) lookup table to simplify color-yiq() ([c86758a](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/c86758a9490bfdda64fbf1d0eb6af570c1428b34)) to ensure more reliable contrast ratio calculation— and to drop `sass-math-pow` dependency!
* **focus-visible:** check data-attribute instead of class to close [#324](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/324) ([5255f21](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/5255f2179634d9fa3990128821be0873da042431))
</details>

<details>
<summary>IE11 compatibility</summary>

* **alerts:** ensure additional content won't overlap icon or button in IE11 ([f0a0470](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f0a04701547b86c069da587245cb47f1cc974fcb))
* **IE11:** missing block display for main ([3baf228](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/3baf228e122f5c621a9e8b6893183e2f8091fa1f))
* **stepbar:** truncated labels on small screen in IE11 ([cf74cb5](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/cf74cb5b53a228dfaea608a3f34c2b82b0bf354f))
</details>


<details>
<summary>Various fixes</summary>

* **badge:** missing spacing since `.btn` is now `inline-flex` — close [#319](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/319) ([5da7236](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/5da7236228a26ba45d088ee23ff30bfd37a09def))
* **cards**: ensure accordions headers aren't underlined ([cbad744](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/378/commits/cbad744430f067c47895a68c9b88cba8b9aa1579))
* **forms:** feedback icons got shrinked. Fixes [#354](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/354) ([a73db46](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/a73db46fce357386917b91fd8c21a1f91ce8e38c))
* **modal:** ensure to reset transition when modal is shown, to fix [#355](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/355) ([e2e1cd1](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e2e1cd105acc4358238c1f00582d7c289483ac28))
* **navbar:** current item indicator when last child, to close [#321](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/321) ([bd6bf79](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/bd6bf79b4e8f5776a89da838cbd6236089ae9cde))
* **navbar:** dropdown & icons alignment to fix [#373](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/373) ([9214cfa](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/9214cfafbce6d05313376dbbf364b7ee8ab1496f))
* **o-tabs:** arrow icons size & position ([1b1b11c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1b1b11ce73e9000d2bd70f3e0420978fb3825211))
* **o-tabs:** ensure accordions headers aren't underlined ([cbad744](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/378/commits/cbad744430f067c47895a68c9b88cba8b9aa1579))
* **spinners:** ensure color variants still work, to close [#318](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/318) ([6f8850c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/6f8850ce06aa58c650de4cde847c1b4624c4a5d1))
* **tablesorter:** reverse asc/desc icon to close [#364](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/364) ([6ab5c70](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/6ab5c70ad123e422b1201802280ae8ad80bdf24d))
* **transition:** remove prefers-reduced-motion refactor — counter-productive ([6f0dc39](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/6f0dc39e91ed78d8e3dae839db5fdac82f50a8b5))
</details>

<details>
<summary>Docs</summary>

* **Boostwatch**: remove useless things and update markup to reflect latest changes ([80569cb](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/378/commits/80569cbcd33db371d28e120c0209ba4d215af321) and [eddfe05](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/378/commits/eddfe05c02011828c4a72dcf503492296ef9374b))
* **Brand warnings**: remove brand warnings in docs since everything is either removed or handled ([80569cb](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/378/commits/80569cbcd33db371d28e120c0209ba4d215af321))
* **RTL**: update "Getting started" / "RTL" to be more accurate ([cdf26ae](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/378/commits/cdf26ae2ee709c690ea46d80c4174c15641031fb))
* **Examples:** use loading=lazy everywhere ([9185179](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/378/commits/918517978865cb79477e2a075cc0b07331bf5fde))
* **Scrollspy:** themify examples a bit ([ee7cc63](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/378/commits/ee7cc63ec4019879d1c572ed82d17de8530ca34a))
</details>


<a name="4.4.1"></a>
## [4.4.1](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/compare/v4.4.0...v4.4.1) (2020-01-15)

This version fixes a few bugs and add tons of small improvements to better fit Orange Brand Digital Guidelines.

### From Bootstrap (unreleased)

* Allow percentages in container widths ([0d08c74 in Bootstrap](https://github.com/twbs/bootstrap/commit/0d08c74d2fbb5e0a0b1991b5a51d7988f9e6952e)) 
* Escape brackets in `escape-svg()` ([35d5cbf in Bootstrap](https://github.com/twbs/bootstrap/commit/35d5cbf4fda4bfad4c244840824774bb94629212))
* Fix disabled `.btn` cursor ([fbf294a in Bootstrap](https://github.com/twbs/bootstrap/commit/fbf294a605e36a4cf9c66f0c4637f13ded18f727))

### Bug Fixes

<details>
<summary>Forms</summary>

* **forms:** feedback icons on IE11 ([1351de1](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1351de195478273f02f8b469d812c7b5e39ea6a8))
* **forms:** remove label color change depending on status for [#249](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/249) ([f4a1b8d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f4a1b8d36a44663da675db05e021f23f7a07721f))
* **custom range:** obvious focus styles to fix [#250](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/250) ([0bc63c0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/0bc63c0f711861d8f7ba797bfab25ff7962a942b))
* **forms**: default check inputs alignment ([b2acac6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/301/commits/b2acac69a7c822486916bf6e879db4db6efda1f3))
* **forms**: remove text-shadow on :moz-focusring ([ca6c08f](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/301/commits/ca6c08f4df9b1f75f74cb4e4969d1ee9e99cc358))
</details>
<details>
<summary>Buttons</summary>

* **button-group:** ensure parents get .focus-visible class alongwith .focus one ([0535720](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/053572043305d1dee9356e47afec6ca2cb216e3a))
* **button-group:** remove .focus-visible on blur & focusout ([19038b9](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/19038b9d1c1a98b5a6bd185b3784e32f491682b4))
* **buttons:** .btn-{size} variants were incorrectingly squared on .btn-info instead of .btn-icon" ([cc9847f](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/cc9847f0fa711d919a446e95045fcb39ce6302f6))
* **dropdown:** remove ARIA menu pattern to close [#204](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/204) ([d45b6d1](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d45b6d103e018b0f9cd795380d910483514f0d9c))
</details>
<details>
<summary>Navbars</summary>

* **navbar:** current item alignment when minimized ([9bd53fb](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/9bd53fbe8f6156d0f2fdd91aca14ee645f8ff0ee))
* **navbar:** h2 → h6 unecessary in .navbar-brand ([190e1ef](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/190e1efbf561c092fae81b27b88793d465509491))
* **navbar:** simpler alignmnet for right-end navbar ([cd2434b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/cd2434baec40728f6311ff353cc1ef0063d7ebda))
* **supra:** update supra bar breakpoint for hidding on tablet (768px) ([2b961b4](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/2b961b4c4da671c30a419b7332ba1025f768e520))
</details>
<details>
<summary>Megamenu</summary>

* **megamenu:** cannot match design & have a predictable focus order… ([8e004b2](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/8e004b26b3ca80fb5817e5bd350df46672ef8c59))
* **megamenu:** ensure height is removed when going backward ([e3aea5e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e3aea5e2ece7a97f76ff915f140c0be7a126cf21))
* **megamenu:** linter error on .attr() ([3f3e8cf](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/3f3e8cfcb8ba3cc18a4c427d1ad3f31350f13db0))
* **megamenu:** allow multiple megamenus in the same page bny using $.closest()… ([066ebc0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/066ebc0132c934c36432e76faebd41669179f370))
</details>
<details>
<summary>Tables</summary>

* **tables:** more precise line-heights ([553cb10](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/553cb10704fb327b17375120e3a0f9a77bd764ca))
* **tables:** use the correct pattern for custom checkboxes in tables ([520baf9](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/520baf9a37713af0e20b9544d00e9d97e14133d9))
* **tables:** vertical spacings were wrong ([02c7b9a](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/02c7b9a20bd515a84ad8f8f66f2ba2028691c237))
* **tables** missing unit in table-cell-padding ([acaf48a](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/acaf48ae70a2ffb2596ddddd82f7837daaf5fef0))
</details>
<details>
<summary>Miscellaneous</summary>

* **alerts:** dismissible alerts height ([a86753e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/a86753e10eba4da6b37e12b4fc73982441045368))
* **badges:** missing variables after merging… ([f03a086](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f03a0869df0e912f0016e6438c7624db49126f49))
* **bg utilities:** remove useless aliases ([d002cb3](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d002cb30baf9f25adb3ba8c9031009e2869b0639))
* **breadcrumb:** arrow alignment after last merge ([60419cc](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/60419cc895e5c4c1fa12826daad042f5ff876413))
* **build:** exclude essentials folder from postcss.config ([b96c605](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/b96c60527cb7d2d621632b69384bf694a2233396))
* **carousel:** remove width & height attributes from inlined SVGs" ([3f2196b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/3f2196b84bcc05d3ee10f7b31372ad0c9015600c))
* **color:** ensure .text-primary in .navbar-dark uses digital orange 2 ([21db919](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/21db9192fb308f065bab35258237198f68e1f435))
* **icons:** missing space in str-replace function ([d3928f0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d3928f01a071bc018d0251c812a47320984fc2e9))
* **icons:** use Digital Orange 2 for icons meant to be used on a dark background ([63227dc](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/63227dc3169f64368c7427c1793979783c1dcc9a))
* **o-footer:** linting errors ([dbedc08](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/dbedc084acc9d77a18d6c2fc2a888e4be082217b))
* **pagination:** do not use numeroted links when prev/next show labels (?) ([d40d167](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d40d167a55211bab7f91a70faaba9961b9f79413))
* **o-modal**: diplicated selector ([009557c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/301/commits/009557c36448725dce5f609e8625d74ebf82d471))
</details>

### Features

<details>
<summary>Alerts</summary>

* **alerts:** additionnal content example now uses the multilines version ([bb4e806](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/bb4e8067dd318ab745737c8e4ef45700262437b2))
* **alerts:** adjust default alert size ([bd866da](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/bd866da9a3d2303f46857937dc85735dcc3145fe))
* **alerts:** ensure alert level is accessible by using visually hidden text for [#248](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/248) ([0e6d5f6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/0e6d5f617fa2a0d4502479c82c59ba03d52257af))
* **alerts:** ensure headings and additionnal contents match UI Kit ([3eadc6d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/3eadc6d8949a977a4795034708ee42eca5ec2d16))
* **alerts:** icon sizes and alignment ([a36c058](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/a36c058060a14f74884251aa1850960f7f9ad1c8))
* **alerts:** new variant for close icon in alerts ([1da0abe](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1da0abe2f6cd345436eaca3f862b6e57548459c4))
* **alerts:** reduce spacing around icon in alert-sm ([cd7bd6c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/cd7bd6c804e7c92d21bd7ef29332c1d2c223f9db))
* **alerts:** warning icon changed to circle ([4fd768b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/4fd768b6eca5f742e01b9e117c78805fbcd07ec0))
* **alerts:**  improve icon sizes handling([b8b2a4b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/301/commits/b8b2a4b1bb734642a323a33c93948c456f1c959e))
</details>
<details>
<summary>Badges</summary>

* **badge:** add sizes variants to badges and include a white info version when badge is large enough ([859cc5e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/859cc5e1ef1c54c97da986bdb14772f7af28db38))
* **badge:** improve sizes variants' spacings ([33b52e6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/33b52e6b4bb7cea997a0fc36e2739e15f8a12434))
</details>
<details>
<summary>Breadcrumbs</summary>

* **breadcrumbs:** improved RTL support ([6d69515](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/6d695153b8b0f464104b7454fc0b9f8ca48022b8))
* **breadcrumbs:** use aria-current=location instead of page ([da743b5](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/da743b5541e9eb9f54f3bdd209e5b025c1addca9))
</details>
<details>
<summary>Buttons</summary>

* **button-group:** border color on dark background ([08b10b3](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/08b10b354c130da968e70b7d2b779d305fd16bc3))
* **button-group:** missing states for border color on dark background ([fb182dc](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/fb182dc4a03006c597d9a7c5207901116318b92c))
* **buttons:** ensure proper sizing for .btn-icon ([47f2a48](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/47f2a48694b326b9b97bc32b1dadb66929df6d3b))
* **buttons:** improve social buttons to reduce filesize and allow size to vary ([c091a92](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/c091a92d3baa5996e7a2bf3414438aaf27454758))
* **buttons:** move labels 1px up ↑ ([5635182](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/56351827d234b240cacc39a2c6a771dc9a2cac29))
* **buttons:** social buttons brand alignment (size, spâcing, icon size) ([51e841e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/51e841e3564d994fab8307ef1ea7ba950edb710e))
* **buttons**: with icons ([3a18fbf](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/301/commits/3a18fbfabc7359f0a678bfb728b5b11c0a912a68))
* **buttons**: toggle buttons with icons ([b902f21](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/301/commits/b902f211dd94c5b4a7e3873466e697c026652d51))
* **social buttons**: adjust icon size & position for linkedin, pinterest & email ([4d0d1dd](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/301/commits/4d0d1dd0619c97dbd8ce2a8af89dfafd549ec9f4))
* **split buttons**: dropdown-toggle-split size+alignment ([51ed9e3](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/301/commits/51ed9e39fc61b5d8a9feea9ec9c85dde76859fe5))
* **split buttons**: finally managed to implement the custom not-full-height border to match the brand… ([1589cd4](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/301/commits/1589cd4eafde6cd4c427003bb4acec260a9c8a16))
* **dropdowns**: caret placement for both dropdowns & split buttons ([d18f280](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/285/commits/d18f280279f495dd24ebd685afb0747ad80d9bcb))
* **dropdowns**: .show caret's colors ([9b2c36d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/285/commits/9b2c36d270308cf4428fba97514341c904ca0cfb))
* **collapse**: accordion sizes matching the brand ([6d6df39](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/285/commits/6d6df396293b467417ebc7ed27609a7a3e949d9c))
</details>
<details>
<summary>Close button</summary>

* **close button:** use Zeplin's defined cross for close button ([332f4f3](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/332f4f3f140a907c6d790bae28082633856f500d))
* **close icon:** get outline back on :hover ([7deafac](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/7deafac190193cafbfb428486fd0b9c40b87ad8a))
* **close-icon:** add context to close button label where appropriate to close [#248](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/248) ([c38e93a](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/c38e93a7843acf0363b9501d2b5d5e3a5a96b33d))
* **close-icon**: switch outline-color on hover/focus ([e269c00](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/301/commits/e269c0056c030ef764cb7c149c68a3b0b0d49cfd))
</details>
<details>
<summary>Forms</summary>

* **forms:** convey status using icon in feedback message to stop relying on color only, for [#249](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/249) ([95e6f6c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/95e6f6ccbba11452c2aa3fd41198c038337f12d0))
* **forms:** custom select arrow sizing+position ([3ac4187](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/3ac418711687e165cbd58a889812a0f8362f4e6e))
* **forms:** custom switch icons sizing+alignment ([a2a2ffe](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/a2a2ffe4cb7b581d12b6b37347fce1366b202bf8))
* **forms:** get background-image back for custom checkboxes ([edfdded](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/edfddedc06bdc6fdc53b089d6262c43d9e127d82))
* **forms:** get rid of form-*-sm things, forbidden by the brand ([8d41b61](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/8d41b61caebd4e619f65cc3d1d7486595d95d343))
* **forms:** improve custom range on Chrome ([0b145f2](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/0b145f26802f501992ffe0e3349510661eb750ca))
* **forms:** labels positionning ([5be3b52](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/5be3b52fbb560e1dcdaa91c357291e88082c4294))
* **forms:** remove info icon from invalid custom select ([a4c82db](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/a4c82dbf52d8e0b36799d04c375644df1f783082))
* **labels**:  apply bold in reboot rather than in forms to prevent duplicated selector ([9215084](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/301/commits/9215084d455697cb7567487fb553f80083dd5385))
* **forms**: decrease feedback icon size ([d44abe3](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/301/commits/d44abe313d4754101fcfb4c385bd8cd3dba895af))
* **forms**: allow .is-required class ot be used on any HTML tag ([2b3531c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/301/commits/2b3531c8f18557f0268a2f71a3d1ed47179503a7))
* **input-group**: update styles according to Brand suggestion [24a69ce](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/285/commits/24a69ce064117c97fa69b267d7d7438b929b4b17)
* **forms**: dissociate (in)valid states styling [3ee1dd5](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/285/commits/3ee1dd5c01feec5f5137033650280dbc27da788f)
</details>
<details>
<summary>Megamenu</summary>

* **megamenu:** adjust spacings and sizes to match design ([8d3b5a6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/8d3b5a6ffcfb106582b1ba9a995b32da133db1f4))
* **megamenu:** improve links style in mega-menu-panel ([b9d1d14](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/b9d1d14d3a35cae75f858314a7ba4b4c4bd8b910))
* **megamenu:** improve perf by using will-change where possible ([0ce1ed9](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/0ce1ed92c56e52712b1b5428925a8886809dda95))
* **megamenu:** revamp megamenu to both align with latest brand guidelines –— close [#228](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/228) — and to fix [#247](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/247) ([554468e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/554468ec1bc85ea58dfcc25a4491c9e1c4a5a3ad))
* **megamenu:** use aria-current + CSS to indicate current item and its active parents, related to [#254](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/254) and [#252](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/252) ([eb863ba](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/eb863bae830205870c9ff1fcaf7de2852620140e))
</details>
<details>
<summary>Navbar</summary>

* **navbar:** add a gray bottom border on navbar dark ([5634c92](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/5634c928d37a0547f1936ba0e2287e7d8e8d32a6))
* **navbar:** adjust line-height for display-* in navbar-title ([8431b57](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/8431b57bade9ef29fe237399d7718d762c9c8863))
* **navbar:** current item's border alignment after [#252](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/252) ([7620f43](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/7620f431a557241aff7fa02541db964e29be5a52))
* **navbar:** do not show current item with color only anymore to close [#252](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/252) ([7dbd842](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/7dbd842a4165921cde4bac0acd7e6ec30967142d))
* **navbar:** improve .navbar-toggler & .minimized versions ([f89b44f](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f89b44f039cf23dcf2b3098fd643e3157b256de0))
* **navbar:** improve alignments and sizings ([a2e4841](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/a2e4841a21d471689e74deeef1340b56b44db9ee))
* **navbar:** improve small screen navbars ([b20bc27](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/b20bc279112bf01b8f66c77aee3f82783561b1a2))
* **navbar:** new navbar-toggler-icon(s) to switch from burger to cross ([3690c4f](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/3690c4f9c0718468524371f5f5bad98e3f22c315))
* **navbar:** update navbar minimized size to 60px, reduce logo to 30x30 ([821912c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/821912c7f41b4ea3df5d190648ea031e508b0dac))
* **navbar:** use .nav-icon instead of .icon in navbar ([7f4298c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/7f4298ca4a2bb5cea93eaefd290803e0ec705b05))
* **navbar:** use close icon when collapsible menu is open ([1fa2dd5](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1fa2dd51f1771bb4648ac67b345b7f21ac32c2fd))
* **navbar:** use digital orange in navbars ([f20de5b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f20de5b48b2fe70942e210d37f1d3f5d0aeb306f))
* **navbar:** use transitions between standard and minimized navbar ([fad4ae4](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/fad4ae43b7bbdcbd3b90563fe9cb891f4e66cb30))
* **navbar:** remove left margin on navbar-brand ([5db69c4](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/285/commits/5db69c4d6346410f01e90ee3d07a94ea634b99b2))
* **navbar:** move icons 2px up to match the brand ([d018996](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/285/commits/d01899688318363aafb93fc00e81e18a448d1333))
* **o-navbar:** handle navbar-title's line-heights ([aa76516](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/aa76516be7cf3af069705dfddb77f92d3d35c846))
* **toggler:** update toggler icon according to the brand, remove border and icon is bigger ([e333908](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e33390828703f3b123aad58e34a296368778e2a0))
* **skiplinks:** improve skiplinks pattern, making it simpler for [#254](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/254) ([d4f4083](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d4f40833c6a913cf924e8f9819e7ac3661bef893))
* **supra bar:** adjust spacings and sizes to match latest design kit ([48f35ac](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/48f35ac9f45f44e2ce289a8b26fb2d3b74fd6f09))
* **supra bar:** ensure 40px height to match the brand ([a0bb045](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/285/commits/a0bb0452a1a5a9f240f28aa52ecf09b8fab5b587))
* **supra bar:** dropdown arrows are smaller ([0e8ec4b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/285/commits/0e8ec4bfc32989bd72f953ad176b4bb0677bbd41))
* **supra bar:** increase spacing between nav items ([0d6d0b2](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/285/commits/0d6d0b237d4a301437c2b55c84a62284e6e90d57))
* **supra bar:** increase spacing between dropdowns and nav-icons ([bbaaaab](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/285/commits/bbaaaab82add927c869a5b9ee48097ee4dc59e69))
</details>
<details>
<summary>Tables</summary>

* **tables:** remove .thead-{dark|light} variants ([dcd2bbd](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/dcd2bbde14dca3bf4b731f99f1dffe20aab2df42))
* **tables:** remove bordered+borderless tables ([5c06087](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/5c0608706605b6c088a656b1c62c0c96536b5533))
* **tables:** remove contextual classes for tables ([3158486](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/3158486d0df4dc7a0ad6a998e1b3b5514f1b96b1))
* **tables:** remove striped rows tables ([38767c2](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/38767c24335e1a36269612cd94087cddc42ed00d))
* **tables:** removed .table-lg and adjust default+sm sizes ([ce13796](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/ce13796063f4b9693dbf7f7af46aed2ac88cacf2))
* **tables:** simplify tables CSS and adjust sizings ([1b3e641](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1b3e64141a91542958b55deec5df73b7814c2844))
* **tablesorter**: sort icons alignment [700c3ad](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/285/commits/700c3adaccb8f32dcdf4d5e13fc78eff4b6a364e)
</details>
<details>
<summary>Pagination</summary>

* **pagination:** adjust spacings and sizes ([86d0969](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/86d096942cf4a3be8d3bb93130cbc27120d1a466))
* **pagination:** improved RTL support ([f8256af](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f8256af472afc61533d8abe54757d7099892fd0d))
* **pagination**: improve alignment to better match the brand ([7c495c3](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/301/commits/7c495c3bf13067c268eb08525704b52f3c3304cb))
</details>
<details>
<summary>Colors & icons</summary>

* **colors:** improve .text-body & .text-muted utilities to ensure proper contrasts, to close [#274](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/274) ([0d62c74](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/0d62c74281bfbe40a653a1721315c7b136254207))
* **colors:** remove .text-{success|info|warning|danger} utilities ([1ecdbe0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1ecdbe01bde815aaebce34ba802cc779e2f9ce55))
* **icons:** add Mail + Person SVG icons ([175d154](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/175d154e3ba8d821133adecc932df94df455db3d))
* **orange icons:** get mail+person icons back and improve them thanks to escape-svg() ([6f0e617](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/6f0e617cd218a57fcf1c1c3fa646f4c4f8b86a36))
* **utilities:** add border-color utilities, looping through grays ([bcd4b62](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/bcd4b623ed90475df9cd035da836d939deb62482))
* **utilities:** amend documentation for border-colors, including grays ([5639866](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/5639866711040d7d6e37e5d3f14605c84f93618e))
* add digital orange to follow brand requirements ([cafc3b6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/cafc3b630edfb54f63fe439e9cfa4237d7f1b1b4))
* **bg-utilities:** .bg-{success|warning|danger|info} now uses supporting colours instead of functionnal ones ([f2b11dd](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f2b11dda4c6272c02fa6e327655e21b1c58c9a0d))
</details>
<details>
<summary>Footer</summary>

* **footer:** use h2+h3 in footer instead of h1+h2 ([0cb93ad](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/0cb93adff6233b4c9d251bd424909bee8f4ea043))
* **o-footer:** reduce specificity & use variables ([fa69dac](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/fa69dac2fb502aa6d51d0dbd46025ff4e951587a))
* **o-footer:** specifying component nistead of overusing ulitilies ([9fe08a3](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/9fe08a3a4d8295305f06d891d9721f8ff2d5a6a7))
</details>
<details>
<summary>Miscellaneous: transitions accessibility, RTL mode…</summary>

* **o-carousel:** improved RTL support ([ce7a586](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/ce7a586949ffadab109a42975a1138ceb51c83d2))
* **o-link-arrow:** improved RTL support ([67d60b6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/67d60b61465d441c8f7de4cf7ea63b59e21181c7))
* **o-scroll-up:** improved RTL support ([a74a9c1](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/a74a9c12a10cafc238ab0140913ed2b4bc5755b6))
* **RTL:** improve RTL overrides — resetting line-heights, improving RTLCSS usage by using comments instead of overrides… ([9f539e3](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/9f539e3276891cb5a514ede4a3b4c2c07c66a839))
* **o-switches:** o-switch icons sizing+alignment+docs ([7ce21b9](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/7ce21b9cb490044639b53183cfd9dbe06f904818))
* **progress:** ensure animation is used only if -transitions is true ([0f9541b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/0f9541b1325e962a82419ab813b1b55cad2a464d))
* **reboot:** remove block display on _new_ HTML5 elements, targetted IE10 ([aefcc36](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/aefcc36c284ce2b3c9e6cff0377cd3755f1499f7))
* **reduced motion:** use a placeholder for fine tuning transition disabling instead of locking it globally ([4683631](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/4683631d7b9a6405569afde96f75e9bc466d22c7))
* **scrollspy:** add aria-current to element and its parents to close [#253](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/253) ([8250659](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/82506598db5ffb241f4799ebe657d9b4dbe936fc))
* **transition:** reduce motion globally instead of duplicating single declaration block, to close [#255](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/255) ([e6f7814](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e6f7814e0cd0c1e4819dc2fac1c9803e070316f4))
</details>

### Core

* **gitignore**: ignore .npmrc file from Git to allow proper npm login ([9141759](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/9141759600de5b3d004537e5870934ccd13ee63d))
* **gitignore**: ignore .tgz when using npm pack ([1cdbca5](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1cdbca5bf2a614b608a165da7ccf1f7f84fd4d89))
* **JS:** disable ESlint sort-imports for focus-visible bundling ([6c4ed28](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/6c4ed28eefe312d5c1770d8b531b593acc82b8fe))
* **Bundlesize**: slightly increase boosted.css limit ([215e209](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/301/commits/215e2098f5a720cf4149461db877be0be107e488))
* **workflow**: add Mattermost + Calibre actions ([0de4169](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/285/commits/0de4169869e77e0d8e4bc34d42996dd7e677b223))
* **workflow**: add Slack action (multiple commits…)

### Documentation

Documentation and website itself have been significantly improved and updated (mostly improving accessibility, and dropping some variants here and there — forbidden by Orange Brand).
A new section called "Essentials" is added to show various headers and footers implementations.

<details>
<summary>Essentials</summary>

* **docs:** megamenu example was wrong ([8fa582e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/8fa582e630eb4cf0b874922bba36b3579d5dfa36))
* **docs**: remove weird examples for input-groups, where prepended/appended things could be confused with label ([46e4273](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/285/commits/46e427323ef30c0ad0f5f7bae10dd9fec17ced80))
* **header:** add global headers module in Essentials ([f0d0357](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f0d0357c08af0bac6116e867e461a1c946168607))
* **essentials:** border color utility ([f841c9c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f841c9c3fe3e0d2e87c5fcbbf34f281e930e1b4c))
* **essentials:** fix hr html linting errors ([27272ca](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/27272caa0383624468abc69809fa00e5e2319363))
* **essentials:** fix unquoted error ([0657ba1](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/0657ba1b873d675eb5a1c6f5015e08bc6d68f67c))
* **essentials:** hide service links in megamenu on mobile ([1a60fda](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1a60fdae8a699726b03c43cd634362fa855c90b5))
* **essentials:** use local src for Logo in global header logo ([7265114](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/726511408210ace32560ceb306081a253fac6ebc))
* **essentials:** add anchor links to headers ([9b44b55](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/9b44b5553c714955ee74a1aeade02717577eaa57))
* **essentials:** add footer's screenshot for essentials index page ([d264634](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d26463408c853b4efa594b1c274c1a36deffd3f0))
* **essentials:** add global headers screenshots + optimize other screenshots ([dc92c3d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/dc92c3d0af8d6c217bf7fd38f3d20cf0bb798d75))
* **essentials:** add IDs on each header example ([e3726e7](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e3726e74c63dcd8cb6cabab6f4700ffc1cc89110))
* **essentials:** add standards collapsible searchforms ([a825d22](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/a825d2264b4c096e17d3e8cf6de3f5ecf7cb5d16))
* **essentials:** adjust spacings in supra bar ([a8eeaaa](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/a8eeaaaa537cabcb6b441ce9db02d4bce6e864c2))
* **essentials:** done with global headers example, except dark search form ([f048972](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f048972946621f5632f5532a4adb9f1156d516a8))
* **essentials:** done with megamenus → needs to check responsive, though ([bbd7f8a](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/bbd7f8a1e49731be3973e7c0d70f4a7e15e5f5ca))
* **essentials:** duplicate additional menus to match design and keep things accessible ([73dae46](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/73dae468a0e156dac5a89e98674716af32087428))
* **essentials:** first footer component on destkop ([9803e2d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/9803e2d15dd3dc4c312e9a67dd1ac206509febad))
* **essentials:** first megamenu example fully working, including svg-delete update ([1582922](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/15829221fa0a66e7456a1e213a9fde0a438c3174))
* **essentials:** footers done ([b4af9de](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/b4af9dea5f7a4339a801836d824b39acecfed6e3))
* **essentials:** global headers on mobile ([af56176](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/af56176b19702e4b9a2446c5a5de2f63e5fe0c57))
* **essentials:** improve a11y suggestions for megamenu ([fec8ba0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/fec8ba02c749fde6292da0cc0af825e645b54fbd))
* **essentials:** improve global headers' screenshot for essentials index page ([70463ee](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/70463ee79e9a0245c400f27cf397a432e649fa1d))
* **essentials:** increase spacing between nav and collapsible-nav ([9dfb698](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/9dfb6983f615c7eb5bdd7a571140fdc4af86a7e9))
* **essentials:** make supra-nav fluid-width ([61d48b7](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/61d48b7ec263cbf879fb49b5c0a9defd392910e5))
* **essentials:** megamenu for mobile / tablet ([8ef646e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/8ef646e68de7553c3bf11bf1ed37aacecc5b3336))
* **essentials:** megamenu suggestion using burger+label ([02474ce](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/02474ce62574bff7bebb7fafa2fe50346919d2cf))
* **essentials:** missing global headers updates from last week… ([2d51df9](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/2d51df91fc2f1f845135cb5fd56ded26f261cdbe))
* **essentials:** move orange module to a new dedicated space named essentials ([c42ba8c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/c42ba8c850d5b2fd06607cfc8cff92f1b0ed4c7f))
* **essentials:** rework headers on different screen size ([4b39ac3](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/4b39ac34bae7542c0623ac0800463c9abf5c77c3))
* **essentials:** up with footers N°2 & 6 ([7dddb42](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/7dddb42498fff51361a461cf752180a1f082067a))
* **essentials:** use container & improve RWD ([5d68fcf](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/5d68fcf35d50cdfc245f3e62a164cea75da4bc8f))
* **essentials:** use fluid containers for global headers ([438aa5f](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/438aa5fc8162e7f5ca848d07fed2cec71b2c7309))
* **essentials:** using megamenu in first global header example ([07b47cf](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/07b47cfea1c02fccff1bf477ec2fecad8f56b7df))
</details>



<a name="4.4.0"></a>
## [4.4.0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/compare/v4.3.1...v4.4.0) (2019-12-04)

### Bootstrap's v4.4.0 — v4.4.1

* [Bootstrap's release](https://github.com/twbs/bootstrap/releases/tag/v4.4.0)
* [Bootstrap's release](https://github.com/twbs/bootstrap/releases/tag/v4.4.1)

### Boosted's v4.4.0

Since there's tons of branding changes, be careful while migrating from previous releases. Visual changes will include:
* a few color changes, and specificially `.text-*` and `.bg-*` utilities are now locked with solid `color` and `background-color` to ensure contrasts.
* type scale evolved, with `letter-spacing` and `line-height` changes that could change the way things show up (especially for big text, like displays and headings).


### Breaking changes

Alongwith some refactors, things could have move or be removed, but this shall be totally logged above.

* **moved**:
    * `_o-step_bar.scss` → `_o-step-bar.scss`
    * _o-bullet_points.scss` → `_o-square-list.scss`
    * `mixins/_orangeIcons.scss` → `mixins/_orange-icons.scss`,
    * `_o-responsive_table.scss` → `_o-responsive_table.scss`.
    * `_o-nav.scss` → `_o-tabs.scss` 
* **files dropped**: 
    * `_o-special_font-size.scss` 
    * `_orange-css.scss`
    * `_o-card.scss`
* **classes renamed**:
    * `o-nav-light` → `nav-tabs-light`
* **classes dropped**: 
    * `.btn-outline-*` and `.btn-xlg`
    * `font-weight-*` 
    * `.text-uppercase`
    * `.text-justify`
    * `.pagination-lg` and `.pagination-sm`
* **Browser support updated**, mainly dropping IE10.

There might be more, but I did my best to log everything above.

#### Bugs fixed

- **chore**: Wrong use of a variable in `_reboot.scss` (#216)
- **forms**: Valid & invalid fields don't show any focus state (#191)
- **custom forms**: colors for valid/invalid states ([7a9e5ee](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/239/commits/7a9e5eeb1a9478632aed00c3416f5738891d4eb0))
- **nav-tabs**: Active tab appearance KO in Nav light (#190)
- **dropdowns**: Dropdown focus and mouseover (#158)
- **megamenu:** horizontal layout next to responsive containers in v4.4.0 ([3014f23](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/3014f23d9d7cc1ababa13c70cbe950fbd13fd052))
- **nav+pagination+dropdown:** ensure there's no unwanted underlines on non-content links ([6854009](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/6854009ee395263e177fd2f93713bcf07731c870))
- **o-footer:** prevent o-footer .nav-link styles from leaking to tabs… ([463b8bd](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/463b8bdd30dadb369b08b6e1ee60e64da50c6cc1))
- **o-nav:** reset margin on nav-tabs ([67b859d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/67b859de336d98d27230d5ea5f1ba944f9793003))
- **o-nav-local:** allow full width o-nav-local and stick to wbe guidelines for spacings ([afcfb7f](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/afcfb7f579b66cc057ade93a331b6a3e02be67d2))
- **popovers:** ensure dismissable popovers (links without href…) gets their button color applied ([9721b3f](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/9721b3f6f53f5342568c8d1d0450353c6f9c5535))
- **toasts:** improve close button styles+doc ([639081c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/639081c5fe05d79fd4011f6d25373d8937357e80))
- **o-switches**: misaligned icons and improved 3 way toggles, ([d23a932](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/239/commits/d23a932a73312378adc28277a44ad05e3b05b3e0))
- **o-switches**: focus visibility improved ([87f16fd](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/239/commits/87f16fdc8a19d75e8fd2c8bd8ab526f02970cc09))
- **SVGs**: missing some background-sizes  for IE11 ([d2bbf2](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/239/commits/d2bbf2a08ad37649f945c52c218bf2d275d8c0d0))
- **JS**: remove undefined method init for auto-initialisation on domcontentload ([2781faa](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/240/commits/2781faadad18f41dbb7c0f535e7d1657d19678ec)) since Bootstrap removed their init hooks…

#### Features

<details>
<summary>Focus enhancement</summary>

Include [WICG's `:focus-visible` polyfill](https://github.com/WICG/focus-visible) : in [43dd3397](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/213/commits/43dd33974d711268cd22dc30762cf08493d5fcbb) for #169 #101 #166 **but affects the overall library**.

  * **focus-visible:** add, use & document :focus-visible polyfill to improve [#101](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/101) ([43dd339](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/43dd33974d711268cd22dc30762cf08493d5fcbb))
  * **focus:** improve focus style to close [#101](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/101) ([1f68d0d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1f68d0d251e85ecf8cf4849f1c5b145cce959a4d))
  * **bundle:** focus-visible should be last item in external scripts array ([f32c810](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f32c81045c586524a27b99d423f0a693e531f14e))
    * **focus**: improve focus visibility consistency across components ([ab51eed](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/213/commits/ab51eedb8a87b1667dba5c3258b87decb3ea2b26))
</details>
<details>
<summary>Inlined SVGs with icons harmonization</summary>

For example, the close icon is now the same everywhere.

  * **icons:** use states mixins in orange Icons ([68f04f4](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/68f04f4acf82765521313d0f2fab5c721e3ab045))
* **icons**: ensure each states are handled for each svg mixin ([91a0bd3](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/240/commits/91a0bd3cf7cd4604aee58babf412275735c7a104))
* **icons**: prefer inline-block to block for SVG icons  ([74266b2](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/240/commits/74266b22598d63745ce77069ca40f4b101838154))
</details>
<details>
<summary>Scroll-up component with custom target</summary>

See #175 and #192 .

  * **scrollup:** add an option to scrollup component to allow passing an anchor to replace the top of the page ([d89e380](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d89e3809de858409c4f3ca510f13089cb3fce2ca))
  * **o-scroll-up:** use the same chevron icon than in pagination, arrow links and breadcrumbs + clean up CSS and JS ([e29caa7](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e29caa7500643446749e89d3295024abcadae8f4))
</details>
<details>
<summary>Orange master logo</summary>

* Filesize optimizations: #178 and  #180 
</details>
<details>
<summary>Social buttons improvements and new social networks</summary>

* #189 : Refactored the way social buttons are done by removing mixins ([ebe80c4](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/213/commits/ebe80c409f0af3c470e93c4d655a9f31d9510a3e))
* **social buttons:** use Sass maps and advanced functions to handle customizable social media button, to close [#179](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/179) ([9973d15](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/9973d151a99d0cc10b5ef5f80dac1388b934938f))
* **social buttons:** remove Google+ icon and examples after [#179](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/179) ([e1e5322](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e1e5322b4c9c3a8c4af9b7ec652aaac02bcc1b38))
* **buttons:** ensure social buttons are available even when orangeIcons' missing ([cb33191](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/cb331910ad023f23d73bbf58d771733f0ecbf867))
* **buttons:** add Pintereset & Snapchat to social buttons ([9c07cc8](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/9c07cc862f7cc53ff09f857ea69934ebd33be6dc))
* **social buttons:** use visually hidden text instead of aria-label, in case of disabled CSS ([987b244](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/987b2442202585c7f2d4995b2fc70f209fe2cae8))
</details>

#### Orange Brand Digital Guidelines

The [Web Browsing Digital Guidelines](https://design.orange.com/guidelines/web-browsing) were reviewed and Boosted evolved accordingly to better match them — as well as [Buttons](https://design.orange.com/libraries/buttons-stencils), [Form](https://design.orange.com/libraries/form-stencils), [Navigation](https://design.orange.com/libraries/navigation-stencils), [Alert](https://design.orange.com/libraries/alert-stencils) and Table stencils.

<details>
<summary>Stepbar</summary>

  * **stepbar:** aligning with brand's stencil, close [#170](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/170) and close [#125](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/125) ([a9ccab6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/a9ccab657c202d3b6f933c475c800a8df20879e2))
  * **o-step_bar:** arrow position was wrong ([b1d6673](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/b1d6673dc4422033965fcfc9bdf71c4312dc60b5))
</details>
<details>
<summary>Accordions</summary>
 
  * **accordion:** update accordion styles accordingly to navigation stencils, add sizes variant and improve focus visibility to close [#159](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/159) ([9f07e9e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/9f07e9eede2013259db29f82e14b87c69e38c07b))
  * **card:** improve accordion variant a bit ([5a1effd](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/5a1effd49537668bb833d55a28ee54230e82158f))
</details>
<details>
<summary>Range Selector</summary>

  * **custom range input:** adjust sizes to match stencil and close [#114](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/114) ([f0a54c9](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f0a54c90eead26e6f6995fc0b3ddc58c7ad9fd8a))
  * **custom range input:** color and sizes adjustments to match form stencils ([ee8f590](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/ee8f59015bd02e3139c9eaecaa3ebcfd3c8160e7))
  * **custom range input:** show lower/progress part on supporting browsers and improve disabled state to match form stencils ([4c15366](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/4c153665608a70a73a2e8c052befb6505869ba6a))
</details>
<details>
<summary>Pagination</summary>

* **pagination**: remove sizes and improve arrow icons handling. Also close #168 : added focus for active page-link ([d2f9c6c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d2f9c6cb963629631655e93c8293f2a7a52394db))
</details>
<details>
<summary>Breadcrumbs</summary>

  * **breadcrumbs:** change links+active styles and use the same chevron icon as in pagination to fix [#174](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/174) and close [#167](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/167) ([cfd79d5](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/cfd79d55b3253bbf5930aaeef79a5014af29af94))
</details>
<details>
<summary>Alerts</summary>

  * **alert:** use digital Orange 1 for .alert-primary since text is black ([e739520](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e739520ed2958bd0bfa65c2cf769d4d4c4cc2b5b))
  * **alert+modal:** harmonize close icon through alerts, modals and orange popins by using a Solaris icon and cnosistent styles ([733d6e8](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/733d6e845d94c6a8e051c53f92179fe808ffc5cd))
  * **alerts:** make outlined alerts default style to match Orange stencils, restrict to functionnal colours and simplify Bootstrap override ([4b21b23](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/4b21b238787976f92bcff724f67e5883c9ecd65d))
  * **alerts:** update system SVG icons to see through content, as seen on new alert stencil ([9df2e51](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/9df2e51e9f95939db3e85fbecbe99c623b15e2c8))
  * **alerts:** update variants and positions to match new alert stencil ([06d9497](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/06d9497dae6dc800b837fc828f90ca429404f63e))
* **alerts**: use ::before instead of ::after next to %svg-* changes ([954fa4a](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/239/commits/954fa4adf65a93308dca1889b1bc32a5e0404c14))
</details>
<details>
<summary>Modal </summary>

  * **modal+o-popin:** harmonize close button style to fix [#83](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/83) ([db82b2c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/db82b2c5c8c744f42897bf7546467b0f2a77ede1))
  * **modal:** missing variable after merge ([4febaa6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/4febaa6a01f4aa157d520e5ae3335b3e3cf27d46))
</details>
<details>
<summary>Tooltips</summary>

  * **tooltips:** adjust tooltip's arrow's dimensions to match form stencil ([bc06d46](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/bc06d467ebb9f985c089b52f680a0884b0668a6d))
  * **tooltips:** set visible tootlip's opacity to 1 instead of .9 to close [#156](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/156) ([8dff8a0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/8dff8a09a606ff7af438bfa33f39cca0e736a584))
</details>
<details>
<summary>Buttons</summary>

  * **button:** transparent borders for .btn-link, to ensure .dropdown-toggle won't override ([46feabe](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/46feabe452885d41a67dd0be42b6663533ce962d))
  * **button-group:** missing dark background cases ([5aa6a51](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/5aa6a518796d4ab130cb4962afb5c8fc2f2ddc01))
  * **buttons:** button sizing to match stencils ([ce809a5](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/ce809a5d4917f7fd0ec01245a04587e140403471))
  * **buttons:** buttons & inversed buttons didn't match as in buttons stencils ([122de4a](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/122de4ac4b7f003a8fea69b273a0fd0d7370aec5))
  * **buttons:** missing focus state on .btn-link… ([7bcda03](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/7bcda03e9af8adb1f8bd138a1d6d96649df6a6ef))
  * **buttons:** missing focus styles on active states ([fd8100e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/fd8100ee31cf457c1c38d0b0a394bae631c1c0ba))
  * **buttons:** prevent focus state from overriding active state; only applies to .active class ([1e1fa74](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1e1fa74ef97e160fcc62a9102a78c06b5cccc0e6))
  * **buttons:** typo in button variant mixin ([5926d9e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/5926d9e03c1843aa5bdcd85334cbea518484393c))
  * **btn-group-toggle:** match Buttons' stencils ([a930785](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/a9307853dadeae1197367b9c0a6a357d99c3dfae))
  * **buttons:** new  with outlined variant ([526bcef](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/526bceff667d74f8cdfb1b410f4f8d0170d914d7))
  * **buttons:** remove .btn-xlg variant, removed from button stencil ([d12c4a2](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d12c4a2d27c55ae344e89b72f2a30004a4d9b2db))
  * **buttons:** simpler icon button, thanks to buttons stencil update ([be155d2](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/be155d2d09a6a4bf3ec16c00f741325d58846ef5))
* **dropdowns**: lock colors alltogether ([18d8c6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/239/commits/18d8c6c0bedd8a7c0ecc6cb11250239e045ab2a3))
</details>
<details>
<summary>Forms</summary>

  * **custom forms:** improve focus handling with focus-visible polyfill ([df28b77](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/df28b7737ba29075937249c9c067c6f60b40b02d))
  * **forms:** focus visibility for valid/invalid states to close [#191](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/191) ([b371fe2](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/b371fe2e8877552b3950ab79e563767b9db3c02d))
  * **forms:** adjust colors and spacings according to form stencils ([542d6ca](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/542d6ca66ab500066e80aa89eb9e25f2602c0539))
  * **links+forms:** use -500 for disabled states ([75343ea](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/75343eaf96b37569e2eeb3db10531882de14aac9))
* **forms**: validation icons sizing and alignment ([b25d52a](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/239/commits/b25d52aa01a6eec6e89339b6a114b31e3e00e781))
</details>
<details>
<summary>Tables</summary>

  * **tables:** refactor + brand stencil implementation… ([646b408](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/646b40806eb4d75aefba76f25eaf7bd86c617595))
  * **table-dark:** ensure .text-primary uses digital Orange 1 when in dark-table ([8ab2ecf](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/8ab2ecf211bcd4841844bf6e7c812b59a6647c1f))
  * **o-table:** invalid selector ([713d23b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/713d23badbf9fcdd798c2a23f3997474eeff6eaf))
</details>
<details>
<summary>Navigation and tabs</summary>

  * **nav-tabs:** improve spacings & focus to match stencils ([7ab253d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/7ab253d78d0241f06658eb4c189966c0ecc1a17e))
  * **navbar:** increase touch target size, overall alignments and make documentation reflect Boosted branded navbar usage ([3543314](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/3543314b0f6ce10c5bb282efe448b90161d91f17))
  * **o-link-arrow:** use -icon, just like in breadcrumbs and pagination ([75848c9](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/75848c975b4fd20e46b7d5eaedf387afcd91b17a))
  * **o-nav-local:** only declare the specific styles ([da445cf](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/da445cf4819cf0d5ae7e9e6d537d7772eb408c9b))
  * **o-nav-local:** use digital Orange 1 for links when o-nav-local in inversed ([b5aed66](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/b5aed66141530f38c63e506c6ca8c8e6527841d5))
  * **o-navbar:** update supra navbar after main navbar refactor to use consistent selectors and better inheritance ([93a89f5](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/93a89f54158e34250f2e53217f495e82e1c9a56e))
  * **responsive-tabs:** new styles to match tabs+accordions stencils ([989a0b2](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/989a0b23ccbeefd64d88acc2033277e2bfe979a7))
* **dropdowns**: offset in navbar + background in tabs ([ae9c884](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/239/commits/ae9c884713ee03569c50e123ab5b5d9c801bb001)) + colors when in navbar-dark ([7cacda1](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/239/commits/7cacda1255f28e3a7bf7000b4d45cd448108ebcc))
</details>
<details>
<summary>Typography</summary>

* **type:** type-scale refactor → font-size + line-height + letter-spacing for each breakpoints ([872cb3d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/872cb3d02e22082aba51dda0b742b8840b6d1e37))
* **type:** use text-rendering as an enhancement ([2361a11](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/2361a1155322b3dc6ea5205ec5b8c007afe64acf))
* **text:** remove font-weight + uppercase utilities, as it's forbidden by the brand ([84cc728](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/84cc728f1087c5eb42a2155672b1842c59f767cd))
* **font:** improve main font-stack for [#218](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/218)… ([aa1363d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/aa1363dcb109cbfe9545fa020edab77fffc6269f))
* **font:** prevent font-synthesis for supporting browsers to start [#218](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/218) ([68f7c15](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/68f7c151a7b9f45acd631a9e984a8edb69fda253))
* **type scale:** small line-height was incorrect + using calc() for unitless line-heights ([534bbce](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/534bbceea312f99a75c2f69baca5c230d0e6d2da))
* **reboot:** let form elements inherit letter-spacing too ([6b66a03](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/6b66a0392472a51889b4c73e3ec74b65b8ffc2bf))
* **reboot:** remove discretionnary ligatures ([23d559b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/23d559bd943a5ba73ad31fc39b300d2b6dfb9501))
* **reboot:** activate font-features where appropriate ([3b19d2d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/3b19d2d23d8668afb567edadb480bc9c40c90be3))
* **reboot:** add underline to links in list item in main content ([b803b7e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/b803b7e5dbf1bd152aef7043dc57acd505d39499))
</details>
<details>
<summary>Color Palette</summary>

* **colors:** ensure contrasts in .text-* + .bg-* + badge / list-groups / table-rows components by using color-yiq function ([cf719f6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/cf719f69f8d8863a5c35d09ee0d7313ed9206b5f))
* **color utilities:** ensure contrast by setting black or white background/color on their equivalent utilities ([11d79d0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/11d79d0378fa4183879fc53b51b399f205dd5845))
* **colors:** add missing colors and use them where appropriate ([08796be](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/08796be3265e48b20d857e85c975c1f61e61cfbd))
* **text:** override .text-primary when on a dark background, to use digital Orange 1 ([0018c18](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/0018c186171bcc633e4ff853c807d183b8aed519))
* **progress:** use supporting colours for progress bar, as seen in Orange's guidelines data display chpater — and make it bolder and taller ([625f58f](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/625f58f1ad989fcf27afcf41c1512c286ea4a15f))
* **cards**: some backgrounds were wrong ([9ce60444](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/239/commits/9ce60444ae7c8ff5439049891cc79cc79ee0e250))
</details>

#### Core

An effort was made to improve Boosted customizations consistency (eg: `// Boosted mod` comments to flag intended overrides) and a few refactors to ensure we're using variables where appropriate.

<details>
<summary>Browser support</summary>

* **chore**: updated to match Orange's targets, including ESR & IE11 ([419ba7b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/419ba7b3b4a9324951c3b89c404bb58afaa4521e))
* **chore**: update Browser Stack browsers list to run Karma test suite against ([fca29b2](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/239/commits/fca29b25ec392ec2e31855ec67b6e28c910a48a6))
* **docs**: update browser support after .browserlistrc changed ([0aa58d0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/239/commits/0aa58d01ea6471173610c26d9286d409c4ac3577))
</details>
<details>
<summary>Refactor</summary>

* **o-priority-nav**: using utility classes instead of custom styles ([708ed99](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/708ed9943231ce469e63cb692291336816ace9cc))
* **o-link-arrows**: remove redundancy and renamed o-link-arrow-variables to match Bootstrap naming pattern ([79ac75c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/79ac75c58f88e7316e4f9a82b4df641dd974a77a))
* **o-table**: improve o-table & tablesorter styles by using much more variables (#197) and simplifying selectors after (#216) ([08400b2](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/08400b21f59de907833bad49a451388a6f0f8647))**
* **o-tablesorter**: icons placement ([6041e40](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/240/commits/6041e40d344dac9845b0ab656f6664bd4d0b4a61))
* **chore**: remove unused `_o-special_font-size.scss` partial SCSS file ([8e758fc](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/213/commits/8e758fc474f22b7f577208839b4e1993239c0e97))
* **o-square-list**: moved `_o-bullet_points.scss` to `_o-square-list.scss` and updated default list styles ([cdfe8e7](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/213/commits/cdfe8e79667829d232dd1b642ba69788d4a16887))
* **chore** [28be179](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/213/commits/28be1790470a5015f6bf7d011afb933a9960a114) and [3eb96ec](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/213/commits/3eb96ecd1688d37804e07a1abf036f5402c06835): 
   * renamed `mixins/_orangeIcons.scss` to `mixins/_orange-icons.scss`,
   * renamed `_o-step_bar.scss` to `_o-step-bar.scss`,
   * renamed `_o-responsive_table.scss` to `_o-responsive_table.scss`.
   * renamed `_o-nav.scss` to `_o-tabs.scss` 
   * deleted `_orange-css.scss`
* **buttons**: custom `.btn-outline-*` variants have been dropped since they're not brand compliant ([ea1f00f](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/213/commits/ea1f00f270f7c6e43dc03588effe10bd64022662))
* **status icons**: system icons now use a placeholder to be extendable, instead of a useless mixin which duplicated styles ([6cd7b64](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/213/commits/6cd7b642851747ab6528982c0726acef59dbdb60))
* **Pagination**: remove `.presentation` class ([88551f0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/213/commits/88551f0b8b31c0de13280988b525cb6ec1dfb6e9))
* **navbar**: do not require .bg-dark utility for .navbar-dark anymore, does not make any sense ([112c4a2](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/213/commits/112c4a2c30a9839ae92560c95d67063dd8cddf20))
* **nav-tabs**: renamed o-nav-light to nav-tabs-light and make it a nav-tabs variant ([2ecfa98](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/213/commits/2ecfa9857e1e899e4b65cd5d48a15d19cd97e49b))
* **toasts**: use variables where appropriate & ensure proper contrasts ([9d4b42c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/240/commits/9d4b42c3ee8d7991a87df35f1fada301a2e39e84))
* **o-carousel**: improve img handling in carousel + use variables where appropriate ([3128f33](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/240/commits/3128f338bf05e4872f21c0b98e8a3bf04e5f9aa4))
* **o-card-link**: replace custom o-card-link by .stretched-link utility  ([3f1aa3f](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/240/commits/3f1aa3fa06ab5fe31cb1b1ca7bfd0dd763fdcb0b))
</details>
<details>
<summary>Boosted mod comments</summary>

* **boosted mods**: harmonize Boosted mod comments for #210 ([568220d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/568220df46eeb9b8b9f3eb3ef8cd69bf2dd0bc37))
</details>
<details>
<summary>Maintenance</summary>

* **mixins:** move focus & active mixins to mixins/hover ([4ebbbda](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/4ebbbda3e5f1a499a7db1fd63d150bb5bbf648b2))
* **variables:** new `$accordion-spacer` ([576080e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/576080e4b5a7b0ad360ce84bcd6bf0cbac57978f))
* **chore**: remove + ignore .vscode folder ([57f36db](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/57f36db7ae70d7ba89df32243b62888ef78d57ed)) + ([e12bc2e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e12bc2e2bb9df070c88da9fafc6de5aba629b321))
* **RTL:** missing variables import… ([d8e1f74](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d8e1f74026d056216c8cece79cbb8ad3fd3a9dc6))
* **scss:** missing parenthesis in state mixins call ([4f0e9a1](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/4f0e9a139939ceb3e99187b9d71be0141a50951f))
* **bootstrap:** included Bootstrap styles… ([58b32e6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/58b32e636b2aff3bd280fdc8c169905a1e193426))
* links to CONTRIBUTING.md ([5a4a1e6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/5a4a1e6ad6efc143a4265be77d713d6b200605bd))
* **Validator**: new warning to ignore ([2c671b9](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/2c671b9) & [3afef1c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/240/commits/3afef1c880eeb21bdeadb228dc082abe50fa6e23))
</details>
<details>
<summary>Implement new Bootstrap's `escape-svg()` function</summary>

  * **stepbar:** use escape-svg function and variables where appropriate ([820168f](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/820168f0cd9af58fdbf2f4792ec7f3634530ca78))
  * **o-tables:** use escape-svg() function and variables where appropriate ([c3dfc17](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/c3dfc171100e809805f585057b44d26e2491cd35))
  * **pagination:** use escape-svg function and variables where appropriate ([f5da24f](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f5da24f3b90cd20b95a3659bf863d8ca0c8cf6f2))
  * **o-modal:** use escape-svg function and variables where appropriate ([7b3744f](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/7b3744f0a502b8b5a4a146d5507bdf936ad9f650))
  * **o-nav:** use escape-svg function and variables where appropriate ([ea1d9db](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/ea1d9db5a43d17bd23c312165f0a202f2b62d3f0))
  * **navbar:** use escape-svg function and variables where appropriate ([dfe6624](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/dfe6624024b2b06f6389a64ed8228f8863b9c6f6))
  * **icons:** using escape-svg in orangeIcons ([2361801](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/2361801c315cc49229e3a2dcd3e2ac57b1c8dbe4))
  * **forms:** use escape-svg function and variables where appropriate ([5b59cac](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/5b59cac746252aff15ae05c6ac58ccadc8860e54))
  * **card+o-card:** use escape-svg function and variables where appropriate ([d62ca48](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d62ca4815295bebee76bcde209a8aa446a108153))
</details>
<details>
<summary>Use Bootstrap's new `add()` and `subtract()` functions</summary>

* **chore**: use new add() & subtract() functions where appropriate to output valid calc() function ([ba5d0fc](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/213/commits/ba5d0fc8e77d0796ea7e8ecc152e20ff490eaca1))
</details>
<details>
<summary>Grid</summary>

* **grid**:  allow both Boosted's fluid-containers and Bootstrap's responsive containers to work side-by-side ([04e90bd](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/213/commits/04e90bd0a54b819d93a510f4f6950a0e4fe02feb))
</details>
<details>
<summary>Github repository & conventions</summary>

* **CODEOWNERS**:  define myself as JS/CSS/SCSS code owner for Boosted #235 ([c6e8eaf](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/235/commits/c6e8eaf9e0c703972cad041f746d0e8811e7c378))
* **Actions**: Use new Bootstrap actions, with Bundlesize + Coveralls + BrowserStack actions #230 #234
* **README**: use SVG logo and add alternative ([4046aa2](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/239/commits/4046aa2ae01a7f0d660f6274a9fb5c7f3fe7c2d5))
</details>

#### Documentation

Documentation's changelog is proportionnal to what's been done up here. ↑

<details>
<summary>Updates</summary>

* **doc-megamenu**:  typos in megamenu documentation (#185)
* **docs:** use text color utilities where appropriate in contrast ratio table ([0b00137](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/0b00137e684ef8e3968a6714bcf0a387f1f1c1e7))
* **boostwatch:** last close button with aria-label ([61d78fc](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/61d78fc490baebac3d62e63d065d48a59bf6fbb4))
* **doc:** missing active classname in breadcrumb example ([f8a6376](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f8a637664c9e0adedb01ba48231f0d05453f4ebf))
* **doc:** use 'You are here' as hidden text label for breadcrumbs ([a4ec919](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/a4ec919fd1664b84ca4b356af7ea1ebe245faaa5))
* **docs:** also use visually hidden text instead of aria-label for size variants 'social buttons ([7969371](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/7969371ffe1b1ba3dea3f93ab76a444803fc2c5b))
* **docs:** dropdown sizes' variants allowed by Orange brand buttons' stencil ([1228d06](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1228d066b95b84858d727ed3e3c5e67ed232936c))
* **docs:** duplicate IDs in Forms component ([9266014](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/926601481ad40d5379a270eba935593b7a962462))
* **docs:** duplicated capture tag after merge ([4d1b796](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/4d1b796ad454ad7ba50aacc99081750594f5d78b))
* **docs:** harmonize color/colour to respect Bootstrap's voice ([a9e94f0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/a9e94f01985b97a6dd0c3ac287a1219e506df652))
* **docs:** HTML validator shouting at an h1 in example ([44d9fbf](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/44d9fbfdd6e8382d7a8c0c75a5807af2386dcddf))
* **docs:** improve brand warning icon's alignment ([d521915](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d5219159f6d77b5150b7878bf2515f72b96fd691))
* **docs:** invalid markup in index.html ([899a25b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/899a25b00b283b00d24dcf9a08b855021ad29909))
* **docs:** missing accessibility callouts inclusions ([8a8728d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/8a8728d99f628a7342bfa444773c4ab14294f1b0))
* **docs:** missing parenthesis in mixin call in scss ([d1edb84](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d1edb84f281f85f8d2f71d828e9d8427c577dabf))
* **docs:** span rows in type-scale tables where appropriate ([f005ffc](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f005ffc83b053781a944479a22b7eba49a2f4697))
* **docs:** typo in color lead paragraph ([c63808c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/c63808c06d5882c478d91f922abc27ff4252c9a9))
* **docs:** update reboot's font-stack part to mention Helvetica Neue and Boosted's custom font-stack ([8b8a59c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/8b8a59cf8614cc3d33fb936f9c7f50d88bfc662a))
* **docs:** use btn-secondary button for button-group-toggle dark background example ([b6500ba](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/b6500ba124633d966d5020fe60ca1773f1a3572f))
* **docs:** wrong color in table-info contrast example ([173e99d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/173e99d62a97ea38ef6e7ab1be0297aba5b97e70))
* **docs:** add a dedicated table variant for contrast ratio tables ([4a99951](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/4a999518eb5af38133983cb77d37b82f5bafc04b))
* **cdn:** clarify CDN usage and update links for icons and helvetica ([50ca276](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/50ca276b32ee97c8933b7b381725adc2f064523a))
* **doc:** minor improvements on documentation styles ([5ce5dd6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/5ce5dd634825eac213a5ad282afdc6c97375f427))
* **docs:** add contrast ratio tables in color utilities page ([73e82ba](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/73e82ba5fdc61afa2e73c3f6aebd78c2b1164864))
* **docs:** add focus-visible paragraph in accessibility page ([0f4abb9](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/0f4abb9d01748db33a7f4e393400438d5c1899ad))
* **docs:** remove forbidden text utilities' cases from examples ([dc98e19](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/dc98e1996f34dad88290b556c0209d5d14cc5160))
* **docs:** text-success is too heavy in table with its black background… ([bcbe827](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/bcbe827662d98f3763aa495d9dcec7defaff6c57))
* **docs:** update layout overview details — will need some rework, I guess ([b52e404](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/b52e40497ff13f1fb012593ea3f7e7c47998a96c))
* **docs:nav-pills:** remove border on tab-content on nav-pills examples ([a78afc6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/a78afc64d19720af86f5e8510a5c1e58e232baa0))
* **docs:** update Brand and Team pages #237 ([899d731](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/239/commits/899d73123b7058573d1583fe89ff032a907fbbf3)) and add callouts to credit Bootstrap back ([c267803](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/239/commits/c26780313fbc2e001cc883715f28bc5d3dd80e34))
* **docs**: use markdown in Hitsory page ([7b05cc2](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/239/commits/7b05cc20a0d580afacaf637975591f4ab8b2b683))
* **docs**:  mention Boosted's team instead of Bootstrap's #237 ([899d731](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/239/commits/899d73123b7058573d1583fe89ff032a907fbbf3))
* **docs**: replace Bootstrap's brand page by Orange's one ([c90fa9b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/239/commits/c90fa9b9b779aabee8d32611f02d6a52dc6dec00))
* **docs**: mention Bootstrap's team in a callout + use Brand page for Orange's one and use a callout to mention Bootstrap's ([c267803](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/239/commits/c26780313fbc2e001cc883715f28bc5d3dd80e34))
* **docs**: use CSS instead of big PNG for homepage's main illustration ([e8f09f7](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/239/commits/e8f09f7d6398430c3ebc577f54df0c66963912a4))
* **docs**: use Boosted CSS where possible to decrease docs styles' filesize for #225 ([82369c5](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/239/commits/82369c5bf2c1d16e575a0b80d52f4c96d484598d))
* **docs**: update utility example after harmizing close icon ([550bd24](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/239/commits/550bd2456f1d3bf19177397711a4aac59c9c097a))
* **docs**: use .sr-only instead of aria-label for close-icon ([612b17b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/239/commits/612b17bba5c1a7873fd691689d1e9dda6e40eae8))
* **docs**: compress images and use SVG where appropriate ([2d394e2](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/239/commits/2d394e2b71fff019822249a9d4fbb39b8ea24c76))
* **docs**: use card-deck pattern on homepage for IE11 ([b081b4b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/239/commits/b081b4b8e696f752376bafd1f8764e8c8a6e8767))
* **docs**: remove X-UA-Compatible meta ([fdb07a5](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/239/commits/fdb07a572e54ce8f878a208ede0d9f88d00dfbad))
* **docs**: multiple nav examples+callout (#225) ([d9c8dc8](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/239/commits/d9c8dc86ceccf394fbf80a5145f1256b7ac033c2))
* **docs**: explicit ARIA roles on landmarks to match a11y guidelines (#225) ([4937ec3](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/239/commits/4937ec39edd086624c33cbabd6ebcb749711888b))
</details>

<details>
<summary>Examples</summary>

Every Orange branded examples have been redesigned and updated to use as little custom styles as possible, and also to use SVGs where approriate instead of  cranky PNG.
</details>

<a name="4.3.1"></a>
## [4.3.1](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/compare/v4.2.2...v4.3.1) (2019-04-16)


### Bug Fixes

* **autocomplete:** add autocomplete="off" on all radio and checkboxes in doc as explain in v3 : https://getbootstrap.com/docs/3.4/javascript/#callout-buttons-ff-autocomplete firefox persist state during browsing https://bugzilla.mozilla.org/show_bug.cgi?id=654072 ([e3ed81b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e3ed81b))
* **brand:** update orange brand page with new small logo recommendations ([2e0e20f](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/2e0e20f))
* **build:** fix os plateform detection for rtl-build ([9728f6d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/9728f6d))
* **build:** move doc-rtl task after jekyll compilation ([533fc03](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/533fc03))
* **build:** remove unused variable ([92d00cd](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/92d00cd))
* **button:** fix js error when linting ([c896c95](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/c896c95))
* **button:** update button plugin, also listen to the focusin/out on the input element to update focus classes ([de4ae96](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/de4ae96))
* **buttons:** fix focus management in button plugin ([c9a6de6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/c9a6de6))
* **buttons:** put back PR https://github.com/twbs/bootstrap/pull/28587 to fix issue[#100](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/100) ([3e163c9](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/3e163c9))
* **carousel:** adding aria-label and title on the buton play/pause [#98](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/98) ([b8e5345](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/b8e5345))
* **carousel:** adding config js ([aa3637f](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/aa3637f))
* **carousel:** adding title on buton prev/next [#98](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/98) ([a58960b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/a58960b))
* **carousel:** fix linting errors ([453462f](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/453462f))
* **carousel:** remove useless css class carousel-button and swiper-button, replace btn-default by btn-info that manage the hover and focus effect + add aria-hidden on icon ([8ad4d20](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/8ad4d20))
* **carousel:** update button play/pause position let some space between carousel and button ([18cf1e4](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/18cf1e4))
* **carousel:** update carousel documentation, rework the way JS listen to click and update the icon ([f18ed05](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f18ed05))
* **carousel:** updated the outline 2px ([ab2c168](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/ab2c168))
* **cusotm-carousel:** disable important scss [#98](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/98) ([7ed69c3](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/7ed69c3))
* **custom-carousel:** adding play and pause button, update css. ([2e45311](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/2e45311))
* **custom-carousel:** fix css by unsetting the css position of small points and reducing the height of the custom carousel ([101e793](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/101e793))
* **custom-carousel:** fix focus on button pause/play [#98](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/98) ([8d44495](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/8d44495))
* **custom-carousel:** focusing on the button enabled, js checking element container, using color code, boosted mod comments [#98](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/98) ([c9974d2](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/c9974d2))
* **custom-carousel:** remvoe html tag inseide md file [#98](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/98) ([c44fd7d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/c44fd7d))
* **custom-carousel:** update css rules remove spaces ([8be14e6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/8be14e6))
* **custom-checkbox:** click on orange brackground enabled Closes [#134](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/134) ([b8ab1b3](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/b8ab1b3))
* **custom-checkbox:** remove unnecessary code [#134](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/134) ([69f2114](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/69f2114))
* **custom-form:** putback outline for focus on custom radio and checkboxes ([31a08e6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/31a08e6))
* **doc:** add rel noopener to external links ([1239bcb](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1239bcb))
* **doc:** fix brokenlinks ([6d6feb7](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/6d6feb7))
* **doc:** fix comments on documentation that was missinterpreted by markdown ([25321c1](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/25321c1))
* **doc:** fix duplicate ID ([7908b16](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/7908b16))
* **doc:** replace inclusion of jquery from cdn to local one for examples pages ([03ac0ff](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/03ac0ff))
* **doc:** update checkboxes and radio components documentation remove autocomplete=off from sample code for copy/paste but keep it in live sample when it's relevant e.g: "this is checked checkbox" ([f06f728](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f06f728))
* **docs:** fix invalid link to docs 3.4 ([7b1ab08](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/7b1ab08))
* **dropdown:** fix caret position for dropup ([35b2cc0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/35b2cc0))
* **example:** fix dashboard jquery inclusion ([b6891c1](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/b6891c1))
* **example:** fix duplicate ID and fix img height in carousel ([5be56ca](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/5be56ca))
* **examples:** fix icon position on administration edition page ([c598d28](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/c598d28))
* **examples:** Orange-homepages fix the swiper and remove old codes ([c7a9ef5](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/c7a9ef5))
* **examples:** replace jquery.js by jquery.slim in script inclusion ([cfaae3a](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/cfaae3a))
* **form:** fix is-required classes added by error on for instead of class tag ([391946f](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/391946f))
* **forms:** fix border-radius declaration to use new mixin and fix lint errors ([f2cf49c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f2cf49c))
* **forms:** fix form validation message issue [#112](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/112) small-font-size need to be 14px ([6cf86c0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/6cf86c0))
* **forms:** fix validation tooltip position and add documentation about is-required class on label for required fields move from is-required > label to label.is-required. is-required > label css will be removed in v5 ([1ebdbe9](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1ebdbe9))
* **modal:** fix the modal position when body has overflow and scrollbar is displayed see https://github.com/twbs/bootstrap/issues/28101 for more information ([08605b0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/08605b0))
* **modal:** replace padding-right by right position for fixed element + add position-fixed to fixed selector, remove sticky-top from fixed content, and finish by removing all sticky content selector as they're useless see : https://github.com/twbs/bootstrap/issues/27071 ([3903f24](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/3903f24))
* **nav-light:** moving in the tab section and correcting english grammar Closes [#120](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/120) ([e001e7e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e001e7e))
* **navbar:** remove custom class fixed-header added by o-navbar.js and replace it by native class fixed-header. At the end it replace the width 100% by left:0 and right:0 ([21e0cb6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/21e0cb6))
* **o-switch:** rework o-switch css, update color as required per issue[#118](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/118) and add sample with label inside ([c13027e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/c13027e))
* **o-tab:** update mediaquery size for switching from tab to accordions also on small view like tablet ([9a414b6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/9a414b6))
* **ocarousel:** put back initial values for pagination ([949f6a6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/949f6a6))
* **orange_homepage:** updating the swiper main page by removing old code ([bdca6f6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/bdca6f6))
* **otab:** update otab version ([cbb1c1c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/cbb1c1c))
* **pagination:** fix arrow position on pagination sm and lg see issue [#144](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/144) ([063117b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/063117b))
* **popover:** put  back font-weight on popover ([2723bb6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/2723bb6))
* **popover:** reset rtl position for popover ([e141195](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e141195))
* **rtl:** fix right to left display on link with arrow ([ca508a0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/ca508a0))
* **rtl:** rotate doc-links, breadcrumbs and arrow-link in rtlcss mode ([7b6629d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/7b6629d))
* **rtl:** update rlcss position, remove useless right position, and ignore checkbox icon flip ([010e0e2](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/010e0e2))
* **scrollup:** add class is-fixed to scrollup to add the padding to it when modal is open ([4660562](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/4660562))
* **scrollup:** move zindex scrollup behind modal ([7786835](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/7786835))
* **scss:** finalize the merge of scss add stylelint-scss as a dependency ([e2efb89](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e2efb89))
* **test:** decrease test counter ([87856b7](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/87856b7))
* **test:** remove useless unit test on buttons as new plugin version listen to the input state to define classes ([d2a6090](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d2a6090))
* **test:** update button test to provide clic on checkbox ([7953c78](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/7953c78))
* **test:** update button test to provide clic on checkbox ([db23da9](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/db23da9))
* **tooltip:** fix linting error ([65e1fd6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/65e1fd6))
* **tooltip:** fix rtl tooltip position switch left/right placement when dir is set to rtl on html tag ([45e244a](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/45e244a))


### Features

* **cdn:** add a cdn for boosted, and move swiper as a peer dependency + use cdn for it also ([53a2f60](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/53a2f60))
* **logo:** replace Orange classic logo by a responsive logo when logo size is under 50px Orange TM disapear and is replaced by a white line ([8fcff08](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/8fcff08))



<a name="4.2.1"></a>
## [4.2.1](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/compare/v4.1.3...v4.2.1) (2019-01-23)


### Bug Fixes

* **accordions:** collapse with option .multi doest work. elements selector was broken ([388abaa](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/388abaa))
* **alerts:** create outlined alerts with icons
* **build:** fix css prefix docs task to apply on the good path ([98a2774](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/98a2774))
* **collapse:** remove custom boosted aria-collapse attribute management from the plugin as it's manage in native by bootstrap now ([9913ad6]
* **forms:** update input form border color and invalid/valid states. Rework toggle switch following custom-switch added by bootstrap
* **pagination:** Update active and hover states and fix issue [#89](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/89) remove hard coded value for pagination and use variable instead ([1693b44](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1693b44))


### Features

* **buttons:** add new social network buttons, and create a new xlg button.
* **umd:** update js build with umd to take into account boosted specific plugins ([f3b2b60](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f3b2b60))



<a name="4.1.3"></a>
## [4.1.3](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/compare/v4.1.1...v4.1.3) (2018-07-25)


### Bug Fixes

* **build:** run docs instead of docs-compile on test task to ensure that css, js, and rtl templates are generated before testing ([5ae40ed](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/5ae40ed))
* **forms:** fix custom checkbox appearance in tables. was broken in boosted 4.1.1 ([f9652eb](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f9652eb))



<a name="4.1.0"></a>
# [4.1.0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/compare/v4.0.1...v4.1.0) (2018-04-11)


### Bug Fixes

* **component:** accordion ([4b5cc41](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/4b5cc41))
* **component:** custom forms ([93f35f0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/93f35f0))
* **component:** local navigation ([051948e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/051948e))



<a name="4.0.1"></a>
## [4.0.1](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/compare/v4.0.0...v4.0.1) (2018-02-13)


### Bug Fixes

* **component:** accordion ([efb20d5](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/efb20d5))
* **component:** footer ([ff9db92](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/ff9db92))
* **component:** megamenu ([88999f1](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/88999f1))
* **component:** megamenu ([7b532c4](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/7b532c4))
* **component:** megamenu ([cf3c8c2](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/cf3c8c2))
* **component:** megamenu ([e327a4c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e327a4c))
* **docs:** logo rework ([d432feb](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d432feb))
* **docs:** mobile display ([26a15ce](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/26a15ce))
* **docs:** pagination ([341d627](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/341d627))
* **docs:** rtl ([66ae6f6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/66ae6f6))
* **js:** fix boosted component error declaration ([422ebb2](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/422ebb2))


### Features

* **component:** disable focus on init ([1574ec7](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1574ec7))



<a name="4.0.0"></a>
# [4.0.0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/compare/v4.0.0-beta.3...v4.0.0) (2018-01-22)


### Bug Fixes

* **collapse:** fix collapse unit test and plugin ([da05e0e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/da05e0e))
* **component:** footer ([19ab165](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/19ab165))
* **component:** footer ([7b8b269](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/7b8b269))
* **component:** navbar ([8c8f18e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/8c8f18e))
* **component:** navbar ([35f4954](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/35f4954))
* **component:** navbar ([3e5466c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/3e5466c))
* **component:** navbar ([2ecf012](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/2ecf012))
* **core:** functional color ([8102a70](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/8102a70))
* **docs:** code lint ([1650e82](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1650e82))
* **docs:** custom components links ([86279a5](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/86279a5))
* **docs:** footer ([5d6d629](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/5d6d629))


### Features

* **build:** docs screenshots ([f5e9885](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f5e9885))



<a name="4.0.0-beta.3"></a>
# [4.0.0-beta.3](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/compare/v4.0.0-beta.2...v4.0.0-beta.3) (2018-01-05)


### Bug Fixes

* **buttons:** put back focus appearance like hover on button components ([55682d9](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/55682d9))
* **buttons:** remove underline for link with button class ([a1ec620](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/a1ec620))
* **colors:** update scss color variable according to Orange Brand supporting colors ([b1f8c62](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/b1f8c62))
* **component:** buttons ([e7f5287](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e7f5287))
* **component:** custom accordion ([dba4f1e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/dba4f1e))
* **component:** custom checkbox ([d398e12](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d398e12))
* **component:** forms ([015d212](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/015d212))
* **component:** megamenu ([f04a89c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f04a89c))
* **component:** Megamenu ([5fdfa8c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/5fdfa8c))
* **component:** priority nav ([1432616](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1432616))
* **component:** scroll up ([d2b6c5a](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d2b6c5a))
* **custom forms:** add focus information back on custom form elements ([45eb8dc](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/45eb8dc))
* **custom-forms:** fix doc for disabled custom checkboxes and radio ([d10d25c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d10d25c))
* **custom-radio:** fix custom-radio appearance on IE11 ([5d956a9](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/5d956a9))
* **doc:** card-link images ([9781b17](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/9781b17))
* **docs:** boostwatch ([bb2cabb](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/bb2cabb))
* **docs:** home page ([85419d8](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/85419d8))
* **docs:** sidebar ([35b9e81](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/35b9e81))
* **forms:** fix custom forms and forms appearance following bootstrap beta.3 breaking changes ([c6be267](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/c6be267))
* **lint:** fix htmllint error on docs ([d01831f](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d01831f))
* **megamenu:** fix close icon position in mega-menu panel ([e2d41fd](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e2d41fd))
* **megamenu:** fix close icon position in mega-menu panel ([7c8346b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/7c8346b))
* **progressbar:** following beta3 merge, fix progressbar height on mobile view ([8fc1c5b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/8fc1c5b))


### Features

* **component:** mobile card links ([7117912](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/7117912))
* **component:** responsive tabs ([945cb74](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/945cb74))
* **docs:** home rework ([ccb44e7](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/ccb44e7))
* **docs:** home rework ([71059f2](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/71059f2))
* **docs:** home rework ([fc83a97](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/fc83a97))
* **docs:** home rework ([d89ae28](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d89ae28))
* **tablesorter:** update tablesorter to 2.29 and use the CDN ([b9e370a](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/b9e370a))



<a name="4.0.0-beta.2"></a>
# [4.0.0-beta.2](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/compare/v4.0.0-beta.1...v4.0.0-beta.2) (2017-10-20)


### Bug Fixes

* **build:** fix js unit ([a9aaa55](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/a9aaa55))
* **build:** js ([200f98c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/200f98c))
* **component:** breadcrumbs ([a13d41b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/a13d41b))
* **component:** card ([ae5d679](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/ae5d679))
* **component:** footer ([ca4b75f](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/ca4b75f))
* **component:** footer ([d9b2e00](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d9b2e00))
* **component:** footer ([a429bb0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/a429bb0))
* **component:** footer ([dfb7cb7](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/dfb7cb7))
* **component:** footer ([235a5ee](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/235a5ee))
* **component:** list group ([6747b64](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/6747b64))
* **component:** local navigation ([1d06e46](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1d06e46))
* **component:** navbar ([8d0c3e1](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/8d0c3e1))
* **component:** navbar ([41cff81](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/41cff81))
* **component:** navbar ([f97c0c1](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f97c0c1))
* **component:** navbar ([d07b569](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d07b569))
* **component:** navbar ([05f064e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/05f064e))
* **component:** navbar ([f5176c0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f5176c0))
* **component:** PriorityNav ([02c65a0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/02c65a0))
* **component:** switch ([6573669](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/6573669))
* **component:** tabs ([d085d04](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d085d04))
* **core:** icon-font-path var overriding ([c170418](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/c170418))
* **core:** variables ([07a0d15](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/07a0d15))
* **doc:** forms ([5bd6008](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/5bd6008))
* **docs:** boostwatch ([51fcbc2](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/51fcbc2))
* **docs:** minor fixes ([ad334de](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/ad334de))
* **docs:** signin template ([a855152](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/a855152))
* **docs:** signin template ([9e61581](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/9e61581))
* **merge:** js component fix ([3ca7fcf](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/3ca7fcf))
* **navbar:** improve JS thx to @Johann-S ([940789b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/940789b))


### Features

* **doc:** update doc search path and add a link to V3 doc ([88decf3](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/88decf3))



<a name="4.0.0-beta.1"></a>
# [4.0.0-beta.1](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/compare/v4.0.0-beta...v4.0.0-beta.1) (2017-09-01)


### Bug Fixes

* **component:** alert ([152dc6e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/152dc6e))
* **component:** alert ([55bb18b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/55bb18b))
* **component:** alert ([e44abd3](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e44abd3))
* **component:** badges ([a2ecddb](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/a2ecddb))
* **component:** badges ([ddc1591](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/ddc1591))
* **component:** container-fluid width ([0661cff](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/0661cff))
* **component:** local navigation ([196354a](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/196354a))
* **component:** navbar ([239570d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/239570d))
* **docs:** docs layout ([d40862c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d40862c))
* **docs:** docs layout ([b4f7e11](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/b4f7e11))
* **docs:** docs layout ([f18393c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f18393c))
* **docs:** Documentation page ([4eb73e2](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/4eb73e2))



<a name="4.0.0-beta"></a>
# [4.0.0-beta](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/compare/v4.0.0-alpha.6.1...v4.0.0-beta) (2017-08-11)


### Bug Fixes

* **accessibility:** merge accessibility fix following bootstrap merge ([a6ec015](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/a6ec015))
* **component:** cards ([b4925b0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/b4925b0))
* **component:** cards ([bafbf75](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/bafbf75))
* **component:** checkboxes ([da6fb26](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/da6fb26))
* **component:** dropdown ([3e3ebf8](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/3e3ebf8))
* **component:** from error message ([8b441e5](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/8b441e5))
* **component:** local nav ([ad55205](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/ad55205))
* **component:** local navigation ([2af813a](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/2af813a))
* **component:** modal ([d546471](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d546471))
* **component:** modal popin ([dc3b9a0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/dc3b9a0))
* **component:** modal popin ([9873785](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/9873785))
* **component:** navbar ([de71f22](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/de71f22))
* **component:** navbar ([6fe4030](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/6fe4030))
* **component:** navbar ([3fc576d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/3fc576d))
* **component:** navbar ([809f2ee](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/809f2ee))
* **component:** navbar ([9df9e98](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/9df9e98))
* **component:** navbar logo ([276fc30](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/276fc30))
* **component:** orange cards ([35cd134](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/35cd134))
* **component:** priority nav ([9fd8cd8](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/9fd8cd8))
* **component:** tabs ([cefc7a8](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/cefc7a8))
* **core:** icons ([6e37a39](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/6e37a39))
* **core:** icons ([14b8a0a](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/14b8a0a))
* **core:** icons ([88c1157](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/88c1157))
* **doc:** examples ([92b5054](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/92b5054))
* **doc:** fix custom radio sample ([e5c1a24](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e5c1a24))
* **doc:** html lint ([64e7d89](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/64e7d89))
* **doc:** megamenu ([50e1c22](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/50e1c22))
* **docs:** examples ([73bc9d5](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/73bc9d5))
* **docs:** examples ([896945e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/896945e))
* **docs:** focus outline ([2f5a268](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/2f5a268))
* **docs:** megamenu documentation ([b83a895](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/b83a895))
* **dropdown:** fix dropdown.js accessibility issue adding aria role's + 3 new unit tests ([5e3f77f](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/5e3f77f))
* **font:** add the icon-orange.woff2 ([6c745f3](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/6c745f3))
* **fonts:** add woff2 font file for orangeIcons ([2afdf5d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/2afdf5d))
* **fonts:** fixes issue [#54](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/54) as explain on http://www.trucsweb.com/tutoriels/css/font-face/ "Compatibilité des formats" woff and woff2 are now enough ([12c2a9b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/12c2a9b))
* **forms:** fix focus state color and custom checkbox disable state active ([7f984cd](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/7f984cd))
* **js:** code refactoring & lint ([4a5be92](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/4a5be92))
* **js:** tests failing ([1c0774a](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1c0774a))
* **megamenu:** update custom megamenu case on mobile view ([b3a3b01](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/b3a3b01))
* **nav:** update navbar index bootstrap patch ([a4d0ce9](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/a4d0ce9))
* **navbar:** fix mobile view navbar elements alignement ([8faad6b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/8faad6b))
* **navbar:** fix mobile view navbar elements height ([280e795](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/280e795))
* **rtl:** arrows ([5ed9936](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/5ed9936))
* **tablesorter:** pdate tablesorter icon position for mobile display compatibility ([2891d48](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/2891d48))


### Features

* **component:** priority nav ([94f733f](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/94f733f))
* **component:** priority nav ([11f9570](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/11f9570))
* **component:** priority nav ([18722ab](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/18722ab))



<a name="4.0.0-alpha.6.1"></a>
# [4.0.0-alpha.6.1](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/compare/v4.0.0-alpha.6...v4.0.0-alpha.6.1) (2017-04-03)


### Bug Fixes

* **accordions:** fix issue [#51](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/51) add a security spacing around the arrow for header link ([e39196d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e39196d))
* **badge:** fix badge size and color to better match the brand ([3963335](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/3963335))
* **build:** o-carousel ([ac31843](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/ac31843))
* **carousel:** remove scss for specific slick component from core ([5ce00b9](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/5ce00b9))
* **chore:** code lint ([1570a1b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1570a1b))
* **component:** alert padding ([b6b3891](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/b6b3891))
* **component:** Carousel ([b284e6c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/b284e6c))
* **component:** dropdown ([7e68792](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/7e68792))
* **component:** mega menu ([494eaa7](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/494eaa7))
* **component:** mega menu ([1e96e98](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1e96e98))
* **component:** mega menu ([8760940](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/8760940))
* **component:** megamenu ([9871bb3](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/9871bb3))
* **component:** megamenu ([249088f](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/249088f))
* **component:** MegaMenu ([a80cc30](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/a80cc30))
* **component:** MegaMenu ([6aeded0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/6aeded0))
* **component:** MegaMenu ([3b0e35a](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/3b0e35a))
* **component:** MegaMenu ([4da9b79](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/4da9b79))
* **component:** MegaMenu ([1645158](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1645158))
* **component:** MegaMenu ([51462f9](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/51462f9))
* **component:** MegaMenu ([4952242](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/4952242))
* **component:** megamenu accessibility ([f0836cd](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f0836cd))
* **component:** megamenu accessibility ([9183101](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/9183101))
* **component:** megamenu accessibility ([7369f58](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/7369f58))
* **component:** megamenu accessibility ([e2693ed](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e2693ed))
* **component:** megamenu accessibility ([e74c0d9](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e74c0d9))
* **component:** megamenu accessibility ([698917c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/698917c))
* **component:** megamenu accessibility ([67f74cb](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/67f74cb))
* **component:** megamenu accessibility ([a39cc04](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/a39cc04))
* **component:** modal ([4e0c777](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/4e0c777))
* **component:** navbar ([2d5e971](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/2d5e971))
* **component:** navbar ([489c761](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/489c761))
* **component:** navbar ([4686421](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/4686421))
* **component:** navs ([e244bef](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e244bef))
* **component:** o-card ([d516cd7](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d516cd7))
* **component:** o-carousel ([5e0c83d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/5e0c83d))
* **component:** pagination ([eba08dd](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/eba08dd))
* **component:** switches ([bd75f04](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/bd75f04))
* **custom-forms:** fix indeterminate state of custom radio issue [#46](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/46) ([17f3c49](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/17f3c49))
* **dist:** dist for ng-boosted ([90ba25a](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/90ba25a))
* **doc:** footer ([d8748ee](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d8748ee))
* **doc:** mega menu ([9d9585d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/9d9585d))
* **doc:** mega menu ([ae8b189](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/ae8b189))
* **doc:** news page megamenu ([84db412](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/84db412))
* **doc:** o-carousel ([8e23984](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/8e23984))
* **font:** update font declaration order ([635d2d2](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/635d2d2))
* **font:** update font-family helvetica import. fix issue [#41](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/41) ([f85cac5](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f85cac5))
* **megamenu:** move transition class adding at the begining and remove at the end ([c9eaefd](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/c9eaefd))
* **o-accordions:** replace first-child selector by a default border and a sibling selector to remove it from next card, as some cms  can add content between o-accordion class and the first card ([0663507](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/0663507))
* **o-buttons:** fix build error issue [#44](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/44) ([b000087](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/b000087))
* **outline:** remove default outline color. Use the current component color for the outline as suggested by issue [#35](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/35) ([2e5bd26](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/2e5bd26))
* **sortable:** update sortable js dependency. now works with jquery3 also remove links from th for sortable ([e1efd1b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e1efd1b))
* **tabs:** update tab plugin. Don't add aria-role if nav-tabs or nav-pills doesn't have a tabpanel associated ([e1b4c46](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e1b4c46))
* **tabs:** update tabs role. Add role tablist only if there's at least one panel ([9ef4347](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/9ef4347))
* **transitionning:** merge bootstrap fix for component is transitionning. See issue [#50](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/50) ([bb16f76](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/bb16f76))


### Features

* **component:** MegaMenu ([977290e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/977290e))
* **component:** megamenu keyboard navigation ([ef0eb5d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/ef0eb5d))
* **component:** orange carousel ([7928b72](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/7928b72))



<a name="4.0.0-alpha.6"></a>
# [4.0.0-alpha.6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/compare/v4.0.0-alpha.5...v4.0.0-alpha.6) (2017-01-16)


### Bug Fixes

* **accordion:** update accordion classes following alpha.6, and merge boosted specific documentation in bootstrap core documentation ([8de10d3](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/8de10d3))
* **button:** ensure that link within a paragraph with .btn class are not underline ([b81d028](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/b81d028))
* **buttons:** remove buttons focus shadow ([823809b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/823809b))
* **component:** buttons ([3f3fe1e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/3f3fe1e))
* **component:** buttons ([dff90f8](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/dff90f8))
* **component:** carousel ([174a1d6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/174a1d6))
* **component:** carousel ([6802892](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/6802892))
* **component:** footer ([8a3263d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/8a3263d))
* **component:** forms ([f66bd12](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f66bd12))
* **component:** local navigation ([b579166](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/b579166))
* **component:** navbar ([b4a9794](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/b4a9794))
* **component:** navbar ([ae9bd64](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/ae9bd64))
* **component:** navbar ([5c5ca05](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/5c5ca05))
* **component:** o-list ([f027f6d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f027f6d))
* **component:** scrollspy ([9a62985](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/9a62985))
* **component:** tables ([e05a5ea](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e05a5ea))
* **component:** tags ([dc0bdb8](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/dc0bdb8))
* **custom-select:** update custom select size to match all other form components ([0ac2166](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/0ac2166))
* **dropdown:** fix dropdown-menu overlay ([dd5604e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/dd5604e))
* **dropdown:** following alpha.6 update, fix dropdown item padding ([b600b2a](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/b600b2a))
* **dropdown:** remove margin on nav-divider ([53f81fe](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/53f81fe))
* **dropdown:** update dropdown scss following alpha.6 merge ([15ff9db](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/15ff9db))
* **forms:** update the spacing between two form groups ([3f0eaed](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/3f0eaed))
* **grid:** Fix merge error onto the grid padding ([d74821a](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d74821a))
* **links:** put back the underline option for link inside a paragraph (lost during merge) ([a35f947](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/a35f947))
* **navbar:** fix documentation duplicate ID errors ([c62e555](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/c62e555))
* **pagination:** following alpha.6 merge fix pagination Boosted custom definitions and sizes ([9a0bf37](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/9a0bf37))
* **progress:** update progressbar font-size new var in bootstrap Alpha.6 impact on the progressbar height itself ([406f8b3](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/406f8b3))
* **scroll-up:** replace fadein and fadeout effect by hide and show classic function, becaus jquery.slim doesn't inclue annimation effects ([83bfae4](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/83bfae4))



<a name="4.0.0-alpha.5"></a>
# [4.0.0-alpha.5](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/compare/v4.0.0-alpha.4...v4.0.0-alpha.5) (2017-01-12)


### Bug Fixes

* **accordion:** update accordion classes following alpha.6, and merge boosted specific documentation in bootstrap core documentation ([a151643](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/a151643))
* **button:** ensure that link within a paragraph with .btn class are not underline ([7dac360](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/7dac360))
* **buttons:** remove buttons focus shadow ([658c052](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/658c052))
* **card:** fix double border on list in cards see https://github.com/twbs/bootstrap/pull/20903 ([cad8131](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/cad8131))
* **card:** update card header and footer background color to #fff ([7d08fa9](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/7d08fa9))
* **component:** accordion ([6ef0faf](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/6ef0faf))
* **component:** accordion ([d248e13](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d248e13))
* **component:** accordion ([9a546f2](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/9a546f2))
* **component:** accordion ([fb57600](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/fb57600))
* **component:** accordion class ([40e5ef1](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/40e5ef1))
* **component:** bullet point ([09f37d1](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/09f37d1))
* **component:** bullet point ([3725e60](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/3725e60))
* **component:** buttons ([3421593](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/3421593))
* **component:** buttons ([ba587e0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/ba587e0))
* **component:** buttons ([64a0331](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/64a0331))
* **component:** cards ([5851867](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/5851867))
* **component:** carousel ([4729196](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/4729196))
* **component:** carousel ([bcc3e90](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/bcc3e90))
* **component:** carousel ([5ef3648](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/5ef3648))
* **component:** custom checkboxes & radios ([27fce3b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/27fce3b))
* **component:** custom select ([35bde81](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/35bde81))
* **component:** dropdown ([a5e1b79](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/a5e1b79))
* **component:** dropdown items ([d45bb04](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d45bb04))
* **component:** footer ([aac578d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/aac578d))
* **component:** form ([16b13ae](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/16b13ae))
* **component:** form error message ([3743699](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/3743699))
* **component:** form select ([9be9dfe](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/9be9dfe))
* **component:** forms ([e7cbaa9](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e7cbaa9))
* **component:** input group ([d1fec41](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d1fec41))
* **component:** local nav mobile ([744532e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/744532e))
* **component:** local navigation ([9bb1a92](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/9bb1a92))
* **component:** local navigation ([e94fa4a](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e94fa4a))
* **component:** megamenu ([751c3ce](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/751c3ce))
* **component:** nav pills ([8c022e1](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/8c022e1))
* **component:** navbar ([ec62854](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/ec62854))
* **component:** navbar ([98854f8](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/98854f8))
* **component:** navbar ([f0bd5d6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f0bd5d6))
* **component:** navbar ([ab9a6b8](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/ab9a6b8))
* **component:** navbar ([fa3447c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/fa3447c))
* **component:** navbar ([1036572](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1036572))
* **component:** navbar ([6cc35f3](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/6cc35f3))
* **component:** orange popin ([df9ff13](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/df9ff13))
* **component:** pagination ([68e3d6c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/68e3d6c))
* **component:** pagination ([76e40aa](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/76e40aa))
* **component:** pagination ([53ede33](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/53ede33))
* **component:** pagination ([2125bbc](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/2125bbc))
* **component:** pagination ([d52ecb3](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d52ecb3))
* **component:** popin ([ef8efa4](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/ef8efa4))
* **component:** scrollspy ([51b7195](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/51b7195))
* **component:** stepbar ([92167b3](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/92167b3))
* **component:** switches ([f0aa384](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f0aa384))
* **component:** switches ([c8bd544](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/c8bd544))
* **component:** tables ([be31c0b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/be31c0b))
* **component:** tables ([2a45a35](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/2a45a35))
* **component:** tables ([86b4b20](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/86b4b20))
* **component:** tables ([5be835b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/5be835b))
* **component:** tables reflow ([374ea7e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/374ea7e))
* **component:** toggles ([0fdd9d3](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/0fdd9d3))
* **core:** body font size ([086ffb3](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/086ffb3))
* **core:** css external dependency ([6515731](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/6515731))
* **css:** code lint ([e7a6f32](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e7a6f32))
* **custom-checkbox:** following alpha.5 patch, fix checkbox alignement with label, and also position into tables ([3a75206](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/3a75206))
* **custom-checkbox:** put back the Orange icons for custom checkboxes ([236cd72](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/236cd72))
* **custom-select:** following alpha-5 upgrade, fix broken height and icon for custom-select ([4fb34b5](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/4fb34b5))
* **custom-select:** update border color on hover ([d43a3f0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d43a3f0))
* **dist:** css external dependency ([90b14a8](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/90b14a8))
* **doc:** boostwatch doc links ([8e59584](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/8e59584))
* **doc:** card ([6caa126](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/6caa126))
* **doc:** nav tabs ([6d2caed](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/6d2caed))
* **doc:** page header ([71b1f67](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/71b1f67))
* **doc:** presentation ([f26d617](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f26d617))
* **doc:** scrollspy ([991c06d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/991c06d))
* **dropdown:** arrow ([750b53a](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/750b53a))
* **dropdown:** fix dropdown-menu overlay ([db84293](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/db84293))
* **dropdown:** focus state ([d0c6745](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d0c6745))
* **dropdown:** following alpha.6 update, fix dropdown item padding ([7ef49b8](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/7ef49b8))
* **dropdown:** remove margin on nav-divider ([1af1e52](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1af1e52))
* **dropdown:** update dropdown scss following alpha.6 merge ([6b57ac5](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/6b57ac5))
* **forms:** fix linting errors ([fb3a9fb](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/fb3a9fb))
* **grid:** Fix merge error onto the grid padding ([ad6b24e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/ad6b24e))
* **images:** fix fig caption contrast error put [#333](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/333) instead of #ccc fix issue [#22](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/22) ([3bcb00b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/3bcb00b))
* **input-group:** fix issue [#15](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/15) Double border onto segmented buttons ([bb34c61](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/bb34c61))
* **links:** put back the underline option for link inside a paragraph (lost during merge) ([8cac5f2](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/8cac5f2))
* **navbar:** fix documentation duplicate ID errors ([8f40a2d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/8f40a2d))
* **o-scroll:** update background color to [#666](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/666) ([1a20a0a](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1a20a0a))
* **o-scroll-up:** fix scroll up position on mobile display. Add a dynamic bottom position adapted on breakpoints. Add a static version for display into a page ([1e889f7](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1e889f7))
* **pagination:** following alpha.6 merge fix pagination Boosted custom definitions and sizes ([cbd6c70](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/cbd6c70))
* **scroll-up:** replace fadein and fadeout effect by hide and show classic function, becaus jquery.slim doesn't inclue annimation effects ([1bc462c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1bc462c))
* **spacer:** update spacer after alpha5 patch ([20d02d3](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/20d02d3))
* **step_bar:** fix stepbar display on mobile ([8243fca](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/8243fca))
* **svg:** fix svg encoding errors need to escape # for FF and IE11 ([d6b2e42](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d6b2e42))
* **table:** fix hover table color for inverted mode compatibility ([ca37b34](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/ca37b34))


### Features

* **bootstrapalpha5:** update bootstrap version to v4.alpha.5 ([3916ce3](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/3916ce3))
* **component:** form error label ([afa5367](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/afa5367))
* **component:** local navigation ([83d92f6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/83d92f6))
* **component:** orange links ([357a228](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/357a228))
* **component:** orange popin ([f33c0d4](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f33c0d4))
* **component:** tags ([185978c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/185978c))



<a name="4.0.0-alpha.4"></a>
# [4.0.0-alpha.4](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/compare/v4.0.0-alpha.3.1...v4.0.0-alpha.4) (2016-09-08)


### Bug Fixes

* **chore:** code lint ([d8caba5](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d8caba5))
* **component:** navbar accessibility ([1a69235](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1a69235))
* **component:** navbar accessibility ([64ca435](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/64ca435))
* **component:** navbar accessibility ([0f7bce8](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/0f7bce8))
* **component:** stepbar mobile ([86ef423](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/86ef423))
* **component:** switches ([d30d806](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d30d806))
* **component:** switches ([cd701a5](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/cd701a5))
* **component:** toggle switches ([2a27c28](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/2a27c28))
* **doc:** content warning ([86d4fab](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/86d4fab))
* **doc:** megamenu broken link ([c0e4ea8](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/c0e4ea8))
* **doc:** toggles ([c6b3729](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/c6b3729))
* **nav-tabs:** remove margin between tabs on mobile display ([caac550](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/caac550))
* **nav-tabs:** remove margin between tabs on mobile display ([f4c9c81](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f4c9c81))
* **o-scroll:** fix js linting errors ([1b5e720](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1b5e720))
* **progress:** brand alignement for progressbar ([7450f8c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/7450f8c))
* **switch:** add an aria-labelledby onto the input for accessibility purpose. Without the aria-labelledby, many browser concat the two labels text value without space ([8bd2502](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/8bd2502))
* **switch:** fix text color for switch on with text on green background ([c49824d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/c49824d))


### Features

* **o-scroll:** update the o-scroll component, add the doc, and prepare the alpha.4 release ([5bae6fc](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/5bae6fc))



<a name="4.0.0-alpha.3.1"></a>
# [4.0.0-alpha.3.1](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/compare/v4.0.0-alpha.3...v4.0.0-alpha.3.1) (2016-07-29)


### Bug Fixes

* **component:** navbar toggle ([c62a771](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/c62a771))
* **navbar:** put back the color onto the mobile menu icon ([57d8827](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/57d8827))



<a name="4.0.0-alpha.3"></a>
# [4.0.0-alpha.3](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/compare/v4.0.0-alpha.2...v4.0.0-alpha.3) (2016-07-28)


### Bug Fixes

* **component:** accordion ([a31115b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/a31115b))
* **component:** accordion ([9ccbe5c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/9ccbe5c))
* **component:** breadcrumb ([bfacff9](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/bfacff9))
* **component:** forms ([017b89f](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/017b89f))
* **component:** forms ([b38abd7](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/b38abd7))
* **component:** forms ([41fa777](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/41fa777))
* **component:** forms ([999cd56](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/999cd56))
* **component:** forms ([7d6d085](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/7d6d085))
* **component:** forms ([00ebd32](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/00ebd32))
* **component:** pagination ([1481177](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1481177))
* **component:** tab focus management ([6a62da2](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/6a62da2))
* **component:** tab focus management ([2ceb496](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/2ceb496))
* **component:** toggle switches ([6c4add0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/6c4add0))
* **doc:** add the file orange-icons.json ([76ad580](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/76ad580))
* **doc:** add the link to config file orange-icons.json ([7ff0fe5](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/7ff0fe5))
* **doc:** orange list ([389a9c3](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/389a9c3))


### Features

* **accordions:** enlarge the border for mobile display 2px, for more readability ([3b198de](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/3b198de))
* **build:** add changelog as a npm dependencies, and create the task into Gruntfile.js ([25c8cab](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/25c8cab))
* **build:** rebuild the history CHANGELOG.md from the begining of the v4-dev branch ([cb0467d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/cb0467d))
* **component:** toggle switches ([f6a0d5a](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f6a0d5a))
* **icons:** add the howto create custom icons and patch from V4 alpha.3 official ([4ecf508](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/4ecf508))
* **icons:** remove the default inclusion of Orange icons font family and Helvetica. WARNING the project need to add the orangeIcons.css and orangeHelvetica.css inclusion itself to pages using boosted and develop for Orange ([ee903a6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/ee903a6))



<a name="4.0.0-alpha.2"></a>
# [4.0.0-alpha.2](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/compare/v4.0.0-alpha.1...v4.0.0-alpha.2) (2016-06-27)


### Bug Fixes

* **build:** cleanup scss variables, remove o-variables, and put all into _custom.scss, start to remove unused mixin and declarations into _orange-css.scss ([3e629f2](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/3e629f2))
* **build:** fix doc htmllint ([fca72fe](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/fca72fe))
* **build:** fix eslint errors ([14626d4](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/14626d4))
* **build:** fix lint errors ([83e0a31](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/83e0a31))
* **build:** fix scsslint warnings ([dd68543](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/dd68543))
* **build:** publish unversionned files ([fc76ee2](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/fc76ee2))
* **build:** update default task ([fb63d6a](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/fb63d6a))
* **component:** accordion ([df2d649](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/df2d649))
* **component:** breadcrumb nav ([4c58c34](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/4c58c34))
* **component:** collapse ([f08e98f](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f08e98f))
* **component:** collapse ([fae5ee4](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/fae5ee4))
* **component:** local nav ([194c40a](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/194c40a))
* **component:** local nav ([007f5c5](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/007f5c5))
* **component:** local navigation ([8082ea7](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/8082ea7))
* **component:** local navigation ([d166eab](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d166eab))
* **component:** local navigation ([230700e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/230700e))
* **component:** navbar ([85bdfbc](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/85bdfbc))
* **component:** pagination ([04eb7ab](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/04eb7ab))
* **component:** pagination ([234c5d1](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/234c5d1))
* **component:** pagination ([c98532c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/c98532c))
* **component:** stepbar ([7b6162c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/7b6162c))
* **component:** stepbar ([9349824](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/9349824))
* **component:** stepbar ([c9ccdc8](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/c9ccdc8))
* **component:** stepbar ([94ad9b5](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/94ad9b5))
* **component:** tab borders ([33fbc0b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/33fbc0b))
* **component:** tabs ([13ae96e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/13ae96e))
* **component:** tabs ([cc752f1](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/cc752f1))
* **component:** tabs ([467f38d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/467f38d))
* **core:** fix breadcrumbs size and position ([56e434f](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/56e434f))
* **core:** reduce code padding ([1a3f7b1](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1a3f7b1))
* **core:** reduce code padding ([5d7c322](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/5d7c322))
* **core:** update distribution ([c44dcc3](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/c44dcc3))
* **core:** update variables ordering according to the native bootstrap 4 variable.scss and some brand update ([1a603d4](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1a603d4))
* **doc:** buttons presentation ([34edf59](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/34edf59))
* **doc:** remove navtab pointed and put font bold into popover and tooltips ([76d9f3f](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/76d9f3f))
* **doc:** update brand picture path ([c83639d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/c83639d))


### Features

* **build:** publish v4.0.0-alpha.2 ([bde039a](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/bde039a))
* **build:** update main for bower.json ([517ffc9](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/517ffc9))
* **chore:** update frames and popout icons to include B2B ([e0db88c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e0db88c))
* **core:** remove o-nav-tab component ([0530990](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/0530990))
* **core:** update font-family list ([0883991](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/0883991))
* **doc:** orange modules ([7807a98](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/7807a98))



<a name="4.0.0-alpha.1"></a>
# [4.0.0-alpha.1](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/compare/ae4d9cc...v4.0.0-alpha.1) (2016-05-26)


### Bug Fixes

* **build:** clean _gh_pages directory befor building docs ([169712e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/169712e))
* **build:** clean doc tmp folder ([bf8a2c0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/bf8a2c0))
* **build:** ES6 support in VSCode ([780bd89](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/780bd89))
* **build:** fix lint errors ([83fa31d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/83fa31d))
* **build:** publish dist directory ([1c91c0b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1c91c0b))
* **component:** accordion arrow ([1790d5d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1790d5d))
* **component:** button height ([f5098f9](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f5098f9))
* **component:** button height ([ccc2da8](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/ccc2da8))
* **component:** buttons clear background ([6ca2aa0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/6ca2aa0))
* **component:** buttons on black background ([3cc1f44](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/3cc1f44))
* **component:** buttons states styles ([0b1bf2c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/0b1bf2c))
* **component:** buttons states styles ([31d4ce2](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/31d4ce2))
* **component:** danger button text color ([edf6fc8](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/edf6fc8))
* **component:** dropdown ([45b5121](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/45b5121))
* **component:** dropdown ([95042f0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/95042f0))
* **component:** form input height and padding ([e29c12d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e29c12d))
* **component:** mega-menu ([872855d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/872855d))
* **component:** megamenu ([f035abf](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f035abf))
* **component:** megamenu documentation ([39dc6c1](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/39dc6c1))
* **component:** megamenu mobile ([cb2d666](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/cb2d666))
* **component:** megamenu variables ([b36d842](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/b36d842))
* **component:** navbar ([36064e5](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/36064e5))
* **component:** navbar & mega-mega-menu ([f8445e9](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f8445e9))
* **component:** navbar & megamenu ([b9c9be6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/b9c9be6))
* **component:** navbar branded ([6eb4f24](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/6eb4f24))
* **component:** navbar comfort ([5fdc580](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/5fdc580))
* **component:** navbar optimisation ([132d376](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/132d376))
* **component:** o-button scss clean up ([b2de384](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/b2de384))
* **component:** orange stepbar ([036d4a8](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/036d4a8))
* **component:** orange stepbar ([6980643](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/6980643))
* **component:** pagination ([234556e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/234556e))
* **component:** pagination ([d9dd2de](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d9dd2de))
* **component:** primary button pressed state ([ed3e808](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/ed3e808))
* **component:** removed carousel glyphicon dependency ([5e951cf](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/5e951cf))
* **component:** search bar ([39de5d9](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/39de5d9))
* **component:** stepbar accessibility ([c13df4c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/c13df4c))
* **component:** stepbar fix ([84342e8](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/84342e8))
* **component:** supra bar icons ([f53c6d4](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f53c6d4))
* **component:** tab height ([0429fcf](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/0429fcf))
* **components:** accordion ([93b73ff](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/93b73ff))
* **components:** boostwatch ([02efafb](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/02efafb))
* **components:** boostwatch ([6bb490d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/6bb490d))
* **components:** boostwatch ([225a768](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/225a768))
* **components:** boostwatch ([ede0c4c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/ede0c4c))
* **components:** boostwatch ([4d4827a](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/4d4827a))
* **components:** boostwatch ([aed902e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/aed902e))
* **components:** boostwatch ([1f3d2ff](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1f3d2ff))
* **components:** dropdown ([145c27e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/145c27e))
* **components:** dropdown ([37b2087](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/37b2087))
* **components:** dropdown ([a937974](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/a937974))
* **components:** megamenu ([b4efdd0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/b4efdd0))
* **components:** modal ([e20ada5](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e20ada5))
* **components:** modal ([fe777ba](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/fe777ba))
* **components:** nav-tabs arrows ([1fc3b1f](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1fc3b1f))
* **components:** navs ([4074a95](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/4074a95))
* **components:** secondary buttons styling ([213a2f2](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/213a2f2))
* **components:** tooltip ([531aac7](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/531aac7))
* **core:** base font size ([8993912](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/8993912))
* **core:** deprecated screen- var ([fb31d21](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/fb31d21))
* **core:** eslint fix and orange icons fix ([37b38d6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/37b38d6))
* **core:** fix brand color ([43fa973](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/43fa973))
* **core:** fix eslint errors and add tether.min to sample pages ([49c03fd](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/49c03fd))
* **core:** fix eslint errors into dropdown.js ([49c0842](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/49c0842))
* **core:** fix qunit test ([e759827](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e759827))
* **core:** Fix scss errors ([f846716](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f846716))
* **core:** font family ([210730b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/210730b))
* **core:** font icon and minor fixes ([30606be](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/30606be))
* **core:** glyphicon references ([b765fcd](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/b765fcd))
* **core:** scsslint error space needed between operator ([0ea4396](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/0ea4396))
* **core:** update grid frameworkgrid mixin due to libsass update ([e959fb9](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e959fb9))
* **css:** minor fixes ([89eb81c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/89eb81c))
* **css:** minor fixes ([8bacc50](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/8bacc50))
* **css:** minor fixes ([dbc9eb0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/dbc9eb0))
* **css:** missed lint errors ([33867e5](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/33867e5))
* **css:** removed unused scss variables ([8e0a5f5](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/8e0a5f5))
* **doc:** absolute paths ([d2b509d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d2b509d))
* **doc:** absolute paths ([d054236](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d054236))
* **doc:** absolute paths ([4652ad2](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/4652ad2))
* **doc:** back to top accessibility ([c707d41](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/c707d41))
* **doc:** back to top on mobile ([efea757](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/efea757))
* **doc:** back to top on mobile ([2c4fb2e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/2c4fb2e))
* **doc:** boosted landing page ([7d3af81](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/7d3af81))
* **doc:** boosted landing page ([3e30de3](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/3e30de3))
* **doc:** boosted rebranding ([16dd668](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/16dd668))
* **doc:** boostwatch ([aa575cb](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/aa575cb))
* **doc:** boostwatch ([222cfb5](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/222cfb5))
* **doc:** boostwatch mobile view ([886252f](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/886252f))
* **doc:** boostwatch sidebar links ([acb4a04](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/acb4a04))
* **doc:** bootswatch ([2bad243](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/2bad243))
* **doc:** brand compliant warning ([efd6602](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/efd6602))
* **doc:** brand warning accessibility ([c3e7589](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/c3e7589))
* **doc:** component pages ([ec34d40](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/ec34d40))
* **doc:** confort+ left spacing ([43e4b70](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/43e4b70))
* **doc:** download button focus color ([7c610dd](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/7c610dd))
* **doc:** externalized orange custom doc ([a4e2c89](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/a4e2c89))
* **doc:** externalized orange custom doc ([d9d1696](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d9d1696))
* **doc:** externalized orange custom doc ([42e3e66](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/42e3e66))
* **doc:** externalized orange custom doc ([ec67590](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/ec67590))
* **doc:** externalized orange custom doc ([ec7ef53](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/ec7ef53))
* **doc:** footer ([43cc343](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/43cc343))
* **doc:** js assets path ([ab15adb](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/ab15adb))
* **doc:** js indentation ([9737dce](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/9737dce))
* **doc:** js refactor ([6334051](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/6334051))
* **doc:** main navbar ([ae3ae36](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/ae3ae36))
* **doc:** main navbar ([b9a02c3](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/b9a02c3))
* **doc:** megamenu ([1887240](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1887240))
* **doc:** megamenu boostwatch ([ced8b5d](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/ced8b5d))
* **doc:** navbar active links ([f7e9c1f](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f7e9c1f))
* **doc:** news page pagination ([544356f](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/544356f))
* **doc:** pagination semantics ([a564410](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/a564410))
* **doc:** pagination semantics ([3a8abb0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/3a8abb0))
* **doc:** Remove card class around the form into boostwatch ([a231b32](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/a231b32))
* **doc:** removed ads ([65cef4f](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/65cef4f))
* **doc:** scroll top button ([0b2de02](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/0b2de02))
* **doc:** scroll top button ([151d5c7](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/151d5c7))
* **doc:** syntax error ([f958673](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f958673))
* **doc:** uncomment css classes for cdu_link ([e1a7cd0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e1a7cd0))
* **example:** dashboard + form ([01d5090](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/01d5090))
* **examples:** added orange brand example ([701d58c](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/701d58c))
* **examples:** admin page ([2fcfbe6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/2fcfbe6))
* **examples:** date input validation ([bc723d0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/bc723d0))
* **git:** ignore generated output ([11ed7b9](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/11ed7b9))
* **megamenu:** conforming -o-main-megamenu.scss to scsslint ([f3c56a9](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f3c56a9))
* **megamenu:** restoring build ([4fe2404](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/4fe2404))
* **megamenu:** restoring build + merging css ([6278244](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/6278244))
* **megamenu:** restoring build + merging css ([43a8231](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/43a8231))
* **pagination:** sizes ([25b0094](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/25b0094))
* **tab:** added orange brand example ([67622af](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/67622af))
* **tab:** conforming tab.js to eslint ([912a76a](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/912a76a))
* **tab:** conforming tab.js to eslint ([50522a8](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/50522a8))
* **test:** megamenu visual ([472693e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/472693e))
* **test:** navbar html lint ([dbe183a](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/dbe183a))
* **test:** navbar visual test ([8990086](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/8990086))
* **test:** visual tests ([07578eb](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/07578eb))


### Features

* **build:** livereload ([ae4d9cc](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/ae4d9cc))
* **build:** livereload ([39e2549](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/39e2549))
* **component:** navbar & megamenu unit tests ([2b26144](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/2b26144))
* **component:** navbar & megamenu unit tests ([692ca69](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/692ca69))
* **component:** orange frames ([89d50e6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/89d50e6))
* **component:** sticky navbar ([ab538f6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/ab538f6))
* **core:** back to eslint previous version ([466c58b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/466c58b))
* **core:** font icons ([f90a0b8](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/f90a0b8))
* **core:** update babel-eslint to follow eslint upgrade ([c4551c0](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/c4551c0))
* **core:** update eslint version ([e6e0913](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e6e0913))
* **doc:** add skiplinks and glyphicons update to the migration guide ([e75d2ad](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e75d2ad))
* **doc:** add the boosted story ([1273299](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1273299))
* **doc:** boosted migration page ([1da7d1b](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/1da7d1b))
* **doc:** bootswatch sidemenu ([d3ddfa7](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/d3ddfa7))
* **doc:** identify not branded content ([a7e862e](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/a7e862e))
* **doc:** identify not branded content ([55083de](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/55083de))
* **doc:** rtl automation ([af64408](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/af64408))
* **doc:** start guide ([e668ea2](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/e668ea2))
* **examples:** orange news ([7d48d5a](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/7d48d5a))
* **rtl:** component customisation ([b7813d6](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/commit/b7813d6))



