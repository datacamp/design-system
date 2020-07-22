import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';
import React from 'react';

import Badge from './Badge';

interface BetaBadgeProps {
  /**
   * Additional css className to add to the rendered element
   */
  className?: string;
}

const betaBadgeStyle = css({
  background: tokens.color.opaque.purple.value.hex,
  color: 'white',
});

const BetaBadge = ({ className }: BetaBadgeProps): React.ReactElement => (
  // color is overriden by betaBadgeStyle
  <Badge className={className} color="" css={betaBadgeStyle} size="large">
    Beta
  </Badge>
);

export default BetaBadge;
