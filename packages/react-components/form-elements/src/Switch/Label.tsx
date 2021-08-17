import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';

import { SwitchProps } from './index';

const labelStyle = css({
  alignItems: 'center',
  boxSizing: 'border-box',
  color: tokens.colors.navyDark,
  cursor: 'pointer',
  fontFamily: tokens.fontFamilies.sansSerif,
  fontSize: tokens.fontSizes.medium,
  fontWeight: tokens.fontWeights.regular,
  opacity: 1,
  position: 'relative',
  userSelect: 'none',
});

type LabelProps = Pick<
  SwitchProps,
  'appearance' | 'children' | 'className' | 'disabled' | 'fullWidth'
>;

function Label({
  appearance,
  children,
  className,
  disabled,
  fullWidth,
}: LabelProps): JSX.Element {
  return (
    <label
      className={className}
      css={css(
        labelStyle,
        {
          color:
            appearance === 'inverted'
              ? tokens.colors.white
              : tokens.colors.navyDark,
          display: fullWidth ? 'flex' : 'inline-flex',
          width: fullWidth ? '100%' : 'auto',
        },
        disabled && {
          cursor: 'default',
          opacity: tokens.opacity.medium,
        },
      )}
    >
      {children}
    </label>
  );
}

export default Label;
