# [Orange Boosted with Bootstrap](http://boosted.orange.com/v3)

Orange Boosted is a framework library accessible, ergonomic and Orange branded based on Bootstrap.
Bootstrap is a sleek, intuitive, and powerful front-end framework for faster and easier web development, created by [Mark Otto](https://twitter.com/mdo) and [Jacob Thornton](https://twitter.com/fat), and maintained by the [core team](https://github.com/orgs/twbs/people) with the massive support and involvement of the community.

All the core components of Bootstrap accessible and Orange branded.
And also specific components only available in Boosted.
[Main navigation with or without Mega menu](http://boosted.orange.com/v3/components/#megamenu)
[Local navigation](http://boosted.orange.com/v3/components/#local1)
[Stepbar](http://boosted.orange.com/v3/components/#stepbar)
[Orange link pagination](http://boosted.orange.com/v3/components/#orange-pagination)
[Accordions with indicator](http://boosted.orange.com/v3/javascript/#collapse-example-accordion)
[Complex table](http://boosted.orange.com/v3/javascript/#complextable)
[Responsive table, display as cards onto tablets and mobile](http://boosted.orange.com/v3/css/#tables-responsive)
[Popin (modal window)](http://boosted.orange.com/v3/javascript/#modals)
[Orange branded checkboxes and radios](http://boosted.orange.com/v3/css/#orange-branded-checkboxes-and-radios)
[Forms with new html5 elements and a Javascript validation](http://boosted.orange.com/v3//example_form/)
[Footer](http://boosted.orange.com/v3/components/#footer)


To get started, check out <getting-started/>!

## Table of contents

- [Quick start](#quick-start)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Copyright and license](#copyright-and-license)

## Quick start

Several quick start options are available:

- [Download the latest release](http://boosted.orange.com/v3/getting-started/).
- Clone the repo: `git clone https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap.git`.
- Install with [Bower](http://bower.io): `bower install boosted`.
- Install with [npm](https://www.npmjs.com): `npm install boosted`.

Read the [Getting started page](http://boosted.orange.com/v3/getting-started/) for information on the framework contents, templates and examples, and more.

### What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
boosted/
├── css/
│   ├── boosted.css
│   ├── boosted.css.map
│   ├── boosted.min.css
│   ├── boostedIE8.css
│   ├── boostedIE8.css.map
│   ├── boostedIE8.min.css
│   ├── bootstrap-orange.css
│   ├── bootstrap-orange.css.map
│   ├── bootstrap-orange.min.css
│   ├── bootstrap-orangeIE8.css
│   ├── bootstrap-orangeIE8.css.map
│   ├── bootstrap-orangeIE8.min.css
│   ├── bootstrap-orange-theme.css
│   ├── bootstrap-orange-theme.css.map
│   ├── bootstrap-orange-theme.min.css
│   ├── bootstrap-orange-themeIE8.css
│   ├── bootstrap-orange-themeIE8.css.map
│   └── bootstrap-orange-themeIE8.min.css
├── js/
│   ├── boosted.js
│   └── boosted.min.js
├── images/
│   ├── ...
│   └── ...
└── fonts/
    ├── glyphicons-halflings-regular.eot
    ├── glyphicons-halflings-regular.svg
    ├── glyphicons-halflings-regular.ttf
    ├── glyphicons-halflings-regular.woff
    ├── glyphicons-halflings-regular.woff2
    ├── HelvNeue75_W1G.eot
    ├── HelvNeue75_W1G.svg
    ├── HelvNeue75_W1G.ttf
    ├── HelvNeue75_W1G.woff
    ├── HelvNeue75_W1G.woff2
    ├── HelvNeue55_W1G.eot
    ├── HelvNeue55_W1G.svg
    ├── HelvNeue55_W1G.ttf
    ├── HelvNeue55_W1G.woff
    ├── HelvNeue55_W1G.woff2
    ├── icon-orange.eot
    ├── icon-orange.svg
    ├── icon-orange.ttf
    └── icon-orange.woff
```

We provide compiled CSS and JS (`*.*`), as well as compiled and minified CSS and JS (`*.min.*`). CSS [source maps](https://developer.chrome.com/devtools/docs/css-preprocessors) (`*.map`) are available for use with certain browsers' developer tools. Fonts from Glyphicons are included, as is the optional Bootstrap theme.


## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/twbs/bootstrap/blob/master/CONTRIBUTING.md#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/twbs/bootstrap/issues/new).

Note that **feature requests must target [Bootstrap v4](https://github.com/twbs/bootstrap/tree/v4-dev),** because Bootstrap v3 is now in maintenance mode and is closed off to new features. This is so that we can focus our efforts on Bootstrap v4.


## Documentation

Boosted's documentation, included in this repo in the root directory, is built with [Jekyll](https://jekyllrb.com/) and publicly hosted on GitHub Pages at <http://boosted.orange.com/>. The docs may also be run locally.

### Running documentation locally

1. If necessary, [install Jekyll](https://jekyllrb.com/docs/installation/) and other Ruby dependencies with `bundle install`.
   **Note for Windows users:** Read [this guide](https://jekyllrb.com/docs/installation/windows/) to get Jekyll up and running without problems.
2. From the root `/boosted` directory, run `bundle exec jekyll serve` in the command line.
4. Open `http://localhost:9001` in your browser, and voilà.

Learn more about using Jekyll by reading its [documentation](https://jekyllrb.com/docs/).

## Contributing

Please read through our [contributing guidelines](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/master/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Moreover, if your pull request contains JavaScript patches or features, you must include [relevant unit tests](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/tree/master/app/js/tests). All HTML and CSS should conform to the [Code Guide](https://github.com/mdo/code-guide), maintained by [Mark Otto](https://github.com/mdo).

**Boosted v3 is now closed off to new features.** It has gone into maintenance mode so that we can focus our efforts on [Boosted v4](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/tree/v4-dev), the future of the framework. Pull requests which add new features (rather than fix bugs) should target [Bootstrap v4 (the `v4-dev` git branch)](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/tree/v4-dev) instead.

Editor preferences are available in the [editor config](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/master/.editorconfig) for easy use in common text editors. Read more and download plugins at <https://editorconfig.org/>.


## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, Boosted is maintained under [the Semantic Versioning guidelines](https://semver.org/). Sometimes we screw up, but we'll adhere to those rules whenever possible.

See [the Releases section of our GitHub project](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/releases) for changelogs for each release version of Boosted.


## Thanks

<img src="https://live.browserstack.com/images/opensource/browserstack-logo.svg" alt="BrowserStack Logo" width="490" height="106">

Thanks to [BrowserStack](https://www.browserstack.com/) for providing the infrastructure that allows us to test in real browsers!


## Creators

**Mark Otto**

* <https://twitter.com/mdo>
* <https://github.com/mdo>

**Jacob Thornton**

* <https://twitter.com/fat>
* <https://github.com/fat>


## Copyright and license

Code and documentation copyright 2015-2018 Orange SA. Code released under [the MIT license](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/master/LICENSE). Docs released under [Creative Commons](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/master/docs/LICENSE).
