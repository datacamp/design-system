/* eslint-disable filenames/match-exported */
import { css } from '@emotion/react';

import Markdown from '../components/markdown-elements';
import Header from '../components/page-header';
import Layout from '../components/page-layout';
import Section from '../components/page-section';

const wrapperStyle = css`
  width: 100%;
  min-height: 660px;
  border: 0;
  margin-top: 16px;
`;

function Welcome(): JSX.Element {
  return (
    <Layout>
      <Header
        category="Welcome"
        overview="Waffles provides all the tools you need to build wonderful experiences that look, feel, sound and smell like DataCamp. They are also our favourite snack."
        pageTitle="Waffles Is DataCamp Design System"
      />
      <Section>
        <Markdown.h2>Brand Guidelines</Markdown.h2>
        <Markdown.p>
          Please find the full DataCamp brand guidelines below. Check out the
          rest of this site for information on how to apply these guidelines,
          and documentation on our library of packages for use in DataCamp
          applications.
        </Markdown.p>
        <iframe css={wrapperStyle} src="/dc_guidelines_dec2020.pdf" />
      </Section>
    </Layout>
  );
}

export default Welcome;
