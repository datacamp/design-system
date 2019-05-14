const _ = require('lodash');

const convertToColorString = require('./convertToColorString');

module.exports = object =>
  _.mapValues(object, ({ value }) => convertToColorString(value));
