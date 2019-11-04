import { childrenOfType } from 'airbnb-prop-types';
import PropTypes from 'prop-types';
import React, { ReactElement } from 'react';

import Label from '../Label';
import Radio, { RadioProps } from './Radio';
import RadioListContext from './RadioListContext';

export interface RadioListProps {
  children: ReactElement<RadioProps>[];
  /**
   * When provided the description will show underneath the label. Only
   * available when 'label' is also specified.
   */
  description?: string;
  /**
   * Disables the whole RadioList when true.
   */
  disabled?: boolean;
  /**
   * When provided the errorMessage will show underneath the RadioList.
   */
  errorMessage?: string;
  /**
   * Renders label text above the RadioList.
   */
  label: string;
  /**
   * Sets the name attribute on the rendered Radio buttons.
   */
  name: string;
  /**
   * Called when the user requests a change to the value of the RadioList. This
   * should be used to set the value.
   */
  onChange: (value: string) => void;
  /**
   * It defines whether the RadioList is required or not. If required=true it
   * adds the text 'Required' on the top-right of the RadioList, if
   * required=false it adds 'Optional'. The default value is undefined, which
   * doesn't add anything.
   */
  required?: boolean;
  /**
   * The current value of the RadioList. This should be controlled by listening to
   * onChange.
   */
  value: string;
}

const RadioList = ({
  children,
  description,
  disabled = false,
  errorMessage,
  label,
  name,
  onChange,
  required,
  value,
}: RadioListProps): ReactElement => (
  <Label
    as="div"
    description={description}
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

RadioList.propTypes = {
  /**
   * Takes multiple `Radio` components as children.
   */
  children: PropTypes.arrayOf(childrenOfType(Radio).isRequired).isRequired,
};

export default RadioList;
