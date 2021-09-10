const {
  transformedBaseTokens,
  transformedBoxShadows,
  transformedColors,
  transformedFontFamilies,
  transformedFontWeights,
  transformedPercentages,
} = require('../newTokensHelpers/transformedBaseTokens');
const {
  exportForEachTokenGroup,
  tokensDefaultExport,
  tokensToEsModule,
} = require('../newTokensHelpers/tokensToEsModule');
const {
  camelToKebabCase,
  legacyTokenGroupName,
  tokensToSassVariables,
} = require('../newTokensHelpers/tokensToSassVariables');

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
  opacity: {
    high: '60%',
    low: '15%',
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
  opacity: {
    high: 0.6,
    low: 0.15,
  },
  spacing: {
    large: '24px',
    medium: '16px',
    small: '8px',
  },
};

describe('newTokensHelpers', () => {
  describe('transformedBaseTokens', () => {
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

    it('transformedPercentages() transfroms line heights and opacity from percanteges to unitless', () => {
      expect(transformedPercentages(testTokens.lineHeights)).toEqual(
        transformedTestTokens.lineHeights,
      );
      expect(transformedPercentages(testTokens.opacity)).toEqual(
        transformedTestTokens.opacity,
      );
    });

    it('transformedBaseTokens() updates original values to transformed ones', () => {
      expect(transformedBaseTokens(testTokens)).toEqual(transformedTestTokens);
    });
  });

  describe('tokensToEsModule', () => {
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
export const opacity = { high: 0.6, low: 0.15 };
export const spacing = { large: '24px', medium: '16px', small: '8px' };
`;

      expect(exportForEachTokenGroup(transformedTestTokens)).toEqual(
        expectedContent,
      );
    });

    it('tokensDefaultExport() creates ES module default export', () => {
      const expectedContent = `export default { boxShadow, colors, fontFamilies, fontWeights, lineHeights, opacity, spacing };`;
      expect(tokensDefaultExport(transformedTestTokens)).toEqual(
        expectedContent,
      );
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
export const opacity = { high: 0.6, low: 0.15 };
export const spacing = { large: '24px', medium: '16px', small: '8px' };
export default { boxShadow, colors, fontFamilies, fontWeights, lineHeights, opacity, spacing };`;

      expect(tokensToEsModule(transformedTestTokens)).toEqual(expectedContent);
    });
  });

  describe('tokensToSassVariables', () => {
    it('camelToKebabCase() transforms camel case string to kebab case one', () => {
      expect(camelToKebabCase('quiteLongCamelCaseName')).toBe(
        'quite-long-camel-case-name',
      );
      expect(camelToKebabCase('name')).toBe('name');
    });

    it('legacyTokenGroupName() transform new design tokens group name to the legacy one', () => {
      expect(legacyTokenGroupName('fontWeights')).toBe('fontWeight');
      expect(legacyTokenGroupName('fontFamilies')).toBe('fontFamily');
      expect(legacyTokenGroupName('fontFamilies')).toBe('fontFamily');
      expect(legacyTokenGroupName('breakpoints')).toBe('bp');
      expect(legacyTokenGroupName('sizing')).toBe('sizing');
    });

    it('legacyTokenGroupName() transforms "colors" group name to empty string', () => {
      expect(legacyTokenGroupName('colors')).toBe('');
    });

    it('tokensToSassVariables() generates content of SCSS file based on provided design tokens', () => {
      expect(tokensToSassVariables(transformedTestTokens))
        .toEqual(`$dc-box-shadow-medium: 0px 1px 4px -1px rgba(5, 25, 45, 0.3);
$dc-box-shadow-thin: 0px 0px 2px 0px rgba(5, 25, 45, 0.3);
$dc-green: #03EF62;
$dc-grey: #E8E8EA;
$dc-navy: #05192D;
$dc-red-light: #FF782D;
$dc-white: #FFFFFF;
$dc-font-family-mono: JetBrainsMonoNL, Menlo, Monaco, 'Courier New', monospace;
$dc-font-family-sans-serif: Studio-Feixen-Sans, Arial, sans-serif;
$dc-font-weight-bold: 800;
$dc-font-weight-regular: 400;
$dc-line-height-relaxed: 1.5;
$dc-line-height-tight: 1;
$dc-opacity-high: 0.6;
$dc-opacity-low: 0.15;
$dc-spacing-large: 24px;
$dc-spacing-medium: 16px;
$dc-spacing-small: 8px;
`);
    });
  });

  it('base tokens are properly transformed', () => {
    const newTokens = tokensToEsModule(transformedBaseTokens(baseTokens));
    expect(newTokens).toMatchSnapshot();
  });
});
