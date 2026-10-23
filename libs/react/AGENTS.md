# @ouds/react — Agent Guidelines

Scope: everything under `libs/react/`. The root [`AGENTS.md`](../../AGENTS.md) still applies; this file adds React-specific rules. Background and design decisions live in [`ARCHITECTURE.md`](./ARCHITECTURE.md).

## Layout

- `src/components/<name>/` — one kebab-case folder per component, holding `<name>.component.tsx`, `<name>.model.ts` (props type, extending the `Core<Name>Props` from `@ouds/core`), a co-located `<name>.spec.tsx`, and `<name>.stories.tsx` (e.g. `src/components/button/`). Today: `button/`, `icon/` (renders the data of `@ouds/icons`; its specs and stories import `@ouds/icons`, which is in `dependencies` so it is installed with the library, but the library source never imports it), and `ouds-provider/` (which also exports the `useOuds` hook and its props/context types; no separate model file).
- `src/components/index.ts` → `src/index.ts` — barrel files and the package's only public API. Re-export every new component and its model (`export * from './<name>/<name>.component'` and `'./<name>/<name>.model'`) through them. `src/index.ts` also re-exports the `Brand` and `Theme` types from `@ouds/core`, which the Storybook preview uses.
- `vite.config.ts` — Vite library build (ESM + CJS + `.d.ts` via `vite-plugin-dts`), `resolve.tsconfigPaths: true` (resolves the `@ouds/*` paths of `tsconfig.base.json`, so tests and the Storybook app read `@ouds/core` from its sources), and the Vitest `test` block, including coverage.
- `tsconfig.lib.json` excludes the stories, so `tsconfig.spec.json` includes `*.stories.ts(x)` as well: Vite's `resolve.tsconfigPaths` only applies the `@ouds/*` paths to files covered by a tsconfig, and a story that imports `@ouds/icons` would not build in Storybook otherwise.
- `.oxlintrc.json` — Oxlint config for this lib; extends the root `oxlint.base.json`.
- `project.json` — Nx targets `build` and `test`; `lint` is inferred by `@nx/oxlint` and intentionally not declared.

## Commands (run from the repository root)

- `npm run react:lint` — Oxlint (inferred `lint` target).
- `npm run react:test` — `vitest run --coverage` (Vitest 5, jsdom). Reports go to `coverage/libs/react`. Pass extra flags after `--`, e.g. `npx nx run @ouds/react:test -- --reporter=verbose`.
- `npm run react:build` — Vite library build into `dist/libs/react` (builds `@ouds/core` first; its type declarations are resolved against `dist/libs/core`).

## Code conventions

- Function components with hooks, written in TypeScript (`.tsx`). Export a named component (PascalCase) typed with `React.FC<<Name>Props>`; folders and files are kebab-case, with a `.component.tsx` suffix for components. Component classes follow OUDS Web markup (`btn`, `btn-<variant>`, …) and use `classnames`.
- `@ouds/core` and `classnames` are `dependencies` (kept external in the bundle, so they must stay declared in `libs/react/package.json`). Prop types shared across frameworks belong in `@ouds/core`.
- `react`, `react-dom`, and `react/jsx-runtime` are externals and `peerDependencies` — never bundle them, and add any new runtime dependency as a peer when consumers must share it.
- No code formatter is configured for this library. Follow `.editorconfig` and the existing style: single quotes, no semicolons, no trailing commas, 2-space indent.
- Lint plugins: `react` (including `rules-of-hooks` and `exhaustive-deps`), `jsx-a11y`, and `import`, on top of the base `typescript`/`unicorn`/`oxc` rules. Accessibility errors are real errors — fix them rather than disabling the rule.

## Testing

- Every component gets a co-located `<name>.spec.tsx` file using [`@testing-library/react`](https://testing-library.com/docs/react-testing-library/intro/) (`render`, `screen`, `fireEvent`) with Vitest globals (see `button/button.spec.tsx`). Prefer role/name queries (`getByRole('button', { name })`) over CSS selectors.
- Mock `@ouds/core` with `vi.mock` when a component calls into it (see `ouds-provider/ouds-provider.spec.tsx`), so tests don't touch the real DOM `<head>`.
- Coverage uses the V8 provider and is limited to `src/**/*.{ts,tsx}`, excluding specs and `*.stories.tsx`. A **100% threshold** (statements, branches, functions, lines) is enforced in `vite.config.ts`: `npm run react:test` fails if any new code is untested.
- Do not switch the `test` target back to `@nx/vitest:test`: `@nx/vitest@23.2.1` only supports Vitest 3–4.

## Boundaries

- Tag `lib:react`. `@nx/enforce-module-boundaries` (via `@nx/oxlint/boundaries-plugin`) forbids imports from `@ouds/web-*`, `@ouds/vue`, and `@ouds/angular`.
- The brand CSS is loaded at runtime from the CDN through `@ouds/core`'s `loadBrandCSS` (called by `OudsProvider`). Any future build-time dependency on OUDS Web must be a **published** package, not `libs/web` sources (see `ARCHITECTURE.md`).
- If you change `depConstraints` in `oxlint.base.json`, mirror the change in the root `eslint.config.mjs` and `libs/web/eslint.config.mjs`.

## Related

- Stories live next to the components and render in [`apps/react-storybook`](../../apps/react-storybook/AGENTS.md) (`npm run storybook:react:serve`).
- There are no RAV-specific agent skills; the skills in `.github/skills/` cover OUDS Web only.
- Record notable changes in [`CHANGELOG.md`](./CHANGELOG.md) (Keep a Changelog). Releases go through Nx release (`nx-release-publish`, git-tag versioning).

## Known issues

- The build no longer copies `README.md`, `CHANGELOG.md` and the other Markdown files into `dist/libs/react` (the `nxCopyAssetsPlugin` was removed from `vite.config.ts`), so the published package would have no README until that is added back or handled by the release step.
- `src/components/button/button.module.scss` is a comment-only placeholder that no component imports. The build extracts no CSS and the package exports no `./style.css` (see `ARCHITECTURE.md`).
