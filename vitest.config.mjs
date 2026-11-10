import { playwright } from '@vitest/browser-playwright'
// eslint-disable-next-line import/no-unresolved
import { defineConfig } from 'vitest/config'

export default defineConfig({
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
