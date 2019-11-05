import { Text } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import React, { MutableRefObject, ReactElement } from 'react';
import { createPortal } from 'react-dom';

interface TooltipProps {
  children: string;
  id: string;
  target: MutableRefObject<HTMLElement | undefined>;
  visible: boolean;
}

const Tooltip = ({
  children,
  id,
  visible,
  target,
}: TooltipProps): ReactElement | null => {
  if (!visible || !target.current) return null;

  const targetBox = target.current.getBoundingClientRect();

  return createPortal(
    <div
      css={{
        left: window.scrollX + (targetBox.left + targetBox.right) / 2,
        position: 'absolute',
        top: targetBox.bottom + window.scrollY,
        transform: 'translate(-50%, 0)',
      }}
      id={id}
    >
      <Text
        css={{
          backgroundColor: tokens.color.opaque.primaryDarkest.value.hex,
          borderRadius: tokens.radii.small.value,
          color: tokens.color.opaque.white.value.hex,
          display: 'block',
          fontSize: tokens.size.font[200].value,
          marginTop: tokens.size.space[8].value,
          paddingBottom: tokens.size.space[8].value,
          paddingLeft: tokens.size.space[12].value,
          paddingRight: tokens.size.space[12].value,
          paddingTop: tokens.size.space[8].value,
        }}
      >
        {children}
      </Text>
    </div>,
    document.body
  );
};

export default Tooltip;
