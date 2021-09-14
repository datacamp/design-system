// FIX BROKEN RELEASE
// Generate new design tokens JS and SCSS files based on JSON file with Figma Tokens definitions

const fs = require('fs');

const { tokensToEsModule } = require('./newTokensHelpers/tokensToEsModule');
const {
  tokensToSassVariables,
} = require('./newTokensHelpers/tokensToSassVariables');
const {
  transformedBaseTokens,
} = require('./newTokensHelpers/transformedBaseTokens');

const baseTokens = require('./base-tokens.json'); // Already parsed to JS

const transformedTokens = transformedBaseTokens(baseTokens);

if (!fs.existsSync('./lib')) {
  fs.mkdirSync('./lib');
}

fs.writeFileSync('./lib/tokens.js', tokensToEsModule(transformedTokens));
fs.writeFileSync(
  './lib/future-variables.scss',
  tokensToSassVariables(transformedTokens),
);
