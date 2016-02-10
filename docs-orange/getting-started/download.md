---
layout: docs
title: Download
group: getting-started
---

**Boosted v{{ site.current_version}}** is available for download in several ways, including some of your favorite package managers. Choose from the options below to snag just what you need.

<div class="row m-t-2">
  <div class="col-sm-6">
{% markdown %}
### Compiled
Download just the compiled and minified CSS and JavaScript. Doesn't include any documentation or original source files.

{% comment %}
<a href="{{ site.download.dist }}" class="btn btn-secondary">Download Boosted</a>
{% endcomment %}
<span class="text-muted">Coming soon!</span>
{% endmarkdown %}
  </div>
  <div class="col-sm-6">
{% markdown %}
### Source files
Download everything: source Sass, JavaScript, and documentation files. **Requires a Sass compiler, [Autoprefixer](https://github.com/postcss/autoprefixer), and [some setup]({{ site.baseurl }}/getting-started/build-tools/#tooling-setup).**

<a href="{{ site.download.source }}" class="btn btn-secondary">Download source</a>
{% endmarkdown %}
  </div>
</div>

## Package managers

Pull in Boosted's **source files** into nearly any project with some of the most popular package managers. No matter the package manager, Boosted will **require a Sass compiler and [Autoprefixer](https://github.com/postcss/autoprefixer)** for a setup that matches our official compiled versions.

{% callout warning %}
**Heads up!** Not all package managers have the v4 alpha published yet, but we should have them up shortly!
{% endcallout %}

### npm

Install Boosted in your Node powered apps with [the npm package](https://www.npmjs.org/package/boosted):

{% highlight bash %}
$ npm install boosted@{{ site.current_version }}
{% endhighlight %}

`require('boosted')` will load all of Boosted's jQuery plugins onto the jQuery object. The `boosted` module itself does not export anything. You can manually load Boosted's jQuery plugins individually by loading the `/js/*.js` files under the package's top-level directory.

Boosted's `package.json` contains some additional metadata under the following keys:

- `sass` - path to Boosted's main [Sass](http://sass-lang.com/) source file
- `style` - path to Boosted's non-minified CSS that's been precompiled using the default settings (no customization)

### Bower

Install and manage Boosted's Sass and JavaScript using [Bower](http://bower.io).

{% highlight bash %}
$ bower install boosted#v{{ site.current_version }}
{% endhighlight %}

## Custom builds

Need only a part of Boosted's CSS or JS? Use one of the custom builds to snag just what you need.

<div class="row">
  <div class="col-sm-4">
    <h3>Reboot</h3>
    <p>Includes variables/mixins, Normalize, and Reboot. No JavaScript.</p>
    <a class="btn btn-secondary" href="#">Download</a>
  </div>
  <div class="col-sm-4">
    <h3>Grid only</h3>
    <p>Includes variables/mixins and our grid system. No JavaScript.</p>
    <a class="btn btn-secondary" href="#">Download</a>
  </div>
  <div class="col-sm-4">
    <h3>Flexbox</h3>
    <p>All of Boosted with flexbox enabled and <strong>lower browser support</strong>.</p>
    <a class="btn btn-secondary" href="#">Download</a>
  </div>
</div>

