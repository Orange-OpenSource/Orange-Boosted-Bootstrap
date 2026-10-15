export default {
    displayName: '@ouds/angular',
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(ts|mjs|js|html)$': [
            'jest-preset-angular',
            {
                tsconfig: '<rootDir>/tsconfig.spec.json',
                stringifyContentPathRegex: '\\.(html|svg)$',
            },
        ],
    },
    // Resolve @ouds/core from its sources so tests don't depend on a prior build.
    moduleNameMapper: {
        '^@ouds/core$': '<rootDir>/../core/src/index.ts',
    },
    transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
    snapshotSerializers: [
        'jest-preset-angular/build/serializers/no-ng-attributes',
        'jest-preset-angular/build/serializers/ng-snapshot',
        'jest-preset-angular/build/serializers/html-comment',
    ],
    coverageDirectory: '../../coverage/libs/angular',
    // Same reporters as the Vitest libraries: an `index.html` report at the root of the folder.
    coverageReporters: ['text', 'html', 'lcov'],
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.ts',
        '!src/**/*.spec.ts',
        '!src/**/*.stories.ts',
        '!src/**/index.ts',
        '!src/test-setup.ts',
    ],
    coverageThreshold: {
        global: {
            statements: 100,
            branches: 100,
            functions: 100,
            lines: 100,
        },
    },
};
