// When editing this file don't forget to also update the font faces in the core package

import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';

export default css`
  @font-face {
    font-family: 'JetBrainsMonoNL';
    src: url('https://waffles.datacamp.com/fonts/JetBrainsMono-Regular.woff2')
        format('woff2'),
      url('https://waffles.datacamp.com/fonts/JetBrainsMono-Regular.woff')
        format('woff'),
      url('https://waffles.datacamp.com/fonts/JetBrainsMonoNL-Regular.ttf')
        format('truetype');
    font-style: 'normal';
    font-weight: ${tokens.fontWeights.regular};
  }
`;
