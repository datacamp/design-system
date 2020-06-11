import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';

export default css({
  /* latin-ext */
  '@font-face': {
    fontFamily: tokens.asset.font.sansSerif.value,
    src:
      "url('https://waffles-beta.datacamp.com/fonts/studio-feixen-sans-variable.ttf') format('truetype')",
  },
});
