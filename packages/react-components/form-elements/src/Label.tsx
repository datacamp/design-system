import { Text } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { ssrSafeFirstChildSelector } from '@datacamp/waffles-utils';
import { css } from '@emotion/core';
import React from 'react';

interface LabelProps {
  children: React.ReactNode;
  errorMessage?: string;
  id?: string;
  label: string;
  required?: boolean;
}

const labelStyle = css({
  display: 'block',
  marginTop: tokens.size.space[16].value,
  [ssrSafeFirstChildSelector]: {
    marginTop: 0,
  },
});

const textStyle = css({
  display: 'inline-block',
  fontWeight: tokens.fontWeight.bold.value,
  marginBottom: tokens.size.space[12].value,
});

const errorMessageStyle = css({
  color: tokens.color.opaque.red.value.hex,
  display: 'block',
  fontSize: '14px',
  marginTop: tokens.size.space[8].value,
});

const requiredStyle = css({
  color: tokens.color.opaque.greyOslo.value.hex,
  display: 'inline-block',
  fontSize: '14px',
});

const Label = ({
  id,
  label,
  required,
  errorMessage,
  children,
}: LabelProps): React.ReactElement => {
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/label-has-for */}
      <label css={labelStyle} htmlFor={id}>
        <span
          css={{
            display: 'inline-flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Text css={textStyle}>{label}</Text>
          {required !== undefined && (
            <Text css={requiredStyle}>
              {required ? 'required' : 'optional'}
            </Text>
          )}
        </span>
        {children}
        {errorMessage && <Text css={errorMessageStyle}>{errorMessage}</Text>}
      </label>
    </>
  );
};

export default Label;
