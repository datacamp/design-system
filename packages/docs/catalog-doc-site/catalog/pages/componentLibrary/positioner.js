/* eslint-disable import/no-anonymous-default-export */
import Card from '@datacamp/waffles-card';
import { Code, CodeBlock, Heading, Paragraph } from '@datacamp/waffles-text';
/* @jsx jsx */
import { jsx } from '@emotion/core';
import { Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../components/CustomHeader';

export default () => {
  return (
    <main>
      <CustomHeader
        description="Utilities for positioning"
        section="Component Library"
        subSection="Positioner"
      />

      <Page>
        <section className="dc-u-maxw-100pc">
          <Card css={{ marginTop: 16, padding: 24 }} elevation={2}>
            <Heading as="h3" size={500}>
              About
            </Heading>
            <Paragraph>
              A hook to provide positioning styles for emotion. This replaces
              the old <Code>Positioner</Code> component. It can be imported as
              follows
            </Paragraph>
            <CodeBlock>{`import { usePositioner } from '@datacamp/waffles-positioner';`}</CodeBlock>
            <Paragraph>
              It is designed to be a building block for other components. An
              example of how to use it follows.
            </Paragraph>
            <CodeBlock>
              {`function PositionExample() {
  const targetRef = React.useRef()
  const positionerStyles = usePositioner({
    isVisible: true,
    target: targetRef,
    position: 'bottom',
    offset: 8
  });

  return <>
    <div ref={targetRef}>target</div>
    <div css={positionerStyles}>positioned element</div>
  </>
}`}
            </CodeBlock>
          </Card>
        </section>
      </Page>
    </main>
  );
};
