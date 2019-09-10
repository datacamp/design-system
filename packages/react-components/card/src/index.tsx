import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import * as React from 'react';

export const elevationMap = {
  0: tokens.shadow.border.value,
  1: tokens.shadow.sm.value,
  2: tokens.shadow.md.value,
  3: tokens.shadow.lg.value,
  4: tokens.shadow.xl.value,
};

// same as keyof typeof elevationMap but able to generate proptypes correctly
type elevationKeys = 0 | 1 | 2 | 3 | 4;

interface CardProps {
  as?: 'div' | 'section' | 'aside';
  children: React.ReactNode;
  className?: string;
  elevation?: elevationKeys;
  hoverElevation?: elevationKeys;
}

const Card: React.FC<CardProps> = ({
  as: Element = 'div',
  children,
  className,
  elevation = 0,
  hoverElevation,
}) => {
  // warn when hoverElevation is less than elevation
  PropTypes.checkPropTypes(
    {
      hoverElevation() {
        if (hoverElevation !== undefined && hoverElevation <= elevation) {
          return new Error(
            'Invalid prop `hoverElevation` supplied to `Card`. hoverElevation must be greater than elevation'
          );
        }
        return null;
      },
    },
    { elevation, hoverElevation },
    'hoverElevation',
    'Card'
  );

  return (
    <Element
      className={className}
      css={css({
        ':hover':
          hoverElevation !== undefined
            ? {
                boxShadow: elevationMap[hoverElevation],
                transform: `translate(0, -1px)`,
              }
            : {},
        backgroundColor: tokens.color.opaque.white.value.rgb,
        borderRadius: tokens.radii.small.value,
        boxShadow: elevationMap[elevation],
        transition: 'all 0.6s cubic-bezier(0.075, 0.82, 0.165, 1)',
      })}
    >
      {children}
    </Element>
  );
};

export default Card;
