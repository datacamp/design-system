import { css, SerializedStyles } from '@emotion/react';
import React from 'react';

const usePositioner = ({
  isVisible,
  offset = 0,
  position,
  target,
}: {
  isVisible: boolean;
  offset?: number;
  position:
    | 'bottom'
    | 'top'
    | 'right'
    | 'left'
    | 'bottomLeft'
    | 'bottomRight'
    | 'topLeft'
    | 'topRight';
  target: React.MutableRefObject<HTMLElement | undefined | null>;
}): SerializedStyles => {
  const [targetBox, setTargetBox] = React.useState<{
    bottom: number;
    height: number;
    left: number;
    right: number;
    top: number;
    width: number;
  } | null>(null);

  React.useEffect(() => {
    const resetPosition = (): void => {
      if (!isVisible || !target.current) return;

      setTargetBox(target.current.getBoundingClientRect());
    };

    resetPosition();
    window.addEventListener('scroll', resetPosition, true);
    window.addEventListener('resize', resetPosition, true);

    return () => {
      window.removeEventListener('scroll', resetPosition, true);
      window.removeEventListener('resize', resetPosition, true);
    };
  }, [isVisible, target]);

  if (!targetBox || !isVisible) return css({ display: 'none' });

  const layoutCSSMap = {
    bottom: css({
      left: (targetBox.left + targetBox.right) / 2,
      top: targetBox.bottom + offset,
      transform: 'translate(-50%, 0)',
    }),
    bottomLeft: css({
      left: targetBox.left,
      top: targetBox.bottom + offset,
    }),
    bottomRight: css({
      left: targetBox.left + targetBox.width,
      top: targetBox.bottom + offset,
      transform: 'translate(-100%)',
    }),
    left: css({
      left: targetBox.left - offset,
      top: targetBox.top + targetBox.height / 2,
      transform: 'translate(-100%, -50%)',
    }),
    right: css({
      left: targetBox.right + offset,
      top: targetBox.top + targetBox.height / 2,
      transform: 'translate(0, -50%)',
    }),
    top: css({
      left: (targetBox.left + targetBox.right) / 2,
      top: targetBox.top - offset,
      transform: 'translate(-50%, -100%)',
    }),
    topLeft: css({
      left: targetBox.left,
      top: targetBox.top - offset,
      transform: 'translate(0, -100%)',
    }),
    topRight: css({
      left: targetBox.left + targetBox.width,
      top: targetBox.top - offset,
      transform: 'translate(-100%, -100%)',
    }),
  };

  return css(
    {
      position: 'fixed',
    },
    layoutCSSMap[position],
  );
};

export default usePositioner;
