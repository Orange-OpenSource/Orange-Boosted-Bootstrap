---
layout: docs
title: Contents
description: Discover what's included in Boosted, including our precompiled and source code flavors. Remember, Boosted's JavaScript plugins require jQuery.
group: getting-started
toc: true
---

## Precompiled Boosted

Once downloaded, unzip the compressed folder and you'll see something like this:

<!-- NOTE: This info is intentionally duplicated in the README. Copy any changes made here over to the README too, but be sure to keep in mind to add the `dist` folder. -->

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
    ├── boosted.bundle.js.map
    ├── boosted.bundle.min.js
    ├── boosted.bundle.min.js.map
    ├── boosted.js
    ├── boosted.js.map
    ├── boosted.min.js
    └── boosted.min.js.map
{% endhighlight %}

This is the most basic form of Boosted: precompiled files for quick drop-in usage in nearly any web project. We provide compiled CSS and JS (`boosted.*`), as well as compiled and minified CSS and JS (`boosted.min.*`). [source maps](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps) (`boosted.*.map`) are available for use with certain browsers' developer tools. Bundled JS files (`boosted.bundle.js` and minified `boosted.bundle.min.js`) include [Popper](https://popper.js.org/), but not [jQuery](https://jquery.com/).

## CSS files

Boosted includes a handful of options for including some or all of our compiled CSS.

<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">CSS files</th>
      <th scope="col">Layout</th>
      <th scope="col">Content</th>
      <th scope="col">Components</th>
      <th scope="col">Utilities</th>
      <th scope="col">Right to left support</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <div><code class="font-weight-normal text-nowrap">boosted.css</code></div>
        <div><code class="font-weight-normal text-nowrap">boosted.min.css</code></div>
      </th>
      <td class="bg-success font-weight-bold">Included</td>
      <td class="bg-success font-weight-bold">Included</td>
      <td class="bg-success font-weight-bold">Included</td>
      <td class="bg-success font-weight-bold">Included</td>
      <td class="bg-light">Not included</td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="font-weight-normal text-nowrap">boosted-grid.css</code></div>
        <div><code class="font-weight-normal text-nowrap">boosted-grid.min.css</code></div>
      </th>
      <td><a class="text-primary font-weight-bold" href="{{ site.baseurl }}/docs/{{ site.docs_version }}/layout/grid/">Only grid system</a></td>
      <td class="bg-light">Not included</td>
      <td class="bg-light">Not included</td>
      <td><a class="text-primary font-weight-bold" href="{{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/flex/">Only flex utilities</a></td>
      <td class="bg-light">Not included</td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="font-weight-normal text-nowrap">boosted-reboot.css</code></div>
        <div><code class="font-weight-normal text-nowrap">boosted-reboot.min.css</code></div>
      </th>
      <td class="bg-light">Not included</td>
      <td><a class="text-primary font-weight-bold" href="{{ site.baseurl }}/docs/{{ site.docs_version }}/content/reboot/">Only Reboot</a></td>
      <td class="bg-light">Not included</td>
      <td class="bg-light">Not included</td>
      <td class="bg-light">Not included</td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="font-weight-normal text-nowrap">boosted-rtl.css</code></div>
        <div><code class="font-weight-normal text-nowrap">boosted-rtl.min.css</code></div>
      </th>
      <td class="bg-success font-weight-bold">Included</td>
      <td class="bg-success font-weight-bold">Included</td>
      <td class="bg-success font-weight-bold">Included</td>
      <td class="bg-success font-weight-bold">Included</td>
      <td class="bg-success font-weight-bold">Included</td>
    </tr>
  </tbody>
</table>

## JS files

Similarly, we have options for including some or all of our compiled JavaScript.

<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">JS files</th>
      <th scope="col">Focus-visible</th>
      <th scope="col">Popper</th>
      <th scope="col">jQuery</th>
      <th scope="col">tableSorter</th>
      <th scope="col">Swiper</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <div><code class="font-weight-normal text-nowrap">boosted.bundle.js</code></div>
        <div><code class="font-weight-normal text-nowrap">boosted.bundle.min.js</code></div>
      </th>
      <td class="bg-success font-weight-bold">Included</td>
      <td class="bg-success font-weight-bold">Included</td>
      <td class="bg-light">Not included</td>
      <td class="bg-light">Not included</td>
      <td class="bg-light">Not included</td>
    </tr>
    <tr>
      <th scope="row">
        <div><code class="font-weight-normal text-nowrap">boosted.js</code></div>
        <div><code class="font-weight-normal text-nowrap">boosted.min.js</code></div>
      </th>
      <td class="bg-success font-weight-bold">Included</td>
      <td class="bg-light">Not included</td>
      <td class="bg-light">Not included</td>
      <td class="bg-light">Not included</td>
      <td class="bg-light">Not included</td>
    </tr>
  </tbody>
</table>

## Boosted source code

The Boosted source code download includes the precompiled CSS and JavaScript assets, along with source Sass, JavaScript, and documentation. More specifically, it includes the following and more:

{% highlight plaintext %}
boosted/
├── dist/
│   ├── css/
│   ├── fonts/
│   ├── img/
│   └── js/
├── site/
│   └──docs/
│      └── 4.5/
│          └── examples/
├── js/
└── scss/
{% endhighlight %}

The `scss/` and `js/` are the source code for our CSS and JavaScript. The `dist/` folder includes everything listed in the precompiled download section above. The `site/docs/` folder includes the source code for our documentation, and `examples/` of Boosted usage. Beyond that, any other included file provides support for packages, license information, and development.
