import { Text } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';
import React, { MutableRefObject, ReactElement } from 'react';
import { createPortal } from 'react-dom';

interface TooltipProps {
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

const Tooltip = ({
  children,
  id,
  visible,
  target,
  position,
}: TooltipProps): ReactElement | null => {
  if (!visible || !target.current) return null;

  const targetBox = target.current.getBoundingClientRect();

  const layoutCSSMap = {
    bottom: css({
      left: window.scrollX + (targetBox.left + targetBox.right) / 2,
      top: targetBox.bottom + window.scrollY,
      transform: 'translate(-50%, 0)',
    }),
    bottomLeft: css({
      left: window.scrollX + targetBox.left,
      top: targetBox.bottom + window.scrollY,
    }),
    bottomRight: css({
      left: window.scrollX + targetBox.left + targetBox.width,
      top: targetBox.bottom + window.scrollY,
      transform: 'translate(-100%)',
    }),
    left: css({
      left: window.scrollX + targetBox.left,
      top: window.scrollY + targetBox.top + targetBox.height / 2,
      transform: 'translate(-100%, -50%)',
    }),
    right: css({
      left: window.scrollX + targetBox.right,
      top: window.scrollY + targetBox.top + targetBox.height / 2,
      transform: 'translate(0, -50%)',
    }),
    top: css({
      left: window.scrollX + (targetBox.left + targetBox.right) / 2,
      top: targetBox.top + window.scrollY,
      transform: 'translate(-50%, -100%)',
    }),
    topLeft: css({
      left: window.scrollX + targetBox.left,
      top: targetBox.top + window.scrollY,
      transform: 'translate(0, -100%)',
    }),
    topRight: css({
      left: window.scrollX + targetBox.left + targetBox.width,
      top: targetBox.top + window.scrollY,
      transform: 'translate(-100%, -100%)',
    }),
  };

  return createPortal(
    <div
      css={css(
        {
          position: 'absolute',
        },
        layoutCSSMap[position]
      )}
      id={id}
    >
      <Text
        css={css(
          {
            backgroundColor: tokens.color.opaque.primaryDarkest.value.hex,
            borderRadius: tokens.radii.small.value,
            color: tokens.color.opaque.white.value.hex,
            display: 'block',
            fontSize: tokens.size.font[200].value,
            paddingBottom: tokens.size.space[8].value,
            paddingLeft: tokens.size.space[12].value,
            paddingRight: tokens.size.space[12].value,
            paddingTop: tokens.size.space[8].value,
            whiteSpace: 'nowrap',
          },
          marginMap[position]
        )}
      >
        {children}
      </Text>
    </div>,
    document.body
  );
};

export default Tooltip;
