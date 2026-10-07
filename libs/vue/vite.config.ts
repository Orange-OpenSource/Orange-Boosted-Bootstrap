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
      strictOutput: false
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
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
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
      exclude: ['src/**/*.{test,spec}.ts'],
      reporter: ['text', 'html', 'lcov']
    }
  }
})
