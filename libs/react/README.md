# @ouds/react

React component library for OUDS Web (Orange Unified Design System), part of the "RAV" (React / Angular / Vue) library set in this monorepo.

## Status

🚧 Early stage — this library currently ships a `Button` component and an `OudsProvider` (theme, brand, and rounded-corner settings, exposed to descendants through `useOuds()`). See [ARCHITECTURE.md](./ARCHITECTURE.md) for conventions and the styling approach.

## Installation

```bash
npm install @ouds/react
```

## Usage

```tsx
import { Button, OudsProvider } from '@ouds/react'

function App() {
  return (
    <OudsProvider brand="orange" theme="light">
      <Button label="Save" variant="strong" onClick={save} />
    </OudsProvider>
  )
}
```

## Development

This package lives in the [Orange-Boosted-Bootstrap](../../) Nx monorepo. From the repository root:

- `npm run react:lint` — lint via [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) (`.oxlintrc.json` extends root `oxlint.base.json`)
- `npm run react:test` — run unit/component tests via [Vitest](https://vitest.dev/) 5 with V8 coverage (reports in `coverage/libs/react`)
- `npm run react:build` — build the package via Vite
- `npm run storybook:react:serve` — browse the stories in [`apps/react-storybook`](../../apps/react-storybook/AGENTS.md) (port 4400)
- `npm run rav:lint` / `rav:test` / `rav:build` — run the same target across `@ouds/angular`, `@ouds/react`, and `@ouds/vue`; `lint:all` / `test:all` / `build:all` cover more projects (see the root [README](../../README.md))

See [ARCHITECTURE.md](./ARCHITECTURE.md) for component, testing, and export conventions, [AGENTS.md](./AGENTS.md) for coding-agent guidelines, and [CHANGELOG.md](./CHANGELOG.md) for release history.

## License

MIT — see the [repository LICENSE](../../LICENSE).
