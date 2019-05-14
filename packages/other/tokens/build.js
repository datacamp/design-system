const styleDictionary = require('style-dictionary');

const coreJsonFormatter = require('./formats/coreJson');
const jsonFormatter = require('./formats/jsonFormatter');
const scssVariableFormatter = require('./formats/scssVariableFormatter');
const gradientTransform = require('./transforms/gradient');

const transforms = ['attribute/cti', 'attribute/color', 'waffles/gradient'];

const tokenBuilder = styleDictionary.extend({
  source: ['properties/**/*.json'],
  platforms: {
    'full-json': {
      transforms,
      buildPath: 'lib/',
      files: [{ destination: 'future-tokens.json', format: 'waffles/json' }],
    },
    'core-json': {
      buildPath: 'lib/',
      transforms,
      files: [{ destination: 'core-tokens.json', format: 'waffles/core-json' }],
    },
    scss: {
      buildPath: 'lib/',
      transforms,
      files: [
        { destination: 'variables.scss', format: 'waffles/scss-variables' },
      ],
    },
  },
});

tokenBuilder.registerTransform({
  name: 'waffles/gradient',
  type: 'value',
  matcher: prop => prop.attributes.category === 'gradient',
  transformer: gradientTransform,
});

tokenBuilder.registerFormat({
  name: 'waffles/core-json',
  formatter: coreJsonFormatter,
});

tokenBuilder.registerFormat({
  name: 'waffles/json',
  formatter: jsonFormatter,
});

tokenBuilder.registerFormat({
  name: 'waffles/scss-variables',
  formatter: scssVariableFormatter,
});

tokenBuilder.buildAllPlatforms();
