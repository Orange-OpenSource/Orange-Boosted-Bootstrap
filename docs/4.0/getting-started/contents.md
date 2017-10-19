---
layout: docs
title: Contents
description: Discover what's included in Boosted, including our precompiled and source code flavors. Remember, Boosted's JavaScript plugins require jQuery.
group: getting-started
toc: true
---

## Precompiled Boosted

Once downloaded, unzip the compressed folder and you'll see something like this:

<!-- NOTE: This info is intentionally duplicated in the README. Copy any changes made here over to the README too. -->

{% highlight plaintext %}
boosted/
├── css/
│   ├── boosted.css
│   ├── boosted.css.map
│   ├── boosted.min.css
│   ├── boosted.min.css.map
│   ├── boosted-grid.css
│   ├── boosted-grid.css.map
│   ├── boosted-grid.min.css
│   ├── boosted-grid.min.css.map
│   ├── boosted-reboot.css
│   ├── boosted-reboot.css.map
│   ├── boosted-reboot.min.css
│   ├── boosted-reboot.min.css.map
│   ├── boosted-rtl.css
│   ├── boosted-rtl.min.css
│   ├── boosted-rtl.min.css.map
│   ├── orangeHelvetica.css
│   ├── orangeHelvetica.css.map
│   ├── orangeHelvetica.min.css
│   ├── orangeHelvetica.min.css.map
│   ├── orangeIcons.css
│   ├── orangeIcons.css.map
│   ├── orangeIcons.min.css
│   └── orangeIcons.min.css.map
└── js/
    ├── boosted.bundle.js
    ├── boosted.bundle.min.js
    ├── boosted.js
    └── boosted.min.js
{% endhighlight %}

This is the most basic form of Boosted: precompiled files for quick drop-in usage in nearly any web project. We provide compiled CSS and JS (`boosted.*`), as well as compiled and minified CSS and JS (`boosted.min.*`). CSS [source maps](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps) (`boosted.*.map`) are available for use with certain browsers' developer tools.

### Comparison of CSS files

<table class="table table-bordered table-responsive">
  <thead>
    <tr>
      <th scope="col">CSS files</th>
      <th scope="col" class="text-center">Layout</th>
      <th scope="col" class="text-center">Content</th>
      <th scope="col" class="text-center">Components</th>
      <th scope="col" class="text-center">Utilities</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <div><code class="text-nowrap">boosted.css</code></div>
        <div><code class="text-nowrap">boosted.min.css</code></div>
      </th>
      <td class="table-success text-center align-middle">All</td>
      <td class="table-success text-center align-middle">All</td>
      <td class="table-success text-center align-middle">All</td>
      <td class="table-success text-center align-middle">All</td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="text-nowrap">boosted-grid.css</code></div>
        <div><code class="text-nowrap">boosted-grid.min.css</code></div>
      </th>
      <td class="table-warning text-center align-middle">Only <a href="{{ site.baseurl }}/docs/{{ site.docs_version }}/layout/grid/">grid</a> system</td>
      <td class="table-danger text-center align-middle">No</td>
      <td class="table-danger text-center align-middle">No</td>
      <td class="table-warning text-center align-middle">Only <a href="{{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/flex/">flex</a> utilities</td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="text-nowrap">boosted-reboot.css</code></div>
        <div><code class="text-nowrap">boosted-reboot.min.css</code></div>
      </th>
      <td class="table-danger text-center align-middle">No</td>
      <td class="table-warning text-center align-middle">Only <a href="{{ site.baseurl }}/docs/{{ site.docs_version }}/content/reboot/">Reboot</a></td>
      <td class="table-danger text-center align-middle">No</td>
      <td class="table-danger text-center align-middle">No</td>
    </tr>
  </tbody>
</table>

## Boosted source code

The Boosted source code download includes the precompiled CSS and JavaScript assets, along with source Sass, JavaScript, and documentation. More specifically, it includes the following and more:

{% highlight plaintext %}
boosted/
├── dist/
│   ├── css/
│   └── js/
├── docs/
│   └── examples/
├── js/
└── scss/
{% endhighlight %}

The `scss/` and `js/` are the source code for our CSS and JavaScript. The `dist/` folder includes everything listed in the precompiled download section above. The `docs/` folder includes the source code for our documentation, and `examples/` of Boosted usage. Beyond that, any other included file provides support for packages, license information, and development.
