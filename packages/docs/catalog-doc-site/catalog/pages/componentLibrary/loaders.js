/* eslint-disable import/no-anonymous-default-export */
import Card from '@datacamp/waffles-card';
import { LogomarkSpinner } from '@datacamp/waffles-loaders';
import LoadersData from '@datacamp/waffles-loaders/componentMetadata.json';
import { Code, CodeBlock, Heading, Paragraph } from '@datacamp/waffles-text';
import { colors } from '@datacamp/waffles-tokens';
/* @jsx jsx */
import { jsx } from '@emotion/react';
import { Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../components/CustomHeader';
import LazyLiveEditCells from '../../components/LazyLiveEditCells';
import PropTable from '../../components/PropTable';

export default () => {
  return (
    <main>
      <CustomHeader
        description="Loading components and placeholders"
        section="Component Library"
        subSection="Loaders"
      />

      <Page>
        <section className="dc-u-maxw-100pc">
          <Card css={{ padding: 24 }} elevation={2}>
            <Heading as="h3" size={500}>
              Importing
            </Heading>
            <Paragraph>
              Waffles exposes the <Code>LogomarkSpinner</Code> component from
              within <Code>@datacamp/waffles-loaders</Code>. Later other
              spinners and placeholders will be available.
            </Paragraph>
            <CodeBlock>
              {`import { LogomarkSpinner } from '@datacamp/waffles-loaders';`}
            </CodeBlock>
          </Card>

          <Card css={{ marginTop: 16, padding: 24 }} elevation={2}>
            <Heading as="h3" size={500}>
              Basic Example
            </Heading>
            <Paragraph>
              This example highlights some ways the <Code>LogomarkSpinner</Code>{' '}
              can be used.
            </Paragraph>
            <LazyLiveEditCells
              code={`    <>
  <LogomarkSpinner />
  <LogomarkSpinner size="200px" />
  <LogomarkSpinner color="white" />
</>`}
              scope={{ colors, LogomarkSpinner }}
            />
          </Card>

          <Heading as="h3" size={500}>
            Properties
          </Heading>
          <PropTable
            componentData={LoadersData['src/LogomarkSpinner.tsx'][0]}
            componentName="LogomarkSpinner"
          />
        </section>
      </Page>
    </main>
  );
};
