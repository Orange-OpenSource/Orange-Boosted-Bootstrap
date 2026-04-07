---
name: ouds-diagnose-error
description: >
  Step-by-step diagnostic workflow for common build, lint, and test errors in OUDS Web.
  Covers Stylelint, ESLint, Sass/CSS build, CI failures, token errors, JS tests, and Pa11y.
when_to_use:
  - You encounter a Stylelint or ESLint failure
  - The Sass/CSS build reports an error or warning
  - A CI job fails (lint.yml, css.yml, js.yml, pa11y.yml)
  - A token variable is undefined
  - JS unit tests fail
  - Pa11y accessibility checks fail
---

# Command: Diagnose OUDS Web Error

## When to Use

- Encountering a `Stylelint`, `ESLint`, Sass/CSS build, CI, token, JS test, or Pa11y error
- CI job fails and the error message isn't self-explanatory
- A build worked locally but fails in CI

## Checkpoints

- Have you run `npm run lint` locally to see all lint errors at once?
- Is the error in `js/src/`, `scss/`, or `packages/*/scss/tokens/`?
- Is the error in a CI job name (lint.yml, css.yml, js.yml, pa11y.yml)?

---

## Steps

### 1. Identify the error category

Look at the error prefix or toolchain to identify the category:

| Error signal | Category |
|---|---|
| `Unexpected property "border-radius"` | Stylelint |
| `Unexpected value "none" for "border"` | Stylelint |
| `Expected variable to have default value` | Stylelint |
| `Extra semicolon` / `Trailing comma` | ESLint |
| `Unexpected console statement` | ESLint |
| `Can't find stylesheet to import` | Sass build |
| `Undefined variable "$ouds-..."` | Token / Sass |
| `/* stylelint ... */ leaking into CSS` | CI css.yml |
| `AssertionError` / `Expected X to equal Y` | JS tests |
| `Violation: …` (URL + rule) | Pa11y |
| `Error: VNU` / `Parse Error` | VNU HTML validation |

### 2a. Fix Stylelint: forbidden direct properties

**`border-radius` / `transition` / corner-radius variants**: Must use the mixin.

```scss
// ❌ Fails
border-radius: 4px;
transition: opacity 0.15s;
border-top-left-radius: 2px;

// ✅ Fix
@include border-radius($ouds-border-radius-default);
@include transition(opacity 0.15s linear);
@include border-top-start-radius($ouds-border-radius-default);
```

**`border: none` / `outline: none`**: Use `border: 0` and provide visible focus alternatives.

**`lighten()` / `darken()`**: Replace with the appropriate token variant in `_semantic.scss`.

### 2b. Fix Stylelint: missing `!default` on SCSS variable

Every non-local SCSS variable must have `!default`.

```scss
// ❌ Fails
$my-spacing: 16px;

// ✅ Fix
$my-spacing: $ouds-space-fixed-medium !default;
```

Exception: local variables inside mixins or functions are exempt.

### 2c. Fix Stylelint: `/* stylelint ... */` block comment leaking into CSS

Use double-slash comments (stripped at compile time), not block comments:

```scss
// ✅ Use double-slash
// stylelint-disable property-disallowed-list
border-radius: 0;
// stylelint-enable property-disallowed-list

// ✅ Or targeted inline
border-radius: 0; // stylelint-disable-line property-disallowed-list
```

### 2d. Fix ESLint: JS style violations

| Error | Fix |
|---|---|
| `Extra semicolon` | Remove `;` |
| `Trailing comma` | Remove trailing `,` in objects/arrays |
| `Unexpected console statement` | Remove `console.*` from `js/src/` |
| `Unexpected string concatenation` | Change to template literal `` `Hello, ${name}` `` |
| `Missing file extension "js"` | Add `.js` to local import paths |
| `Dependency cycle detected` | Extract shared dependency to a third module |
| `Expected indentation of 2 spaces` | Fix indentation to 2 spaces, no tabs |

### 2e. Fix Sass/CSS build: missing import

```
Error: Can't find stylesheet to import
```

1. Run `npm install` to reinstall workspace dependencies.
2. Verify the import path uses `@ouds/web-common/scss/...` for common imports.
3. Check that the workspace symlink exists in `node_modules/`.

### 2f. Fix token error: undefined variable

```
Error: Undefined variable "$ouds-some-token"
```

1. Search for the variable in `packages/<brand>/scss/tokens/_component.scss` and `_semantic.scss`.
2. If it doesn't exist in the brand's files → it may need to be added to `_composite.scss` (the only hand-editable token file).
3. Verify the import order in `packages/<brand>/scss/tokens/_index.scss` — token files must import in this order: `_raw` → `_semantic` → `_semantic-colors-custom-props` → `_composite` → `_component-colors-custom-props` → `_component`.

### 2g. Fix JS test failures

1. Run `npm run js-test` locally to see the full failure stack.
2. Check if the test expects an ARIA attribute that the component now sets differently.
3. Check if the test relies on a CSS class or `data-bs-*` attribute that changed.
4. For coverage gaps: look at `js/coverage/index.html` to find uncovered branches.

### 2h. Fix Pa11y accessibility failures

1. Run `npm run docs-accessibility` locally (requires local docs server running).
2. Common issues:
   - Missing `role="alert"` or `aria-live` on dynamic regions
   - Insufficient color contrast (check token used against `$min-contrast-ratio: 4.5`)
   - Missing `aria-label` or `.visually-hidden` text on icon-only buttons
   - `:focus` styles removed — add `@include focus-visible()`
3. Use Storybook a11y addon (`npm run storybook`) for real-time feedback during development.

### 3. Run validation to confirm fix

```bash
# Lint only
npm run lint

# Build CSS and JS
npm run dist

# JS unit tests
npm run js-test

# Full test suite
npm run test

# Accessibility tests (requires docs server)
npm run start  # start the docs server first
npm run docs-accessibility
```

### 4. Stale cache issues

If errors persist after a fix or imports fail unexpectedly:

```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install

# Clean build artifacts
npm run clean
npm run dist
```
