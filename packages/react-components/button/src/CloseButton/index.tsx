import { CrossIcon } from '@datacamp/waffles-icons';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';
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
      ':active': { color: tokens.color.primary.green.value.rgb },
      ':disabled': { color: '#D1D3D8' },
      ':disabled:hover, :disabled:focus': { backgroundColor: 'transparent' },
      ':focus': {
        backgroundColor: tokens.color.neutral.grey200.value.rgb,
      },
      ':hover': { backgroundColor: tokens.color.neutral.grey200.value.rgb },
      alignItems: 'center',
      backgroundColor: 'white',
      border: 'none',
      borderRadius: 2,
      color: tokens.color.primary.navyText.value.rgb,
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
