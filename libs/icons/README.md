# @ouds/icons

Icons for OUDS (Orange Unified Design System) as typed data: one named export per icon, with the drawing of each brand. They are rendered by the `Icon` component of [`@ouds/react`](../react/README.md), [`@ouds/vue`](../vue/README.md), and [`@ouds/angular`](../angular/README.md).

## Status

🚧 Early stage. Current icons:

- `functionalStatusWarning` — the accessible warning icon. It has two paths, filled with the CSS variables `--bs-icon-color-content-status-warning-external-shape` and `--bs-icon-color-content-status-warning-internal-shape` (so it can't be an icon font), and a different drawing for Sosh.

The data is generated from the OUDS Web icon sprites (`libs/web/site/static/<brand>/docs/[version]/assets/img/ouds-web-sprite.svg`); see [AGENTS.md](./AGENTS.md).

## Installation

```bash
npm install @ouds/icons
```

`@ouds/react`, `@ouds/vue`, and `@ouds/angular` already depend on it, so it is installed with them. Add it to your own `package.json` as well if you use pnpm (strict mode) or Yarn PnP, because your application imports it directly.

## Usage

Import only the icons you use, so bundlers drop the others, and pass them to the `Icon` component of your framework:

```tsx
import { Icon } from '@ouds/react';
import { functionalStatusWarning } from '@ouds/icons';

<Icon icon={functionalStatusWarning} size='bm-medium' label='Warning' />;
```

Each export is an `OudsIcon` (see `@ouds/core`): `name`, `viewBox`, and `brands`, the paths to draw for each brand. Orange Compact reuses the Orange drawing, so it only appears when it differs.

## License

The code is MIT. The icon drawings come from Orange's Solaris icons library and belong to Orange SA: see [NOTICE.txt](./NOTICE.txt) and the [repository LICENSE](../../LICENSE).
