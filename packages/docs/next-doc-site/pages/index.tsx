/* eslint-disable filenames/match-exported */
import Markdown from '../components/markdown-elements';
import Header from '../components/page-header';
import Layout from '../components/page-layout';
import Section from '../components/page-section';

function Welcome(): JSX.Element {
  return (
    <Layout>
      <Header
        category="Welcome"
        overview="Waffles provides all the tools you need to build wonderful experiences that look, feel, sound and smell like DataCamp. They are also our favourite snack."
        pageTitle="Waffles Is DataCamp Design System"
      />
      <Section>
        <Markdown.h2>New content incoming</Markdown.h2>
        <Markdown.p>This is the new waffles doc site.</Markdown.p>
        <Markdown.p>Some extra content below.</Markdown.p>
      </Section>
    </Layout>
  );
}

export default Welcome;
