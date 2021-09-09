// Transform design tokens to the content of ES module file

const util = require('util');

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
// Serves as a base for generating ESM, and CJS modules with Babel, and TS typings
function tokensToEsModule(tokens) {
  let content = exportForEachTokenGroup(tokens);
  content += tokensDefaultExport(tokens);

  return content;
}

// Exporting utils for unit tests
module.exports = {
  exportForEachTokenGroup,
  tokensDefaultExport,
  tokensToEsModule,
};
