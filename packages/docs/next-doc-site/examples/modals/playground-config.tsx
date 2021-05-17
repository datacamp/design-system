// eslint-disable-next-line filenames/match-exported
import Button, { ButtonGroup } from '@datacamp/waffles-button';
import { Dialog } from '@datacamp/waffles-modals';
import { Paragraph } from '@datacamp/waffles-text';
import { Fragment, useState } from 'react';

import { PlaygroundConfig } from '../../types';

const initialCode = `
import Button, { ButtonGroup } from '@datacamp/waffles-button';
import { Dialog } from '@datacamp/waffles-modals';
import { Paragraph } from '@datacamp/waffles-text';
import { Fragment, useState } from 'react';

function Playground(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <Button onClick={() => setIsOpen(true)}>open dialog</Button>
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)} width={600}>
        <Dialog.Header>This is the Title</Dialog.Header>
        <Dialog.Body>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque nec purus ultrices, convallis nisi a, elementum sem.
            Pellentesque varius felis luctus risus interdum, a tristique odio
            molestie. Sed sagittis diam a porttitor porttitor. Sed feugiat quam
            non felis blandit sollicitudin.
          </Paragraph>
        </Dialog.Body>
        <Dialog.Footer>
          <Button onClick={() => setIsOpen(false)}>Cancel</Button>
          <ButtonGroup>
            <Button intent="danger" onClick={() => setIsOpen(false)}>
              Delete
            </Button>
            <Button appearance="primary" onClick={() => setIsOpen(false)}>
              Confirm
            </Button>
          </ButtonGroup>
        </Dialog.Footer>
      </Dialog>
    </Fragment>
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    Button,
    ButtonGroup,
    Dialog,
    Fragment,
    Paragraph,
    useState,
  },
};

export default playgroundConfig;
