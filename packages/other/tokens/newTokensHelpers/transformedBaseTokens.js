// Transform Figma Tokens design tokens to CSS compatible values
// fontWeights, fontFamilies, and boxShadow have non-standard values and are converted
// typography and paragraphSpacing are removed
// colors are flattened

// Mappigns between Figma Tokens values and CSS couterparts

const fontWeights = {
  Bold: 800,
  Regular: 400,
};

const fontFamilies = {
  'JetBrains Mono NL':
    "JetBrainsMonoNL, Menlo, Monaco, 'Courier New', monospace",
  'Studio Feixen Sans': 'Studio-Feixen-Sans, Arial, sans-serif',
};

// Transformations for colors, boxShadow, fontWeights, fontFamilies, lineHeights, and opacity

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

function transformedPercentages(basePercentages) {
  return Object.fromEntries(
    Object.entries(basePercentages).map((entry) => {
      const [key, basePercantege] = entry;
      // Convert percentages to unitless
      // Useful for line heights and opacity
      const unitless = parseFloat(basePercantege) / 100;
      return [key, unitless];
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
      ...transformedPercentages(tokens.lineHeights),
    },
    opacity: {
      ...transformedPercentages(tokens.opacity),
    },
  };

  delete transformedTokens.typography;
  delete transformedTokens.paragraphSpacing;

  return transformedTokens;
}

// Exporting utils for unit tests
module.exports = {
  transformedBaseTokens,
  transformedBoxShadows,
  transformedColors,
  transformedFontWeights,
  transformedPercentages,
};
