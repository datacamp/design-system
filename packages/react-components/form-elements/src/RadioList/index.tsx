import { childrenOfType } from 'airbnb-prop-types';
import PropTypes from 'prop-types';
import React, { ReactElement } from 'react';

import Label from '../Label';
import Radio, { RadioProps } from './Radio';
import RadioListContext from './RadioListContext';

export interface RadioListProps {
  children: ReactElement<RadioProps>[];
  /**
   * It disables the whole component
   */
  disabled?: boolean;
  /**
   * It shows an error message under the radio group.
   */
  errorMessage?: string;
  /**
   * It sets a label next to the radio button
   */
  label: string;
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

const RadioList: React.FC<RadioListProps> = props => {
  const {
    children,
    disabled = false,
    errorMessage = undefined,
    label,
    name,
    onChange,
    required,
    value,
  } = props;

  return (
    <Label
      as="div"
      errorMessage={errorMessage}
      label={label}
      required={required}
    >
      <div>
        <RadioListContext.Provider
          value={{
            disabled,
            hasError: !!errorMessage,
            name,
            onChange,
            value,
          }}
        >
          {children}
        </RadioListContext.Provider>
      </div>
    </Label>
  );
};

RadioList.propTypes = {
  children: PropTypes.arrayOf(childrenOfType(Radio).isRequired).isRequired,
} as React.WeakValidationMap<RadioListProps>;

export default RadioList;
