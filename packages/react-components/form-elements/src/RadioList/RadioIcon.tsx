import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';
import React from 'react';

const RadioIcon: React.FC<{
  checked: boolean;
  disabled: boolean;
  error: boolean;
}> = ({ checked, disabled, error }) => {
  let color = tokens.color.neutral.grey200.value.hex;
  if (checked) color = tokens.color.primary.green.value.hex;
  if (error) color = tokens.color.primary.red.value.hex;
  if (disabled) color = tokens.color.neutral.grey100.value.hex;

  return (
    <>
      <span
        css={css(
          {
            borderColor: color,
            borderRadius: '50%',
            borderStyle: 'solid',
            borderWidth: '1px',
            boxSizing: 'border-box',
            position: 'absolute',
          },
          { height: '16px', left: 1, top: 1, width: '16px' },
        )}
      />
      {checked && (
        <span
          css={{
            backgroundColor: color,
            borderRadius: '50%',
            boxSizing: 'border-box',
            height: '8px',
            marginLeft: '5px',
            marginTop: '5px',
            position: 'absolute',
            width: '8px',
          }}
        />
      )}
    </>
  );
};

export default RadioIcon;
