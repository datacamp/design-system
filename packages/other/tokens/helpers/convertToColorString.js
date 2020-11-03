const tinycolor = require('tinycolor2');
const _ = require('lodash');

module.exports = (colorInput) => {
  if (_.isString(colorInput) && /{.+}/.test(colorInput)) return colorInput;

  const color = tinycolor(colorInput);

  return color.getAlpha() < 1 ? color.toRgbString() : color.toHexString();
};
