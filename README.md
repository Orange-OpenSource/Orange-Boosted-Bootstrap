# [Boosted](https://boosted.orange.com)

![Bower version](https://img.shields.io/bower/v/boosted.svg)
[![npm version](https://img.shields.io/npm/v/boosted.svg)](https://www.npmjs.com/package/boosted)
[![Build Status](https://img.shields.io/travis/Orange-OpenSource/Orange-Boosted-Bootstrap/v4-dev.svg)](https://travis-ci.org/Orange-OpenSource/Orange-Boosted-Bootstrap)

Boosted is a fork of Bootstrap. Bootstrap is a sleek, intuitive, and powerful front-end framework for faster and easier web development, created by [Mark Otto](https://twitter.com/mdo) and [Jacob Thornton](https://twitter.com/fat), and maintained by the [core team](https://github.com/orgs/twbs/people) with the massive support and involvement of the community.

To get started, check out <https://boosted.orange.com>!

## Table of contents

- [Quick start](#quick-start)
- [Branch](#branch-usage)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Community](#community)
- [Versioning](#versioning)
- [Creators](#creators)
- [Copyright and license](#copyright-and-license)

## Quick start

Several quick start options are available:

- [Download the latest release.](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/archive/v4.0.0-alpha.6.zip)
- Clone the repo: `git clone https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap.git`
- Install with [npm](https://www.npmjs.com): `npm install boosted@4.0.0-alpha.6`
- Install with [yarn](https://github.com/yarnpkg/yarn): `yarn add boosted@4.0.0-alpha.6`
- Install with [Bower](https://bower.io): `bower install boosted#v4.0.0-alpha.6`

Read the [Getting started page](http://boosted.orange.com/v4-alpha/getting-started/introduction/) for information on the framework contents, templates and examples, and more.

### What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
boosted/
├── css/
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
|   ├── boosted.css
│   ├── boosted.css.map
│   ├── boosted.min.css
│   ├── boosted.min.css.map
|   ├── orangeHelvetica.css
│   ├── orangeHelvetica.css.map
│   ├── orangeHelvetica.min.css
│   ├── orangeHelvetica.min.css.map
|   ├── orangeIcons.css
│   ├── orangeIcons.css.map
│   ├── orangeIcons.min.css
│   └── orangeIcons.min.css.map
└── js/
    ├── boosted.js
    └── boosted.min.js
```

We provide compiled CSS and JS (`boosted.*`), as well as compiled and minified CSS and JS (`boosted.min.*`). CSS [source maps](https://developer.chrome.com/devtools/docs/css-preprocessors) (`boosted.*.map`) are available for use with certain browsers' developer tools.


## Branch usage

- [master](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/tree/master) for Boosted v3.x (latest official release - only for bugfixes)
- [v4-dev](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/tree/v4-dev) (default) for Boosted v4.x (Boosted next gen - following Bootstrap 4, and include new features)
- [gh-pages](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/tree/gh-pages) for documentation
- [patch-gridalpha.5](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/tree/patch-gridalpha.5) for Boosted v4.0.0-alpha.5.1 (patch purpose only)


## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/v4-dev/CONTRIBUTING.md#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/new).


## Documentation

Boosted documentation, included in this repo in the root directory, is built with [Jekyll](https://jekyllrb.com) and publicly hosted on GitHub Pages at <https://boosted.orange.com>. The docs may also be run locally.

### Running documentation locally

1. Run through the [tooling setup](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/v4-dev/docs/getting-started/build-tools.md#tooling-setup) to install Jekyll (the site builder) and other Ruby dependencies with `bundle install`.
2. Run `grunt` (or a specific set of Grunt tasks) to rebuild distributed CSS and JavaScript files, as well as our docs assets.
3. From the root `/Orange-Boosted-Bootstrap` directory, run `bundle exec jekyll serve` in the command line.
4. Open <http://localhost:9001> in your browser, and voilà.

Learn more about using Jekyll by reading its [documentation](https://jekyllrb.com/docs/home/).

### Documentation for previous releases

Documentation for v3.x has been made available for the time being at <https://boosted.orange.com/v3/> while folks transition to Bootstrap 4.

[Previous releases](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/releases) and their documentation are also available for download.



## Contributing

Please read through our [contributing guidelines](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/v4-dev/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Moreover, if your pull request contains JavaScript patches or features, you must include [relevant unit tests](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/tree/v4-dev/js/tests). All HTML and CSS should conform to the [Code Guide](https://github.com/mdo/code-guide), maintained by [Mark Otto](https://github.com/mdo).

Editor preferences are available in the [editor config](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/v4-dev/.editorconfig) for easy use in common text editors. Read more and download plugins at <http://editorconfig.org>.



## Community

Get updates on Bootstrap's development and chat with the project maintainers and community members.

- Follow [@getbootstrap on Twitter](https://twitter.com/getbootstrap).
- Read and subscribe to [The Official Bootstrap Blog](https://blog.getbootstrap.com).
- Join [the official Slack room](https://bootstrap-slack.herokuapp.com).
- Chat with fellow Bootstrappers in IRC. On the `irc.freenode.net` server, in the `##bootstrap` channel.
- Implementation help may be found at Stack Overflow (tagged [`bootstrap-4`](https://stackoverflow.com/questions/tagged/bootstrap-4)).
- Developers should use the keyword `bootstrap` on packages which modify or add to the functionality of Bootstrap when distributing through [npm](https://www.npmjs.com/browse/keyword/bootstrap) or similar delivery mechanisms for maximum discoverability.



## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, Boosted is maintained under [the Semantic Versioning guidelines](http://semver.org/). Sometimes we screw up, but we'll adhere to those rules whenever possible.

See [the Releases section of our GitHub project](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/releases) for changelogs for each release version of Boosted. Release announcement posts on [the official Bootstrap blog](https://blog.getbootstrap.com) contain summaries of the most noteworthy changes made in each release.


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

- <http://github.com/Lausselloic/>

## Copyright and license

Initial code and documentation copyright 2011-2017 the [Bootstrap Authors](https://github.com/twbs/bootstrap/graphs/contributors) and [Twitter, Inc.](https://twitter.com) Code released under the [MIT License](https://github.com/twbs/bootstrap/blob/master/LICENSE). Docs released under [Creative Commons](https://github.com/twbs/bootstrap/blob/master/docs/LICENSE).
Boosted code and documentation copyright 2015-2017 the [Boosted Authors](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/graphs/contributors) and [Orange SA.](https://orange.com) Code released under the [MIT License](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/v4-dev/LICENSE). Docs released under [Creative Commons](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/v4-dev/docs/LICENSE).
