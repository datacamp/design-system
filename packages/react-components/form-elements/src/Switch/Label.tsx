import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';

import { SwitchProps } from './index';

const labelStyle = css({
  alignItems: 'center',
  boxSizing: 'border-box',
  color: tokens.colors.navyText,
  cursor: 'pointer',
  display: 'inline-flex',
  fontFamily: tokens.fontFamily.sansSerif,
  fontSize: 16,
  fontWeight: parseInt(tokens.fontWeight.regular, 10),
  opacity: 1,
  position: 'relative',
  userSelect: 'none',
});

type LabelProps = Pick<
  SwitchProps,
  'appearance' | 'children' | 'className' | 'disabled'
>;

function Label({
  appearance,
  children,
  className,
  disabled,
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
              : tokens.colors.navyText,
        },
        disabled && {
          cursor: 'default',
          opacity: 0.5,
        },
      )}
    >
      {children}
    </label>
  );
}

export default Label;
