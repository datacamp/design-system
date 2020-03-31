module.exports = {
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    '@datacamp/eslint-config/typescript',
  ],
  plugins: [
    'prettier',
    'emotion',
    '@typescript-eslint',
    'sort-keys-fix',
    'simple-import-sort',
    'typescript-sort-keys',
    'react-hooks',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 'off',
    'react/require-default-props': 'off',
    'emotion/styled-import': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'packages/**/src/**/*.spec.js',
          'packages/**/src/**/*.spec.ts',
          'packages/**/src/**/*.spec.tsx',
          'src/**/__mocks__/**',
          'test/helpers',
          '.storybook/**.js',
          '**/*.stories.js',
          '**/catalog.config.js',
          '**/webpack.config.js',
          '**/test/*',
          '**/gulpfile.js',
          'packages/other/**/*.js',
        ],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        tsx: 'never',
        ts: 'never',
        jsx: 'never',
        js: 'never',
      },
    ],
    'import/order': 'off',
    'sort-order': 'off',
    'simple-import-sort/sort': 'error',
    'react/prop-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: 'jsx' },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowTypedFunctionExpressions: true,
        allowExpressions: true,
      },
    ],
    'sort-keys-fix/sort-keys-fix': ['error', 'asc', { natural: true }],
    'typescript-sort-keys/interface': ['error', 'asc', { natural: true }],
    'typescript-sort-keys/string-enum': ['error', 'asc', { natural: true }],
    'react/jsx-sort-props': [
      'error',
      { shorthandLast: true, reservedFirst: true },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/default-props-match-prop-types': 'off',
  },
  globals: {},
  env: {
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': { typescript: {} },
  },
  root: true,
  overrides: [
    {
      files: [
        'packages/**/src/**/*.spec.js',
        'packages/**/src/**/*.spec.ts',
        'packages/**/src/**/*.spec.tsx',
        'packages/**/test/*.spec.js',
        'src/**/__mocks__/**',
        'test/helpers',
        'packages/tools/axe-render/**',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
