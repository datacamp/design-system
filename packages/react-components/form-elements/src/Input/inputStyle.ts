import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';

const inputStyle = css({
  '::placeholder': {
    color: tokens.color.opaque.greyOslo.value.rgb,
    fontFamily: 'inherit',
  },

  ':disabled, :active:disabled, :focus:disabled': {
    cursor: 'not-allowed',
  },
  ':disabled::placeholder': { color: '#D1D3D8' },

  ':focus': {
    boxShadow: `inset 0 0 0 1px ${tokens.color.opaque.primary.value.rgb}`,
    outline: 'none',
  },
  background: 'white',
  border: 0,
  borderRadius: tokens.radii.small.value,
  boxShadow: `inset 0 0 0 1px ${tokens.color.opaque.greyLight.value.rgb}`,
  boxSizing: 'border-box',
  color: tokens.color.opaque.grey.value.rgb,
  display: 'inline-block',
  fontFamily: [
    tokens.asset.font.sansSerif.attributes.fallback,
    tokens.asset.font.sansSerif.value,
  ],
  margin: 0,
  padding: `${tokens.size.space[8].value}px ${tokens.size.space[16].value}px`,
  verticalAlign: 'baseline',
});

const inputSizes = {
  large: {
    fontSize: 20,
    height: 64,
    padding: `0 ${tokens.size.space[24].value}  `,
  },
  medium: {
    fontSize: 16,
    height: 48,
    padding: `0 ${tokens.size.space[16].value}  `,
  },
  small: {
    fontSize: 16,
    height: 36,
    padding: `0 ${tokens.size.space[12].value}  `,
  },
};

export { inputSizes, inputStyle };
