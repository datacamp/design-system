import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';

const dotStyle = css({
  backgroundColor: tokens.colors.red,
  border: `1px solid ${tokens.colors.white}`,
  borderRadius: 8,
  height: 8,
  position: 'absolute',
  width: 8,
  zIndex: tokens.zIndex.default,
});

type AlertDot = {
  className?: string;
};

function AlertDot({ className }: AlertDot): JSX.Element {
  return (
    <span
      className={className}
      css={dotStyle}
      data-testid="user-account-menu-alert-dot"
    />
  );
}

export default AlertDot;
