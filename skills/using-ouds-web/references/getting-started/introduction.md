# Introduction

OUDS Web is based on Bootstrap: a powerful, feature-packed frontend toolkit for building Orange-branded web interfaces.

## Quick start

1. Create an `index.html` with viewport meta tag
2. Include OUDS Web CSS in `<head>` and JS before `</body>`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>OUDS Web demo</title>
    <link
      href="https://cdn.jsdelivr.net/npm/ouds-web/dist/css/ouds-web.min.css"
      rel="stylesheet"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <h1>Hello, world!</h1>
    <script
      src="https://cdn.jsdelivr.net/npm/ouds-web/dist/js/ouds-web.bundle.min.js"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

Popper is included in the bundle. To include separately (saves bytes if no dropdowns/tooltips):

```html
<script
  src="https://cdn.jsdelivr.net/npm/@popperjs/core/dist/umd/popper.min.js"
  crossorigin="anonymous"
></script>
<script
  src="https://cdn.jsdelivr.net/npm/ouds-web/dist/js/ouds-web.min.js"
  crossorigin="anonymous"
></script>
```

## JS components requiring JavaScript

- Alerts: for dismissing
- Chips: for toggling states

## Important globals

- **HTML5 doctype** is required
- **Viewport meta tag** for mobile-first responsive behavior
- **Box-sizing**: global `border-box`
- **Resource hints**: use `<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin="anonymous" />` for CDN
- **Reboot**: cross-browser CSS reset applied by default
