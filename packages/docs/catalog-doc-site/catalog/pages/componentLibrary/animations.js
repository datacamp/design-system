/* eslint-disable import/no-anonymous-default-export */
import checkmarkGreenData from '@datacamp/waffles-animations/checkmark-green.json';
import checkmarkNavyData from '@datacamp/waffles-animations/checkmark-navy.json';
import Card from '@datacamp/waffles-card';
import {
  Code,
  CodeBlock,
  Heading,
  Link,
  Paragraph,
} from '@datacamp/waffles-text';
/* @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Page } from 'catalog';
import Lottie from 'lottie-react';
import React from 'react';

import CustomHeader from '../../components/CustomHeader';

const ExampleRow = ({ animationData, srcPath }) => {
  return (
    <tr css={css({ display: 'flex' })}>
      <td>
        <Code>{srcPath}</Code>
      </td>
      <td>
        <div css={{ maxHeight: 300, maxWidth: 300 }}>
          <Lottie animationData={animationData} />
        </div>
      </td>
    </tr>
  );
};

export default () => {
  return (
    <main>
      <CustomHeader
        description="Source files for DataCamp animations"
        section="Component Library"
        subSection="Animations"
      />

      <Page>
        <section className="dc-u-maxw-100pc">
          <Card css={{ marginTop: 16, padding: 24 }} elevation={2}>
            <Heading as="h3" size={500}>
              About
            </Heading>
            <Paragraph>
              The <Code>@datacamp/waffles-animations</Code> package contains
              source files for a number of animations. These files are{' '}
              <Code>.json</Code> definitions that are for use with{' '}
              <Link href="https://airbnb.design/lottie/">Lottie</Link>. There
              are a number of libraries for rendering <Code>Lottie</Code>{' '}
              animations for different technologies. For example this page uses{' '}
              <Link href="https://gamote.github.io/lottie-react/">
                lottie-react
              </Link>
              . The code below is an example of how animations are rendered on
              this page.
            </Paragraph>
            <CodeBlock>{`import checkmarkGreenData from '@datacamp/waffles-animations/checkmark-green.json';
import Lottie from 'lottie-react';

const Component = () => (
  <Lottie animationData={checkmarkGreenData} />
)`}</CodeBlock>
            <Paragraph>
              Check the docs for the specific library being used to see what
              options are available. In this case there are controls for
              looping, autoplay etc. available when using{' '}
              <Link href="https://gamote.github.io/lottie-react/#props">
                lottie-react
              </Link>
            </Paragraph>
          </Card>
        </section>
        <section className="dc-u-maxw-100pc">
          <Card css={{ marginTop: 16, padding: 24 }} elevation={2}>
            <Heading as="h3" size={500}>
              Available Animations
            </Heading>
            <table className="dc-table">
              <tbody>
                <ExampleRow
                  animationData={checkmarkGreenData}
                  srcPath="@datacamp/waffles-animations/checkmark-green.json"
                />
                <ExampleRow
                  animationData={checkmarkNavyData}
                  srcPath="@datacamp/waffles-animations/checkmark-navy.json"
                />
              </tbody>
            </table>
          </Card>
        </section>
      </Page>
    </main>
  );
};
