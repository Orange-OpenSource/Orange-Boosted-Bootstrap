---
name: create-component-workflow
description: >
  Step-by-step workflow for creating a new SCSS and/or JavaScript component in OUDS Web.
  Use when scaffolding a new UI component, form component, or interactive element.
applyTo: "**"
excludeAgent: "code-review"
---

# Workflow: Create a New Component

## Before you start

- Is this component truly new, or a variant of an existing one?
- Does it need JavaScript (toggle, dismiss, expand), or is it CSS-only?
- Do component tokens already exist in `packages/*/scss/tokens/_component.scss`?

---

## Step 1 — Create the SCSS file

Create `scss/_my-component.scss` (or `scss/forms/_my-component.scss` for form components).

Follow the structural pattern documented in `components.instructions.md`:
1. Root-level `#{$ouds-root-selector}` block for shared variables
2. Main `.my-component` class with `scss-docs-start/end` markers
3. CSS custom properties declared at top, consumed via `var()`
4. States override variables, not properties
5. Focus state via `@include focus-visible()`
6. Disabled state with `aria-disabled` support

## Step 2 — Import in brand entry points

Add the import to `packages/<brand>/scss/ouds-web.scss` for **all 3 brands**:

```scss
@import "@ouds/web-common/scss/my-component";
```

For form components, also add to `scss/_forms.scss`.

## Step 3 — Add component tokens

If new token variables are needed:

- **For composite tokens** (elevation, fonts, icons): add to each `packages/<brand>/scss/tokens/_composite.scss`
- **For temporary tokens** waiting on design pipeline: add to `scss/_variables.scss` with `// TODO:` comment
- **Never edit** `_raw.scss`, `_semantic.scss`, or `_component.scss` — they're auto-generated

Each brand can have different values for the same token.

## Step 4 — Add ARIA and accessibility

Match the interaction pattern to required ARIA:

| Pattern | Required |
|---|---|
| Toggle open/closed | `aria-expanded` + `aria-controls` |
| Icon-only button | `aria-label` + `aria-hidden` on icon |
| Dynamic update | `aria-live="polite"` or `role="status"` |
| Disabled | `aria-disabled="true"` |
| Loading | `aria-busy="true"` |

## Step 5 — Create JS component (if interactive)

Create `js/src/my-component.js` extending `BaseComponent`. See `javascript.instructions.md` for the full template.

Register in `js/index.esm.js` and `js/index.umd.js`.

## Step 6 — Write unit tests

Create `js/tests/unit/my-component.spec.js` with Jasmine (`describe`/`it`/`expect`).

## Step 7 — Create documentation

Create `site/src/content/docs/components/my-component.mdx` with examples for each variant.

## Step 8 — Build and verify

```bash
npm run dist        # Build CSS + JS
npm run lint        # Lint
npm run js-test     # Unit tests
npm run start       # Verify all 3 brands visually
```

Check: light/dark mode, RTL, all variants, all 3 brand servers.

## Pre-PR checklist

- Design tokens used (no hardcoded values)
- `@include border-radius()` and `@include transition()` (no direct properties)
- `border: 0` (not `border: none`)
- ARIA attributes correct
- `@include focus-visible()` on `:focus-visible`
- Colors use `var(--#{$prefix}color-*)` (dark mode compatible)
- No physical directional hardcoding (RTL-safe)
- Tokens present in all 3 brands
- `npm run lint` passes
- `npm run dist` succeeds
- No `dist/` files committed
