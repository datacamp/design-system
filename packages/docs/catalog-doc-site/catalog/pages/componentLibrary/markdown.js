/* eslint-disable import/no-anonymous-default-export */
import Card from '@datacamp/waffles-card';
import Markdown from '@datacamp/waffles-markdown';
import MarkdownData from '@datacamp/waffles-markdown/componentMetadata.json';
import { Heading, Paragraph } from '@datacamp/waffles-text';
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
        description="The markdown component"
        section="Component Library"
        subSection="Markdown"
      />

      <Page>
        <section className="dc-u-maxw-100pc">
          <Card css={{ marginTop: 16, padding: 24 }} elevation={2}>
            <Heading as="h3" size={500}>
              About
            </Heading>
            <Paragraph>
              A component to render markdown using the styles of this design
              system. It is available from the{' '}
              <code>@datacamp/waffles-markdown</code> package on npm. Note this
              is an initial version of this component and so is limited in its
              functionality. This documentation is also minimal, so if you are
              intending to use this component, please contact the design system
              squad for assistance.
            </Paragraph>
            <LazyLiveEditCells
              code={`<Markdown
  source={\`
## Example heading
This is some content
  \`}
/>`}
              scope={{ Markdown }}
            />
          </Card>

          <Heading as="h3" size={500}>
            Properties
          </Heading>

          <PropTable
            componentData={MarkdownData['src/components/Markdown.tsx'][0]}
            componentName="Markdown"
          />
        </section>
      </Page>
    </main>
  );
};
