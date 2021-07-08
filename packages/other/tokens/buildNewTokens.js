// Generate new design tokens JS file based on JSON file with Figma Tokens definitions
// It will be used to generate both ESM and CJS modules, and TS typings

const fs = require('fs');
const util = require('util');

const baseTokens = require('./base-tokens.json');

// Transform boxShadow tokens group expected by Figma Tokens to CSS values
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

// Replace boxShadow tokens group with transformed ones
function transformedBaseTokens(tokens) {
  return {
    ...baseTokens,
    boxShadow: {
      ...transformedBoxShadows(tokens.boxShadow),
    },
  };
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

fs.rmdirSync('./build', { recursive: true });
fs.mkdirSync('./build');
fs.writeFileSync(
  './lib/tokens.js',
  tokensToEsModule(transformedBaseTokens(baseTokens)),
);
