import React from 'react';

export interface RadioContextInterface {
  className?: string;
  label?: string;
  name: string;
  onChange: (value: string) => void;
  parsedDataAttributes: { [key: string]: string };
  value: string;
}
const RadioContext = React.createContext<RadioContextInterface | null>(null);

export const RadioContextProvider = RadioContext.Provider;
export const RadioContextConsumer = RadioContext.Consumer;
export default RadioContext;
