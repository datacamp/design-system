/* eslint-disable filenames/match-exported */
import Card from '@datacamp/waffles-card';
import { usePositioner } from '@datacamp/waffles-positioner';
import { Text } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';
import { MutableRefObject, ReactElement } from 'react';

interface TooltipProps {
  /**
   * Sets the background colour of the tooltip.
   */
  appearance: 'light' | 'dark';
  /**
   * The text to appear inside the tooltip
   */
  children: string;
  /**
   * HTML id attribute to use on the rendered element. This is mandatory,
   * since aria-describedby must be set on the target element.
   */
  id: string;
  /**
   * Where to render the component, relative to the target.
   */
  position:
    | 'bottom'
    | 'top'
    | 'right'
    | 'left'
    | 'bottomLeft'
    | 'bottomRight'
    | 'topLeft'
    | 'topRight';
  /**
   * A reference to the target element. The tooltip will position itself
   * next to this element.
   */
  target: MutableRefObject<HTMLElement | undefined | null>;
  /**
   * When true, the tooltip will display. Make sure to set this in circumstances
   * that are available however the user interacts with the page. e.g. mouse,
   * keyboard, screen reader...
   */
  visible: boolean;
}

const cardStyles = {
  dark: css({
    backgroundColor: tokens.colors.navy,
    boxShadow: 'none', // override default card border
  }),
  light: css({
    backgroundColor: tokens.colors.beigeSubtle,
  }),
};

const textStyles = {
  dark: css({ color: tokens.colors.white }),
  light: css({ color: tokens.colors.navy }),
};

const elevations = { dark: 0, light: 2 } as const;

const Tooltip = ({
  appearance,
  children,
  id,
  position,
  target,
  visible,
}: TooltipProps): ReactElement | null => {
  const positionStyle = usePositioner({
    isVisible: visible,
    offset: 8,
    position,
    target,
  });

  if (!visible) return null;

  return (
    <Card
      css={css(
        positionStyle,
        {
          paddingBottom: tokens.spacing.xsmall,
          paddingLeft: tokens.spacing.small,
          paddingRight: tokens.spacing.small,
          paddingTop: tokens.spacing.xsmall,
          zIndex: tokens.zIndex.default,
        },
        cardStyles[appearance],
      )}
      elevation={elevations[appearance]}
      id={id}
    >
      <Text
        css={css(
          {
            fontSize: tokens.fontSizes.small,
            whiteSpace: 'nowrap',
          },
          textStyles[appearance],
        )}
      >
        {children}
      </Text>
    </Card>
  );
};

export default Tooltip;
