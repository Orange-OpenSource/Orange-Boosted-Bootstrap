# Architecture — @ouds/react

## Purpose & status

`@ouds/react` is one of the three "RAV" (React / Angular / Vue) framework libraries in this monorepo, alongside [`@ouds/vue`](../vue/ARCHITECTURE.md) and [`@ouds/angular`](../angular/ARCHITECTURE.md). It originated in a separate project (`ouds-rav`) and was integrated into this monorepo's Nx workspace with its own independent versioning, separate from `libs/web`'s own version (`@ouds/web-common`, currently `1.5.0`).

The library is currently at an early, deliberately minimal stage. It ships a `Button` (props extend `CoreButtonProps` from `@ouds/core`; it renders OUDS Web `btn` markup, including the loading state) an `Icon` (props extend `CoreIconProps`; it renders the inline `<svg>` of an `@ouds/icons` icon with the OUDS Web icon markup), and an `OudsProvider` (theme, brand, and rounded-corner settings). `OudsProvider` loads the brand CSS through `@ouds/core`'s `loadBrandCSS`, wraps its children in a `div` carrying `data-bs-theme`, `data-bs-brand`, and the `use-rounded-corner-*` classes, and exposes the settings to descendants through the `useOuds()` hook. More OUDS components will follow; see [CHANGELOG.md](./CHANGELOG.md) for the history.

## Isolation from `libs/web`

This project carries the Nx tag `lib:react`. The `@nx/enforce-module-boundaries` rule (run by Oxlint, configured in the root `oxlint.base.json`) keeps it isolated: it cannot import from `lib:web-common` or from `@ouds/vue` / `@ouds/angular`. This is intentional — `@ouds/react` must remain independently buildable and publishable, decoupled from `libs/web`'s internal source layout.

## Styling approach

Today the components only emit OUDS Web class names; the visual design comes from the brand stylesheet that `OudsProvider` injects at runtime from the jsDelivr CDN (`@ouds/core` pins the version of the brand package it was built with). `src/components/button/button.module.scss` is a comment-only placeholder: it has no rule and no component imports it, so the build extracts no CSS and the package exports no stylesheet. To ship the library's own CSS, put a rule in a `*.module.scss` file that a component imports, set `build.lib.cssFileName: 'style'` in `vite.config.ts` (Vite would otherwise name the file `index.css`), and add a `./style.css` export to `package.json`; consumers would then import `@ouds/react/style.css` themselves, because the JavaScript bundle does not import it.

If the library later needs OUDS Web tokens/CSS at build time, it will consume them **via a published npm dependency** on the relevant brand package (or `@ouds/web-common`), not by importing `libs/web`'s internal Sass/token sources directly. This was a deliberate choice (see the option analysis below) over consuming the monorepo source directly:

|                   | Published npm dependency (chosen)                                                              | Direct source consumption                                                          |
| ----------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Release coupling  | Decoupled — `@ouds/react` adopts a new `libs/web` token release on its own schedule            | Coupled — a token bump in `libs/web` can force a coordinated `@ouds/react` release |
| Boundary rule     | No change needed — stays isolated                                                              | Requires relaxing `enforce-module-boundaries`                                      |
| Portability       | `@ouds/react` stays extractable/publishable independent of this monorepo's layout              | Ties `@ouds/react` to the monorepo's internal file structure                       |
| Dev feedback loop | Slower — needs a published (or prerelease/tarball) version to pick up unreleased token changes | Instant — token changes are visible without a publish step                         |

No OUDS Web package is a dependency of this library yet. Add one as a `peerDependency`/`dependency` when a component needs build-time access to tokens or Sass.

## Conventions

- **Folder structure**: one folder per component under `src/components/`, kebab-case (e.g. `src/components/button/`), containing `<name>.component.tsx`, `<name>.model.ts`, the co-located spec, and the story.
- **Naming**: PascalCase for the component/export (`Button`), kebab-case with a `.component.tsx` suffix for the file (`button.component.tsx`), matching `@ouds/vue`.
- **Exports**: every component and its model (props type) is re-exported through `src/components/index.ts` and `src/index.ts` (barrel files), and `src/index.ts` also re-exports the `Brand` and `Theme` types from `@ouds/core`; this is the package's public API surface (`main`/`types`/`exports` in `package.json` point at the built output of this barrel).
- **Shared types**: props shared with the other frameworks live in `@ouds/core` (`CoreButtonProps`); the React-specific `ButtonProps` extends it with `onClick`, `className`, `children`, and `icon`.
- **Testing**: [Vitest](https://vitest.dev/) 5 (jsdom) through an `nx:run-commands` target running `vitest run --coverage`. It doesn't use `@nx/vitest:test`, because `@nx/vitest@23.2.1` only supports Vitest 3–4. Spec files are co-located as `<name>.spec.tsx` and use `@testing-library/react`. Coverage uses the V8 provider (`@vitest/coverage-v8`), is held at a 100% threshold (stories excluded), is configured in the `test.coverage` block of `vite.config.ts`, and writes text/HTML/lcov reports to `coverage/libs/react`.
- **Linting**: [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) via `@nx/oxlint`, which infers the `lint` target (it is not declared in `project.json`). `.oxlintrc.json` extends the root `oxlint.base.json` (`typescript`/`unicorn`/`oxc` plugins, `correctness` = error, module boundaries) and adds the `react` (incl. hooks rules), `jsx-a11y`, and `import` plugins.
- **Build**: [Vite](https://vitejs.dev/) library mode via `@nx/vite:build`, producing ESM/CJS + type declarations. `react`, `react-dom`, `react/jsx-runtime`, and `@ouds/core` are external. `classnames` is external too and is declared in `dependencies`. `build` depends on `@ouds/core:build`, and the `.d.ts` files are type-checked against its built declarations so they import `@ouds/core` by name. `resolve.tsconfigPaths: true` (Vite's built-in support for the `paths` of `tsconfig.base.json`) resolves `@ouds/*` from sources for tests and Storybook. The build does not copy Markdown files into `dist/libs/react`.

See [AGENTS.md](./AGENTS.md) for the agent-facing summary of these rules. Stories are rendered by [`apps/react-storybook`](../../apps/react-storybook/AGENTS.md).

## Versioning & releases

This project is configured for [Nx release](https://nx.dev/features/manage-releases) (`release.version.currentVersionResolver: "git-tag"` in `project.json`) and publishes via the `nx-release-publish` target. Notable changes are recorded in [CHANGELOG.md](./CHANGELOG.md) ([Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format).
