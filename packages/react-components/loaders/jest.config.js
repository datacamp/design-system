module.exports = {
  setupFilesAfterEnv: ['jest-canvas-mock'],
  snapshotSerializers: ['jest-emotion'],
  transform: { '\\.[jt]sx?$': '<rootDir>/test/customTransformer.js' },
};
