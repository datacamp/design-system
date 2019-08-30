import { CrossIcon } from '@datacamp/waffles-icons';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';
import React from 'react';

const CloseButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button
    aria-label="Close"
    css={css({
      ':active': { color: tokens.color.opaque.primary.value.rgb },
      ':focus': {
        backgroundColor: tokens.color.opaque.porcelain.value.rgb,
      },
      ':hover': { backgroundColor: tokens.color.opaque.porcelain.value.rgb },
      alignItems: 'center',
      backgroundColor: 'white',
      border: 'none',
      borderRadius: 2,
      color: tokens.color.opaque.greyDark.value.rgb,
      cursor: 'pointer',
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
    })}
    onClick={onClick}
    type="button"
  >
    <CrossIcon size={18} />
  </button>
);

export default CloseButton;
