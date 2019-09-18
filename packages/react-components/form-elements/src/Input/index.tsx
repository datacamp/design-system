import { Text } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import {
  computeDataAttributes,
  ssrSafeFirstChildSelector,
} from '@datacamp/waffles-utils';
import { css } from '@emotion/core';
import React, { forwardRef } from 'react';

import { inputSizes, inputStyle } from './inputStyle';

interface InputProps {
  /**
   * Corresponds to the html autocomplete types.
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
   */
  autocomplete?: string;
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
   * It blocks user interaction.
   */
  disabled?: boolean;
  /**
   * It sets a label above the input
   */
  label?: string;
  /**
   * The maximum number of characters permitted in the input.
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text#maxlength
   */
  maxLength?: number;
  /**
   * Used to set the html name attribute. Uniquely indentifies the input within
   * the current form context.
   */
  name: string;
  /**
   * Called when the user removes focus from the input.
   */
  onBlur?: () => void;
  /**
   * Called when the user requests a change to the value of the input. This
   * should be used to set the value.
   */
  onChange: (value: string) => void;
  /**
   * The placeholder text to render before the user has entered a value.
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text#placeholder
   */
  placeholder?: string;
  /**
   * Select the size for the input element.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The value of the input. This should be controlled by listening to onChange.
   */
  value: string;
}

const labelStyle = css({
  display: 'block',

  marginTop: tokens.size.space[16].value,
  [ssrSafeFirstChildSelector]: {
    marginTop: 0,
  },
});

const textStyle = css({
  display: 'block',
  fontWeight: 'bold',
  marginBottom: tokens.size.space[12].value,
});

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      autocomplete,
      className,
      dataAttributes,
      disabled = false,
      label,
      maxLength,
      name,
      onBlur,
      onChange,
      placeholder,
      size = 'medium',
      value,
    },
    ref
  ) => {
    const parsedDataAttributes = computeDataAttributes(dataAttributes);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void =>
      onChange(event.target.value);

    const handleBlur = (): void => onBlur && onBlur();

    const getInputStyle = css(
      inputSizes[size],
      inputStyle,
      label && css({ width: '100%' })
    );

    const inputElement = (
      <input
        ref={ref}
        autoComplete={autocomplete}
        className={className}
        css={getInputStyle}
        disabled={disabled}
        id={name}
        maxLength={maxLength}
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
        {...parsedDataAttributes}
      />
    );

    return (
      <>
        {label ? (
          // eslint-disable-next-line jsx-a11y/label-has-for
          <label css={labelStyle} htmlFor={name}>
            <Text css={textStyle}>{label}</Text>
            {inputElement}
          </label>
        ) : (
          <>{inputElement}</>
        )}
      </>
    );
  }
);

export default Input;
