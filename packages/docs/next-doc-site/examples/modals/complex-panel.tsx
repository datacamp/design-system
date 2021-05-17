// eslint-disable-next-line filenames/match-exported
import Button, { ButtonGroup } from '@datacamp/waffles-button';
import { Panel } from '@datacamp/waffles-modals';
import { Paragraph } from '@datacamp/waffles-text';
import { Fragment, useState } from 'react';

function Example(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <Button onClick={() => setIsOpen(true)}>open panel</Button>
      <Panel isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Panel.Header>This is the Title</Panel.Header>
        <Panel.Body>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque nec purus ultrices, convallis nisi a, elementum sem.
            Pellentesque varius felis luctus risus interdum, a tristique odio
            molestie. Sed sagittis diam a porttitor porttitor. Sed feugiat quam
            non felis blandit sollicitudin.
          </Paragraph>
        </Panel.Body>
        <Panel.Footer>
          <Button onClick={() => setIsOpen(false)}>Cancel</Button>
          <ButtonGroup>
            <Button intent="danger" onClick={() => setIsOpen(false)}>
              Delete
            </Button>
            <Button appearance="primary" onClick={() => setIsOpen(false)}>
              Confirm
            </Button>
          </ButtonGroup>
        </Panel.Footer>
      </Panel>
    </Fragment>
  );
}

export default Example;
