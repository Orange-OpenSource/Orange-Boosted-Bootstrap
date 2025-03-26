---
layout: docs
title: Download
description: Download OUDS Web to get the compiled CSS and JavaScript, source code, or include it with your favorite package managers like npm, yarn, and more.
group: getting-started
aliases:
  - "/docs/getting-started/download/"
toc: true
---

## Package managers

Pull in OUDS Web’s **source files** into nearly any project with some of the most popular package managers. No matter the package manager, OUDS Web will **require a [Sass compiler]({{< docsref "/getting-started/contribute#sass" >}}) and [Autoprefixer]({{< docsref "/getting-started/contribute#autoprefixer" >}})**  for a setup that matches our official compiled versions.

### npm

Install OUDS Web in your Node.js powered apps with [the npm package](https://www.npmjs.com/package/@ouds/web):

```sh
npm install @ouds/web@{{< param "current_version" >}}
```

`const oudsWeb = require('oudsWeb')` or `import oudsWeb from 'oudsWeb'` will load all of OUDS Web's plugins onto a `oudsWeb` object.
The `oudsWeb` module itself exports all of our plugins. You can manually load OUDS Web's plugins individually by loading the `/js/dist/*.js` files under the package's top-level directory.

OUDS Web's `package.json` contains some additional metadata under the following keys:

- `sass` - path to OUDS Web's main [Sass](https://sass-lang.com/) source file
- `style` - path to OUDS Web's non-minified CSS that's been compiled using the default settings (no customization)

{{< callout info >}}
{{< partial "callouts/info-npm-starter.md" >}}
{{< /callout >}}

### yarn

Install OUDS Web in your Node.js powered apps with [the yarn package](https://yarnpkg.com/en/package/@ouds/web):

```sh
yarn add @ouds/web@{{< param "current_version" >}}
```

{{< callout warning >}}
**Yarn 2+ (aka Yarn Berry) doesn't support the `node_modules` directory by default**: using the Bootstrap [Sass & JS example](https://github.com/twbs/examples/tree/main/sass-js) needs some adjustments:
```sh
yarn config set nodeLinker node-modules # Use the node_modules linker
touch yarn.lock # Create an empty yarn.lock file
yarn install # Install the dependencies
yarn start # Start the project
```
{{< /callout >}}

### Composer

You can also install and manage OUDS Web's Sass and JavaScript using [Composer](https://getcomposer.org/):

```sh
composer require orange-opensource/orange-boosted-bootstrap:{{< param current_version >}}
```

### NuGet

If you develop in .NET Framework, you can also install and manage OUDS Web's [CSS](https://www.nuget.org/packages/ouds-web) or [Sass](https://www.nuget.org/packages/ouds-web.sass) and JavaScript using [NuGet](https://www.nuget.org/). Newer projects should use [libman](https://learn.microsoft.com/en-us/aspnet/core/client-side/libman/) or another method as NuGet is designed for compiled code, not frontend assets.

```powershell
Install-Package ouds-web
```

```powershell
Install-Package ouds-web.sass
```

## CDNs

### jsDelivr

We recommend [jsDelivr](https://www.jsdelivr.com/package/npm/@ouds/web/) as a CDN, and use it ourselves in our documentation to skip the download and deliver cached version of OUDS Web's compiled CSS and JS to your project.

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
**Resource hint**: make sure to use [`preconnect`](https://developer.mozilla.org/docs/Web/HTML/Attributes/rel/preconnect) where appropriate (**only** when given URL **will** be used).
{{< /callout >}}

### Alternative CDN

In some cases—like in some specific countries or environments—you may need to use other CDN providers like [unpkg](https://www.unpkg.com/browse/@ouds/web@{{< param "current_version" >}}). You'll find the same files on these CDN providers, albeit with different URLs.

{{< callout warning>}}
**If the SRI hashes differ for a given file, you shouldn't use the files from that CDN, because it means that the file was modified by someone else.**
{{< /callout >}}

Note that you should compare same length hashes, e.g. `sha384` with `sha384`, otherwise it's expected for them to be different.
As such, you can use an online tool like [SRI Hash Generator](https://www.srihash.org/) to make sure that the hashes are the same for a given file. Alternatively, assuming you have OpenSSL installed, you can achieve the same from the CLI, for example:

```sh
openssl dgst -sha384 -binary ouds-web.min.js | openssl base64 -A
```

## Downloads

### Compiled CSS and JS

Download ready-to-use compiled code for **OUDS Web v{{< param current_version >}}** to easily drop into your project, which includes:

- Compiled and minified CSS bundles (see [CSS files comparison]({{< docsref "/getting-started/contents#css-files" >}}))
- Compiled and minified JavaScript plugins (see [JS files comparison]({{< docsref "/getting-started/contents#js-files" >}}))

This doesn't include documentation, source files, or any optional JavaScript dependencies like Popper.

<a href="{{< param "download.dist" >}}" class="btn btn-default" onclick="dataLayer.push({'event': 'clic', 'site_name':'accessibility-boosted', 'phase':'prod', 'track_category':'download', 'track_name':'getting started', 'track_cible':'download source'});">Download</a>

### Source files

Compile OUDS Web with your own asset pipeline by downloading our source Sass, JavaScript, and documentation files. This option requires some additional tooling:

- [Sass compiler]({{< docsref "/getting-started/contribute#sass" >}}) for compiling Sass source files into CSS files
- [Autoprefixer]({{< docsref "/getting-started/contribute#autoprefixer" >}}) for CSS vendor prefixing

Should you require our full set of [build tools]({{< docsref "/getting-started/contribute#tooling-setup" >}}), they are included for developing OUDS Web and its docs, but they're likely unsuitable for your own purposes.

<a href="{{< param "download.source" >}}" class="btn btn-default" onclick="dataLayer.push({'event': 'clic', 'site_name':'accessibility-boosted', 'phase':'prod', 'track_category':'download', 'track_name':'getting started', 'track_cible':'download source'});">Download source</a>

### Examples

If you want to download and examine our [examples]({{< docsref "/examples" >}}), you can grab the already built examples:

<a href="{{< param "download.dist_examples" >}}" class="btn btn-default" onclick="dataLayer.push({'event': 'clic', 'site_name':'accessibility-boosted', 'phase':'prod', 'track_category':'download', 'track_name':'getting started', 'track_cible':'download examples source'});">Download examples</a>
