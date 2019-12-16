import Button, { ButtonGroup } from '@datacamp/waffles-button';
import Card from '@datacamp/waffles-card';
import {
  Code,
  CodeBlock,
  Heading,
  Link,
  Paragraph,
} from '@datacamp/waffles-text';
import { toast, ToastContainer } from '@datacamp/waffles-toast';
import ToastData from '@datacamp/waffles-toast/componentMetadata.json';
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
        description="The toast component"
        section="Component Library"
        subSection="Toast"
      />

      <Page>
        <section className="dc-u-maxw-100pc">
          <Card css={{ padding: 24 }} elevation={2}>
            <Heading as="h3" size={500}>
              Importing
            </Heading>
            <Paragraph>
              Waffles exposes the <Code>ToastContainer</Code> component and a{' '}
              <Code>toast</Code> function from within{' '}
              <Code>@datacamp/waffles-toast</Code>.
            </Paragraph>
            <CodeBlock>
              {`import { toast, ToastContainer } from '@datacamp/waffles-toast';`}
            </CodeBlock>
            <Paragraph>
              The <Code>ToastContainer</Code> component must be mounted on the
              page for toasts to display correctly. Calling the toast function
              will display the requested content for a short period of time
              before automatically closing.
            </Paragraph>
            <Paragraph>
              This is powered by{' '}
              <Link href="https://github.com/fkhadra/react-toastify">
                react-toastify
              </Link>
              . The <Code>ToastContainer</Code> component, and{' '}
              <Code>toast</Code> function accept all the options of the
              underlying library, however sensible defaults have been provided
              to ensure it functions as intended in the design system. There is
              no guarantee that all the options will correctly function as they
              may not interact with the waffles defaults as intended.
            </Paragraph>
          </Card>

          <Card css={{ marginTop: 16, padding: 24 }} elevation={2}>
            <Heading as="h3" size={500}>
              Example
            </Heading>
            <Paragraph>
              This example highlights how a <Code>Card</Code> can be used to
              display content in its own section.
            </Paragraph>
            <LazyLiveEditCells
              code={`<>
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
</>`}
              scope={{ Button, ButtonGroup, ToastContainer, toast }}
            />
          </Card>
          <Heading as="h3" size={500}>
            Arguments
          </Heading>
          <PropTable
            componentData={ToastData['src/Toast.tsx'][0]}
            componentName="toast"
          />
        </section>
      </Page>
    </main>
  );
};
