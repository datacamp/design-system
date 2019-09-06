import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css, SerializedStyles } from '@emotion/core';

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

  color: tokens.color.opaque.grey.value.rgb,
  display: 'inline-block',
  fontFamily: 'Lato',
  margin: 0,
  padding: ' 0 14px',
  verticalAlign: 'middle',
  whiteSpace: 'normal',
});

const getSize = (size: 'small' | 'medium' | 'large'): SerializedStyles => {
  if (size === 'large') {
    return css({ fontSize: 20, height: 64 });
  }
  if (size === 'small') {
    return css({ fontSize: 16, height: 36 });
  }
  return css({ fontSize: 16, height: 48 });
};

export { getSize, inputStyle };
