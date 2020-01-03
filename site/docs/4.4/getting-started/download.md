---
layout: docs
title: Download
description: Download Boosted to get the compiled CSS and JavaScript, source code, or include it with your favorite package managers like npm, RubyGems, and more.
group: getting-started
toc: true
---

## Compiled CSS and JS

Download ready-to-use compiled code for **Boosted v{{ site.current_version}}** to easily drop into your project, which includes:

- Compiled and minified CSS bundles (see [CSS files comparison]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/contents/#css-files))
- Compiled and minified JavaScript plugins

This doesn't include documentation, source files, or any optional JavaScript dependencies (jQuery and Popper.js).

<a href="{{ site.download.dist }}" class="btn btn-lg btn-secondary"  onclick="dataLayer.push({'event': 'clic', 'site_name':'accessibility-boosted', 'phase':'prod', 'track_category':'download', 'track_name':'getting started', 'track_cible':'download boosted'});">Download Boosted</a>

## Source files

Compile Boosted with your own asset pipeline by downloading our source Sass, JavaScript, and documentation files. This option requires some additional tooling:

- Sass compiler (Libsass or Ruby Sass is supported) for compiling your CSS.
- [Autoprefixer](https://github.com/postcss/autoprefixer) for CSS vendor prefixing

Should you require [build tools]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/build-tools/#tooling-setup), they are included for developing Boosted and its docs, but they're likely unsuitable for your own purposes.

<a href="{{ site.download.source }}" class="btn btn-secondary" onclick="dataLayer.push({'event': 'clic', 'site_name':'accessibility-boosted', 'phase':'prod', 'track_category':'download', 'track_name':'getting started', 'track_cible':'download source'});">Download source</a>

## BoostedCDN

Skip the download with [jsdelivr](https://www.jsdelivr.com/) to deliver cached version of Boosted's compiled CSS and JS to your project.

{% highlight html %}
<link rel="stylesheet" href="{{ site.cdn.css }}" integrity="{{ site.cdn.css_hash }}" crossorigin="anonymous">
<script src="{{ site.cdn.js }}" integrity="{{ site.cdn.js_hash }}" crossorigin="anonymous"></script>
{% endhighlight %}

If you're using our compiled JavaScript, don't forget to include CDN versions of jQuery and Popper.js before it.

{% highlight html %}
<script src="{{ site.cdn.jquery }}" integrity="{{ site.cdn.jquery_hash }}" crossorigin="anonymous"></script>
<script src="{{ site.cdn.popper }}" integrity="{{ site.cdn.popper_hash }}" crossorigin="anonymous"></script>
<script src="{{ site.cdn.tablesorter }}" integrity="{{ site.cdn.tablesorter_hash }}" crossorigin="anonymous"></script>
<script src="{{ site.cdn.js_swiper }}" integrity="{{ site.cdn.js_swiper_hash }}" crossorigin="anonymous"></script>
{% endhighlight %}

## Package managers

Pull in Boosted's **source files** into nearly any project with some of the most popular package managers. No matter the package manager, Boosted will **require a Sass compiler and [Autoprefixer](https://github.com/postcss/autoprefixer)** for a setup that matches our official compiled versions.

### npm

Install Boosted in your Node.js powered apps with [the npm package](https://www.npmjs.com/package/boosted):

{% highlight sh %}
npm install boosted
{% endhighlight %}

`require('boosted')` will load all of Boosted's jQuery plugins onto the jQuery object. The `boosted` module itself does not export anything. You can manually load Boosted's jQuery plugins individually by loading the `/js/*.js` files under the package's top-level directory.

Boosted's `package.json` contains some additional metadata under the following keys:

- `sass` - path to Boosted's main [Sass](https://sass-lang.com/) source file
- `style` - path to Boosted's non-minified CSS that's been precompiled using the default settings (no customization)

### yarn

Install Boosted in your Node.js powered apps with [the yarn package](https://yarnpkg.com/en/package/yarn):

{% highlight sh %}
yarn add boosted
{% endhighlight %}

### Composer

You can also install and manage Boosted's Sass and JavaScript using [Composer](https://getcomposer.org/):

{% highlight sh %}
composer require orange-opensource/orange-boosted-bootstrap:{{ site.current_version }}
{% endhighlight %}

### NuGet

If you develop in .NET, you can also install and manage Boosted's [CSS](https://www.nuget.org/packages/boosted/) or [Sass](https://www.nuget.org/packages/boosted.sass/) and JavaScript using [NuGet](https://www.nuget.org/):

{% highlight powershell %}
Install-Package boosted
{% endhighlight %}

{% highlight powershell %}
Install-Package boosted.sass
{% endhighlight %}
