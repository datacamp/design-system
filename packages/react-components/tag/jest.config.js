module.exports = {
  setupFiles: ['<rootDir>/test/setup.js'],
  snapshotSerializers: ['jest-emotion', 'enzyme-to-json/serializer'],
  transform: { '\\.[jt]sx?$': '<rootDir>/test/customTransformer.js' },
};
