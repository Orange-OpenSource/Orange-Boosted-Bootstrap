---
name: ouds-create-component
description: >
  Step-by-step workflow for creating a new SCSS and/or JavaScript component in OUDS Web.
  Covers SCSS structure, token setup, multi-brand token files, JS component boilerplate,
  ARIA/accessibility requirements, and testing checklist.
when_to_use:
  - Creating a new UI component not yet in OUDS Web
  - Adding a new form component (scss/forms/)
  - Creating an OUDS-specific component beyond Bootstrap
  - Scaffolding a new JavaScript-driven interactive component
---

# Command: Create a New OUDS Web Component

## When to Use

- You need to create a new SCSS component (`scss/_my-component.scss`)
- You need a form component (`scss/forms/_my-component.scss`)
- The component requires interactive behavior (new `js/src/my-component.js`)
- You need to add component tokens to all brand packages

## Checkpoints

- Is this component truly new, or a variant/modification of an existing one?
- Does it need JavaScript (interactive: toggle, dismiss, expand)? Or CSS-only?
- Do component tokens already exist in `packages/*/scss/tokens/_component.scss`?
- Is it brand-specific or shared across all 3 brands?

---

## Steps

### 1. Create the SCSS file

Create `scss/_my-component.scss` (or `scss/forms/_my-component.scss` for form components).

Follow this exact structure:

```scss
// scss/_my-component.scss

//
// My Component
//

// Root-level variable (only if needed globally, e.g., for shared border-radius)
#{$ouds-root-selector} {
  --#{$prefix}my-component-border-radius: #{$ouds-my-component-border-radius-default};
}

.my-component {
  // scss-docs-start my-component-css-vars
  --#{$prefix}my-component-padding-y: #{$ouds-my-component-space-padding-block};
  --#{$prefix}my-component-padding-x: #{$ouds-my-component-space-padding-inline};
  --#{$prefix}my-component-color: #{$ouds-color-content-default};
  --#{$prefix}my-component-bg: #{$ouds-color-bg-primary};
  --#{$prefix}my-component-border-color: #{$ouds-color-border-default};
  // scss-docs-end my-component-css-vars

  display: flex;
  padding: var(--#{$prefix}my-component-padding-y) var(--#{$prefix}my-component-padding-x);
  color: var(--#{$prefix}my-component-color);
  background-color: var(--#{$prefix}my-component-bg);
  border: $ouds-border-width-default solid var(--#{$prefix}my-component-border-color);
  @include border-radius(var(--#{$prefix}my-component-border-radius));
  @include transition($transition-base);

  // States — override CSS custom properties, not CSS properties
  &:hover {
    --#{$prefix}my-component-bg: #{$ouds-color-bg-secondary};
  }

  &:focus-visible {
    @include focus-visible();
  }

  &:disabled,
  &[aria-disabled="true"] {
    --#{$prefix}my-component-color: #{$ouds-color-content-disabled};
    pointer-events: none;
    cursor: not-allowed;
  }
}

// Variants
.my-component-variant {
  --#{$prefix}my-component-bg: #{$ouds-color-surface-brand};
}
```

Rules to follow:
- Use design tokens, never hardcode values (`16px`, `#ff7900`)
- Use `@include border-radius()` and `@include transition()` — never direct properties
- Use `var(--#{$prefix}color-*)` for all colors (enables dark mode)
- Use `border: 0` not `border: none`
- Always add `// scss-docs-start` / `// scss-docs-end` markers
- Use `color: var(...)` for interactive states by overriding CSS custom properties

### 2. Import the SCSS in the brand entry point(s)

Add the import to `packages/<brand>/scss/ouds-web.scss` for **all 3 brands**:

```scss
// In ouds-web.scss — OUDS Web components section
@import "@ouds/web-common/scss/my-component";
```

If it's a form component, also add to `scss/_forms.scss`:

```scss
@import "forms/my-component";
```

### 3. Add component tokens to all 3 brand packages

**Do not edit `_raw.scss`, `_semantic.scss`, or `_component.scss`** — they are auto-generated.

If waiting for design pipeline tokens, add temporary fallbacks to `scss/_variables.scss`:

```scss
// scss/_variables.scss — temporary until token is auto-generated
// TODO: replace with OUDS token when pipeline delivers
$ouds-my-component-border-radius-default: $ouds-border-radius-default !default;
$ouds-my-component-space-padding-block: $ouds-space-padding-block-medium !default;
$ouds-my-component-space-padding-inline: $ouds-space-padding-inline-medium !default;
```

For composite tokens (elevation, icons, font-stacks), add to **each** `_composite.scss`:

```scss
// packages/orange/scss/tokens/_composite.scss
$ouds-my-component-elevation: $ouds-elevation-raised !default;

// packages/sosh/scss/tokens/_composite.scss
$ouds-my-component-elevation: $ouds-elevation-raised !default;

// packages/orange-compact/scss/tokens/_composite.scss
$ouds-my-component-elevation: $ouds-elevation-raised !default;
```

> **⚠️** When real tokens arrive via the design pipeline PR, remove the temporary variables from `_variables.scss`.

