import Button, {
  ButtonGroup,
  CompactButtonGroup,
} from '@datacamp/waffles-button';
import ButtonData from '@datacamp/waffles-button/componentMetadata.json';
import Card from '@datacamp/waffles-card';
import * as Icons from '@datacamp/waffles-icons';
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

const liveEditScope = { Button, ButtonGroup, CompactButtonGroup, ...Icons };

export default () => {
  return (
    <main>
      <CustomHeader
        description="The button component"
        section="Component Library"
        subSection="Button"
      />
      <Page>
        <section className="dc-u-maxw-100pc">
          <Card css={{ padding: 24 }} elevation={2}>
            <Heading as="h3" size={500}>
              Importing
            </Heading>
            <Paragraph>
              Waffles exposes several components from within{' '}
              <Code>@datacamp/waffles-button</Code>.
            </Paragraph>
            <List>
              <List.Item>
                <Strong>Button –</Strong> Able to have an icon on the left or
                right.
              </List.Item>
              <List.Item>
                <Strong>ButtonGroup –</Strong> Enables you to layout several
                buttons of the same size with consistent spacing.
              </List.Item>
              <List.Item>
                <Strong>CompactButtonGroup –</Strong> Enables you to concatenate
                multiple buttons into one. It can also be nested inside a{' '}
                <Code>ButtonGroup</Code>.
              </List.Item>
            </List>
            <CodeBlock>
              {
                "import Button, { ButtonGroup, CompactButtonGroup } from '@datacamp/waffles-button';"
              }
            </CodeBlock>
          </Card>

          <Card css={{ marginTop: 16, padding: 24 }} elevation={2}>
            <Heading as="h3" size={500}>
              Basic Example
            </Heading>
            <Paragraph>
              This example highlights how <Code>type</Code> can be used to alter
              how interactions are handled. It also showcases various
              appearances, intents and the usage of icons.
            </Paragraph>
            <LazyLiveEditCells
              code={`<ButtonGroup>
  <Button
    type="submit"
    appearance="primary"
    intent="success"
    tooltipText="Submit your answer"
    tooltipPosition="bottomLeft"
  >
    Submit
  </Button>
  <Button
    onClick={() => alert("Alert!")}
    tooltipText="Click here to see an alert"
  >
    open alert
  </Button>
  <Button
    intent="danger"
    onClick={() => alert("Delete!")}
    ariaLabel="Delete"
  >
    <TrashIcon />
  </Button>
  <Button
    type="link"
    appearance="primary"
    intent="b2b"
    href="https://datacamp.com"
  >
    Open Link
  </Button>
</ButtonGroup>`}
              scope={liveEditScope}
            />
          </Card>
          <Card css={{ marginTop: 16, padding: 24 }} elevation={2}>
            <Heading as="h3" size={500}>
              Complex Examples
            </Heading>
            <Paragraph>
              This example highlights how <Code>ButtonGroup</Code> and{' '}
              <Code>CompactButtonGroup</Code> aggregate multiple buttons as long
              as they have the same <Code>size</Code>.
            </Paragraph>
            <LazyLiveEditCells
              code={`<ButtonGroup>
  <Button onClick={() => alert("Cancelling!")}>
    <CrossIcon />
    Cancel
  </Button>
  <CompactButtonGroup>
    <Button
      appearance="primary"
      intent="success"
      onClick={() => alert("Saving!")}
    >
      Save Progress
    </Button>
    <Button
      ariaLabel="Save options"
      appearance="primary"
      intent="success"
      onClick={() => alert("Dropdown clicked")}
    >
      <ChevronDownIcon />
    </Button>
  </CompactButtonGroup>
</ButtonGroup>
`}
              scope={liveEditScope}
            />
          </Card>

          <Heading as="h2" size={600}>
            Properties
          </Heading>

          <PropTable
            componentData={ButtonData['src/Button/index.tsx'][0]}
            componentName="Button"
            id="button-table"
          />

          <PropTable
            componentData={ButtonData['src/ButtonGroup/index.tsx'][0]}
            componentName="ButtonGroup"
            id="button-group-table"
          />

          <PropTable
            componentData={ButtonData['src/CompactButtonGroup/index.tsx'][0]}
            componentName="CompactButtonGroup"
            id="compact-button-group-table"
          />
        </section>
      </Page>
    </main>
  );
};
