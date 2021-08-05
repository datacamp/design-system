import { HiddenIcon, VisibleIcon } from '@datacamp/waffles-icons';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import { computeDataAttributes } from '@datacamp/waffles-utils';
import { ClassNames, css } from '@emotion/react';
import React, { forwardRef, ReactElement, Ref } from 'react';

import {
  fontSizes,
  heights,
  iconSize,
  inputPaddings,
  inputStyle,
  inputWithIconPaddings,
} from '../formStyles';
import Label from '../Label';

interface InputProps {
  /**
   * Sets the autocomplete attribute on the rendered input element.
   */
  autocomplete?: string;
  /**
   * Sets the css className on the rendered element. Can be used to add custom
   * styling.
   */
  className?: string;
  /**
   * An object who's keys will be prepended with 'data-', and values will be
   * used as attributes on the rendered element.
   */
  dataAttributes?: { [key: string]: string };
  /**
   * When provided the description will show underneath the label. Only
   * available when 'label' is also specified.
   */
  description?: string;
  /**
   * Disables the input when true.
   */
  disabled?: boolean;
  /**
   * When provided the errorMessage will show underneath the input. Only
   * available when label is also specified.
   */
  errorMessage?: string;
  /**
   * Sets the html attribute "required". Has no visual impact. Use the
   * "required" prop to set visuals if required.
   */
  htmlRequired?: boolean;
  /**
   * When an icon is provided it will render inside the input. This can only be
   * an component from the @datacamp/waffles-icons package.
   */
  icon?: ReactElement;
  /**
   * Sets the html id on the rendered input element.
   */
  id?: string;
  /**
   * Renders label text above the input. If this is not provided the input will
   * render inline. When a label is provided many other props are also available
   * and this component becomes a block that can be stacked with other form
   * elements.
   */
  label?: string;
  /**
   * The maximum value of the input.
   */
  max?: string | number;
  /**
   * Sets the maxLength attribute on the rendered input.
   */
  maxLength?: number;
  /**
   * The minimum value of the input.
   */
  min?: string | number;
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
   * Called when the user focuses the input
   */
  onFocus?: () => void;
  /**
   * The placeholder text to render before the user has entered a value.
   */
  placeholder?: string;
  /**
   * It defines wheter the input field is required or not. If required=true it
   * adds the text 'Required' on the top-right of the input, if required=false
   * it adds 'Optional'. The default value is undefined, which doesn't add
   * anything. This is only available when 'label' is also provided.
   */
  required?: boolean;
  /**
   * The size of the input element.
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * The step size for a number input.
   */
  step?: string | number;
  /**
   * The type of input to render. This corresponds to a set of html input types.
   */
  type?:
    | 'text'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'month'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'time'
    | 'url'
    | 'week';

  /**
   * The current value of the input. This should be controlled by listening to
   * onChange.
   */
  value: string;
}

const InternalInput = ({
  autocomplete,
  className,
  dataAttributes,
  description,
  disabled = false,
  errorMessage,
  htmlRequired,
  icon,
  id,
  innerRef,
  label,
  max,
  maxLength,
  min,
  name,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  required,
  size = 'medium',
  step,
  type = 'text',
  value,
}: InputProps & { innerRef?: Ref<HTMLInputElement> }): ReactElement => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const togglePasswordVisibility = React.useCallback(
    () => setPasswordVisible(!passwordVisible),
    [passwordVisible],
  );

  const parsedDataAttributes = computeDataAttributes(dataAttributes);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void =>
    onChange(event.target.value);

  const handleBlur = (): void => onBlur && onBlur();
  const handleFocus = (): void => onFocus && onFocus();

  const inputSize = css(
    { fontSize: fontSizes[size], height: heights[size] },
    inputPaddings[size],
  );

  const getInputStyle = css(
    inputSize,
    inputStyle,
    icon && inputWithIconPaddings[size],
    label && css({ width: '100%' }),
  );

  const iconStyle = css({
    display: 'inline-block',
    left: tokens.size.space[12].value,
    position: 'absolute',
    top: (heights[size] - iconSize[size]) / 2,
  });

  const iconElement = icon && (
    <div css={{ position: 'relative' }}>
      <ClassNames>
        {({ css: getClassName }) =>
          React.cloneElement(icon, {
            className: getClassName(iconStyle),
            size: 'medium',
          })
        }
      </ClassNames>
    </div>
  );

  const showHidePasswordElement = type === 'password' && (
    <button
      aria-label={`${passwordVisible ? 'Hide' : 'Show'} Password`}
      css={{
        '&:active, &:focus, &:hover': {
          opacity: 1,
          outline: 0,
        },
        background: 'transparent',
        border: 0,
        color: tokens.color.primary.navyText.value.hex,
        display: 'block',
        opacity: 0.5,
        position: 'absolute',
        right: 12,
        top: 11,
      }}
      onClick={togglePasswordVisibility}
      type="button"
    >
      <i aria-hidden="true">
        {passwordVisible ? (
          <HiddenIcon size="medium" />
        ) : (
          <VisibleIcon size="medium" />
        )}
      </i>
    </button>
  );

  const inputElement = (
    <div
      css={{ display: label ? 'block' : 'inline-block', position: 'relative' }}
    >
      {iconElement}
      <input
        autoComplete={autocomplete}
        className={className}
        css={getInputStyle}
        disabled={disabled}
        id={id}
        max={max}
        maxLength={maxLength}
        min={min}
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        placeholder={placeholder}
        ref={innerRef}
        required={htmlRequired}
        step={step}
        type={type === 'password' && passwordVisible ? 'input' : type}
        value={value}
        {...parsedDataAttributes}
      />
      {showHidePasswordElement}
    </div>
  );

  return (
    <>
      {label ? (
        <Label
          description={description}
          errorMessage={errorMessage}
          htmlFor={id}
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
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <InternalInput innerRef={ref} {...props} />
));

export default Input;
