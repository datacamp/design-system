// This config was generated using a preset.
// Please see the handbook for more information: https://github.com/stryker-mutator/stryker-handbook/blob/master/stryker/guides/react.md#react
module.exports = function (config) {
  config.set({
    commandRunner: {
      command: 'yarn test',
    },
    coverageAnalysis: 'off',
    htmlReporter: {
      baseDir: '../../../reports/modals',
    },

    maxConcurrentTestRunners: 8,
    mutate: ['src/**/*.ts?(x)', '!src/**/*@(.test|.spec|Spec).ts?(x)'],
    mutator: 'typescript',
    reporters: ['progress', 'clear-text', 'html'],
    testFramework: 'jest',
    testRunner: 'command',
    timeoutMS: 60000,
  });
};
