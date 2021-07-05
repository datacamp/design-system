import Button, { ButtonGroup } from '@datacamp/waffles-button';
import { toast, ToastContainer } from '@datacamp/waffles-toast';
import { Fragment } from 'react';

import { PlaygroundConfig } from '../../types';

const initialCode = `
import Button, { ButtonGroup } from '@datacamp/button';
import { toast, ToastContainer } from '@datacamp/waffles-toast';
import { Fragment } from 'react';

function Playground(): JSX.Element {
  return (
    <Fragment>
      <ToastContainer />
      <ButtonGroup>
        <Button
          onClick={() =>
            toast({ intent: 'success', title: 'Success Toast Title' })
          }
        >
          Open Success Toast
        </Button>
        <Button
          onClick={() =>
            toast({
              description: 'Ooops, something went wrong.',
              intent: 'error',
              title: 'Error Toast Title',
            })
          }
        >
          Open Error Toast
        </Button>
        <Button
          onClick={() =>
            toast({
              description:
                'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
              intent: 'success',
              title:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            })
          }
        >
          Open Very Long Toast
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
