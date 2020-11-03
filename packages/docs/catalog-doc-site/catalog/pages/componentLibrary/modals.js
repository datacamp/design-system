/* eslint-disable import/no-anonymous-default-export */
import Button, { ButtonGroup } from '@datacamp/waffles-button';
import Card from '@datacamp/waffles-card';
import { AlertDialog, Dialog, Panel } from '@datacamp/waffles-modals';
import modalData from '@datacamp/waffles-modals/componentMetadata.json';
import {
  Code,
  CodeBlock,
  Heading,
  List,
  Paragraph,
  Strong,
} from '@datacamp/waffles-text';
/* @jsx jsx */
import { jsx } from '@emotion/core';
import { Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../components/CustomHeader';
import LazyLiveEditCells from '../../components/LazyLiveEditCells';
import PropTable from '../../components/PropTable';

export default () => {
  return (
    <main>
      <CustomHeader
        description="The modals package"
        section="Component Library"
        subSection="Modals"
      />

      <Page>
        <section className="dc-u-maxw-100pc">
          <Card css={{ padding: 24 }} elevation={2}>
            <Heading as="h3" size={500}>
              Importing
            </Heading>
            <Paragraph>
              Waffles exposes several components from within{' '}
              <Code>@datacamp/waffles-modals</Code>.
            </Paragraph>
            <List>
              <List.Item>
                <Strong>AlertDialog –</Strong> Asks for confirmation before
                performing an action.
              </List.Item>
              <List.Item>
                <Strong>Dialog –</Strong> Enables custom content to be displayed
                in a way that blocks interaction with the rest of the page.
              </List.Item>
              <List.Item>
                <Strong>Panel –</Strong> Enables larger amounts of custom
                content to be displayed in a way that blocks interaction with
                the rest of the page.
              </List.Item>
            </List>
            <Paragraph>
              Before using any of these components, <Code>setAppElement</Code>{' '}
              should be called with the root element of the application. This
              will normally be the same as the element used for rendering react.
            </Paragraph>
            <CodeBlock>
              {
                "import { AlertDialog, Dialog, Panel, setAppElement } from '@datacamp/waffles-modals';\n\nsetAppElement('#root');"
              }
            </CodeBlock>
          </Card>
          <Card css={{ marginTop: 16, padding: 24 }} elevation={2}>
            <Heading as="h3" size={500}>
              AlertDialog Example
            </Heading>
            <LazyLiveEditCells
              code={`() => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>open alert</Button>
      <AlertDialog
        confirmButtonText="Delete"
        cancelButtonText="Cancel"
        intent="danger"
        isOpen={isOpen}
        title="You are about to delete an exercise"
        description="Are you sure you want to proceed with this action, this can not be undone."
        onClose={(origin) => setIsOpen(false)}
        onConfirm={() => setIsOpen(false)}
      />
    </>
  );
};`}
              scope={{ AlertDialog, Button }}
            />
          </Card>

          <Card css={{ marginTop: 16, padding: 24 }} elevation={2}>
            <Heading as="h3" size={500}>
              Dialog Example
            </Heading>
            <LazyLiveEditCells
              code={`() => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>open dialog</Button>
      <Dialog isOpen={isOpen} onClose={origin => setIsOpen(false)} width={600} >
        <Dialog.Header>This is the Title</Dialog.Header>
        <Dialog.Body>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            nec purus ultrices, convallis nisi a, elementum sem. Pellentesque
            varius felis luctus risus interdum, a tristique odio molestie. Sed
            sagittis diam a porttitor porttitor. Sed feugiat quam non felis
            blandit sollicitudin. Duis tempus dolor eget dolor faucibus lobortis.
            Nulla non ipsum id dui ultrices sagittis. Fusce dictum est massa, ac
            cursus nibh ullamcorper sed. Maecenas hendrerit pharetra nibh, ut
            luctus enim posuere ac. Mauris erat libero, tincidunt non purus ac,
            facilisis venenatis ex. Cras luctus posuere leo vitae dictum. Cras
            posuere mattis tortor quis pretium.
          </Paragraph>
        </Dialog.Body>
        <Dialog.Footer>
          <Button onClick={() => setIsOpen(false)}>Cancel</Button>
          <ButtonGroup>
            <Button intent="danger" onClick={() => setIsOpen(false)}>Delete</Button>
            <Button appearance="primary" onClick={() => setIsOpen(false)}>
              Confirm
            </Button>
          </ButtonGroup>
        </Dialog.Footer>
      </Dialog>
    </>
  );
}`}
              scope={{ Button, ButtonGroup, Dialog, Paragraph }}
            />
          </Card>

          <Card css={{ marginTop: 16, padding: 24 }} elevation={2}>
            <Heading as="h3" size={500}>
              Panel Example
            </Heading>
            <LazyLiveEditCells
              code={`() => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>open panel</Button>
      <Panel isOpen={isOpen} onClose={origin => setIsOpen(false)}>
        <Panel.Header>This is the Title</Panel.Header>
        <Panel.Body>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            nec purus ultrices, convallis nisi a, elementum sem. Pellentesque
            varius felis luctus risus interdum, a tristique odio molestie. Sed
            sagittis diam a porttitor porttitor. Sed feugiat quam non felis
            blandit sollicitudin. Duis tempus dolor eget dolor faucibus lobortis.
            Nulla non ipsum id dui ultrices sagittis. Fusce dictum est massa, ac
            cursus nibh ullamcorper sed. Maecenas hendrerit pharetra nibh, ut
            luctus enim posuere ac. Mauris erat libero, tincidunt non purus ac,
            facilisis venenatis ex. Cras luctus posuere leo vitae dictum. Cras
            posuere mattis tortor quis pretium.
          </Paragraph>
        </Panel.Body>
        <Panel.Footer>
          <Button onClick={() => setIsOpen(false)}>Cancel</Button>
          <ButtonGroup>
            <Button intent="danger" onClick={() => setIsOpen(false)}>Delete</Button>
            <Button appearance="primary" onClick={() => setIsOpen(false)}>
              Confirm
            </Button>
          </ButtonGroup>
        </Panel.Footer>
      </Panel>
    </>
  );
}`}
              scope={{ Button, ButtonGroup, Panel, Paragraph }}
            />
          </Card>

          <Heading as="h2" size={600}>
            Properties
          </Heading>

          <PropTable
            componentData={modalData['src/AlertDialog/index.tsx']}
            componentName="AlertDialog"
          />
          <PropTable
            componentData={modalData['src/Dialog/index.tsx']}
            componentName="Dialog"
          />
          <PropTable
            componentData={modalData['src/Panel/index.tsx']}
            componentName="Panel"
          />
          <PropTable
            componentData={modalData['src/shared/Header.tsx']}
            componentName="Dialog.Header / Panel.Header"
          />
          <PropTable
            componentData={modalData['src/shared/Body.tsx']}
            componentName="Dialog.Body / Panel.Body"
          />
          <PropTable
            componentData={modalData['src/shared/Footer.tsx']}
            componentName="Dialog.Footer / Panel.Footer"
          />
        </section>
      </Page>
    </main>
  );
};
