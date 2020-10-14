// When editing this file don't forget to also update the font faces in the core package

import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';

export default css`
  @font-face {
    font-family: ${tokens.asset.font.sansSerif.value};
    src: url('https://waffles.datacamp.com/fonts/StudioFeixenSans-Regular.woff2')
        format('woff2'),
      url('https://waffles.datacamp.com/fonts/StudioFeixenSans-Regular.woff')
        format('woff'),
      url('https://waffles.datacamp.com/fonts/StudioFeixenSans-Regular.ttf')
        format('truetype');
    font-weight: ${tokens.fontWeight.regular.value};
    font-display: swap;
  }

  @font-face {
    font-family: ${tokens.asset.font.sansSerif.value};
    src: url('https://waffles.datacamp.com/fonts/StudioFeixenSans-Bold.woff2')
        format('woff2'),
      url('https://waffles.datacamp.com/fonts/StudioFeixenSans-Bold.woff')
        format('woff'),
      url('https://waffles.datacamp.com/fonts/StudioFeixenSans-Bold.ttf')
        format('truetype');
    font-weight: ${tokens.fontWeight.bold.value};
    font-display: swap;
  }

  @font-face {
    font-family: ${tokens.asset.font.sansSerif.value};
    src: url('https://waffles.datacamp.com/fonts/StudioFeixenSans-Book.woff2')
        format('woff2'),
      url('https://waffles.datacamp.com/fonts/StudioFeixenSans-Book.woff')
        format('woff'),
      url('https://waffles.datacamp.com/fonts/StudioFeixenSans-Book.ttf')
        format('truetype');
    font-weight: ${tokens.fontWeight.light.value};
    font-display: swap;
  }
`;
