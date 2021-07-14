import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';
import { useFocusRing } from '@react-aria/focus';
import { forwardRef } from 'react';

import AlertDot from './AlertDot';

const wrapperStyle = css({
  alignItems: 'center',
  display: 'flex',
  width: '100%',
});

const itemStyle = css({
  ':hover': {
    backgroundColor: tokens.colors.beigeLight,
    opacity: 1,
  },
  alignItems: 'center',
  border: 0,
  boxSizing: 'border-box',
  color: tokens.colors.navy,
  cursor: 'pointer',
  display: 'flex',
  fontFamily: tokens.fontFamilies.sansSerif,
  fontSize: tokens.fontSizes.medium,
  fontWeight: tokens.fontWeights.regular,
  height: 42,
  opacity: tokens.opacity.height,
  outline: 0,
  paddingLeft: tokens.spacing.large,
  paddingRight: tokens.spacing.large,
  position: 'relative',
  textDecoration: 'none',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  width: '100%',
});

const contentStyle = css({
  boxSizing: 'border-box',
  paddingLeft: tokens.spacing.small,
});

const alertDotStyle = css({
  left: 40,
  top: 6,
});

type IconProps = {
  'aria-hidden'?: boolean;
  color?: string;
  size?: 'xsmall' | 'small' | 'medium';
};

type MenuItemProps = {
  children: React.ReactNode;
  icon: React.ComponentType<IconProps>;
  showAlertDot?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const MenuItem = forwardRef<HTMLAnchorElement, MenuItemProps>(
  (
    { children, className, icon: Icon, showAlertDot = false, ...restProps },
    ref,
  ) => {
    const { focusProps, isFocusVisible } = useFocusRing();

    return (
      <li className={className} css={wrapperStyle} tabIndex={-1}>
        <a
          css={css(
            itemStyle,
            isFocusVisible && {
              boxShadow: `inset 0 0 0 2px ${tokens.colors.blueDark}`,
              opacity: 1,
            },
          )}
          ref={ref}
          {...restProps}
          {...focusProps}
        >
          {showAlertDot && <AlertDot css={alertDotStyle} />}
          <Icon aria-hidden={true} color="currentColor" size="medium" />
          <span css={contentStyle}>{children}</span>
        </a>
      </li>
    );
  },
);

export default MenuItem;
