const _ = require('lodash');
const tinycolor = require('tinycolor2');
const omitDeep = require('omit-deep-lodash');
const deepCleaner = require('deep-cleaner');

const stripKeys = ['scssSortValue'];

const stripDeprecatedProps = tokens => {
  return _.mapValues(tokens, property => {
    if (!_.has(property, 'attributes')) {
      return stripDeprecatedProps(property);
    }
    return property.attributes.deprecated ? undefined : property;
  });
};

const replaceColorValues = object =>
  _.mapValues(object, property => {
    if (!_.has(property, 'value')) {
      return replaceColorValues(property);
    }
    const color = tinycolor(property.value);
    const value = {
      hex: color.getAlpha() < 1 ? undefined : color.toHexString(), // Do not include hex for colors with transparency
      hex8: color.toHex8String(),
      hsl: color.toHslString(),
      rgb: color.toRgbString(),
    };
    return { ...property, value };
  });

const replaceFontSizeValues = object =>
  _.mapValues(object, property => {
    if (!_.isNumber(property.value)) return property;
    return { ...property, value: `${property.value * 16}px` };
  });

module.exports = dictionary => {
  const { color, size } = dictionary.properties;

  const fullTokens = stripDeprecatedProps({
    ...dictionary.properties,
    size: { ...size, font: replaceFontSizeValues(size.font) },
    color: replaceColorValues(color), // replace color objects with string formats
  });
  return JSON.stringify(
    deepCleaner(deepCleaner(deepCleaner(omitDeep(fullTokens, stripKeys))))
  );
};
