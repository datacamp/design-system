// eslint-disable-next-line import/no-extraneous-dependencies
const { testFilesGlobPatterns } = require('@datacamp/eslint-config/helpers');

module.exports = {
  env: {
    browser: true,
  },
  extends: ['@datacamp/eslint-config/typescript', 'plugin:cypress/recommended'],
  ignorePatterns: ['**/generated/**'],
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: { '@typescript-eslint/explicit-function-return-type': 'off' },
    },
    {
      files: [...testFilesGlobPatterns, '**/*.stories.js'],
      rules: { '@typescript-eslint/no-empty-function': 'off' },
    },
    {
      files: ['**/cypress/**/*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'jest/expect-expect': 'off',
        'jest/valid-expect': 'off',
        'jest/valid-expect-in-promise': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  root: true,
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          ...testFilesGlobPatterns,
          '.storybook/**.js',
          '**/*.stories.js',
          '**/catalog.config.js',
          '**/webpack.config.js',
          '**/gulpfile.js',
          'packages/other/**/*.js',
          '**/cypress/**',
        ],
      },
    ],
    'react/jsx-filename-extension': 'off',
  },
};
