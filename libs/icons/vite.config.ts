/// <reference types='vitest' />
import * as path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig(() => ({
    root: __dirname,
    cacheDir: '../../node_modules/.vite/libs/icons',
    plugins: [
        dts({
            entryRoot: 'src',
            tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
            // Type-check against the built @ouds/core declarations (not its sources) and keep
            // `@ouds/core` as a bare import in the emitted .d.ts files.
            compilerOptions: {
                paths: {
                    '@ouds/core': [
                        path.join(__dirname, '../../dist/libs/core/index.d.ts'),
                    ],
                },
            },
            aliasesExclude: [/^@ouds\/core/],
        }),
    ],
    resolve: {
        tsconfigPaths: true,
    },
    build: {
        outDir: '../../dist/libs/icons',
        emptyOutDir: true,
        reportCompressedSize: true,
        lib: {
            entry: 'src/index.ts',
            name: '@ouds/icons',
            fileName: 'index',
            formats: ['es' as const, 'cjs' as const],
        },
        rollupOptions: {
            external: [/^@ouds\/core/],
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
        include: ['src/**/*.{test,spec}.ts'],
        reporters: ['default'],
        coverage: {
            provider: 'v8' as const,
            reportsDirectory: '../../coverage/libs/icons',
            include: ['src/**/*.ts'],
            exclude: ['src/**/*.{test,spec}.ts'],
            reporter: ['text', 'html', 'lcov'],
        },
    },
}));
