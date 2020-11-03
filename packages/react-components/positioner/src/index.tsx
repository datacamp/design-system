import { css } from '@emotion/core';
import React, { MutableRefObject } from 'react';

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
  position,
  target,
  visible,
}: PositionerProps): React.ReactElement | null => {
  const [shouldRender, setShouldRender] = React.useState(false);
  const [targetBox, setTargetBox] = React.useState({
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
  });

  React.useEffect(() => {
    setShouldRender(visible && !!target.current);
  }, [visible, target]);

  React.useEffect(() => {
    const resetPosition = (): void => {
      setTargetBox((target.current as HTMLElement).getBoundingClientRect());
    };

    if (shouldRender) {
      setTargetBox((target.current as HTMLElement).getBoundingClientRect());
      window.addEventListener('scroll', resetPosition, true);
      window.addEventListener('resize', resetPosition, true);
    }

    return () => {
      window.removeEventListener('scroll', resetPosition, true);
      window.removeEventListener('resize', resetPosition, true);
    };
  }, [shouldRender, target]);

  if (!shouldRender) return null;

  const layoutCSSMap = {
    bottom: css({
      left: (targetBox.left + targetBox.right) / 2,
      top: targetBox.bottom,
      transform: 'translate(-50%, 0)',
    }),
    bottomLeft: css({
      left: targetBox.left,
      top: targetBox.bottom,
    }),
    bottomRight: css({
      left: targetBox.left + targetBox.width,
      top: targetBox.bottom,
      transform: 'translate(-100%)',
    }),
    left: css({
      left: targetBox.left,
      top: targetBox.top + targetBox.height / 2,
      transform: 'translate(-100%, -50%)',
    }),
    right: css({
      left: targetBox.right,
      top: targetBox.top + targetBox.height / 2,
      transform: 'translate(0, -50%)',
    }),
    top: css({
      left: (targetBox.left + targetBox.right) / 2,
      top: targetBox.top,
      transform: 'translate(-50%, -100%)',
    }),
    topLeft: css({
      left: targetBox.left,
      top: targetBox.top,
      transform: 'translate(0, -100%)',
    }),
    topRight: css({
      left: targetBox.left + targetBox.width,
      top: targetBox.top,
      transform: 'translate(-100%, -100%)',
    }),
  };

  return (
    <div
      css={css(
        {
          position: 'fixed',
          zIndex: 1,
        },
        layoutCSSMap[position],
      )}
    >
      {children}
    </div>
  );
};

export default Positioner;
