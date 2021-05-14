// eslint-disable-next-line filenames/match-exported
import Button from '@datacamp/waffles-button';

function Example(): JSX.Element {
  return (
    <Button
      appearance="primary"
      href="https://datacamp.com"
      intent="neutral"
      type="link"
    >
      Open Link
    </Button>
  );
}

export default Example;
