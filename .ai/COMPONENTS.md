---
title: "Components — OUDS Web"
description: "Full component catalog, SCSS/JS patterns, component token system, step-by-step creation guide, testing and documentation patterns for OUDS Web."
audience:
  - component-developers
  - ui-engineers
  - documentation-writers
  - ai-agents
keywords:
  - components
  - SCSS
  - JavaScript
  - BaseComponent
  - tokens
  - patterns
  - catalog
  - creation
  - testing
  - Storybook
  - MDX
related_files:
  - "../AGENTS.md#components-catalog"
  - "CODE_CONVENTIONS.md"
  - "DESIGN_TOKENS.md"
  - "ACCESSIBILITY.md"
  - "QUICK_LOOKUP.md#components"
last_updated: "2026-03-31"
---

# Components — OUDS Web

> Full component catalog and development guide for OUDS Web.
> For a quick overview, see the [Components section in AGENTS.md](../AGENTS.md#components-catalog).

---

## Table of contents

1. [Full component catalog](#full-component-catalog)
2. [SCSS component patterns](#scss-component-patterns)
3. [JavaScript component patterns](#javascript-component-patterns)
4. [Component token system](#component-token-system)
5. [Creating a new component](#creating-a-new-component)
6. [Testing patterns](#testing-patterns)
7. [Documentation patterns](#documentation-patterns)
8. [Storybook patterns](#storybook-patterns)

---

## Full component catalog

### SCSS component files

Every component has a corresponding SCSS partial in `scss/` or `scss/forms/`.

#### Root components (`scss/_*.scss`)

| File                     | Type                           | JS                 | Description                                    |
| ------------------------ | ------------------------------ | ------------------ | ---------------------------------------------- |
| `_accordion.scss`        | Bootstrap (customized)         | `collapse.js`      | Collapsible content panels                     |
| `_alert.scss`            | Bootstrap (customized)         | `alert.js`         | Alert messages                                 |
| `_back-to-top.scss`      | OUDS-specific                  | --                 | Scroll-to-top button                           |
| `_badges.scss`           | OUDS-specific                  | --                 | Badge indicators                               |
| `_breadcrumb.scss`       | Bootstrap (customized)         | --                 | Breadcrumb navigation                          |
| `_bullet-list.scss`      | OUDS-specific                  | --                 | Styled lists with bullets/counters             |
| `_button-group.scss`     | Bootstrap (customized)         | --                 | Grouped buttons                                |
| `_buttons.scss`          | Bootstrap (heavily customized) | `button.js`        | All button variants                            |
| `_card.scss`             | Bootstrap (customized)         | --                 | Card containers                                |
| `_carousel.scss`         | Bootstrap (customized)         | `carousel.js`      | Image/content carousel                         |
| `_chips.scss`            | OUDS-specific                  | --                 | Compact interactive filter/suggestion elements |
| `_dropdown.scss`         | Bootstrap (customized)         | `dropdown.js`      | Dropdown menus                                 |
| `_footer.scss`           | OUDS-specific                  | --                 | Structured page footer                         |
| `_images.scss`           | Bootstrap (customized)         | --                 | Image utilities                                |
| `_links.scss`            | OUDS-specific                  | --                 | Link component with chevron variants           |
| `_list-group.scss`       | Bootstrap (customized)         | --                 | List group items                               |
| `_local-navigation.scss` | OUDS-specific                  | --                 | In-page anchor navigation                      |
| `_modal.scss`            | Bootstrap (customized)         | `modal.js`         | Modal dialogs                                  |
| `_nav.scss`              | Bootstrap (customized)         | `tab.js`           | Nav/tab component                              |
| `_navbar.scss`           | Bootstrap (customized)         | --                 | Navbar component                               |
| `_offcanvas.scss`        | Bootstrap (customized)         | `offcanvas.js`     | Offcanvas panels                               |
| `_orange-navbar.scss`    | OUDS-specific                  | `orange-navbar.js` | Brand supra bar and minimized header           |
| `_pagination.scss`       | Bootstrap (customized)         | --                 | Pagination controls                            |
| `_popover.scss`          | Bootstrap (customized)         | `popover.js`       | Popovers                                       |
| `_progress.scss`         | Bootstrap (customized)         | --                 | Progress bars                                  |
| `_skeleton.scss`         | OUDS-specific                  | --                 | Loading placeholder/skeleton screen            |
| `_spinners.scss`         | Bootstrap (customized)         | --                 | Loading spinners                               |
| `_stepped-process.scss`  | OUDS-specific                  | --                 | Multi-step progress indicator                  |
| `_sticker.scss`          | OUDS-specific                  | --                 | Promotional circular badge                     |
| `_tables.scss`           | Bootstrap (customized)         | --                 | Data tables                                    |
| `_tags.scss`             | OUDS-specific                  | --                 | Labeling/categorization elements               |
| `_title-bars.scss`       | OUDS-specific                  | --                 | Section header bars                            |
| `_toasts.scss`           | Bootstrap (customized)         | `toast.js`         | Toast notifications                            |
| `_tooltip.scss`          | Bootstrap (customized)         | `tooltip.js`       | Tooltips                                       |
| `_transitions.scss`      | Bootstrap (customized)         | --                 | CSS transitions                                |
| `_type.scss`             | Bootstrap (customized)         | --                 | Typography                                     |

#### Form components (`scss/forms/_*.scss`)

| File                      | Type                   | JS                     | Description                         |
| ------------------------- | ---------------------- | ---------------------- | ----------------------------------- |
| `_control-item.scss`      | Bootstrap (customized) | --                     | Checkbox/radio/switch control items |
| `_form-control.scss`      | Bootstrap (customized) | --                     | Form control base styles            |
| `_form-range.scss`        | Bootstrap (customized) | --                     | Range slider                        |
| `_form-text.scss`         | Bootstrap (customized) | --                     | Form help text                      |
| `_input-group.scss`       | Bootstrap (customized) | --                     | Input group addons                  |
| `_labels.scss`            | Bootstrap (customized) | --                     | Form labels                         |
| `_quantity-selector.scss` | OUDS-specific          | `quantity-selector.js` | Numeric stepper input               |
| `_select-input.scss`      | OUDS-specific          | --                     | Custom select component             |
| `_star-rating.scss`       | OUDS-specific          | --                     | Star rating input (CSS-only)        |
| `_text-input.scss`        | OUDS-specific          | --                     | Text input and text area components |
| `_validation.scss`        | Bootstrap (customized) | --                     | Form validation styles              |

### Non-component SCSS partials (do NOT modify when working on components)

| File                   | Purpose                                                 |
| ---------------------- | ------------------------------------------------------- |
| `_config.scss`         | `$prefix`, `$color-mode-type`, `$ouds-root-selector`    |
| `_functions.scss`      | Sass functions                                          |
| `_variables.scss`      | Bootstrap variables mapped to OUDS tokens (~2200 lines) |
| `_variables-dark.scss` | Dark mode variable overrides                            |
| `_maps.scss`           | Sass maps                                               |
| `_mixins.scss`         | Mixin index                                             |
| `_utilities.scss`      | Utility class definitions                               |
| `_helpers.scss`        | Helper class index                                      |
| `_root.scss`           | CSS custom properties on `:root`                        |
| `_reboot.scss`         | CSS reset/normalize                                     |
| `_forms.scss`          | Form component import index                             |
| `_grid.scss`           | Grid system                                             |
| `_containers.scss`     | Container system                                        |

### JavaScript component files

15 component files in `js/src/`, plus DOM helpers and utilities.

#### Class hierarchy

```
Config  (js/src/util/config.js)
  |
  +-- BaseComponent  (js/src/base-component.js)
  |     |
  |     +-- Alert            +-- Carousel         +-- Modal
  |     +-- Button           +-- Collapse          +-- Offcanvas
  |     +-- OrangeNavbar     +-- Dropdown          +-- Scrollspy
  |     +-- QuantitySelector +-- Tab               +-- Toast
  |     +-- Tooltip
  |           +-- Popover  (extends Tooltip, NOT BaseComponent)
  |
  +-- Backdrop         (extends Config directly)
  +-- FocusTrap        (extends Config directly)
  +-- Swipe            (extends Config directly)
  +-- TemplateFactory  (extends Config directly)
```

#### DOM helpers (`js/src/dom/`)

| File                 | Purpose                                                            |
| -------------------- | ------------------------------------------------------------------ |
| `data.js`            | Component instance storage (`Map<Element, Map<key, instance>>`)    |
| `event-handler.js`   | Namespace-aware event system with delegation                       |
| `manipulator.js`     | `data-bs-*` attribute read/write helpers                           |
| `selector-engine.js` | DOM query utilities (`find`, `findOne`, `focusableChildren`, etc.) |

#### Utility modules (`js/src/util/`)

| File                     | Purpose                                                                                                        |
| ------------------------ | -------------------------------------------------------------------------------------------------------------- |
| `index.js`               | 20 core utilities (`getElement`, `isRTL`, `isVisible`, `isDisabled`, `reflow`, `executeAfterTransition`, etc.) |
| `config.js`              | Configuration base class (parent of `BaseComponent`)                                                           |
| `backdrop.js`            | Backdrop overlay management                                                                                    |
| `focustrap.js`           | Focus trapping for modals/dialogs                                                                              |
| `scrollbar.js`           | Scrollbar width compensation                                                                                   |
| `swipe.js`               | Touch/pointer swipe detection                                                                                  |
| `sanitizer.js`           | HTML sanitization for XSS prevention                                                                           |
| `template-factory.js`    | HTML template creation for tooltips/popovers                                                                   |
| `component-functions.js` | Shared `enableDismissTrigger()` helper                                                                         |

---

## SCSS component patterns

### Pattern 1: CSS custom properties declaration block

Every component declares CSS custom properties at the top of its main class, then consumes them via `var()`:

```scss
.badge {
  // scss-docs-start badge-css-vars
  --#{$prefix}badge-size: #{px-to-rem($ouds-badge-size-medium)};
  --#{$prefix}badge-color: #{$ouds-color-content-on-status-negative-emphasized};
  --#{$prefix}badge-bg: #{$ouds-color-surface-status-negative-emphasized};
  // scss-docs-end badge-css-vars

  display: inline-flex;
  min-width: var(--#{$prefix}badge-size);
  color: var(--#{$prefix}badge-color);
  background-color: var(--#{$prefix}badge-bg);
}
```

Always interpolate the `$prefix` variable: `--#{$prefix}property-name`.

### Pattern 2: State management via CSS custom property overrides

Variant classes and pseudo-classes override specific CSS custom properties rather than re-declaring properties:

```scss
.chip-interactive {
  --#{$prefix}chip-bg: #{$ouds-chip-color-bg-unselected-enabled};
  --#{$prefix}chip-border-width: #{px-to-rem(
      $ouds-chip-border-width-unselected
    )};

  &:hover {
    --#{$prefix}chip-bg: #{$ouds-chip-color-bg-unselected-hover};
    --#{$prefix}chip-border-width: #{px-to-rem(
        $ouds-chip-border-width-unselected-interaction
      )};
  }
}
```

### Pattern 3: Token reference levels

Three levels of token reference coexist in component SCSS:

| Level                                  | Example                                  | Used by                                                                     |
| -------------------------------------- | ---------------------------------------- | --------------------------------------------------------------------------- |
| Direct OUDS component tokens           | `$ouds-chip-color-bg-unselected-enabled` | Newer OUDS-native components (chips, tags, badges, text-input, links)       |
| Bootstrap-style intermediary variables | `$card-border-radius`, `$btn-padding-y`  | Components closer to Bootstrap's original (card, modal, accordion, sticker) |
| CSS custom properties                  | `var(--#{$prefix}color-action-enabled)`  | Color values that switch at runtime for light/dark mode                     |

Both approaches are valid. Bootstrap-style intermediary variables are defined in `scss/_variables.scss` and mapped from OUDS tokens there.

### Pattern 4: Border-width compensation in padding

Used in buttons, chips, tags, and text inputs to prevent layout shifts when border width changes on interaction:

```scss
.btn {
  padding: calc(
      var(--#{$prefix}btn-padding-y) - var(--#{$prefix}btn-border-width)
    )
    calc(var(--#{$prefix}btn-padding-x) - var(--#{$prefix}btn-border-width));

  &:hover {
    --#{$prefix}btn-border-width: #{$ouds-button-border-width-default-interaction};
    // padding automatically adjusts via calc()
  }
}
```

### Pattern 5: Focus visibility

Multiple approaches are used depending on the component:

```scss
// Approach A: Using the focus-visible() mixin
&:focus-visible {
  @include focus-visible();
}

// Approach B: Manual focus ring (for components needing offset adjustments)
&:focus-visible {
  z-index: $focus-visible-zindex;
  outline-offset: calc(
    $focus-visible-outer-offset + var(--#{$prefix}border-width)
  );
  box-shadow: 0 0 0
    calc(var(--#{$prefix}border-width) + $focus-visible-inner-width)
    var(--#{$prefix}color-border-focus-inset);
}
```

Focus tokens: `$focus-visible-zindex`, `$focus-visible-outer-offset`, `$focus-visible-inner-width`, `var(--#{$prefix}color-border-focus-inset)`.

### Pattern 6: Icon rendering via mask-image

Icons consistently use the `mask-image` + `background-color` pattern:

```scss
&::before {
  content: "";
  display: inline-block;
  background-color: currentcolor;
  mask-image: escape-svg(var(--#{$prefix}some-icon));
  mask-size: 100%;
  mask-repeat: no-repeat;
}
```

This allows icon color to follow `color` inheritance or be overridden via `background-color`.

### Pattern 7: Responsive CSS custom property overrides

Rather than redefining rulesets, breakpoint-specific styles override CSS custom properties:

```scss
.component {
  --#{$prefix}component-width: #{$mobile-width};

  @include media-breakpoint-up(xl) {
    --#{$prefix}component-width: #{$desktop-width};
  }
}
```

### Pattern 8: Root-level variables

Some components set CSS custom properties at `:root` level:

```scss
#{$ouds-root-selector} {
  --#{$prefix}btn-border-radius: #{$btn-border-radius};
}
```

### Pattern 9: Bootstrap compatibility

Conditional `@extend` maps Bootstrap class names to OUDS equivalents:

```scss
@if $enable-bootstrap-compatibility {
  .btn-primary {
    @extend .btn-brand;
  }
  .btn-secondary {
    @extend .btn-default;
  }
}
```

### Pattern 10: RTL support annotations

```scss
letter-spacing: -0.01em; /* rtl:remove */
transform: #{"/* rtl:ignore */"} rotate(180deg);
```

- `/* rtl:remove */` excludes a property from RTL output.
- `#{"/* rtl:ignore */"}` prevents `rtlcss` from flipping values (used inside interpolation).

### Pattern 11: Documentation extraction markers

```scss
// scss-docs-start badge-css-vars
--#{$prefix}badge-color: #{$value};
// scss-docs-end badge-css-vars
```

These markers are parsed by the documentation site's `<ScssDocs>` component to extract code snippets.

### Pattern 12: OUDS modification comments

When modifying Bootstrap's original code, mark changes with `// OUDS mod`:

```scss
display: flex; // OUDS mod: instead of `inline-block`
// OUDS mod: no `@include rfs($btn-font-size, --#{$prefix}btn-font-size)`
// OUDS mod: no @import "close" (close is handled by buttons)

// OUDS mod: loading buttons
.btn.loading-indeterminate {
  // ...
}
// End mod
```

Comment patterns:

| Pattern                              | Meaning                               |
| ------------------------------------ | ------------------------------------- |
| `// OUDS mod: <description>`         | Inline modification note              |
| `// OUDS mod: no <property>`         | Property deliberately removed         |
| `// OUDS mod: instead of <original>` | Value changed from Bootstrap original |
| `// OUDS mod`                        | Start of a block modification         |
| `// End mod`                         | End of a block modification           |
| `// OUDS Web only`                   | Entirely new OUDS component           |

### Pattern 13: Shared form component styles via placeholder selector

Complex form components share base styles using a Sass placeholder:

```scss
// In _text-input.scss
%text-item-common {
  // Shared styles for text inputs, text areas, and select inputs
}

// In _text-input.scss
.text-input {
  @extend %text-item-common;
}

// In _select-input.scss
.select-input {
  @extend %text-item-common;
}
```

### Required mixins

Direct CSS properties are forbidden by Stylelint for these -- always use the mixin:

| Forbidden property   | Required mixin                |
| -------------------- | ----------------------------- |
| `border-radius: ...` | `@include border-radius(...)` |
| `transition: ...`    | `@include transition(...)`    |

Exception: when the value is a `var()` reference to a CSS custom property, a `// stylelint-disable-line property-disallowed-list` comment is used.

### OUDS-specific mixins

| Mixin                                   | Purpose                                              | Example                                |
| --------------------------------------- | ---------------------------------------------------- | -------------------------------------- |
| `@include get-font-size("label-large")` | Sets font-size and line-height from OUDS font tokens | Used in buttons, chips, tags, badges   |
| `@include button-variant(...)`          | Sets 18 color parameters for all button states       | Used in `_buttons.scss`                |
| `@include button-icon(...)`             | Embeds SVG icon via mask-image                       | Used in buttons, quantity-selector     |
| `@include focus-visible()`              | Applies standard OUDS focus ring                     | Used in chips, star-rating, text-input |
| `@include caret($accordion: true)`      | Renders dropdown/accordion caret icon                | Used in accordion, dropdown            |
| `@include overlay-backdrop(...)`        | Creates modal/offcanvas backdrop                     | Used in modal, offcanvas               |

---

## JavaScript component patterns

### BaseComponent API

All JS components extend `BaseComponent` (`js/src/base-component.js`), which extends `Config`.

```javascript
class BaseComponent extends Config {
  constructor(element, config) {
    super()
    element = getElement(element)          // Resolves selectors to DOM elements
    this._element = element                // The component's root DOM element
    this._config = this._getConfig(config) // Merged config (Default + data attrs + JS config)
    Data.set(this._element, this.constructor.DATA_KEY, this)  // Register instance
  }

  dispose() {
    Data.remove(this._element, this.constructor.DATA_KEY)
    EventHandler.off(this._element, this.constructor.EVENT_KEY)
    for (const propertyName of Object.getOwnPropertyNames(this)) {
      this[propertyName] = null  // Null out all properties
    }
  }

  _queueCallback(callback, element, isAnimated = true)  // Execute after CSS transition

  static getInstance(element)                    // Retrieve existing instance
  static getOrCreateInstance(element, config)     // Get or lazily create
  static get VERSION()   // '1.1.0'
  static get DATA_KEY()  // 'bs.{NAME}'
  static get EVENT_KEY() // '.bs.{NAME}'
  static eventName(name) // '{name}.bs.{NAME}'
}
```

**One instance per element** is enforced. `Data.set()` warns if an element already has a different component bound.

### Config merge order

Configuration is merged with later values winning:

1. `static get Default()` -- component's default values
2. `data-bs-config` attribute -- JSON object from element
3. Individual `data-bs-*` attributes -- from element
4. JavaScript `config` object -- passed to constructor

### Universal component structure

Every JS component follows this exact file structure:

```javascript
/**
 * --------------------------------------------------------------------------
 * Bootstrap component-name.js
 * Licensed under MIT (...)
 * --------------------------------------------------------------------------
 */

// 1. IMPORTS
import BaseComponent from "./base-component.js";
import EventHandler from "./dom/event-handler.js";

/**
 * Constants
 */

// 2. CONSTANTS
const NAME = "componentname"; // lowercase, no hyphens
const DATA_KEY = "bs.componentname";
const EVENT_KEY = `.${DATA_KEY}`;
const DATA_API_KEY = ".data-api";

const EVENT_SHOW = `show${EVENT_KEY}`; // 'show.bs.componentname'
const EVENT_SHOWN = `shown${EVENT_KEY}`; // 'shown.bs.componentname'
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;

const CLASS_NAME_SHOW = "show";
const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="componentname"]';

const Default = {
  /* config defaults */
};
const DefaultType = {
  /* type validation regex */
};

/**
 * Class definition
 */

// 3. CLASS
class Component extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    // Initialize instance properties
  }

  // Getters
  static get Default() {
    return Default;
  }
  static get DefaultType() {
    return DefaultType;
  }
  static get NAME() {
    return NAME;
  }

  // Public
  show() {
    /* ... */
  }
  hide() {
    /* ... */
  }
  dispose() {
    // Component-specific cleanup
    super.dispose();
  }

  // Private
  _internalMethod() {
    /* ... */
  }

  // Static
  static jQueryInterface(config) {
    return this.each(function () {
      const data = Component.getOrCreateInstance(this, config);
      if (typeof config !== "string") return;
      if (typeof data[config] === "undefined") {
        throw new TypeError(`No method named "${config}"`);
      }
      data[config]();
    });
  }
}

/**
 * Data API implementation
 */

// 4. DATA API
EventHandler.on(
  document,
  EVENT_CLICK_DATA_API,
  SELECTOR_DATA_TOGGLE,
  function (event) {
    event.preventDefault();
    Component.getOrCreateInstance(this).toggle();
  },
);

/**
 * jQuery
 */

// 5. JQUERY REGISTRATION
defineJQueryPlugin(Component);

export default Component;
```

### Event pair pattern

Most components fire events in pairs:

| Before action (cancelable) | After action (not cancelable) |
| -------------------------- | ----------------------------- |
| `show.bs.*`                | `shown.bs.*`                  |
| `hide.bs.*`                | `hidden.bs.*`                 |
| `close.bs.*`               | `closed.bs.*`                 |
| `slide.bs.*`               | `slid.bs.*`                   |

```javascript
// Cancelable event pattern
const showEvent = EventHandler.trigger(this._element, EVENT_SHOW, {
  relatedTarget,
});
if (showEvent.defaultPrevented) {
  return; // Consumer prevented the action
}
// ... proceed with action
EventHandler.trigger(this._element, EVENT_SHOWN, { relatedTarget });
```

### Complex components compose utilities

Modal and Offcanvas compose multiple utility classes:

```javascript
class Modal extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._backdrop = this._initializeBackDrop(); // Backdrop instance
    this._focustrap = this._initializeFocusTrap(); // FocusTrap instance
    this._scrollBar = new ScrollBarHelper(); // ScrollBarHelper instance
  }
}
```

### OUDS-specific JS components

OUDS components (`orange-navbar.js`, `quantity-selector.js`) follow the same patterns with minor differences:

- License header references `OUDS Web` and `Orange-OpenSource`
- `OrangeNavbar` primarily uses static methods (listens to `window` scroll/load events)
- `QuantitySelector` uses PascalCase method names (`ValueOnLoad`, `StepUp`, `StepDown`) -- this deviates from Bootstrap's camelCase convention

### JS coding conventions

| Rule                | Convention                                                   |
| ------------------- | ------------------------------------------------------------ |
| Semicolons          | **None** (enforced by ESLint)                                |
| Indentation         | 2 spaces                                                     |
| Strings             | Single quotes for plain, template literals for interpolation |
| Trailing commas     | **None**                                                     |
| Private members     | Prefixed with `_` (`this._element`, `this._getConfig()`)     |
| Constants           | `UPPER_SNAKE_CASE`                                           |
| Event names         | `verb.bs.component` (e.g., `show.bs.modal`)                  |
| Method organization | constructor > Getters > Public > Private > Static            |

---

## Component token system

### Token reference chain

```
Raw tokens           ->  Semantic tokens             ->  Component tokens          ->  Bootstrap variables
$core-ouds-*              $ouds-*                         $ouds-<component>-*           $btn-*, $card-*, etc.
(primitive values)        (design intent)                 (per-component usage)         (maps OUDS to Bootstrap)
Auto-generated            Auto-generated                  Auto-generated                Manually maintained
tokens/_raw.scss          tokens/_semantic.scss           tokens/_component.scss        scss/_variables.scss
```

### Token naming conventions

```scss
// Raw:       $core-ouds-{category}-{value}
$core-ouds-border-radius-100: 4px;

// Semantic:  $ouds-{category}-{variant}
$ouds-border-radius-default: $core-ouds-border-radius-0;

// Component: $ouds-{component}-{category}-{variant}
$ouds-button-border-radius-default: $ouds-border-radius-default;

// Bootstrap variable: $component-state-property
$btn-border-radius: $ouds-button-border-radius-default;
```

### Color token dual-track system

**Non-color tokens** flow through SCSS only (compile-time):

```
$core-ouds-border-radius-0 -> $ouds-border-radius-default -> $ouds-button-border-radius-default -> $btn-border-radius
```

**Color tokens** flow through SCSS + CSS custom properties (runtime):

```
Step 1: $ouds-color-action-enabled-light = $core-ouds-color-functional-black     (compile time)
Step 2: --bs-color-action-enabled: #{$ouds-color-action-enabled-light}           (CSS custom prop, light block)
Step 3: $ouds-color-action-enabled = var(--bs-color-action-enabled)              (SCSS redefined to var())
Step 4: $ouds-button-color-content-default-enabled = $ouds-color-action-enabled  (component token = var())
Step 5: $btn-color = $ouds-button-color-content-default-enabled                  (Bootstrap variable = var())
```

The final CSS output contains `var(--bs-color-action-enabled)`, enabling runtime light/dark switching.

### Components defined in token files (18)

Alert, Badge, Breadcrumb, Bullet (list), Button, Checkbox, Chip, Control (item), Divider, Expand, Input, Link, Pin (code), Quantity (input), Radio (button), Select (input), Skeleton, Switch, Tag, Text (area/input).

### Token file editability

| File                                         | Auto-generated | Editable                                            |
| -------------------------------------------- | -------------- | --------------------------------------------------- |
| `tokens/_raw.scss`                           | Yes            | **Never**                                           |
| `tokens/_semantic.scss`                      | Yes            | **Never**                                           |
| `tokens/_semantic-colors-custom-props.scss`  | Yes            | **Never**                                           |
| `tokens/_component.scss`                     | Yes            | **Never**                                           |
| `tokens/_component-colors-custom-props.scss` | Yes            | **Never**                                           |
| `tokens/_composite.scss`                     | **No**         | **Yes** -- icons, elevation, font stacks, Sass maps |
| `scss/_variables.scss`                       | **No**         | **Yes** -- Bootstrap-to-OUDS token bridge           |

### How component tokens reference values

**Non-color properties** reference semantic tokens:

```scss
$ouds-button-border-radius-default: $ouds-border-radius-default !default;
$ouds-button-space-padding-block: $ouds-space-padding-block-medium !default;
```

**Color properties** reference semantic tokens (already redefined to `var()`):

```scss
$ouds-button-color-content-default-enabled: $ouds-color-action-enabled !default;
// $ouds-color-action-enabled = var(--bs-color-action-enabled) at this point
```

**Component-level CSS custom properties** (for colors needing per-component light/dark values):

```scss
$ouds-button-color-bg-brand-pressed: var(
  --#{$prefix}button-color-bg-brand-pressed
) !default;
// Defined in _component-colors-custom-props.scss with light/dark values
```

### Brand differentiation

Brands differ at the semantic token layer. Same component token name, different visual output:

| Aspect                | Orange          | Sosh            |
| --------------------- | --------------- | --------------- |
| Default border-radius | 0px (sharp)     | 4px (rounded)   |
| Default border-width  | 1px             | 2px             |
| Custom font           | HelvNeueOrange  | Sosh            |
| Icon style            | Sharp/geometric | Rounded/organic |

---

## Creating a new component

### Step-by-step checklist

#### 1. Create the SCSS file

Create `scss/_my-component.scss` (or `scss/forms/_my-component.scss` for form components).

```scss
// scss-docs-start my-component-css-vars
.my-component {
  --#{$prefix}my-component-padding: #{$ouds-my-component-space-padding-block};
  --#{$prefix}my-component-color: #{$ouds-color-content-default};
  --#{$prefix}my-component-bg: #{$ouds-color-bg-primary};
  --#{$prefix}my-component-border-radius: #{$ouds-my-component-border-radius};
  // scss-docs-end my-component-css-vars

  display: flex;
  padding: var(--#{$prefix}my-component-padding);
  color: var(--#{$prefix}my-component-color);
  background-color: var(--#{$prefix}my-component-bg);
  @include border-radius(var(--#{$prefix}my-component-border-radius));

  // State overrides
  &:hover {
    --#{$prefix}my-component-bg: #{$ouds-color-bg-secondary};
  }

  &:focus-visible {
    @include focus-visible();
  }
}
```

Rules:

- Use design tokens -- never hardcode values.
- Use `@include border-radius()` and `@include transition()` -- never direct properties.
- Use `var(--#{$prefix}color-*)` for colors that switch between light/dark.
- Add `// scss-docs-start`/`// scss-docs-end` markers for documentation extraction.
- Add `!default` on all SCSS variables.

#### 2. Register in the entry point

Add the import to `packages/<brand>/scss/ouds-web.scss`:

```scss
// In the OUDS Web section (after Bootstrap components)
@import "@ouds/web-common/scss/my-component";
```

Also add to `scss/_forms.scss` if it is a form component.

#### 3. Add component tokens (if needed)

Component tokens are **auto-generated** from Figma. If you need temporary tokens while waiting for the design pipeline:

- Add temporary variables in `scss/_variables.scss` with `!default` and a `// TODO: replace with OUDS token` comment.
- For composite tokens (elevation, icons, font stacks), edit `packages/<brand>/scss/tokens/_composite.scss` -- this is the only token file you can edit by hand.

**Never edit** `_raw.scss`, `_semantic.scss`, `_component.scss`, or `_*-custom-props.scss`.

#### 4. Create the JavaScript component (if interactive)

Create `js/src/my-component.js` following the universal structure:

```javascript
/**
 * --------------------------------------------------------------------------
 * OUDS Web my-component.js
 * Licensed under MIT (https://github.com/nicoco007/Orange-Boosted-Bootstrap/blob/ouds/main/LICENSE)
 * --------------------------------------------------------------------------
 */

import BaseComponent from "./base-component.js";
import EventHandler from "./dom/event-handler.js";

/**
 * Constants
 */

const NAME = "mycomponent";
const DATA_KEY = "bs.mycomponent";
const EVENT_KEY = `.${DATA_KEY}`;
const DATA_API_KEY = ".data-api";
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="mycomponent"]';

/**
 * Class definition
 */

class MyComponent extends BaseComponent {
  static get NAME() {
    return NAME;
  }

  // Public
  toggle() {
    // ...
  }

  dispose() {
    // Component-specific cleanup
    super.dispose();
  }

  // Private
  _doSomething() {
    // ...
  }

  // Static
  static jQueryInterface(config) {
    return this.each(function () {
      const data = MyComponent.getOrCreateInstance(this, config);

      if (typeof config !== "string") {
        return;
      }

      if (typeof data[config] === "undefined") {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config]();
    });
  }
}

/**
 * Data API implementation
 */

EventHandler.on(
  document,
  EVENT_CLICK_DATA_API,
  SELECTOR_DATA_TOGGLE,
  function (event) {
    event.preventDefault();
    MyComponent.getOrCreateInstance(this).toggle();
  },
);

/**
 * jQuery
 */

defineJQueryPlugin(MyComponent);

export default MyComponent;
```

#### 5. Register the JS component

Add the export to the main bundle entry point and to the Rollup config (`build/rollup.config.mjs`).

#### 6. Add tokens in ALL brand packages

If the component needs brand-specific tokens, ensure they exist in:

- `packages/orange/scss/tokens/_component.scss` (auto-generated -- request from design)
- `packages/sosh/scss/tokens/_component.scss`
- `packages/orange-compact/scss/tokens/_component.scss`

#### 7. Write tests

Create `js/tests/unit/my-component.spec.js` (see [Testing patterns](#testing-patterns)).

#### 8. Write documentation

Create `site/src/content/docs/components/my-component.mdx` (see [Documentation patterns](#documentation-patterns)).

#### 9. Verify

```bash
npm run lint      # Stylelint + ESLint
npm run dist      # Build CSS + JS
npm run js-test   # Run JS tests
npm run test      # Full suite
```

---

## Testing patterns

### Framework and configuration

| Aspect              | Value                                                  |
| ------------------- | ------------------------------------------------------ |
| Framework           | Jasmine (via Karma)                                    |
| Runner              | Karma with Rollup preprocessor                         |
| Browser             | ChromeHeadless (local), BrowserStack (CI)              |
| Coverage thresholds | 90% statements, 89% branches, 90% functions, 90% lines |

### Test file location

```
js/tests/unit/<component>.spec.js           # Component tests
js/tests/unit/dom/<helper>.spec.js          # DOM helper tests
js/tests/unit/util/<utility>.spec.js        # Utility tests
js/tests/helpers/fixture.js                 # Shared test helpers
```

### Standard test skeleton

```javascript
import MyComponent from "../../src/my-component.js";
import EventHandler from "../../src/dom/event-handler.js";
import {
  clearFixture,
  getFixture,
  createEvent,
  jQueryMock,
} from "../helpers/fixture.js";

describe("MyComponent", () => {
  let fixtureEl;

  beforeAll(() => {
    fixtureEl = getFixture(); // Create off-screen fixture div (once)
  });

  afterEach(() => {
    clearFixture(); // Clear innerHTML between tests
  });

  describe("VERSION", () => {
    it("should return plugin version", () => {
      expect(MyComponent.VERSION).toEqual(jasmine.any(String));
    });
  });

  describe("constructor", () => {
    it("should accept element as CSS selector or DOM element", () => {
      fixtureEl.innerHTML = '<div class="my-component"></div>';
      const el = fixtureEl.querySelector(".my-component");
      const instance = new MyComponent(el);
      expect(MyComponent.getInstance(el)).not.toBeNull();
      instance.dispose();
    });
  });

  describe("toggle", () => {
    it("should toggle the component", () => {
      return new Promise((resolve) => {
        fixtureEl.innerHTML = '<div class="my-component"></div>';
        const el = fixtureEl.querySelector(".my-component");
        const instance = new MyComponent(el);

        el.addEventListener("shown.bs.mycomponent", () => {
          expect(el).toHaveClass("show");
          resolve();
        });

        instance.toggle();
      });
    });
  });

  describe("dispose", () => {
    it("should remove instance on dispose", () => {
      fixtureEl.innerHTML = '<div class="my-component"></div>';
      const el = fixtureEl.querySelector(".my-component");
      const instance = new MyComponent(el);
      expect(MyComponent.getInstance(el)).not.toBeNull();
      instance.dispose();
      expect(MyComponent.getInstance(el)).toBeNull();
    });
  });

  describe("jQueryInterface", () => {
    it("should call a method", () => {
      fixtureEl.innerHTML = '<div class="my-component"></div>';
      const el = fixtureEl.querySelector(".my-component");
      const instance = new MyComponent(el);
      const spy = spyOn(instance, "toggle");
      jQueryMock.fn.mycomponent = MyComponent.jQueryInterface;
      jQueryMock.elements = [el];
      jQueryMock.fn.mycomponent.call(jQueryMock, "toggle");
      expect(spy).toHaveBeenCalled();
    });

    it("should throw on undefined method", () => {
      fixtureEl.innerHTML = '<div class="my-component"></div>';
      const el = fixtureEl.querySelector(".my-component");
      jQueryMock.fn.mycomponent = MyComponent.jQueryInterface;
      jQueryMock.elements = [el];
      expect(() => {
        jQueryMock.fn.mycomponent.call(jQueryMock, "undefinedMethod");
      }).toThrowError(TypeError, 'No method named "undefinedMethod"');
    });
  });

  describe("getInstance", () => {
    it("should return null when no instance", () => {
      expect(MyComponent.getInstance(fixtureEl)).toBeNull();
    });
  });

  describe("getOrCreateInstance", () => {
    it("should create instance if none exists", () => {
      fixtureEl.innerHTML = '<div class="my-component"></div>';
      const el = fixtureEl.querySelector(".my-component");
      expect(MyComponent.getInstance(el)).toBeNull();
      expect(MyComponent.getOrCreateInstance(el)).toBeInstanceOf(MyComponent);
    });
  });
});
```

### Describe block organization (standard order)

1. `VERSION` / `Default` / `DefaultType` / `DATA_KEY` -- static property tests
2. `constructor` -- initialization tests
3. One `describe` per public method (`show`, `hide`, `toggle`, `dispose`)
4. `data-api` -- declarative HTML-driven behavior
5. `jQueryInterface` -- jQuery plugin tests
6. `getInstance` / `getOrCreateInstance` -- static factory tests

### HTML fixture setup

Fixtures are set inline per test using `fixtureEl.innerHTML`. There are no external fixture files.

```javascript
// Simple
fixtureEl.innerHTML = '<div class="alert"></div>';

// Multi-line (array join pattern)
fixtureEl.innerHTML = [
  '<div class="modal fade">',
  '  <div class="modal-dialog">',
  '    <div class="modal-content">',
  '      <button type="button" data-bs-dismiss="modal"></button>',
  "    </div>",
  "  </div>",
  "</div>",
].join("");
```

OUDS-specific fixtures include full accessibility attributes:

```javascript
fixtureEl.innerHTML = [
  '<div class="quantity-selector">',
  '  <input type="number" class="form-control" aria-live="polite"',
  '    data-bs-step="counter" value="1" min="0" max="10" step="1"',
  '    data-bs-round="0" aria-label="Quantity selector" />',
  '  <button type="button" class="btn btn-icon btn-default"',
  '    data-bs-step="down"><span class="visually-hidden">Step down</span></button>',
  '  <button type="button" class="btn btn-icon btn-default"',
  '    data-bs-step="up"><span class="visually-hidden">Step up</span></button>',
  "</div>",
].join("");
```

### Async testing pattern

The dominant pattern is `return new Promise(resolve => { ... })`:

```javascript
it("should fire shown event", () => {
  return new Promise((resolve) => {
    el.addEventListener("shown.bs.mycomponent", () => {
      expect(el).toHaveClass("show");
      resolve();
    });

    instance.show();
  });
});
```

For testing event prevention:

```javascript
it("should not fire shown when show is prevented", () => {
  return new Promise((resolve, reject) => {
    el.addEventListener("show.bs.mycomponent", (event) => {
      event.preventDefault();
      setTimeout(() => {
        expect().nothing();
        resolve();
      }, 10);
    });

    el.addEventListener("shown.bs.mycomponent", () => {
      reject(new Error("shown event should not fire"));
    });

    instance.show();
  });
});
```

### Synthetic event dispatch

```javascript
const keydownEscape = createEvent("keydown");
keydownEscape.key = "Escape";
el.dispatchEvent(keydownEscape);

const loadEvent = createEvent("load");
window.dispatchEvent(loadEvent);
```

### Key conventions

- **No semicolons** in test code (same as source).
- `beforeAll` creates the fixture once; `afterEach` clears it.
- Jasmine spies: `spyOn(object, 'method')`, `jasmine.createSpy()`.
- jQuery mock: `jQueryMock.fn.component = Component.jQueryInterface; jQueryMock.elements = [el]`.
- Small timeouts (10-30ms) to verify non-occurrence of events.

---

## Documentation patterns

### Documentation site technology

The docs site is built with **Astro 5.x** using MDX content collections. Pages are brand-parameterized via routes: `/[brand]/docs/components/<name>`.

### Doc file location

```
site/src/content/docs/components/<component>.mdx
```

46 component doc files exist, one per component.

### Frontmatter schema

```yaml
---
title: Component Name # Required
description: Short description # Required
toc: true # Almost always true
aliases: # URL redirects
  - "/docs/components/component/"
  - "/docs/[[config:docs_version]]/components/component/"
types: # Component sub-types (for overview cards)
  - Sub Type A
  - Sub Type B
added: # Optional: version badge
  version: "1.1"
---
```

### Standard doc structure

Every component doc follows this hierarchy:

```
## Overview
  ### Component types          ← Card grid showing visual previews
  ### Approach                 ← (optional) Technical explanation
  ### Accessibility            ← Always present
    #### Semantics
    #### Information for visually impaired users
    #### Dynamic behavior      ← (optional, for JS components)

## <svg icon/>Component Type 1 ← One H2 per sub-type from frontmatter `types`
  ### Variants
    #### Status
      ##### Non-functional
      ##### Functional
    #### With icon
    #### Colored background    ← (optional)
  ### States
    #### Disabled
    #### Loading               ← (optional)
    #### Skeleton
  ### Sizes
  ### Layout

## JavaScript                  ← (for interactive components)
  ### Initialize
  ### Triggers
  ### Methods                  ← <BsTable> with method docs
  ### Events                   ← <BsTable> with event docs
```

### Key Astro components used in docs

| Component                  | Purpose                                     | Usage                                                   |
| -------------------------- | ------------------------------------------- | ------------------------------------------------------- |
| `<Example>`                | Live HTML preview + syntax-highlighted code | `<Example code={`<div>...</div>`} />`                   |
| `<Callout>`                | Alert boxes (info/warning)                  | `<Callout type="warning">text</Callout>`                |
| `<CalloutSoon>`            | "Not yet available" placeholder             | `<CalloutSoon />`                                       |
| `<ScssDocs>`               | Pull SCSS source between markers            | `<ScssDocs name="vars" file="scss/_variables.scss" />`  |
| `<JsDocs>`                 | Pull JS source between markers              | `<JsDocs name="snippet" file="site/.../snippets.js" />` |
| `<BsTable>`                | Responsive table wrapper                    | Wraps markdown tables                                   |
| `<BootstrapCompatibility>` | Collapsible Bootstrap compat section        | Wraps legacy Bootstrap examples                         |
| `<BrandSpecific>`          | Brand-conditional content                   | `<BrandSpecific brand="orange">...</BrandSpecific>`     |
| `<AddedIn>`                | "Added in vX.X" badge                       | `<AddedIn version="1.1" />`                             |

### Example component usage

```jsx
// Basic example with preview and code
<Example code={`<button type="button" class="btn btn-default">Default</button>`} />

// Preview only, no code
<Example showMarkup={false} code={`...`} />

// Code only, no preview
<Example showPreview={false} code={`...`} />

// With custom classes on the preview container
<Example class="d-flex gap-large" code={`...`} />

// With JS initialization for StackBlitz
<Example buttonLabel="tooltip demo" addStackblitzJs code={`...`} />
```

### Accessibility documentation conventions

1. Every doc has an `### Accessibility` section under `## Overview`.
2. `<Callout type="warning">` boxes appear before color-dependent and icon-only sections.
3. Every `<Example>` includes correct ARIA attributes: `aria-label`, `aria-hidden="true"`, `.visually-hidden`, `role`, etc.
4. Disabled patterns show both `disabled` attribute and `aria-disabled="true"`.

### Internal link placeholder

Docs use `[[docsref:...]]` placeholders for internal links:

```jsx
[colored backgrounds]([[docsref:/utilities/background#colored-background]])
```

These resolve at build time to the correct versioned/branded path.

---

## Storybook patterns

### Architecture: auto-generated from docs

Stories are **not written by hand**. They are fully auto-generated from the documentation site's rendered HTML examples via Puppeteer.

```
MDX docs → Astro build → Puppeteer scrapes .bd-example elements → CSF story files
```

### Pipeline

```bash
npm run storybook          # generate + dev server
npm run storybook-generate # docs-build + scrape + generate stories
```

The generator script (`stories/create-stories-from-doc.js`):

1. Builds the docs site with Astro.
2. Launches headless Chrome via Puppeteer.
3. Navigates to each built doc page.
4. Extracts every `.bd-example` element's `innerHTML`.
5. Wraps each in a CSF story export.
6. Writes to `stories/auto/<PascalCaseName>/<PascalCaseName>.stories.js`.

### Story file structure

All stories follow this minimal CSF pattern:

```javascript
export default {
  title: "Components/<ComponentName>",
  parameters: { docs: { toc: true } },
};

export const ComponentName_0 =
  () => `<div class="bd-example ...">...HTML...</div>
<script type="text/javascript">
  document.querySelectorAll('[href]').forEach(link => {
    link.addEventListener('click', event => { event.preventDefault() })
  })
</script>`;

export const ComponentName_1 = () => `...`;
```

### Key characteristics

| Aspect        | Value                                                                 |
| ------------- | --------------------------------------------------------------------- |
| Story format  | CSF 1/2 (function returning HTML string)                              |
| Args/controls | None -- static HTML snapshots                                         |
| Brand         | Orange only                                                           |
| Dark mode     | Toggle via `@storybook/addon-themes` (sets `data-bs-theme` attribute) |
| Accessibility | `@storybook/addon-a11y` runs axe-core audits per story                |
| Location      | `stories/auto/<PascalCaseName>/`                                      |
| Naming        | `<ComponentName>_<sequentialIndex>`                                   |

### What Storybook is NOT in this project

- Not a component playground (no interactive controls).
- Not multi-brand (Orange only).
- Not hand-maintained (fully regenerated on each build).
- Not used for interaction testing (no play functions).

---

_This file was generated to provide context for AI agents and LLMs working on the OUDS Web codebase. Keep it up to date when components, conventions, or tooling changes._
