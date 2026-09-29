# Migration between OUDS Web versions

> Tip: the [`@ouds/web-migrate`](https://www.npmjs.com/package/@ouds/web-migrate) CLI can automatically update project files across most breaking changes below. Run `npx @ouds/web-migrate "src/**/*.{css,scss,html}"` and review the diff.

## v1.5.0

### Breaking changes

- **Badges**: `.badge-disabled` removed (deprecated since v1.4.0), use `.disabled`
- **Interactions**: `.pe-none` / `.pe-auto` replaced by `.pointer-events-none` / `.pointer-events-auto`
- **Shadow**: `.shadow-default` removed (deprecated since v1.4.0), use `.shadow-elevated`

### Deprecated (removal planned in v1.6.0)

- **Links**: `.colored-bg` deprecated in favor of `.link-on-colored-bg`
- **Links**: `.back` deprecated in favor of `.link-previous`

### New

- **Buttons**: Assistant button implemented
- **Buttons**: `.btn-small` size added
- **Links**: `.link-external` class for external links
- **Links**: `.link-compact` class for more compact links

### Components

- **Footer**, **Header**: draft colors now use OUDS Web CSS variables instead of hardcoded values (no outward change, but custom color overrides may need updating)
- **Table**: colors updated to use OUDS Web variables (same note as above)

### Sass mixins

- `list-unstyled` mixin no longer sets a margin bottom

## v1.4.0

### Breaking changes

- **Chips**: all chips now use `inline-flex` instead of `flex` display (may break custom layouts depending on implementation)
- **Text area**: the `[placeholder]` attribute is now mandatory

### Deprecated (removal planned in v1.5.0)

- **Badges**: `.badge-disabled` deprecated in favor of `.disabled`
- **Shadow**: `.shadow-default` deprecated in favor of `.shadow-elevated`

### New

- **Text area**: `.text-area-no-resize` class to disable resizing; component now supports a floating label like text input
- **Text utilities**: font size labels `.fs-lxl`, `.fs-ll`, `.fs-lm`, `.fs-ls` added

### Sass variables renamed

- `$ouds-elevation-*-default` → `$ouds-elevation-*-elevated` (default, x, y, blur, spread variants)
- `$ouds-control-item-size-min-height` → `$ouds-control-item-size-min-height-default`
- `$ouds-control-item-space-padding-block-top-error-text` → `$ouds-control-item-space-padding-block-top-helper-text`
- `$ouds-control-item-border-radius` → `$ouds-control-item-border-radius-default`
- `$ouds-badge-space-inset` → `$ouds-badge-space-inset-medium-large`
- `$ouds-size-max-width-type-*` → `$ouds-size-max-width-*` (body, display, heading variants across all sizes/breakpoints)

## v1.3.0

### Breaking changes

- **Breakpoint prefixes**: responsive utilities now use a breakpoint prefix instead of an infix. All classes using `.{utility}-{breakpoint}-{value}` must become `.{breakpoint}:{utility}-{value}`. Examples:
  - `.d-sm-none` → `.sm:d-none`
  - `.d-md-flex` → `.md:d-flex`
  - `.flex-lg-row` → `.lg:flex-row`
  - `.col-md-6` → `.md:col-6`
  - `.float-xl-end` → `.xl:float-end`
  - `.object-fit-2xl-cover` → `.2xl:object-fit-cover`
- **Sass**: `generate-utility()` mixin signature changed, `$is-rfs-media-query` parameter removed
- **Sass**: `scss/vendor/_rfs.scss` and the `font-size()` mixin removed, use `get-font-size()` instead

### New

- **Table**: draft table component added (from Boosted, with small tweaks; will change in the future)
- **Tools**: `@ouds/web-migrate` CLI tool introduced to automate migrations

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
