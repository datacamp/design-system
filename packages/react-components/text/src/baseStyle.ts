import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/react';

const baseStyle = css('-webkit-font-smoothing: antialiased;', {
  color: tokens.color.primary.navyText.value.rgb,
  fontFamily: `${tokens.asset.font.sansSerif.value}, ${tokens.asset.font.sansSerif.attributes.fallback}`,
  fontStyle: 'normal',
});

export default baseStyle;
