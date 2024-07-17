_Note: Please transform `- [ ]` into `- (NA)` in the description when things are not applicable_

### Related issues

<!-- Please link any related issues here. -->

### Description

<!-- Describe your changes in detail -->

### Motivation & Context

<!-- Why is this change required? What problem does it solve? -->

### Types of change

<!-- What types of changes do your code introduce? -->
<!-- Please remove the unused items in the list -->

- Bug fix (non-breaking which fixes an issue)
- New feature (non-breaking change which adds functionality)
- Refactoring (non-breaking change)
- Breaking change (fix or feature that would change existing functionality)

### Live previews

<!-- Please add direct links where your modifications can be seen in the documentation -->

- <https://deploy-preview-{your_pr_number}--boosted.netlify.app/>

### Checklist

<!-- Go over all the following points, and put an `x` in all the boxes that apply. -->
<!-- If you're unsure about any of these, don't hesitate to ask. We're here to help! -->

#### Contribution

- [ ] I have read the [contributing guidelines](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/ouds/main/.github/CONTRIBUTING.md)

#### Accessibility

- [ ] My change follows accessibility good practices; I have at least run axe

#### Design

- [ ] My change respects the design guidelines defined in [Orange Design System](https://oran.ge/dsweb)
- [ ] My change is compatible with a responsive display

#### Development

- [ ] My change follows the [developer guide](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/wiki/Developer-guide)
- [ ] I have added JavaScript unit tests to cover my changes
- [ ] I have added SCSS unit tests to cover my changes

#### Documentation

- [ ] My change introduces changes to the documentation and/or I have updated the documentation accordingly

### Checklist (for Core Team only)

- [ ] My change introduces changes to the migration guide
- [ ] My new component is well displayed in [Storybook](https://deploy-preview-{your_pr_number}--boosted.netlify.app/storybook)
- [ ] My new component is compatible with RTL
- [ ] Manually run [BrowserStack tests](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/actions/workflows/browserstack.yml)
- [ ] Manually test browser compatibility with BrowserStack (Chrome >= 60, Firefox >= 60 (+ ESR), Edge, Safari >= 12, iOS Safari, Chrome & Firefox on Android)
- [ ] Code review
- [ ] Design review
- [ ] A11y review

<!------------------------>
<!-- /!\ Core Team Only -->
<!------------------------>

<!-- Uncomment the following for a release DoD -->

<!--
- [ ] Run linters;
- [ ] Run compilers;
- [ ] Run tests;
- [ ] Check documentation site: examples and contents;
- [ ] Test cross-browser compatibility locally and with [BrowserStack](https://www.browserstack.com/):
  - Firefox ESR
  - IE11 (v4 only)
  - Latest Edge, Chrome, Firefox, Safari
  - iOS Safari
  - Chrome & Firefox on Android
- [ ] Including RTL mode;
- [ ] Ask for reviews and accessibility testing;
- [ ] `npm run release-version $current_version $next_version` to bump version number
  - then, if bumping a minor or major version:
    - [ ] Manually change `version_short` in `package.json`
    - [ ] Add docs version to `site/data/docs-versions.yml`
    - [ ] Manually change `docs_version` in `hugo.yml` and other references to the previous version
    - [ ] Update redirects in docs frontmatter (`site/content/docs/_index.html`?)
    - [ ] Move `site/content/docs/x.y` to `site/content/docs/x.y+1`
    - [ ] Increment `site/static/docs/{version}` version
    - [ ] Increment version in `nuget/ouds-web.nuspec`
    - [ ] (Major version) Manually update the version in `nuget/ouds-web.nuspec` and `nuget/ouds-web.sass.nuspec`
  - check wrong matches in `CHANGELOG.md`, and maybe `site/content/docs/<version>/migration.md`
  - :warning: check the `package-lock.json` and `package.json` content, only "ouds-web" should have its version changed!
  - :warning: `site/content/docs/x.y/**/*.md` should not always be modified
- [ ] if the year changed recently, happy new year :tada: but please change © year in `.scss` main files (reboot, grid, utilities, and main file) as well as in `NOTICE.txt`.
- [ ] `npm run release` to compile dist, build Storybook, update SRI hashes in doc, and package the release
- [ ] Prepare changelog:
  - install [Conventionnal Changelog](https://github.com/conventional-changelog/conventional-changelog) and `conventional-changelog-cli` globally
  - run `conventional-changelog -p angular -i CHANGELOG.md -s`
  - and probably maintain [a ship list (e.g. for v4.4.0)](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/226)
- [ ] Commit and push `dist` with a `chore(release)` commit message
- [ ] Manually run BrowserStack test
- [ ] Merge -> `ouds/main`
- [ ] Tag your version, and push your tag
  - `git tag v0.0.1-ouds-web`
  - `git push origin v0.0.1-ouds-web`
- [ ] Pack and publish
  - `npm pack`
  - if you are already logged in to NPM (with a personal account, for example), [you'd better use a repository scoped `.npmrc` file](https://stackoverflow.com/questions/30114166/how-to-have-multiple-npm-users-set-up-locally)
  - Publish:
    - if you're releasing a pre-release, use `--tag`, e.g. for v5-alpha1 `npm publish boosted-5.0.0-alpha1.tgz --tag next`
    - (v0 only) `npm publish --access public`
- [ ] [publish on Nuget](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/wiki/Generate-NuGet-packages)
- [ ] check release on [NPM](https://www.npmjs.com/package/ouds-web), [Nuget](https://www.nuget.org/packages/ouds-web/), [Packagist](https://packagist.org/packages/orange-opensource/orange-boosted-bootstrap)…
- [ ] publish documentation on `gh-pages`:
  - [ ] copy `../_site/ouds-web` to the `gh-pages` branch (don't forget to update Storybook as well)
  - [ ] check every `index.html` used as redirections to redirect to the new release
  - [ ] when bumping minor version: ensure `dist` URLs in examples' HTML has changed
  - [ ] double-check everything before pushing, starting by searching for forgotten old version number occurrences
- [ ] make an announcement in [GitHub Discussions](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/discussions/categories/announcements) (+ pin the new GH Discussion)
- [ ] [create a GitHub release](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/releases/new):
  - attach the zip file
  - paste the CHANGELOG / Ship list in the release's description
- [ ] make an announcement on internal communication channels :tada:
-->
