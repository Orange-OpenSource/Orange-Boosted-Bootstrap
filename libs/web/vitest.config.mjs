import { fileURLToPath } from 'node:url'
import { playwright } from '@vitest/browser-playwright'
// eslint-disable-next-line import/no-unresolved
import { defineConfig } from 'vitest/config'

// libs/web/package.json declares `workspaces`, so Vite takes libs/web as the workspace root and
// only serves files below it. Dependencies hoisted to the monorepo's node_modules (e.g.
// @vitest/coverage-v8/browser, loaded by the browser in coverage mode) would then 404.
const monorepoRoot = fileURLToPath(new URL('../..', import.meta.url))

export default defineConfig({
  server: {
    fs: {
      allow: [monorepoRoot]
    }
  },
  test: {
    include: ['js/tests/unit/**/*.spec.js'],
    globals: true,
    restoreMocks: true,
    setupFiles: ['js/tests/vitest.setup.mjs'],
    browser: {
      enabled: true,
      headless: true,
      provider: playwright(),
      instances: [{ browser: 'chromium' }]
    },
    coverage: {
      provider: 'v8',
      reportsDirectory: 'js/coverage',
      reporter: ['lcov', 'text-summary'],
      thresholds: {
        statements: 90,
        branches: 89,
        functions: 90,
        lines: 90
      }
    }
  }
})
