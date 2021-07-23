const {
  exportForEachTokenGroup,
  tokensDefaultExport,
  tokensToEsModule,
  transformedBaseTokens,
  transformedBoxShadows,
  transformedColors,
  transformedFontFamilies,
  transformedFontWeights,
  transformedLineHeights,
} = require('../buildNewTokens');
const baseTokens = require('../base-tokens.json');

const testTokens = {
  boxShadow: {
    medium: {
      value: {
        blur: '4px',
        color: 'rgba(5, 25, 45, 0.3)',
        spread: '-1px',
        x: '0px',
        y: '1px',
      },
    },
    thin: {
      value: {
        blur: '2px',
        color: 'rgba(5, 25, 45, 0.3)',
        spread: '0px',
        x: '0px',
        y: '0px',
      },
    },
  },
  colors: {
    accent: {
      redLight: '#FF782D',
    },
    neutral: {
      grey: '#E8E8EA',
      white: '#FFFFFF',
    },
    primary: {
      green: '#03EF62',
      navy: '#05192D',
    },
  },
  fontFamilies: {
    mono: 'JetBrains Mono NL',
    sansSerif: 'Studio Feixen Sans',
  },
  fontWeights: {
    bold: 'Bold',
    regular: 'Regular',
  },
  lineHeights: {
    relaxed: '150%',
    tight: '100%',
  },
  spacing: {
    large: '24px',
    medium: '16px',
    small: '8px',
  },
};

const transformedTestTokens = {
  boxShadow: {
    medium: '0px 1px 4px -1px rgba(5, 25, 45, 0.3)',
    thin: '0px 0px 2px 0px rgba(5, 25, 45, 0.3)',
  },
  colors: {
    green: '#03EF62',
    grey: '#E8E8EA',
    navy: '#05192D',
    redLight: '#FF782D',
    white: '#FFFFFF',
  },
  fontFamilies: {
    mono: "JetBrainsMonoNL, Menlo, Monaco, 'Courier New', monospace",
    sansSerif: 'Studio-Feixen-Sans, Arial, sans-serif',
  },
  fontWeights: {
    bold: 800,
    regular: 400,
  },
  lineHeights: {
    relaxed: 1.5,
    tight: 1,
  },
  spacing: {
    large: '24px',
    medium: '16px',
    small: '8px',
  },
};

describe('new tokens', () => {
  it('transformedColors() flattens grouped colors', () => {
    expect(transformedColors(testTokens.colors)).toEqual(
      transformedTestTokens.colors,
    );
  });

  it('transformedBoxShadows() transfroms box shadow from Figma Plugin format to CSS values', () => {
    expect(transformedBoxShadows(testTokens.boxShadow)).toEqual(
      transformedTestTokens.boxShadow,
    );
  });

  it('transformedFontFamilies() transfroms font families from Figma Plugin format to CSS values', () => {
    expect(transformedFontFamilies(testTokens.fontFamilies)).toEqual(
      transformedTestTokens.fontFamilies,
    );
  });

  it('transformedFontWeights() transfroms font weights from Figma Plugin format to CSS values', () => {
    expect(transformedFontWeights(testTokens.fontWeights)).toEqual(
      transformedTestTokens.fontWeights,
    );
  });

  it('transformedLineHeights() transfroms line heights from percanteges to unitless', () => {
    expect(transformedLineHeights(testTokens.lineHeights)).toEqual(
      transformedTestTokens.lineHeights,
    );
  });

  it('transformedBaseTokens() replaces boxShadow group with transformed one', () => {
    expect(transformedBaseTokens(testTokens)).toEqual(transformedTestTokens);
  });

  it('exportForEachTokenGroup() creates ES module export for each token group', () => {
    const expectedContent = `export const boxShadow = {
  medium: '0px 1px 4px -1px rgba(5, 25, 45, 0.3)',
  thin: '0px 0px 2px 0px rgba(5, 25, 45, 0.3)'
};
export const colors = {
  green: '#03EF62',
  grey: '#E8E8EA',
  navy: '#05192D',
  redLight: '#FF782D',
  white: '#FFFFFF'
};
export const fontFamilies = {
  mono: "JetBrainsMonoNL, Menlo, Monaco, 'Courier New', monospace",
  sansSerif: 'Studio-Feixen-Sans, Arial, sans-serif'
};
export const fontWeights = { bold: 800, regular: 400 };
export const lineHeights = { relaxed: 1.5, tight: 1 };
export const spacing = { large: '24px', medium: '16px', small: '8px' };
`;

    expect(exportForEachTokenGroup(transformedTestTokens)).toEqual(
      expectedContent,
    );
  });

  it('tokensDefaultExport() creates ES module default export', () => {
    const expectedContent = `export default { boxShadow, colors, fontFamilies, fontWeights, lineHeights, spacing };`;
    expect(tokensDefaultExport(transformedTestTokens)).toEqual(expectedContent);
  });

  it('tokensToEsModule() creates ES module content', () => {
    const expectedContent = `export const boxShadow = {
  medium: '0px 1px 4px -1px rgba(5, 25, 45, 0.3)',
  thin: '0px 0px 2px 0px rgba(5, 25, 45, 0.3)'
};
export const colors = {
  green: '#03EF62',
  grey: '#E8E8EA',
  navy: '#05192D',
  redLight: '#FF782D',
  white: '#FFFFFF'
};
export const fontFamilies = {
  mono: "JetBrainsMonoNL, Menlo, Monaco, 'Courier New', monospace",
  sansSerif: 'Studio-Feixen-Sans, Arial, sans-serif'
};
export const fontWeights = { bold: 800, regular: 400 };
export const lineHeights = { relaxed: 1.5, tight: 1 };
export const spacing = { large: '24px', medium: '16px', small: '8px' };
export default { boxShadow, colors, fontFamilies, fontWeights, lineHeights, spacing };`;

    expect(tokensToEsModule(transformedTestTokens)).toEqual(expectedContent);
  });

  it('base tokens are properly transformed', () => {
    const newTokens = tokensToEsModule(transformedBaseTokens(baseTokens));
    expect(newTokens).toMatchSnapshot();
  });
});
