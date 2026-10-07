import nx from '@nx/eslint-plugin'

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist', '**/coverage', '**/node_modules'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      // Keep depConstraints in sync with oxlint.base.json (used by @ouds/react and @ouds/vue).
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          // @ouds/core inlines only the brand versions from these files at build time.
          allow: [
            '@ouds/web-orange/package.json',
            '@ouds/web-orange-compact/package.json',
            '@ouds/web-sosh/package.json',
          ],
          depConstraints: [
            {
              sourceTag: 'lib:web-common',
              onlyDependOnLibsWithTags: [],
            },
            {
              sourceTag: 'lib:web-orange',
              onlyDependOnLibsWithTags: ['lib:web-common'],
            },
            {
              sourceTag: 'lib:web-orange-compact',
              onlyDependOnLibsWithTags: ['lib:web-common'],
            },
            {
              sourceTag: 'lib:web-sosh',
              onlyDependOnLibsWithTags: ['lib:web-common'],
            },
            {
              sourceTag: 'lib:web-migrate',
              onlyDependOnLibsWithTags: [],
            },
            {
              sourceTag: 'lib:react',
              onlyDependOnLibsWithTags: ['lib:react', 'lib:core'],
            },
            {
              sourceTag: 'lib:vue',
              onlyDependOnLibsWithTags: ['lib:vue', 'lib:core'],
            },
            {
              sourceTag: 'lib:angular',
              onlyDependOnLibsWithTags: ['lib:angular', 'lib:core'],
            },
            {
              sourceTag: 'lib:core',
              onlyDependOnLibsWithTags: ['lib:web-orange', 'lib:web-orange-compact', 'lib:web-sosh'],
            },
            {
              sourceTag: 'app:react',
              onlyDependOnLibsWithTags: ['lib:react', 'lib:web-orange'],
            },
            {
              sourceTag: 'app:vue',
              onlyDependOnLibsWithTags: ['lib:vue', 'lib:web-orange'],
            },
            {
              sourceTag: 'app:angular',
              onlyDependOnLibsWithTags: ['lib:angular', 'lib:web-orange'],
            },
          ],
        },
      ],
    },
  },
]
