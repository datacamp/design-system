const {
  exportForEachTokenGroup,
  tokensDefaultExport,
  tokensToEsModule,
  transformedBaseTokens,
  transformedBoxShadows,
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
    black: '#000',
    red: '#FF0000',
    white: '#FFF',
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
    black: '#000',
    red: '#FF0000',
    white: '#FFF',
  },
  spacing: {
    large: '24px',
    medium: '16px',
    small: '8px',
  },
};

describe('new tokens', () => {
  it('transformedBoxShadows() transfroms box shadow from Figma Plugin format to CSS value', () => {
    expect(transformedBoxShadows(testTokens.boxShadow)).toEqual(
      transformedTestTokens.boxShadow,
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
export const colors = { black: '#000', red: '#FF0000', white: '#FFF' };
export const spacing = { large: '24px', medium: '16px', small: '8px' };
`;

    expect(exportForEachTokenGroup(transformedTestTokens)).toEqual(
      expectedContent,
    );
  });

  it('tokensDefaultExport() creates ES module default export', () => {
    const expectedContent = `export default { boxShadow, colors, spacing };`;
    expect(tokensDefaultExport(transformedTestTokens)).toEqual(expectedContent);
  });

  it('tokensToEsModule() creates ES module content', () => {
    const expectedContent = `export const boxShadow = {
  medium: '0px 1px 4px -1px rgba(5, 25, 45, 0.3)',
  thin: '0px 0px 2px 0px rgba(5, 25, 45, 0.3)'
};
export const colors = { black: '#000', red: '#FF0000', white: '#FFF' };
export const spacing = { large: '24px', medium: '16px', small: '8px' };
export default { boxShadow, colors, spacing };`;
    expect(tokensToEsModule(transformedTestTokens)).toEqual(expectedContent);
  });

  it('base tokens are properly transformed', () => {
    const newTokens = tokensToEsModule(transformedBaseTokens(baseTokens));
    expect(newTokens).toMatchSnapshot();
  });
});
