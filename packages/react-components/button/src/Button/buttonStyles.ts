import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css, SerializedStyles } from '@emotion/core';
import _ from 'lodash';
import tinycolor from 'tinycolor2';

interface IntentMap {
  b2b: string;
  danger: string;
  neutral: string;
  success: string;
  warning: string;
}

type Intent = keyof IntentMap;

// CUSTOM TOKENS
const baseColors: IntentMap = {
  b2b: tokens.color.primary.yellow.value.hex,
  danger: tokens.color.primary.red.value.hex,
  neutral: tokens.color.primary.navy.value.hex,
  success: tokens.color.primary.green.value.hex,
  warning: tokens.color.primary.orange.value.hex,
};

const primaryHoverColors: IntentMap = {
  b2b: tokens.color.primary.yellowLight.value.hex,
  danger: tokens.color.primary.redLight.value.hex,
  neutral: tokens.color.primary.navyLight.value.hex,
  success: tokens.color.primary.greenLight.value.hex,
  warning: tokens.color.primary.orangeLight.value.hex,
};

const outlineHoverColors: IntentMap = _.mapValues(baseColors, value =>
  tinycolor(value)
    .setAlpha(0.15)
    .toRgbString(),
);

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
  borderWidth: '2px',
  cursor: 'pointer',
  display: 'inline-flex',
  justifyContent: 'center',
  position: 'relative',
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
  large: { fontSize: '20px', lineHeight: '60px' },
  medium: { fontSize: '16px', lineHeight: '44px' },
  small: { fontSize: '16px', lineHeight: '32px' },
};

const getDefaultStyle = (intent: Intent, enabled: boolean): SerializedStyles =>
  css(
    {
      backgroundColor: 'transparent',
      borderColor: baseColors[intent],
      color: baseColors[intent],
    },
    enabled && {
      ':hover': {
        backgroundColor: outlineHoverColors[intent],
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
        backgroundColor: primaryHoverColors[intent],
        borderColor: primaryHoverColors[intent],
      },
    },
  );

const getInvertedStyle = (intent: Intent, enabled: boolean): SerializedStyles =>
  intent === 'neutral'
    ? css(
        {
          backgroundColor: 'transparent',
          borderColor: 'white',
          color: 'white',
        },
        enabled && {
          ':hover': {
            backgroundColor: tinycolor(tokens.color.primary.white.value.hex)
              .setAlpha(0.15)
              .toRgbString(),
          },
        },
      )
    : getDefaultStyle(intent, enabled);

const appearanceStyleGetterMap = {
  default: getDefaultStyle,
  inverted: getInvertedStyle,
  primary: getPrimaryStyle,
};

const getAppearanceStyle = (
  appearance: 'primary' | 'default' | 'inverted',
  intent: Intent,
  enabled: boolean,
): SerializedStyles => appearanceStyleGetterMap[appearance](intent, enabled);

const getDisabledStyle = (
  appearance: 'primary' | 'default' | 'inverted',
  intent: Intent,
): SerializedStyles =>
  css(
    { borderColor: baseColors[intent], cursor: 'not-allowed', opacity: 0.2 },
    appearance === 'primary' && {
      backgroundColor: baseColors[intent],
      borderColor: baseColors[intent],
    },
    appearance === 'inverted' &&
      intent === 'neutral' && {
        borderColor: 'white',
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
  primaryHoverColors,
};
