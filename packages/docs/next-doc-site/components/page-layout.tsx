import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';
import { MDXProvider } from '@mdx-js/react';
import { Fragment } from 'react';

import { SIDEBAR_WIDTH } from './constants';
import MarkdownElements from './markdown-elements';
import Sidebar from './sidebar';

const mainStyle = css`
  padding-left: ${SIDEBAR_WIDTH}px;
  background-color: ${tokens.colors.beigeSubtle};
  min-height: 100vh;
`;

type PageLayoutProps = {
  children: React.ReactNode;
};

function PageLayout({ children }: PageLayoutProps): JSX.Element {
  return (
    <Fragment>
      <Sidebar />
      <main css={mainStyle}>
        <MDXProvider components={MarkdownElements}>{children}</MDXProvider>
      </main>
    </Fragment>
  );
}

export default PageLayout;
