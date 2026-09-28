# Installation

OUDS Web is split into a common package (`@ouds/web-common`) shared by every brand, and one theme package per brand. Always install `@ouds/web-common` together with **exactly one** theme package matching the project's brand:

| Brand          | npm / yarn / Bun package    | NuGet package(s)                                              |
| -------------- | ---------------------------- | --------------------------------------------------------------- |
| Orange         | `@ouds/web-orange`           | `ouds-web-orange` / `ouds-web-orange.sass`                     |
| Orange Compact | `@ouds/web-orange-compact`   | `ouds-web-orange-compact` / `ouds-web-orange-compact.sass`     |
| Sosh           | `@ouds/web-sosh`             | `ouds-web-sosh` / `ouds-web-sosh.sass`                         |

A project must never mix several themes in the same codebase — see [Themes and brands](../foundation/themes.md).

## npm/yarn/Bun (recommended)

### npm

```sh
npm install @ouds/web-common @ouds/web-orange
```

Replace `@ouds/web-orange` with the theme package matching the project's brand (see table above).

Requires a Sass compiler and Autoprefixer for source files.

Import in JS:

```js
import '@ouds/web-orange/dist/css/ouds-web.min.css'
import * as oudsWeb from '@ouds/web-common'
// or: import { Toast, Modal } from "@ouds/web-common";
```

### yarn

```sh
yarn add @ouds/web-common @ouds/web-orange
```

### Bun

```sh
bun add @ouds/web-common @ouds/web-orange
```

## NuGet (.NET)

```powershell
Install-Package ouds-web-common ouds-web-orange
Install-Package ouds-web-common.sass ouds-web-orange.sass
```

## CDN (jsDelivr) — for quick prototyping only

Prefer the npm installation above for real projects (proper Sass customization, tree-shaking, versioning). The CDN is only recommended for quick prototypes without a build step. Replace `web-orange` with the theme package matching the project's brand (see table above).

```html
<link
  href="https://cdn.jsdelivr.net"
  rel="preconnect"
  crossorigin="anonymous"
/>
<link
  href="https://cdn.jsdelivr.net/npm/@ouds/web-orange@<version>/dist/css/ouds-web.min.css"
  rel="stylesheet"
  crossorigin="anonymous"
/>
<script
  src="https://cdn.jsdelivr.net/npm/@ouds/web-common@<version>/dist/js/ouds-web.bundle.min.js"
  crossorigin="anonymous"
></script>
```

Popper is included in the bundle above. Without Popper (if no dropdowns/tooltips needed), use the standalone script instead:

```html
<script
  src="https://cdn.jsdelivr.net/npm/@ouds/web-common@<version>/dist/js/ouds-web.min.js"
  crossorigin="anonymous"
></script>
```

Always pin `<version>` to a specific release (e.g. `1.4.0`) rather than leaving it floating, and use `crossorigin="anonymous"` with CDN links.

## Compiled download

Includes compiled and minified CSS/JS bundles. No source files or documentation. See [Contents](contents.md) for the file structure.

## Source download

Includes Sass, JS sources, and documentation. Requires Sass compiler and Autoprefixer.
