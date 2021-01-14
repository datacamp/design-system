/* eslint-disable import/no-anonymous-default-export */
import Card from '@datacamp/waffles-card';
import ResizableElements from '@datacamp/waffles-resizable-elements';
import ResizableElementsData from '@datacamp/waffles-resizable-elements/componentMetadata.json';
import { Code, Heading, Paragraph } from '@datacamp/waffles-text';
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
        description="A way to provide resizing"
        section="Component Library"
        subSection="Resizable Elements"
      />

      <Page>
        <section className="dc-u-maxw-100pc">
          <Card css={{ marginTop: 16, padding: 24 }} elevation={2}>
            <Heading as="h3" size={500}>
              About
            </Heading>
            <Paragraph>
              This omponent allows for multiple elements to be resized by the
              user. It is available like this
              <Code>{`import ResizableElements from '@datacamp/waffles-resizable-elements';`}</Code>{' '}
            </Paragraph>

            <LazyLiveEditCells
              code={`<ResizableElements orientation="row">
  <div>This is a whole lot of text in a box that can be resized.</div>
  <div>This is a whole lot of text in a box that can be resized.</div>
  <div>This is a whole lot of text in a box that can be resized.</div>
</ResizableElements>`}
              scope={{ ResizableElements }}
            />
          </Card>

          <Heading as="h3" size={500}>
            Properties
          </Heading>

          <PropTable
            componentData={
              ResizableElementsData['src/ResizableElements.tsx'][0]
            }
            componentName="ResizableElements"
          />
        </section>
      </Page>
    </main>
  );
};
