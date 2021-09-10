// Transform design tokens to the content of SCSS variables file

function camelToKebabCase(string) {
  return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}

// For consistency, transform new tokens group names to the ones from legacy SCSS variables file
function legacyTokenGroupName(tokenGroupName) {
  switch (tokenGroupName) {
    case 'fontWeights':
      return 'fontWeight';
    case 'fontFamilies':
      return 'fontFamily';
    case 'fontSizes':
      return 'fontSize';
    case 'lineHeights':
      return 'lineHeight';
    case 'breakpoints':
      return 'bp';
    case 'colors':
      return '';
    default:
      return tokenGroupName;
  }
}

// Sass varaibles, later written to SCSS file
// All namespaced with "dc"
function tokensToSassVariables(tokens) {
  let content = '';

  Object.entries(tokens).forEach((groupEentry) => {
    const [groupName, tokenGroupValues] = groupEentry;
    const legacyName = legacyTokenGroupName(groupName);

    Object.entries(tokenGroupValues).forEach((tokenEntry) => {
      const [tokenName, tokenValue] = tokenEntry;
      content += `$dc-${camelToKebabCase(legacyName)}${
        legacyName && '-'
      }${camelToKebabCase(tokenName)}: ${tokenValue};\n`;
    });
  });

  return content;
}

// Exporting utils for unit tests
module.exports = {
  camelToKebabCase,
  legacyTokenGroupName,
  tokensToSassVariables,
};
