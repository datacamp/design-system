import Button, { ButtonGroup } from '@datacamp/waffles-button';
import { TrashIcon } from '@datacamp/waffles-icons';

import { PlaygroundConfig } from '../../types';

const initialCode = `
import Button, { ButtonGroup } from '@datacamp/waffles-button';
import { TrashIcon } from '@datacamp/waffles-icons';

function Playground(): JSX.Element {
  return (
    <ButtonGroup>
      <Button
        type="submit"
        appearance="primary"
        intent="success"
        tooltipText="Submit your answer"
        tooltipPosition="bottomLeft"
      >
        Submit
      </Button>
      <Button
        onClick={() => alert("Alert!")}
        tooltipText="Click here to see an alert"
      >
        open alert
      </Button>
      <Button
        intent="danger"
        onClick={() => alert("Delete!")}
        ariaLabel="Delete"
      >
        <TrashIcon />
      </Button>
      <Button
        type="link"
        appearance="primary"
        intent="b2b"
        href="https://datacamp.com"
      >
        Open Link
      </Button>
    </ButtonGroup>
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    Button,
    ButtonGroup,
    TrashIcon,
  },
};

export default playgroundConfig;
