const _ = require('lodash');

const extractValues = require('../helpers/extractValues');
const extractValueArray = require('../helpers/extractValueArray');
const extractColors = require('../helpers/extractColors');

module.exports = dictionary => {
  const tokens = {
    animation: extractValues(dictionary.properties.animation),
    border: extractValues(dictionary.properties.size.border),
    boxShadow: extractValues(dictionary.properties.boxShadow),
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
    colors: extractColors({
      ...dictionary.properties.color.opaque,
      ...dictionary.properties.color.transparent,
    }),
    fontFamily: _.mapValues(
      extractValues(dictionary.properties.asset.font),
      fontFamily => `'${fontFamily}'`
    ),
    fontSize: extractValues(dictionary.properties.size.font),
    fontWeight: _.mapValues(
      extractValues(dictionary.properties.size.fontWeight),
      fontWeight => `${fontWeight}`
    ),
    gradients: extractValues(dictionary.properties.gradient),
    lineHeight: extractValues(dictionary.properties.size.lineHeight),
    spatial: {
      angles: extractValueArray(dictionary.properties.size.spatial.angle).join(
        ' '
      ),
      commonSizes: extractValueArray(
        dictionary.properties.size.spatial.commonSize
      ).join(' '),
      measure: extractValueArray(
        dictionary.properties.size.spatial.measure
      ).join(' '),
      multiplier: dictionary.properties.size.spatial.multiplier.value,
      percentages: extractValueArray(
        dictionary.properties.size.spatial.percentage
      ).join(' '),
      sizes: extractValueArray(dictionary.properties.size.spatial.size).join(
        ' '
      ),
      zIndex: extractValueArray(dictionary.properties.size.spatial.zIndex).join(
        ' '
      ),
    },
  };
  return JSON.stringify(tokens);
};
