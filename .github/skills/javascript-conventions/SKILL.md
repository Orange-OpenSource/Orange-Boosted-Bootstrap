---
name: 'javascript-conventions'
description: 'JavaScript coding conventions for OUDS Web. Use this skill when writing, editing, or reviewing any JS file in js/src/ or js/tests/. Covers no-semicolons style, no trailing commas, template literals, .js import extensions, no console.* in production, strict mode, and the BaseComponent pattern. All JS is shared across brands — never put JS in packages/<brand>/.'
---

# JavaScript Conventions

## Why these rules exist

OUDS Web uses a strict ESLint config (xo + unicorn) enforced in CI. All 15 JS components share the same conventions. JavaScript is 100% shared across brands — only CSS differs.

---

## Style rules (ESLint-enforced)

| Rule | Example |
|---|---|
| No semicolons | `const x = 1` (not `const x = 1;`) |
| No trailing commas | `{ a: 1, b: 2 }` (not `{ a: 1, b: 2, }`) |
| Template literals | `` `Hello, ${name}` `` (not `"Hello, " + name`) |
| `.js` extension on imports | `import Foo from './foo.js'` |
| No `console.*` in `js/src/` | Use event dispatching or throw |
| Strict mode | `'use strict'` at top of every module |
| 2-space indent | Consistent with SCSS/HTML |

---

## Component structure (BaseComponent pattern)

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
  static get Default() { return {} }
  static get DefaultType() { return {} }

  // Public methods
  show() {
    const event = EventHandler.trigger(this._element, `show${EVENT_KEY}`)
    if (event.defaultPrevented) return
    this._element.classList.add('show')
    EventHandler.trigger(this._element, `shown${EVENT_KEY}`)
  }

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

---

## Key patterns

- **Static `NAME` getter** — required for instance management
- **`data-bs-*` attributes** — all config via HTML attributes, never inline handlers
- **Event constants** — `EVENT_SHOW`, `EVENT_SHOWN` etc. with `EVENT_KEY` suffix
- **jQuery interface** — always provide for backward compatibility
- **Register in entries** — add to `js/index.esm.js` and `js/index.umd.js`

---

## File locations

| Purpose | Path |
|---|---|
| Component source | `js/src/<name>.js` |
| Utilities | `js/src/util/` |
| DOM helpers | `js/src/dom/` |
| Tests | `js/tests/unit/<name>.spec.js` |
| ESM entry | `js/index.esm.js` |
| UMD entry | `js/index.umd.js` |
