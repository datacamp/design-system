import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { computeDataAttributes } from '@datacamp/waffles-utils';
import { ClassNames, css } from '@emotion/core';
import React, { forwardRef, ReactElement } from 'react';

import {
  baseFormSizes,
  iconSize,
  inputPaddings,
  inputStyle,
  inputWithIconPaddings,
} from '../formStyles';
import Label from '../Label';

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
  description?: string;
  /**
   * It blocks user interaction.
   */
  disabled?: boolean;
  /**
   * It shows an error message under the input field.
   */
  errorMessage?: string;
  /*
   * It renders an icon inside the input field
   */
  icon?: ReactElement;
  /*
   * Sets an unique input id
   */
  id?: string;
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
  /*
   * It defines wheter the input field is required or not. If required=true it adds the text 'required' on the top-right of the input, if required=false it adds 'optional'. The default value is undefined, which doesn't add anything.
   */
  required?: boolean;
  /**
   * Select the size for the input element.
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * The value of the input. This should be controlled by listening to onChange.
   */
  value: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      autocomplete,
      className,
      dataAttributes,
      description,
      disabled = false,
      errorMessage = undefined,
      id,
      icon,
      label,
      maxLength,
      name,
      onBlur,
      onChange,
      placeholder,
      size = 'medium',
      required = undefined,
      value,
    },
    ref
  ) => {
    const parsedDataAttributes = computeDataAttributes(dataAttributes);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void =>
      onChange(event.target.value);

    const handleBlur = (): void => onBlur && onBlur();

    const inputSize = css(baseFormSizes[size], inputPaddings[size]);

    const getInputStyle = css(
      inputSize,
      inputStyle,
      icon && inputWithIconPaddings[size],
      label && css({ width: '100%' })
    );

    const iconStyle = css({
      display: 'inline-block',
      left: tokens.size.space[12].value,
      position: 'absolute',
      top: (baseFormSizes[size].height - iconSize[size]) / 2,
    });

    const iconElement = icon && (
      <div css={{ position: 'relative' }}>
        <ClassNames>
          {({ css: getClassName }) =>
            React.cloneElement(icon, {
              className: getClassName(iconStyle),
              size: iconSize[size],
            })
          }
        </ClassNames>
      </div>
    );

    const inputElement = (
      <>
        {iconElement}
        <input
          ref={ref}
          autoComplete={autocomplete}
          className={className}
          css={getInputStyle}
          disabled={disabled}
          id={id}
          maxLength={maxLength}
          name={name}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={placeholder}
          value={value}
          {...parsedDataAttributes}
        />
      </>
    );

    return (
      <>
        {label ? (
          <Label
            description={description}
            errorMessage={errorMessage}
            id={id}
            label={label}
            required={required}
          >
            {inputElement}
          </Label>
        ) : (
          <>{inputElement}</>
        )}
      </>
    );
  }
);

export default Input;
