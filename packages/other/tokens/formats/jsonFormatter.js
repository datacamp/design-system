const _ = require('lodash');
const tinycolor = require('tinycolor2');

const replaceColorValues = object =>
  _.mapValues(object, property => {
    if (!_.has(property, 'value')) {
      return replaceColorValues(property);
    }
    const color = tinycolor(property.value);
    const value = {
      hex: color.getAlpha() < 1 ? undefined : color.toHexString(), // Do not include hex for colors with transparency
      hex8: color.toHex8String(),
      rgb: color.toRgbString(),
      hsl: color.toHslString(),
    };
    return { ...property, value };
  });

module.exports = dictionary => {
  const { color } = dictionary.properties;

  return JSON.stringify({
    ...dictionary.properties,
    color: replaceColorValues(color), // replace color objects with string formats
  });
};
