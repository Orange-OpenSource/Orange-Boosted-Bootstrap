# @ouds/vue — Agent Guidelines

Scope: everything under `libs/vue/`. The root [`AGENTS.md`](../../AGENTS.md) still applies; this file adds Vue-specific rules. Background and design decisions live in [`ARCHITECTURE.md`](./ARCHITECTURE.md).

## Layout

- `src/components/<name>/` — one kebab-case folder per component: `<name>.component.vue`, `<name>.model.ts` (props/emits types, extending the `Core<Name>Props` from `@ouds/core`), `<name>.spec.ts`, and `<name>.stories.ts` (e.g. `src/components/button/`).
- `src/index.ts` — barrel file and the package's only public API. Re-export every new component here as a named export (`export { default as Button } from './components/button/button.component.vue'`), plus its types (`export type { ButtonProps }`).
- `vite.config.ts` — Vite library build (ES + CJS + UMD, `.d.ts` via `vite-plugin-dts`) and the Vitest `test` block, including coverage.
- `.oxlintrc.json` — Oxlint config for this lib; extends the root `oxlint.base.json`.
- `project.json` — Nx targets `build` and `test`; `lint` is inferred by `@nx/oxlint` and intentionally not declared.
- `tsconfig.json` (shared Vue compiler options; solution file that only references the other two), `tsconfig.lib.json` (library sources, used by `vite-plugin-dts`), `tsconfig.spec.json` (specs and stories, adds Vitest types) — the same layout as `@ouds/react` and `@ouds/core`.

## Commands (run from the repository root)

- `npm run vue:lint` — Oxlint (inferred `lint` target). It also lints the `<script>` blocks inside `.vue` files.
- `npm run vue:test` — `vitest run --coverage` (Vitest 5, jsdom, `@vue/test-utils`). Reports go to `coverage/libs/vue`. Pass extra flags after `--`, e.g. `npx nx run @ouds/vue:test -- --reporter=verbose`.
- `npm run vue:build` — Vite library build into `dist/libs/vue`. Type checking is skipped in this target (`skipTypeCheck: true`).

## Code conventions

- Single-file components using Composition API with `<script setup lang="ts">`. Declare props with type-based `defineProps<...>()` and set defaults with `withDefaults`.
- Component files are kebab-case with a `.component.vue` suffix (`button.component.vue`), like `@ouds/react`; the exported name is PascalCase (`Button`).
- `vue` is an external and a `peerDependency` — never bundle it.
- No code formatter is configured for this library. Follow `.editorconfig` and the existing style: single quotes, no semicolons, no trailing commas, 2-space indent.
- Lint plugins: `vue` and `import`, on top of the base `typescript`/`unicorn`/`oxc` rules. Oxlint does not lint `<template>` markup, so check template accessibility (labels, roles, keyboard focus) manually.

## Testing

- Every component gets a co-located `*.spec.ts` file using `mount` from `@vue/test-utils` (see `button.spec.ts`). Mock `@ouds/core` with `vi.mock` when a component calls into it (see `ouds-provider.spec.ts`).
- Coverage uses the V8 provider and is limited to `src/**/*.{ts,vue}`, excluding specs and `*.stories.ts`. A **100% threshold** (statements, branches, functions, lines) is enforced in `vite.config.ts`.
- Stories use args only (no custom `render`/template) and `fn()` from `storybook/test` for emits: `onClick: fn()` logs the `click` emit in the Actions panel. Don't import `@storybook/addon-actions`; it doesn't exist in Storybook 10.
- Do not switch the `test` target back to `@nx/vitest:test`: `@nx/vitest@23.2.1` only supports Vitest 3–4.

## Boundaries

- Tag `lib:vue`. `@nx/enforce-module-boundaries` (via `@nx/oxlint/boundaries-plugin`) forbids imports from `@ouds/web-*`, `@ouds/react`, and `@ouds/angular`.
- Styling will come from a **published** OUDS Web package, not from `libs/web` sources (see `ARCHITECTURE.md`).
- If you change `depConstraints` in `oxlint.base.json`, mirror the change in the root `eslint.config.mjs` and `libs/web/eslint.config.mjs`.

## Related

- Workflow skill: [`vue-component-patterns`](../../.github/skills/vue-component-patterns/SKILL.md)
- Shared RAV conventions: [`rav-conventions`](../../.github/skills/rav-conventions/SKILL.md)
- Record notable changes in [`CHANGELOG.md`](./CHANGELOG.md) (Keep a Changelog).
