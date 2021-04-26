module.exports = {
  setupFilesAfterEnv: ['jest-canvas-mock'],
  snapshotSerializers: ['@emotion/jest/serializer'],
  transform: { '\\.[jt]sx?$': '<rootDir>/test/customTransformer.js' },
};
