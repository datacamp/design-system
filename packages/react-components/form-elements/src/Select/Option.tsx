import React from 'react';

export interface OptionProps {
  children: string;
  /**
   * It blocks user interaction.
   */
  disabled?: boolean;
  /**
   * The value of the option.
   */
  value: string;
}

const Option: React.FC<OptionProps> = ({ children, disabled, value }) => (
  <option disabled={disabled} value={value}>
    {children}
  </option>
);

export default Option;
