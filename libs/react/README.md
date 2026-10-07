# @ouds/react

React component library for OUDS Web (Orange Unified Design System), part of the "RAV" (React / Angular / Vue) library set in this monorepo.

## Status

🚧 Early stage — this library currently ships a single `HelloWorld` component as a working scaffold (Nx-managed lint/test/build pipeline). See [ARCHITECTURE.md](./ARCHITECTURE.md) for conventions and the planned styling approach.

## Installation

```bash
npm install @ouds/react
```

## Usage

```tsx
import { HelloWorld } from '@ouds/react'

function App() {
  return <HelloWorld name="Orange" />
}
```

## Development

This package lives in the [Orange-Boosted-Bootstrap](../../) Nx monorepo. From the repository root:

- `npm run react:lint` — lint via [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) (`.oxlintrc.json` extends root `oxlint.base.json`)
- `npm run react:test` — run unit/component tests via [Vitest](https://vitest.dev/) 5 with V8 coverage (reports in `coverage/libs/react`)
- `npm run react:build` — build the package via Vite
- `npm run lint:all` / `test:all` / `build:all` — run the same target across `@ouds/angular`, `@ouds/react`, `@ouds/vue`, and `@ouds/web-common` at once

See [ARCHITECTURE.md](./ARCHITECTURE.md) for component, testing, and export conventions, [AGENTS.md](./AGENTS.md) for coding-agent guidelines, and [CHANGELOG.md](./CHANGELOG.md) for release history.

## License

MIT — see the [repository LICENSE](../../LICENSE).
