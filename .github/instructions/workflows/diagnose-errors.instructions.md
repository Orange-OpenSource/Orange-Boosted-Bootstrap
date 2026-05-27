---
name: diagnose-errors-workflow
description: >
  Diagnostic workflow for build, lint, CI, and test errors in OUDS Web.
  Covers Stylelint, ESLint, Sass build, token errors, JS test failures, and Pa11y.
  Use when encountering any error during development or CI.
applyTo: "**"
excludeAgent: "code-review"
---

# Workflow: Diagnose Errors

## Step 1 — Identify the error category

| Error signal | Category | Jump to |
|---|---|---|
| `Unexpected property "border-radius"` | Stylelint | §2a |
| `Unexpected value "none" for "border"` | Stylelint | §2a |
| `Expected variable to have default value` | Stylelint | §2b |
| `/* stylelint */` in compiled CSS | Stylelint comments | §2c |
| `Extra semicolon` / `Trailing comma` | ESLint | §2d |
| `Unexpected console statement` | ESLint | §2d |
| `Can't find stylesheet to import` | Sass build | §2e |
| `Undefined variable "$ouds-..."` | Token error | §2f |
| `AssertionError` / test failure | JS tests | §2g |
| `Violation:` with URL + rule | Pa11y | §2h |

---

## §2a — Stylelint: forbidden properties

**Problem**: Direct `border-radius`, `transition`, or corner-radius properties are banned.

**Fix**: Use the corresponding mixin:

```scss
// ✗ → ✓
border-radius: 4px  →  @include border-radius($ouds-border-radius-default)
transition: X       →  @include transition(X)
```

**`border: none`** → use `border: 0`
**`lighten()`/`darken()`** → use the appropriate token variant

## §2b — Stylelint: missing `!default`

Every module-scope SCSS variable needs `!default`. Local variables inside mixins/functions are exempt.

## §2c — Stylelint comments leaking into CSS

Block comments (`/* */`) survive Sass compilation. Use double-slash comments for stylelint directives:

```scss
// stylelint-disable property-disallowed-list
border-radius: 0;
// stylelint-enable property-disallowed-list
```

## §2d — ESLint: JS style

| Error | Fix |
|---|---|
| Extra semicolon | Remove `;` |
| Trailing comma | Remove trailing `,` |
| Unexpected console | Remove `console.*` from `js/src/` |
| String concatenation | Use template literal |
| Missing `.js` extension | Add `.js` to import path |

## §2e — Sass: missing import

1. Run `npm install` (workspace symlinks may be missing)
2. Verify path uses `@ouds/web-common/scss/...` for common imports
3. Check `node_modules/` symlink exists

## §2f — Token: undefined variable

1. Search in `packages/<brand>/scss/tokens/_component.scss` and `_semantic.scss`
2. If absent → add to `_composite.scss` (only hand-editable token file)
3. Verify import order in `_index.scss` (raw → semantic → colors → composite → component)

## §2g — JS test failures

1. Run `npm run js-test` locally for full stack trace
2. Check if test expects an ARIA attribute or class name that changed
3. Check `js/coverage/index.html` for coverage gaps

## §2h — Pa11y accessibility failures

1. Run `npm run docs-accessibility` (requires local docs server)
2. Common issues: missing `role`/`aria-*`, insufficient contrast, missing `.visually-hidden`, removed focus styles

---

## Step 3 — Validate fix

```bash
npm run lint       # All lint rules pass
npm run dist       # CSS + JS build succeeds
npm run js-test    # Unit tests pass
npm run test       # Full suite
```

## Stale cache

If errors persist after a fix:

```bash
rm -rf node_modules && npm install
npm run clean && npm run dist
```
