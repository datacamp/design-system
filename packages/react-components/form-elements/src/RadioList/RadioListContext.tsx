import React from 'react';

export interface RadioContextInterface {
  disabled?: boolean;
  hasError: boolean;
  name: string;
  onChange: (value: string) => void;
  value: string;
}

const RadioContext = React.createContext<RadioContextInterface | null>(null);

export default RadioContext;
