---
name: 'code-review'
description: 'OUDS Web compliance code review. Use this skill when reviewing a diff, preparing a commit, or when asked to check code quality. Acts as a safety net that verifies all OUDS conventions are respected: token usage (no hardcoded values, no raw tokens), required mixins (border-radius, transition), accessibility (ARIA, focus-visible), multi-brand sync (tokens in all 3 brands), and file hygiene (no dist/, no auto-gen edits). Invoke proactively before any commit or PR submission.'
---

# Code Review (OUDS Compliance)

## Purpose

This skill is a safety net. It catches OUDS convention violations that other skills might have missed. Invoke it before committing or when reviewing diffs.

---

## Checklist

For each changed file in the diff, verify:

### SCSS files (`**/*.scss`)

- [ ] **No hardcoded values** — colors (`#xxx`), spacing (`16px`), dimensions must use tokens
- [ ] **No raw tokens** — `$core-ouds-*`, `$core-orange-*`, `$core-sosh-*` never in component SCSS
- [ ] **Mixins used** — `@include border-radius()` and `@include transition()` (never direct properties)
- [ ] **`border: 0`** — not `border: none`
- [ ] **No `lighten()`/`darken()`** — use token variant
- [ ] **`!default` on variables** — every module-scope SCSS variable
- [ ] **Colors via CSS custom props** — `var(--#{$prefix}color-*)` for dark mode
- [ ] **`color-mode()` mixin** — not raw `[data-bs-theme]` or `prefers-color-scheme`
- [ ] **`#{$ouds-root-selector}`** — not `:root` directly
- [ ] **`// OUDS mod:`** comment on Bootstrap deviations

### JavaScript files (`js/src/**/*.js`)

- [ ] **No semicolons**
- [ ] **No trailing commas**
- [ ] **Template literals** (not concatenation)
- [ ] **`.js` extension** on imports
- [ ] **No `console.*`** in `js/src/`
- [ ] **`'use strict'`** at top
- [ ] **Extends `BaseComponent`** (if it's a component)

### HTML/MDX files

- [ ] **Semantic elements** — `<button>` for actions, `<a>` for links
- [ ] **ARIA attributes** — correct for the interaction pattern
- [ ] **`.visually-hidden`** — not `display: none` for SR content
- [ ] **`data-bs-theme`** — not `prefers-color-scheme` for color modes

### Token/brand files (`packages/**`)

- [ ] **Auto-generated files not modified** — `_raw.scss`, `_semantic.scss`, `_component.scss`, `_*-custom-props.scss`
- [ ] **New tokens in all 3 brands** — if a new `$ouds-<comp>-*` was added
- [ ] **Import order preserved** — in `_index.scss`

### General

- [ ] **No `dist/` files** in the diff
- [ ] **No JS in `packages/<brand>/`** — JS is shared
- [ ] **Focus visible** — `@include focus-visible()` on interactive elements
- [ ] **Touch targets** — 44×44px minimum on new interactive elements

---

## How to use

1. Run `git diff --stat` to see changed files
2. For each file category, apply the relevant checklist section
3. Report violations with file, line, and suggested fix
4. Classify: ERROR (must fix) vs WARNING (should fix)

---

## Report format

```
## Code Review: OUDS Compliance

### ❌ Errors (must fix before merge)
- `scss/_buttons.scss:42` — hardcoded `padding: 8px` → use `$ouds-space-*` token
- `js/src/tooltip.js:15` — semicolon present → remove

### ⚠️ Warnings (should fix)
- `scss/_card.scss:88` — missing `// OUDS mod:` on Bootstrap override

### ✅ Passed
- Token cross-brand check: all present
- No dist/ files in diff
- ARIA attributes correct
```
