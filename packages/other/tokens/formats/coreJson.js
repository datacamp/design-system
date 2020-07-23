const _ = require('lodash');

const extractValues = require('../helpers/extractValues');
const extractValueArray = require('../helpers/extractValueArray');
const extractColors = require('../helpers/extractColors');

module.exports = dictionary => {
  const tokens = {
    animation: extractValues(dictionary.properties.animation),
    border: extractValues(dictionary.properties.size.border),
    boxShadow: extractValues(dictionary.properties.shadow),
    breakpoints: {
      ...extractValues(dictionary.properties.breakpoints),
      ..._.mapValues(
        _.mapKeys(dictionary.properties.breakpoints, (value, key) => {
          return _.camelCase(`below-${key}`);
        }),
        prop => {
          return prop.attributes.below;
        },
      ),
    },
    colors: extractColors({
      ...dictionary.properties.color.primary,
      ...dictionary.properties.color.neutral,
    }),
    fontFamily: _.mapValues(
      extractValues(dictionary.properties.asset.font),
      fontFamily => `'${fontFamily}'`,
    ),
    fontSize: _.mapValues(
      extractValues(
        _.mapKeys(
          dictionary.properties.size.font,
          ({ attributes }, key) => attributes.legacyName || 'remove',
        ),
      ),
      fontSize => (_.isString(fontSize) ? fontSize : `${fontSize}rem`),
    ),
    fontWeight: _.mapValues(
      extractValues(dictionary.properties.fontWeight),
      fontWeight => `${fontWeight}`,
    ),
    letterSpacings: extractValues(dictionary.properties.letterSpacings),
    lineHeight: extractValues(dictionary.properties.lineHeight),
    spatial: {
      angles: extractValueArray(dictionary.properties.size.spatial.angle).join(
        ' ',
      ),
      commonSizes: extractValueArray(
        dictionary.properties.size.spatial.commonSize,
      ).join(' '),
      measure: extractValueArray(
        dictionary.properties.size.spatial.measure,
      ).join(' '),
      multiplier: dictionary.properties.size.spatial.multiplier.value,
      percentages: extractValueArray(
        dictionary.properties.size.spatial.percentage,
      ).join(' '),
      sizes: extractValueArray(dictionary.properties.size.spatial.size).join(
        ' ',
      ),
      zIndex: extractValueArray(dictionary.properties.zIndex).join(' '),
    },
  };
  return JSON.stringify(tokens);
};
