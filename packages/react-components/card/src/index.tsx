import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';
import * as React from 'react';

export const elevationMap = {
  0: tokens.shadow.border.value,
  1: tokens.shadow.sm.value,
  2: tokens.shadow.md.value,
  3: tokens.shadow.lg.value,
  4: tokens.shadow.xl.value,
};

interface CardProps {
  as?: 'div' | 'section' | 'aside';
  children: React.ReactElement | React.ReactElement[];
  className?: string;
  elevation?: keyof typeof elevationMap;
}

const Card: React.FC<CardProps> = ({
  as: Element = 'div',
  children,
  className,
  elevation = 0,
}) => (
  <Element
    className={className}
    css={css({
      backgroundColor: tokens.color.opaque.white.value.rgb,
      borderRadius: tokens.radii.small.value,
      boxShadow: elevationMap[elevation],
    })}
  >
    {children}
  </Element>
);

export default Card;
