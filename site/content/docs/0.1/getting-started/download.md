---
layout: docs
title: Download
description: Download Boosted to get the compiled CSS and JavaScript, source code, or include it with your favorite package managers like npm, RubyGems, and more.
group: getting-started
aliases:
  - "/docs/getting-started/download/"
toc: true
---

## Compiled CSS and JS

Download ready-to-use compiled code for **Boosted v{{< param current_version >}}** to easily drop into your project, which includes:

- Compiled and minified CSS bundles (see [CSS files comparison]({{< docsref "/getting-started/contents#css-files" >}}))
- Compiled and minified JavaScript plugins (see [JS files comparison]({{< docsref "/getting-started/contents#js-files" >}}))

This doesn't include documentation, source files, or any optional JavaScript dependencies like Popper.

<a href="{{< param "download.dist" >}}" class="btn btn-primary" onclick="dataLayer.push({'event': 'clic', 'site_name':'accessibility-boosted', 'phase':'prod', 'track_category':'download', 'track_name':'getting started', 'track_cible':'download source'});">Download</a>

## Source files

Compile Boosted with your own asset pipeline by downloading our source Sass, JavaScript, and documentation files. This option requires some additional tooling:

- [Sass compiler]({{< docsref "/getting-started/contribute#sass" >}}) for compiling Sass source files into CSS files
- [Autoprefixer](https://github.com/postcss/autoprefixer) for CSS vendor prefixing

Should you require our full set of [build tools]({{< docsref "/getting-started/contribute#tooling-setup" >}}), they are included for developing Boosted and its docs, but they're likely unsuitable for your own purposes.

<a href="{{< param "download.source" >}}" class="btn btn-primary" onclick="dataLayer.push({'event': 'clic', 'site_name':'accessibility-boosted', 'phase':'prod', 'track_category':'download', 'track_name':'getting started', 'track_cible':'download source'});">Download source</a>

## Examples

If you want to download and examine our [examples]({{< docsref "/examples" >}}), you can grab the already built examples:

<a href="{{< param "download.dist_examples" >}}" class="btn btn-primary" onclick="dataLayer.push({'event': 'clic', 'site_name':'accessibility-boosted', 'phase':'prod', 'track_category':'download', 'track_name':'getting started', 'track_cible':'download examples source'});">Download Examples</a>

## CDN via jsDelivr

Skip the download with [jsDelivr](https://www.jsdelivr.com/) to deliver cached version of Boosted's compiled CSS and JS to your project.

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

### Alternative CDNs

We recommend [jsDelivr](https://www.jsdelivr.com/) and use it ourselves in our documentation. However, in some cases—like in some specific countries or environments—you may need to use other CDN providers like [cdnjs](https://cdnjs.com/) or [unpkg](https://unpkg.com/).

You'll find the same files on these CDN providers, albeit with different URLs. With cdnjs, you can [use this direct Boosted package link](https://cdnjs.com/libraries/ouds-web) to copy and paste ready-to-use HTML snippets for each dist file from any version of Boosted.

{{< callout warning>}}
**If the SRI hashes differ for a given file, you shouldn't use the files from that CDN, because it means that the file was modified by someone else.**
{{< /callout >}}

Note that you should compare same length hashes, e.g. `sha384` with `sha384`, otherwise it's expected for them to be different.
As such, you can use an online tool like [SRI Hash Generator](https://www.srihash.org/) to make sure that the hashes are the same for a given file.
Alternatively, assuming you have OpenSSL installed, you can achieve the same from the CLI, for example:

```sh
openssl dgst -sha384 -binary ouds-web.min.js | openssl base64 -A
```

### npm

Install Boosted in your Node.js powered apps with [the npm package](https://www.npmjs.com/package/ouds-web):

```sh
npm install ouds-web@{{< param "current_version" >}}
```

`const boosted = require('boosted')` or `import boosted from 'boosted'` will load all of Boosted's plugins onto a `boosted` object.
The `boosted` module itself exports all of our plugins. You can manually load Boosted's plugins individually by loading the `/js/dist/*.js` files under the package's top-level directory.

Boosted's `package.json` contains some additional metadata under the following keys:

- `sass` - path to Boosted's main [Sass](https://sass-lang.com/) source file
- `style` - path to Boosted's non-minified CSS that's been compiled using the default settings (no customization)

{{< callout info >}}
{{< partial "callouts/info-npm-starter.md" >}}
{{< /callout >}}

### yarn

Install Boosted in your Node.js powered apps with [the yarn package](https://yarnpkg.com/en/package/ouds-web):

```sh
yarn add ouds-web@{{< param "current_version" >}}
```

### Composer

You can also install and manage Boosted's Sass and JavaScript using [Composer](https://getcomposer.org/):

```sh
composer require orange-opensource/ouds-web:{{< param current_version >}}
```

### NuGet

If you develop in .NET Framework, you can also install and manage Boosted's [CSS](https://www.nuget.org/packages/ouds-web/) or [Sass](https://www.nuget.org/packages/ouds-web.sass/) and JavaScript using [NuGet](https://www.nuget.org/). Newer projects should use [libman](https://learn.microsoft.com/en-us/aspnet/core/client-side/libman/) or another method as NuGet is designed for compiled code, not frontend assets.

```powershell
Install-Package ouds-web
```

```powershell
Install-Package ouds-web.sass
```
