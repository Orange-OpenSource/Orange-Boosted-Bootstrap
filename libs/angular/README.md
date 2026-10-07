# @ouds/angular

Angular component library for OUDS Web (Orange Unified Design System), part of the "RAV" (React / Angular / Vue) library set in this monorepo.

## Status

🚧 Early stage — this library currently ships a single standalone `HelloWorldComponent` as a working scaffold (Nx-managed lint/test/build pipeline). See [ARCHITECTURE.md](./ARCHITECTURE.md) for conventions and the planned styling approach.

## Installation

```bash
npm install @ouds/angular
```

## Usage

```typescript
import { Component } from '@angular/core'
import { HelloWorldComponent } from '@ouds/angular'

@Component({
  standalone: true,
  imports: [HelloWorldComponent],
  template: `<orange-hello-world />`,
})
export class MyComponent {}
```

## Development

This package lives in the [Orange-Boosted-Bootstrap](../../) Nx monorepo. From the repository root:

- `npm run angular:lint` — lint via ESLint + [angular-eslint](https://github.com/angular-eslint/angular-eslint) (this library stays on ESLint because Oxlint can't parse Angular templates)
- `npm run angular:test` — run unit tests via [Jest](https://jestjs.io/) (`jest-preset-angular`)
- `npm run angular:build` — build the package via [ng-packagr](https://github.com/ng-packagr/ng-packagr)
- `npm run lint:all` / `test:all` / `build:all` — run the same target across `@ouds/angular`, `@ouds/react`, `@ouds/vue`, and `@ouds/web-common` at once

See [ARCHITECTURE.md](./ARCHITECTURE.md) for component, testing, and export conventions (including why this library uses ESLint instead of Oxlint and Jest instead of Vitest), [AGENTS.md](./AGENTS.md) for coding-agent guidelines, and [CHANGELOG.md](./CHANGELOG.md) for release history.

## License

MIT — see the [repository LICENSE](../../LICENSE).
