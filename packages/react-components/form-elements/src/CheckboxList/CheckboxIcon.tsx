import { CheckmarkIcon } from '@datacamp/waffles-icons';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';
import React from 'react';

const CheckboxIcon: React.FC<{
  checked: boolean;
  disabled: boolean;
  error: boolean;
}> = ({ checked, disabled, error }) => {
  let color = tokens.color.neutral.beige400.value.hex;
  if (checked) color = tokens.color.primary.blue.value.hex;
  if (error) color = tokens.color.primary.red.value.hex;

  return (
    <>
      <span
        css={css({
          // some of these styles will be overriden when focussed etc.
          alignItems: 'center',
          borderColor: color,
          borderRadius: '4px',
          borderStyle: 'solid',
          borderWidth: '2px',
          boxSizing: 'border-box',
          color,
          display: 'flex',
          height: '18px',
          justifyContent: 'center',
          opacity: disabled ? 0.3 : 1,
          position: 'absolute',
          width: '18px',
        })}
      >
        {checked && (
          <CheckmarkIcon
            aria-hidden={true} // Hide this icon, as label and input element are sufficient
            size={12}
            title="" // Remove the title, as label and input element are sufficient
          />
        )}
      </span>
    </>
  );
};

export default CheckboxIcon;
