import { CrossIcon } from '@datacamp/waffles-icons';
import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';

type CloseButtonProps = {
  className?: string;
  disabled?: boolean;
  onClick: () => void;
  size?: 'small' | 'large';
};

const CloseButton = ({
  className,
  disabled = false,
  onClick,
  size = 'large',
}: CloseButtonProps): JSX.Element => (
  <button
    aria-label="Close"
    className={className}
    css={css({
      ':active': { color: tokens.colors.green },
      ':disabled': { color: tokens.colors.greyMedium },
      ':disabled:hover, :disabled:focus': { backgroundColor: 'transparent' },
      ':focus': {
        backgroundColor: tokens.colors.greyLight,
      },
      ':hover': { backgroundColor: tokens.colors.greyLight },
      alignItems: 'center',
      backgroundColor: 'white',
      border: 'none',
      borderRadius: 2,
      color: tokens.colors.navy,
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'flex',
      flexDirection: 'column',
      height: size === 'large' ? 32 : 20,
      justifyContent: 'center',
      outline: 'none',
      padding: 0,
      width: size === 'large' ? 32 : 20,
      zIndex: tokens.zIndex.default,
    })}
    disabled={disabled}
    onClick={onClick}
    type="button"
  >
    <CrossIcon
      aria-hidden
      size={size === 'large' ? 'medium' : 'small'}
      title=""
    />
  </button>
);

export default CloseButton;
