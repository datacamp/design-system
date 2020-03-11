import { CrossIcon } from '@datacamp/waffles-icons';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';
import React from 'react';

const CloseButton: React.FC<{
  className?: string;
  disabled: boolean;
  onClick: () => void;
}> = ({ onClick, disabled = false, className }) => (
  <button
    aria-label="Close"
    className={className}
    css={css({
      ':active': { color: tokens.color.opaque.primary.value.rgb },
      ':disabled': { color: '#D1D3D8' },
      ':disabled:hover, :disabled:focus': { backgroundColor: 'transparent' },
      ':focus': {
        backgroundColor: tokens.color.opaque.porcelain.value.rgb,
      },
      ':hover': { backgroundColor: tokens.color.opaque.porcelain.value.rgb },
      alignItems: 'center',
      backgroundColor: 'white',
      border: 'none',
      borderRadius: 2,
      color: tokens.color.opaque.greyDark.value.rgb,
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'flex',
      flexDirection: 'column',
      height: tokens.size.space[32].value,
      justifyContent: 'center',
      outline: 'none',
      padding: 0,
      position: 'absolute',
      right: tokens.size.space[8].value,
      top: tokens.size.space[8].value,
      width: tokens.size.space[32].value,
      zIndex: 1,
    })}
    disabled={disabled}
    onClick={onClick}
    type="button"
  >
    <CrossIcon size={18} />
  </button>
);

export default CloseButton;
