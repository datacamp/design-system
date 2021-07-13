import { CrossIcon } from '@datacamp/waffles-icons';
import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';
import React from 'react';

const CloseButton: React.FC<{
  className?: string;
  disabled?: boolean;
  onClick: () => void;
  size?: 'small' | 'large';
}> = ({ className, disabled = false, onClick, size = 'large' }) => (
  <button
    aria-label="Close"
    className={className}
    css={css({
      ':active': { color: tokens.colors.green },
      ':disabled': { color: '#D1D3D8' },
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
      zIndex: 1,
    })}
    disabled={disabled}
    onClick={onClick}
    type="button"
  >
    <CrossIcon aria-hidden size={size === 'large' ? 18 : 12} />
  </button>
);

export default CloseButton;
