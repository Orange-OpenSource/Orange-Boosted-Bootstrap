<h1 align="center">OUDS Web</h1>

<p align="center">
  OUDS Web is a fork of Bootstrap. Bootstrap is a sleek, intuitive, and powerful front-end framework for faster and easier web development.
  <br />
  <a href="https://web.unified-design-system.orange.com"><strong>Visit OUDS Web</strong></a>
  <br />
  <br />
  <a href="https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/new?assignees=-&labels=bug&template=bug_report.yml">Report bug</a>
  ·
  <a href="https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/new?assignees=&labels=feature&template=feature_request.yml">Request feature</a>
</p>


## Table of contents

- [Quick start](#quick-start)
- [Status](#status)
- [What’s included](#whats-included)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Versioning](#versioning)
- [Creators](#creators)
- [Thanks](#thanks)
- [Copyright and license](#copyright-and-license)


## Quick start

Several quick start options are available:

- [Download the latest release](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/archive/v0.5.0-ouds-web.zip)
- Clone the repo: `git clone https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap.git`
- Install with [npm](https://www.npmjs.com/): `npm install @ouds/web@v0.5.0`
- Install with [yarn](https://yarnpkg.com/): `yarn add @ouds/web@v0.5.0`
- Install with [Bun](https://bun.sh/): `bun add @ouds/web@v0.5.0`
- Install with [Composer](https://getcomposer.org/): `composer require orange-opensource/orange-boosted-bootstrap:dev-ouds/main`
- Install with [NuGet](https://www.nuget.org/): CSS: `Install-Package ouds-web` Sass: `Install-Package ouds-web.sass`

Read the [Getting started page](https://web.unified-design-system.orange.com/docs/getting-started/introduction/) for information on the framework contents, templates, examples, and more.


## Status

[![Build Status](https://img.shields.io/github/actions/workflow/status/Orange-OpenSource/Orange-Boosted-Bootstrap/js.yml?branch=ouds/main&label=JS%20Tests&logo=github)](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/actions/workflows/js.yml?query=workflow%3AJS+branch%3Aouds%2Fmain)
[![npm version](https://img.shields.io/npm/v/@ouds/web?logo=npm&logoColor=fff)](https://www.npmjs.com/package/@ouds/web)
[![NuGet](https://img.shields.io/nuget/vpre/ouds-web?logo=nuget&logoColor=fff)](https://www.nuget.org/packages/ouds-web/absoluteLatest)
[![Coverage Status](https://img.shields.io/coveralls/github/Orange-OpenSource/Orange-Boosted-Bootstrap/ouds/main?logo=coveralls&logoColor=fff)](https://coveralls.io/github/Orange-OpenSource/Orange-Boosted-Bootstrap?branch=ouds/main)
[![CSS gzip size](https://img.badgesize.io/Orange-OpenSource/Orange-Boosted-Bootstrap/ouds/main/dist/css/ouds-web.min.css?compression=gzip&label=CSS%20gzip%20size)](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/ouds/main/dist/css/ouds-web.min.css)
[![CSS Brotli size](https://img.badgesize.io/Orange-OpenSource/Orange-Boosted-Bootstrap/ouds/main/dist/css/ouds-web.min.css?compression=brotli&label=CSS%20Brotli%20size)](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/ouds/main/dist/css/ouds-web.min.css)
[![JS gzip size](https://img.badgesize.io/Orange-OpenSource/Orange-Boosted-Bootstrap/ouds/main/dist/js/ouds-web.min.js?compression=gzip&label=JS%20gzip%20size)](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/ouds/main/dist/js/ouds-web.min.js)
[![JS Brotli size](https://img.badgesize.io/Orange-OpenSource/Orange-Boosted-Bootstrap/ouds/main/dist/js/ouds-web.min.js?compression=brotli&label=JS%20Brotli%20size)](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/ouds/main/dist/js/ouds-web.min.js)
[![JSDelivr](https://data.jsdelivr.com/v1/package/npm/@ouds/web/badge)](https://www.jsdelivr.com/package/npm/@ouds/web)

## What’s included

Within the download you’ll find the following directories and files, logically grouping common assets and providing both compiled and minified variations.

<details>
  <summary>Download contents</summary>

  ```text
  ouds-web/
  ├── css/
  │   ├── ouds-web-bootstrap.css
  │   ├── ouds-web-bootstrap.css.map
  │   ├── ouds-web-bootstrap.min.css
  │   ├── ouds-web-bootstrap.min.css.map
  │   ├── ouds-web-bootstrap.rtl.css
  │   ├── ouds-web-bootstrap.rtl.css.map
  │   ├── ouds-web-bootstrap.rtl.min.css
  │   ├── ouds-web-bootstrap.rtl.min.css.map
  │   ├── ouds-web-grid.css
  │   ├── ouds-web-grid.css.map
  │   ├── ouds-web-grid.min.css
  │   ├── ouds-web-grid.min.css.map
  │   ├── ouds-web-grid.rtl.css
  │   ├── ouds-web-grid.rtl.css.map
  │   ├── ouds-web-grid.rtl.min.css
  │   ├── ouds-web-grid.rtl.min.css.map
  │   ├── ouds-web-reboot.css
  │   ├── ouds-web-reboot.css.map
  │   ├── ouds-web-reboot.min.css
  │   ├── ouds-web-reboot.min.css.map
  │   ├── ouds-web-reboot.rtl.css
  │   ├── ouds-web-reboot.rtl.css.map
  │   ├── ouds-web-reboot.rtl.min.css
  │   ├── ouds-web-reboot.rtl.min.css.map
  │   ├── ouds-web-utilities.css
  │   ├── ouds-web-utilities.css.map
  │   ├── ouds-web-utilities.min.css
  │   ├── ouds-web-utilities.min.css.map
  │   ├── ouds-web-utilities.rtl.css
  │   ├── ouds-web-utilities.rtl.css.map
  │   ├── ouds-web-utilities.rtl.min.css
  │   ├── ouds-web-utilities.rtl.min.css.map
  │   ├── ouds-web.css
  │   ├── ouds-web.css.map
  │   ├── ouds-web.min.css
  │   ├── ouds-web.min.css.map
  │   ├── ouds-web.rtl.css
  │   ├── ouds-web.rtl.css.map
  │   ├── ouds-web.rtl.min.css
  │   └── ouds-web.rtl.min.css.map
  └── js/
      ├── ouds-web.bundle.js
      ├── ouds-web.bundle.js.map
      ├── ouds-web.bundle.min.js
      ├── ouds-web.bundle.min.js.map
      ├── ouds-web.esm.js
      ├── ouds-web.esm.js.map
      ├── ouds-web.esm.min.js
      ├── ouds-web.esm.min.js.map
      ├── ouds-web.js
      ├── ouds-web.js.map
      ├── ouds-web.min.js
      └── ouds-web.min.js.map
  ```
</details>

We provide compiled CSS and JS (`ouds-web.*`), as well as compiled and minified CSS and JS (`ouds-web.min.*`). [Source maps](https://web.dev/articles/source-maps) (`ouds-web.*.map`) are available for use with certain browsers’ developer tools. Bundled JS files (`ouds-web.bundle.js` and minified `ouds-web.bundle.min.js`) include [Popper](https://popper.js.org/docs/v2/).

We also provide a compiled and minified CSS (`ouds-web-bootstrap.*` and `ouds-web-bootstrap.min.*`) enforcing Bootstrap compatibility.

## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/ouds/main/.github/CONTRIBUTING.md#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/new/choose).


## Documentation

OUDS Web’s documentation, included in this repo in the root directory, is built with [Astro](https://astro.build/) and publicly hosted on GitHub Pages at <https://web.unified-design-system.orange.com/>. The docs may also be run locally.

Documentation search is powered by [Algolia’s DocSearch](https://docsearch.algolia.com/).

### Running documentation locally

1. Run `npm install` to install the Node.js dependencies, including Hugo (the site builder).
2. Run `npm run test` (or a specific npm script) to rebuild distributed CSS and JavaScript files, as well as our docs assets.
3. From the root `/ouds-web` directory, run `npm run docs-serve` in the command line.
4. Open <http://localhost:9001/> in your browser, and voilà.

Learn more about using Hugo by reading its [documentation](https://docs.astro.build/en/getting-started/).

### Documentation for previous releases

You can find all our previous releases docs on <https://web.unified-design-system.orange.com/docs/versions/>.

[Previous releases](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/releases) and their documentation are also available for download.


## Contributing

Please read through our [contributing guidelines](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/ouds/main/.github/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Moreover, if your pull request contains JavaScript patches or features, you must include [relevant unit tests](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/tree/ouds/main/js/tests). All HTML and CSS should conform to the [Code Guide](https://github.com/mdo/code-guide), maintained by [Mark Otto](https://github.com/mdo).

Editor preferences are available in the [editor config](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/ouds/main/.editorconfig) for easy use in common text editors. Read more and download plugins at <https://editorconfig.org/>.


## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, OUDS Web is maintained under [the Semantic Versioning guidelines](https://semver.org/). Sometimes we screw up, but we adhere to those rules whenever possible.

See [the Releases section of our GitHub project](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/releases) for changelogs for each release version of OUDS Web.

Our default branch is for development of our OUDS Web release.


## Creators

### Bootstrap

**Mark Otto**

- <https://x.com/mdo>
- <https://github.com/mdo>

**Jacob Thornton**

- <https://x.com/fat>
- <https://github.com/fat>

## Thanks

<a href="https://www.browserstack.com/">
  <img src="https://live.browserstack.com/images/opensource/browserstack-logo.svg" alt="BrowserStack" width="192" height="42" />
</a>

Thanks to [BrowserStack](https://www.browserstack.com/) for providing the infrastructure that allows us to test in real browsers!

<a href="https://www.netlify.com/">
  <img src="https://www.netlify.com/v3/img/components/full-logo-light.svg" alt="Netlify" width="147" height="40" />
</a>

Thanks to [Netlify](https://www.netlify.com/) for providing us with Deploy Previews!

## Copyright and license

Code and documentation copyright 2011-2025 the [Bootstrap Authors](https://github.com/twbs/bootstrap/graphs/contributors). Code released under the [MIT License](https://github.com/twbs/bootstrap/blob/main/LICENSE). Docs released under [Creative Commons](https://creativecommons.org/licenses/by/3.0/).

OUDS Web code and documentation copyright 2015-2025 the [OUDS Web Authors](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/graphs/contributors) and [Orange SA.](https://orange.com) Code released under the [MIT License](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/ouds/main/LICENSE). Docs released under [Creative Commons](https://creativecommons.org/licenses/by/3.0/).

