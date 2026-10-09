import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/libs/vue',

  plugins: [
    vue(),
    nxViteTsPaths(),
    dts({
      entryRoot: 'src',
      tsconfigPath: resolve(__dirname, 'tsconfig.lib.json'),
      strictOutput: false,
      // Type-check against the built @ouds/core declarations (not its sources) and keep
      // `@ouds/core` as a bare import in the emitted .d.ts files.
      compilerOptions: {
        paths: { '@ouds/core': [resolve(__dirname, '../../dist/libs/core/index.d.ts')] }
      },
      aliasesExclude: [/^@ouds\/core/]
    })
  ],
  build: {
    outDir: '../../dist/libs/vue',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@ouds/vue',
      fileName: 'index',
      formats: ['es', 'cjs', 'umd']
    },
    rollupOptions: {
      external: ['vue', /^@ouds\/core/],
      output: {
        globals: {
          vue: 'Vue',
          '@ouds/core': 'OudsCore'
        }
      }
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    coverage: {
      provider: 'v8',
      reportsDirectory: '../../coverage/libs/vue',
      include: ['src/**/*.{ts,vue}'],
      exclude: ['src/**/*.{test,spec}.ts', 'src/**/*.stories.ts'],
      reporter: ['text', 'html', 'lcov'],
      thresholds: { statements: 100, branches: 100, functions: 100, lines: 100 }
    }
  }
})
