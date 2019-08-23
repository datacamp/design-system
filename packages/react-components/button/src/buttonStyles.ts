import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css, SerializedStyles } from '@emotion/core';

// CUSTOM TOKENS
const defaultFocusShadow = '0 0 0 4px #DCECF1';
const defaultOutline = 'inset 0 0 0 1px #33AACC';
const defaultOutlineHoverBorder = 'inset 0 0 0 1px #2E8FAB';
const dangerOutlineHoverBorder = 'inset 0 0 0 1px  #B64242';
const dangerFocusShadow = '0 0 0 4px #FEDEDE';
const dangerOutline = 'inset 0 0 0 1px #FE5C5C';
const warningFocusShadow = '0 0 0 4px #FFEED5';
const warningOutline = 'inset 0 0 0 1px #FF9400';
const warningOutlineHoverBorder = 'inset 0 0 0 1px #C87400';
const successFocusShadow = '0 0 0 4px #E7F2EC';
const successOutline = 'inset 0 0 0 1px #36D57D';
const successOutlineHoverBorder = 'inset 0 0 0 1px #29A360';
// BASE STYLES
const baseStyle = css({
  ':active': { transform: 'perspective(1px) scale(0.975)' },
  ':focus': { outline: '0' },
  ':hover': { cursor: 'pointer' },
  border: 'none',
  borderRadius: '4px',
  fontFamily: 'Lato',
  fontWeight: 'bold',
  padding: ' 16px',
  textTransform: 'capitalize',
  transition: '0.15s',
});

const baseOutlineStyle = css({
  backgroundColor: 'white',
});

// PRIMARY STYLES
const defaultStyle = css({
  ':disabled, :hover:disabled, :active:disabled': {
    backgroundColor: ' #DCECF1',
    cursor: 'not-allowed',
    transform: 'none',
  },
  ':focus': { boxShadow: ' 0 0 0 4px #DCECF1' },
  ':hover': { backgroundColor: '#2E8FAB', boxShadow: ' 0 0 0 4px #DCECF1' },
  backgroundColor: tokens.color.opaque.primary.value.rgb,
});

const dangerStyle = css({
  ':disabled, :hover:disabled, :active:disabled': {
    backgroundColor: ' #FEDEDE',
    cursor: 'not-allowed',
    transform: 'none',
  },
  ':focus': { boxShadow: dangerFocusShadow },
  ':hover': {
    backgroundColor: ' #B64242',
  },
  backgroundColor: tokens.color.opaque.red.value.rgb,
});

const successStyle = css({
  ':disabled, :hover:disabled, :active:disabled': {
    backgroundColor: '#E7F2EC',
    cursor: 'not-allowed',
    transform: 'none',
  },
  ':focus': { boxShadow: '0 0 0 4px #E7F2EC' },
  ':hover': {
    backgroundColor: '#29A360',
  },

  backgroundColor: tokens.color.opaque.green.value.rgb,
});

const warningStyle = css({
  ':disabled, :hover:disabled, :active:disabled': {
    backgroundColor: '#FFEED5',
    cursor: 'not-allowed',
    transform: 'none',
  },
  ':focus': { boxShadow: warningFocusShadow },
  ':hover': {
    backgroundColor: ' #C87400',
  },
  backgroundColor: tokens.color.opaque.orange.value.rgb,
});

// DEFAULT (OUTLINE) STYLES
const defaultOutlineStyle = css(baseOutlineStyle, {
  ':disabled, :hover:disabled, :active:disabled': {
    boxShadow: 'inset 0 0 0 1px #DCECF1',
    cursor: 'not-allowed',
    transform: 'none',
  },
  ':focus': { boxShadow: `${defaultFocusShadow}, ${defaultOutline}` },
  ':hover': { boxShadow: defaultOutlineHoverBorder },
  ':hover:focus': {
    boxShadow: `${defaultFocusShadow}, ${defaultOutlineHoverBorder}`,
  },
  boxShadow: defaultOutline,
});

const dangerOutlineStyle = css(baseOutlineStyle, {
  ':disabled,  :hover:disabled, :active:disabled': {
    boxShadow: 'inset 0 0 0 1px #FEDEDE',
    cursor: 'not-allowed',
    transform: 'none',
  },
  ':focus': { boxShadow: `${dangerFocusShadow}, ${dangerOutline}` },
  ':hover': { boxShadow: dangerOutlineHoverBorder },
  ':hover:focus': {
    boxShadow: `${dangerFocusShadow}, ${dangerOutlineHoverBorder}`,
  },
  boxShadow: dangerOutline,
});

const warningOutlineStyle = css(baseOutlineStyle, {
  ':disabled,  :hover:disabled, :active:disabled': {
    boxShadow: 'inset 0 0 0 1px #FFEED5',
    cursor: 'not-allowed',
    transform: 'none',
  },
  ':focus': { boxShadow: `${warningFocusShadow}, ${warningOutline}` },
  ':hover': { boxShadow: warningOutlineHoverBorder },
  ':hover:focus': {
    boxShadow: `${warningFocusShadow}, ${warningOutlineHoverBorder}`,
  },
  boxShadow: warningOutline,
});

const successOutlineStyle = css(baseOutlineStyle, {
  ':disabled,  :hover:disabled, :active:disabled': {
    boxShadow: 'inset 0 0 0 1px #E7F2EC',
    cursor: 'not-allowed',
    transform: 'none',
  },
  ':focus': { boxShadow: `${successFocusShadow}, ${successOutline}` },
  ':hover': { boxShadow: successOutlineHoverBorder },
  ':hover:focus': {
    boxShadow: `${successFocusShadow}, ${successOutlineHoverBorder}`,
  },
  boxShadow: successOutline,
});

// FONT SIZES
const fontSizeDefault = css({ fontSize: '16px', lineHeight: '48px' });

const fontSizeSmall = css({ fontSize: '16px', lineHeight: '36px' });

const fontSizeLarge = css({ fontSize: '20px', lineHeight: '64px' });

// FUNCTIONS TO DEFINE STYLE

const getSize = (size: 'small' | 'medium' | 'large'): SerializedStyles => {
  if (size === 'large') {
    return css({ padding: '0 32px' });
  }
  return css({ padding: '0 16px' });
};

const getPrimaryStyle = (
  intent?: 'danger' | 'warning' | 'success' | 'neutral'
): SerializedStyles => {
  if (intent === 'danger') {
    return dangerStyle;
  }
  if (intent === 'warning') {
    return warningStyle;
  }
  if (intent === 'success') {
    return successStyle;
  }

  return defaultStyle;
};

const getOutlineStyle = (
  intent?: 'danger' | 'warning' | 'success' | 'neutral'
): SerializedStyles => {
  if (intent === 'danger') {
    return dangerOutlineStyle;
  }
  if (intent === 'warning') {
    return warningOutlineStyle;
  }
  if (intent === 'success') {
    return successOutlineStyle;
  }
  return defaultOutlineStyle;
};

const getFontSize = (size?: 'small' | 'medium' | 'large'): SerializedStyles => {
  if (size === 'large') {
    return fontSizeLarge;
  }
  if (size === 'small') {
    return fontSizeSmall;
  }
  return fontSizeDefault;
};

export { baseStyle, getFontSize, getOutlineStyle, getPrimaryStyle, getSize };
