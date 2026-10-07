// ESLint 9 flat config for @ouds/web-* (migrated from .eslintrc.json + .eslintignore).
// Blocks keep the order of the old config: extends → root rules → overrides.
import nx from '@nx/eslint-plugin'
import xo from 'eslint-config-xo'
import xoBrowser from 'eslint-config-xo/browser.js'
import html from 'eslint-plugin-html'
import importPlugin from 'eslint-plugin-import'
import markdown from 'eslint-plugin-markdown'
import storybook from 'eslint-plugin-storybook'
import unicorn from 'eslint-plugin-unicorn'
import globals from 'globals'

// Flat-config globals merge across blocks; "off" removes one. Used to mimic eslintrc's `env: { browser: false }`.
const browserOnlyGlobalsOff = Object.fromEntries(
  Object.keys(globals.browser)
    .filter(name => !(name in globals.node))
    .map(name => [name, 'off'])
)

export default [
  {
    ignores: [
      // Former .eslintignore
      '**/*.min.js',
      '**/dist/',
      '**/vendor/',
      '_site/',
      'site/public/',
      'js/coverage/',
      'site/static/sw.js',
      'site/layouts/partials/',
      'stories/',
      'skills/',
      // ESLint 8 (eslintrc) ignored dotfiles/dot-folders and only linted --ext .html,.js,.mjs,.md
      '**/.*',
      '**/*.cjs'
    ]
  },

  // extends: plugin:import/errors, plugin:import/warnings, plugin:unicorn/recommended, xo, xo/browser, plugin:storybook/recommended
  importPlugin.flatConfigs.errors,
  importPlugin.flatConfigs.warnings,
  unicorn.configs['flat/recommended'],
  {
    name: 'xo',
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
      // xo enables env es2021 + node, then xo/browser turns node off and browser on.
      // Flat-config globals can only be added, never removed, so set the final result here.
      globals: { ...globals.es2021, ...globals.browser }
    },
    rules: xo.rules
  },
  {
    name: 'xo/browser',
    rules: xoBrowser.rules
  },
  ...storybook.configs['flat/recommended'],

  {
    name: 'ouds-web/root',
    plugins: { '@nx': nx },
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [],
          depConstraints: [
            { sourceTag: 'lib:web-common', onlyDependOnLibsWithTags: [] },
            { sourceTag: 'lib:web-orange', onlyDependOnLibsWithTags: ['lib:web-common'] },
            { sourceTag: 'lib:web-orange-compact', onlyDependOnLibsWithTags: ['lib:web-common'] },
            { sourceTag: 'lib:web-sosh', onlyDependOnLibsWithTags: ['lib:web-common'] },
            { sourceTag: 'lib:web-migrate', onlyDependOnLibsWithTags: [] }
          ]
        }
      ],
      'arrow-body-style': 'off',
      'capitalized-comments': 'off',
      'comma-dangle': ['error', 'never'],
      'import/extensions': ['error', 'ignorePackages', { js: 'always' }],
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-absolute-path': 'error',
      'import/no-amd': 'error',
      'import/no-cycle': ['error', { ignoreExternal: true }],
      'import/no-duplicates': 'error',
      'import/no-extraneous-dependencies': 'error',
      'import/no-mutable-exports': 'error',
      'import/no-named-as-default': 'error',
      'import/no-named-as-default-member': 'error',
      'import/no-named-default': 'error',
      'import/no-self-import': 'error',
      'import/no-unassigned-import': ['error'],
      'import/no-useless-path-segments': 'error',
      'import/order': 'error',
      indent: ['error', 2, { MemberExpression: 'off', SwitchCase: 1 }],
      'logical-assignment-operators': 'off',
      'max-params': ['warn', 5],
      'multiline-ternary': ['error', 'always-multiline'],
      'new-cap': ['error', { properties: false }],
      'no-console': 'error',
      'no-negated-condition': 'off',
      'object-curly-spacing': ['error', 'always'],
      'operator-linebreak': ['error', 'after'],
      'prefer-object-has-own': 'off',
      'prefer-template': 'error',
      semi: ['error', 'never'],
      strict: 'error',
      'unicorn/explicit-length-check': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/no-anonymous-default-export': 'off',
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/no-array-method-this-argument': 'off',
      'unicorn/no-null': 'off',
      'unicorn/no-typeof-undefined': 'off',
      'unicorn/no-unused-properties': 'error',
      'unicorn/numeric-separators-style': 'off',
      'unicorn/prefer-array-flat': 'off',
      'unicorn/prefer-at': 'off',
      'unicorn/prefer-dom-node-dataset': 'off',
      'unicorn/prefer-global-this': 'off',
      'unicorn/prefer-module': 'off',
      'unicorn/prefer-query-selector': 'off',
      'unicorn/prefer-spread': 'off',
      'unicorn/prefer-string-raw': 'off',
      'unicorn/prefer-string-replace-all': 'off',
      'unicorn/prefer-structured-clone': 'off',
      'unicorn/prevent-abbreviations': 'off'
    }
  },

  {
    files: ['build/**'],
    languageOptions: {
      sourceType: 'module',
      globals: { ...browserOnlyGlobalsOff, ...globals.es2021, ...globals.node }
    },
    rules: {
      'no-console': 'off',
      'unicorn/prefer-top-level-await': 'off'
    }
  },
  {
    files: ['js/**'],
    languageOptions: { sourceType: 'module' }
  },
  {
    files: ['js/tests/*.js', 'js/tests/integration/rollup*.js'],
    languageOptions: {
      // eslintrc `sourceType: script` + `env: node` (globalReturn) = CommonJS
      sourceType: 'commonjs',
      globals: { ...globals.node }
    }
  },
  {
    files: ['js/tests/unit/**'],
    languageOptions: { globals: { ...globals.jasmine } },
    rules: {
      'no-console': 'off',
      'unicorn/consistent-function-scoping': 'off',
      'unicorn/no-useless-undefined': 'off',
      'unicorn/prefer-add-event-listener': 'off'
    }
  },
  {
    // eslint-plugin-html extracts the inline <script> blocks of every linted .html file
    files: ['**/*.html'],
    plugins: { html },
    settings: { 'html/html-extensions': ['.html'] }
  },
  {
    files: ['js/tests/visual/**'],
    rules: {
      'no-console': 'off',
      'no-new': 'off',
      'unicorn/no-array-for-each': 'off'
    }
  },
  {
    files: ['scss/tests/**'],
    languageOptions: {
      // eslintrc `sourceType: script` + `env: node` (globalReturn) = CommonJS
      sourceType: 'commonjs',
      globals: { ...globals.node }
    }
  },
  {
    files: ['site/**'],
    languageOptions: {
      sourceType: 'script',
      ecmaVersion: 2019,
      globals: { ...globals.es2021, ...globals.browser }
    },
    rules: {
      'no-new': 'off',
      'unicorn/no-array-for-each': 'off'
    }
  },
  {
    files: [
      'site/src/assets/application.js',
      'site/src/assets/color.js',
      'site/src/assets/partials/*.js',
      'site/src/assets/search.js',
      'site/src/assets/snippets.js',
      'site/src/assets/stackblitz.js',
      'site/src/plugins/*.js'
    ],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2020
    }
  },

  {
    files: ['eslint.config.mjs'],
    languageOptions: { globals: { ...browserOnlyGlobalsOff, ...globals.node } },
    rules: {
      // eslint-plugin-import's node resolver doesn't read `exports`-only packages (eslint-plugin-storybook)
      'import/no-unresolved': 'off'
    }
  },

  // Markdown: lint the JS code blocks of *.md files
  ...markdown.configs.recommended,
  {
    files: ['**/*.md/*.js', '**/*.md/*.mjs'],
    languageOptions: { sourceType: 'module' },
    rules: {
      'unicorn/prefer-node-protocol': 'off'
    }
  }
]
