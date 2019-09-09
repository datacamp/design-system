import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css, SerializedStyles } from '@emotion/core';

interface IntentMap {
  danger: string;
  neutral: string;
  success: string;
  warning: string;
}

type Intent = keyof IntentMap;

// CUSTOM TOKENS
const baseColors: IntentMap = {
  danger: tokens.color.opaque.red.value.hex,
  neutral: tokens.color.opaque.primary.value.hex,
  success: tokens.color.opaque.green.value.hex,
  warning: tokens.color.opaque.orange.value.hex,
};

const hoverColors: IntentMap = {
  danger: '#B64242',
  neutral: '#2E8FAB',
  success: '#29A360',
  warning: '#C87400',
};

const disabledColors: IntentMap = {
  danger: '#FEDEDE',
  neutral: '#DCECF1',
  success: '#E7F2EC',
  warning: '#FFEED5',
};

const getOutline = (intent: Intent): string =>
  `inset 0 0 0 1px ${baseColors[intent]}`;

// BASE STYLES
const baseStyle = css({
  ':active': { transform: 'perspective(1px) scale(0.975)' },
  ':disabled, :hover:disabled, :active:disabled': {
    transform: 'none',
  },
  ':focus': { outline: '0' },
  alignItems: 'center',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  display: 'inline-flex',
  justifyContent: 'center',
  textDecoration: 'none',
  textTransform: 'capitalize',
  transition: '0.15s',
  whiteSpace: 'nowrap',
});

const baseLoadingStyle = css({
  ':active': { transform: 'none' },
  ':focus, :hover:focus, :hover': {
    cursor: 'wait',
  },
  position: 'relative',
});

const getSize = (size: 'small' | 'medium' | 'large'): SerializedStyles => {
  if (size === 'large') {
    return css({ padding: '0 32px' });
  }
  return css({ padding: '0 16px' });
};

const getIconSize = (size: 'small' | 'medium' | 'large'): SerializedStyles => {
  if (size === 'large') {
    return css({ padding: ' 20px 21px' });
  }
  if (size === 'small') {
    return css({ padding: ' 9px 10px' });
  }
  return css({ padding: '15px 16px' });
};

const fontSizes = {
  large: { fontSize: '20px', lineHeight: '64px' },
  medium: { fontSize: '16px', lineHeight: '48px' },
  small: { fontSize: '16px', lineHeight: '36px' },
};

const getPrimaryStyle = (intent: Intent, enabled: boolean): SerializedStyles =>
  css(
    {
      ':focus': { boxShadow: `0 0 0 4px ${disabledColors[intent]}` },
      backgroundColor: baseColors[intent],
    },
    enabled && { ':hover': { backgroundColor: hoverColors[intent] } }
  );

const getDefaultStyle = (intent: Intent, enabled: boolean): SerializedStyles =>
  css(
    {
      ':disabled,  :hover:disabled, :active:disabled': {
        transform: 'none',
      },
      ':focus': {
        boxShadow: `0 0 0 4px ${disabledColors[intent]}, ${getOutline(intent)}`,
      },
      backgroundColor: 'white',
      boxShadow: getOutline(intent),
    },
    enabled && {
      ':hover': { boxShadow: `inset 0 0 0 1px ${hoverColors[intent]}` },
      ':hover:focus': {
        boxShadow: `0 0 0 4px ${disabledColors[intent]}, inset 0 0 0 1px ${hoverColors[intent]}`,
      },
    }
  );

const getAppearanceStyle = (
  appearance: 'primary' | 'default',
  intent: Intent,
  enabled: boolean
): SerializedStyles =>
  appearance === 'primary'
    ? getPrimaryStyle(intent, enabled)
    : getDefaultStyle(intent, enabled);

const getDisabledStyle = (
  appearance: 'primary' | 'default',
  intent: Intent
): SerializedStyles =>
  css(
    { cursor: 'not-allowed' },
    appearance === 'primary'
      ? { backgroundColor: disabledColors[intent] }
      : { boxShadow: `inset 0 0 0 1px ${disabledColors[intent]}` }
  );

export {
  baseColors,
  baseLoadingStyle,
  baseStyle,
  disabledColors,
  fontSizes,
  getAppearanceStyle,
  getDisabledStyle,
  getIconSize,
  getSize,
};
