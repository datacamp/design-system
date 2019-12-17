module.exports = {
  snapshotSerializers: ['jest-emotion'],
  transform: { '\\.[jt]sx?$': '<rootDir>/test/customTransformer.js' },
};
