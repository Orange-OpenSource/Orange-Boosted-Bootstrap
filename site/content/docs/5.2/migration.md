---
layout: docs
title: Migrating to v5
description: Track and review changes to the Boosted source files, documentation, and components to help you migrate from v4 to v5.
group: migration
aliases:
  - "/migration/"
  - "/docs/migration/"
toc: true
---

## v5.2.1

<hr class="mb-4">

### Components

<!--* fix(back to top): remove 'Label inside' variant (#1520) -->
- <span class="badge bg-danger">Breaking</span> **Back to top** 'Label inside' variant was removed because not compliant with Orange Design System. Even if the rendering could still work, it is recommended to only use the versions presented in the documentation.

<!--
  * feat(css): add CSS vars to handle `.nav-tabs-light` and `.tab-content`
    - New --#{$prefix}nav-tabs-link-hover-color, --#{$prefix}nav-tabs-link-hover-bg, --#{$prefix}nav-tabs-link-border-width CSS variables
  * fix(toast): adjust the layout of custom content (#1490)
    - Changed some utilities in the markup of "Toast > Custom content" example to adjust the layout
        Summary: Change custom toast example in the doc.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1490
        Topics: Docs, Markup, Toast
        K/R: Remove since these are only example to show what is possible.
  * fix(navbar): minor fixes (#1498)
    - Add a .mb-3 to offcanvases navbar examples to add some space between the last link and the search bar in mobile viewport
    - New $navbar-dark-border-color used in `--bs-navbar-border-color` for .navbar-dark
    - Change the default value of $navbar-border-color now used only for light navbars
        Summary: Change the border-color management in navbar + small fix in example.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1498
        Topics: Docs, Sass, Add functionality, Breaking change, Navbar
        K/R: Keep
  * <mark>/.mark: Improve rendering for accessibility (#1506)
        Summary: Change the rendering for .mark.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1506
        Topics: Sass, Add functionality, Reboot
        K/R: Keep
  * chore(workflows): replace percy/snapshot-action by Percy CLI (#1530)
        Summary: Remove percy/snapshot and add @percy/cli dependency.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1530
        Topics: CI, Dependencies
        K/R: Remove
  * chore: add a PR template (#1007)
        Summary: Add a PR template on Github.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1007
        Topics: Git
        K/R: Remove
  * feat(list group): add dark variant (#1525)
        Summary: Add a dark variant to list group.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1525
        Topics: Docs, Sass, Add a functionality, List group
        K/R: Keep
  * fix(css): add workaround for postcss value parser error (#1524)
    - Note: linked to previous chore(merge) from Bootstrap. Just forgot to fix this one
        Summary: Update Sass file for postcss parser.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1524
        Topics: Sass, Fix, Navbar
        K/R: Remove
  * chore(merge main patched commit) → 23fb7a7 (#1521)
    - https://github.com/twbs/bootstrap/commit/97a9060a8fa643484fbe70d1e527267841670c9d (same as the one following, should have been squashed)
    - https://github.com/twbs/bootstrap/commit/9b943880fc38ccde372973111fe5872b5960e75d
        Summary: Remove the left margin when not necessary in first button group button.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1521/commits/8cc92657fca4a62966ad6185df2811a2e70c7f19
                 https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1521/commits/fb182fcbc702c869437065b50422be2e1b6caaea
        Topics: Sass, Fix, Button group
        K/R: ?
    - https://github.com/twbs/bootstrap/commit/7a7469b8ab3e86dc522d3cf030b307364b1ada0b
        Summary: Use the good Sass variable to initialize the CSS var in accordion.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1521/commits/efdf62a61304e0e4f63f6a9665245b6a3757ed4b
        Topics: Sass, Add a functionality, Breaking changes, Accordion
        K/R: Keep
    - https://github.com/twbs/bootstrap/commit/949456984aa21536afd35eddf7ea38b3648830a3
        Summary: Manage the hover state on manual triggering in tooltip.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1521/commits/145b93615b461b598bc820397be5a88f7eff3e1d
        Topics: Javascript, Fix, Tooltips
        K/R: ?
    - https://github.com/twbs/bootstrap/commit/23fb7a79156d1ea4ce2ab5713debbbc251b4e22f
        Summary: Fix the click on scrollbar inside modal.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1521/commits/896a692e9b27e828309b47ad69abe6b8bebea856
        Topics: Javascript, Fix, Modal
        K/R: ?
  * chore(merge main) patched commit → 2504b89 (#1513)
    - https://github.com/twbs/bootstrap/commit/a329575d82a65660ffa7b18cbd9f291e0ee7eef5
        Summary: Put some doc inside a table.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1513/commits/8eb7321b5fa2847a919ae8968f28395f5e1a5c44
        Topics: Docs, List group, Navs tabs
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/585146a6a7aa70faf25442d7d28636ce57e29588
        Summary: Update eslint-config-xo dependency.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1513/commits/7b69e857675288a38005be1f217e6f9098ed8040
        Topics: Dependencies
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/75e09b1c0f5ae5f51078c7a25fe36d892c5cfcfe
        Summary: Update rtlcss dependency.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1513/commits/db7dfad165b642c689e88f95a4ab73d0a958b1ac
        Topics: Dependencies
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/b8880e5eec6bb4f33578578ba2413f0d91424382
        Summary: Workaround for postcss parser. (-1 * ...)
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1513/commits/f5ceeb59dd270208acaa0ff63e9382a70ab12cb3
        Topics: Sass
        K/R: ?
    - https://github.com/twbs/bootstrap/commit/32c457db4b6ff389efbd35772b24746c7ffb0b6d
        Summary: Change the focus management of buttons (use of :focus-visible instead of :focus).
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1513/commits/f225846843ba8708980c1c4bf9c993845172acb0
                 https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1513/commits/a9bce73086fedf34cc3fdd50b0016754a50572a9
                 https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1513/commits/ee874a7fabbaa3da45a1595b68a196c6ea54cb2b
                 https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1513/commits/a3fa822704747ee61a895a8151ae88f789b19e2f
        Topics: Sass, Breaking changes, Button
        K/R: Keep
    - https://github.com/twbs/bootstrap/commit/2504b8995095d2bb41c9686afa175f9eaa91bec2
        Summary: Remove gradient for .btn-link.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1513/commits/d3d66c45bbd42f2c9a5471fcbfd147fc6c7d050e
        Topics: Sass, Button
        K/R: ?
    - Check also the content of the diff to see if anything specific to Boosted was done and must be mentioned in the guide
  * fix(docs): change responsive values in utility API examples (#1488)
        Summary: Change the responsive values in the doc.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1488
        Topics: Docs, API
        K/R: Remove
  * chore(merge main) patched commit → 337068f (#1510)
    - https://github.com/twbs/bootstrap/commit/b14190b5095195fbe803f81bf4ce56d09be5378d
        Summary: Update popperjs dependency.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1510/commits/363e4fee27febd22630716e8d88d716fe45b8cea
        Topics: Dependencies
        K/R: Keep
    - https://github.com/twbs/bootstrap/commit/77e17e3b8deb4d5467203f4e3cd903b7cd06bde4
        Summary: Fix typo in the doc.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1510/commits/9e31e675975fd0a135f571268bba4f26f6407be1
        Topics: Docs
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/b5f2d5a31e24455447939c3a7487a4fe89a66ba6
        Summary: Fix typo in the doc.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1510/commits/349987f4f76e2fa66231abbb8300f640c6c3d2fa
        Topics: Docs
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/4f97d8fabda142685e36391da2c37c7e09955ac6
        Summary: Update Webpack guide doc.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1510/commits/22ad93727a051a3f11b9459e300766e4a985f0b6
        Topics: Docs
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/279363783759323c988d227145d5f6bc6c683efd
        Summary: Fix 'precompiled' in the doc.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1510/commits/0da15f756831a113c89a043ece5f094864d19849
        Topics: Docs
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/8c380b2676eb5eb76716b94763ef21e98c86b9b7
        Summary: Update the accordion Sass for accordion-flush.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1510/commits/ab72fa70bb78d0bfc4ca6639070403c10bba82f0
        Topics: Sass
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/54b4b2c66a6f0f403a8120a0c7720f29aaa71f7c
        Summary: Explain a bit better vertical gutters.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1510/commits/72d7d58f5feb514cc8c38ad219d29e9d763a5fb2
        Topics: Docs, Gutters
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/337068f8b1044004f4b9abfffbb433694ae87993
        Summary: Fix wrong dropdown menu opening when severals dropdowns in one element.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1510/commits/7961a7acb10d49a0831711b983169641a3e30571
        Topics: Javascript, Fix, Dropdown
        K/R: ?
    - Check also the content of the diff to see if anything specific to Boosted was done and must be mentioned in the guide
  * chore(merge main) patched commit → 3ad8551 (#1507)
    - ~~https://github.com/twbs/bootstrap/commit/af1bd974bba7f6e7f90c5ed3f42738bd101926cb~~ - Was already done via Dependabot
        Summary: Update @rollup dependency.
        Boosted: None
        Topics: Dependencies
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/29332a954f86671d39f60007fb0c2ea633731e88
        Summary: Doc update in tables.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1507/commits/33c99bde00d0fe76202ffaf48f5634a5e388afd5
        Topics: Docs
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/15318674fb086214e095c61af780a7d889f0f11e
        Summary: Reorder offcanvas doc.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1507/commits/125f0f1b83dfc334049a355724a72aa793e16dcb
        Topics: Docs, Offcanvas
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/995df354f260ccf46672e4dc9e7b2c242bd4c02d
        Summary: Change the cursor for search modal in the doc.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1507/commits/a645786913577a1af25d743a50550a23578661f0
        Topics: Sass
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/4cea8b1786ddbe365747cabebe9bee44d70a3b6d
        Summary: Add a comment in Sass file.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1507/commits/a645786913577a1af25d743a50550a23578661f0
        Topics: Sass
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/a0238d126b385044bd7cb16bdc9118f3d44e016f
        Summary: Add a CSS var to toast.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1507/commits/405215a187e037eee4f1192d31681c4bf317e2c6
        Topics: Sass, Add functionality, Toast
        K/R: Keep
    - https://github.com/twbs/bootstrap/commit/465cc2da4f028c36f6b1dc7887776af0db4f9176
        Summary: Change one example that wasn't correct in the card doc.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1507/commits/64befa9347a80d4d13b2ee6f7839994547410110
        Topics: Docs, Card
        K/R: Remove since it only change the markup for one example.
    - https://github.com/twbs/bootstrap/commit/bc2ec7c7583bed6f51571501739c9e7d57e3ba2f
        Summary: Initialize a CSS var for button.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1507/commits/290a0e37a09c23a45df6193147eee9b3933e60b2
        Topics: Sass
        K/R: Remove but not sure
    - https://github.com/twbs/bootstrap/commit/a138bc3fb9ff3495a8d63d776e0ad21ed2aaa1ca
        Summary: Change the way to display the dark variant doc.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1507/commits/2936702a90fe147aa4808a9edbefeb0c77508e7b
                 https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1507/commits/9be3cdf265a800555b385e606c6f825859bd5476
                 https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1507/commits/df67fb2e976b70ab338a8da5623e2710aad41357
                 https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1507/commits/4e5130ecfe0d48f1d1e5ffefb48f36f787fff819
                 https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1507/commits/4330c7a1efb201e065e722ea828aedeee0bfeef8
        Topics: Docs, Sass
        K/R: Remove
    - ~~https://github.com/twbs/bootstrap/commit/ebbed79df7bb4735894f31bc558377a531c93710~~ Probably nothing to do. Linked to https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/1508
        Summary: Solve a rounded issue for list group when there's only one.
        Boosted: None
        Topics: Sass
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/2f3aec819ae7bd04c00cc55fee977d12e11a46c6
        Summary: Fix z-index issues on input group + support z-index for floating labels.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1507/commits/da975b0442a063ed4530adea167ba30a89b02734
        Topics: Sass, Add functionality, Input group
        K/R: Keep to prevent issues with zindex
    - https://github.com/twbs/bootstrap/commit/87aaf9499620c9a7b592711a6e8d86e9a30467b6
        Summary: Add a form select example.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1507/commits/4f72cdaf526e3d2f7dba4a271095db1b4f5c0ce7
        Topics: Example
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/cda901f2444d6b09cfa3261c84ef98288e3b9834
        Summary: Change a bit the applied focus on `pre`.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1507/commits/ea88a59023f311ad02be852b0617f72dba67a20d
                 https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1507/commits/97c768c9e2aff3469ca0667288d2dab045a1d5ef
        Topics: Sass, Docs
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/db3490788775ac88cc8dcc32f9b8bcd66f95859e
        Summary: Update @babel/core, @popperjs/core, eslint, jquery, lockfile-lint, postcss, rollup, sass, stylelint and terser dependencies
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1507/commits/3fbf956cb237236493a825e08f2c328fc06fad73
        Topics: Dependencies
        K/R: ?
    - https://github.com/twbs/bootstrap/commit/a12453a0ffe38af0e273e559ec4ced396d39feba
        Summary: Change the starter template padding.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1507/commits/abc0dc596e0379c9cc1e0ad4a88d9a40c7c5467f
        Topics: Example
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/3ad8551f8b736be024a533aa281a89995258021f
        Summary: Change the initialization of an accordion CSS var.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1507/commits/840c96209c18aafe8d4cb31d92457d04fb123e37
        Topics: Sass, Add functionality, Accordion
        K/R: Remove
    - Check also the content of the diff to see if anything specific to Boosted was done and must be mentioned in the guide
  * fix(docs): reorder Carousel doc parts (#1491)
        Summary: Reorder the carousel doc.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1491
        Topics: Docs, Carousel
        K/R: Remove
  * feat(breadcrumb): add dark variant (#1430)
        Summary: Add a dark variant and a CSS var for breadcrumb.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1430
        Topics: Docs, Sass, Add functionality, Breadcrumb
        K/R: Keep
  * feat(pagination): add dark variant (#1433)
        Summary: Add a dark variant and a CSS var for pagination.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1433
        Topics: Docs, Sass, Add functionality, Pagination
        K/R: Keep
  * fix(dropdowns): add and trim CSS vars (#1423)
        Summary: Add and remove some CSS var in dropdown.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1423
        Topics: Sass, Add functionality, Breaking changes, Dropdowns
        K/R: Keep
  * fix(docs): fix Orange Helvetica CSS file name in docs (#1487)
        Summary: Fix documentation for Helvetica files.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1487
        Topics: Docs
        K/R: Keep (Don't know if this is mentioned anywhere)
  * chore(deps): update package-lock.json (#1503)
        Summary: Update package-lock.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1503
        Topics: Dependencies
        K/R: Remove
  * feat(stepped process): add dark variant (#1434)
        Summary: Add a dark variant for stepped process.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1434
        Topics: Docs, Sass, Add functionality, Stepped process
        K/R: Keep
  * fix(docs): move 'Dark variant' sections out of 'Example' for alerts and accordions (#1502)
        Summary: Change the 'Dark variant' doc in Alerts and Accordions.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1502
        Topics: Docs, Alerts, Accordions
        K/R: Remove
  * docs(search): enhance Algolia search results for a11y (#1432)
        Summary: Changed the Algolia search modal look.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1432
        Topics: Docs
        K/R: Remove
  * chore(deps-dev): bump @rollup/plugin-commonjs from 22.0.1 to 22.0.2 (#1474)
        Summary: Update @rollup dependency.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1474
        Topics: Dependencies
        K/R: Remove
  * fix(cards): refine rendering of cards with image overlays (#1493)
        Summary: Backport of an example from v4.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1493
        Topics: Docs, Card
        K/R: Remove since it doesn't change the markup of each card
  * fix(docs): add missing points and Markdown formatting in some tables (#1499)
        Summary: Fix typo in the doc.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1499
        Topics: Docs
        K/R: Remove
  * docs(content): show a third-level list (#1497)
        Summary: Add a third-level list item in the doc.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1497
        Topics: Docs, Reboot
        K/R: Remove
  * fix(docs): replace 'Secondary' by 'Primary' label for some buttons when inconsistent (#1494)
        Summary: Change typo in the doc
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1494
        Topics: Docs, Buttons
        K/R: Remove
  * fix(dropdown toggle split): same width for all `.dropdown-toggle-split`s orientations (#1451)
        Summary: Add `min-width` to `.dropdown-toggle-split`.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1451
        Topics: Sass, Add functionality, Dropdown
        K/R: Keep
  * fix(css): set .mark and <mark> y padding to 0 (#1484)
        Summary: Change the y padding- default value in `.mark`.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1484
        Topics: Sass, Reboot
        K/R: Remove
  * fix(stepped process): improve rendering of arrow shapes (#1485)
        Summary: Changing the default values of the arrow in stepped-process.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1485
        Topics: Sass, Stepped-process
        K/R: Remove
  * fix(docs): update values in grids/breakpoints tables (#1440)
        Summary: Syncing the values in Sass and the doc.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1440
        Topics: Docs
        K/R: Remove
  * fix(modal): remove unused CSS variables (#1418)
        Summary: Remove some CSS var in modal.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1418
        Topics: Sass, Breaking changes, Modal
        K/R: Keep
  * fix(pagination): remove CSS variables (#1457)
        Summary: Remove some CSS var in pagination.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1457
        Topics: Sass, Breaking changes, Pagination
        K/R: Keep
  * fix(alerts): increase height when additional content (#1425)
        Summary: Change the line-height inside alerts.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1425
        Topics: Sass, Add functionality, Alerts
        K/R: Keep
  * chore(deps): bump actions/cache from 3.0.5 to 3.0.8 (#1473)
        Summary: Update actions/cache dependency.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1473
        Topics: Dependencies
        K/R: Remove
  * fix(docs): remove navbar box shadow version selector overlap [#1438](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1438)
        Summary: remove navbar box shadow version selector overlap.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1438
        Topics: Docs
        K/R: Remove
  * chore(merge main) patched commit → c3c6591 [#1469](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1469)
    - https://github.com/twbs/bootstrap/commit/dfae892801ffc194de6aec34d543d908db3dd8e1
        Summary: Set title on element if needed when tooltip is closing.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1469/commits/a769496787bbf22fb5532df78a733815520b7c53
        Topics: Javascript, Add functionality, Tooltip
        K/R: Keep
    - ~~https://github.com/twbs/bootstrap/commit/3feaf6ca0b0c6b6e134a8937ca132d43ed949a68~~ - Nothing to do in Boosted. We want to keep the search icon as it is contrary to what's done in Bootstrap
        Summary: Changes the management of the Algolia search icon in the navbar.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1469/commits/9eafd577523b55965066dbbf9ce825e0dbeced5e
        Topics: Docs
        K/R: Remove
    - ~~https://github.com/twbs/bootstrap/commit/90c50ab198a4ecffdda6a5ff10fe58cab2c816b2~~ - Nothing to do in Boosted since we don't have this modified section
        Summary: Adding some missing `alt`.
        Boosted: None
        Topics: Docs, markup
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/db86607c088bd307aa21f4b4bd0258262262a4e4
        Summary: Add a threshold option on Scrollspy.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1469/commits/399ba677af1bf46098c797bf0419302e8b58dc03
        Topics: Javascript, Add functionality, Scrollspy
        K/R: Keep
    - ~~https://github.com/twbs/bootstrap/commit/17aa6732ab83653501e70dc88afcccead1dc0892~~ - Was already done in Boosted
        Summary: Fix some typo error in the doc.
        Boosted: None
        Topics: Docs
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/85530309fabf6c7316e8511016d3daed1ab3aee4
        Summary: Change the value of a Sass variable.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1469/commits/71855c8c70070f805ec358bd303c150d74af255b
        Topics: Sass
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/a4f81c04b5da87b9b05ceeeee87ae235f836d4e6
        Summary: Update autoprefixer dependency.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1469/commits/956586b6846c67e59fb021e20ec6e54ba8386ff8
        Topics: Dependencies
        K/R: Remove
    - ~~https://github.com/twbs/bootstrap/commit/c22dd50e1b3539685c609e0e0b37ba52bb2312cf~~ - `_floating-labels.scss` doesn't exist in Boosted
        Summary: Align start for floating labels.
        Boosted: None
        Topics: Sass, Add functionality, Floating labels
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/7432f2a9224ed173d04930df3f02fd5a37e962c0
        Summary: Fix typo error for a class in the doc.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1469/commits/604f29949ce36209682377c634c94152a9df3286
        Topics: Docs
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/6c221aa043e0bd14db31fb047c57c714e92605de
        Summary: Fix border for floating labels inside input groups.
        Boosted:https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1469/commits/471d5f4d0a21dd7a4f60ed08c2048022be353315
        Topics: Sass, Fix, Floating labels
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/4018fac20ebd0adeb65f6b01a13851098e94309a
        Summary: Add doc for popover explanation.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1469/commits/537b26f040347e40ccda2d061718f37e487eab48
        Topics: Docs, Popover
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/8730ef0f8eec576a56b99ceb785da09f0c54b2ac
        Summary: Adding no redundant selector to linter.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1469/commits/7eea3cbe0ed6bead5b2d1385b0fe862224bf2769
                 https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1469/commits/7fa36229e80c84d3c531fdc44ca12667a70a4876
                 https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1469/commits/8bc1f66b1f5f57108391ae316e818a3bbcf2ab79
                 https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1469/commits/bcdcf5a9735874241fc441c7c1f5270ec74ca888
        Topics: Sass, Lint
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/e57a94cd664aa7b819da9408053bfbdf414a78e4
        Summary: Better explanation for grid row columns.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1469/commits/e46024281f529fee43904942b4844a6092842cf4
        Topics: Docs
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/9e57dfadac9cd924c35b7ff5b3d82981b59502de
        Summary: Update features example.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1469/commits/0b66371788d8b4031d9f720a5a99a0b8e2b63702
        Topics: CSS, Example
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/aad77f32bd58175ab5c3577aed558adf8598b394
        Summary: Update rollup dependency.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1469/commits/938e1b33700f3bf61b3cb34619d19f0fd7ab47d6
        Topics: Dependencies
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/a685b9648bf14c853b9a417c7c68f95d93e1aabc
        Summary: Update eslint, @babel package and sass dependencies.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1469/commits/02269b39e7c3f8cef2b2340d37906c06b413e699
        Topics: Dependencies
        K/R: ?
    - https://github.com/twbs/bootstrap/commit/c3c65911665ab64bdaa15d405db65ee81655dbf3
        Summary: Change author of Sass function.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1469/commits/71701ed4fed9d0f9fcaf0044933dfe49281c153c
        Topics: Sass
        K/R: Remove
    - Check also the content of the diff to see if anything specific to Boosted was done and must be mentioned in the guide
  * feat(pagination): new `--#{$prefix}pagination-padding-end` CSS var [#1416](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1416)
        Summary: new `--#{$prefix}pagination-padding-end` CSS var
        Boosted: None
        Topics: Sass, Minor change, Pagination
        K/R: Keep
  * fix(css): drop unused $list-group-hover-bg and `--#{$prefix}list-group-action-hover-bg` [#1417](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1417)
        Summary: drop unused $list-group-hover-bg and `--#{$prefix}list-group-action-hover-bg`
        Boosted: None
        Topics: Sass, Deprecated, List-group
        K/R: Keep
  * chore(merge main) patched commit → 44c9c8d [#1421](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1421)
    - https://github.com/twbs/bootstrap/commit/04b5d099b3643e08e6f92311a89a29861ff0191a
        Summary: Remove unused parameter of a mixin.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1421/commits/66694da38a7a1d12f1634968a409c11388783685
        Topics: Sass
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/d12bcf7bc0f0cb55aa98db3a03f754c5a4d9001f
        Summary: Change a deprecated link in doc.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1421/commits/a98274d6c81e7e6e270de5d2ac735614b1bec78e
        Topics: Docs
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/b6d27899fc03fe9c3be87a34e9d19696fb716f44
        Summary: Change for a good wording in doc.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1421/commits/eed7a8d12db58b5c1e27fc8878ecf2313d8a2103
        Topics: Docs
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/7688c84b8a881f1fe131b204d16ba13246d25da5
        Summary: Change the titles structure in a Bootstrap example.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1421/commits/c52d795234fb5ee55f99d4b69ec981297a7595cc
        Topics: Example
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/e547c9c2e90549ffec84b8c2c293770c5c213e39
        Summary: Adding a missing parenthesis in the doc.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1421/commits/965442d68ff83cc9c404ada83f084e1e4e1475a2
        Topics: Docs
        K/R: Remove
    - ~~https://github.com/twbs/bootstrap/commit/99cd8ca8a0f2cb0db8276316943fdd1a2199e791~~: already done in Boosted
        Summary: Change the added-in short-code in doc.
        Boosted: None
        Topics: Docs
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/14e705d9ae700030242c9cc7191e6e6d376eda39
        Summary: Change the link to create a new issue in Boosted.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1421/commits/e78ee0cd3274acd0010e52202dfbfc824c027713
        Topics: Docs
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/01bf7a9b86e6cffcf8f7436f8afa898a9453bd19
        Summary: Add a missing added-in short-code in doc.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1421/commits/050d91b7e548d74b42310362788628ef36502fa9
        Topics: Docs
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/dc901d25fa663807886a9564765bae0f6fe47f8f
        Summary: Add a missing added-in short-code in doc.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1421/commits/a2792f5d41860b26e568e8b9a2bfc412b7128854
        Topics: Docs
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/a153f360eea855f29947ac14be14e29380ddebeb
        Summary: Remove useless calc in a Sass file.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1421/commits/5b4e9c74631c97c67db9bf10b4500b84cac8cbf5
        Topics: Sass
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/00aa1a5c6e04629955ee45780b86f6ce8fd48ebf
        Summary: Remove Slack references in the doc.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1421/commits/fd118dada5e46a25344f87636533ba6ff92811bc
        Topics: Docs
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/501faa2c966632f31b919faf3fa78e9adbe6fe5b
        Summary: Bring some new images to Webpack/Vite/Parcel and change the way they're managed.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1421/commits/0bc25dd543d2962207663053c0261a265acd0297
                 https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1421/commits/5171f9985af857ffdd263a23d59f54b5d2bd1f46
                 https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1421/commits/1e44f5b8683fb613a748a0e7f6bbc3818ac1fd68
        Topics: Docs
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/02f1c628f11122a4c2a40df6d2e1bc1fe6ec202a
        Summary: Update lockfile-lint dependency.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1421/commits/7a734d09b603c258d8c173dd8d4a9e4c3d3a2f64
        Topics: Dependencies
        K/R: Remove
    - https://github.com/twbs/bootstrap/commit/44c9c8df8d8e5be84d5bea47f8ee110b64e86e62
        Summary: Update Sass dependency.
        Boosted: https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/pull/1421/commits/1d00904aec9702cf9c23525658b7752c935eb4a2
        Topics: Dependency
        K/R: ?
    - Check also the content of the diff to see if anything specific to Boosted was done and must be mentioned in the guide -> Done
-->

## v5.2.0

<hr class="mb-4">

### Refreshed design

Boosted v5.2.0 features a subtle design update for a handful of components and properties across the project, **most notably through refined `border-radius` values on buttons and form controls**. Our documentation also has been updated with a new homepage and a simpler docs layout that no longer collapses sections of the sidebar.

### More CSS variables

**We've updated all our components to use CSS variables.** While Sass still underpins everything, each component has been updated to include CSS variables on the component base classes (e.g., `.btn`), allowing for more real-time customization of Bootstrap. In subsequent releases, we'll continue to expand our use of CSS variables into our layout, forms, helpers, and utilities. Read more about CSS variables in each component on their respective documentation pages.

Our CSS variable usage will be somewhat incomplete until Boosted 6. While we'd love to fully implement these across the board, they do run the risk of causing breaking changes. For example, setting `$alert-border-width: var(--bs-border-width)` in our source code breaks potential Sass in your own code if you were doing `$alert-border-width * 2` for some reason.

As such, wherever possible, we will continue to push towards more CSS variables, but please recognize our implementation may be slightly limited in v5.

### New `_maps.scss`

**Boosted v5.2.0 introduced a new Sass file with `_maps.scss`.** It pulls out several Sass maps from `_variables.scss` to fix an issue where updates to an original map were not applied to secondary maps that extend them. For example, updates to `$theme-colors` were not being applied to other theme maps that relied on `$theme-colors`, breaking key customization workflows. In short, Sass has a limitation where once a default variable or map has been _used_, it cannot be updated. _There's a similar shortcoming with CSS variables when they're used to compose other CSS variables._

This is why variable customizations in Boosted have to come after `@import "functions"`, but before `@import "variables"` and the rest of our import stack. The same applies to Sass maps—you must override the defaults before they get used. The following maps have been moved to the new `_maps.scss`:

- `$theme-colors-rgb`
- `$utilities-colors`
- `$utilities-text`
- `$utilities-text-colors`
- `$utilities-bg`
- `$utilities-bg-colors`
- `$negative-spacers`
- `$gutters`

Your custom Boosted CSS builds should now look something like this with a separate maps import.

```diff
  // Functions come first
  @import "functions";

  // Optional variable overrides here
+ $custom-color: #df711b;
+ $custom-theme-colors: (
+   "custom": $custom-color
+ );

  // Variables come next
  @import "variables";

+ // Optional Sass map overrides here
+ $theme-colors: map-merge($theme-colors, $custom-theme-colors);
+
+ // Followed by our default maps
+ @import "maps";
+
  // Rest of our imports
  @import "mixins";
  @import "utilities";
  @import "root";
  @import "reboot";
  // etc
```

### New utilities

- Expanded [`font-weight` utilities]({{< docsref "/utilities/text#font-weight-and-italics" >}}) to include `.fw-semibold` for semibold fonts.
- Expanded [`border-radius` utilities]({{< docsref "/utilities/borders#sizes" >}}) to include two new sizes, `.rounded-4` and `.rounded-5`, for more options.

### Additional changes

- **Introduced new `$enable-container-classes` option. —** Now when opting into the experimental CSS Grid layout, `.container-*` classes will still be compiled, unless this option is set to `false`. Containers also now keep their gutter values.

- **Offcanvas component now has [responsive variations]({{< docsref "/components/offcanvas#responsive" >}}).** The original `.offcanvas` class remains unchanged—it hides content across all viewports. To make it responsive, change that `.offcanvas` class to any `.offcanvas-{sm|md|lg|xl|xxl}` class.

- **Thicker table dividers are now opt-in. —** We've removed the thicker and more difficult to override border between table groups and moved it to an optional class you can apply, `.table-group-divider`. [See the table docs for an example.]({{< docsref "/content/tables#table-group-dividers" >}})

- **[Scrollspy has been rewritten](https://github.com/twbs/bootstrap/pull/33421) to use the Intersection Observer API**, which means you no longer need relative parent wrappers, deprecates `offset` config, and more. Look for your Scrollspy implementations to be more accurate and consistent in their nav highlighting.

- **Popovers and tooltips now use CSS variables.** Some CSS variables have been updated from their Sass counterparts to reduce the number of variables. As a result, three variables have been deprecated in this release: `$popover-arrow-color`, `$popover-arrow-outer-color`, and `$tooltip-arrow-color`.

- **Added new `.text-bg-{color}` helpers.** Instead of setting individual `.text-*` and `.bg-*` utilities, you can now use [the `.text-bg-*` helpers]({{< docsref "helpers/color-background" >}}) to set a `background-color` with contrasting foreground `color`.

- Added `.form-check-reverse` modifier to flip the order of labels and associated checkboxes/radios.

- Added [striped columns]({{< docsref "/content/tables#striped-columns" >}}) support to tables via the new `.table-striped-columns` class.

- <span class="badge bg-danger">Breaking</span> Changed `data-o-label` to `data-bs-label` in Back to top component.

For a complete list of changes, [see the v5.2.0 project on GitHub](https://github.com/twbs/bootstrap/projects/32).

## v5.1.0

<hr class="mb-4">

- **Added experimental support for [CSS Grid layout]({{< docsref "/layout/css-grid" >}}). —** This is a work in progress, and is not yet ready for production use, but you can opt into the new feature via Sass. To enable it, disable the default grid, by setting `$enable-grid-classes: false` and enable the CSS Grid by setting `$enable-cssgrid: true`.

- **Updated navbars to support offcanvas. —** Add [offcanvas drawers in any navbar]({{< docsref "/components/navbar#offcanvas" >}}) with the responsive `.navbar-expand-*` classes and some offcanvas markup.

- **Added new [placeholder component]({{< docsref "/components/placeholders/" >}}). —** Our newest component, a way to provide temporary blocks in lieu of real content to help indicate that something is still loading in your site or app.

- **Collapse plugin now supports [horizontal collapsing]({{< docsref "/components/collapse#horizontal" >}}). —** Add `.collapse-horizontal` to your `.collapse` to collapse the `width` instead of the `height`. Avoid browser repainting by setting a `min-height` or `height`.

- **Added new stack and vertical rule helpers. —** Quickly apply multiple flexbox properties to quickly create custom layouts with [stacks]({{< docsref "/helpers/stacks/" >}}). Choose from horizontal (`.hstack`) and vertical (`.vstack`) stacks. Add vertical dividers similar to `<hr>` elements with the [new `.vr` helpers]({{< docsref "/helpers/vertical-rule/" >}}).

- **Added new global `:root` CSS variables. —** Added several new CSS variables to the `:root` level for controlling `<body>` styles. More are in the works, including across our utilities and components, but for now read up [CSS variables in the Customize section]({{< docsref "/customize/css-variables/" >}}).

- **Overhauled color and background utilities to use CSS variables, and added new [text opacity]({{< docsref "/utilities/text#opacity" >}}) and [background opacity]({{< docsref "/utilities/background#opacity" >}}) utilities. —** `.text-*` and `.bg-*` utilities are now built with CSS variables and `rgba()` color values, allowing you to easily customize any utility with new opacity utilities.

- **Added new snippet examples based to show how to customize our components. —** Pull ready to use customized components and other common design patterns with our new [Snippets examples]({{< docsref "/examples#snippets" >}}).

- **Removed unused positioning styles from popovers and tooltips** as these are handled solely by Popper. `$tooltip-margin` has been deprecated and set to `null` in the process.

Want more information? [Read the v5.1.0 blog post.](https://blog.getbootstrap.com/2021/08/04/bootstrap-5-1-0/)

<hr class="my-5">

{{< callout info >}}
**Hey there!** Changes to our first major release of Boosted 5, v5.0.0, are documented below. They don't reflect the additional changes shown above.
{{< /callout >}}

## Dependencies

- Dropped jQuery.
- Upgraded from Popper v1.x to Popper v2.x.
- Replaced Libsass with Dart Sass as our Sass compiler given Libsass was deprecated.
- Migrated from Jekyll to Hugo for building our documentation

## Browser support

- Dropped Internet Explorer 10 and 11
- Dropped Microsoft Edge < 16 (Legacy Edge)
- Dropped Firefox < 60
- Dropped Safari < 12
- Dropped iOS Safari < 12
- Dropped Chrome < 60

<hr class="my-5">

## Documentation changes

- Redesigned homepage, docs layout, and footer.
- Added [new Parcel guide](/docs/{{< param docs_version >}}/getting-started/parcel/).
- Added [new Customize section](/docs/{{< param docs_version >}}/customize/overview/), replacing [v4's Theming page](https://boosted.orange.com/docs/4.6/getting-started/theming/), with new details on Sass, global configuration options, color schemes, CSS variables, and more.
- Reorganized all form documentation into [new Forms section](/docs/{{< param docs_version >}}/forms/overview/), breaking apart the content into more focused pages.
- Similarly, updated [the Layout section](/docs/{{< param docs_version >}}/layout/breakpoints/), to flesh out grid content more clearly.
- Renamed "Navs" component page to "Navs & Tabs".
- Renamed "Checks" page to "Checks & radios".
- Redesigned the navbar and added a new subnav to make it easier to get around our sites and docs versions.
- Added new keyboard shortcut for the search field: <kbd>Ctrl + /</kbd>.

## Sass

- We've ditched the default Sass map merges to make it easier to remove redundant values. Keep in mind you now have to define all values in the Sass maps like `$theme-colors`. Check out how to deal with [Sass maps]({{< docsref "/customize/sass#maps-and-loops" >}}).

- <span class="badge bg-danger">Breaking</span> Renamed `color-yiq()` function and related variables to `color-contrast()` as it's no longer related to YIQ color space. [See #30168.](https://github.com/twbs/bootstrap/pull/30168/)
  - `$yiq-contrasted-threshold` is renamed to `$min-contrast-ratio`.
  - `$yiq-text-dark` and `$yiq-text-light` are respectively renamed to `$color-contrast-dark` and `$color-contrast-light`.

- <span class="badge bg-danger">Breaking</span> Media query mixins parameters have changed for a more logical approach.
  - `media-breakpoint-down()` uses the breakpoint itself instead of the next breakpoint (e.g., `media-breakpoint-down(lg)` instead of `media-breakpoint-down(md)` targets viewports smaller than `lg`).
  - Similarly, the second parameter in `media-breakpoint-between()` also uses the breakpoint itself instead of the next breakpoint (e.g., `media-between(sm, lg)` instead of `media-breakpoint-between(sm, md)` targets viewports between `sm` and `lg`).

- <span class="badge bg-danger">Breaking</span> Removed print styles and `$enable-print-styles` variable. Print display classes are still around. [See #28339](https://github.com/twbs/bootstrap/pull/28339).


- <span class="badge bg-danger">Breaking</span> Dropped `color()`, `theme-color()`, and `gray()` functions in favor of variables. [See #29083](https://github.com/twbs/bootstrap/pull/29083).

- <span class="badge bg-danger">Breaking</span> Renamed `theme-color-level()` function to `color-level()` and now accepts any color you want instead of only `$theme-color` colors. [See #29083](https://github.com/twbs/bootstrap/pull/29083) **Watch out:** `color-level()` was later on dropped in `v5.0.0-alpha3`.

- <span class="badge bg-danger">Breaking</span> Renamed `$enable-prefers-reduced-motion-media-query` and `$enable-pointer-cursor-for-buttons` to `$enable-reduced-motion` and `$enable-button-pointers` for brevity.


- <span class="badge bg-danger">Breaking</span> Removed the `bg-gradient-variant()` mixin. Use the `.bg-gradient` class to add gradients to elements instead of the generated `.bg-gradient-*` classes.

- <span class="badge bg-danger">Breaking</span> **Removed previously deprecated mixins:**
  - `hover`, `hover-focus`, `plain-hover-focus`, and `hover-focus-active`
  - `float()`
  - `form-control-mixin()`
  - `nav-divider()`
  - `retina-img()`
  - `text-hide()` (also dropped the associated utility class, `.text-hide`)
  - `visibility()`
  - `form-control-focus()`

- <span class="badge bg-danger">Breaking</span> Renamed `scale-color()` function to `shift-color()` to avoid collision with Sass's own color scaling function.

- `box-shadow` mixins now allow `null` values and drop `none` from multiple arguments. [See #30394](https://github.com/twbs/bootstrap/pull/30394).

- The `border-radius()` mixin now has a default value.

## Color system

- The color system which worked with `color-level()` and `$theme-color-interval` was removed in favor of a new color system. All `lighten()` and `darken()` functions in our codebase are replaced by `tint-color()` and `shade-color()`. These functions will mix the color with either white or black instead of changing its lightness by a fixed amount. The `shift-color()` will either tint or shade a color depending on whether its weight parameter is positive or negative. [See #30622](https://github.com/twbs/bootstrap/pull/30622) for more details.

- Added new tints and shades for every color, providing nine separate colors for each base color, as new Sass variables.

- Improved color contrast. Bumped color contrast ratio from 3:1 to 4.5:1 and updated blue, green, cyan, and pink colors to ensure WCAG 2.1 AA contrast. Also changed our color contrast color from `$gray-900` to `$black`.

- To support our color system, we've added new custom `tint-color()` and `shade-color()` functions to mix our colors appropriately.

## Grid updates

- **New breakpoint!** Added new `xxl` breakpoint for `1400px` and up. No changes to all other breakpoints.

- **Improved gutters.** Gutters are now set in rems, and are narrower than v4 (`1.5rem`, or about `24px`, down from `30px`). This aligns our grid system's gutters with our spacing utilities.
  - Added new [gutter class](/docs/{{< param docs_version >}}/layout/gutters/) (`.g-*`, `.gx-*`, and `.gy-*`) to control horizontal/vertical gutters, horizontal gutters, and vertical gutters.
  - <span class="badge bg-danger">Breaking</span> Renamed `.no-gutters` to `.g-0` to match new gutter utilities.

- Columns no longer have `position: relative` applied, so you may have to add `.position-relative` to some elements to restore that behavior.

- <span class="badge bg-danger">Breaking</span> Dropped several `.order-*` classes that often went unused. We now only provide `.order-1` to `.order-5` out of the box.

- <span class="badge bg-danger">Breaking</span> Dropped the `.media` component as it can be easily replicated with utilities. [See #28265](https://github.com/twbs/bootstrap/pull/28265) and the [flex utilities page for an example]({{< docsref "/utilities/flex#media-object" >}}).

- <span class="badge bg-danger">Breaking</span> `boosted-grid.css` now only applies `box-sizing: border-box` to the column instead of resetting the global box-sizing. This way, our grid styles can be used in more places without interference.

- `$enable-grid-classes` no longer disables the generation of container classes anymore. [See #29146.](https://github.com/twbs/bootstrap/pull/29146)

- Updated the `make-col` mixin to default to equal columns without a specified size.

## Content, Reboot, etc

- <span class="badge bg-danger">Breaking</span> Orange Helvetica CSS file names changed from `orangeHelvetica.*.css` to `orange-helvetica.*.css`.

- **[RFS]({{< docsref "/getting-started/rfs" >}}) is now enabled by default.** Headings using the `font-size()` mixin will automatically adjust their `font-size` to scale with the viewport. _This feature was previously opt-in with v4._

- <span class="badge bg-danger">Breaking</span> Overhauled our display typography to replace our `$display-*` variables and with a `$display-font-sizes` Sass map. Also removed the individual `$display-*-weight` variables for a single `$display-font-weight` and adjusted `font-size`s.

- Added two new `.display-*` heading sizes, `.display-5` and `.display-6`.

- **Links are underlined by default** (not just on hover), unless they're part of specific components.

- **Redesigned tables** to refresh their styles and rebuild them with CSS variables for more control over styling.

- <span class="badge bg-danger">Breaking</span> Nested tables do not inherit styles anymore.

- <span class="badge bg-danger">Breaking</span> `.thead-light` and `.thead-dark` are dropped in favor of the `.table-*` variant classes which can be used for all table elements (`thead`, `tbody`, `tfoot`, `tr`, `th` and `td`).

- <span class="badge bg-danger">Breaking</span> The `table-row-variant()` mixin is renamed to `table-variant()` and accepts only 2 parameters: `$color` (color name) and `$value` (color code). The border color and accent colors are automatically calculated based on the table factor variables.

- Split table cell padding variables into `-y` and `-x`.

- <span class="badge bg-danger">Breaking</span> Dropped `.pre-scrollable` class. [See #29135](https://github.com/twbs/bootstrap/pull/29135)

- <span class="badge bg-danger">Breaking</span> `.text-*` utilities do not add hover and focus states to links anymore. `.link-*` helper classes can be used instead. [See #29267](https://github.com/twbs/bootstrap/pull/29267)

- <span class="badge bg-danger">Breaking</span> Dropped `.text-justify` class. [See #29793](https://github.com/twbs/bootstrap/pull/29793)

- <span class="badge bg-danger">Breaking</span> ~~`<hr>` elements now use `height` instead of `border` to better support the `size` attribute. This also enables use of padding utilities to create thicker dividers (e.g., `<hr class="py-1">`).~~

- Reset default horizontal `padding-left` on `<ul>` and `<ol>` elements from browser default `40px` to `2rem`.

- Added `$enable-smooth-scroll`, which applies `scroll-behavior: smooth` globally—except for users asking for reduced motion through `prefers-reduced-motion` media query. [See #31877](https://github.com/twbs/bootstrap/pull/31877)

## RTL

- Horizontal direction specific variables, utilities, and mixins have all been renamed to use logical properties like those found in flexbox layouts—e.g., `start` and `end` in lieu of `left` and `right`.

## Forms

<!-- Boosted mod: no floating labels -->

- <span class="badge bg-danger">Breaking</span> **Consolidated native and custom form elements.** Checkboxes, radios, selects, and other inputs that had native and custom classes in v4 have been consolidated. Now nearly all our form elements are entirely custom, most without the need for custom HTML.
  - `.custom-control.custom-checkbox` is now `.form-check`.
  - `.custom-control.custom-custom-radio` is now `.form-check`.
  - `.custom-control.custom-switch` is now `.form-check.form-switch`.
  - `.custom-select` is now `.form-select`.
  - `.custom-file` and `.form-file` have been replaced by custom styles on top of `.form-control`.
  - `.custom-range` is now `.form-range`.
  - Dropped native `.form-control-file` and `.form-control-range`.

- <span class="badge bg-danger">Breaking</span> Dropped `.input-group-append` and `.input-group-prepend`. You can now just add buttons and `.input-group-text` as direct children of the input groups.

- The longstanding [Missing border radius on input group with validation feedback bug](https://github.com/twbs/bootstrap/issues/25110) is finally fixed by adding an additional `.has-validation` class to input groups with validation.

- <span class="badge bg-danger">Breaking</span> **Dropped form-specific layout classes for our grid system.** Use our grid and utilities instead of `.form-group`, `.form-row`, or `.form-inline`.

- <span class="badge bg-danger">Breaking</span> Form labels now require `.form-label`.

- <span class="badge bg-danger">Breaking</span> `.form-text` no longer sets `display`, allowing you to create inline or block help text as you wish just by changing the HTML element.

- Form controls no longer used fixed `height` when possible, instead deferring to `min-height` to improve customization and compatibility with other components.

- Validation icons are no longer applied to `<select>`s with `multiple`.

- Rearranged source Sass files under `scss/forms/`, including input group styles.

<hr class="my-5">

## Components

- Unified `padding` values for alerts, breadcrumbs, cards, dropdowns, list groups, modals, popovers, and tooltips to be based on our `$spacer` variable. [See #30564](https://github.com/twbs/bootstrap/pull/30564).

### Accordion

- Added [new accordion component]({{< docsref "/components/accordion" >}}).

### Alerts

- Alerts now have [examples with icons]({{< docsref "/components/alerts#icons" >}}).

- Removed custom styles for `<hr>`s in each alert since they already use `currentColor`.

### Badges

- <span class="badge bg-danger">Breaking</span> Dropped all `.badge-*` color classes for background utilities (e.g., use `.bg-primary` instead of `.badge-primary`).

- <span class="badge bg-danger">Breaking</span> Dropped `.badge-pill`—use the `.rounded-pill` utility instead.

- <span class="badge bg-danger">Breaking</span> Removed hover and focus styles for `<a>` and `<button>` elements.

- Increased default padding for badges from `.25em`/`.5em` to `.35em`/`.65em`.

### Breadcrumbs

- Simplified the default appearance of breadcrumbs by removing `padding`, `background-color`, and `border-radius`.

- Added new CSS custom property `--bs-breadcrumb-divider` for easy customization without needing to recompile CSS.

### Buttons

- <span class="badge bg-danger">Breaking</span> **[Toggle buttons](/docs/{{< param docs_version >}}/forms/checks-radios/#toggle-buttons), with checkboxes or radios, no longer require JavaScript and have new markup.** We no longer require a wrapping element, add `.btn-check` to the `<input>`, and pair it with any `.btn` classes on the `<label>`. [See #30650](https://github.com/twbs/bootstrap/pull/30650). _The docs for this has moved from our Buttons page to the new Forms section._

- <span class="badge bg-danger">Breaking</span> **Dropped `.btn-block` for utilities.** Instead of using `.btn-block` on the `.btn`, wrap your buttons with `.d-grid` and a `.gap-*` utility to space them as needed. Switch to responsive classes for even more control over them. [Read the docs for some examples.](/docs/{{< param docs_version >}}/components/buttons/#block-buttons)

- Updated our `button-variant()` and `button-outline-variant()` mixins to support additional parameters.

- Updated buttons to ensure increased contrast on hover and active states.

- Disabled buttons now have `pointer-events: none;`.

### Card

- <span class="badge bg-danger">Breaking</span> Dropped `.card-deck` in favor of our grid. Wrap your cards in column classes and add a parent `.row-cols-*` container to recreate card decks (but with more control over responsive alignment).

- [#31035](https://github.com/twbs/bootstrap/pull/31035): Added new `null` variables for `font-size`, `font-weight`, `color`, and `:hover` `color` to the `.nav-link` class.

- <span class="badge bg-danger">Breaking</span> Replaced the `.card` based accordion with a [new Accordion component]({{< docsref "/components/accordion" >}}).

### Carousel

- Added new [`.carousel-dark` variant]({{< docsref "/components/carousel#dark-variant" >}}) for dark text, controls, and indicators (great for lighter backgrounds).

- Replaced chevron icons for carousel controls with new SVGs from [Solaris]({{< docsref "/extend/icons" >}}).

### Close button

- <span class="badge bg-danger">Breaking</span> Renamed `.close` to `.btn-close` for a less generic name.

- Close buttons now use a `background-image` (embedded SVG) instead of a `&times;` in the HTML, allowing for easier customization without the need to touch your markup.

- Added new `.btn-close-white` variant that uses `filter: invert(1)` to enable higher contrast dismiss icons against darker backgrounds.

### Collapse

- Removed scroll anchoring for accordions.

### Dropdowns

- Added new `.dropdown-menu-dark` variant and associated variables for on-demand dark dropdowns.

- Added new variable for `$dropdown-padding-x`.

- Darkened the dropdown divider for improved contrast.

- <span class="badge bg-danger">Breaking</span> All the events for the dropdown are now triggered on the dropdown toggle button and then bubbled up to the parent element.

- Dropdown menus now have a `data-bs-popper="static"` attribute set when the positioning of the dropdown is static, or dropdown is in the navbar. This is added by our JavaScript and helps us use custom position styles without interfering with Popper's positioning.

- <span class="badge bg-danger">Breaking</span> Dropped `flip` option for dropdown plugin in favor of native Popper configuration. You can now disable the flipping behavior by passing an empty array for [`fallbackPlacements`](https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements) option in [flip](https://popper.js.org/docs/v2/modifiers/flip/) modifier.

- Dropdown menus can now be clickable with a new `autoClose` option to handle the [auto close behavior]({{< docsref "/components/dropdowns#auto-close-behavior" >}}). You can use this option to accept the click inside or outside the dropdown menu to make it interactive.

- Dropdowns now support `.dropdown-item`s wrapped in `<li>`s.

### Footer

- <span class="badge bg-danger">Breaking</span> Footers' HTML structure changed a lot as it works now with sub-components. They don't require `.o-footer-*` classes anymore, they need [`.footer-*` classes]({{< docsref "/components/footer" >}}).

### Jumbotron

- <span class="badge bg-danger">Breaking</span> Dropped the jumbotron component as it can be replicated with utilities.

### List group

- Added new [`.list-group-numbered` modifier]({{< docsref "/components/list-group#numbered" >}}) to list groups.

### Navs and tabs

- Added new `null` variables for `font-size`, `font-weight`, `color`, and `:hover` `color` to the `.nav-link` class.

### Navbars

- <span class="badge bg-danger">Breaking</span> Navbars now require a container within (to drastically simplify spacing requirements and CSS required).
- <span class="badge bg-danger">Breaking</span> The `.active` class can no longer be applied to `.nav-item`s, it must be applied directly on `.nav-link`s.

### Offcanvas

- Added the new [offcanvas component]({{< docsref "/components/offcanvas" >}}).

### Orange navbar

- <span class="badge bg-danger">Breaking</span> Supra bars now require a `.bg-dark` class.

- Removed the `.global` class for the instantiation of global headers. You just need to declare your navbar with default `.navbar-*` classes.

- Changed the handling of the minimizing on scroll behavior. Initialize it on your `<header>` element by adding the `.sticky-top` class.

- Classes to handle titles in the bars have been added: use `.title` for a title on a single line, or `.two-lined` for, as its name suggests, a title on two lines.

### Pagination

- Pagination links now have customizable `margin-left` that are dynamically rounded on all corners when separated from one another.

- Added `transition`s to pagination links.

### Popovers

- <span class="badge bg-danger">Breaking</span> Renamed `.arrow` to `.popover-arrow` in our default popover template.

- Renamed `whiteList` option to `allowList`.

### Spinners

- Spinners now honor `prefers-reduced-motion: reduce` by slowing down animations. [See #31882](https://github.com/twbs/bootstrap/pull/31882).

- Improved spinner vertical alignment.

### Toasts

- Toasts can now be [positioned]({{< docsref "/components/toasts#placement" >}}) in a `.toast-container` with the help of [positioning utilities]({{< docsref "/utilities/position" >}}).

- Changed default toast duration to 5 seconds.

- Removed `overflow: hidden` from toasts and replaced with proper `border-radius`s with `calc()` functions.

### Tooltips

- <span class="badge bg-danger">Breaking</span> Renamed `.arrow` to `.tooltip-arrow` in our default tooltip template.

- <span class="badge bg-danger">Breaking</span> The default value for the `fallbackPlacements` is changed to `['top', 'right', 'bottom', 'left']` for better placement of popper elements.

- <span class="badge bg-danger">Breaking</span> Renamed `whiteList` option to `allowList`.

## Utilities

- <span class="badge bg-danger">Breaking</span> Renamed several utilities to use logical property names instead of directional names with the addition of RTL support:
  - Renamed `.left-*` and `.right-*` to `.start-*` and `.end-*`.
  - Renamed `.float-left` and `.float-right` to `.float-start` and `.float-end`.
  - Renamed `.border-left` and `.border-right` to `.border-start` and `.border-end`.
  - Renamed `.rounded-left` and `.rounded-right` to `.rounded-start` and `.rounded-end`.
  - Renamed `.ml-*` and `.mr-*` to `.ms-*` and `.me-*`.
  - Renamed `.pl-*` and `.pr-*` to `.ps-*` and `.pe-*`.
  - Renamed `.text-left` and `.text-right` to `.text-start` and `.text-end`.

- <span class="badge bg-danger">Breaking</span> Disabled negative margins by default.

- Added new `.bg-body` class for quickly setting the `<body>`'s background to additional elements.

- Added new [position utilities]({{< docsref "/utilities/position#arrange-elements" >}}) for `top`, `right`, `bottom`, and `left`. Values include `0`, `50%`, and `100%` for each property.

- Added new `.translate-middle-x` & `.translate-middle-y` utilities to horizontally or vertically center absolute/fixed positioned elements.

- Added new [`border-width` utilities]({{< docsref "/utilities/borders#border-width" >}}).

- <span class="badge bg-danger">Breaking</span> Renamed `.text-monospace` to `.font-monospace`.

- <span class="badge bg-danger">Breaking</span> Removed `.text-hide` as it's an antiquated method for hiding text that shouldn't be used anymore.

- Added `.fs-*` utilities for `font-size` utilities (with RFS enabled). These use the same scale as HTML's default headings (1-6, large to small), and can be modified via Sass map.

- <span class="badge bg-danger">Breaking</span> Renamed `.font-weight-*` utilities as `.fw-*` for brevity and consistency.

- <span class="badge bg-danger">Breaking</span> Renamed `.font-style-*` utilities as `.fst-*` for brevity and consistency.

- Added `.d-grid` to display utilities and new `gap` utilities (`.gap`) for CSS Grid and flexbox layouts.

- <span class="badge bg-danger">Breaking</span> Removed `.rounded-sm` and `rounded-lg`, and introduced a new scale of classes, `.rounded-0` to `.rounded-3`. [See #31687](https://github.com/twbs/bootstrap/pull/31687).

- Added new `line-height` utilities: `.lh-1`, `.lh-sm`, `.lh-base` and `.lh-lg`. See [here]({{< docsref "/utilities/text#line-height" >}}).

- Moved the `.d-none` utility in our CSS to give it more weight over other display utilities.

- Extended the `.visually-hidden-focusable` helper to also work on containers, using `:focus-within`.

## Helpers

- <span class="badge bg-danger">Breaking</span> **Responsive embed helpers have been renamed to [ratio helpers]({{< docsref "/helpers/ratio" >}})** with new class names and improved behaviors, as well as a helpful CSS variable.
  - Classes have been renamed to change `by` to `x` in the aspect ratio. For example, `.ratio-16by9` is now `.ratio-16x9`.
  - We've dropped the `.embed-responsive-item` and element group selector in favor of a simpler `.ratio > *` selector. No more class is needed, and the ratio helper now works with any HTML element.
  - The `$embed-responsive-aspect-ratios` Sass map has been renamed to `$aspect-ratios` and its values have been simplified to include the class name and the percentage as the `key: value` pair.
  - CSS variables are now generated and included for each value in the Sass map. Modify the `--bs-aspect-ratio` variable on the `.ratio` to create any [custom aspect ratio]({{< docsref "/helpers/ratio#custom-ratios" >}}).

- <span class="badge bg-danger">Breaking</span> **"Screen reader" classes are now ["visually hidden" classes]({{< docsref "/helpers/visually-hidden" >}}).**
  - Changed the Sass file from `scss/helpers/_screenreaders.scss` to `scss/helpers/_visually-hidden.scss`
  - Renamed `.sr-only` and `.sr-only-focusable` to `.visually-hidden` and `.visually-hidden-focusable`
  - Renamed `sr-only()` and `sr-only-focusable()` mixins to `visually-hidden()` and `visually-hidden-focusable()`.

- `boosted-utilities.css` now also includes our helpers. Helpers don't need to be imported in custom builds anymore.

## JavaScript

- **Dropped jQuery dependency** and rewrote plugins to be in regular JavaScript.

- <span class="badge bg-danger">Breaking</span> Data attributes for all JavaScript plugins are now namespaced to help distinguish Boosted functionality from third parties and your own code. For example, we use `data-bs-toggle` instead of `data-toggle`.

- **All plugins can now accept a CSS selector as the first argument.** You can either pass a DOM element or any valid CSS selector to create a new instance of the plugin:

  ```js
  const modal = new boosted.Modal('#myModal')
  const dropdown = new boosted.Dropdown('[data-bs-toggle="dropdown"]')
  ```

- `popperConfig` can be passed as a function that accepts the Boosted's default Popper config as an argument, so that you can merge this default configuration in your way. **Applies to dropdowns, popovers, and tooltips.**


- The default value for the `fallbackPlacements` is changed to `['top', 'right', 'bottom', 'left']` for better placement of Popper elements. **Applies to dropdowns, popovers, and tooltips.**

- Removed underscore from public static methods like `_getInstance()` → `getInstance()`.
