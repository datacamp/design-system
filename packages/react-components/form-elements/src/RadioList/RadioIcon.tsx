import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { css } from '@emotion/core';
import React from 'react';

const RadioIcon: React.FC<{
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
          borderColor: color,
          borderRadius: '50%',
          borderStyle: 'solid',
          borderWidth: '2px',
          boxSizing: 'border-box',
          height: '18px',
          opacity: disabled ? 0.3 : 1,
          position: 'absolute',
          top: '0px',
          width: '18px',
        })}
      />
      {checked && (
        <span
          css={{
            backgroundColor: color,
            borderRadius: '50%',
            boxSizing: 'border-box',
            height: '8px',
            marginLeft: '5px',
            opacity: disabled ? 0.3 : 1,
            position: 'absolute',
            top: '5px',
            width: '8px',
          }}
        />
      )}
    </>
  );
};

export default RadioIcon;
