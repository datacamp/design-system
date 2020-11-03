const _ = require('lodash');

module.exports = (object) => {
  const newObject = object;
  delete newObject.remove;
  return _.mapValues(newObject, ({ value }) => value);
};
