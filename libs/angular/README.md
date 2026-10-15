# @ouds/angular

Angular component library for OUDS Web (Orange Unified Design System), part of the "RAV" (React / Angular / Vue) library set in this monorepo.

## Status

🚧 Early stage — this library currently ships a standalone `ButtonComponent` (`orange-button`) and an `OudsProviderComponent` (`orange-ouds-provider`: theme, brand, and rounded-corner settings, also available through `OudsService` and `provideOuds()`). See [ARCHITECTURE.md](./ARCHITECTURE.md) for conventions and the styling approach.

## Requirements

- `@angular/core` and `@angular/common` `^22.0.0` (peer dependencies).
- `@ouds/core` (and `tslib`) are regular dependencies and are installed with the package.

## Installation

```bash
npm install @ouds/angular
```

## Usage

```typescript
import { Component } from '@angular/core';
import { ButtonComponent, OudsProviderComponent } from '@ouds/angular';

@Component({
  standalone: true,
  imports: [OudsProviderComponent, ButtonComponent],
  template: `
    <orange-ouds-provider brand="orange" theme="light">
      <orange-button label="Save" variant="strong" (clicked)="save()" />
    </orange-ouds-provider>
  `,
})
export class MyComponent {
  save(): void {}
}
```

## API

Exports: `ButtonComponent`, `OudsProviderComponent`, `OudsService`, `provideOuds()`, the `OUDS_CONFIG` token, and the types `OudsConfig`, `Brand`, and `Theme`. All components are standalone and use `OnPush` change detection.

- **`orange-ouds-provider`** — inputs `theme` (`'light' | 'dark'`, default `'light'`), `brand` (`'orange' | 'orange-compact' | 'sosh'`, default `'orange'`), `roundedButtons`, `roundedAlerts`, `roundedInputs` (all default `false`). It wraps its content in a `div` with `data-bs-theme`, `data-bs-brand`, and the `use-rounded-corner-*` classes, and loads the brand stylesheet.
- **`provideOuds(config)`** — registers an `OudsConfig` (same settings) for `OudsService` and, at application start, adds the `use-rounded-corner-*` classes to `document.body`.
- **`orange-button`** — inputs `label`, `variant` (`'default' | 'strong' | 'brand' | 'minimal' | 'negative'`), `type`, `isDisabled`, `isIconOnly`, `isLoading`, `loadingLabel`, `isOnColoredBg`, `defaultAriaLabel`, `formId`, and `className`; the `clicked` output; and content projection (an `[icon]` slot and a default slot). While `isLoading` is set the button is disabled (no `clicked` is emitted) and a loader and a status message are rendered.

## Styling

The components only emit OUDS Web class names (`btn`, `btn-<variant>`, …). `orange-ouds-provider` adds the brand stylesheet to the page at runtime, from the jsDelivr CDN, in the browser only (it does nothing during server rendering). There is no stylesheet to import from `@ouds/angular`.

## Development

This package lives in the [Orange-Boosted-Bootstrap](../../) Nx monorepo. From the repository root:

- `npm run angular:lint` — lint via ESLint + [angular-eslint](https://github.com/angular-eslint/angular-eslint) (this library stays on ESLint because Oxlint can't parse Angular templates)
- `npm run angular:test` — run unit tests via [Jest](https://jestjs.io/) (`jest-preset-angular`)
- `npm run angular:build` — build the package via [ng-packagr](https://github.com/ng-packagr/ng-packagr)
- `npm run storybook:angular:serve` — browse the stories in [`apps/angular-storybook`](../../apps/angular-storybook/AGENTS.md) (port 4400; run `npm run angular:build` first)
- `npm run rav:lint` / `rav:test` — run the target across `@ouds/core`, `@ouds/angular`, `@ouds/react`, and `@ouds/vue`; `rav:build` — across `@ouds/angular`, `@ouds/react`, and `@ouds/vue`; `lint:all` / `test:all` / `build:all` cover more projects (see the root [README](../../README.md))

See [ARCHITECTURE.md](./ARCHITECTURE.md) for component, testing, and export conventions (including why this library uses ESLint instead of Oxlint and Jest instead of Vitest), [AGENTS.md](./AGENTS.md) for coding-agent guidelines, and [CHANGELOG.md](./CHANGELOG.md) for release history.

## License

MIT — see the [repository LICENSE](../../LICENSE).
