### Related issues

<!-- Please link any related issues here. -->

### Description

<!-- Describe your changes in detail -->

### Motivation & Context

<!-- Why is this change required? What problem does it solve? -->

### Types of change

<!-- What types of changes does you code introduce? -->
<!-- Please remove the unused items in the list -->

- Bug fix (non-breaking which fixes an issues)
- New feature (non-breaking change which adds functionality)
- Refactoring (non-breaking change)
- Breaking change (fix or feature that would change existing functionality)

### Live previews

<!-- Please add direct links where your modifications can be seen in the documentation -->

* https://deploy-preview-{your_pr_number}--boosted.netlify.app/

### Checklist

<!-- Go over all the following points, and put an `x` in all the boxes that apply. -->
<!-- If you're unsure about any of these, don't hesitate to ask. We're here to help! -->

#### Contribution

- [ ] I have read the [contributing guidelines](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/blob/main/.github/CONTRIBUTING.md)

#### Design

- [ ] My change respects the design guidelines
- [ ] My change is compatible with responsive display

#### Development

- [ ] My code follows the code style of the project _(using `npm run lint`)_
- [ ] I have added JavaScript unit tests to cover my changes
- [ ] All new and existing tests passed

#### Documentation

- [ ] My change introduces changes to the documentation or I have updated the documentation accordingly

<details>
  <summary>Detailed info</summary>
  <ul>
    <li>including the "Sass" part using <code>scss-docs</code> shortcode</li>
    <li>in <code>/about/overview/#custom-components</code> if it is a new Orange custom component</li>
    <li>in <code>/getting-started/introduction/#components</code> if it is a new Orange custom component that requires JavaScript (and Popper)</li>
    <li>in <code>/customize/overview#csps-and-embedded-svgs</code> if it is a new Orange custom component that includes embedded SVGs in our CSS</li>
    <li>in <code>/forms/validation/?#supported-elements</code> if it is a new Orange custom component that is a form control</li>
    <li>in <code>/forms/overview/</code> if it is a new Orange custom component that is a form control</li>
  </ul>
</details>

### Checklist (for Core Team only)

- [ ] My change introduces changes to the migration guide
- [ ] My new component is added in Storybook
- [ ] My new component is compatible with RTL
- [ ] Manually run BrowserStack automatic tests
- [ ] Manually test browser compatibility with BrowserStack (Chrome, Firefox (+ ESR), Edge, Safari, iOS Safari, Chrome & Android on Android)
- [ ] Code review
- [ ] Design review
- [ ] A11y review

#### After the merge

- [ ] Manually launch [Percy tests](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/actions/workflows/percy.yml)

<!------------------------->
<!-- /!\ Core Team Only -->
<!------------------------->

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
- [ ] [sync with Bootstrap](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/wiki/Syncing-with-Bootstrap)'s release and probably wait for it;
- [ ] `npm run release-version $current_version $next_version` to bump version number
  - then, if bumping a minor or major version:
    - [ ] Manually change `version_short` in `package.json`
    - [ ] Add docs version to `site/data/docs-versions.yml`
    - [ ] Manually change `docs_version` in `config.yml` and other references to the previous version
    - [ ] Update redirects in docs frontmatter (`site/content/docs/_index.html`?)
    - [ ] Move `site/content/docs/5.x` to `site/content/docs/5.x+1`
    - [ ] Increment `site/static/docs/{version}` version
    - [ ] Increment version in `nuget/boosted.nuspec`
    - [ ] (Major version) Manually update the version in `nuget/boosted.nuspec` and `nuget/boosted.sass.nuspec`
  - check wrong matches in `CHANGELOG.md`, and maybe `site/content/docs/<version>/migration.md`
  - :warning: check the `package-lock.json` and `package.json` content, only "boosted" should have its version changed!
  - :warning: `site/content/docs/5.1/**/*.md` should not always be modified
- [ ] if year changed recently, happy new year :tada: but please change © year in `.scss` main files (reboot, grid, utilities and main file) as well as in `NOTICE.txt`.
- [ ] `npm run release` to compile dist, build Storybook, update SRI hashes in doc and package the release
- [ ] Prepare changelog:
  - install [Conventionnal Changelog](https://github.com/conventional-changelog/conventional-changelog) and `conventional-changelog-cli` globally
  - run `conventional-changelog -p angular -i CHANGELOG.md -s`
  - and probably maintain [a ship list (eg for v4.4.0)](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/issues/226)
- [ ] commit and push `dist` with a `chore(release)` commit message
- [ ] Manually run BrowserStack test
- [ ] Manually run Percy test
- [ ] merge (on `v4-dev` or `main`)
- [ ] tag your version, and push your tag
- [ ] [create a GitHub release](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/releases/new):
  - attach zip file
  - paste CHANGELOG / Ship list in the release's description
- [ ] Pack and publish
  - `npm pack`
  - if you are already logged in NPM (with a personnal account, for example), [you'd better use a repository scoped `.npmrc` file](https://stackoverflow.com/questions/30114166/how-to-have-multiple-npm-users-set-up-locally)
  - Publish:
    - if you're releasing a pre-release, use `--tag`, eg for v5-alpha1 `npm publish boosted-5.0.0-alpha1.tgz --tag next`
    - (v4 only) `npm publish --tag v4.x.y` (if you forgot and v4 becomes the latest version on NPM, you can run `npm dist-tag add boosted@5.x.y latest to fix it)
    - (v5 only) `npm publish`
- [ ] [publish on Nuget](https://github.com/Orange-OpenSource/Orange-Boosted-Bootstrap/wiki/Generate-NuGet-packages)
- [ ] check release on [NPM](https://www.npmjs.com/package/boosted), [Nuget](https://www.nuget.org/packages/boosted/), [Packagist](https://packagist.org/packages/orange-opensource/orange-boosted-bootstrap)…
- [ ] publish documentation on `gh-pages`:
  - [ ] copy `../_site` to the `gh-pages` branch (don't forget to update Storybook as well)
  - [ ] check every `index.html` used as redirections to be redirecting to the new release
  - [ ] when bumping minor version: ensure `dist` URLs in examples' HTML has changed
  - [ ] double-check everything before pushing, starting by searching for forgotten old version number occurences
- [ ] make an announcement in Plazza :tada:
-->
