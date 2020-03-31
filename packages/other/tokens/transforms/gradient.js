const convertToColorString = require('../helpers/convertToColorString');

module.exports = prop => {
  return `linear-gradient(${
    prop.original.value.angle
  }deg, ${convertToColorString(
    prop.original.value.start,
  )}, ${convertToColorString(prop.original.value.end)})`;
};
