---
name: 'create-component'
description: 'Step-by-step workflow for creating a new SCSS and/or JavaScript component in OUDS Web. Use this skill when scaffolding a new UI component, form component, or interactive element from scratch. Covers SCSS file structure, brand entry point imports, token setup across 3 brands, ARIA requirements, JS BaseComponent boilerplate, unit tests, documentation page, and the full build/verify/checklist process.'
---

# Workflow: Create a New Component

For the end-to-end human workflow, including design research, documentation updates, and review handoffs, see the [component creation guide](../../../dev-docs/component-creation.new.md).

## Before you start

- Is this truly new, or a variant of an existing component?
- CSS-only or interactive (needs JS)?
- Do component tokens already exist?

---

## Steps

### 1. Create SCSS file

`scss/_my-component.scss` (or `scss/forms/_my-component.scss`)

Follow the structure in the `component-patterns` skill:
- Root-level `#{$ouds-root-selector}` for shared vars
- `scss-docs-start/end` markers
- CSS custom properties at top, consumed via `var()`
- States override variables
- `@include focus-visible()` on `:focus-visible`

### 2. Import in brand entry points

Add to `packages/<brand>/scss/ouds-web.scss` for **all 3 brands**:
```scss
@import "@ouds/web-common/scss/my-component";
```

### 3. Add tokens

- Composite tokens → each `packages/<brand>/scss/tokens/_composite.scss`
- Temporary tokens → `scss/_variables.scss` with `// TODO:` comment
- Never edit `_raw.scss`, `_semantic.scss`, `_component.scss`

### 4. ARIA & accessibility

| Pattern | Required |
|---|---|
| Toggle | `aria-expanded` + `aria-controls` |
| Icon-only | `aria-label` + `aria-hidden` on icon |
| Dynamic | `aria-live="polite"` / `role="status"` |
| Disabled native control | Use the native `disabled` attribute |
| Disabled custom control | `aria-disabled="true"` and suppress activation in code |
| Loading | `aria-busy="true"` |

### 5. JS component (if interactive)

Create `js/src/my-component.js` extending `BaseComponent` (see `javascript-conventions` skill).

Register in `js/index.esm.js` and `js/index.umd.js`.

### 6. Unit tests

`js/tests/unit/my-component.spec.js` with Jasmine.

### 7. Documentation

`site/src/content/docs/components/my-component.mdx`

### 8. Build & verify

- Run `npm run dist` and `npm run lint` for build and lint checks.
- For JavaScript changes, run `npm run js` followed by `npm run js-test`.
- For CSS changes that affect snapshots, refresh them with `npm run css-snapshot-refresh`.
- Use `npm run start` for local visual checks; it starts the brand development servers and is not a test.

Check all applicable brands, themes, directions (including RTL), and variants.

---

## Pre-PR checklist

- [ ] Tokens used (no hardcoded values)
- [ ] `@include border-radius()` / `@include transition()`
- [ ] `border: 0` not `border: none`
- [ ] ARIA attributes correct
- [ ] `@include focus-visible()`
- [ ] Colors via `var(--#{$prefix}color-*)`
- [ ] No physical directions (RTL-safe)
- [ ] Tokens in all 3 brands
- [ ] `npm run lint` + `npm run dist` pass
- [ ] No `dist/` committed
