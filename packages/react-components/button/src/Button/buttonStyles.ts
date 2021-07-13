import tokens from '@datacamp/waffles-tokens';
import { hexToRgbaColor } from '@datacamp/waffles-utils';
import { css, SerializedStyles } from '@emotion/react';

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
  b2b: tokens.colors.yellow,
  danger: tokens.colors.red,
  neutral: tokens.colors.navy,
  success: tokens.colors.green,
  warning: tokens.colors.orange,
};

const primaryHoverColors: IntentMap = {
  b2b: tokens.colors.yellowLight,
  danger: tokens.colors.redLight,
  neutral: tokens.colors.navyLight,
  success: tokens.colors.greenLight,
  warning: tokens.colors.orangeLight,
};

const outlineHoverColors = (Object.keys(baseColors) as Array<
  keyof typeof baseColors
>).reduce((hoverColors, intent) => {
  const value = baseColors[intent];
  return {
    ...hoverColors,
    [intent]: hexToRgbaColor(value, 0.15),
  };
}, {} as IntentMap);

// BASE STYLES
const baseStyle = css({
  ':active': { transform: 'perspective(1px) scale(0.975)' },
  ':disabled, :hover:disabled, :active:disabled': {
    transform: 'none',
  },
  ':focus': { outline: '0' },
  alignItems: 'center',
  border: 0,
  borderRadius: tokens.borderRadius.medium,
  borderStyle: 'solid',
  borderWidth: tokens.borderWidth.medium,
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
  large: { fontSize: tokens.fontSizes.xxlarge, lineHeight: '60px' },
  medium: { fontSize: tokens.fontSizes.medium, lineHeight: '44px' },
  small: { fontSize: tokens.fontSizes.medium, lineHeight: '32px' },
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
        // The following are necessary to override specific css hover styles for anchors
        borderColor: baseColors[intent],
        color: baseColors[intent],
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
            backgroundColor: hexToRgbaColor(tokens.colors.white, 0.15),
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
