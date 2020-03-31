import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';

const boldItalic = css(
  {
    /* latin-ext */
    '@font-face': {
      fontFamily: tokens.asset.font.sansSerif.value,
      fontStyle: 'italic',
      fontWeight: tokens.fontWeight.bold.value,
      src:
        "local('Lato Bold Italic'), local('Lato-BoldItalic'), url(https://fonts.gstatic.com/s/lato/v14/AcvTq8Q0lyKKNxRlL28Rn4X0hVgzZQUfRDuZrPvH3D8.woff2) format('woff2'), url(https://fonts.gstatic.com/s/lato/v14/AcvTq8Q0lyKKNxRlL28Rnz8E0i7KZn-EPnyo3HZu7kw.woff) format('woff')",
      unicodeRange:
        'U+0100 - 024F, U+0259, U+1E00 - 1EFF, U+20A0 - 20AB, U+20AD-20CF, U+2C60 - 2C7F, U+A720-A7FF',
    },
  },
  {
    /* latin */
    '@font-face': {
      fontFamily: tokens.asset.font.sansSerif.value,
      fontStyle: 'italic',
      fontWeight: tokens.fontWeight.bold.value,
      src:
        "local('Lato Bold Italic'), local('Lato-BoldItalic'), url(https://fonts.gstatic.com/s/lato/v14/HkF_qI1x_noxlxhrhMQYEJBw1xU1rKptJj_0jans920.woff2) format('woff2'), url(https://fonts.gstatic.com/s/lato/v14/AcvTq8Q0lyKKNxRlL28Rnz8E0i7KZn-EPnyo3HZu7kw.woff) format('woff')",
      unicodeRange:
        'U+0000 - 00FF, U+0131, U+0152 - 0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000 - 206F, U+2074, U+20AC, U+2122, U+2212, U+2215',
    },
  },
);

const boldNormal = css(
  {
    /* latin-ext */
    '@font-face': {
      fontFamily: tokens.asset.font.sansSerif.value,
      fontStyle: 'normal',
      fontWeight: tokens.fontWeight.bold.value,
      src:
        "local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v14/rZPI2gHXi8zxUjnybc2ZQFKPGs1ZzpMvnHX-7fPOuAc.woff2) format('woff2'), url(https://fonts.gstatic.com/s/lato/v14/I1Pn3gihk5vyP0Yw5GqKsQ.woff) format('woff')",
      unicodeRange:
        'U+0100 - 024F, U+0259, U+1E00 - 1EFF, U+20A0 - 20AB, U+20AD-20CF, U+2C60 - 2C7F, U+A720-A7FF',
    },
  },
  {
    /* latin */
    '@font-face': {
      fontFamily: tokens.asset.font.sansSerif.value,
      fontStyle: 'normal',
      fontWeight: tokens.fontWeight.bold.value,
      src:
        "local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v14/MgNNr5y1C_tIEuLEmicLmwLUuEpTyoUstqEm5AMlJo4.woff2) format('woff2'), url(https://fonts.gstatic.com/s/lato/v14/I1Pn3gihk5vyP0Yw5GqKsQ.woff) format('woff')",
      unicodeRange:
        'U+0000 - 00FF, U+0131, U+0152 - 0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000 - 206F, U+2074, U+20AC, U+2122, U+2212, U+2215',
    },
  },
);

export default css(boldItalic, boldNormal);
