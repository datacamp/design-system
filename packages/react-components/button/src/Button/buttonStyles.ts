import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css, SerializedStyles } from '@emotion/core';
import tinycolor from 'tinycolor2';

interface IntentMap {
  cta: string;
  danger: string;
  neutral: string;
  success: string;
  warning: string;
}

type Intent = keyof IntentMap;

// CUSTOM TOKENS
const baseColors: IntentMap = {
  cta: tokens.color.primary.green.value.hex,
  danger: tokens.color.primary.red.value.hex,
  neutral: tokens.color.primary.navy.value.hex,
  success: tokens.color.primary.green.value.hex,
  warning: tokens.color.primary.orange.value.hex,
};

const hoverColors: IntentMap = {
  cta: '#E7B743',
  danger: '#B64242',
  neutral: '#2E8FAB',
  success: '#29A360',
  warning: '#C87400',
};

const getFocusColor = (intent: Intent): string =>
  tinycolor(baseColors[intent])
    .setAlpha(0.2)
    .toRgbString();

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
  borderStyle: 'solid',
  borderWidth: '1px',
  cursor: 'pointer',
  display: 'inline-flex',
  justifyContent: 'center',
  textDecoration: 'none',
  textTransform: 'capitalize',
  transition: '0.15s',
  verticalAlign: 'baseline',
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
    return css({ padding: '0 31px' });
  }
  return css({ padding: '0 15px' });
};

const getIconSize = (size: 'small' | 'medium' | 'large'): SerializedStyles => {
  if (size === 'large') {
    return css({ padding: '19px' });
  }
  if (size === 'small') {
    return css({ padding: '8px' });
  }
  return css({ padding: '14px' });
};

const fontSizes = {
  large: { fontSize: '20px', lineHeight: '62px' },
  medium: { fontSize: '16px', lineHeight: '46px' },
  small: { fontSize: '16px', lineHeight: '34px' },
};

const getDefaultStyle = (intent: Intent, enabled: boolean): SerializedStyles =>
  css(
    {
      ':focus': {
        boxShadow: `0 0 0 4px ${getFocusColor(intent)}}`,
      },
      backgroundColor: 'transparent',
      borderColor: baseColors[intent],
      color: baseColors[intent],
    },
    enabled && {
      ':hover': {
        borderColor: hoverColors[intent],
        color: hoverColors[intent],
      },
    },
  );

const getPrimaryStyle = (intent: Intent, enabled: boolean): SerializedStyles =>
  css(
    getDefaultStyle(intent, enabled),
    {
      backgroundColor: baseColors[intent],
    },
    enabled && {
      ':hover': {
        backgroundColor: hoverColors[intent],
        borderColor: hoverColors[intent],
      },
    },
  );

const getAppearanceStyle = (
  appearance: 'primary' | 'default',
  intent: Intent,
  enabled: boolean,
): SerializedStyles =>
  appearance === 'primary'
    ? getPrimaryStyle(intent, enabled)
    : getDefaultStyle(intent, enabled);

const getDisabledStyle = (
  appearance: 'primary' | 'default',
  intent: Intent,
): SerializedStyles =>
  css(
    { borderColor: baseColors[intent], cursor: 'not-allowed', opacity: 0.2 },
    appearance === 'primary' && {
      backgroundColor: baseColors[intent],
      borderColor: baseColors[intent],
    },
  );

export {
  baseColors,
  baseLoadingStyle,
  baseStyle,
  fontSizes,
  getAppearanceStyle,
  getDisabledStyle,
  getIconSize,
  getSize,
  hoverColors,
};
