import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { hexToRgbaColor } from '@datacamp/waffles-utils';
import { css } from '@emotion/react';

const placeholderColor = hexToRgbaColor(
  tokens.color.primary.navyText.value.hex,
  0.6,
);

const baseFormStyle = css({
  ':disabled, :active:disabled, :focus:disabled': {
    cursor: 'not-allowed',
    opacity: 0.3,
  },
  ':focus': {
    boxShadow: `inset 0 0 0 2px ${tokens.color.primary.blueDark.value.rgb}`,
    outline: 'none',
  },
  background: 'white',
  border: 0,
  borderRadius: tokens.radii.small.value,
  boxShadow: `inset 0 0 0 2px ${tokens.color.neutral.beige400.value.rgb}`,
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
    color: placeholderColor,
    fontFamily: 'inherit',
  },
  color: tokens.color.primary.navyText.value.rgb,
});

const selectStyle = css(baseFormStyle, {
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

const selectIconSizes: { [key: string]: 'medium' | 'small' } = {
  large: 'medium',
  medium: 'medium',
  small: 'small',
};

const iconSize = {
  large: 16,
  medium: 16,
  small: 14,
};

const arrowIconPosition = {
  large: { right: tokens.size.space[24].value, top: '22px' },
  medium: { right: tokens.size.space[16].value, top: '17px' },
  small: { right: tokens.size.space[12].value, top: '11px' },
};

const requiredStyle = css({
  color: placeholderColor,
  display: 'inline-block',
  fontSize: '14px',
});

export {
  requiredStyle,
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
