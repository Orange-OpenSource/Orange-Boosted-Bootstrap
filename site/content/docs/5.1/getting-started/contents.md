---
layout: docs
title: Contents
description: Discover what's included in Boosted, including our precompiled and source code flavors.
group: getting-started
toc: true
---

## Precompiled Boosted

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

This is the most basic form of Boosted: precompiled files for quick drop-in usage in nearly any web project. We provide compiled CSS and JS (`boosted.*`), as well as compiled and minified CSS and JS (`boosted.min.*`). [Source maps](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps) (`boosted.*.map`) are available for use with certain browsers' developer tools. Bundled JS files (`boosted.bundle.js` and minified `boosted.bundle.min.js`) include [Popper](https://popper.js.org/).

## CSS files

Boosted includes a handful of options for including some or all of our compiled CSS.

<table class="table">
  <thead>
    <tr>
      <th scope="col">CSS files</th>
      <th scope="col">Layout</th>
      <th scope="col">Content</th>
      <th scope="col">Components</th>
      <th scope="col">Utilities</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <div><code class="fw-normal text-nowrap">boosted.css</code></div>
        <div><code class="fw-normal text-nowrap">boosted.rtl.css</code></div>
        <div><code class="fw-normal text-nowrap">boosted.min.css</code></div>
        <div><code class="fw-normal text-nowrap">boosted.rtl.min.css</code></div>
      </th>
      <td>Included</td>
      <td>Included</td>
      <td>Included</td>
      <td>Included</td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="fw-normal text-nowrap">boosted-grid.css</code></div>
        <div><code class="fw-normal text-nowrap">boosted-grid.rtl.css</code></div>
        <div><code class="fw-normal text-nowrap">boosted-grid.min.css</code></div>
        <div><code class="fw-normal text-nowrap">boosted-grid.rtl.min.css</code></div>
      </th>
      <td><a class="link-secondary" href="{{< docsref "/layout/grid" >}}">Only grid system</a></td>
      <td class="text-muted">&mdash;</td>
      <td class="text-muted">&mdash;</td>
      <td><a class="link-secondary" href="{{< docsref "/utilities/flex" >}}">Only flex utilities</a></td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="fw-normal text-nowrap">boosted-utilities.css</code></div>
        <div><code class="fw-normal text-nowrap">boosted-utilities.rtl.css</code></div>
        <div><code class="fw-normal text-nowrap">boosted-utilities.min.css</code></div>
        <div><code class="fw-normal text-nowrap">boosted-utilities.rtl.min.css</code></div>
      </th>
      <td class="text-muted">&mdash;</td>
      <td class="text-muted">&mdash;</td>
      <td class="text-muted">&mdash;</td>
      <td>Included</td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="fw-normal text-nowrap">boosted-reboot.css</code></div>
        <div><code class="fw-normal text-nowrap">boosted-reboot.rtl.css</code></div>
        <div><code class="fw-normal text-nowrap">boosted-reboot.min.css</code></div>
        <div><code class="fw-normal text-nowrap">boosted-reboot.rtl.min.css</code></div>
      </th>
      <td class="text-muted">&mdash;</td>
      <td><a class="link-secondary" href="{{< docsref "/content/reboot" >}}">Only Reboot</a></td>
      <td class="text-muted">&mdash;</td>
      <td class="text-muted">&mdash;</td>
    </tr>
  </tbody>
</table>

## JS files

Similarly, we have options for including some or all of our compiled JavaScript.

<table class="table">
  <thead>
    <tr>
      <th scope="col">JS files</th>
      <th scope="col">`:focus-visible` polyfill</th>
      <th scope="col">Popper</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <div><code class="fw-normal text-nowrap">boosted.bundle.js</code></div>
        <div><code class="fw-normal text-nowrap">boosted.bundle.min.js</code></div>
      </th>
      <td>Included</td>
      <td>Included</td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="fw-normal text-nowrap">boosted.js</code></div>
        <div><code class="fw-normal text-nowrap">boosted.min.js</code></div>
      </th>
      <td>Included</td>
      <td class="text-muted">&mdash;</td>
    </tr>
  </tbody>
</table>

## Boosted source code

The Boosted source code download includes the precompiled CSS and JavaScript assets, along with source Sass, JavaScript, and documentation. More specifically, it includes the following and more:

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

The `scss/` and `js/` are the source code for our CSS and JavaScript. The `dist/` folder includes everything listed in the precompiled download section above. The `site/docs/` folder includes the source code for our documentation, and `examples/` of Boosted usage. Beyond that, any other included file provides support for packages, license information, and development.
