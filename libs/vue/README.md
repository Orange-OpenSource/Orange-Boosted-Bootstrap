# @ouds/vue

Vue 3 component library for OUDS Web (Orange Unified Design System), part of the "RAV" (React / Angular / Vue) library set in this monorepo.

## Status

🚧 Early stage — this library currently ships a `Button` component and an `OudsProvider` (theme, brand, and rounded-corner settings, exposed to descendants through `useOuds()`). See [ARCHITECTURE.md](./ARCHITECTURE.md) for conventions and the styling approach.

## Requirements

- `vue` `^3.5.0` (peer dependency).
- `@ouds/core` is a regular dependency and is installed with the package.

## Installation

```bash
npm install @ouds/vue
```

## Usage

```vue
<script setup lang="ts">
import { Button, OudsProvider } from '@ouds/vue';
</script>

<template>
  <OudsProvider brand="orange" theme="light">
    <Button label="Save" variant="strong" @click="save" />
  </OudsProvider>
</template>
```

## API

Exports: `Button`, `OudsProvider`, the `useOuds()` composable, and the types `ButtonProps`, `ButtonEmits`, `OudsProviderProps`, `OudsContext`, `Brand`, and `Theme`.

- **`OudsProvider`** — props `theme` (`'light' | 'dark'`, default `'light'`), `brand` (`'orange' | 'orange-compact' | 'sosh'`, default `'orange'`), `roundedButtons`, `roundedAlerts`, `roundedInputs` (all default `false`), and a default slot. It wraps the slot in a `div` with `data-bs-theme`, `data-bs-brand`, and the `use-rounded-corner-*` classes, and loads the brand stylesheet. `useOuds()` returns the settings of the closest provider (or the defaults).
- **`Button`** — props `label`, `variant` (`'default' | 'strong' | 'brand' | 'minimal' | 'negative'`), `type`, `isDisabled`, `isIconOnly`, `isLoading`, `loadingLabel`, `isOnColoredBg`, `defaultAriaLabel`, `formId`, and `class`; the `click` event; and the `icon` and default slots. While `isLoading` is set the button is disabled (no `click` is emitted) and a loader and a status message are rendered.

## Styling

The components only emit OUDS Web class names (`btn`, `btn-<variant>`, …). `OudsProvider` adds the brand stylesheet to the page at runtime, from the jsDelivr CDN, in the browser only (it does nothing during server rendering). There is no stylesheet to import from `@ouds/vue`.

## Development

This package lives in the [Orange-Boosted-Bootstrap](../../) Nx monorepo. From the repository root:

- `npm run vue:lint` — lint via [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) (`.oxlintrc.json` extends root `oxlint.base.json`)
- `npm run vue:test` — run unit/component tests via [Vitest](https://vitest.dev/) 5 and [@vue/test-utils](https://test-utils.vuejs.org/) with V8 coverage (reports in `coverage/libs/vue`)
- `npm run vue:build` — build the package via Vite
- `npm run storybook:vue:serve` — browse the stories in [`apps/vue-storybook`](../../apps/vue-storybook/AGENTS.md) (port 4400)
- `npm run rav:lint` / `rav:test` — run the target across `@ouds/core`, `@ouds/angular`, `@ouds/react`, and `@ouds/vue`; `rav:build` — across `@ouds/angular`, `@ouds/react`, and `@ouds/vue`; `lint:all` / `test:all` / `build:all` cover more projects (see the root [README](../../README.md))

See [ARCHITECTURE.md](./ARCHITECTURE.md) for component, testing, and export conventions, [AGENTS.md](./AGENTS.md) for coding-agent guidelines, and [CHANGELOG.md](./CHANGELOG.md) for release history.

## License

MIT — see the [repository LICENSE](../../LICENSE).
