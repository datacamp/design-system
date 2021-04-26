/* eslint-disable import/no-anonymous-default-export */
import Card from '@datacamp/waffles-card';
import { Heading, Link, Paragraph } from '@datacamp/waffles-text';
import TooltipData from '@datacamp/waffles-tooltip/componentMetadata.json';
/* @jsx jsx */
import { jsx } from '@emotion/react';
import { Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../components/CustomHeader';
import PropTable from '../../components/PropTable';

export default () => {
  return (
    <main>
      <CustomHeader
        description="The tooltip component"
        section="Component Library"
        subSection="Tooltip"
      />

      <Page>
        <section className="dc-u-maxw-100pc">
          <Card css={{ marginTop: 16, padding: 24 }} elevation={2}>
            <Heading as="h3" size={500}>
              About
            </Heading>
            <Paragraph>
              A component to render tooltip using the styles of this design
              system. It is available from the{' '}
              <code>@datacamp/waffles-tooltip</code> package on npm. Please note
              that this component is designed to be used as a building block for
              other components, and as such should only be accessed directly
              when using with non-waffles components. For example when using a{' '}
              <code>Button</code>, the tooltip is accessible through the API
              described <Link href="/component-library/button">here</Link>.
              Before using this component it would be best to reach out to the
              squad as it is only designed for specific uses.
            </Paragraph>
          </Card>

          <Heading as="h3" size={500}>
            Properties
          </Heading>

          <PropTable
            componentData={TooltipData['src/index.tsx'][0]}
            componentName="Tooltip"
          />
        </section>
      </Page>
    </main>
  );
};
