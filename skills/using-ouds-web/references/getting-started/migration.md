# Migration between OUDS Web versions

## v1.2.0

### Components

- **Footer**: Draft footer component added (temporary, will change)
- **Header**: Draft header component added (temporary, will change)
- **Navigation button**: New implementation
- **Skeleton**: New component with skeleton state on supported components

## v1.1.0

### Breaking changes

- **Form validation**: `.was-validated` and `.is-invalid` removed. Now uses `:user-invalid` for browser validation and `aria-invalid=true` for manual validation
- **Clearfix**: `.clearfix` helper and `clearfix()` mixin removed, use `.d-flow-root`
- **Sass functions**: `add` and `subtract` removed, use `calc` instead
- **Aspect ratio**: `.ratio` replaced by `.ratio-*` utilities applied directly on target element
- **Brand**: Orange Compact brand added

### New

- `.d-flow-root` display utility
- Grid measure spacing utilities

## v1.0.0

### Breaking changes from Boosted

- Custom fonts loaded from CDN
- New OUDS design tokens for spacing, typography
- 8 breakpoints (2xs, xs, sm, md, lg, xl, 2xl, 3xl) replacing Bootstrap's 6
- `.container-fluid` as default container
- New button variants: `.btn-default`, `.btn-strong`, `.btn-brand`, `.btn-minimal`, `.btn-negative`
- Form components use `.control-item-*` pattern
- Display headings: `.display-{1-6}` replaced by `.display-{small|medium|large}`
