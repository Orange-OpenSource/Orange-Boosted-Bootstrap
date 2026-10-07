/// <reference types='vitest' />
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import * as path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/libs/core',
  plugins: [
    nxViteTsPaths(),
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.lib.json')
    })
  ],
  build: {
    outDir: '../../dist/libs/core',
    emptyOutDir: true,
    reportCompressedSize: true,
    lib: {
      entry: 'src/index.ts',
      name: '@ouds/core',
      fileName: 'index',
      formats: ['es' as const, 'cjs' as const]
    }
    // The brand package.json imports in brand.util.ts are inlined at build time,
    // so the published bundle has no runtime dependency on @ouds/web-*.
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.ts'],
    reporters: ['default'],
    coverage: {
      provider: 'v8' as const,
      reportsDirectory: '../../coverage/libs/core',
      include: ['src/**/*.ts'],
      exclude: ['src/**/*.{test,spec}.ts'],
      reporter: ['text', 'html', 'lcov']
    }
  }
}))
