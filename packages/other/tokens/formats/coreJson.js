const _ = require('lodash');

const extractValues = require('../helpers/extractValues');
const extractValueArray = require('../helpers/extractValueArray');
const extractColors = require('../helpers/extractColors');

module.exports = dictionary => {
  const tokens = {
    spatial: {
      multiplier: dictionary.properties.size.spatial.multiplier.value,
      sizes: extractValueArray(dictionary.properties.size.spatial.size).join(
        ' '
      ),
      commonSizes: extractValueArray(
        dictionary.properties.size.spatial.commonSize
      ).join(' '),
      measure: extractValueArray(
        dictionary.properties.size.spatial.measure
      ).join(' '),
      percentages: extractValueArray(
        dictionary.properties.size.spatial.percentage
      ).join(' '),
      angles: extractValueArray(dictionary.properties.size.spatial.angle).join(
        ' '
      ),
      zIndex: extractValueArray(dictionary.properties.size.spatial.zIndex).join(
        ' '
      ),
    },
    colors: extractColors({
      ...dictionary.properties.color.opaque,
      ...dictionary.properties.color.transparent,
    }),
    gradients: extractValues(dictionary.properties.gradient),
    fontFamily: _.mapValues(
      extractValues(dictionary.properties.asset.font),
      fontFamily => `'${fontFamily}'`
    ),
    fontSize: extractValues(dictionary.properties.size.font),
    fontWeight: extractValues(dictionary.properties.size.fontWeight),
    lineHeight: extractValues(dictionary.properties.size.lineHeight),
    border: extractValues(dictionary.properties.size.border),
    boxShadow: extractValues(dictionary.properties.boxShadow),
    animation: extractValues(dictionary.properties.animation),
    breakpoints: {
      ...extractValues(dictionary.properties.breakpoints),
      ..._.mapValues(
        _.mapKeys(dictionary.properties.breakpoints, (value, key) => {
          return _.camelCase(`below-${key}`);
        }),
        prop => {
          return prop.attributes.below;
        }
      ),
    },
  };
  return JSON.stringify(tokens);
};
