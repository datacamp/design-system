const { testFilesGlobPatterns } = require('@datacamp/eslint-config/helpers');

module.exports = {
  extends: ['@datacamp/eslint-config/typescript', 'plugin:cypress/recommended'],
  rules: {
    'react/jsx-filename-extension': 'off',
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
    'import/no-cycle': 'off',
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
    '@typescript-eslint/no-var-requires': 'off',
  },
  env: {
    browser: true,
  },
  root: true,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
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
        'jest/valid-expect': 'off',
        'jest/expect-expect': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'jest/valid-expect-in-promise': 'off',
      },
    },
  ],
};
