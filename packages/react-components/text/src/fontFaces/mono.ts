import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';

const monoFont = css({
  /* latin-ext */
  '@font-face': {
    fontFamily: tokens.asset.font.mono.value,
    fontStyle: 'normal',
    fontWeight: tokens.fontWeight.regular.value,
    src: `url('https://waffles.datacamp.com/fonts/JetBrainsMonoNL-Regular.ttf')
      format('truetype');`,
  },
});

export default css(monoFont);
