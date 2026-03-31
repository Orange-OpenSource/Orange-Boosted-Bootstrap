# Code Conventions — OUDS Web

> Detailed style guide for HTML, SCSS, and JavaScript contributions to OUDS Web.
> For a quick overview, see the [Code conventions section in AGENTS.md](../AGENTS.md#code-conventions).

---

## Table of contents

1. [File formatting](#file-formatting)
2. [HTML conventions](#html-conventions)
3. [SCSS conventions](#scss-conventions)
4. [JavaScript conventions](#javascript-conventions)
5. [Comment conventions](#comment-conventions)
6. [Testing conventions](#testing-conventions)
7. [Build and tooling](#build-and-tooling)
8. [Linter quick-reference](#linter-quick-reference)

---

## File formatting

All source files follow the `.editorconfig` at the repository root:

| Setting | Value |
|---|---|
| Charset | UTF-8 |
| Line endings | LF (Unix) |
| Indentation | **2 spaces** (no tabs) |
| Final newline | Always present |
| Trailing whitespace | Trimmed |

These rules apply to **every** file type: SCSS, JS, HTML, MDX, JSON, YAML.

---

## HTML conventions

### General rules

- Follow the [Code Guide](https://codeguide.co/#html) for attribute order, self-closing tags, and overall style.
- Use **HTML5 semantic elements**: `<nav>`, `<main>`, `<article>`, `<section>`, `<header>`, `<footer>`, `<aside>`.
- Use `<button>` for actions and `<a>` for navigation — never use `<div>` or `<span>` for interactive elements.
- Use CDNs over HTTPS for third-party resources.

### Attribute order

Follow Code Guide's recommended attribute order:

1. `class`
2. `id`, `name`
3. `data-*`
4. `src`, `for`, `type`, `href`, `value`
5. `title`, `alt`
6. `role`, `aria-*`
7. `tabindex`

### Data attributes

All JavaScript-driven behaviors use `data-bs-*` prefixed attributes:

```html
<!-- Dismissal -->
<button data-bs-dismiss="alert">Close</button>

<!-- Toggle -->
<button data-bs-toggle="button">Toggle</button>
<button data-bs-toggle="collapse" data-bs-target="#myCollapse">Expand</button>

<!-- Color mode -->
<div data-bs-theme="dark">...</div>

<!-- Input decoration -->
<div class="input-container" data-bs-prefix="https://" data-bs-suffix=".com">
  <input type="text" class="text-input-field" placeholder=" ">
</div>
```

### Accessibility requirements in markup

Every piece of markup must comply with **WCAG 2.1 Level AA**. These patterns are mandatory:

| Pattern | Implementation |
|---|---|
| Decorative icons | `aria-hidden="true"` on SVGs that are purely visual |
| Screen-reader text | `.visually-hidden` on `<span>` or `<p>` inside visual elements |
| Form validation | `aria-invalid="true"` on invalid inputs |
| Form helpers | `aria-describedby` linking inputs to helper/error text by `id` |
| Close buttons | `aria-labelledby` referencing the button and the element being closed |
| Lists/groups | `aria-label` on `<ul>` or `role="group"` containers |
| Toggle states | `aria-pressed="true"` on active toggle buttons |
| Expanded states | `aria-expanded="true"` / `"false"` on collapsible triggers |
| Disabled state | `aria-disabled="true"` (defensive CSS hooks this attribute) |
| Loading states | `aria-busy="true"` on skeleton/loading containers |

```html
<!-- Alert with accessible icon -->
<div class="alert alert-message alert-negative" role="alert">
  <div class="alert-icon"><p class="visually-hidden">Error</p></div>
  <div class="alert-container">
    <h3 class="alert-label">Something went wrong</h3>
  </div>
  <button class="btn-close" data-bs-dismiss="alert"
          aria-labelledby="btn-close-alert alert-heading">
    <span class="visually-hidden">Close</span>
  </button>
</div>
```

**Never** use `display: none` to hide content that should be announced by screen readers — use `.visually-hidden` instead.

### Color mode attribute

Color modes are controlled via the `data-bs-theme` attribute on HTML elements. Never use `prefers-color-scheme` media queries for theme switching.

```html
<!-- Explicit light mode -->
<div data-bs-theme="light">...</div>

<!-- Explicit dark mode -->
<div data-bs-theme="dark">...</div>
```

---

## SCSS conventions

### Variable naming formula

All SCSS variables follow the pattern:

```
$component-state-property-size
```

Examples:
- `$nav-link-disabled-color`
- `$modal-content-box-shadow-xs`
- `$btn-padding-y`
- `$alert-border-width`

### The `!default` flag

**Every** SCSS variable must use `!default` — except local/temporary variables inside mixins or functions:

```scss
// Global variables — always use !default
$btn-padding-y: $ouds-button-space-padding-block !default;
$btn-border-width: $ouds-button-border-width-default !default;

// Local variables inside a mixin — no !default needed
@mixin my-mixin($size) {
  $computed: $size * 2;
  padding: $computed;
}
```

Sass maps also require `!default`:

```scss
$theme-colors: (
  "primary": $primary,
  "secondary": $secondary
) !default;
```

### Design token usage

Always use OUDS design tokens. Never hardcode colors, dimensions, or spacing values.

```scss
// Use semantic tokens for dimensions/spacing
padding: $ouds-space-padding-block-medium;
border-width: $ouds-border-width-default;

// Use CSS custom properties for colors (enables dark mode)
color: var(--#{$prefix}color-content-default);
background: var(--#{$prefix}color-bg-primary);

// Use component tokens for component-specific values
margin: $ouds-card-space-padding-block;
```

**Never** use raw tokens in component SCSS:

```scss
// WRONG — raw tokens couple components to primitives
padding: $core-ouds-dimension-200;
color: $core-orange-color-orange-550;
```

### CSS custom properties

All custom properties use the `--bs-` prefix, generated via the `$prefix` variable from `scss/_config.scss`:

```scss
// Declaring custom properties
--#{$prefix}btn-color: #{$btn-color};
--#{$prefix}btn-bg: transparent;

// Consuming custom properties
color: var(--#{$prefix}btn-color);
background-color: var(--#{$prefix}btn-bg);

// With fallback
color: var(--#{$prefix}color-local, var(--#{$prefix}color-content-default));
```

### Root selector

Use the configurable `$ouds-root-selector` variable instead of hardcoding `:root`:

```scss
// Correct
#{$ouds-root-selector} {
  --#{$prefix}btn-border-radius: #{$btn-border-radius};
}

// Wrong
:root {
  --bs-btn-border-radius: 4px;
}
```

### Required mixins

Stylelint **forbids** using certain CSS properties directly. You must use the corresponding mixins instead:

| Forbidden direct property | Required mixin |
|---|---|
| `border-radius` | `@include border-radius($value)` |
| `border-top-left-radius` | `@include border-top-start-radius($value)` |
| `border-top-right-radius` | `@include border-top-end-radius($value)` |
| `border-bottom-right-radius` | `@include border-bottom-end-radius($value)` |
| `border-bottom-left-radius` | `@include border-bottom-start-radius($value)` |
| `transition` | `@include transition($value)` |

```scss
// Correct
@include border-radius($ouds-border-radius-default);
@include transition(opacity .15s linear);

// Wrong — will fail Stylelint
border-radius: 4px;
transition: opacity .15s linear;
```

The `border-radius` mixin respects the `$enable-rounded` feature flag. The `transition` mixin respects `$enable-transitions` and automatically injects `prefers-reduced-motion: reduce` media queries for accessibility.

### Disallowed values and functions

| Rule | Disallowed | Use instead |
|---|---|---|
| `border: none` | Stylelint violation | `border: 0` |
| `outline: none` | Stylelint violation | Provide a visible focus alternative |
| `lighten()` | Breaks token system | Use the appropriate lighter token variant |
| `darken()` | Breaks token system | Use the appropriate darker token variant |

### Color mode declarations

Use the `color-mode()` mixin for theme-specific styles:

```scss
// Light mode (default)
@include color-mode(light, true) {
  --#{$prefix}color-action-enabled: #{$ouds-color-action-enabled-light};
}

// Dark mode
@include color-mode(dark) {
  --#{$prefix}color-action-enabled: #{$ouds-color-action-enabled-dark};
}
```

Never use raw `prefers-color-scheme` media queries or hardcode `[data-bs-theme="light"]` selectors.

### RTL support

RTL layout is handled automatically by `rtlcss` during the build. When a value must be excluded from RTL transformation, use inline directive comments:

```scss
// Prevent RTL flip on a specific value
stroke-dashoffset: 107 #{"/* rtl:ignore */"};

// Prevent RTL flip on an entire declaration
/* rtl:remove */
```

### Feature flags

Several boolean variables gate optional behavior:

| Flag | Default | Purpose |
|---|---|---|
| `$enable-rounded` | `true` | Controls `border-radius` output |
| `$enable-transitions` | `true` | Controls transition output + reduced motion |
| `$enable-button-pointers` | `true` | Adds `cursor: pointer` on buttons |
| `$enable-bootstrap-compatibility` | varies | Gates legacy Bootstrap CSS variable generation |

### `fusv` markers

The "Flag Unused Sass Variables" linter check is suppressed around variables that are only consumed inside Sass maps:

```scss
// fusv-disable
$grays: (
  "100": $gray-100,
  "200": $gray-200
) !default;
// fusv-enable
```

### Stylelint disable comments

When a Stylelint rule must be disabled (e.g., inside a mixin that wraps a forbidden property), use a targeted disable at the file level:

```scss
// stylelint-disable property-disallowed-list
@mixin border-radius($radius: $border-radius) {
  @if $enable-rounded {
    border-radius: valid-radius($radius);
  }
}
```

Never use blanket `/* stylelint-disable */` — always specify the rule name.

### SCSS file organization

Component SCSS files follow this structure:

```scss
//
// Section header comment
//

// 1. Root-level custom properties (if needed)
#{$ouds-root-selector} {
  --#{$prefix}component-property: #{$value};
}

// 2. Main component class
.component {
  // scss-docs-start component-css-vars
  --#{$prefix}component-var: #{$value};
  // scss-docs-end component-css-vars

  // Structural properties
  display: flex;
  padding: var(--#{$prefix}component-padding);

  // Visual properties
  color: var(--#{$prefix}component-color);
  @include border-radius(var(--#{$prefix}component-border-radius));

  // States
  &:hover { ... }
  &:focus-visible { ... }
  &:active { ... }

  // Disabled
  &:disabled,
  &[aria-disabled="true"] { ... }
}

// 3. Variants
.component-variant { ... }

// 4. Sizing
.component-sm { ... }
.component-lg { ... }
```

---

## JavaScript conventions

### Style rules

| Rule | Detail |
|---|---|
| **Semicolons** | None — enforced by ESLint (`"semi": ["error", "never"]`) |
| **Indentation** | 2 spaces |
| **Trailing commas** | None — enforced by ESLint (`"comma-dangle": ["error", "never"]`) |
| **String quotes** | Prefer template literals for interpolation; single quotes otherwise |
| **Strict mode** | Required in all files (`"strict": "error"`) |
| **Console** | No `console.log` in production code (`"no-console": "error"`) |
| **Object curly spacing** | Spaces inside braces (`{ foo }` not `{foo}`) |
| **Imports** | Always include `.js` extension (`import/extensions` rule) |
| **Variable declarations** | `const` by default; `let` only when reassignment is needed; never `var` |
| **Functions** | Arrow function expressions for utilities; class methods for components |
| **Number parsing** | `Number.parseFloat()` preferred over global `parseFloat()` |

### File structure

Every JS component file follows this canonical order:

```javascript
/**
 * --------------------------------------------------------------------------
 * Bootstrap <filename>.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

// 1. Imports
import BaseComponent from './base-component.js'
import EventHandler from './dom/event-handler.js'
import { defineJQueryPlugin } from './util/index.js'

/**
 * Constants
 */

// 2. Constants
const NAME = 'myComponent'
const DATA_KEY = 'bs.myComponent'
const EVENT_KEY = `.${DATA_KEY}`

const EVENT_SHOW = `show${EVENT_KEY}`
const EVENT_HIDE = `hide${EVENT_KEY}`
const CLASS_NAME_SHOW = 'show'
const CLASS_NAME_ACTIVE = 'active'
const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="myComponent"]'

const Default = { ... }
const DefaultType = { ... }

/**
 * Class definition
 */

// 3. Class
class MyComponent extends BaseComponent {
  // Getters
  static get NAME() {
    return NAME
  }

  static get Default() {
    return Default
  }

  static get DefaultType() {
    return DefaultType
  }

  // Public
  show() { ... }
  hide() { ... }

  // Private
  _doSomething() { ... }

  // Static
  static jQueryInterface(config) { ... }
}

/**
 * Data API implementation
 */

// 4. Data API event listeners
EventHandler.on(document, 'click', SELECTOR_DATA_TOGGLE, function (event) { ... })

/**
 * jQuery
 */

// 5. jQuery plugin registration
defineJQueryPlugin(MyComponent)

export default MyComponent
```

### Constant naming

| Prefix | Purpose | Example |
|---|---|---|
| `NAME` | Component name (lowercase camelCase) | `'alert'`, `'carousel'` |
| `DATA_KEY` | Data storage key | `'bs.alert'` |
| `EVENT_KEY` | Event namespace | `'.bs.alert'` |
| `EVENT_*` | Event name constants | `EVENT_CLOSE`, `EVENT_CLOSED`, `EVENT_SHOW` |
| `CLASS_NAME_*` | CSS class name constants | `CLASS_NAME_FADE`, `CLASS_NAME_SHOW` |
| `SELECTOR_*` | CSS selector constants | `SELECTOR_DATA_TOGGLE`, `SELECTOR_ACTIVE` |
| `Default` | Default options object | `{ offset: [0, 10] }` |
| `DefaultType` | Type-checking config | `{ offset: '(array|string|function)' }` |

All constants use `UPPER_SNAKE_CASE` except `Default` and `DefaultType` which use `PascalCase`.

### Class structure

All components extend `BaseComponent` (which itself extends `Config`).

Internal sections follow this exact order with these comment separators:

```javascript
class MyComponent extends BaseComponent {
  constructor(element, config) {
    super(element, config)
    // ...
  }

  // Getters
  static get NAME() { ... }

  // Public
  show() { ... }
  hide() { ... }
  dispose() { ... }

  // Private
  _internalMethod() { ... }

  // Static
  static getInstance(element) { ... }
  static jQueryInterface(config) { ... }
}
```

Private members are prefixed with `_`. There is no native `#private` usage.

### ESLint environment overrides

| Directory | Environment | Source type |
|---|---|---|
| `js/src/**` | Browser | ES module |
| `js/tests/unit/**` | Jasmine | ES module |
| `build/**` | Node.js | ES module |
| `site/**` | Browser | Script (with module exceptions) |

---

## Comment conventions

### OUDS modification markers

Since OUDS Web is a fork of Bootstrap, every modification to Bootstrap's original code is annotated with `// OUDS mod` comments. This enables tracking divergence from upstream.

There are **six distinct patterns**:

#### Pattern A: Inline replacement

Used when a single value or expression is changed from Bootstrap's original:

```scss
$white: $core-ouds-color-functional-white !default; // OUDS mod: instead of `#fff`
display: inline-flex; // OUDS mod: instead of `inline-block`
```

```javascript
offset: [0, 10], // OUDS mod: instead of `offset: [0, 6],`
```

#### Pattern B: Removed feature

Used when a Bootstrap feature is intentionally removed:

```scss
// OUDS mod: no --#{$prefix}btn-padding-x
// OUDS mod: no --#{$prefix}btn-font-family
// OUDS mod: no box-shadow
// OUDS mod: no transition
```

#### Pattern C: Simple addition

Used when a line is added with no corresponding Bootstrap original:

```scss
align-items: center; // OUDS mod
justify-content: center; // OUDS mod
```

```javascript
const CLASS_NAME_PAUSED = 'is-paused' // OUDS mod
export { default as OrangeNavbar } from './src/orange-navbar.js' // OUDS mod
```

#### Pattern D: Block modification

Used for multi-line additions or changes. Opened with `// OUDS mod: <description>` and closed with `// End mod`:

```scss
// OUDS mod: Animation keyframes
@keyframes rotate-determinate {
  0% { stroke-dashoffset: 107 #{"/* rtl:ignore */"}; }
  100% { stroke-dashoffset: 0 #{"/* rtl:ignore */"}; }
}
// End mod
```

```javascript
// OUDS mod: handle prev/next controls states
_disableControl(element) {
  if (element.nodeName === 'BUTTON') {
    element.disabled = true
  } else {
    element.setAttribute('aria-disabled', true)
    element.setAttribute('tabindex', '-1')
  }
}
// End mod
```

#### Pattern E: Explanation comment

Used to document the reason behind a change:

```scss
&[aria-disabled="true"] { // OUDS mod: Defensive CSS to force a11y
font-style: normal; // OUDS mod: remove italic.
box-shadow: none; // OUDS mod: prevent native validation styles to apply
```

#### Pattern F: Commented-out Bootstrap code

Used to preserve original Bootstrap code blocks for reference while disabling them:

```scss
// OUDS mod: no longer used
// Icon links
// scss-docs-start icon-link-variables
// $icon-link-gap:               .375rem !default;
// $icon-link-underline-offset:  .25em !default;
// scss-docs-end icon-link-variables
// End mod
```

### Documentation extraction markers

The `// scss-docs-start` and `// scss-docs-end` markers delimit code blocks that are extracted into the documentation site. Always preserve these markers and their names when editing code inside them.

```scss
// scss-docs-start btn-css-vars
--#{$prefix}btn-padding-y: #{$btn-padding-y};
--#{$prefix}btn-font-weight: #{$btn-font-weight};
// scss-docs-end btn-css-vars
```

```scss
// scss-docs-start border-radius-mixins
@mixin border-radius($radius: $border-radius, $fallback-border-radius: false) {
  // ...
}
// scss-docs-end border-radius-mixins
```

There are approximately **241** `scss-docs-start` markers across the codebase. They are used for:
- Variable blocks
- Sass maps
- CSS custom property groups
- Mixin definitions
- Utility class definitions
- Component style blocks

### Section comments

Use section headers in both SCSS and JS to organize code visually:

```scss
//
// Base styles
//

//
// Variants
//
```

```javascript
/**
 * Constants
 */

/**
 * Class definition
 */

/**
 * Data API implementation
 */

/**
 * jQuery
 */
```

### License headers

All JS files start with a license header block:

```javascript
/**
 * --------------------------------------------------------------------------
 * Bootstrap <filename>.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
```

---

## Testing conventions

### JavaScript unit tests

Tests use **Jasmine** and run via **Karma**. Test files are located in `js/tests/unit/`.

#### File naming

```
js/tests/unit/<component>.spec.js
```

#### Test structure

```javascript
import Alert from '../../src/alert.js'
import { clearFixture, getFixture, jQueryMock } from '../helpers/fixture.js'

describe('Alert', () => {
  let fixtureEl

  beforeAll(() => {
    fixtureEl = getFixture()
  })

  afterEach(() => {
    clearFixture()
  })

  it('should take care of element passed as CSS selector or DOM element', () => {
    fixtureEl.innerHTML = '<div class="alert"></div>'
    const alertEl = fixtureEl.querySelector('.alert')
    const alertBySelector = new Alert('.alert')
    expect(alertBySelector._element).toEqual(alertEl)
  })

  describe('data-api', () => {
    it('should close an alert without manual instantiation', () => {
      fixtureEl.innerHTML = [
        '<div class="alert">',
        '  <button type="button" data-bs-dismiss="alert">x</button>',
        '</div>'
      ].join('')

      document.querySelector('button').click()
      expect(document.querySelectorAll('.alert')).toHaveSize(0)
    })
  })
})
```

#### Conventions

| Convention | Detail |
|---|---|
| Imports | ES module imports from relative paths to source |
| Fixture setup | `getFixture()` in `beforeAll`, `clearFixture()` in `afterEach` |
| HTML fixtures | Set via `fixtureEl.innerHTML` with array `.join('')` for multi-line |
| Grouping | Nested `describe` blocks: component name > sub-features |
| Callbacks | Arrow functions everywhere |
| Matchers | Standard Jasmine + `.toHaveSize()` custom matcher |
| Loose matching | `jasmine.any(String)` for type-only assertions |

### SCSS tests

SCSS tests use Jasmine running in Node.js. Config is at `scss/tests/jasmine.js`.

### Accessibility tests

**Pa11y-CI** runs automated accessibility testing. Config is at `build/.pa11yci.json`.

### HTML validation

**VNU** (Nu Html Checker) validates HTML output. Run with `npm run docs-vnu`.

---

## Build and tooling

### Build commands

| Command | Purpose |
|---|---|
| `npm run lint` | Run all linters (ESLint + Stylelint + lockfile-lint) in parallel |
| `npm run js-lint` | ESLint only |
| `npm run css-lint` | Stylelint only |
| `npm run dist` | Build CSS + JS for all brands |
| `npm run js-test` | Run Jasmine unit tests via Karma |
| `npm run test` | Full suite: lint + dist + test + docs build + docs lint |
| `npm run docs-prettier-check` | Check Prettier formatting on `site/` |
| `npm run docs-prettier-format` | Auto-format `site/` files with Prettier |
| `npm run docs-accessibility` | Pa11y-CI accessibility tests |
| `npm run docs-vnu` | HTML validation |

### CSS build pipeline

```
SCSS source  →  sass compile  →  PostCSS (autoprefixer)  →  output.css
                                  PostCSS (rtlcss)        →  output.rtl.css
                                  cssnano                 →  output.min.css / output.rtl.min.css
```

- **Autoprefixer** adds vendor prefixes (`cascade: false`).
- **RTLCSS** generates `.rtl.css` variants when `env === 'RTL'`.
- Source maps are external (not inline), with source content included.
- Example files do not get source maps.

### JS build pipeline

```
js/index.esm.js  →  Rollup + Babel  →  dist/js/ouds-web.esm.js
js/index.umd.js  →  Rollup + Babel  →  dist/js/ouds-web.js
js/index.umd.js  →  Rollup + Babel  →  dist/js/ouds-web.bundle.js  (Popper.js included)
                                    →  + minified variants + sourcemaps
```

- UMD global name: `oudsWeb`
- Popper.js is the only external dependency (bundled in `.bundle.js` variant).
- Babel transpiles with `generatedCode: 'es2015'`.

### Prettier scope

Prettier is **only** used for the documentation site (`site/` directory). It is not applied to SCSS or JS source code.

| Setting | Value |
|---|---|
| Arrow parens | Always |
| Print width | 120 |
| Semicolons | None |
| Quotes | Single |
| Trailing commas | None |

Prettier plugins: `prettier-plugin-astro` for `.astro` file formatting.

---

## Linter quick-reference

### Stylelint rules (key rules from `.stylelintrc.json`)

The config extends `stylelint-config-twbs-bootstrap` and adds these OUDS-specific rules:

| Rule | Setting | Effect |
|---|---|---|
| `declaration-property-value-disallowed-list` | `border: none`, `outline: none` | Use `border: 0`; provide visible focus alternative |
| `function-disallowed-list` | `lighten`, `darken` | Use token-defined color variants |
| `property-disallowed-list` | `border-radius`, `border-*-*-radius`, `transition` | Must use `@include border-radius()` / `@include transition()` |
| `scss/dollar-variable-default` | `true` (ignore local) | All global variables must use `!default` |
| `scss/selector-no-union-class-name` | `true` | No `.parent { &__child {} }` BEM-style nesting |
| `reportNeedlessDisables` | `true` | Flags unnecessary `stylelint-disable` comments |
| `reportInvalidScopeDisables` | `true` | Flags disable comments for rules not being checked |

**Overrides**:
- `scss/tests/**`: `!default` and `!important` rules disabled.
- `site/**/*.scss`: `!default` rule disabled.
- `site/**/examples/**/*.css`: Vendor prefixes and qualifying type selectors allowed.

### ESLint rules (key rules from `.eslintrc.json`)

The config extends `xo`, `xo/browser`, `plugin:unicorn/recommended`, and `plugin:storybook/recommended`.

| Rule | Setting | Effect |
|---|---|---|
| `semi` | `["error", "never"]` | No semicolons |
| `comma-dangle` | `["error", "never"]` | No trailing commas |
| `indent` | `["error", 2]` | 2-space indentation |
| `no-console` | `"error"` | No `console.*` in production code |
| `strict` | `"error"` | Strict mode required |
| `prefer-template` | `"error"` | Template literals over concatenation |
| `object-curly-spacing` | `["error", "always"]` | Spaces inside `{ }` |
| `import/extensions` | `.js` always required | Explicit `.js` in imports |
| `import/no-cycle` | `"error"` | No circular dependencies |
| `import/order` | `"error"` | Ordered imports |
| `unicorn/no-unused-properties` | `"error"` | Flag unused object properties |
| `unicorn/prefer-module` | `"off"` | CommonJS still allowed in some contexts |
| `max-params` | `["warn", 5]` | Warn on functions with more than 5 parameters |

**Overrides**:
- `build/**`: Node.js environment, `no-console` disabled.
- `js/tests/unit/**`: Jasmine environment, `no-console` disabled.
- `site/**`: Browser environment, script source type (with module exceptions).

### Ignored paths

Both ESLint and Stylelint ignore:
- `**/*.min.js` / `**/*.min.css`
- `**/dist/`
- `**/vendor/`
- `/_site/`
- `/site/public/`
- `/js/coverage/`

---

*This file provides detailed code convention context for AI agents and LLMs working on the OUDS Web codebase. It complements the overview in [AGENTS.md](../AGENTS.md#code-conventions) with implementation-level details and concrete examples.*
