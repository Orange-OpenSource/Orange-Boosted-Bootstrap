---
title: "OUDS Web — Troubleshooting Guide"
description: "Common build, lint, and test errors with root causes and fixes for AI agents."
audience: [ai-agent, developer]
keywords:
  [
    stylelint,
    eslint,
    build,
    errors,
    pa11y,
    karma,
    VNU,
    CI,
    tokens,
    troubleshooting,
  ]
related_files:
  - ../AGENTS.md
  - CODE_CONVENTIONS.md
  - DESIGN_TOKENS.md
  - ARCHITECTURE.md
last_updated: 2026-04-02
---

# OUDS Web — Troubleshooting Guide

> Reference for diagnosing and fixing the most common errors encountered when building, linting, or testing OUDS Web. Errors are grouped by toolchain.

---

## Table of contents

1. [Stylelint errors](#stylelint-errors)
2. [ESLint errors](#eslint-errors)
3. [Sass / CSS build errors](#sass--css-build-errors)
4. [CI failures](#ci-failures)
5. [Token errors](#token-errors)
6. [JS test failures](#js-test-failures)
7. [Pa11y / accessibility failures](#pa11y--accessibility-failures)
8. [Docs build failures](#docs-build-failures)
9. [Stale cache issues](#stale-cache-issues)
10. [Useful debug commands](#useful-debug-commands)

---

## Stylelint errors

Config: `.stylelintrc.json` — extends `stylelint-config-twbs-bootstrap`.

### `Unexpected property "border-radius"` / `Unexpected property "transition"`

**Cause:** `border-radius` and `transition` (and all corner-radius variants) are in `property-disallowed-list`. You must use the corresponding SCSS mixins.

```scss
// ❌ Fails
border-radius: 4px;
transition: opacity 0.15s linear;
border-top-left-radius: 2px;

// ✅ Correct
@include border-radius($ouds-border-radius-default);
@include transition(opacity 0.15s linear);
@include border-top-start-radius(
  $ouds-border-radius-default
); // logical direction!
```

**Corner mixin names use logical directions, not physical:**

| Forbidden property           | Correct mixin                           |
| ---------------------------- | --------------------------------------- |
| `border-top-left-radius`     | `@include border-top-start-radius()`    |
| `border-top-right-radius`    | `@include border-top-end-radius()`      |
| `border-bottom-right-radius` | `@include border-bottom-end-radius()`   |
| `border-bottom-left-radius`  | `@include border-bottom-start-radius()` |

---

### `Unexpected value "none" for property "border"` / `"outline"`

**Cause:** `border: none` and `outline: none` are in `declaration-property-value-disallowed-list`.

```scss
// ❌ Fails
border: none;
outline: none;

// ✅ Correct
border: 0;
// For outline: provide a visible focus indicator instead of removing it
&:focus-visible {
  @include focus-ring();
}
```

---

### `Unexpected function "lighten"` / `"darken"`

**Cause:** These Sass functions are in `function-disallowed-list`.

**Fix:** Find the appropriate lighter/darker token variant in `packages/<brand>/scss/tokens/_semantic.scss` or `_component.scss`.

---

### `Expected variable to have default value`

**Cause:** `scss/dollar-variable-default` requires `!default` on all non-local SCSS variables.

```scss
// ❌ Fails
$my-spacing: 16px;

// ✅ Correct
$my-spacing: $ouds-space-fixed-medium !default;

// Exception: local variables inside mixins/functions are exempt
@mixin my-mixin($size) {
  $computed: $size * 2; // OK — local variable, no !default needed
}
```

---

### `Unexpected union class name with the parent selector`

**Cause:** `scss/selector-no-union-class-name` forbids BEM-style `&-suffix` nesting.

```scss
// ❌ Fails — would generate .alert-message
.alert {
  &-message { ... }
}

// ✅ Correct
.alert-message { ... }
```

---

### `Needless disable for "rule-name"`

**Cause:** `reportNeedlessDisables: true` — a `// stylelint-disable` comment disables a rule that was never triggered.

**Fix:** Remove the disable comment, or verify you are disabling the correct rule name.

---

### `Unexpected !important`

**Cause:** `declaration-no-important` bans `!important`.

**Fix:** Rethink specificity. If truly unavoidable (e.g., utility overrides), use:

```scss
color: red; // stylelint-disable-line declaration-no-important
```

---

### `/* stylelint ... */` block comments leaking into compiled CSS

**Cause:** Block comments (`/* */`) are preserved in compiled CSS. The `css.yml` CI check explicitly fails if any `/* stylelint */` comment appears in `packages/orange/dist/css/*.css`.

```scss
// ❌ Leaks into compiled CSS — will fail CI
/* stylelint-disable property-disallowed-list */
border-radius: 0;
/* stylelint-enable property-disallowed-list */

// ✅ Double-slash comments are stripped at compile time
// stylelint-disable property-disallowed-list
border-radius: 0;
// stylelint-enable property-disallowed-list

// ✅ Or targeted inline
border-radius: 0; // stylelint-disable-line property-disallowed-list
```

---

## ESLint errors

Config: `.eslintrc.json` — extends `xo`, `xo/browser`, `plugin:unicorn/recommended`.

### `Extra semicolon.`

**Cause:** `semi: ["error", "never"]` — no semicolons.

```javascript
// ❌ Fails
const x = 1;

// ✅ Correct
const x = 1;
```

---

### `Trailing comma.`

**Cause:** `comma-dangle: ["error", "never"]` — no trailing commas.

```javascript
// ❌ Fails
const obj = { a: 1, b: 2 };

// ✅ Correct
const obj = { a: 1, b: 2 };
```

---

### `Unexpected console statement.`

**Cause:** `no-console: "error"` — no `console.*` in production code.

**Fix:** Remove all `console.log`, `console.warn`, `console.error` from `js/src/`. They are allowed in `build/`, tests, and `site/`.

---

### `Unexpected string concatenation.`

**Cause:** `prefer-template: "error"`.

```javascript
// ❌ Fails
const msg = "Hello, " + name;

// ✅ Correct
const msg = `Hello, ${name}`;
```

---

### `Missing file extension "js" for "./module"`

**Cause:** `import/extensions` requires `.js` on all local imports.

```javascript
// ❌ Fails
import Foo from "./foo";

// ✅ Correct
import Foo from "./foo.js";
```

---

### `Dependency cycle detected.`

**Cause:** `import/no-cycle` — circular imports.

**Fix:** Restructure to remove the cycle. Typically, extract the shared dependency into a third module.

---

### `Expected indentation of X spaces but found Y.`

**Cause:** `indent: ["error", 2]` — 2-space indent, tabs forbidden.

---

## Sass / CSS build errors

### `Can't find stylesheet to import`

**Cause:** A `@import` path is wrong, or a package dependency is missing.

```bash
npm install  # Reinstall dependencies
```

Check that the import path matches the actual file. In brand entry points, common imports use `@ouds/web-common/scss/...` — verify the workspace symlink exists in `node_modules/`.

---

### `Undefined variable "$ouds-some-token"`

**Cause:** The token variable does not exist in the brand's token files, or the token files are not imported before the component that uses it.

1. Search for the variable in `packages/<brand>/scss/tokens/_component.scss`, `_semantic.scss`.
2. If it doesn't exist, check whether it is brand-specific and needs adding to `_composite.scss` (the only token file editable by hand — see AGENTS.md > Design tokens system).
3. Verify the import order in `packages/<brand>/scss/tokens/_index.scss`.

---

### `Sass 1.78` deprecation warnings

`sass` is pinned at `1.78.0`. Do not update it — some deprecation warnings from newer versions may break the build.

---

## CI failures

### `lint.yml` fails — ESLint or Stylelint errors

Run locally first:

```bash
npm run css-lint   # SCSS only
npm run js-lint    # JS only
```

If lint passes locally but fails in CI, delete the cache and retry:

```bash
rm -rf .cache/
npm run lint
```

---

### `css.yml` fails — stylelint comment in compiled CSS

See [Stylelint — block comments leaking into compiled CSS](#-stylelint---block-comments-leaking-into-compiled-css).

---

### `bundlewatch.yml` fails — bundle size exceeded

**Cause:** New code increased the CSS or JS bundle beyond the threshold.

1. Run `npm run dist` and check the output sizes.
2. Look for unnecessary imports, large SVG data URIs added to component tokens, or duplicated rules.
3. Bundlewatch thresholds are in `bundlewatch.config.js` at the repo root.

---

### `cspell.yml` fails — spelling errors in docs

**Cause:** A word in an `.md` or `.mdx` file is not in the dictionary.

1. Fix the typo, or
2. Add the word to the `cspell` word list in `.cspell.json`.

---

### `docs.yml` fails — Prettier format violation

**Cause:** An MDX file in `site/` is not formatted according to Prettier rules.

**Fix:**

```bash
npm run docs-prettier-format   # Auto-format
npm run docs-prettier-check    # Verify
```

---

## Token errors

### Colors do not update in dark mode

**Cause:** A color value was set as a Sass variable directly on a CSS property, instead of through a CSS custom property.

```scss
// ❌ Cannot respond to runtime dark-mode toggle
color: $ouds-color-content-default;

// ✅ Correct — CSS custom property responds to data-bs-theme switching
color: var(--#{$prefix}color-content-default);
```

---

### Bootstrap CSS variable not working (silently ignored)

**Cause:** Several Bootstrap CSS custom properties have been removed or renamed in OUDS. Referencing them has no effect.

Common removed/renamed props:

- `--bs-btn-font-family`, `--bs-btn-line-height`, `--bs-btn-box-shadow`, `--bs-btn-disabled-opacity`, `--bs-btn-focus-box-shadow`
- `--bs-btn-padding-x` → replaced by `--bs-btn-padding-start` / `--bs-btn-padding-end`
- `--bs-modal-header-padding-x`, `--bs-modal-header-padding-y`
- `--bs-accordion-btn-icon`

**Diagnosis:** Search the relevant `scss/_<component>.scss` file for `// OUDS mod: no --#{$prefix}...` comments.

---

### `$core-ouds-*` or `$core-orange-*` used directly in a component

**Cause:** Raw tokens must never be used in component SCSS. They bypass semantic meaning and are brand-specific.

```scss
// ❌ Wrong layer
padding: $core-ouds-dimension-200;
color: $core-orange-color-orange-550;

// ✅ Correct — use semantic or component tokens
padding: $ouds-space-padding-block-medium;
color: var(--#{$prefix}color-content-primary);
```

---

### Token added to one brand but not others — build or visual inconsistency

**Cause:** If a new component token is needed, it must be added in **all three** brand `_composite.scss` files:

- `packages/orange/scss/tokens/_composite.scss`
- `packages/sosh/scss/tokens/_composite.scss`
- `packages/orange-compact/scss/tokens/_composite.scss`

**Note:** `_raw.scss`, `_semantic.scss`, `_component.scss`, and `_*-custom-props.scss` are auto-generated — do not edit them.

---

### `:root` used instead of `$ouds-root-selector`

**Cause:** OUDS components should scope CSS custom properties to `$ouds-root-selector`, not bare `:root`, to support scoped theming.

```scss
// ❌ Wrong
:root {
  --bs-my-token: 16px;
}

// ✅ Correct
#{$ouds-root-selector} {
  --#{$prefix}my-token: 16px;
}
```

---

## JS test failures

### Karma tests pass locally but fail in CI (coverage threshold)

**Cause:** JS test coverage thresholds (90% statements/functions/lines, 89% branches) must be met.

Check coverage at `js/coverage/lcov.info` or run:

```bash
npm run js-test
```

Add tests for any newly added or modified JS code.

---

### `TypeError: cannot read properties of undefined` in tests

**Cause:** Jasmine tests often rely on fixture HTML being set up in `beforeEach`. Check that the fixture is correctly reset and that the component instance is being created from the right element.

---

## Pa11y / accessibility failures

Pa11y uses `axe-core` with `WCAG2AA` standard. Color contrast is **not** automated (skipped — axe produces false positives with CSS custom properties).

### Pa11y artifact — reading the report

On CI failure, an artifact is uploaded to the Actions run. Download it — each HTML report names the page that failed and the specific axe rule violated.

**Run locally:**

```bash
npm run docs-build          # Must build _site/ first
npm run docs-accessibility  # Starts static server + runs Pa11y
```

### Common Pa11y failures

| Failure                  | Root cause                                                   | Fix                                                |
| ------------------------ | ------------------------------------------------------------ | -------------------------------------------------- |
| `aria-required-children` | A `role="list"` parent is missing `role="listitem"` children | Ensure correct ARIA role hierarchy                 |
| `button-name`            | A `<button>` has no accessible name                          | Add `aria-label` or visible text content           |
| `link-name`              | An `<a>` has no accessible name                              | Add `aria-label` or visible text                   |
| `label`                  | A form input has no `<label>`                                | Associate a `<label for="id">` or use `aria-label` |
| `region`                 | Page content is not wrapped in a landmark                    | Ensure content is inside `<main>`, `<nav>`, etc.   |
| `duplicate-id`           | Two elements share the same `id`                             | Make IDs unique (especially in repeated examples)  |

---

## Docs build failures

### Astro build failure — `Cannot find module`

**Cause:** A TypeScript import path in `site/src/` is broken, or an NPM dependency is missing.

```bash
npm install
npm run docs-build
```

### VNU HTML validation failure

VNU runs in `--Werror` mode. To reproduce locally:

```bash
npm run docs-build
npm run docs-vnu
```

Known intentional patterns that pass VNU (do not "fix" these):

- `aria-disabled="true"` on `<a href>` — valid OUDS usage pattern.

---

## Stale cache issues

Lint tools (Stylelint, ESLint) use file caches in `.cache/`. If you get unexpected stale results:

```bash
rm -rf .cache/
npm run lint
```

---

## Useful debug commands

```bash
# Lint SCSS only (fastest feedback loop)
npm run css-lint

# Lint JS only
npm run js-lint

# Build only the Orange brand (faster than all 3)
npm run css-dev-orange

# Run JS tests with headed browser + watch mode
npm run js-debug

# Build docs site
npm run docs-build

# Run accessibility tests (requires docs-build first)
npm run docs-accessibility

# Run HTML validation (requires docs-build first)
npm run docs-vnu

# Check docs formatting without modifying files
npm run docs-prettier-check

# Auto-fix docs formatting
npm run docs-prettier-format

# Full build + test suite
npm run test
```
