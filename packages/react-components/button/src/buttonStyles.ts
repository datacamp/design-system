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
  alignItems: 'center',
  border: 'none',
  borderRadius: '4px',
  display: 'inline-block',
  fontFamily: 'Lato',
  fontWeight: 'bold',
  justifyContent: 'center',
  textDecoration: 'none',
  textTransform: 'capitalize',
  transition: '0.15s',
  whiteSpace: 'nowrap',
});

const baseOutlineStyle = css({
  backgroundColor: 'white',
});

const baseLoadingStyle = css({
  ':active': { transform: 'none' },
  ':focus, :hover:focus, : hover': {
    cursor: 'wait',
  },
  backgroundColor: 'white',
  display: 'inline-flex',
  padding: '0 16px',
  position: 'relative',
});

// PRIMARY STYLES
const defaultStyle = css({
  ':disabled, :hover:disabled, :active:disabled': {
    backgroundColor: ' #DCECF1',
    cursor: 'not-allowed',
    transform: 'none',
  },
  ':focus': { boxShadow: ' 0 0 0 4px #DCECF1' },
  ':hover': { backgroundColor: '#2E8FAB' },
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

// PRIMARY LOADING STYLES

const primaryLoadingStyle = css(baseLoadingStyle, {
  backgroundColor: tokens.color.opaque.primary.value.rgb,
});

const dangerLoadingStyle = css(baseLoadingStyle, {
  backgroundColor: tokens.color.opaque.red.value.rgb,
});

const successLoadingStyle = css(baseLoadingStyle, {
  backgroundColor: tokens.color.opaque.green.value.rgb,
});

const warningLoadingStyle = css(baseLoadingStyle, {
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

// /OUTLINE LOADING STYLES

const outlineLoadingStyle = css(baseLoadingStyle, {
  boxShadow: defaultOutline,
});

const dangerOutlineLoadingStyle = css(baseLoadingStyle, {
  boxShadow: dangerOutline,
});

const warningOutlineLoadingStyle = css(baseLoadingStyle, {
  boxShadow: warningOutline,
});

const successOutlineLoadingStyle = css(baseLoadingStyle, {
  boxShadow: successOutline,
});

// FONT SIZES
const fontSizeDefault = css({
  fontSize: '16px',
  fontWeight: 'bold',
  lineHeight: '48px',
});

const fontSizeSmall = css({
  fontSize: '16px',
  fontWeight: 'bold',
  lineHeight: '36px',
});

const fontSizeLarge = css({
  fontSize: '20px',
  fontWeight: 'bold',
  lineHeight: '64px',
});

// FUNCTIONS TO DEFINE STYLE

const getSize = (size: 'small' | 'medium' | 'large'): SerializedStyles => {
  if (size === 'large') {
    return css({ padding: '0 32px' });
  }
  return css({ padding: '0 16px' });
};

const getPrimaryStyle = (
  intent: 'danger' | 'warning' | 'success' | 'neutral'
): SerializedStyles => {
  switch (intent) {
    case 'danger':
      return dangerStyle;
    case 'warning':
      return warningStyle;
    case 'success':
      return successStyle;
    case 'neutral':
    default:
      return defaultStyle;
  }
};

const getPrimaryLoadingStyle = (
  intent: 'danger' | 'warning' | 'success' | 'neutral'
): SerializedStyles => {
  switch (intent) {
    case 'danger':
      return dangerLoadingStyle;
    case 'warning':
      return warningLoadingStyle;
    case 'success':
      return successLoadingStyle;
    case 'neutral':
    default:
      return primaryLoadingStyle;
  }
};

const getOutlineLoadingStyle = (
  intent?: 'danger' | 'warning' | 'success' | 'neutral'
): SerializedStyles => {
  switch (intent) {
    case 'danger':
      return dangerOutlineLoadingStyle;
    case 'warning':
      return warningOutlineLoadingStyle;
    case 'success':
      return successOutlineLoadingStyle;
    case 'neutral':
    default:
      return outlineLoadingStyle;
  }
};

const getOutlineStyle = (
  intent?: 'danger' | 'warning' | 'success' | 'neutral'
): SerializedStyles => {
  switch (intent) {
    case 'danger':
      return dangerOutlineStyle;
    case 'warning':
      return warningOutlineStyle;
    case 'success':
      return successOutlineStyle;
    case 'neutral':
    default:
      return defaultOutlineStyle;
  }
};

const getFontSize = (size?: 'small' | 'medium' | 'large'): SerializedStyles => {
  switch (size) {
    case 'large':
      return fontSizeLarge;
    case 'small':
      return fontSizeSmall;
    default:
      return fontSizeDefault;
  }
};

export {
  baseStyle,
  getFontSize,
  getOutlineLoadingStyle,
  getOutlineStyle,
  getPrimaryStyle,
  getPrimaryLoadingStyle,
  getSize,
  primaryLoadingStyle,
};
