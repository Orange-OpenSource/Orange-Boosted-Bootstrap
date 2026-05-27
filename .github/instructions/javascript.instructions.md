---
name: javascript-conventions
description: >
  JavaScript coding conventions for OUDS Web. Covers no-semicolons style,
  import rules, BaseComponent pattern, and ESLint configuration.
  Applied when working on JS source files.
applyTo: "js/**/*.{js,mjs}"
---

# JavaScript Conventions

## Why these rules exist

OUDS Web uses a strict ESLint config (extending `xo` + `unicorn`) to keep JS consistent across 15 components. All JavaScript is shared across brands — there's no brand-specific JS. Consistency here means any contributor can read any component.

---

## Style rules (ESLint-enforced)

### No semicolons

```javascript
// ✓
const x = 1

// ✗
const x = 1;
```

### No trailing commas

```javascript
// ✓
const obj = { a: 1, b: 2 }

// ✗
const obj = { a: 1, b: 2, }
```

### Template literals over concatenation

```javascript
// ✓
const msg = `Hello, ${name}`

// ✗
const msg = "Hello, " + name
```

### `.js` extension on all local imports

The bundler requires explicit extensions for ESM resolution.

```javascript
// ✓
import Foo from './foo.js'

// ✗
import Foo from './foo'
```

### No `console.*` in `js/src/`

Production code must not contain `console.log/warn/error`. Use proper event dispatching or error throwing instead. Console statements are allowed in `build/`, tests, and `site/`.

### Strict mode

Every module in `js/src/` starts with `'use strict'`.

---

## Component structure

All interactive components extend `BaseComponent`. This base class provides instance management, event lifecycle, and jQuery integration.

```javascript
'use strict'

import BaseComponent from './base-component.js'
import EventHandler from './dom/event-handler.js'
import { defineJQueryPlugin } from './util/index.js'

const NAME = 'myComponent'
const DATA_KEY = `bs.${NAME}`
const EVENT_KEY = `.${DATA_KEY}`

class MyComponent extends BaseComponent {
  static get NAME() { return NAME }

  // Public API methods
  show() { /* ... */ }
  hide() { /* ... */ }

  // Private methods prefixed with _
  _handleClick(event) { /* ... */ }

  static jQueryInterface(config) {
    return this.each(function () {
      const data = MyComponent.getOrCreateInstance(this)
      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`)
        }
        data[config]()
      }
    })
  }
}

defineJQueryPlugin(MyComponent)
export default MyComponent
```

### Key patterns

- **Static `NAME` getter** — required for `BaseComponent` instance management
- **`data-bs-*` attributes** — all behavior configuration via HTML attributes, never inline handlers
- **Event constants** — define `EVENT_SHOW`, `EVENT_SHOWN`, etc. using the `EVENT_KEY` suffix
- **jQuery interface** — always provide for backward compatibility

---

## File locations

| Purpose | Location |
|---|---|
| Component source | `js/src/<component>.js` |
| Utilities | `js/src/util/` |
| DOM helpers | `js/src/dom/` |
| Tests | `js/tests/unit/<component>.spec.js` |
| ESM entry | `js/index.esm.js` |
| UMD entry | `js/index.umd.js` |

New components must be registered in both `index.esm.js` and `index.umd.js`.
