import wafflesTokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';

import { FULL_MENU_MEDIA_QUERY } from './constants';

const dotStyle = css({
  backgroundColor: wafflesTokens.colors.red,
  border: `1px solid ${wafflesTokens.colors.white}`,
  borderRadius: 8,
  [FULL_MENU_MEDIA_QUERY]: {
    display: 'none',
  },
  height: 8,
  position: 'absolute',
  right: 0,
  top: 0,
  width: 8,
  zIndex: 1,
});

type AlertDot = {
  className?: string;
};

function AlertDot({ className }: AlertDot): JSX.Element {
  return <span className={className} css={dotStyle} data-testid="alert-dot" />;
}

export default AlertDot;
