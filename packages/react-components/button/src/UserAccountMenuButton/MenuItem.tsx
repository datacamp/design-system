import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';
import { useFocusRing } from '@react-aria/focus';
import {
  AnchorHTMLAttributes,
  ComponentType,
  forwardRef,
  ReactNode,
} from 'react';

const wrapperStyle = css({
  alignItems: 'center',
  display: 'flex',
  width: '100%',
});

const itemStyle = css({
  ':hover': {
    backgroundColor: tokens.colors.beige200,
    opacity: 1,
  },
  alignItems: 'center',
  border: 0,
  color: tokens.colors.navyText,
  cursor: 'pointer',
  display: 'flex',
  fontFamily: tokens.fontFamily.sansSerif,
  fontSize: tokens.fontSize.h6,
  fontWeight: parseInt(tokens.fontWeight.regular, 10),
  height: 42,
  opacity: 0.6,
  paddingLeft: 24,
  paddingRight: 24,
  textDecoration: 'none',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  width: '100%',
});

const contentStyle = css({
  paddingLeft: 8,
});

type IconProps = {
  'aria-hidden'?: boolean;
  color?: string;
  size?: 12 | 18 | 24;
};

type MenuItemProps = {
  children: ReactNode;
  icon: ComponentType<IconProps>;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const MenuItem = forwardRef<HTMLAnchorElement, MenuItemProps>(
  ({ children, className, icon: Icon, ...restProps }, ref) => {
    const { focusProps, isFocusVisible } = useFocusRing();

    return (
      <li className={className} css={wrapperStyle} tabIndex={-1}>
        <a
          css={css(
            itemStyle,
            isFocusVisible && {
              backgroundColor: tokens.colors.beige200,
              boxShadow: `inset 0 0 0 2px ${tokens.colors.blueDark}`,
              opacity: 1,
            },
          )}
          ref={ref}
          {...restProps}
          {...focusProps}
        >
          <Icon aria-hidden={true} color="currentColor" size={18} />
          <span css={contentStyle}>{children}</span>
        </a>
      </li>
    );
  },
);

export default MenuItem;
