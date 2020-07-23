import Card from '@datacamp/waffles-card';
import Positioner from '@datacamp/waffles-positioner';
import { Text } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';
import React, { MutableRefObject, ReactElement } from 'react';

interface TooltipProps {
  appearance: 'light' | 'dark';
  children: string;
  id: string;
  position:
    | 'bottom'
    | 'top'
    | 'right'
    | 'left'
    | 'bottomLeft'
    | 'bottomRight'
    | 'topLeft'
    | 'topRight';
  target: MutableRefObject<HTMLElement | undefined>;
  visible: boolean;
}

const marginMap = {
  bottom: css({ marginTop: tokens.size.space[8].value }),
  bottomLeft: css({ marginTop: tokens.size.space[8].value }),
  bottomRight: css({ marginTop: tokens.size.space[8].value }),
  left: css({ marginRight: tokens.size.space[8].value }),
  right: css({ marginLeft: tokens.size.space[8].value }),
  top: css({ marginBottom: tokens.size.space[8].value }),
  topLeft: css({ marginBottom: tokens.size.space[8].value }),
  topRight: css({ marginBottom: tokens.size.space[8].value }),
};

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
  id,
  visible,
  target,
  position,
}: TooltipProps): ReactElement | null => {
  return (
    <Positioner position={position} target={target} visible={visible}>
      <Card
        css={css(
          {
            paddingBottom: tokens.size.space[8].value,
            paddingLeft: tokens.size.space[12].value,
            paddingRight: tokens.size.space[12].value,
            paddingTop: tokens.size.space[8].value,
          },
          marginMap[position],
          cardStyles[appearance],
        )}
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
    </Positioner>
  );
};

export default Tooltip;
