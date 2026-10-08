# @ouds/vue

Vue 3 component library for OUDS Web (Orange Unified Design System), part of the "RAV" (React / Angular / Vue) library set in this monorepo.

## Status

🚧 Early stage — this library currently ships a `Button` component and an `OudsProvider` (theme, brand, and rounded-corner settings, exposed to descendants through `useOuds()`). See [ARCHITECTURE.md](./ARCHITECTURE.md) for conventions and the planned styling approach.

## Installation

```bash
npm install @ouds/vue
```

## Usage

```vue
<script setup lang="ts">
import { Button, OudsProvider } from '@ouds/vue'
</script>

<template>
  <OudsProvider brand="orange" theme="light">
    <Button label="Save" variant="strong" @click="save" />
  </OudsProvider>
</template>
```

## Development

This package lives in the [Orange-Boosted-Bootstrap](../../) Nx monorepo. From the repository root:

- `npm run vue:lint` — lint via [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) (`.oxlintrc.json` extends root `oxlint.base.json`)
- `npm run vue:test` — run unit/component tests via [Vitest](https://vitest.dev/) 5 and [@vue/test-utils](https://test-utils.vuejs.org/) with V8 coverage (reports in `coverage/libs/vue`)
- `npm run vue:build` — build the package via Vite
- `npm run lint:all` / `test:all` / `build:all` — run the same target across `@ouds/angular`, `@ouds/react`, `@ouds/vue`, and `@ouds/web-common` at once

See [ARCHITECTURE.md](./ARCHITECTURE.md) for component, testing, and export conventions, [AGENTS.md](./AGENTS.md) for coding-agent guidelines, and [CHANGELOG.md](./CHANGELOG.md) for release history.

## License

MIT — see the [repository LICENSE](../../LICENSE).
