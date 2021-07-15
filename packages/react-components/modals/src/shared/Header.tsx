import { Heading } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens';

export interface HeaderProps {
  /**
   * The title of the Dialog.
   */
  children: string;
}

const Header = ({ children }: HeaderProps): JSX.Element => (
  <header
    css={{
      flex: 'none',
      paddingBottom: tokens.spacing.small,
      paddingLeft: tokens.spacing.medium,
      paddingRight: tokens.spacing.medium,
      paddingTop: tokens.spacing.medium,
    }}
  >
    <Heading as="h1" size={700}>
      {children}
    </Heading>
  </header>
);

export default Header;
