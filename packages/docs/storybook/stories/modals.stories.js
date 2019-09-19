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

storiesOf('waffles-modals', module)
  .add(`loading AlertDialog`, () => {
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
            loading
          />
        </>
      );
    });
  })
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
  .add('Dialog with Header & Body', () => {
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
            <Dialog.Header>Dialog with a Body</Dialog.Header>
            <Dialog.Body>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum eu sapien imperdiet, cursus ex at, hendrerit nisl.
                Nulla non gravida libero. Duis quis lacus odio. Suspendisse
                neque turpis, finibus id est non, vehicula vestibulum sapien.
                Mauris pharetra mi eu est aliquet posuere. Aenean ullamcorper,
                mauris euismod molestie suscipit, dolor nisl rutrum quam, eu
                eleifend elit ipsum ac nisl.
              </Paragraph>
            </Dialog.Body>
          </Dialog>
        </>
      );
    });
  })
  .add('Dialog with Header, Body & Footer', () => {
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
            <Dialog.Header>Dialog with a Body and Footer</Dialog.Header>
            <Dialog.Body>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum eu sapien imperdiet, cursus ex at, hendrerit nisl.
                Nulla non gravida libero. Duis quis lacus odio. Suspendisse
                neque turpis, finibus id est non, vehicula vestibulum sapien.
                Mauris pharetra mi eu est aliquet posuere. Aenean ullamcorper,
                mauris euismod molestie suscipit, dolor nisl rutrum quam, eu
                eleifend elit ipsum ac nisl.
              </Paragraph>
            </Dialog.Body>
            <Dialog.Footer>
              <Button appearance="primary" type="submit">
                Button
              </Button>
            </Dialog.Footer>
          </Dialog>
        </>
      );
    });
  })
  .add('Dialog with Header, Body & Footer with two buttons', () => {
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
            <Dialog.Header>Dialog with a Body and Footer</Dialog.Header>
            <Dialog.Body>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum eu sapien imperdiet, cursus ex at, hendrerit nisl.
                Nulla non gravida libero. Duis quis lacus odio. Suspendisse
                neque turpis, finibus id est non, vehicula vestibulum sapien.
                Mauris pharetra mi eu est aliquet posuere. Aenean ullamcorper,
                mauris euismod molestie suscipit, dolor nisl rutrum quam, eu
                eleifend elit ipsum ac nisl.
              </Paragraph>
            </Dialog.Body>
            <Dialog.Footer>
              <Button>Button</Button>
              <Button appearance="primary" type="submit">
                Button
              </Button>
            </Dialog.Footer>
          </Dialog>
        </>
      );
    });
  });
