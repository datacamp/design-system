// FIX BROKEN RELEASE
/* eslint-disable filenames/match-exported */
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/react';

export const elevationMap = {
  0: '0 0 2px 0 rgba(5, 25, 45, 0.25)',
  1: `0 0 2px 0 rgba(5, 25, 45, 0.25), ${tokens.shadow.sm.value}`,
  2: `0 0 2px 0 rgba(5, 25, 45, 0.25), ${tokens.shadow.md.value}`,
  3: `0 0 2px 0 rgba(5, 25, 45, 0.25), ${tokens.shadow.lg.value}`,
  4: `0 0 2px 0 rgba(5, 25, 45, 0.25), ${tokens.shadow.xl.value}`,
};

const cardStyle = css({
  backgroundColor: tokens.color.primary.white.value.hex,
  borderRadius: tokens.radii.small.value,
  transition: 'all 600ms cubic-bezier(0.075, 0.82, 0.165, 1)',
});

const headStoneStyle = css({
  height: 40,
  left: 32,
  position: 'absolute',
  top: -20,
});

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
  children: React.ReactNode;
  /**
   * A css className. This can be used to add custom styling.
   */
  className?: string;
  /**
   * The border/shadow to use on the Card. 0 corresponds to a border, and the
   * other values correspond to levels of shadow.
   */
  elevation?: elevationKeys;
  /**
   * Content to render sticking out the top of the card. This will be positioned
   * sticking out the top of the card and can be used for technology icons etc.
   * Note this adds a position and margin-top to the card style in order to
   * position the head stone content correctly.
   */
  headStone?: React.ReactNode;
  hoverElevation?: elevationKeys;
  id?: string;
  /**
   * The optional callback fired when the card is clicked.
   */
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
}

function Card({
  as: Element = 'div',
  children,
  className,
  elevation = 0,
  headStone,
  hoverElevation,
  id,
  onClick,
}: CardProps): JSX.Element {
  return (
    <Element
      className={className}
      css={css(
        cardStyle,
        {
          ':hover':
            hoverElevation !== undefined
              ? {
                  boxShadow: elevationMap[hoverElevation],
                  transform: `translate(0, -1px)`,
                }
              : {},
          boxShadow: elevationMap[elevation],
        },
        headStone && { marginTop: 20, position: 'relative' },
      )}
      id={id}
      onClick={onClick}
    >
      {headStone && <div css={headStoneStyle}>{headStone}</div>}
      {children}
    </Element>
  );
}

Card.propTypes = {
  /**
   * The border/shadow to use when the Card is hovered. Accepts the same values
   * as elevation, and must also be greater than the elevation level provided.
   */
  hoverElevation(props: CardProps) {
    const { elevation, hoverElevation } = props;
    if (hoverElevation !== undefined && hoverElevation <= (elevation ?? 0)) {
      return new Error(
        'Invalid prop `hoverElevation` supplied to `Card`. hoverElevation must be greater than elevation',
      );
    }
    return null;
  },
};

export default Card;
