import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css, injectGlobal } from 'emotion';

const lightItalic = css(
  {
    /* latin-ext */
    '@font-face': {
      fontFamily: tokens.asset.font.sansSerif.value,
      fontStyle: 'italic',
      fontWeight: tokens.fontWeight.light.value,
      src:
        "local('Lato Light Italic'), local('Lato-LightItalic'), url(https://fonts.gstatic.com/s/lato/v14/XNVd6tsqi9wmKNvnh5HNEIX0hVgzZQUfRDuZrPvH3D8.woff2) format('woff2'), url(https://fonts.gstatic.com/s/lato/v14/XNVd6tsqi9wmKNvnh5HNED8E0i7KZn-EPnyo3HZu7kw.woff) format('woff')",
      unicodeRange:
        'U+0100 - 024F, U+0259, U+1E00 - 1EFF, U+20A0 - 20AB, U+20AD-20CF, U+2C60 - 2C7F, U+A720-A7FF',
    },
  },
  {
    /* latin */
    '@font-face': {
      fontFamily: tokens.asset.font.sansSerif.value,
      fontStyle: 'italic',
      fontWeight: tokens.fontWeight.light.value,
      src:
        "local('Lato Light Italic'), local('Lato-LightItalic'), url(https://fonts.gstatic.com/s/lato/v14/2HG_tEPiQ4Z6795cGfdivJBw1xU1rKptJj_0jans920.woff2) format('woff2'), url(https://fonts.gstatic.com/s/lato/v14/XNVd6tsqi9wmKNvnh5HNED8E0i7KZn-EPnyo3HZu7kw.woff) format('woff')",
      unicodeRange:
        'U+0000 - 00FF, U+0131, U+0152 - 0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000 - 206F, U+2074, U+20AC, U+2122, U+2212, U+2215',
    },
  }
);

const lightNormal = css(
  {
    /* latin-ext */
    '@font-face': {
      fontFamily: tokens.asset.font.sansSerif.value,
      fontStyle: 'normal',
      fontWeight: tokens.fontWeight.light.value,
      src:
        "local('Lato Light'), local('Lato-Light'), url(https://fonts.gstatic.com/s/lato/v14/IY9HZVvI1cMoAHxvl0w9LVKPGs1ZzpMvnHX-7fPOuAc.woff2) format('woff2'), url(https://fonts.gstatic.com/s/lato/v14/kU6VHbqMAZhaN_nXCmLQsQ.woff) format('woff')",
      unicodeRange:
        'U+0100 - 024F, U+0259, U+1E00 - 1EFF, U+20A0 - 20AB, U+20AD-20CF, U+2C60 - 2C7F, U+A720-A7FF',
    },
  },
  {
    /* latin */
    '@font-face': {
      fontFamily: tokens.asset.font.sansSerif.value,
      fontStyle: 'normal',
      fontWeight: tokens.fontWeight.light.value,
      src:
        "local('Lato Light'), local('Lato-Light'), url(https://fonts.gstatic.com/s/lato/v14/22JRxvfANxSmnAhzbFH8PgLUuEpTyoUstqEm5AMlJo4.woff2) format('woff2'), url(https://fonts.gstatic.com/s/lato/v14/kU6VHbqMAZhaN_nXCmLQsQ.woff) format('woff')",
      unicodeRange:
        'U+0000 - 00FF, U+0131, U+0152 - 0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000 - 206F, U+2074, U+20AC, U+2122, U+2212, U+2215',
    },
  }
);

injectGlobal(lightItalic, lightNormal);
