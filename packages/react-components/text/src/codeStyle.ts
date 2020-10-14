import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';

export default css({
  border: 0,
  borderRadius: tokens.radii.small.value,
  color: tokens.color.primary.navyText.value.rgb,
  fontFamily: [
    tokens.asset.font.mono.attributes.fallback,
    tokens.asset.font.mono.value,
  ],
  fontSize: tokens.size.font[200].value,
  fontVariantLigatures: 'none',
  letterSpacing: 0,
  lineHeight: tokens.lineHeight.base.value,
  margin: 0,
  padding: 0,
});
