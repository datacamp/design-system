import Button from '@datacamp/waffles-button';
import { AlertDialog, setAppElement } from '@datacamp/waffles-modals';
import { Paragraph } from '@datacamp/waffles-text';
import { storiesOf } from '@storybook/react';
import React, { createElement, useState } from 'react';

setAppElement('#root');

['neutral', 'danger', 'warning', 'success'].forEach(intent => {
  storiesOf('waffles-modals', module).add(`${intent} AlertDialog`, () => {
    return createElement(() => {
      const [isOpen, setIsOpen] = useState('isOpen', true);
      return (
        <>
          <Paragraph>this is some content behind the modal</Paragraph>
          <Paragraph>this is some content behind the modal</Paragraph>
          <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
          <AlertDialog
            description="Are you sure you want to proceed with this action, this can not be undone afterward."
            intent={intent}
            isOpen={isOpen}
            onClose={origin => {
              console.log(origin); // eslint-disable-line no-console
              setIsOpen(false);
            }}
            onConfirm={
              () => alert('confirmed!!') // eslint-disable-line no-alert
            }
            title="You are about to delete an exercise"
          />
        </>
      );
    });
  });
  storiesOf('waffles-modals', module).add(`loading AlertDialog`, () => {
    return createElement(() => {
      const [isOpen, setIsOpen] = useState('isOpen', true);
      return (
        <>
          <Paragraph>this is some content behind the modal</Paragraph>
          <Paragraph>this is some content behind the modal</Paragraph>
          <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
          <AlertDialog
            description="Please wait."
            isOpen={isOpen}
            onClose={origin => {
              console.log(origin); // eslint-disable-line no-console
              setIsOpen(false);
            }}
            onConfirm={
              () => alert('confirmed!!') // eslint-disable-line no-alert
            }
            title="Your content is loading"
            isLoading
          />
        </>
      );
    });
  });
});
