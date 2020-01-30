import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';

const baseFormStyle = css({
  ':disabled, :active:disabled, :focus:disabled': {
    cursor: 'not-allowed',
  },
  ':focus': {
    boxShadow: `inset 0 0 0 1px ${tokens.color.opaque.primary.value.rgb}`,
    outline: 'none',
  },
  WebkitAppearance: 'none',
  background: 'white',
  border: 0,
  borderRadius: tokens.radii.small.value,
  boxShadow: `inset 0 0 0 1px ${tokens.color.opaque.greyLight.value.rgb}`,
  boxSizing: 'border-box',
  display: 'inline-block',
  fontFamily: [
    tokens.asset.font.sansSerif.attributes.fallback,
    tokens.asset.font.sansSerif.value,
  ],
  margin: 0,
  verticalAlign: 'baseline',
});

const inputStyle = css(baseFormStyle, {
  '::placeholder': {
    color: tokens.color.opaque.greyOslo.value.rgb,
    fontFamily: 'inherit',
  },
  ':disabled::placeholder': { color: '#D1D3D8' },
  color: tokens.color.opaque.greyDark.value.rgb,
});

const selectStyle = css(baseFormStyle, {
  ':disabled, :active:disabled, :focus:disabled, :hover:disabled': {
    boxShadow: `inset 0 0 0 1px ${tokens.color.opaque.greyLight.value.rgb}`,
  },
  MozAppearance: 'none',
  WebkitAppearance: 'none',
  appearance: 'none',
  width: '100%',
  zIndex: 1,
});

const baseFormSizes = {
  large: {
    fontSize: 20,
    height: tokens.size.space[64].value,
  },
  medium: {
    fontSize: 16,
    height: tokens.size.space[48].value,
  },
  small: {
    fontSize: 16,
    height: tokens.size.space[36].value,
  },
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
  baseFormSizes,
  inputPaddings,
  inputStyle,
  iconSize,
  inputWithIconPaddings,
  selectIconSizes,
  selectPaddings,
  selectStyle,
};
