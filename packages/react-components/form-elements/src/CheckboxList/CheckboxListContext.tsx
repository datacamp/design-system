import React from 'react';

export interface CheckboxListContextInterface {
  disabled: boolean;
  hasError: boolean;
  name: string;
  onChange: (value: string) => void;
  value: string[];
}

const CheckboxListContext = React.createContext<CheckboxListContextInterface | null>(
  null,
);

export default CheckboxListContext;
