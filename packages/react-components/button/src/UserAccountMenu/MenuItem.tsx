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
  color: tokens.colors.navyDark,
  cursor: 'pointer',
  display: 'flex',
  fontFamily: tokens.fontFamilies.sansSerif,
  fontSize: tokens.fontSizes.medium,
  fontWeight: tokens.fontWeights.regular,
  height: 42,
  opacity: 0.6,
  outline: 0,
  paddingLeft: 24,
  paddingRight: 24,
  position: 'relative',
  textDecoration: 'none',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  width: '100%',
});

const contentStyle = css({
  boxSizing: 'border-box',
  paddingLeft: 8,
});

const alertDotStyle = css({
  left: 40,
  top: 6,
});

type IconProps = {
  'aria-hidden'?: boolean;
  color?: string;
  size?: 12 | 18 | 24;
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
          <Icon aria-hidden={true} color="currentColor" size={18} />
          <span css={contentStyle}>{children}</span>
        </a>
      </li>
    );
  },
);

export default MenuItem;
