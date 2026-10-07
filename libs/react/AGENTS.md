# @ouds/react — Agent Guidelines

Scope: everything under `libs/react/`. The root [`AGENTS.md`](../../AGENTS.md) still applies; this file adds React-specific rules. Background and design decisions live in [`ARCHITECTURE.md`](./ARCHITECTURE.md).

## Layout

- `src/<component>/<component>.tsx` + co-located `<component>.spec.tsx` — one kebab-case folder per component (e.g. `src/hello-world/`).
- `src/index.ts` — barrel file and the package's only public API. Re-export every new component here.
- `vite.config.ts` — Vite library build (ESM + CJS + `.d.ts` via `vite-plugin-dts`) and the Vitest `test` block, including coverage.
- `.oxlintrc.json` — Oxlint config for this lib; extends the root `oxlint.base.json`.
- `project.json` — Nx targets `build` and `test`; `lint` is inferred by `@nx/oxlint` and intentionally not declared.

## Commands (run from the repository root)

- `npm run react:lint` — Oxlint (inferred `lint` target).
- `npm run react:test` — `vitest run --coverage` (Vitest 5, jsdom). Reports go to `coverage/libs/react`. Pass extra flags after `--`, e.g. `npx nx run @ouds/react:test -- --reporter=verbose`.
- `npm run react:build` — Vite library build into `dist/libs/react`.

## Code conventions

- Function components with hooks, written in TypeScript (`.tsx`). Export a named component (PascalCase) plus its `<Name>Props` interface; folders and files are kebab-case.
- `react`, `react-dom`, and `react/jsx-runtime` are externals and `peerDependencies` — never bundle them, and add any new runtime dependency as a peer when consumers must share it.
- No code formatter is configured for this library. Follow `.editorconfig` and the existing style: single quotes, no semicolons, no trailing commas, 2-space indent.
- Lint plugins: `react` (including `rules-of-hooks` and `exhaustive-deps`), `jsx-a11y`, and `import`, on top of the base `typescript`/`unicorn`/`oxc` rules. Accessibility errors are real errors — fix them rather than disabling the rule.

## Testing

- Every component gets a co-located `<name>.spec.tsx` file using [`@testing-library/react`](https://testing-library.com/docs/react-testing-library/intro/) (`render`, `screen`, `fireEvent`) with Vitest globals (see `button.spec.tsx`). Prefer role/name queries (`getByRole('button', { name })`) over CSS selectors.
- Mock `@ouds/core` with `vi.mock` when a component calls into it (see `ouds-provider.spec.tsx`), so tests don't touch the real DOM `<head>`.
- Coverage uses the V8 provider and is limited to `src/**/*.{ts,tsx}`, excluding specs and `*.stories.tsx`. A **100% threshold** (statements, branches, functions, lines) is enforced in `vite.config.ts`: `npm run react:test` fails if any new code is untested.
- Do not switch the `test` target back to `@nx/vitest:test`: `@nx/vitest@23.2.1` only supports Vitest 3–4.

## Boundaries

- Tag `lib:react`. `@nx/enforce-module-boundaries` (via `@nx/oxlint/boundaries-plugin`) forbids imports from `@ouds/web-*`, `@ouds/vue`, and `@ouds/angular`.
- Styling will come from a **published** OUDS Web package, not from `libs/web` sources (see `ARCHITECTURE.md`).
- If you change `depConstraints` in `oxlint.base.json`, mirror the change in the root `eslint.config.mjs` and `libs/web/eslint.config.mjs`.

## Related

- Workflow skill: [`react-component-patterns`](../../.github/skills/react-component-patterns/SKILL.md)
- Shared RAV conventions: [`rav-conventions`](../../.github/skills/rav-conventions/SKILL.md)
- Record notable changes in [`CHANGELOG.md`](./CHANGELOG.md) (Keep a Changelog). Releases go through Nx release (`nx-release-publish`, git-tag versioning).
