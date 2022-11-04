---
layout: docs
title: Download
description: Include Boosted Innovation Cup via CDN or with your favorite package managers like npm or yarn.
group: getting-started
aliases:
  - "/docs/getting-started/download/"
toc: true
---

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
