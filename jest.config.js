module.exports = {
  testEnvironment: 'jsdom',
  timers: 'fake',
  verbose: true,
  clearMocks: true,
  resetMocks: true,
  resetModules: true,
  testURL: 'http://localhost:6000',
  testMatch: ['<rootDir>/packages/**/src/*.spec.js'],
  collectCoverageFrom: ['src/**/*.js', '!src/**/*.stories.js'],
  setupFiles: ['<rootDir>/test/helpers/setupFile.js'],
  coverageDirectory: '<rootDir>/coverage',
  transformIgnorePatterns: ['/node_modules/(?!@datacamp).+(svg|css)$'],
  transform: {
    '^.+\\.(s?css|svg)$': 'jest-transform-stub',
    '^.+\\.js?$': 'babel-jest',
  },
  modulePaths: ['<rootDir>/src/'],
  globals: {
    __ENV__: process.env.NODE_ENV,
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
