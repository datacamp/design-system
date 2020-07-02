import React from 'react';

export interface CheckboxContextInterface {
  disabled: boolean;
  hasError: boolean;
  name: string;
  onChange: (value: string) => void;
  value: string[];
}

const CheckboxContext = React.createContext<CheckboxContextInterface | null>(
  null,
);

export default CheckboxContext;
