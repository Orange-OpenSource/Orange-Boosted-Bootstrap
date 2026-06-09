# Download

## Package managers

### npm (recommended)

```sh
npm install @ouds/web-common @ouds/web-orange
```

Requires a Sass compiler and Autoprefixer for source files.

Import in JS:

```js
const oudsWeb = require("oudsWeb");
// or
import oudsWeb from "oudsWeb";
```

### yarn

```sh
yarn add @ouds/web-common @ouds/web-orange
```

### Bun

```sh
bun add @ouds/web-common @ouds/web-orange
```

### NuGet (.NET)

```powershell
Install-Package ouds-web
Install-Package ouds-web.sass
```

## CDN (jsDelivr)

```html
<link
  href="https://cdn.jsdelivr.net"
  rel="preconnect"
  crossorigin="anonymous"
/>
<link
  href="https://cdn.jsdelivr.net/npm/@ouds/web-orange/dist/css/ouds-web.min.css"
  rel="stylesheet"
  crossorigin="anonymous"
/>
<script
  src="https://cdn.jsdelivr.net/npm/@ouds/web-common/dist/js/ouds-web.bundle.min.js"
  crossorigin="anonymous"
></script>
```

Without Popper (if no dropdowns/tooltips needed):

```html
<script
  src="https://cdn.jsdelivr.net/npm/@popperjs/core/dist/umd/popper.min.js"
  crossorigin="anonymous"
></script>
<script
  src="https://cdn.jsdelivr.net/npm/@ouds/web-common/dist/js/ouds-web.min.js"
  crossorigin="anonymous"
></script>
```

Always use `integrity` and `crossorigin="anonymous"` attributes with CDN links.

## Compiled download

Includes compiled and minified CSS/JS bundles. No source files or documentation.

## Source download

Includes Sass, JS sources, and documentation. Requires Sass compiler and Autoprefixer.
