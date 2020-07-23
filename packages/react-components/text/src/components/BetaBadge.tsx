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

const BetaBadge = ({ className }: BetaBadgeProps): React.ReactElement => (
  <Badge
    className={className}
    color={tokens.color.primary.purple.value.hex}
    size="large"
  >
    Beta
  </Badge>
);

export default BetaBadge;
