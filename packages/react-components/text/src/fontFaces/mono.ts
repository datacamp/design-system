import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';

const monoFont = css(
  {
    /* latin-ext */
    '@font-face': {
      fontFamily: tokens.asset.font.mono.value,
      fontStyle: 'normal',
      fontWeight: tokens.fontWeight.regular.value,
      src:
        "local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v5/hMqPNLsu_dywMa4C_DEpY6E8kM4xWR1_1bYURRojRGc.woff2) format('woff2'), url(https://fonts.gstatic.com/s/robotomono/v5/hMqPNLsu_dywMa4C_DEpY4bN6UDyHWBl620a-IRfuBk.woff) format('woff')",
      unicodeRange:
        'U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF',
    },
  },
  {
    /* latin */
    '@font-face': {
      fontFamily: tokens.asset.font.mono.value,
      fontStyle: 'normal',
      fontWeight: tokens.fontWeight.regular.value,
      src:
        "local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v5/hMqPNLsu_dywMa4C_DEpY4gp9Q8gbYrhqGlRav_IXfk.woff2) format('woff2'), url(https://fonts.gstatic.com/s/robotomono/v5/hMqPNLsu_dywMa4C_DEpY4bN6UDyHWBl620a-IRfuBk.woff) format('woff')",
      unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2212, U+2215',
    },
  },
);

export default css(monoFont);
