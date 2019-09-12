import { Heading } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens/lib/future-tokens.json';
import React from 'react';

export interface HeaderProps {
  children: string;
}

const Header = ({ children }: HeaderProps): React.ReactElement => (
  <header
    css={{
      paddingBottom: tokens.size.space[24].value,
      paddingLeft: tokens.size.space[32].value,
      paddingRight: tokens.size.space[32].value,
      paddingTop: tokens.size.space[32].value,
    }}
  >
    <Heading as="h1" size={600}>
      {children}
    </Heading>
  </header>
);

export default Header;
