import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';

export default css('-webkit-font-smoothing: antialiased;', {
  color: tokens.color.primary.navyText.value.rgb,
  fontFamily: [
    tokens.asset.font.sansSerif.attributes.fallback,
    tokens.asset.font.sansSerif.value,
  ],
  fontStyle: 'normal',
});
