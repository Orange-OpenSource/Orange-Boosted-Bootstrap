# JavaScript

## Including plugins

Include all at once with `ouds-web.js` or individually from `js/dist/*.js`. For bundlers (Webpack, Parcel, Vite), use UMD files from `/js/dist/*.js`.

## Framework compatibility

OUDS Web JS is **not fully compatible** with React, Vue, Angular. Use framework-specific packages instead:

- React: React Bootstrap
- Vue 3: BootstrapVueNext
- Angular: ng-bootstrap

OUDS Web CSS works with any framework.

## ESM module usage

```html
<script type="module">
  import { Toast } from "ouds-web.esm.min.js";
  Array.from(document.querySelectorAll(".toast")).forEach(
    (toastNode) => new Toast(toastNode),
  );
</script>
```

For import maps with Popper:

```html

<script type="importmap">
    {
      "imports": {
        "@popperjs/core": "https://cdn.jsdelivr.net/npm/@popperjs/core/dist/esm/popper.min.js",
        "@ouds/web-common": "https://cdn.jsdelivr.net/npm/@ouds/web-common/dist/js/ouds-web.esm.min.js"
      }
    }
</script>
<script type="module">
    import * as oudsWeb from "dist/js/ouds-web.esm";

    new oudsWeb.Popover(document.getElementById("popoverButton"));
</script>
```

## Data attributes

Enable and configure plugins via HTML data attributes (preferred). Use **one set of data attributes per element**. All data attributes use `data-bs-` prefix.

## Events

Custom events use infinitive (start: `show`) and past participle (end: `shown`) form:

```js
const myModal = document.querySelector("#myModal");
myModal.addEventListener("show.bs.modal", (event) => {
  event.preventDefault(); // stops modal from showing
});
```

## Programmatic API

```js
// Initialize with defaults
const modal = new oudsWeb.Modal("#myModal");

// With options
const modal = new oudsWeb.Modal("#myModal", { keyboard: false });

// Get existing instance
oudsWeb.Popover.getInstance(myPopoverEl);

// Get or create instance
oudsWeb.Popover.getOrCreateInstance(myPopoverEl, configObject);
```

All methods are **asynchronous** (return before transition ends). Listen to events for completion.

### Change defaults

```js
oudsWeb.Modal.Default.keyboard = false;
```

## Common methods

| Method                | Description                   |
| --------------------- | ----------------------------- |
| `dispose`             | Destroys plugin instance      |
| `getInstance`         | Get instance from DOM element |
| `getOrCreateInstance` | Get or create instance        |

## Sanitizer

Tooltips and Popovers use a built-in sanitizer. Customize allowList or use DOMPurify:

```js
const tooltip = new oudsWeb.Tooltip(el, {
  sanitizeFn(content) {
    return DOMPurify.sanitize(content);
  },
});
```

## jQuery

Not required. If jQuery is detected, components are added to jQuery's plugin system automatically.
