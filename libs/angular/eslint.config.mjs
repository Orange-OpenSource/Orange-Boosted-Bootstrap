import nx from '@nx/eslint-plugin';
import baseConfig from '../../eslint.config.mjs';
import importPlugin from 'eslint-plugin-import';
import angular from 'angular-eslint';

export default [
    ...baseConfig,
    ...nx.configs['flat/angular'],
    {
        plugins: {
            import: importPlugin,
        },
    },
    {
        files: ['**/*.ts'],
        rules: {
            '@angular-eslint/directive-selector': [
                'error',
                {
                    type: 'attribute',
                    prefix: 'orange',
                    style: 'camelCase',
                },
            ],
            '@angular-eslint/component-selector': [
                'error',
                {
                    type: 'element',
                    prefix: 'orange',
                    style: 'kebab-case',
                },
            ],
        },
    },
    // Template rules for external `.html` templates: the recommended set plus the accessibility
    // set (alt text, labels, valid ARIA, keyboard events, ...). angular-eslint's configs have no
    // `files`, so scope them to templates here or the template parser would run on every file.
    ...[
        ...angular.configs.templateRecommended,
        ...angular.configs.templateAccessibility,
    ].map((config) => ({ ...config, files: ['**/*.html'] })),
];
