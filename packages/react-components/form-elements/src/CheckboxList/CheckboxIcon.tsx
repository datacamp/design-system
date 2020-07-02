import { CheckmarkIcon } from '@datacamp/waffles-icons';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';
import React from 'react';

const CheckboxIcon: React.FC<{
  checked: boolean;
  disabled: boolean;
  error: boolean;
}> = ({ checked, disabled, error }) => {
  let color = tokens.color.opaque.greyLight.value.hex;
  if (checked) color = tokens.color.opaque.primary.value.hex;
  if (error) color = tokens.color.opaque.red.value.hex;
  if (disabled) color = tokens.color.opaque.greyLighter.value.hex;

  return (
    <>
      <span
        css={css({
          // some of these styles will be overriden when focussed etc.
          alignItems: 'center',
          borderColor: color,
          borderRadius: '4px',
          borderStyle: 'solid',
          borderWidth: '1px',
          boxSizing: 'border-box',
          color,
          display: 'flex',
          height: '16px',
          justifyContent: 'center',
          left: 1,
          position: 'absolute',
          top: 1,
          width: '16px',
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
