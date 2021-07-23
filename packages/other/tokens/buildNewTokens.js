// Generate new design tokens JS file based on JSON file with Figma Tokens definitions
// It will be used to generate both ESM and CJS modules, and TS typings

// fontWeights, fontFamilies, and boxShadow have non-standard values to work with Figma Tokens
// typography and paragraphSpacing are defined for convenience  and are removed
// colors are grouped for convenience and are flattened

const fs = require('fs');
const util = require('util');

const baseTokens = require('./base-tokens.json'); // Already parsed to JS

// Mappign for Figma Tokens values and CSS couterparts

const fontWeights = {
  Bold: 800,
  Regular: 400,
};

const fontFamilies = {
  'JetBrains Mono NL':
    "JetBrainsMonoNL, Menlo, Monaco, 'Courier New', monospace",
  'Studio Feixen Sans': 'Studio-Feixen-Sans, Arial, sans-serif',
};

// Transformations for colors, boxShadow, fontWeights, fontFamilies, and lineHeights

function transformedColors(baseColors) {
  return Object.entries(baseColors).reduce((flattenedColors, currentEntry) => {
    const groupedColors = currentEntry[1];
    return Object.assign(flattenedColors, { ...groupedColors });
  }, {});
}

function transformedBoxShadows(baseBoxShadows) {
  return Object.fromEntries(
    Object.entries(baseBoxShadows).map((entry) => {
      const [key, baseBoxShadow] = entry;
      const { blur, color, spread, x, y } = baseBoxShadow.value;
      // Regular CSS box-shadow value
      const regularBoxShadow = `${x} ${y} ${blur} ${spread} ${color}`;

      return [key, regularBoxShadow];
    }),
  );
}

function transformedFontWeights(baseFontWeights) {
  return Object.fromEntries(
    Object.entries(baseFontWeights).map((entry) => {
      const [key, baseFontWeight] = entry;
      return [key, fontWeights[baseFontWeight]];
    }),
  );
}

function transformedFontFamilies(baseFontFamilies) {
  return Object.fromEntries(
    Object.entries(baseFontFamilies).map((entry) => {
      const [key, baseFontFamily] = entry;
      return [key, fontFamilies[baseFontFamily]];
    }),
  );
}

function transformedLineHeights(baseLineHeights) {
  return Object.fromEntries(
    Object.entries(baseLineHeights).map((entry) => {
      const [key, baseLineHeight] = entry;
      // Because percanteges are really quirky in CSS, convert them to unitless
      const regularLineHeight = parseFloat(baseLineHeight) / 100;
      return [key, regularLineHeight];
    }),
  );
}

// Apply trasformations and remove typography and paragraphSpacing sections
function transformedBaseTokens(tokens) {
  const transformedTokens = {
    ...tokens,
    boxShadow: {
      ...transformedBoxShadows(tokens.boxShadow),
    },
    colors: {
      ...transformedColors(tokens.colors),
    },
    fontFamilies: {
      ...transformedFontFamilies(tokens.fontFamilies),
    },
    fontWeights: {
      ...transformedFontWeights(tokens.fontWeights),
    },
    lineHeights: {
      ...transformedLineHeights(tokens.lineHeights),
    },
  };

  delete transformedTokens.typography;
  delete transformedTokens.paragraphSpacing;

  return transformedTokens;
}

// Create separate export for each token group (like colors, lineHeights, etc.)
function exportForEachTokenGroup(tokens) {
  let exports = '';
  Object.entries(tokens).forEach((entry) => {
    const [key, tokenGroupValues] = entry;
    // Stringify values in a token group
    const stringifiedValues = util.inspect(tokenGroupValues, { depth: null });
    exports += `export const ${key} = ${stringifiedValues};\n`;
  });

  return exports;
}

// To make it more ergonomic create default export
function tokensDefaultExport(tokens) {
  // Comma separated list of exports
  let groupsToExport = '';
  const tokensKeys = Object.keys(tokens);

  tokensKeys.forEach((key, index) => {
    let separator = '';
    if (index < tokensKeys.length - 1) {
      separator = ', ';
    }
    groupsToExport += `${key}${separator}`;
  });

  return `export default { ${groupsToExport} };`;
}

// Content of ES modules, later written to file
// Serves as a base for generating ESM and CJS modules with Babel
function tokensToEsModule(tokens) {
  let moduleContent = exportForEachTokenGroup(tokens);
  moduleContent += tokensDefaultExport(tokens);

  return moduleContent;
}

const newTokens = tokensToEsModule(transformedBaseTokens(baseTokens));

// Assuming lib directory already exists
fs.writeFileSync('./lib/tokens.js', newTokens);

// Exporting utils for unit tests
module.exports = {
  exportForEachTokenGroup,
  tokensDefaultExport,
  tokensToEsModule,
  transformedBaseTokens,
  transformedBoxShadows,
  transformedColors,
  transformedFontFamilies,
  transformedFontWeights,
  transformedLineHeights,
};
