// eslint-disable-next-line filenames/match-exported
import { Heading, Paragraph } from '@datacamp/waffles-text';
import { colors, fontSize, fontWeight } from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';
import Head from 'next/head';
import { Fragment } from 'react';

import { MAX_CONTENT_WIDTH, PAGE_HEADER_HEIGHT } from './constants';

const headerStyle = css`
  display: flex;
  align-items: flex-end;
  background-color: ${colors.navy};
  width: 100%;
  padding: 32px;
  padding-top: 0;
  height: ${PAGE_HEADER_HEIGHT}px;
`;

const contentStyle = css`
  max-width: ${MAX_CONTENT_WIDTH - 48}px;
`;

const categoryStyle = css`
  color: ${colors.green};
  font-weight: ${fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: ${fontSize.small};
`;

const titleStyle = css`
  color: ${colors.white};
  margin-top: 4px !important;
`;

const overviewStyle = css`
  color: ${colors.white};
`;

type PageHeaderProps = {
  category: string;
  overview: string;
  pageTitle: string;
};

function PageHeader({
  category,
  overview,
  pageTitle,
}: PageHeaderProps): JSX.Element {
  return (
    <Fragment>
      <Head>
        <title key="title">Waffles - {pageTitle}</title>
      </Head>
      <header css={headerStyle}>
        <div css={contentStyle}>
          <Paragraph css={categoryStyle}>{category}</Paragraph>
          <Heading as="h1" css={titleStyle} multiLine size={700}>
            {pageTitle}
          </Heading>
          <Paragraph css={overviewStyle}>{overview}</Paragraph>
        </div>
      </header>
    </Fragment>
  );
}

export default PageHeader;
