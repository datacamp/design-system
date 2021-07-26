import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';

const codeStyle = css({
  border: 0,
  borderRadius: tokens.borderRadius.medium,
  color: tokens.colors.navy,
  fontFamily: tokens.fontFamilies.mono,
  fontSize: tokens.fontSizes.small,
  fontVariantLigatures: 'none',
  letterSpacing: 0,
  lineHeight: tokens.lineHeights.relaxed,
  margin: 0,
  padding: 0,
});

export default codeStyle;
