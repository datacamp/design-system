import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';

const monoFont = css({
  /* latin-ext */
  '@font-face': {
    fontFamily: tokens.asset.font.mono.value,
    fontStyle: 'normal',
    fontWeight: tokens.fontWeight.regular.value,
    src: `url('https://waffles-beta.datacamp.com/fonts/StudioFeixenSans-WriterRegular.eot') format('embedded-opentype'),
        url('https://waffles-beta.datacamp.com/fonts/StudioFeixenSans-WriterRegular.woff2') format('woff2'),
        url('https://waffles-beta.datacamp.com/fonts/StudioFeixenSans-WriterRegular') format('woff'),
        url('https://waffles-beta.datacamp.com/fonts/StudioFeixenSans-WriterRegular.ttf') format('truetype');`,
  },
});

export default css(monoFont);
