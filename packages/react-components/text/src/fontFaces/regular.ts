import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';

export default css({
  '@font-face': {
    fontFamily: tokens.asset.font.sansSerif.value,
    fontWeight: '100 900' as any,
    src:
      "url('https://waffles.datacamp.com/fonts/studio-feixen-sans-variable.ttf') format('truetype')",
  },
});
