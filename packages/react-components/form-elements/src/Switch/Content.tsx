import { css } from '@emotion/react';
import React from 'react';

type ContentProps = {
  children: React.ReactNode;
  fullWidth?: boolean;
};

function Content({ children, fullWidth }: ContentProps): JSX.Element {
  return (
    <span
      css={css({
        flexGrow: fullWidth ? 1 : 0,
      })}
    >
      {children}
    </span>
  );
}

export default Content;
