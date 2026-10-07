import nx from '@nx/eslint-plugin';
import baseConfig from '../../eslint.config.mjs';
import importPlugin from 'eslint-plugin-import';
import templateParser from '@angular-eslint/template-parser';
import angularTemplatePlugin from '@angular-eslint/eslint-plugin-template';

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
  {
    files: ['**/*.html'],
    languageOptions: {
      parser: templateParser,
    },
    plugins: {
      '@angular-eslint/template': angularTemplatePlugin,
    },
    rules: {},
  },
];
