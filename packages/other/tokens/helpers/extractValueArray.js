const _ = require('lodash');
const extractValues = require('./extractValues');

module.exports = (object) => _.values(extractValues(object));
