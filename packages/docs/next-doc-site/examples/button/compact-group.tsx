/* eslint-disable no-alert */
// eslint-disable-next-line filenames/match-exported
import Button, { CompactButtonGroup } from '@datacamp/waffles-button';
import { ChevronDownIcon } from '@datacamp/waffles-icons';

function Example(): JSX.Element {
  return (
    <CompactButtonGroup>
      <Button
        appearance="primary"
        intent="success"
        onClick={() => alert('Saving!')}
      >
        Save Progress
      </Button>
      <Button
        appearance="primary"
        ariaLabel="Save options"
        intent="success"
        onClick={() => alert('Dropdown clicked')}
      >
        <ChevronDownIcon />
      </Button>
    </CompactButtonGroup>
  );
}

export default Example;
