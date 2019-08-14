import './sideEffects/injectMonoFontFace';

import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';

export default css({
  borderRadius: tokens.radii.small.value,
  color: tokens.color.opaque.greyDark.value.rgb,
  fontFamily: [
    tokens.asset.font.mono.attributes.fallback,
    tokens.asset.font.mono.value,
  ],
  fontSize: tokens.size.font[200].value,

  letterSpacing: 0,
  lineHeight: tokens.lineHeight.base.value,
});
