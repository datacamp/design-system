import { DatacampLogo } from '@datacamp/waffles-asset-components';
import tokens from '@datacamp/waffles-tokens';

function Example(): JSX.Element {
  return (
    <DatacampLogo
      height={40}
      logomarkColor={tokens.colors.green}
      showWordmark
      wordmarkColor={tokens.colors.navyDark}
    />
  );
}

export default Example;
