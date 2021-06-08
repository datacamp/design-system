import { UserAccountMenu } from '@datacamp/waffles-button';
import tokens from '@datacamp/waffles-tokens';

function Example(): JSX.Element {
  return (
    <header
      css={{
        alignItems: 'center',
        backgroundColor: tokens.colors.white,
        display: 'flex',
        height: 54,
        justifyContent: 'flex-end',
        paddingLeft: 24,
        paddingRight: 24,
        width: '100%',
      }}
    >
      <UserAccountMenu mainAppUrl="https://www.datacamp.com" />
    </header>
  );
}

export default Example;
