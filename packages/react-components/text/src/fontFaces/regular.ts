import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';

const regularItalic = css(
  {
    /* latin-ext */
    '@font-face': {
      fontFamily: tokens.asset.font.sansSerif.value,
      fontStyle: 'italic',
      fontWeight: tokens.fontWeight.regular.value,
      src:
        "local('Lato Italic'), local('Lato-Italic'), url(https://fonts.gstatic.com/s/lato/v14/cT2GN3KRBUX69GVJ2b2hxn-_kf6ByYO6CLYdB4HQE-Y.woff2) format('woff2'), url(https://fonts.gstatic.com/s/lato/v14/G-cgiyv4b0HVLV2M8HoP9A.woff) format('woff')",
      unicodeRange:
        'U+0100 - 024F, U+0259, U+1E00 - 1EFF, U+20A0 - 20AB, U+20AD-20CF, U+2C60 - 2C7F, U+A720-A7FF',
    },
  },
  {
    /* latin */
    '@font-face': {
      fontFamily: tokens.asset.font.sansSerif.value,
      fontStyle: 'italic',
      fontWeight: tokens.fontWeight.regular.value,
      src:
        "local('Lato Italic'), local('Lato-Italic'), url(https://fonts.gstatic.com/s/lato/v14/1KWMyx7m-L0fkQGwYhWwuuvvDin1pK8aKteLpeZ5c0A.woff2) format('woff2'), url(https://fonts.gstatic.com/s/lato/v14/G-cgiyv4b0HVLV2M8HoP9A.woff) format('woff')",
      unicodeRange:
        'U+0000 - 00FF, U+0131, U+0152 - 0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000 - 206F, U+2074, U+20AC, U+2122, U+2212, U+2215',
    },
  }
);

const regularNormal = css(
  {
    /* latin-ext */
    '@font-face': {
      fontFamily: tokens.asset.font.sansSerif.value,
      fontStyle: 'normal',
      fontWeight: tokens.fontWeight.regular.value,
      src:
        "local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v14/8qcEw_nrk_5HEcCpYdJu8BTbgVql8nDJpwnrE27mub0.woff2) format('woff2'), url(https://fonts.gstatic.com/s/lato/v14/1bHRUMxmJHoup12DnI9XmQ.woff) format('woff')",
      unicodeRange:
        'U+0100 - 024F, U+0259, U+1E00 - 1EFF, U+20A0 - 20AB, U+20AD-20CF, U+2C60 - 2C7F, U+A720-A7FF',
    },
  },
  {
    /* latin */
    '@font-face': {
      fontFamily: tokens.asset.font.sansSerif.value,
      fontStyle: 'normal',
      fontWeight: tokens.fontWeight.regular.value,
      src:
        "local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v14/MDadn8DQ_3oT6kvnUq_2r_esZW2xOQ-xsNqO47m55DA.woff2) format('woff2'), url(https://fonts.gstatic.com/s/lato/v14/1bHRUMxmJHoup12DnI9XmQ.woff) format('woff')",
      unicodeRange:
        'U+0000 - 00FF, U+0131, U+0152 - 0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000 - 206F, U+2074, U+20AC, U+2122, U+2212, U+2215',
    },
  }
);

export default css(regularItalic, regularNormal);
