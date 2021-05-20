import Button, { ButtonGroup } from '@datacamp/waffles-button';
import { toast, ToastContainer } from '@datacamp/waffles-toast';
import { Fragment } from 'react';

import { PlaygroundConfig } from '../../types';

const initialCode = `
import { toast, ToastContainer } from '@datacamp/waffles-toast';
import Button, { ButtonGroup } from '@datacamp/button';
import { Fragment } from 'react';

function Playground(): JSX.Element {
  return (
    <Fragment>
      <ToastContainer />
      <ButtonGroup>
        <Button
          onClick={() =>
            toast({ intent: 'success', title: 'Some toast content' })
          }
        >
          Open Success Toast
        </Button>
        <Button
          onClick={() =>
            toast({ intent: 'error', title: 'Some toast content' })
          }
        >
          Open Error Toast
        </Button>
      </ButtonGroup>
    </Fragment>
  );
}
`;

const playgroundConfig: PlaygroundConfig = {
  initialCode,
  scope: {
    Button,
    ButtonGroup,
    Fragment,
    toast,
    ToastContainer,
  },
};

export default playgroundConfig;
