import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';

const baseFormStyle = css({
  ':disabled, :active:disabled, :focus:disabled': {
    cursor: 'not-allowed',
  },
  ':focus': {
    boxShadow: `inset 0 0 0 1px ${tokens.color.primary.green.value.rgb}`,
    outline: 'none',
  },
  background: 'white',
  border: 0,
  borderRadius: tokens.radii.small.value,
  boxShadow: `inset 0 0 0 1px ${tokens.color.neutral.grey200.value.rgb}`,
  boxSizing: 'border-box',
  display: 'inline-block',
  fontFamily: [
    tokens.asset.font.sansSerif.attributes.fallback,
    tokens.asset.font.sansSerif.value,
  ],
  margin: 0,
  verticalAlign: 'baseline',
  WebkitAppearance: 'none',
});

const inputStyle = css(baseFormStyle, {
  '::placeholder': {
    color: tokens.color.primary.navyText.value.rgb,
    fontFamily: 'inherit',
  },
  ':disabled::placeholder': { color: '#D1D3D8' },
  color: tokens.color.neutral.grey200.value.rgb,
});

const selectStyle = css(baseFormStyle, {
  ':disabled, :active:disabled, :focus:disabled, :hover:disabled': {
    boxShadow: `inset 0 0 0 1px ${tokens.color.neutral.grey200.value.rgb}`,
  },
  appearance: 'none',
  MozAppearance: 'none',
  WebkitAppearance: 'none',
  width: '100%',
  zIndex: 1,
});

const fontSizes = {
  large: 20,
  medium: 16,
  small: 16,
};

const heights = {
  large: tokens.size.space[64].value,
  medium: tokens.size.space[48].value,
  small: tokens.size.space[36].value,
};

const inputPaddings = {
  large: {
    paddingLeft: tokens.size.space[24].value,
    paddingRight: tokens.size.space[24].value,
  },
  medium: {
    paddingLeft: tokens.size.space[16].value,
    paddingRight: tokens.size.space[16].value,
  },
  small: {
    paddingLeft: tokens.size.space[12].value,
    paddingRight: tokens.size.space[12].value,
  },
};

const selectPaddings = {
  large: {
    paddingLeft: `${tokens.size.space[24].value}px`,
    paddingRight: `${tokens.size.space[64].value}px`,
  },
  medium: {
    paddingLeft: `${tokens.size.space[16].value}px`,
    paddingRight: `${tokens.size.space[48].value}px  `,
  },
  small: {
    paddingLeft: `${tokens.size.space[12].value}px`,
    paddingRight: `${tokens.size.space[36].value}px  `,
  },
};

const inputWithIconPaddings = {
  large: { padding: `0 ${tokens.size.space[48].value}px` },
  medium: { padding: `0 ${tokens.size.space[36].value}px` },
  small: { padding: `0 ${tokens.size.space[36].value}px` },
};

const selectIconSizes: { [key: string]: 18 | 24 } = {
  large: 24,
  medium: 18,
  small: 18,
};

const iconSize = {
  large: 24,
  medium: 18,
  small: 12,
};

const arrowIconPosition = {
  large: { right: tokens.size.space[24].value, top: '20px' },
  medium: { right: tokens.size.space[16].value, top: '15px' },
  small: { right: tokens.size.space[12].value, top: '9px' },
};

export {
  arrowIconPosition,
  heights,
  fontSizes,
  inputPaddings,
  inputStyle,
  iconSize,
  inputWithIconPaddings,
  selectIconSizes,
  selectPaddings,
  selectStyle,
};
