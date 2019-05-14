const _ = require('lodash');

module.exports = object => _.mapValues(object, ({ value }) => value);
