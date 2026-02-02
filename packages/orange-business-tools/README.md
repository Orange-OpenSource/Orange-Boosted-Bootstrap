## Table of contents

- [Quick start](#quick-start)
- [What’s included](#whats-included)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Versioning](#versioning)
- [Copyright and license](#copyright-and-license)


## Quick start

This package is not intended to be used alone. Please read our [main README](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/ouds/main/README.md) to know more.

## What’s included

Within the download you’ll find the following directories and files, logically grouping common assets and providing both compiled and minified variations.

<details>
  <summary>Download contents</summary>

  ```text
  @ouds/
  └── web-orange-business-tools/
      └── dist/
          └── css/
              ├── ouds-web-bootstrap.css
              ├── ouds-web-bootstrap.css.map
              ├── ouds-web-bootstrap.min.css
              ├── ouds-web-bootstrap.min.css.map
              ├── ouds-web-bootstrap.rtl.css
              ├── ouds-web-bootstrap.rtl.css.map
              ├── ouds-web-bootstrap.rtl.min.css
              ├── ouds-web-bootstrap.rtl.min.css.map
              ├── ouds-web-grid.css
              ├── ouds-web-grid.css.map
              ├── ouds-web-grid.min.css
              ├── ouds-web-grid.min.css.map
              ├── ouds-web-grid.rtl.css
              ├── ouds-web-grid.rtl.css.map
              ├── ouds-web-grid.rtl.min.css
              ├── ouds-web-grid.rtl.min.css.map
              ├── ouds-web-reboot.css
              ├── ouds-web-reboot.css.map
              ├── ouds-web-reboot.min.css
              ├── ouds-web-reboot.min.css.map
              ├── ouds-web-reboot.rtl.css
              ├── ouds-web-reboot.rtl.css.map
              ├── ouds-web-reboot.rtl.min.css
              ├── ouds-web-reboot.rtl.min.css.map
              ├── ouds-web-utilities.css
              ├── ouds-web-utilities.css.map
              ├── ouds-web-utilities.min.css
              ├── ouds-web-utilities.min.css.map
              ├── ouds-web-utilities.rtl.css
              ├── ouds-web-utilities.rtl.css.map
              ├── ouds-web-utilities.rtl.min.css
              ├── ouds-web-utilities.rtl.min.css.map
              ├── ouds-web.css
              ├── ouds-web.css.map
              ├── ouds-web.min.css
              ├── ouds-web.min.css.map
              ├── ouds-web.rtl.css
              ├── ouds-web.rtl.css.map
              ├── ouds-web.rtl.min.css
              └── ouds-web.rtl.min.css.map
  ```
</details>

We provide compiled CSS (`ouds-web.*`), as well as compiled and minified CSS (`ouds-web.min.*`). [Source maps](https://web.dev/articles/source-maps) (`ouds-web.*.map`) are available for use with certain browsers’ developer tools.

We also provide a compiled and minified CSS (`ouds-web-bootstrap.*` and `ouds-web-bootstrap.min.*`) enforcing Bootstrap compatibility.

## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/ouds/main/.github/CONTRIBUTING.md#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/new/choose).


## Documentation

OUDS Web’s documentation, included in this repo in the root directory, is built with [Astro](https://astro.build/) and publicly hosted on GitHub Pages at <https://web.unified-design-system.orange.com/orange-business-tools/>. The docs may also be run locally.

Documentation search is powered by [Algolia’s DocSearch](https://docsearch.algolia.com/).

### Running documentation locally

1. Run `npm install` from the root `/ouds-web` directory, to install the Node.js dependencies, including Astro (the site builder).
2. Run `npm run css` from the brand root `/ouds-web/packages/orange-business-tools` directory, (or a specific npm script) to rebuild distributed CSS and JavaScript files, as well as our docs assets.
3. From the root `/ouds-web/packages/orange-business-tools` directory, run `npm run astro-dev` in the command line.
4. Open <http://localhost:9003/orange-business-tools/> in your browser, and voilà.

Learn more about using Astro by reading its [documentation](https://docs.astro.build/en/getting-started/).

### Documentation for previous releases

You can find all our previous releases docs on <https://web.unified-design-system.orange.com/orange-business-tools/docs/versions/>.

[Previous releases](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/releases) and their documentation are also available for download.


## Contributing

Please read through our [contributing guidelines](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/ouds/main/.github/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Moreover, if your pull request contains JavaScript patches or features, you must include [relevant unit tests](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/tree/ouds/main/js/tests). All HTML and CSS should conform to the [Code Guide](https://github.com/mdo/code-guide), maintained by [Mark Otto](https://github.com/mdo).

Editor preferences are available in the [editor config](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/ouds/main/.editorconfig) for easy use in common text editors. Read more and download plugins at <https://editorconfig.org/>.


## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, OUDS Web is maintained under [the Semantic Versioning guidelines](https://semver.org/). Sometimes we screw up, but we adhere to those rules whenever possible.

See [the Releases section of our GitHub project](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/releases) for changelogs for each release version of OUDS Web.

Our default branch is for development of our OUDS Web release.


## Copyright and license

Code and documentation copyright 2011-2025 the [Bootstrap Authors](https://github.com/twbs/bootstrap/graphs/contributors). Code released under the [MIT License](https://github.com/twbs/bootstrap/blob/main/LICENSE). Docs released under [Creative Commons](https://creativecommons.org/licenses/by/3.0/).

OUDS Web code and documentation copyright 2015-2025 the [OUDS Web Authors](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/graphs/contributors) and [Orange SA](https://orange.com). Code released under the [MIT License](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/ouds/main/LICENSE). Docs released under [Creative Commons](https://creativecommons.org/licenses/by/3.0/).

