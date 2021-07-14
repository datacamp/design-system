import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';

const baseStyle = css('-webkit-font-smoothing: antialiased;', {
  color: tokens.colors.navy,
  fontFamily: tokens.fontFamilies.sansSerif,
  fontStyle: 'normal',
});

export default baseStyle;
