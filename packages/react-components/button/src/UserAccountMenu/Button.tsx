import { ChevronDownIcon, ChevronUpIcon } from '@datacamp/waffles-icons';
import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';
import { useFocusRing } from '@react-aria/focus';
import { forwardRef } from 'react';

import AlertDot from './AlertDot';
import Avatar from './Avatar';
import { FULL_MENU_MEDIA_QUERY } from './constants';

const buttonStyle = css({
  alignItems: 'center',
  background: 'none',
  border: 0,
  borderRadius: 18,
  boxSizing: 'border-box',
  color: tokens.colors.navyText,
  cursor: 'pointer',
  display: 'inline-flex',
  [FULL_MENU_MEDIA_QUERY]: {
    ':hover': {
      backgroundColor: tokens.colors.beige200,
    },
    borderRadius: 15,
    height: 30,
    justifyContent: 'space-evenly',
    minWidth: 56,
    width: 56,
  },
  height: 36,
  minWidth: 36,
  outline: 0,
  padding: 0,
  width: 36,
});

const chevronStyle = css({
  display: 'none',
  [FULL_MENU_MEDIA_QUERY]: {
    display: 'block',
  },
});

type ButtonProps = {
  avatarUrl?: string;
  isOpen: boolean;
  showAlertDot?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ avatarUrl, isOpen, showAlertDot = false, ...restProps }, ref) => {
    const { focusProps, isFocusVisible } = useFocusRing();

    return (
      <button
        css={css(
          buttonStyle,
          isFocusVisible && {
            backgroundColor: tokens.colors.beige200,
            boxShadow: `0 0 0 2px ${tokens.colors.blueDark}`,
          },
        )}
        {...restProps}
        {...focusProps}
        ref={ref}
      >
        <Avatar avatarUrl={avatarUrl} />
        {isOpen ? (
          <ChevronUpIcon aria-hidden={true} css={chevronStyle} />
        ) : (
          <ChevronDownIcon aria-hidden={true} css={chevronStyle} />
        )}
        {showAlertDot && <AlertDot />}
      </button>
    );
  },
);

export default Button;
