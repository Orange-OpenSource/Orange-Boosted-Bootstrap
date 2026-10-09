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
    transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
    snapshotSerializers: [
        'jest-preset-angular/build/serializers/no-ng-attributes',
        'jest-preset-angular/build/serializers/ng-snapshot',
        'jest-preset-angular/build/serializers/html-comment',
    ],
    coverageDirectory: '../../coverage/libs/angular',
}
