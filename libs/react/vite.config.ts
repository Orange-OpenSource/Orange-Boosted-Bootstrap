/// <reference types='vitest' />
import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig(() => ({
    root: __dirname,
    cacheDir: '../../node_modules/.vite/libs/react',
    plugins: [
        react(),
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
        outDir: '../../dist/libs/react',
        emptyOutDir: true,
        reportCompressedSize: true,
        commonjsOptions: {
            transformMixedEsModules: true,
        },
        lib: {
            entry: 'src/index.ts',
            name: '@ouds/react',
            fileName: 'index',
            formats: ['es' as const, 'cjs' as const],
        },
        rollupOptions: {
            external: [
                'react',
                'react-dom',
                'react/jsx-runtime',
                /^@ouds\/core/,
                'classnames',
            ],
        },
    },
    test: {
        globals: true,
        environment: 'jsdom',
        include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        reporters: ['default'],
        coverage: {
            provider: 'v8' as const,
            reportsDirectory: '../../coverage/libs/react',
            include: ['src/**/*.{ts,tsx}'],
            exclude: [
                'src/**/*.{test,spec}.{ts,tsx}',
                'src/**/*.stories.{ts,tsx}',
            ],
            reporter: ['text', 'html', 'lcov'],
            thresholds: {
                statements: 100,
                branches: 100,
                functions: 100,
                lines: 100,
            },
        },
    },
}));
