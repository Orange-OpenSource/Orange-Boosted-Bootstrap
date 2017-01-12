---
layout: docs
title: Contents
description: Learn about what's included in Boosted's precompiled and source code directories.
group: getting-started
---

Boosted can come in one of two forms, as precompiled or source code. Learn more about each flavor's contents and structure below. Remember, no matter the implementation flavor, **Boosted's JavaScript plugins require jQuery**.

## Precompiled Boosted

Once downloaded, unzip the compressed folder and you'll see something like this:

<!-- NOTE: This info is intentionally duplicated in the README. Copy any changes made here over to the README too. -->

{% highlight plaintext %}
boosted/
├── css/
│   ├── boosted.css
│   ├── boosted.css.map
│   ├── boosted.min.css
│   └── boosted.min.css.map
└── js/
    ├── boosted.js
    └── boosted.min.js
{% endhighlight %}

This is the most basic form of Boosted: precompiled files for quick drop-in usage in nearly any web project. We provide compiled CSS and JS (`boosted.*`), as well as compiled and minified CSS and JS (`boosted.min.*`). CSS [source maps](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps) (`boosted.*.map`) are available for use with certain browsers' developer tools.

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
