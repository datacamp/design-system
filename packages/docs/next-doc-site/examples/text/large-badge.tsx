// eslint-disable-next-line filenames/match-exported
import { Badge } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens';

function Example(): JSX.Element {
  return (
    <Badge color={tokens.colors.purple} size="large">
      Large badge
    </Badge>
  );
}

export default Example;
