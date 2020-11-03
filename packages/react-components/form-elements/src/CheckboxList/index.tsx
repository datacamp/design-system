import { childrenOfType } from 'airbnb-prop-types';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { ReactElement } from 'react';

import Label from '../Label';

import Checkbox, { CheckboxProps } from './Checkbox';
import CheckboxListContext from './CheckboxListContext';

export interface CheckboxListProps {
  children: Array<ReactElement<CheckboxProps>>;
  /**
   * When provided the description will show underneath the label. Only
   * available when 'label' is also specified.
   */
  description?: string;
  /**
   * Disables the whole CheckboxList when true.
   */
  disabled?: boolean;
  /**
   * When provided the errorMessage will show underneath the CheckboxList.
   */
  errorMessage?: string;
  /**
   * Renders label text above the CheckboxList.
   */
  label: string;
  /**
   * Sets the name attribute on the rendered Checkbox buttons.
   */
  name: string;
  /**
   * Called when the user requests a change to the value of the CheckboxList. This
   * should be used to set the value.
   */
  onChange: (value: string[]) => void;
  /**
   * It defines whether the CheckboxList is required or not. If required=true it
   * adds the text 'Required' on the top-right of the CheckboxList, if
   * required=false it adds 'Optional'. The default value is undefined, which
   * doesn't add anything.
   */
  required?: boolean;
  /**
   * The current value of the CheckboxList. This should be controlled by listening to
   * onChange.
   */
  value: string[];
}

const CheckboxList = ({
  children,
  description,
  disabled = false,
  errorMessage,
  label,
  name,
  onChange,
  required,
  value,
}: CheckboxListProps): ReactElement => {
  const handleChange = React.useCallback(
    (changedValue: string): void => {
      // removes if already exists, adds if it doesn't
      const newValue = _.includes(value, changedValue)
        ? _.filter(value, (item) => item !== changedValue)
        : _.union(value, [changedValue]);

      onChange(newValue);
    },
    [onChange, value],
  );

  return (
    <Label
      as="fieldset"
      description={description}
      errorMessage={errorMessage}
      label={label}
      required={required}
    >
      <div>
        <CheckboxListContext.Provider
          value={{
            disabled,
            hasError: !!errorMessage,
            name,
            onChange: handleChange,
            value,
          }}
        >
          {children}
        </CheckboxListContext.Provider>
      </div>
    </Label>
  );
};

CheckboxList.propTypes = {
  /**
   * Takes multiple `Checkbox` components as children.
   */
  children: PropTypes.arrayOf(childrenOfType(Checkbox).isRequired).isRequired,
};

export default CheckboxList;
