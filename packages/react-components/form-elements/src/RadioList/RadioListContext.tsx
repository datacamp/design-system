import React from 'react';

export interface RadioListContextInterface {
  disabled: boolean;
  hasError: boolean;
  name: string;
  onChange: (value: string) => void;
  value: string;
}

const RadioListContext = React.createContext<RadioListContextInterface | null>(
  null,
);

export default RadioListContext;
