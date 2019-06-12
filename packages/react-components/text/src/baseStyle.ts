import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';

export default css({
  color: tokens.color.opaque.grey.value.rgb,
  fontFamily: [
    tokens.asset.font.sansSerif.attributes.fallback,
    tokens.asset.font.sansSerif.value,
  ],
  fontSize: tokens.size.font.base.value,
  fontStyle: 'normal',
});
