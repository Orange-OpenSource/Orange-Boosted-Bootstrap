---
name: 'using-ouds-web'
description: 'Provides comprehensive knowledge of the OUDS Web library (Orange Unified Design System for Web), a Bootstrap-based CSS/JS framework for building Orange-branded web interfaces. This skill should be used when generating HTML markup, CSS classes, or JavaScript code that uses OUDS Web components, utilities, layout system, or design tokens. Also use during migrations from Boosted, OB1, or older OUDS Web versions to look up correct OUDS Web component structure as replacement markup. It covers components (buttons, alerts, chips, forms, navigation), layout (grid, breakpoints, containers), utilities (spacing, colors, display, flex), and foundation (typography, color modes, CSS variables, Sass customization).'
---

# OUDS Web Library Reference

## Overview

OUDS Web is Orange's web implementation of the Orange Unified Design System. It is a fork of Bootstrap with significant modifications for Orange branding and accessibility.

Key differences from standard Bootstrap:

- **8 breakpoints** instead of 6: `2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`
- **Breakpoint prefix syntax** (v1.3.0+): responsive classes use `{breakpoint}:{utility}-{value}` prefix format, **not** the Bootstrap infix format `{utility}-{breakpoint}-{value}`. Example: `md:d-none`, `lg:col-6`, `sm:flex-row` (not `d-md-none`, `col-lg-6`, `flex-sm-row`)
- **OUDS design tokens** for spacing, typography, and colors (e.g., `none`, `3xsmall`, `2xsmall`, `xsmall`, `small`, `medium`, `large`, `xlarge`, `2xlarge`, `3xlarge`)
- **Semantic color system** with `bg-surface-*`, `text-*`, `border-*` token-based classes
- **4 color modes**: `light`, `dark`, `root`, `root-inverted` (set via `data-bs-theme`)
- **Orange-specific components**: header, footer, chips, tags, sticker, stepped-process, title-bar, skeleton, local-navigation, back-to-top, bullet-list, divider, quantity-selector
- **Assistant button** (`.btn-assistant`, v1.4.0+): AI-powered action button variant, distinct from standard/navigation buttons
- **Modified form components**: switch, checkbox, radio-button, text-input, text-area, select-input, password-input use `.control-item-*` pattern
- **CSS variable prefix**: `--bs-`
- **Container**: use `.container-fluid` (not fixed `.container`)
- **Rounded corner buttons**: opt-in via `.use-rounded-corner-buttons` on a parent container
- **Button variants**: `.btn-default`, `.btn-strong`, `.btn-brand`, `.btn-minimal`, `.btn-negative` (not Bootstrap's `.btn-primary`, `.btn-secondary`, etc.)

## Layout priority: grid > helpers > custom CSS

**Prefer OUDS Web grid and utilities over custom CSS, `<style>` blocks, or inline styles for layout, flexbox, spacing, sizing, alignment, and positioning whenever an equivalent class exists.** OUDS Web is a Bootstrap fork and ships both a 12-column grid and a full utility layer, so custom CSS should be the fallback described below.

Pick in this order:

1. **Grid first** — `.row`/`.col-*` (see [Grid](references/layout/grid.md)) for the page/section's overall structure: major regions, a repeating set of blocks (e.g. a list of cards), or form fields laid out in columns.
2. **Helpers second** — `d-flex`, `.vstack`/`.hstack`, `justify-content-*`, `gap-*`, `position-*`, etc. to align/space a handful of elements inside a single component (icon + label, a row of buttons, centering one element).
3. **Custom CSS last** — only if neither applies; prefer Sass variable/map overrides (see [Sass](references/getting-started/sass.md)) over hardcoded values.

Heuristic: structuring the page's major zones or a repeating set of blocks → grid. Aligning a few elements within one component → helpers.

Full decision table (need → class → tier) in [Layout utilities](references/layout/utilities.md#layout-decision-table). Nested grids are rare — see the note in [Grid](references/layout/grid.md#nesting).

## Quick start

OUDS Web ships as two npm packages you always need together: `@ouds/web-common` (shared JS/Sass) and one theme package for the brand's CSS/tokens. Pick **one** theme package depending on the project:

| Brand          | Theme package             |
| -------------- | -------------------------- |
| Orange         | `@ouds/web-orange`         |
| Orange Compact | `@ouds/web-orange-compact` |
| Sosh           | `@ouds/web-sosh`           |

A project must pick **one** theme and never mix several in the same codebase — see [Themes and brands](references/foundation/themes.md).

**Recommended: install via npm** (or yarn/bun):

```sh
npm install @ouds/web-common @ouds/web-orange
```

Then import the CSS and JS in your app, e.g.:

```js
import "@ouds/web-orange/dist/css/ouds-web.min.css";
import * as oudsWeb from "@ouds/web-common";
// or: import { Toast, Modal } from "@ouds/web-common";
```

For quick prototyping without a build step, the CDN can be used instead, replacing `web-orange` with the theme package matching your brand:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>OUDS Web</title>
    <link
      href="https://cdn.jsdelivr.net/npm/@ouds/web-orange@<version>/dist/css/ouds-web.min.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <h1>Hello, world!</h1>
    <script src="https://cdn.jsdelivr.net/npm/@ouds/web-common@<version>/dist/js/ouds-web.bundle.min.js"></script>
  </body>
</html>
```

Always pin `<version>` to a specific release (e.g. `1.4.0`) rather than leaving it floating.

## Reference documentation

### Getting started

- [Installation](references/getting-started/installation.md) - npm/yarn/Bun, NuGet, CDN, compiled/source download
- [Contents](references/getting-started/contents.md) - Compiled files structure
- [JavaScript](references/getting-started/javascript.md) - Components requiring JS, plugin usage, data attributes, API
- [Sass](references/getting-started/sass.md) - Sass customization, variables, maps, mixins
- [Accessibility](references/getting-started/accessibility.md) - Accessibility guidelines
- [Browsers & devices](references/getting-started/browsers-devices.md) - Supported browsers
- [Component versioning](references/getting-started/component-versioning.md) - Version tracking
- [Migration](references/getting-started/migration.md) - Migration from previous versions
- [Migration from Boosted](references/getting-started/migration-from-boosted.md) - Boosted to OUDS Web

### Foundation

- [Approach](references/foundation/approach.md) - Design principles
- [Typography](references/foundation/typography.md) - Headings, body text, display, font mixins
- [Colors](references/foundation/colors.md) - Available raw colors
- [Color modes](references/foundation/color-modes.md) - Light/dark/root/root-inverted themes
- [Tokens](references/foundation/tokens.md) - Raw/semantic/composite/component token architecture
- [CSS variables](references/foundation/css-variables.md) - Custom properties
- [Options](references/foundation/options.md) - Sass configuration options
- [Reboot](references/foundation/reboot.md) - CSS reset and base styles
- [Form validation](references/foundation/form-validation.md) - Validation styles
- [Component](references/foundation/component.md) - Base component architecture
- [Themes and brands](references/foundation/themes.md) - Orange, Orange Compact, Sosh themes

### Layout

- [Breakpoints](references/layout/breakpoints.md) - 8-tier responsive system
- [Containers](references/layout/containers.md) - Container-fluid usage
- [Grid](references/layout/grid.md) - 12-column flexbox grid
- [Columns](references/layout/columns.md) - Column sizing and ordering
- [Gutters](references/layout/gutters.md) - Gutter spacing
- [CSS grid](references/layout/css-grid.md) - CSS grid layout
- [Utilities](references/layout/utilities.md) - Layout utilities
- [Z-index](references/layout/z-index.md) - Z-index layers

### Components

- [Alerts](references/components/alerts.md) - Alert messages and inline alerts
- [Badges](references/components/badges.md) - Badge indicators
- [Breadcrumb](references/components/breadcrumb.md) - Navigation breadcrumbs
- [Bullet list](references/components/bullet-list.md) - Styled bullet lists
- [Buttons](references/components/buttons.md) - Buttons and navigation buttons
- [Checkbox](references/components/checkbox.md) - Checkbox controls
- [Chips](references/components/chips.md) - Filter and suggestion chips
- [Divider](references/components/divider.md) - Content dividers
- [Footer](references/components/footer.md) - Page footer
- [Header](references/components/header.md) - Responsive page header
- [Icon](references/components/icon.md) - SVG icon system
- [Links](references/components/links.md) - Link styles
- [Password input](references/components/password-input.md) - Password field with toggle
- [Radio button](references/components/radio-button.md) - Radio controls
- [Select input](references/components/select-input.md) - Select inputs
- [Skeleton](references/components/skeleton.md) - Loading placeholders
- [Switch](references/components/switch.md) - Toggle switches
- [Tags](references/components/tags.md) - Tag elements
- [Table](references/components/table.md) - Opt-in table styling (draft component)
- [Text area](references/components/text-area.md) - Multiline inputs
- [Text input](references/components/text-input.md) - Single-line inputs

### Not yet documented (do not invent markup)

The OUDS Web documentation site has placeholder ("Coming soon") pages for the following components — **no OUDS Web-specific markup, classes, or design guidance exists for them yet**: `accordion`, `back-to-top`, `card`, `carousel`, `close-button`, `collapse`, `dropdown`, `list-group`, `local-navigation`, `modal`, `nav-tab`, `navbar`, `offcanvas`, `pagination`, `popover`, `progress`, `quantity-selector`, `range`, `scrollspy`, `spinner`, `stepped-process`, `sticker`, `title-bar`, `toast`, `tooltip`.

If a task requires one of these, **tell the user it isn't documented in OUDS Web yet** instead of guessing markup or falling back to plain Bootstrap classes (OUDS Web's class names, tokens, and structure regularly diverge from Bootstrap, so a Bootstrap fallback would likely be wrong).

### Utilities

- [Figma tokens mapping](references/utilities/figma-tokens.md) - Mapping Figma design tokens to utility classes/variables
- [Aspect ratio](references/utilities/aspect-ratio.md) - Aspect ratio containers
- [Background](references/utilities/background.md) - Background utilities
- [Border](references/utilities/border.md) - Border utilities
- [Color](references/utilities/color.md) - Text color utilities
- [Display](references/utilities/display.md) - Display property
- [Flex](references/utilities/flex.md) - Flexbox utilities
- [Float](references/utilities/float.md) - Float positioning
- [Interaction](references/utilities/interaction.md) - User interaction
- [Object fit](references/utilities/object-fit.md) - Object-fit utilities
- [Opacity](references/utilities/opacity.md) - Opacity levels
- [Overflow](references/utilities/overflow.md) - Overflow behavior
- [Position](references/utilities/position.md) - Positioning
- [Shadow](references/utilities/shadow.md) - Box shadows
- [Sizing](references/utilities/sizing.md) - Width and height
- [Spacing](references/utilities/spacing.md) - Margin, padding, gap
- [Stack](references/utilities/stack.md) - Vertical/horizontal stacks
- [Stretched link](references/utilities/stretched-link.md) - Stretched clickable areas
- [Text](references/utilities/text.md) - Text alignment, wrapping, transform
- [Text truncation](references/utilities/text-truncation.md) - Text overflow
- [Vertical align](references/utilities/vertical-align.md) - Vertical alignment
- [Visibility](references/utilities/visibility.md) - Visibility toggling
- [Visually hidden](references/utilities/visually-hidden.md) - Screen reader only
- [Z-index](references/utilities/z-index.md) - Z-index utilities

## Quick search

```bash
grep -ri "btn-" references/components/buttons.md
grep -ri "breakpoint" references/layout/breakpoints.md
grep -ri "data-bs-theme" references/foundation/color-modes.md
grep -ri "control-item" references/components/
grep -ri "\.bg-" references/utilities/background.md
grep -ri "spacing\|margin\|padding" references/utilities/spacing.md
grep -ri "d-flex\|justify-content\|align-items\|flex-" references/utilities/flex.md
grep -ri "vstack\|hstack" references/utilities/stack.md
grep -ri "\.col-\|row-cols" references/layout/grid.md
grep -ri "sticky\|fixed-\|translate-middle" references/utilities/position.md
```

## Critical conventions

### Spacing tokens

Use OUDS token names instead of Bootstrap numeric values:

| Class pattern                      | Example                                                                                           | Meaning        |
| ---------------------------------- | ------------------------------------------------------------------------------------------------- | -------------- |
| `{p\|m}{t\|b\|s\|e\|x\|y}-{token}` | `p-medium`                                                                                        | padding medium |
| `gap-{token}`                      | `gap-xsmall`                                                                                      | flex/grid gap  |
| Tokens                             | `none`, `3xsmall`, `2xsmall`, `xsmall`, `small`, `medium`, `large`, `xlarge`, `2xlarge`-`5xlarge` |                |

### Color modes

```html
<div data-bs-theme="light">Always light</div>
<div data-bs-theme="dark">Always dark</div>
<div data-bs-theme="root">Follows page theme</div>
<div data-bs-theme="root-inverted">Opposite of page theme</div>
```

### Form components pattern

OUDS Web form components use `.control-item-*` classes:

```html
<ul class="control-items-list">
  <li class="switch-item">
    <div class="control-item-assets-container">
      <input
        class="control-item-indicator"
        type="checkbox"
        role="switch"
        id="mySwitch"
      />
    </div>
    <div class="control-item-text-container">
      <label class="control-item-label" for="mySwitch">Label</label>
    </div>
  </li>
</ul>
```

### Button variants

```html
<button class="btn btn-default">Default</button>
<button class="btn btn-strong">Strong</button>
<button class="btn btn-brand">Brand</button>
<button class="btn btn-minimal">Minimal</button>
<button class="btn btn-negative">Negative</button>
<!-- Navigation buttons -->
<a class="btn btn-next btn-default" href="#">Next</a>
<!-- Assistant button (AI-powered actions, v1.4.0+) -->
<button class="btn btn-assistant">Assistant</button>
<!-- On colored backgrounds, add btn-on-colored-bg -->
<button class="btn btn-default btn-on-colored-bg">On colored bg</button>
```

### Icons (SVG sprite)

```html
<svg width="1.5rem" height="1.5rem" fill="currentColor" aria-hidden="true">
  <use xlink:href="path/to/ouds-web-sprite.svg#icon-name"></use>
</svg>
```

### Reminder

Layout, flexbox, spacing, sizing, and positioning almost always have a matching OUDS Web class. Grid (`.row`/`.col-*`) for page/section structure, then helpers (`d-flex`, `.vstack`/`.hstack`, `gap-*`, etc.) for alignment inside a component — see [Layout priority](#layout-priority-grid--helpers--custom-css). Reach for a class before writing a Sass rule, a `<style>` block, or an inline `style="..."` attribute.

