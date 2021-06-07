import wafflesTokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';

const dotStyle = css({
  '@media (min-width: 821px)': {
    display: 'none',
  },
  backgroundColor: wafflesTokens.colors.red,
  border: `1px solid ${wafflesTokens.colors.white}`,
  borderRadius: 8,
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
