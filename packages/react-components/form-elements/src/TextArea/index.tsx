import { computeDataAttributes } from '@datacamp/waffles-utils';
import { css } from '@emotion/react';
import React, { forwardRef, ReactElement, Ref } from 'react';

import { fontSizes, inputPaddings, inputStyle } from '../formStyles';
import Label from '../Label';

interface TextAreaProps {
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
   * Sets the maxLength attribute on the rendered input.
   */
  maxLength?: number;
  /**
   * The minimum value of the input.
   */
  min?: 'string' | 'number';
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
   * The number of visible lines of text. This contols the height of the
   * TextArea.
   */
  rows?: number;
  /**
   * The current value of the input. This should be controlled by listening to
   * onChange.
   */
  value: string;
}

const InternalTextArea = ({
  autocomplete,
  className,
  dataAttributes,
  description,
  disabled = false,
  errorMessage,
  htmlRequired,
  id,
  innerRef,
  label,
  maxLength,
  name,
  onBlur,
  onChange,
  placeholder,
  required,
  rows = 2,
  value,
}: TextAreaProps & { innerRef?: Ref<HTMLTextAreaElement> }): ReactElement => {
  const parsedDataAttributes = computeDataAttributes(dataAttributes);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void =>
    onChange(event.target.value);

  const handleBlur = (): void => onBlur && onBlur();

  const textAreaStyle = css(
    {
      fontSize: fontSizes.medium,
      paddingBottom: 12,
      paddingTop: 12,
      resize: 'none',
    },
    inputPaddings.medium,
    inputStyle,
    label && css({ width: '100%' }),
  );

  const inputElement = (
    <textarea
      autoComplete={autocomplete}
      className={className}
      css={textAreaStyle}
      disabled={disabled}
      id={id}
      maxLength={maxLength}
      name={name}
      onBlur={handleBlur}
      onChange={handleChange}
      placeholder={placeholder}
      ref={innerRef}
      required={htmlRequired}
      rows={rows}
      value={value}
      {...parsedDataAttributes}
    />
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

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => <InternalTextArea innerRef={ref} {...props} />,
);

export default TextArea;
