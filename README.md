<p align="center">
  <a href="https://boosted.orange.com/">
    <img src="https://boosted.orange.com/docs/4.5/assets/brand/orange_logo.svg" alt="Orange Boosted with Bootstrap" width="50" height="50">
  </a>
</p>

<h3 align="center">Orange Boosted with Bootstrap</h3>

<p align="center">
    Boosted is a fork of Bootstrap. Bootstrap is a sleek, intuitive, and powerful front-end framework for faster and easier web development.
    <br>
    <a href="https://boosted.orange.com/"><strong>Visit Boosted</strong></a>
    <br>
    <br>
    <a href="https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/new?template=bug_report.md">Report bug</a>
    ·
    <a href="https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/new?template=feature_request.md">Request feature</a>
</p>

## Table of contents

- [Quick start](#quick-start)
- [Status](#status)
- [What's included](#whats-included)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Community](#community)
- [Versioning](#versioning)
- [Creators](#creators)
- [Thanks](#thanks)
- [Copyright and license](#copyright-and-license)


## Quick start

Several quick start options are available:

- [Download the latest release.](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/archive/v4.5.3.zip)
- Clone the repo: `git clone https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap.git`
- Install with [npm](https://www.npmjs.com): `npm install boosted`
- Install with [yarn](https://github.com/yarnpkg/yarn): `yarn add boosted@4.5.3`
- Install with [Composer](https://getcomposer.org): `composer require orange-opensource/orange-boosted-bootstrap:4.5.3`
- Install with [NuGet](https://www.nuget.org/): CSS: `Install-Package boosted` Sass: `Install-Package boosted.sass`.

Read the [Getting started page](https://boosted.orange.com/docs/4.5/getting-started/introduction/) for information on the framework contents, CDN, templates and examples, and more.

## Status

[![Build Status](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/workflows/Tests/badge.svg?branch=v4-dev)](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/actions?query=workflow%3ATests+branch%3Av4-dev)
[![npm version](https://img.shields.io/npm/v/boosted)](https://www.npmjs.com/package/boosted)
[![Packagist Prerelease](https://img.shields.io/packagist/v/orange-opensource/orange-boosted-bootstrap)](https://packagist.org/packages/orange-opensource/orange-boosted-bootstrap)
[![NuGet](https://img.shields.io/nuget/v/boosted)](https://www.nuget.org/packages/boosted/absoluteLatest)
[![peerDependencies Status](https://img.shields.io/david/peer/twbs/bootstrap)](https://david-dm.org/Orange-OpenSource/Orange-Boosted-Bootstrap?type=peer)
[![devDependency Status](https://img.shields.io/david/dev/twbs/bootstrap)](https://david-dm.org/Orange-OpenSource/Orange-Boosted-Bootstrap?type=dev)
[![CSS gzip size](https://img.badgesize.io/orange-opensource/orange-boosted-bootstrap/v4-dev/dist/css/boosted.min.css?compression=gzip&label=CSS+gzip+size)](https://github.com/orange-opensource/orange-boosted-bootstrap/blob/v4-dev/dist/css/boosted.min.css)
[![JS gzip size](https://img.badgesize.io/orange-opensource/orange-boosted-bootstrap/v4-dev/dist/js/boosted.min.js?compression=gzip&label=JS+gzip+size)](https://github.com/orange-opensource/orange-boosted-bootstrap/blob/v4-dev/dist/js/boosted.min.js)
[![BrowserStack Status](https://www.browserstack.com/automate/badge.svg?badge_key=eTYyVGI5REFJZmt4M1hTWjFZOEoxVnR0RElhRm1iTk02ckJUWUpYeGFhQT0tLVRhK0F5L29MNU8wWERHa1pRK2hlaXc9PQ==--a5ee40063cbc3aae870f80421b1f9997b9e2f314%)](https://automate.browserstack.com/public-build/eTYyVGI5REFJZmt4M1hTWjFZOEoxVnR0RElhRm1iTk02ckJUWUpYeGFhQT0tLVRhK0F5L29MNU8wWERHa1pRK2hlaXc9PQ==--a5ee40063cbc3aae870f80421b1f9997b9e2f314%)
[![](https://data.jsdelivr.com/v1/package/npm/boosted/badge)](https://www.jsdelivr.com/package/npm/boosted)

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```text
boosted/
└── dist/
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
```

We provide compiled CSS and JS (`boosted.*`), as well as compiled and minified CSS and JS (`boosted.min.*`). [source maps](https://developers.google.com/web/tools/chrome-devtools/debug/readability/source-maps) (`boosted.*.map`) are available for use with certain browsers' developer tools. Bundled JS files (`boosted.bundle.js` and minified `boosted.bundle.min.js`) include [Popper](https://popper.js.org/), but not [jQuery](https://jquery.com/).


## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/v4-dev/.github/CONTRIBUTING.md#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/new).


## Documentation

Boosted documentation, included in this repo in the root directory, is built with [Jekyll](https://jekyllrb.com/) and publicly hosted on GitHub Pages at <https://boosted.orange.com/>. The docs may also be run locally.

Documentation search is powered by [Algolia's DocSearch](https://community.algolia.com/docsearch/). Working on our search? Be sure to set `debug: true` in `site/docs/4.5/assets/js/src/search.js` file.

### Running documentation locally

1. Run through the [tooling setup](https://boosted.orange.com/docs/4.5/getting-started/build-tools/#tooling-setup) to install Jekyll (the site builder) and other Ruby dependencies with `bundle install`.
2. Run `npm install` to install Node.js dependencies.
3. Run `npm start` to compile CSS and JavaScript files, generate our docs, and watch for changes.
4. Open `http://localhost:9001` in your browser, and voilà.

Learn more about using Jekyll by reading its [documentation](https://jekyllrb.com/docs/).

### Documentation for previous releases

You can find all our previous releases docs on <https://getbootstrap.com/docs/versions/>.

[Previous releases](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/releases) and their documentation are also available for download.


## Contributing

Please read through our [contributing guidelines](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/v4-dev/.github/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Moreover, if your pull request contains JavaScript patches or features, you must include [relevant unit tests](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/tree/v4-dev/js/tests). All HTML and CSS should conform to the [Code Guide](https://github.com/mdo/code-guide), maintained by [Mark Otto](https://github.com/mdo).

Editor preferences are available in the [editor config](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/v4-dev/.editorconfig) for easy use in common text editors. Read more and download plugins at <https://editorconfig.org>.



## Community

Get updates on Bootstrap's development and chat with the project maintainers and community members.

- Follow [@getbootstrap on Twitter](https://twitter.com/getbootstrap).
- Read and subscribe to [The Official Bootstrap Blog](https://blog.getbootstrap.com/).
- Join [the official Slack room](https://bootstrap-slack.herokuapp.com/).
- Chat with fellow Bootstrappers in IRC. On the `irc.freenode.net` server, in the `##bootstrap` channel.
- Implementation help may be found at Stack Overflow (tagged [`bootstrap-4`](https://stackoverflow.com/questions/tagged/bootstrap-4)).
- Developers should use the keyword `bootstrap` on packages which modify or add to the functionality of Bootstrap when distributing through [npm](https://www.npmjs.com/browse/keyword/bootstrap) or similar delivery mechanisms for maximum discoverability.


## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, Boosted is maintained under [the Semantic Versioning guidelines](https://semver.org/). Sometimes we screw up, but we adhere to those rules whenever possible.

See [the Releases section of our GitHub project](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/releases) for changelogs for each release version of Boosted.


## Creators

### Bootstrap

**Mark Otto**

- <https://twitter.com/mdo>
- <https://github.com/mdo>

**Jacob Thornton**

- <https://twitter.com/fat>
- <https://github.com/fat>

### Boosted

**Yves Gatesoupe**

- <https://github.com/ygatesoupe>

**Loïc Laussel**

- <https://github.com/Lausselloic/>

**Gaël Poupard**

- <https://github.com/ffoodd>


## Thanks

<a href="https://www.browserstack.com/">
  <img src="https://live.browserstack.com/images/opensource/browserstack-logo.svg" height="25" width="114" alt="Cross-browsers testing thanks to BrowserStack"/>
</a>

Thanks to [BrowserStack](https://www.browserstack.com/) for providing the infrastructure that allows us to test in real browsers!


<a href="https://www.netlify.com">
  <img src="https://www.netlify.com/img/global/badges/netlify-light.svg" height="51" width="114" alt="Deploys by Netlify"/>
</a>

Thanks to [Netlify](https://www.netlify.com/), we are able to deploy pre-releases at [Boosted](https://boosted.netlify.com) and auto-deploy pull requests.

## Copyright and license

Initial code and documentation copyright 2011-2020 the [Bootstrap Authors](https://github.com/twbs/bootstrap/graphs/contributors) and [Twitter, Inc.](https://twitter.com) Code released under the [MIT License](https://github.com/twbs/bootstrap/blob/main/LICENSE). Docs released under [Creative Commons](https://github.com/twbs/bootstrap/blob/main/docs/LICENSE).
Boosted code and documentation copyright 2015-2020 the [Boosted Authors](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/graphs/contributors) and [Orange SA.](https://orange.com) Code released under the [MIT License](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/v4-dev/LICENSE). Docs released under [Creative Commons](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/v4-dev/docs/LICENSE).
