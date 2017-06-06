---
layout: docs
title: Download
description: Download Boosted to get the compiled CSS and JavaScript, source code, or include it with your favorite package managers like npm, Bower, and more.
group: getting-started
toc: true
---

## Boosted CSS and JS

**Download Bootsted's ready-to-use code to easily drop into your project.** Includes compiled and minified versions of all our CSS bundles (default, grid only, or Reboot only) and JavaScript plugins. Doesn't include documentation or source files.

**Current version:** v{{ site.current_version}}

<a href="{{ site.download.dist }}" class="btn btn-lg btn-secondary">Download Boosted</a>

## Source files
**Want to compile Boosted with your project's asset pipeline?** Choose this option to download our source Sass, JavaScript, and documentation files. Requires a Sass compiler, [Autoprefixer](https://github.com/postcss/autoprefixer), [postcss-flexbugs-fixes](https://github.com/luisrudge/postcss-flexbugs-fixes), and [some setup]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/build-tools/#tooling-setup).

<a href="{{ site.download.source }}" class="btn btn-secondary">Download source</a>

## Package managers

Pull in Boosted's **source files** into nearly any project with some of the most popular package managers. No matter the package manager, Boosted will **require a Sass compiler, [Autoprefixer](https://github.com/postcss/autoprefixer), and [postcss-flexbugs-fixes](https://github.com/luisrudge/postcss-flexbugs-fixes)** for a setup that matches our official compiled versions.

### npm

Install Boosted in your Node powered apps with [the npm package](https://www.npmjs.org/package/boosted):

{% highlight bash %}
npm install boosted@{{ site.current_version }}
{% endhighlight %}

`require('boosted')` will load all of Boosted's jQuery plugins onto the jQuery object. The `boosted` module itself does not export anything. You can manually load Boosted's jQuery plugins individually by loading the `/js/*.js` files under the package's top-level directory.

Boosted's `package.json` contains some additional metadata under the following keys:

- `sass` - path to Boosted's main [Sass](http://sass-lang.com/) source file
- `style` - path to Boosted's non-minified CSS that's been precompiled using the default settings (no customization)

### Bower

Install and manage Boosted's Sass and JavaScript using [Bower](https://bower.io).

{% highlight bash %}
bower install boosted#v{{ site.current_version }}
{% endhighlight %}
