# Migration from Boosted to OUDS Web

## Package rename

- NPM: `boosted` → `@ouds/web-common` + `@ouds/web-orange`
- CSS: `boosted.css` → `ouds-web.css`
- JS: `boosted.bundle.js` → `ouds-web.bundle.js`
- All file renames follow the same pattern: `boosted-*` → `ouds-web-*`

Bootstrap compatibility mode available via `ouds-web-bootstrap.css`.

## Foundations

- Orange color changed from `#f16e00` to `#f15e00`
- New color modes: `root` and `root-inverted` (complementary to `light`/`dark`)
- Focus-visible polyfill removed (use native `:focus-visible`)

## Fonts

- No longer ships Helvetica Neue files locally
- Fonts loaded from CDN (shared cache across projects)
- Remove: `orange-helvetica.*.css`, Helvetica woff2 files, `@import "orange-helvetica"` from Sass

## Typography

- Body font sizes are now responsive
- `max-width` added on all font references (use `.mw-none` to remove)
- Display classes: `.display-{1-6}` → `.display-{small|medium|large}`
- `.initialism` removed
- Spacing values use `px` instead of `em`

## Layout

- **Breakpoints changed**: `2xs` and `3xl` added, `xxl` → `2xl`, values changed
- **Container**: `.container-xxl` → `.container-fluid.container-max-width`
- **Gutters**: numeric values → token names (`0` → `none`, `1` → `2xsmall`, `2` → `small`, `3` → `large`, `4` → `2xlarge`, `5` → `4xlarge`)
- `.container` and `.container-{breakpoint}` removed (available with `$enable-bootstrap-compatibility`)

## Icons

- New functional icons via SVG sprite
- New bicolor accessible warning icon

## Components

### Alerts

- New classes: `.alert-message`, `.alert-label`, `.alert-accent`, `.alert-neutral`, `.alert-positive`, `.alert-negative`
- DOM structure changed significantly
- Removed: `.alert-sm`, `.alert-success`, `.alert-danger`, `.alert-dismissible`, `.alert-heading`

### Buttons

- New variants: `.btn-default`, `.btn-strong`, `.btn-brand`, `.btn-minimal`, `.btn-negative`
- Navigation buttons: `.btn-next`, `.btn-prev`
- Colored backgrounds: `.btn-on-colored-bg`
- Removed: `.btn-primary`, `.btn-secondary`, `.btn-outline-*`, `.btn-lg`, `.btn-sm` (available with Bootstrap compat)

### Form controls

- New `.control-item-*` pattern for checkboxes, radios, switches
- `.form-check` → `.control-items-list` + `.checkbox-item` / `.radio-item` / `.switch-item`
- `.form-control` → component-specific classes

### Tags

- `.badge` → `.tag` with new classes: `.tag-info`, `.tag-positive`, `.tag-negative`, `.tag-warning`

### Chips

- New component: `.chip`, `.chip-filter`, `.chip-suggestion`, `.chips-container`
