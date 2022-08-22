import { Heading, Paragraph } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens';
import { css } from '@emotion/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

import categoryFromPath from '../helpers/category-from-path';

import { MAX_CONTENT_WIDTH } from './constants';

const headerStyle = css`
  display: flex;
  align-items: flex-end;
  background-color: ${tokens.colors.navy};
  width: 100%;
  padding: 32px;
  padding-top: 200px;

  @media (min-width: 820px) {
    padding-top: 140px;
  }
`;

const contentStyle = css`
  max-width: ${MAX_CONTENT_WIDTH - 48}px;
`;

const categoryStyle = css`
  color: ${tokens.colors.green};
  font-weight: ${tokens.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: ${tokens.fontSize.small};
`;

const titleStyle = css`
  color: ${tokens.colors.white};
  margin-top: 8px !important;
`;

const overviewStyle = css`
  color: ${tokens.colors.white};
`;

type PageHeaderProps = {
  category?: string;
  overview: string;
  pageTitle: string;
};

function PageHeader({
  category,
  overview,
  pageTitle,
}: PageHeaderProps): JSX.Element {
  // If category is not provided take it from path
  const { pathname } = useRouter();
  const genericCategory = category ?? categoryFromPath(pathname);

  return (
    <Fragment>
      <Head>
        <title key="title">Waffles - {pageTitle}</title>
      </Head>
      <header css={headerStyle}>
        <div css={contentStyle}>
          {genericCategory && (
            <Paragraph css={categoryStyle}>{genericCategory}</Paragraph>
          )}
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
