# Accessibility — OUDS Web

> WCAG 2.1 Level AA compliance guide for OUDS Web components.
> For a quick overview, see the [Accessibility section in AGENTS.md](../AGENTS.md#accessibility-requirements).

---

## Table of contents

1. [Standards and compliance](#standards-and-compliance)
2. [Focus management](#focus-management)
3. [Keyboard navigation](#keyboard-navigation)
4. [ARIA patterns per component](#aria-patterns-per-component)
5. [Color and contrast](#color-and-contrast)
6. [Dark mode and color modes](#dark-mode-and-color-modes)
7. [Motion and animation](#motion-and-animation)
8. [Touch target sizing](#touch-target-sizing)
9. [Visually hidden content](#visually-hidden-content)
10. [RTL layout support](#rtl-layout-support)
11. [Testing strategy](#testing-strategy)
12. [Checklist for contributors](#checklist-for-contributors)

---

## Standards and compliance

OUDS Web targets **WCAG 2.1 Level AA** as its minimum compliance level. Every component, every contribution, every PR must meet this bar. Accessibility is enforced through automated testing (Pa11y-CI with axe-core, VNU HTML validation), unit tests (ARIA attribute assertions, keyboard navigation), Stylelint rules, and a mandatory human a11y review gate on every PR.

Key WCAG success criteria that drive the implementation:

| SC | Name | How OUDS Web addresses it |
|---|---|---|
| 1.3.1 | Info and Relationships | Semantic HTML, ARIA roles set programmatically by JS components |
| 1.4.3 | Contrast (Minimum) | `$min-contrast-ratio: 4.5` in Sass, token-driven colors |
| 1.4.11 | Non-text Contrast | 3:1 for UI components and graphical objects |
| 2.1.1 | Keyboard | All interactive components operable via keyboard |
| 2.1.2 | No Keyboard Trap | Focus trap only in modal contexts, Escape always available |
| 2.2.1 | Timing Adjustable | Toast pauses auto-hide on focus/hover |
| 2.2.2 | Pause, Stop, Hide | Carousel play/pause button |
| 2.3.3 | Animation from Interactions | `prefers-reduced-motion` respected via transition mixin |
| 2.4.3 | Focus Order | Focus restoration to trigger on modal/offcanvas close |
| 2.4.7 | Focus Visible | Dual-ring focus indicator on all focusable elements |
| 2.5.8 | Target Size (Minimum) | `target-size()` mixin enforces 44x44px hit areas |
| 4.1.2 | Name, Role, Value | ARIA attributes managed dynamically by JS components |

---

## Focus management

### The OUDS dual-ring focus indicator

OUDS Web replaces Bootstrap's default box-shadow focus ring with a **dual-ring system** — an outer `outline` plus an inner `box-shadow`. This is the primary focus indicator across the entire project.

**Mixin:** `scss/mixins/_focus.scss`

```scss
@mixin focus-visible($color, $width, $offset, $box-width, $box-color) {
  isolation: isolate;
  outline: $width solid $color;
  outline-offset: $offset;
  box-shadow: 0 0 0 $box-width $box-color;
  @include transition($transition-focus);
}
```

**Parameters and defaults:**

| Parameter | Default | Source |
|---|---|---|
| `$color` | `var(--bs-color-border-focus)` | Semantic color token (black in light, gray-160 in dark) |
| `$width` | `3px` (`$focus-visible-outer-width`) | `scss/_variables.scss:594` |
| `$offset` | `2px` (`$focus-visible-outer-offset`) | `scss/_variables.scss:595` |
| `$box-width` | `2px` (`$focus-visible-inner-width`) | `scss/_variables.scss:593` |
| `$box-color` | `var(--bs-color-border-focus-inset)` | Semantic color token (white in light, gray-880 in dark) |

**Global application** — every focusable element gets this by default via `scss/_reboot.scss`:

```scss
:focus-visible {
  @include focus-visible();
}
```

**Usage in components:** The mixin is called explicitly in carousel controls, chips, form control items (checkboxes, radios, switches), form range inputs, star rating, and form validation states. Additionally, 19 component SCSS files use the native `:focus-visible` pseudo-class for custom focus state overrides.

### Bootstrap `.focus-ring` helper (compatibility)

The Bootstrap `.focus-ring` helper class still exists (`scss/helpers/_focus-ring.scss`) but OUDS sets `$focus-ring-box-shadow: null`, effectively disabling Bootstrap's default focus ring. The OUDS `focus-visible()` mixin replaces it. The `.focus-ring-*` utility classes (`.focus-ring-primary`, `.focus-ring-danger`, etc.) remain available for edge cases.

### Focus trapping

**Utility:** `js/src/util/focustrap.js`

FocusTrap constrains keyboard focus within a container element. It is used by **Modal** and **Offcanvas** only.

How it works:
1. Listens for `focusin` on `document` — if focus moves outside the trap, it redirects back.
2. Listens for `keydown` (Tab key only) — records whether the user is tabbing forward or backward.
3. When focus escapes, redirects to the **first** focusable child (forward Tab) or **last** focusable child (backward Tab).
4. If no focusable children exist, focuses the container element itself.

Focusable children are determined by `SelectorEngine.focusableChildren()`:
- Matches: `a`, `button`, `input`, `textarea`, `select`, `details`, `[tabindex]`, `[contenteditable="true"]`
- Excludes: elements with negative `tabindex`, disabled elements, invisible elements

Config options:

| Option | Type | Default | Purpose |
|---|---|---|---|
| `autofocus` | `boolean` | `true` | Focus the trap element immediately on activation |
| `trapElement` | `element` | `null` | The DOM element to trap focus within |

Lifecycle:
- `activate()` — registers listeners, optionally focuses the trap element
- `deactivate()` — removes all `.bs.focustrap` event listeners

### Focus restoration

Both Modal and Offcanvas restore focus to the **trigger element** when closed:

```javascript
// Pattern used by both components (Data API handler)
EventHandler.one(target, EVENT_HIDDEN, () => {
  if (isVisible(this)) {
    this.focus() // 'this' is the trigger element
  }
})
```

The `isVisible()` check prevents focusing hidden elements. This implements WCAG 2.4.3 (Focus Order).

### Rules for contributors

- **Never remove `:focus-visible` styles** without providing an equivalent visible focus indicator.
- **Always use `@include focus-visible()`** for custom focus states — do not write raw `outline` or `box-shadow` for focus.
- **Use `$focus-visible-zindex: 5`** when focus indicators are clipped by overflow or stacking contexts.
- **Modal-like components must trap focus** — use `FocusTrap` utility.
- **Components that open overlays must restore focus** to the trigger element on close.

---

## Keyboard navigation

### Per-component keyboard support

| Component | Keys | Behavior |
|---|---|---|
| **Modal** | `Escape` | Closes modal (if `keyboard: true`); otherwise triggers visual bounce |
| | `Tab` / `Shift+Tab` | Cycles within modal (focus trap) |
| **Offcanvas** | `Escape` | Closes offcanvas (if `keyboard: true`); otherwise fires `hidePrevented` event |
| | `Tab` / `Shift+Tab` | Cycles within offcanvas (focus trap) |
| **Dropdown** | `ArrowDown` | Opens menu (if closed), moves focus to next item |
| | `ArrowUp` | Opens menu (if closed), moves focus to previous item |
| | `Escape` | Closes menu, returns focus to toggle button |
| | `Tab` | Closes menu, allows normal Tab navigation |
| **Tab** | `ArrowRight` / `ArrowDown` | Activates and focuses next tab (wraps around) |
| | `ArrowLeft` / `ArrowUp` | Activates and focuses previous tab (wraps around) |
| | `Home` | Activates and focuses first tab |
| | `End` | Activates and focuses last tab |
| **Carousel** | `ArrowLeft` | Previous slide (next in RTL) |
| | `ArrowRight` | Next slide (previous in RTL) |
| **Collapse** | Native `Enter` / `Space` | Toggles via native `<button>` behavior |
| **Alert** | Native `Enter` / `Space` | Dismisses via native `<button>` behavior |
| **Toast** | Focus (`Tab` in) | Pauses auto-hide timer |
| **Tooltip** | Focus (`Tab` in) | Shows tooltip (with `focus` trigger) |

Components without custom keyboard handlers (Scrollspy, OrangeNavbar, QuantitySelector) rely on native HTML element behavior (`<button>`, `<input>`, `<a>`).

### Shared keyboard utilities

**`getNextActiveElement()`** (`js/src/util/index.js`) — Used by Dropdown, Tab, and Carousel for cycling through item lists. Supports forward/backward direction and optional wrapping.

### Rules for contributors

- All interactive elements must be operable with keyboard alone.
- Use `<button>` for actions and `<a>` for navigation — never use `<div>` or `<span>` for interactive elements.
- Arrow keys within form `<input>` and `<textarea>` must not be captured — always check `event.target.tagName` (see Dropdown and Carousel patterns).
- Use `event.preventDefault()` and `event.stopPropagation()` appropriately to prevent arrow keys from scrolling the page.
- Use `{ preventScroll: true }` when calling `.focus()` during arrow key navigation to avoid unintended page scrolling.

---

## ARIA patterns per component

### Modal — Dialog (Modal) pattern

**JS:** `js/src/modal.js` | **Reference:** [WAI-ARIA Dialog (Modal)](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)

| Attribute | On show | On hide |
|---|---|---|
| `role="dialog"` | Set | Removed |
| `aria-modal="true"` | Set | Removed |
| `aria-hidden` | Removed | Set to `true` |

Focus: Trapped via FocusTrap. Restored to trigger on close.

### Offcanvas — Dialog (Modal) pattern

**JS:** `js/src/offcanvas.js` | **Reference:** [WAI-ARIA Dialog (Modal)](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)

| Attribute | On show | On hide |
|---|---|---|
| `role="dialog"` | Set | Removed |
| `aria-modal="true"` | Set | Removed |

Focus: Trapped via FocusTrap (when `!config.scroll || config.backdrop`). Restored to trigger on close. Responsive behavior: auto-hides when CSS `position` changes from `fixed` (breakpoint change detected via `[aria-modal][class*=show]` selector).

### Dropdown — Menu Button pattern

**JS:** `js/src/dropdown.js` | **Reference:** [WAI-ARIA Menu Button](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/)

| Attribute | On show | On hide |
|---|---|---|
| `aria-expanded` on toggle | `true` | `"false"` |

Focus: Menu items navigated with arrow keys via `_selectMenuItem()`. Escape returns focus to toggle.

### Collapse / Accordion — Disclosure pattern

**JS:** `js/src/collapse.js` | **Reference:** [WAI-ARIA Disclosure](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/)

| Attribute | On show | On hide |
|---|---|---|
| `aria-expanded` on trigger(s) | `true` | `false` |

Managed by `_addAriaAndCollapsedClass()` — iterates all triggers pointing to the collapsible and syncs state. When used with a `parent` option, implements the Accordion pattern.

### Tab — Tabs pattern

**JS:** `js/src/tab.js` | **Reference:** [WAI-ARIA Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)

This is the most ARIA-rich component. It programmatically sets roles and attributes at initialization via `_setInitialAttributes()`:

| Attribute | Target | Value |
|---|---|---|
| `role="tablist"` | Parent container | Set on init if not present |
| `role="presentation"` | Wrapper elements (`<li>`) | Set on init if wrapper differs from tab |
| `role="tab"` | Tab elements | Set on init if not present |
| `role="tabpanel"` | Panel elements | Set on init if not present |
| `aria-selected` | Active tab: `true`; inactive: `false` | Updated on activation |
| `tabindex` | Active tab: removed; inactive: `"-1"` | Roving tabindex pattern |
| `aria-labelledby` | Panel | Set to associated tab's `id` on init |

Uses **automatic activation** — arrow key navigation immediately shows the target tab's panel. Disabled tabs are filtered out. Uses `_setAttributeIfNotExists()` helper to avoid overwriting author-provided attributes.

### Tooltip — Tooltip pattern

**JS:** `js/src/tooltip.js` | **Reference:** [WAI-ARIA Tooltip](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)

| Attribute | On show | On hide |
|---|---|---|
| `aria-describedby` on trigger | Set to tip's auto-generated `id` | Removed |

The `_fixTitle()` method:
1. Moves native `title` to `data-bs-original-title` (prevents double tooltip).
2. Sets `aria-label` on the trigger if it has no text content and no existing `aria-label`.

Popover (`js/src/popover.js`) extends Tooltip and inherits all ARIA behavior.

### Button — Toggle Button pattern

**JS:** `js/src/button.js`

| Attribute | On toggle |
|---|---|
| `aria-pressed` | Synced with `.active` class toggle |

### Carousel — Carousel pattern (OUDS-enhanced)

**JS:** `js/src/carousel.js`

| Attribute | Target | Behavior |
|---|---|---|
| `aria-current="true"` | Active slide indicator | Set on active; removed from previous |
| `aria-disabled="true"` + `tabindex="-1"` | Prev/next controls (non-button) | Set at first/last slide when `wrap=false` |
| `disabled` | Prev/next controls (`<button>`) | Set at first/last slide when `wrap=false` |
| `title` + `.visually-hidden` text | Play/pause button | Updated with localized labels |

The play/pause button reads localized text from `data-bs-play-text` / `data-bs-pause-text` attributes (defaults: `"Play Carousel"` / `"Pause Carousel"`).

### Alert and Toast — Alert / Status patterns

**JS:** `js/src/alert.js`, `js/src/toast.js`

These components manage **no ARIA attributes dynamically**. All semantics must be provided in HTML markup:

```html
<!-- Alert -->
<div class="alert alert-info" role="alert">...</div>

<!-- Toast -->
<div class="toast" role="status" aria-live="polite" aria-atomic="true">...</div>
```

Toast pauses its auto-hide timer on `focusin` and `mouseover` (WCAG 2.2.1).

### ARIA-based styling in SCSS

41 locations across 19+ SCSS files style elements based on ARIA attributes, ensuring visual state matches semantic state:

| ARIA Pattern | Usage | Purpose |
|---|---|---|
| `[aria-disabled="true"]` | Buttons, links, tags, carousel | Disabled appearance (muted colors, `pointer-events: none`) |
| `[aria-invalid="true"]` | Text inputs, select inputs, control items | Error/invalid styling, paired with `:user-invalid` |
| `[aria-expanded="true"]` | Navbar toggler | Expanded state styling |
| `[aria-pressed="true"]` | Chips | Pressed/selected state |

Key pattern in `scss/_reboot.scss`:

```scss
// Links with aria-disabled get no focus styles and are visually disabled
&:focus-visible:where(:not([aria-disabled="true"])) {
  color: var(--#{$prefix}link-focus-color);
}
&[aria-disabled="true"] {
  color: var(--#{$prefix}link-disabled-color);
  pointer-events: none;
}
```

---

## Color and contrast

### Sass-level contrast checking

OUDS Web implements the **WCAG 2.2 contrast ratio algorithm** at Sass compile time.

**File:** `scss/_functions.scss`

| Function | Purpose |
|---|---|
| `luminance($color)` | Calculates WCAG relative luminance per W3C spec |
| `contrast-ratio($background, $foreground)` | Returns the contrast ratio between two colors |
| `color-contrast($background)` | Returns the best foreground color (light or dark) that meets the threshold |

```scss
// Configuration (scss/_variables.scss)
$min-contrast-ratio: 4.5 !default; // WCAG AA for normal text
$color-contrast-dark:  $black !default;
$color-contrast-light: $white !default;
```

The `color-contrast()` function iterates through light, dark, white, and black foreground options. It returns the first that meets or exceeds `$min-contrast-ratio`. If none meets the threshold, it warns and returns the best available.

### Rules for contributors

- **Never hardcode color values** (`#ff7900`, `rgb(...)`, etc.) — always use design tokens.
- **Never use `lighten()` or `darken()`** — these Sass functions are forbidden by Stylelint. Use the appropriate token variant instead.
- **Use CSS custom properties for all colors** — this enables dark mode support: `color: var(--#{$prefix}color-content-default)`.
- **Minimum ratios**: 4.5:1 for normal text, 3:1 for large text and UI components.

---

## Dark mode and color modes

### How color modes work

**Mixin:** `scss/mixins/_color-mode.scss`

The `color-mode()` mixin generates selectors for light/dark theme switching. The strategy is controlled by `$color-mode-type` (`scss/_config.scss`):

| Mode | Selector strategy | Default? |
|---|---|---|
| `data` | `[data-bs-theme="light"]` / `[data-bs-theme="dark"]` attribute selectors | Yes |
| `media-query` | `@media (prefers-color-scheme: ...)` | No |

**OUDS extensions** — the mixin supports nested theme contexts:
- `[data-bs-theme="root"]` — inherits the root-level theme
- `[data-bs-theme="root-inverted"]` — inherits the opposite of the root-level theme

This enables scenarios like a dark card inside a light page, or vice versa.

### Color tokens as CSS custom properties

All color tokens that need to respond to theme changes are exposed as CSS custom properties in `tokens/_semantic-colors-custom-props.scss` and `tokens/_component-colors-custom-props.scss`:

```scss
@include color-mode(light, true) {
  --#{$prefix}color-border-focus: #{$ouds-color-border-focus-light};
  --#{$prefix}color-border-focus-inset: #{$ouds-color-border-focus-inset-light};
}
@include color-mode(dark) {
  --#{$prefix}color-border-focus: #{$ouds-color-border-focus-dark};
  --#{$prefix}color-border-focus-inset: #{$ouds-color-border-focus-inset-dark};
}
```

### Rules for contributors

- **Always use `var(--#{$prefix}color-*)` for colors** in component SCSS — not Sass variables.
- **Use `data-bs-theme` attribute** for theme toggling — never rely on `prefers-color-scheme` media queries in component code.
- **Test both light and dark modes** — the Storybook a11y addon supports theme switching.

---

## Motion and animation

### The `transition()` mixin

**File:** `scss/mixins/_transition.scss`

Every use of `@include transition(...)` automatically generates a `prefers-reduced-motion: reduce` media query that disables the transition:

```scss
@mixin transition($transition...) {
  @if $enable-transitions {
    @if nth($transition, 1) != null {
      transition: $transition;
    }
    @if $enable-reduced-motion and nth($transition, 1) != null and nth($transition, 1) != none {
      @media (prefers-reduced-motion: reduce) {
        transition: none;
      }
    }
  }
}
```

Configuration flags (`scss/_variables.scss`):

| Variable | Default | Purpose |
|---|---|---|
| `$enable-transitions` | `true` | Master switch for all CSS transitions |
| `$enable-reduced-motion` | `true` | Generates `prefers-reduced-motion` blocks |

### Component-specific reduced motion handling

| Component | File | Behavior |
|---|---|---|
| Smooth scroll | `scss/_reboot.scss` | Only enabled when `prefers-reduced-motion: no-preference` |
| Spinners | `scss/_spinners.scss` | Animation speed halved (2x duration), not removed |
| Progress bars | `scss/_progress.scss` | Animation disabled entirely |
| Carousel indicators | `scss/_carousel.scss` | Animation disabled entirely |
| Switch (form) | `scss/forms/_control-item.scss` | Check-in animation disabled |

### Rules for contributors

- **Never write `transition: ...` directly** — Stylelint forbids it. Always use `@include transition(...)`.
- **Never write `border-radius: ...` directly** — always use `@include border-radius(...)`.
- **Animations that cannot be expressed via the `transition()` mixin** must include their own `@media (prefers-reduced-motion: reduce)` block.

---

## Touch target sizing

### The `target-size()` mixin

**File:** `scss/mixins/_target-size.scss`

Implements WCAG 2.2 SC 2.5.8 (Target Size Minimum) — ensures interactive elements have at least a 44x44 CSS pixel hit area.

```scss
@mixin target-size($size: $target-size, $pseudo-element: before, $position: relative, $width: $size, $height: $size) {
  position: $position;
  &::#{$pseudo-element} {
    position: absolute;
    top: 50%;
    left: 50%;
    width: $width;
    min-width: 100%;
    height: $height;
    min-height: 100%;
    content: "";
    transform: translate3d(-50%, -50%, 0);
  }
}
```

**Default size:** `$target-size: 2.75rem` (44px) — defined in `scss/_variables.scss`.

The mixin creates an invisible pseudo-element centered on the interactive element. `min-width: 100%` and `min-height: 100%` ensure the hit area is never smaller than the element itself.

### Rules for contributors

- Small interactive elements (icon buttons, close buttons, carousel indicators) should use `@include target-size()`.
- The minimum touch target is **44x44 CSS pixels**.

---

## Visually hidden content

### Mixin and helper class

**Mixin:** `scss/mixins/_visually-hidden.scss`
**Helper:** `scss/helpers/_visually-hidden.scss`

The `.visually-hidden` class hides content visually while keeping it in the accessibility tree:

```scss
@mixin visually-hidden() {
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
  &:not(caption) { position: absolute !important; }
  * { overflow: hidden !important; } // Prevent children from becoming focusable
}
```

The `.visually-hidden-focusable` variant becomes visible when focused — used for skip links (WCAG G1 technique):

```scss
@mixin visually-hidden-focusable() {
  &:not(:focus):not(:focus-within) {
    @include visually-hidden();
  }
}
```

### When to use

| Use case | Class |
|---|---|
| Screen-reader-only labels | `.visually-hidden` |
| Skip navigation links | `.visually-hidden-focusable` |
| Icon-only button labels | `.visually-hidden` inside the `<button>` |
| Form field descriptions | `.visually-hidden` |

### Rules for contributors

- **Never use `display: none` or `visibility: hidden`** to hide content that should be announced by screen readers.
- **Prefer `.visually-hidden` text over `aria-label`** — OUDS Web favors visible (to AT) text content for better cross-browser/AT compatibility.

---

## RTL layout support

### How RTL works

OUDS Web generates `.rtl.css` variants via the **rtlcss** PostCSS plugin (`build/postcss.config.mjs`). When built with `RTL` environment, rtlcss automatically flips all directional CSS properties (left/right, margin, padding, transforms, etc.).

### rtlcss control directives

65 annotations across SCSS files fine-tune RTL behavior:

| Directive | Purpose | Example use |
|---|---|---|
| `/* rtl:remove */` | Remove the next declaration in RTL | `letter-spacing` (inappropriate for RTL scripts) |
| `/* rtl:begin:remove */` ... `/* rtl:end:remove */` | Remove a block in RTL | Carousel directional animations |
| `/* rtl:ignore */` | Keep unchanged in RTL | Spinner rotation, SVG animations |
| `/* rtl:begin:ignore */` ... `/* rtl:end:ignore */` | Keep a block unchanged | Tooltip/popover positioning |
| `/* rtl:raw: ... */` | Insert CSS only in RTL output | Form input `direction: ltr` for tel/url/email/number |

### Key RTL accessibility pattern

Form inputs for telephone, URL, email, and number maintain LTR direction even in RTL layouts (`scss/_reboot.scss`):

```scss
/* rtl:raw:
[type="tel"],
[type="url"],
[type="email"],
[type="number"] {
  direction: ltr;
}
*/
```

### Font and letter-spacing

The `get-font-size()` mixin (`scss/mixins/_fonts.scss`) removes `letter-spacing` in RTL builds via `/* rtl:remove */`, because letter-spacing is typically inappropriate for Arabic, Hebrew, and other RTL scripts.

### Carousel RTL

Carousel arrow key navigation is RTL-aware — `ArrowLeft` and `ArrowRight` directions are swapped by `_directionToOrder()` in `js/src/carousel.js`.

### Rules for contributors

- **Do not use directional assumptions** — prefer CSS logical properties or let rtlcss handle flipping.
- **Use `/* rtl:ignore */`** for animations and transforms that should not be mirrored (rotations, spinners).
- **Test with `dir="rtl"`** on the root element.

---

## Testing strategy

OUDS Web uses a **multi-layered defense** for accessibility:

### Layer 1 — Static analysis (CSS)

**Tool:** Stylelint (config: `.stylelintrc.json`)

Catches accessibility anti-patterns at the SCSS level:

| Rule | What it prevents |
|---|---|
| `outline: none` banned | Removing focus indicators |
| `lighten()` / `darken()` banned | Color manipulations that break contrast ratios |
| `border-radius` / `transition` as direct properties banned | Forces use of mixins that include a11y considerations |

### Layer 2 — Unit tests (JS)

**Tool:** Karma + Jasmine (`js/tests/unit/`)

13 spec files contain ARIA and keyboard assertions:

| Spec file | Key a11y patterns tested |
|---|---|
| `focustrap.spec.js` | Autofocus, forward/backward Tab wrapping, no focusable children |
| `modal.spec.js` | `aria-modal`, `role="dialog"`, `aria-hidden`, focus trap, Escape, focus return |
| `offcanvas.spec.js` | Escape, focus trap, `keyboard` config |
| `dropdown.spec.js` | `aria-expanded`, ArrowUp/Down/Escape/Tab, skip disabled items |
| `tab.spec.js` | All ARIA roles, `aria-selected`, `aria-labelledby`, roving tabindex |
| `collapse.spec.js` | `aria-expanded`, `aria-controls`, `aria-selected` |
| `carousel.spec.js` | `.visually-hidden` labels, keyboard navigation |
| `tooltip.spec.js` | ARIA attributes on triggers |
| `quantity-selector.spec.js` | `aria-live`, `aria-describedby`, `aria-label`, `.visually-hidden` |
| `toast.spec.js` | `.visually-hidden` close button text |
| `button.spec.js` | `aria-pressed` toggling |
| `sanitizer.spec.js` | `aria-label` and `aria-pressed` preserved through sanitization |

### Layer 3 — HTML validation

**Tool:** VNU / Nu HTML Checker (`build/vnu-jar.mjs`)

Runs in **strict mode** (`--Werror`) — warnings are treated as errors. Validates the entire built docs site (`_site/`) and JS test fixtures (`js/tests/`).

Catches: invalid ARIA attributes, incorrect element nesting, missing required attributes, structural HTML errors.

Notable ignored patterns (intentional deviations):
- `aria-disabled="true"` on `<a href>` — valid but not recommended per WAI-ARIA spec; used intentionally in OUDS Web.
- `aria-readonly` on `<span>` / `<div>` — validator bug (validator/validator#1199).

### Layer 4 — Automated a11y audit

**Tool:** Pa11y-CI with axe-core (`build/.pa11yci.json`)

| Setting | Value |
|---|---|
| Standard | WCAG2AA |
| Runner | axe (axe-core engine) |
| Level | error |
| Scope | Every page in the docs sitemap |
| Ignored rules | `color-contrast` (false positives with CSS custom properties) |
| Reports | CLI + HTML reports (`.pa11y/` directory) |

**npm script:** `npm run docs-accessibility` — starts a local server and runs Pa11y-CI against the full sitemap.

**Hidden elements** (excluded from testing): iframes, offcanvas, sidebar, overflow containers, disabled star ratings — elements that produce false positives in automated testing.

### Layer 5 — Development-time inspection

**Tool:** Storybook a11y addon (`@storybook/addon-a11y`)

Runs the full default axe-core ruleset in the Storybook UI. No custom rule overrides. Supports light/dark theme switching via `data-bs-theme` toggle. Stories test against the real compiled CSS output.

### Layer 6 — Human a11y review

**Process:** GitHub PR label workflow

PRs go through a gated review process:
1. Automated CI checks (Pa11y, VNU, Stylelint, unit tests)
2. Developer approval → label changes to `ready for a11y review`
3. **Human accessibility expert review** → `passed a11y review` label
4. Lead dev review → merge

This multi-gate process ensures accessibility is not just automated but also manually verified by an expert.

### Running tests locally

```bash
# Lint SCSS (catches outline:none, missing mixins, etc.)
npm run lint

# Run JS unit tests (ARIA assertions, keyboard navigation)
npm run js-test

# Run HTML validation (VNU)
npm run docs-vnu

# Run Pa11y-CI accessibility audit (requires built docs)
npm run docs-build && npm run docs-accessibility

# Full test suite (lint + build + JS tests + docs build + VNU)
npm run test
```

---

## Checklist for contributors

Before submitting a PR that touches UI components, verify:

### HTML markup
- [ ] Semantic elements used (`<button>` for actions, `<a>` for navigation, `<nav>`, `<main>`, etc.)
- [ ] Correct heading hierarchy
- [ ] Appropriate `role` attributes where native semantics are insufficient
- [ ] `aria-label`, `aria-labelledby`, or `aria-describedby` for elements without visible text labels
- [ ] `aria-expanded` on triggers for expandable content
- [ ] `aria-hidden="true"` on decorative elements
- [ ] `.visually-hidden` text for icon-only buttons and screen-reader-only content

### Focus and keyboard
- [ ] All interactive elements are keyboard-operable
- [ ] Focus indicator is visible (uses `@include focus-visible()` or `:focus-visible` styles)
- [ ] Focus is trapped in modal contexts (Modal, Offcanvas)
- [ ] Focus returns to trigger element when overlays close
- [ ] Tab order follows logical reading order
- [ ] Arrow key navigation does not scroll the page (use `preventDefault()` and `{ preventScroll: true }`)

### Color and contrast
- [ ] All colors use design tokens via `var(--#{$prefix}color-*)` — no hardcoded values
- [ ] Text meets 4.5:1 contrast ratio (3:1 for large text)
- [ ] UI components and graphical objects meet 3:1 contrast ratio
- [ ] Component works in both light and dark modes

### Motion
- [ ] Transitions use `@include transition()` mixin (auto-respects `prefers-reduced-motion`)
- [ ] Custom animations include `@media (prefers-reduced-motion: reduce)` block
- [ ] Auto-advancing content has pause/stop controls

### Touch and sizing
- [ ] Interactive elements have at least 44x44px touch target (use `@include target-size()` if needed)

### RTL
- [ ] No hardcoded directional values without rtlcss annotations
- [ ] Tested with `dir="rtl"` if the component has directional behavior

### Testing
- [ ] `npm run lint` passes
- [ ] `npm run dist` succeeds
- [ ] Relevant unit tests added/updated for ARIA attribute management and keyboard interactions
- [ ] Manually tested with keyboard navigation
- [ ] Tested in both light and dark modes

---

*This file provides detailed accessibility context for AI agents and LLMs working on the OUDS Web codebase. It complements the [accessibility overview in AGENTS.md](../AGENTS.md#accessibility-requirements). Keep it up to date when accessibility patterns, tooling, or requirements change.*
