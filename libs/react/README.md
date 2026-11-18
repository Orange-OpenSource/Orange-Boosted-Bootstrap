# @ouds/react

React component library for OUDS Web (Orange Unified Design System), part of the "RAV" (React / Angular / Vue) library set in this monorepo.

## Status

🚧 Early stage — this library currently ships a `Button` component, an `Icon` component, and an `OudsProvider` (theme, brand, and rounded-corner settings, exposed to descendants through `useOuds()`). See [ARCHITECTURE.md](./ARCHITECTURE.md) for conventions and the styling approach.

## Requirements

- `react` and `react-dom` `^19.0.0` (peer dependencies).
- `@ouds/core`, `@ouds/icons`, and `classnames` are regular dependencies and are installed with the package.

## Installation

```bash
npm install @ouds/react
```

## Usage

```tsx
import { Button, OudsProvider } from '@ouds/react';

function App() {
  return (
    <OudsProvider brand='orange' theme='light'>
      <Button label='Save' variant='strong' onClick={save} />
    </OudsProvider>
  );
}
```

## API

Exports: `Button`, `Icon`, `OudsProvider`, the `useOuds()` hook, and the types `ButtonProps`, `IconProps`, `OudsProviderProps`, `Brand`, and `Theme`.

- **`OudsProvider`** — props `theme` (`'light' | 'dark'`, default `'light'`), `brand` (`'orange' | 'orange-compact' | 'sosh'`, default `'orange'`), `roundedButtons`, `roundedAlerts`, `roundedInputs` (all default `false`), and `children`. It wraps its children in a `div` with `data-bs-theme`, `data-bs-brand`, and the `use-rounded-corner-*` classes, and loads the brand stylesheet. `useOuds()` returns the settings of the closest provider (or the defaults).
- **`Button`** — props `label`, `variant` (`'default' | 'strong' | 'brand' | 'minimal' | 'negative'`), `type`, `isDisabled`, `isIconOnly`, `isLoading`, `loadingLabel`, `isOnColoredBg`, `defaultAriaLabel`, `formId`, plus the React-specific `onClick`, `className`, `icon`, and `children`. While `isLoading` is set the button is disabled and a loader and a status message are rendered.

- **`Icon`** — props `icon` (icon data from [`@ouds/icons`](../icons/README.md)), `size` (an OUDS Web icon size such as `'bm-medium'` or `'decorative-large'`; without it the size comes from the surrounding CSS), `label`, and `className`. It renders the inline `<svg>` of the OUDS Web icons (`fill="currentColor"`, `aria-hidden="true"`), so it is decorative by default; `label` adds a `visually-hidden` text next to it for a meaningful icon. The drawing follows the brand of the closest `OudsProvider` (Orange when there is none).

```tsx
import { Icon } from '@ouds/react';
import { functionalStatusWarning } from '@ouds/icons';

<Icon icon={functionalStatusWarning} size='bm-medium' label='Warning' />;
```

`@ouds/icons` is installed with the library; import only the icons you use, so the others stay out of your bundle. With pnpm (strict mode) or Yarn PnP, also add `@ouds/icons` to your own `package.json`, because your application imports it directly.

## Styling

The components only emit OUDS Web class names (`btn`, `btn-<variant>`, …). `OudsProvider` adds the brand stylesheet to the page at runtime, from the jsDelivr CDN, in the browser only (it does nothing during server rendering). There is no stylesheet to import from `@ouds/react`.

## Development

This package lives in the [Orange-Boosted-Bootstrap](../../) Nx monorepo. From the repository root:

- `npm run react:lint` — lint via [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) (`.oxlintrc.json` extends root `oxlint.base.json`)
- `npm run react:test` — run unit/component tests via [Vitest](https://vitest.dev/) 5 with V8 coverage (reports in `coverage/libs/react`)
- `npm run react:build` — build the package via Vite
- `npm run storybook:react:serve` — browse the stories in [`apps/react-storybook`](../../apps/react-storybook/AGENTS.md) (port 4400)
- `npm run rav:lint` / `rav:test` — run the target across `@ouds/core`, `@ouds/angular`, `@ouds/react`, and `@ouds/vue`; `rav:build` — across `@ouds/angular`, `@ouds/react`, and `@ouds/vue`; `lint:all` / `test:all` / `build:all` cover more projects (see the root [README](../../README.md))

See [ARCHITECTURE.md](./ARCHITECTURE.md) for component, testing, and export conventions, [AGENTS.md](./AGENTS.md) for coding-agent guidelines, and [CHANGELOG.md](./CHANGELOG.md) for release history.

## License

MIT — see the [repository LICENSE](../../LICENSE).
