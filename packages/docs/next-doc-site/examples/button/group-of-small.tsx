import Button, { ButtonGroup } from '@datacamp/waffles-button';
import { TrashIcon } from '@datacamp/waffles-icons';

function Example(): JSX.Element {
  return (
    <ButtonGroup>
      <Button appearance="primary" intent="success" size="small" type="submit">
        Submit
      </Button>
      <Button onClick={() => alert('Alert!')} size="small">
        open alert
      </Button>
      <Button
        ariaLabel="Delete"
        intent="danger"
        onClick={() => alert('Delete!')}
        size="small"
      >
        <TrashIcon />
      </Button>
    </ButtonGroup>
  );
}

export default Example;
