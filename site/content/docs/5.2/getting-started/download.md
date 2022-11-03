---
layout: docs
title: Download
description: Download Boosted Innovation Cup Innovation Cup to get the compiled CSS and JavaScript, source code, or include it with your favorite package managers like npm, RubyGems, and more.
group: getting-started
aliases:
  - "/docs/getting-started/download/"
toc: true
---

## Compiled CSS and JS

Download ready-to-use compiled code for **Boosted Innovation Cup** to easily drop into your project, which includes:

- Compiled and minified CSS bundles (see [CSS files comparison]({{< docsref "/getting-started/contents#css-files" >}}))
- Compiled and minified JavaScript plugins (see [JS files comparison]({{< docsref "/getting-started/contents#js-files" >}}))

This doesn't include documentation, source files, or any optional JavaScript dependencies like Popper.

<a href="{{< param "download.dist" >}}" class="btn btn-primary" onclick="dataLayer.push({'event': 'clic', 'site_name':'accessibility-boosted', 'phase':'prod', 'track_category':'download', 'track_name':'getting started', 'track_cible':'download source'});">Download</a>

## Source files

Compile Boosted Innovation Cup with your own asset pipeline by downloading our source Sass, JavaScript, and documentation files. This option requires some additional tooling:

- [Sass compiler]({{< docsref "/getting-started/contribute#sass" >}}) for compiling Sass source files into CSS files
- [Autoprefixer](https://github.com/postcss/autoprefixer) for CSS vendor prefixing

Should you require our full set of [build tools]({{< docsref "/getting-started/contribute#tooling-setup" >}}), they are included for developing Boosted Innovation Cup and its docs, but they're likely unsuitable for your own purposes.

<a href="{{< param "download.source" >}}" class="btn btn-primary" onclick="dataLayer.push({'event': 'clic', 'site_name':'accessibility-boosted', 'phase':'prod', 'track_category':'download', 'track_name':'getting started', 'track_cible':'download source'});">Download source</a>

## Examples

If you want to download and examine our [examples]({{< docsref "/examples" >}}), you can grab the already built examples:

<a href="{{< param "download.dist_examples" >}}" class="btn btn-primary" onclick="dataLayer.push({'event': 'clic', 'site_name':'accessibility-boosted', 'phase':'prod', 'track_category':'download', 'track_name':'getting started', 'track_cible':'download examples source'});">Download Examples</a>

## CDN via jsDelivr

Skip the download with [jsDelivr](https://www.jsdelivr.com/) to deliver cached version of Boosted Innovation Cup's compiled CSS and JS to your project.

```html
<link href="https://cdn.jsdelivr.net" rel="preconnect" crossorigin="anonymous">
<link href="{{< param "cdn.css" >}}" rel="stylesheet" integrity="{{< param "cdn.css_hash" >}}" crossorigin="anonymous">
<script src="{{< param "cdn.js_bundle" >}}" integrity="{{< param "cdn.js_bundle_hash" >}}" crossorigin="anonymous"></script>
```

If you're using our compiled JavaScript and prefer to include Popper separately, add Popper before our JS, via a CDN preferably.

```html
<script src="{{< param "cdn.popper" >}}" integrity="{{< param "cdn.popper_hash" >}}" crossorigin="anonymous"></script>
<script src="{{< param "cdn.js" >}}" integrity="{{< param "cdn.js_hash" >}}" crossorigin="anonymous"></script>
```

{{< callout warning >}}
### Resource Hints
Make sure to use [`preconnect` resource hint](https://www.w3.org/TR/resource-hints/#preconnect) where appropriate (**only** when given URL **will** be used).
{{< /callout >}}

## Package managers

Pull in Boosted Innovation Cup's **source files** into nearly any project with some of the most popular package managers. No matter the package manager, Boosted Innovation Cup will **require a [Sass compiler]({{< docsref "/getting-started/contribute#sass" >}}) and [Autoprefixer](https://github.com/postcss/autoprefixer)** for a setup that matches our official compiled version.

### npm

Install Boosted Innovation Cup in your Node.js powered apps with [the npm package](https://www.npmjs.com/package/boosted-innovation-cup):

```sh
npm install boosted-innovation-cup@v0.1.0
```

`const boosted = require('boosted')` or `import boosted from 'boosted'` will load all of Boosted Innovation Cup's plugins onto a `boosted` object.
The `boosted` module itself exports all of our plugins. You can manually load Boosted Innovation Cup's plugins individually by loading the `/js/dist/*.js` files under the package's top-level directory.

Boosted Innovation Cup's `package.json` contains some additional metadata under the following keys:

- `sass` - path to Boosted Innovation Cup's main [Sass](https://sass-lang.com/) source file
- `style` - path to Boosted Innovation Cup's non-minified CSS that's been compiled using the default settings (no customization)

{{< callout info >}}
{{< partial "callout-info-npm-starter.md" >}}
{{< /callout >}}

### yarn

Install Boosted Innovation Cup in your Node.js powered apps with [the yarn package](https://yarnpkg.com/en/package/Boosted):

```sh
yarn add boosted-innovation-cup@v0.1.0
```
