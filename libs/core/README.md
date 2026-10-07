# @ouds/core

Framework-agnostic types and utilities for OUDS (Orange Unified Design System), shared by [`@ouds/react`](../react/README.md), [`@ouds/vue`](../vue/README.md), and [`@ouds/angular`](../angular/README.md).

## Status

🚧 Early stage. Current public API:

- **Types**: `Brand`, `Theme`, `SizeProp`, `Variant`, `CoreButtonProps`.
- **Utilities**: `loadBrandCSS(brand)` — injects (or swaps) a single `<link id="ouds-brand-css">` pointing at the OUDS Web brand stylesheet on jsDelivr. The brand versions are inlined at build time from `@ouds/web-orange`, `@ouds/web-orange-compact`, and `@ouds/web-sosh`. It does nothing when `document` is unavailable (SSR).

## Installation

```bash
npm install @ouds/core
```

The framework libraries depend on it; you only need to install it directly to use the types or utilities yourself.

## Usage

```ts
import { loadBrandCSS, type Brand } from '@ouds/core'

const brand: Brand = 'sosh'
loadBrandCSS(brand)
```

## Development

This package lives in the [Orange-Boosted-Bootstrap](../../) Nx monorepo. From the repository root:

- `npm run core:lint` — lint via [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) (`.oxlintrc.json` extends root `oxlint.base.json`)
- `npm run core:test` — unit tests via [Vitest](https://vitest.dev/) 5 (jsdom) with V8 coverage (reports in `coverage/libs/core`)
- `npm run core:build` — Vite library build (ESM `index.js` + CJS `index.cjs` + type declarations) into `dist/libs/core`
- `npm run lint:all` / `test:all` / `build:all` — run the same target across `@ouds/core`, `@ouds/angular`, `@ouds/react`, `@ouds/vue`, and `@ouds/web-common`

See [AGENTS.md](./AGENTS.md) for coding-agent guidelines.

## License

MIT — see the [repository LICENSE](../../LICENSE).
