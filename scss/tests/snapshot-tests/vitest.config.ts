import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: [
      'scss/tests/snapshot-tests/**/*.test.ts'
    ]
  }
})
