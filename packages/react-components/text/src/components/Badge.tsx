import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';
import React from 'react';
import tinycolor from 'tinycolor2';

import Strong from './Strong';

interface BadgeProps {
  /**
   * The content to render in the Badge
   */
  children: string;
  /**
   * Additionaly css className to add to the rendered element
   */
  className?: string;
  /**
   * The colour of the Badge. This can be any css colour, but it is recommended
   * to use a colour from @datacamp/waffles-tokens. The text color will be set
   * automatically based on this colour.
   */
  color: string;
  /**
   * The size of the Badge to render.
   */
  size?: 'small' | 'large';
}

const baseStyle = css({
  borderRadius: 4,
  display: 'inline-block',
  textTransform: 'uppercase',
});

const sizeStyles = {
  large: {
    fontSize: tokens.size.font[300].value,
    lineHeight: '24px',
    paddingLeft: tokens.size.space[8].value,
    paddingRight: tokens.size.space[8].value,
  },
  small: {
    fontSize: tokens.size.font[200].value,
    lineHeight: '18px',
    paddingLeft: tokens.size.space[4].value,
    paddingRight: tokens.size.space[4].value,
  },
};

const getTextColor = (backgroundColor: string): string => {
  // This should be 4.5 for compliance. 2.7 is just low enough to give white
  // text on #3ac background
  if (tinycolor.readability(backgroundColor, 'white') > 2.7) {
    return 'white';
  }
  return 'rgba(12, 22, 38, 0.8)';
};

const Badge = ({
  children,
  className,
  color,
  size = 'small',
}: BadgeProps): React.ReactElement => (
  <Strong
    className={className}
    css={css(
      baseStyle,
      { backgroundColor: color, color: getTextColor(color) },
      sizeStyles[size],
    )}
  >
    {children}
  </Strong>
);

export default Badge;
