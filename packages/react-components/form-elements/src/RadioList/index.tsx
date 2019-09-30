import { Text } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import {
  computeDataAttributes,
  ssrSafeFirstChildSelector,
} from '@datacamp/waffles-utils';
import { css } from '@emotion/core';
import React, { forwardRef, ReactElement } from 'react';

import { RadioProps } from './Radio';
import { RadioContextProvider } from './radioContext';

export interface RadioListProps {
  children: ReactElement<RadioProps>[];
  /**
   * Sets the class on the rendered element.
   */
  className?: string;
  /**
   * An object who's keys will be prepended with 'data-', and values will be
   * used as attributes on the rendered element.
   */
  dataAttributes?: { [key: string]: string };
  /**
   * It shows an error message under the radio group.
   */
  errorMessage?: string;
  /**
   * It sets a label next to the radio button
   */
  label?: string;
  /**
   * Used to set the html name attribute. Uniquely indentifies the radio list within
   * the current form context.
   */
  name: string;
  /**
   * Called when the user requests a change to the value of the radio. This
   * should be used to set the value.
   */
  onChange: (value: string) => void;
  /*
   * It defines wheter the input field is required or not. If required=true it adds the text 'required' on the top-right of the input, if required=false it adds 'optional'. The default value is undefined, which doesn't add anything.
   */
  required?: boolean;
  /**
   * The value of the radio list. This should be controlled by listening to onChange.
   */
  value: string;
}

const requiredStyle = css({
  color: tokens.color.opaque.greyOslo.value.hex,
  display: 'inline-block',
  fontSize: '14px',
});

const labelStyle = css({
  display: ' block',
  marginTop: tokens.size.space[16].value,
  [ssrSafeFirstChildSelector]: {
    marginTop: 0,
  },
});

const errorMessageStyle = css({
  color: tokens.color.opaque.red.value.hex,
  display: 'block',
  fontSize: '14px',
  marginTop: tokens.size.space[8].value,
});

const RadioList: React.FC<
  RadioListProps & { innerRef?: React.Ref<any> }
> = props => {
  const {
    children,
    className,
    dataAttributes,
    errorMessage = undefined,
    label,
    name,
    onChange,
    required,
    value,
  } = props;

  const parsedDataAttributes = computeDataAttributes(dataAttributes);

  return (
    <RadioContextProvider
      value={{
        className,
        errorMessage,
        name,
        onChange,
        parsedDataAttributes,
        value,
      }}
    >
      <div css={labelStyle}>
        {label && (
          <Text css={{ marginRight: `${tokens.size.space[16].value}px ` }}>
            {label}
          </Text>
        )}
        {required !== undefined && (
          <Text css={requiredStyle}>{required ? 'required' : 'optional'}</Text>
        )}
        {children}
        {errorMessage && <Text css={errorMessageStyle}>{errorMessage}</Text>}
      </div>
    </RadioContextProvider>
  );
};

export default forwardRef<HTMLInputElement, RadioListProps>((props, ref) => (
  <RadioList {...props} innerRef={ref} />
));
