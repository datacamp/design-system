import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import React from 'react';

export interface BodyProps {
  children: React.ReactNode;
}

const Body = ({ children }: BodyProps): React.ReactElement => (
  <div
    css={{
      paddingBottom: tokens.size.space[32].value,
      paddingLeft: tokens.size.space[32].value,
      paddingRight: tokens.size.space[32].value,
    }}
  >
    {children}
  </div>
);

export default Body;
