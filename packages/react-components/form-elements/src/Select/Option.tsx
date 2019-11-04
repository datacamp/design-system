import React, { ReactElement } from 'react';

export interface OptionProps {
  /**
   * The text to display for the option.
   */
  children: string;
  /**
   * When true this individual option will not be selectable.
   */
  disabled?: boolean;
  /**
   * Unique value for the option. If this matches the value of the parent
   * `Select` then this option will be selected.
   */
  value: string;
}

/**
 * Can only be used as a child of `Select`
 */
const Option = ({ children, disabled, value }: OptionProps): ReactElement => (
  <option disabled={disabled} value={value}>
    {children}
  </option>
);

export default Option;
