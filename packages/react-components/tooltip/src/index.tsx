/* eslint-disable filenames/match-exported */
import Card from '@datacamp/waffles-card';
import { usePositioner } from '@datacamp/waffles-positioner';
import { Text } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/react';
import React, { MutableRefObject, ReactElement } from 'react';

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
   * Can be used to set data- html attributes on the element.
   */
  dataAttributes?: { [key: string]: string };
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
    backgroundColor: tokens.color.primary.navy.value.hex,
    boxShadow: 'none', // override default card border
  }),
  light: css({
    backgroundColor: tokens.color.neutral.beige100.value.hex,
  }),
};

const textStyles = {
  dark: css({ color: tokens.color.primary.white.value.hex }),
  light: css({ color: tokens.color.primary.navyText.value.hex }),
};

const elevations = { dark: 0, light: 2 } as const;

const Tooltip = ({
  appearance,
  children,
  dataAttributes,
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
          paddingBottom: tokens.size.space[8].value,
          paddingLeft: tokens.size.space[12].value,
          paddingRight: tokens.size.space[12].value,
          paddingTop: tokens.size.space[8].value,
          zIndex: 1,
        },
        cardStyles[appearance],
      )}
      dataAttributes={dataAttributes}
      elevation={elevations[appearance]}
      id={id}
    >
      <Text
        css={css(
          {
            fontSize: tokens.size.font[200].value,
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
