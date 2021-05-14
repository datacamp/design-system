/* eslint-disable no-alert */
// eslint-disable-next-line filenames/match-exported
import Button from '@datacamp/waffles-button';

function Example(): JSX.Element {
  return (
    <Button
      appearance="default"
      intent="neutral"
      onClick={() => {
        alert('Hello!');
      }}
      tooltipPosition="bottomLeft"
      tooltipText="Click here to see message"
    >
      Show Message
    </Button>
  );
}

export default Example;
