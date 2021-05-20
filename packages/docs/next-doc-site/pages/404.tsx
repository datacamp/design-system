import Button from '@datacamp/waffles-button';
import { css } from '@emotion/react';
import Link from 'next/link';

import Markdown from '../components/markdown-elements';
import Header from '../components/page-header';
import Layout from '../components/page-layout';
import Section from '../components/page-section';

const buttonsStyle = css`
  display: flex;
  margin-top: 8px;
`;

const linkStyle = css`
  margin-right: 16px;
`;

function Welcome(): JSX.Element {
  return (
    <Layout>
      <Header
        category="404"
        overview="Unfortunately this page could not be found."
        pageTitle="Page not Found"
      />
      <Section>
        <Markdown.h2>
          We couldn't find the page you are looking for.
        </Markdown.h2>
        <Markdown.p>
          Check the detailed components documentation or just head back to home
          page.
        </Markdown.p>
        <div css={buttonsStyle}>
          <Link href="/components/introduction" passHref>
            <Button appearance="primary" css={linkStyle} type="link">
              Documentation
            </Button>
          </Link>
          <Link href="/" passHref>
            <Button type="link">Home</Button>
          </Link>
        </div>
      </Section>
    </Layout>
  );
}

export default Welcome;
