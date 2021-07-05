import Button, { ButtonGroup } from '@datacamp/waffles-button';
import { Toast, toast, ToastContainer } from '@datacamp/waffles-toast';
import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('waffles-toast', module)
  .add('static Toasts', () => (
    <div
      css={{
        '> div': { marginTop: 16 },
        height: '100%',
        overflow: 'scroll',
        paddingRight: 10,
        position: 'fixed',
      }}
    >
      <Toast closeToast={() => {}} intent="success" title="Toast title" />
      <Toast closeToast={() => {}} intent="error" title="Toast title" />
      <Toast
        closeToast={() => {}}
        intent="success"
        title="Very long title text that needs to wrap since it goes over 512 pixels in total width"
      />
      <Toast
        closeToast={() => {}}
        intent="error"
        title="Very long title text that needs to wrap since it goes over 512 pixels in total width"
      />
      <Toast
        closeToast={() => {}}
        description="Very description text that needs to wrap since it goes over 512 pixels in total width"
        intent="success"
        title="Very long title text that needs to wrap since it goes over 512 pixels in total width"
      />
      <Toast
        closeToast={() => {}}
        description="Very description text that needs to wrap since it goes over 512 pixels in total width"
        intent="error"
        title="Very long title text that needs to wrap since it goes over 512 pixels in total width"
      />
    </div>
  ))
  .add('dynamic Toasts', () => (
    <>
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
    </>
  ));
