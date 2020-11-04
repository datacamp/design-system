const styleDictionary = require('style-dictionary');

const coreJsonFormatter = require('./formats/coreJson');
const jsonFormatter = require('./formats/jsonFormatter');
const scssVariableFormatter = require('./formats/scssVariableFormatter');
const gradientTransform = require('./transforms/gradient');

const transforms = ['attribute/cti', 'attribute/color', 'waffles/gradient'];

const tokenBuilder = styleDictionary.extend({
  platforms: {
    'core-json': {
      buildPath: 'lib/',
      files: [{ destination: 'core-tokens.json', format: 'waffles/core-json' }],
      transforms,
    },
    'full-json': {
      buildPath: 'lib/',
      files: [{ destination: 'future-tokens.json', format: 'waffles/json' }],
      transforms,
    },
    scss: {
      buildPath: 'lib/',
      files: [
        { destination: 'variables.scss', format: 'waffles/scss-variables' },
      ],
      transforms,
    },
  },
  source: ['properties/**/*.json'],
});

tokenBuilder.registerTransform({
  matcher: (prop) => prop.attributes.category === 'gradient',
  name: 'waffles/gradient',
  transformer: gradientTransform,
  type: 'value',
});

tokenBuilder.registerFormat({
  formatter: coreJsonFormatter,
  name: 'waffles/core-json',
});

tokenBuilder.registerFormat({
  formatter: jsonFormatter,
  name: 'waffles/json',
});

tokenBuilder.registerFormat({
  formatter: scssVariableFormatter,
  name: 'waffles/scss-variables',
});

tokenBuilder.buildAllPlatforms();
