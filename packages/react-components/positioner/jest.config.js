module.exports = {
  snapshotSerializers: ['@emotion/jest/serializer'],
  transform: { '\\.[jt]sx?$': '<rootDir>/test/customTransformer.js' },
};
