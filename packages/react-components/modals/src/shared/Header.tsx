import { Heading } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens';
import React from 'react';

export interface HeaderProps {
  /**
   * The title of the Dialog.
   */
  children: React.ReactNode;
}

const Header = ({ children }: HeaderProps): JSX.Element => (
  <header
    css={{
      flex: 'none',
      paddingBottom: tokens.spacing.medium,
      paddingLeft: tokens.spacing.large,
      paddingRight: tokens.spacing.large,
      paddingTop: tokens.spacing.large,
    }}
  >
    <Heading as="h2" size={650}>
      {children}
    </Heading>
  </header>
);

export default Header;
