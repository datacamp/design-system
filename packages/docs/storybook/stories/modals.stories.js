import Button from '@datacamp/waffles-button';
import { AlertDialog, Dialog, setAppElement } from '@datacamp/waffles-modals';
import { Heading, Paragraph } from '@datacamp/waffles-text';
import { storiesOf } from '@storybook/react';
import React, { createElement, useState } from 'react';

setAppElement('#root');

['neutral', 'danger', 'warning', 'success'].forEach(intent => {
  storiesOf('waffles-modals', module).add(`${intent} AlertDialog`, () => {
    return createElement(() => {
      const [isOpen, setIsOpen] = useState(true);
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
});

storiesOf('waffles-modals', module).add(`loading AlertDialog`, () => {
  return createElement(() => {
    const [isOpen, setIsOpen] = useState(true);
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

storiesOf('waffles-modals', module)
  .add('free children Dialog', () => {
    return createElement(() => {
      const [isOpen, setIsOpen] = useState(true);
      return (
        <>
          <Paragraph>this is some content behind the modal</Paragraph>
          <Paragraph>this is some content behind the modal</Paragraph>
          <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
          <Dialog
            isOpen={isOpen}
            onClose={origin => {
              console.log(origin); // eslint-disable-line no-console
              setIsOpen(false);
            }}
          >
            <Heading as="h1" size={300}>
              custom content
            </Heading>
            <Paragraph>
              This is just some content, it will should wrap if it gets too
              long, but also it will be covered by the close button. It is up to
              the consumer to define their content appropriately.
            </Paragraph>
          </Dialog>
        </>
      );
    });
  })
  .add('free children Dialog with Header', () => {
    return createElement(() => {
      const [isOpen, setIsOpen] = useState(true);
      return (
        <>
          <Paragraph>this is some content behind the modal</Paragraph>
          <Paragraph>this is some content behind the modal</Paragraph>
          <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
          <Dialog
            isOpen={isOpen}
            onClose={origin => {
              console.log(origin); // eslint-disable-line no-console
              setIsOpen(false);
            }}
            width="600px"
          >
            <Dialog.Header>
              With a very long title that should truncate and be spaced
              correctly
            </Dialog.Header>
            <div>
              <Paragraph>
                This is just some content, it will should wrap if it gets too
                long, but also it will stretch. It is up to the consumer to
                define their content appropriately.
              </Paragraph>
            </div>
          </Dialog>
        </>
      );
    });
  });
