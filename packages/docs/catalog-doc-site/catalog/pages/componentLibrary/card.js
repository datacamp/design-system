import Card from '@datacamp/waffles-card';
import CardData from '@datacamp/waffles-card/componentMetadata.json';
import { Code, CodeBlock, Heading, Paragraph } from '@datacamp/waffles-text';
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
        description="The card component"
        section="Component Library"
        subSection="Card"
      />

      <Page>
        <section className="dc-u-maxw-100pc">
          <Card css={{ padding: 24 }} elevation={2}>
            <Heading as="h3" size={500}>
              Importing
            </Heading>
            <Paragraph>
              Waffles exposes the <Code>Card</Code> component from within{' '}
              <Code>@datacamp/waffles-card</Code>.
            </Paragraph>
            <CodeBlock>
              {"import Card from '@datacamp/waffles-card';"}
            </CodeBlock>
          </Card>

          <Card css={{ marginTop: 16, padding: 24 }} elevation={2}>
            <Heading as="h3" size={500}>
              Basic Example
            </Heading>
            <Paragraph>
              This example highlights how a <Code>Card</Code> can be used to
              display content in its own section.
            </Paragraph>
            <LazyLiveEditCells
              code={`<Card className="dc-u-p-24">
  <Heading as="h5" size={400}>
    A Card
  </Heading>
  <Paragraph>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et felis at ex hendrerit euismod. Aenean ut eros nisl. Etiam maximus augue ut velit fermentum, id aliquam elit tempor. Aenean commodo, urna et posuere auctor, neque justo scelerisque quam, quis ullamcorper ex ligula sed odio. Suspendisse at eros ante.
  </Paragraph>
</Card>`}
              scope={{ Card, Heading, Paragraph }}
            />
          </Card>
          <Card css={{ marginTop: 16, padding: 24 }} elevation={2}>
            <Heading as="h3" size={500}>
              Elevation Example
            </Heading>
            <Paragraph>
              This example highlights how a <Code>Card</Code> can be used with
              an elevation and a coloured background.
            </Paragraph>
            <LazyLiveEditCells
              code={`<div className="dc-u-p-24 dc-u-bgc-porcelain">
  <Card className="dc-u-p-24" elevation={2} hoverElevation={4}>
    <Heading as="h5" size={400}>
      A Card
    </Heading>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et felis at ex hendrerit euismod. Aenean ut eros nisl. Etiam maximus augue ut velit fermentum, id aliquam elit tempor. Aenean commodo, urna et posuere auctor, neque justo scelerisque quam, quis ullamcorper ex ligula sed odio. Suspendisse at eros ante.
    </Paragraph>
  </Card>
</div>`}
              scope={{ Card, Heading, Paragraph }}
            />
          </Card>
          <Heading as="h3" size={500}>
            Properties
          </Heading>
          <PropTable
            componentData={CardData['src/index.tsx'][0]}
            componentName="Card"
          />
        </section>
      </Page>
    </main>
  );
};
