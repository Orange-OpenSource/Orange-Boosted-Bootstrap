// Accessibility linting for Vue templates only. Oxlint (the `lint` target) checks the `<script>`
// blocks but cannot read `<template>` markup, so `eslint-plugin-vuejs-accessibility` covers it.
// Run through the `lint-templates` target, which `lint` depends on.
import vueAccessibility from 'eslint-plugin-vuejs-accessibility';
import vueParser from 'vue-eslint-parser';

export default [
    ...vueAccessibility.configs['flat/recommended'],
    {
        files: ['**/*.vue'],
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                parser: '@typescript-eslint/parser',
                sourceType: 'module',
            },
        },
    },
];
