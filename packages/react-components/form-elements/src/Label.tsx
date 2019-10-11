import { Small, Text } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { ssrSafeFirstChildSelector } from '@datacamp/waffles-utils';
import { css } from '@emotion/core';
import React from 'react';

interface LabelProps {
  as?: 'label' | 'div';
  children: React.ReactNode;
  description?: string;
  errorMessage?: string;
  htmlFor?: string;
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
  as: Element = 'label',
  htmlFor,
  label,
  required,
  description,
  errorMessage,
  children,
}: LabelProps): React.ReactElement => {
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/label-has-for */}
      <Element css={labelStyle} htmlFor={htmlFor}>
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
        {description && <Small>{description}</Small>}
        {children}
        {errorMessage && <Text css={errorMessageStyle}>{errorMessage}</Text>}
      </Element>
    </>
  );
};

export default Label;
