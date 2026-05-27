---
name: 'create-component'
description: 'Step-by-step workflow for creating a new SCSS and/or JavaScript component in OUDS Web. Use this skill when scaffolding a new UI component, form component, or interactive element from scratch. Covers SCSS file structure, brand entry point imports, token setup across 3 brands, ARIA requirements, JS BaseComponent boilerplate, unit tests, documentation page, and the full build/verify/checklist process.'
---

# Workflow: Create a New Component

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
| Disabled | `aria-disabled="true"` |
| Loading | `aria-busy="true"` |

### 5. JS component (if interactive)

Create `js/src/my-component.js` extending `BaseComponent` (see `javascript-conventions` skill).

Register in `js/index.esm.js` and `js/index.umd.js`.

### 6. Unit tests

`js/tests/unit/my-component.spec.js` with Jasmine.

### 7. Documentation

`site/src/content/docs/components/my-component.mdx`

### 8. Build & verify

```bash
npm run dist && npm run lint && npm run js-test && npm run start
```

Check all 3 brands: light/dark, RTL, all variants.

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
