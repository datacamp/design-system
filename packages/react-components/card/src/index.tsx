import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import React, { ReactElement, ReactNode } from 'react';

export const elevationMap = {
  0: tokens.shadow.border.value,
  1: `0px 0px 1px 0px rgba(61, 66, 81, 0.3), ${tokens.shadow.sm.value}`,
  2: `0px 0px 1px 0px rgba(61, 66, 81, 0.3), ${tokens.shadow.md.value}`,
  3: `0px 0px 1px 0px rgba(61, 66, 81, 0.3), ${tokens.shadow.lg.value}`,
  4: `0px 0px 1px 0px rgba(61, 66, 81, 0.3), ${tokens.shadow.xl.value}`,
};

// same as keyof typeof elevationMap but able to generate proptypes correctly
type elevationKeys = 0 | 1 | 2 | 3 | 4;

interface CardProps {
  /**
   * The html element to render.
   */
  as?: 'div' | 'section' | 'aside';
  /**
   * The content of the card.
   */
  children: ReactNode;
  /**
   * A css className. This can be used to add custom styling.
   */
  className?: string;
  /**
   * The border/shadow to use on the Card. 0 corresponds to a border, and the
   * other values correspond to levels of shadow.
   */
  elevation?: elevationKeys;
  hoverElevation?: elevationKeys;
  id?: string;
}

const Card = ({
  as: Element = 'div',
  children,
  className,
  elevation = 0,
  hoverElevation,
  id,
}: CardProps): ReactElement => {
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
      id={id}
    >
      {children}
    </Element>
  );
};

Card.propTypes = {
  /**
   * The border/shadow to use when the Card is hovered. Accepts the same values
   * as elevation, and must also be greater than the elevation level provided.
   */
  hoverElevation(props: CardProps) {
    const { hoverElevation, elevation } = props;
    if (hoverElevation !== undefined && hoverElevation <= (elevation ?? 0)) {
      return new Error(
        'Invalid prop `hoverElevation` supplied to `Card`. hoverElevation must be greater than elevation',
      );
    }
    return null;
  },
};

export default Card;
