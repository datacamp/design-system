import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { computeDataAttributes } from '@datacamp/waffles-utils';
import { css } from '@emotion/core';
import React, { forwardRef } from 'react';

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
   * The value of the input. This should be controlled by listening to onChange.
   */
  value: string;
}

const inputStyle = css({
  '::placeholder': {
    color: tokens.color.opaque.primary.value.rgb,
  },
  ':focus': {
    boxShadow: `0 0 0 1px ${tokens.color.opaque.primary.value.rgb}`,
    outline: 'none',
  },
  background: tokens.color.opaque.primaryLightest.value.rgb,
  border: 0,
  borderRadius: tokens.radii.small.value,
  color: tokens.color.opaque.greyDark.value.rgb,
  display: 'inline-block',
  fontFamily: 'Lato',
  fontSize: 15,
  height: 20,
  margin: 0,
  padding: 14,
  verticalAlign: 'middle',
  whiteSpace: 'normal',
});

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      autocomplete,
      className,
      dataAttributes,
      maxLength,
      name,
      onBlur,
      onChange,
      placeholder,
      value,
    },
    ref
  ) => {
    const parsedDataAttributes = computeDataAttributes(dataAttributes);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void =>
      onChange(event.target.value);

    const handleBlur = (): void => onBlur && onBlur();

    return (
      <input
        ref={ref}
        autoComplete={autocomplete}
        className={className}
        css={inputStyle}
        maxLength={maxLength}
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
        {...parsedDataAttributes}
      />
    );
  }
);

export default Input;
