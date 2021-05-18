const { testFilesGlobPatterns } = require('@datacamp/eslint-config/helpers');

module.exports = {
  env: {
    browser: true,
  },
  extends: ['@datacamp/eslint-config/typescript', 'plugin:cypress/recommended'],
  ignorePatterns: ['**/generated/**'],
  overrides: [
    {
      files: ['packages/docs/next-doc-site/**/*.{ts,tsx}'],
      rules: { 'filenames/match-exported': 0 },
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
  plugins: ['@emotion'],
  root: true,
  rules: {
    '@emotion/pkg-renaming': 'error',
    '@typescript-eslint/no-var-requires': 'off',
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
          '.eslintrc.js',
        ],
      },
    ],
  },
};
