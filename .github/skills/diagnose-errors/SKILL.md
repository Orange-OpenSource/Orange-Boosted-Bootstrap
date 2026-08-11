---
name: 'diagnose-errors'
description: 'Diagnostic workflow for build, lint, CI, and test errors in OUDS Web. Use this skill when encountering any error — Stylelint violations (border-radius, border:none, !default), ESLint failures (semicolons, console), Sass build errors (undefined variables, missing imports), CI job failures, JS test failures, or Pa11y accessibility violations. Provides a decision tree to identify the error category and step-by-step fix instructions.'
---

# Workflow: Diagnose Errors

## Decision tree

| Error signal | Category | Fix |
|---|---|---|
| `Unexpected property "border-radius"` | Stylelint | Use `@include border-radius()` |
| `Unexpected value "none" for "border"` | Stylelint | Use `border: 0` |
| `Expected variable to have default` | Stylelint | Add `!default` |
| `/* stylelint */` in CSS output | Comment leak | Use `//` not `/* */` |
| `Extra semicolon` | ESLint | Remove `;` |
| `Trailing comma` | ESLint | Remove trailing `,` |
| `Unexpected console statement` | ESLint | Remove from `js/src/` |
| `Can't find stylesheet to import` | Sass build | Run `npm install`, check `@ouds/web-common/scss/` path |
| `Undefined variable "$ouds-..."` | Token error | Check brand `_component.scss`/`_semantic.scss`, verify import order |
| `AssertionError` | JS test | Check changed ARIA attrs or class names |
| `Violation:` (URL + rule) | Pa11y | Missing role/aria-*, contrast, focus |

---

## Stylelint fixes

### Forbidden properties → use mixins

```scss
// ✗ → ✓
border-radius: 4px        → @include border-radius($ouds-border-radius-default)
transition: X             → @include transition(X)
border-top-left-radius: X → @include border-top-start-radius($val)
```

### lighten()/darken() → use token variant

### Stylelint comment leaking → use `//` comments

```scss
// stylelint-disable property-disallowed-list
border-radius: 0;
// stylelint-enable property-disallowed-list
```

---

## Token errors

1. Search variable in `packages/<brand>/scss/tokens/_component.scss` and `_semantic.scss`
2. If absent → add to `_composite.scss` (only hand-editable file)
3. Verify import order: `_raw → _semantic → _semantic-colors-custom-props → _composite → _component-colors-custom-props → _component`

---

## ESLint fixes

| Error | Fix |
|---|---|
| Extra semicolon | Remove `;` |
| Trailing comma | Remove `,` |
| Console statement | Remove from `js/src/` |
| String concatenation | Use template literal |
| Missing extension | Add `.js` to import |

---

## Validation

```bash
npm run lint       # All rules pass
npm run dist       # Build succeeds
npm run js-test    # Tests pass
```

## Stale cache

```bash
rm -rf node_modules && npm install
npm run clean && npm run dist
```