### 4. Add ARIA and accessibility requirements to the markup

Review the component's interaction pattern and add the required ARIA:

| Pattern | Required |
|---|---|
| Toggles open/closed | `aria-expanded="true/false"` on trigger |
| Has a label from nearby text | `aria-labelledby="id-of-label"` |
| Icon-only button | `aria-label="Action name"` + `aria-hidden="true"` on icon |
| Dynamic content update | `aria-live="polite"` or `role="status"` |
| Disabled state | `aria-disabled="true"` |
| Loading/busy state | `aria-busy="true"` |

```html
<!-- Example: toggleable component -->
<button
  class="my-component-trigger"
  type="button"
  aria-expanded="false"
  aria-controls="my-component-content"
>
  Toggle
</button>
<div id="my-component-content" class="my-component" hidden>
  Content here.
</div>
```

### 5. Create the JS component (if interactive)

Create `js/src/my-component.js` following this template:

```javascript
'use strict'

import BaseComponent from './base-component.js'
import EventHandler from './dom/event-handler.js'
import { defineJQueryPlugin } from './util/index.js'

const NAME = 'mycomponent'
const DATA_KEY = `bs.${NAME}`
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'

const EVENT_SHOW    = `show${EVENT_KEY}`
const EVENT_SHOWN   = `shown${EVENT_KEY}`
const EVENT_HIDE    = `hide${EVENT_KEY}`
const EVENT_HIDDEN  = `hidden${EVENT_KEY}`
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`

const CLASS_NAME_SHOW = 'show'
const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="mycomponent"]'

const Default = {}
const DefaultType = {}

class MyComponent extends BaseComponent {
  constructor(element, config) {
    super(element, config)
  }

  static get Default() { return Default }
  static get DefaultType() { return DefaultType }
  static get NAME() { return NAME }

  // Public
  show() {
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW)
    if (showEvent.defaultPrevented) {
      return
    }
    this._element.classList.add(CLASS_NAME_SHOW)
    this._element.setAttribute('aria-expanded', true)
    EventHandler.trigger(this._element, EVENT_SHOWN)
  }

  hide() {
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE)
    if (hideEvent.defaultPrevented) {
      return
    }
    this._element.classList.remove(CLASS_NAME_SHOW)
    this._element.setAttribute('aria-expanded', false)
    EventHandler.trigger(this._element, EVENT_HIDDEN)
  }

  dispose() {
    super.dispose()
  }

  static jQueryInterface(config) {
    return this.each(function () {
      const data = MyComponent.getOrCreateInstance(this, config)
      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`)
        }
        data[config]()
      }
    })
  }
}

EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
  event.preventDefault()
  MyComponent.getOrCreateInstance(this).show()
})

defineJQueryPlugin(MyComponent)

export default MyComponent
```

Register the JS component in `js/index.umd.js` and `js/index.esm.js`:

```javascript
export { default as MyComponent } from './src/my-component.js'
```

### 6. Write unit tests

Create `js/tests/unit/my-component.spec.js`:

```javascript
import MyComponent from '../../../js/src/my-component.js'

describe('MyComponent', () => {
  let element

  beforeEach(() => {
    element = document.createElement('div')
    document.body.appendChild(element)
  })

  afterEach(() => {
    document.body.removeChild(element)
  })

  describe('show', () => {
    it('should add show class', () => {
      const component = new MyComponent(element)
      component.show()
      expect(element.classList.contains('show')).toBeTrue()
    })
  })
})
```

Run: `npm run js-test`

### 7. Create the documentation page

Create `site/src/content/docs/components/my-component.mdx` using this pattern:

```mdx
---
title: My Component
description: Brief description of what the component does and when to use it.
---

import Example from '…/…/components/Example.astro'

## Overview

Brief description. When to use this component.

## Basic usage

<Example>
  <div class="my-component">My component content</div>
</Example>

## Variants

<Example>
  <div class="my-component my-component-variant">Variant content</div>
</Example>
```

### 8. Build and verify

```bash
# Build CSS and JS
npm run dist

# Lint
npm run lint

# Run JS tests
npm run js-test

# Start docs server and verify visual output for all brands
npm run start
# Orange:         http://localhost:9001/orange/
# Sosh:           http://localhost:9002/sosh/
# Orange Compact: http://localhost:9003/orange-compact/

# Test dark mode: add data-bs-theme="dark" to container in browser
# Test RTL: add dir="rtl" to <html> in browser
```

### Pre-checklist before PR

- [ ] Design tokens used — no hardcoded values
- [ ] `@include border-radius()` and `@include transition()` — no direct properties
- [ ] `border: 0` — not `border: none`
- [ ] ARIA attributes present and correct
- [ ] `.visually-hidden` on icon-only labels
- [ ] `@include focus-visible()` on `:focus-visible`
- [ ] Dark mode: colors use `var(--#{$prefix}color-*)`
- [ ] RTL: no physical directional hardcoding
- [ ] Tokens added to all 3 brand packages (if new tokens created)
- [ ] `npm run lint` passes
- [ ] `npm run dist` succeeds
- [ ] No `dist/` files committed
