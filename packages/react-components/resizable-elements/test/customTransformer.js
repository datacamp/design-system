const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer(require('../babel7.config'));
