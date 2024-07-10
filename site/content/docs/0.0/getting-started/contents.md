---
layout: docs
title: Contents
description: Discover what's included in OUDS Web, including our compiled and source code flavors.
group: getting-started
aliases:
  - "/docs/getting-started/contents/"
toc: true
---

## Compiled OUDS Web

Once downloaded, unzip the compressed folder and you'll see something like this:

<!-- NOTE: This info is intentionally duplicated in the README. Copy any changes made here over to the README too, but be sure to keep in mind to add the `dist` folder. -->

```text
ouds-web/
├── css/
│   ├── ouds-web-grid.css
│   ├── ouds-web-grid.css.map
│   ├── ouds-web-grid.min.css
│   ├── ouds-web-grid.min.css.map
│   ├── ouds-web-grid.rtl.css
│   ├── ouds-web-grid.rtl.css.map
│   ├── ouds-web-grid.rtl.min.css
│   ├── ouds-web-grid.rtl.min.css.map
│   ├── ouds-web-reboot.css
│   ├── ouds-web-reboot.css.map
│   ├── ouds-web-reboot.min.css
│   ├── ouds-web-reboot.min.css.map
│   ├── ouds-web-reboot.rtl.css
│   ├── ouds-web-reboot.rtl.css.map
│   ├── ouds-web-reboot.rtl.min.css
│   ├── ouds-web-reboot.rtl.min.css.map
│   ├── ouds-web-utilities.css
│   ├── ouds-web-utilities.css.map
│   ├── ouds-web-utilities.min.css
│   ├── ouds-web-utilities.min.css.map
│   ├── ouds-web-utilities.rtl.css
│   ├── ouds-web-utilities.rtl.css.map
│   ├── ouds-web-utilities.rtl.min.css
│   ├── ouds-web-utilities.rtl.min.css.map
│   ├── ouds-web.css
│   ├── ouds-web.css.map
│   ├── ouds-web.min.css
│   ├── ouds-web.min.css.map
│   ├── ouds-web.rtl.css
│   ├── ouds-web.rtl.css.map
│   ├── ouds-web.rtl.min.css
│   └── ouds-web.rtl.min.css.map
└── js/
    ├── ouds-web.bundle.js
    ├── ouds-web.bundle.js.map
    ├── ouds-web.bundle.min.js
    ├── ouds-web.bundle.min.js.map
    ├── ouds-web.esm.js
    ├── ouds-web.esm.js.map
    ├── ouds-web.esm.min.js
    ├── ouds-web.esm.min.js.map
    ├── ouds-web.js
    ├── ouds-web.js.map
    ├── ouds-web.min.js
    └── ouds-web.min.js.map
```

This is the most basic form of OUDS Web: compiled files for quick drop-in usage in nearly any web project. We provide compiled CSS and JS (`ouds-web.*`), as well as compiled and minified CSS and JS (`ouds-web.min.*`). [Source maps](https://web.dev/articles/source-maps) (`ouds-web.*.map`) are available for use with certain browsers' developer tools. Bundled JS files (`ouds-web.bundle.js` and minified `ouds-web.bundle.min.js`) include [Popper](https://popper.js.org/docs/v2/).

### CSS files

OUDS Web includes a handful of options for including some or all of our compiled CSS.

{{< bs-table "table" >}}
| CSS files | Layout | Content | Components | Utilities |
| --- | --- | --- | --- | --- |
| `ouds-web.css`<br> `ouds-web.min.css`<br> `ouds-web.rtl.css`<br> `ouds-web.rtl.min.css` | Included | Included | Included | Included |
| `ouds-web-grid.css`<br> `ouds-web-grid.rtl.css`<br> `ouds-web-grid.min.css`<br> `ouds-web-grid.rtl.min.css` | [Only grid system]({{< docsref "/layout/grid" >}}) | — | — | [Only flex utilities]({{< docsref "/utilities/flex" >}}) |
| `ouds-web-utilities.css`<br> `ouds-web-utilities.rtl.css`<br> `ouds-web-utilities.min.css`<br> `ouds-web-utilities.rtl.min.css` | — | — | — | Included |
| `ouds-web-reboot.css`<br> `ouds-web-reboot.rtl.css`<br> `ouds-web-reboot.min.css`<br> `ouds-web-reboot.rtl.min.css` | — | [Only Reboot]({{< docsref "/content/reboot" >}}) | — | — |
{{< /bs-table >}}

### JS files

Similarly, we have options for including some or all of our compiled JavaScript.

{{< bs-table "table" >}}
| JS Files | `:focus-visible` Polyfill | Popper |
| --- | --- | --- |
| `ouds-web.bundle.js`<br> `ouds-web.bundle.min.js`<br> | Included | Included |
| `ouds-web.js`<br> `ouds-web.min.js`<br> | Included | – |
{{< /bs-table >}}

## OUDS Web source code

The OUDS Web source code download includes the compiled CSS and JavaScript assets, along with source Sass, JavaScript, and documentation. More specifically, it includes the following and more:

```text
ouds-web/
├── dist/
│   ├── css/
│   ├── img/
│   └── js/
├── site/
│   └──content/
│      └── docs/
│          └── {{< param docs_version >}}/
│              └── examples/
├── js/
└── scss/
```

The `scss/` and `js/` are the source code for our CSS and JavaScript. The `dist/` folder includes everything listed in the compiled download section above. The `site/docs/` folder includes the source code for our documentation, and `examples/` of OUDS Web usage. Beyond that, any other included file provides support for packages, license information, and development.
