import { css } from '@emotion/react';
import React, { MutableRefObject } from 'react';

import usePositioner from './usePositioner';

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
  const style = usePositioner({ isVisible: visible, position, target });

  return visible ? <div css={css(style, { zIndex: 1 })}>{children}</div> : null;
};

export default Positioner;
