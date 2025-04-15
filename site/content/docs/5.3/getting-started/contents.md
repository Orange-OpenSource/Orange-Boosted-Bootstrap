---
layout: docs
title: Contents
description: Discover what's included in Boosted, including our compiled and source code flavors.
group: getting-started
aliases:
  - "/docs/getting-started/contents/"
toc: true
---

## Compiled Boosted

Once downloaded, unzip the compressed folder and you'll see something like this:

<!-- NOTE: This info is intentionally duplicated in the README. Copy any changes made here over to the README too, but be sure to keep in mind to add the `dist` folder. -->

```text
boosted/
├── css/
│   ├── boosted-grid.css
│   ├── boosted-grid.css.map
│   ├── boosted-grid.min.css
│   ├── boosted-grid.min.css.map
│   ├── boosted-grid.rtl.css
│   ├── boosted-grid.rtl.css.map
│   ├── boosted-grid.rtl.min.css
│   ├── boosted-grid.rtl.min.css.map
│   ├── boosted-reboot.css
│   ├── boosted-reboot.css.map
│   ├── boosted-reboot.min.css
│   ├── boosted-reboot.min.css.map
│   ├── boosted-reboot.rtl.css
│   ├── boosted-reboot.rtl.css.map
│   ├── boosted-reboot.rtl.min.css
│   ├── boosted-reboot.rtl.min.css.map
│   ├── boosted-utilities.css
│   ├── boosted-utilities.css.map
│   ├── boosted-utilities.min.css
│   ├── boosted-utilities.min.css.map
│   ├── boosted-utilities.rtl.css
│   ├── boosted-utilities.rtl.css.map
│   ├── boosted-utilities.rtl.min.css
│   ├── boosted-utilities.rtl.min.css.map
│   ├── boosted.css
│   ├── boosted.css.map
│   ├── boosted.min.css
│   ├── boosted.min.css.map
│   ├── boosted.rtl.css
│   ├── boosted.rtl.css.map
│   ├── boosted.rtl.min.css
│   └── boosted.rtl.min.css.map
└── js/
    ├── boosted.bundle.js
    ├── boosted.bundle.js.map
    ├── boosted.bundle.min.js
    ├── boosted.bundle.min.js.map
    ├── boosted.esm.js
    ├── boosted.esm.js.map
    ├── boosted.esm.min.js
    ├── boosted.esm.min.js.map
    ├── boosted.js
    ├── boosted.js.map
    ├── boosted.min.js
    └── boosted.min.js.map
```

This is the most basic form of Boosted: compiled files for quick drop-in usage in nearly any web project. We provide compiled CSS and JS (`boosted.*`), as well as compiled and minified CSS and JS (`boosted.min.*`). [Source maps](https://web.dev/articles/source-maps) (`boosted.*.map`) are available for use with certain browsers' developer tools. Bundled JS files (`boosted.bundle.js` and minified `boosted.bundle.min.js`) include [Popper](https://popper.js.org/docs/v2/).

### CSS files

Boosted includes a handful of options for including some or all of our compiled CSS.

{{< bs-table "table" >}}
| CSS files | Layout | Content | Components | Utilities |
| --- | --- | --- | --- | --- |
| `boosted.css`<br> `boosted.min.css`<br> `boosted.rtl.css`<br> `boosted.rtl.min.css` | Included | Included | Included | Included |
| `boosted-grid.css`<br> `boosted-grid.rtl.css`<br> `boosted-grid.min.css`<br> `boosted-grid.rtl.min.css` | [Only grid system]({{< docsref "/layout/grid" >}}) | — | — | [Only flex utilities]({{< docsref "/utilities/flex" >}}) |
| `boosted-utilities.css`<br> `boosted-utilities.rtl.css`<br> `boosted-utilities.min.css`<br> `boosted-utilities.rtl.min.css` | — | — | — | Included |
| `boosted-reboot.css`<br> `boosted-reboot.rtl.css`<br> `boosted-reboot.min.css`<br> `boosted-reboot.rtl.min.css` | — | [Only Reboot]({{< docsref "/content/reboot" >}}) | — | — |
{{< /bs-table >}}

### JS files

Similarly, we have options for including some or all of our compiled JavaScript.

{{< bs-table "table" >}}
| JS Files | `:focus-visible` Polyfill | Popper |
| --- | --- | --- |
| `boosted.bundle.js`<br> `boosted.bundle.min.js`<br> | Included | Included |
| `boosted.js`<br> `boosted.min.js`<br> | Included | – |
{{< /bs-table >}}

## Boosted source code

The Boosted source code download includes the compiled CSS and JavaScript assets, along with source Sass, JavaScript, and documentation. More specifically, it includes the following and more:

```text
boosted/
├── dist/
│   ├── css/
│   ├── fonts/
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

The `scss/` and `js/` are the source code for our CSS and JavaScript. The `dist/` folder includes everything listed in the compiled download section above. The `site/content/docs/` folder includes the source code for our hosted documentation, including our live examples of Boosted usage.

Beyond that, any other included file provides support for packages, license information, and development.
