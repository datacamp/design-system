module.exports = {
  setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each'],
  snapshotSerializers: ['jest-emotion'],
  transform: { '\\.[jt]sx?$': '<rootDir>/test/customTransformer.js' },
};
