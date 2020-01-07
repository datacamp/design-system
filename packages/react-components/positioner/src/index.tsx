import { css } from '@emotion/core';
import React, { MutableRefObject } from 'react';
import { createPortal } from 'react-dom';

interface PositionerProps {
  /**
   * The content
   */
  children: React.ReactNode;
  position:
    | 'bottom'
    | 'top'
    | 'right'
    | 'left'
    | 'bottomLeft'
    | 'bottomRight'
    | 'topLeft'
    | 'topRight';
  target: MutableRefObject<HTMLElement | undefined | null>;
  visible: boolean;
}

const Positioner = ({
  children,
  visible,
  target,
  position,
}: PositionerProps): React.ReactElement | null => {
  const [shouldRender, setShouldRender] = React.useState(false);

  React.useEffect(() => {
    setShouldRender(visible && !!target.current);
  }, [visible, target]);

  if (!shouldRender) return null;

  const targetBox = (target.current as HTMLElement).getBoundingClientRect();

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

  return (
    <>
      {createPortal(
        <div
          css={css(
            {
              position: 'absolute',
            },
            layoutCSSMap[position]
          )}
        >
          {children}
        </div>,
        document.body
      )}
    </>
  );
};

export default Positioner;
