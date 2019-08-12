/* @jsx jsx */
import { ArrowRightIcon } from '@datacamp/waffles-icons';
import { css, jsx } from '@emotion/core'; // eslint-disable-line no-unused-vars
import { Page } from 'catalog';
import React from 'react';

import CustomHeader from '../../components/CustomHeader';

const arrowRightIconCss = { marginLeft: 8 };
const arrowRightIconSize = 12;

export default () => {
  return (
    <main>
      <CustomHeader
        description="An overview of all the knowledge articles published to date."
        section="Articles"
        subSection="Article Overview"
      />

      <Page>
        <article
          className="dc-card"
          css={{ marginTop: '24px', padding: '32px', width: '65%' }}
        >
          <h3 className="dc-u-mb-0">Migrating Icons</h3>
          <p>
            All our icons have been drawn from scratch to match our brand. Up
            until now our icons were a mess of different styles & weights. Our
            new set of icons can be used by …
          </p>
          <a
            className="dc-btn dc-btn--inline"
            href="/articles/02-icon-migration"
          >
            Read Full Article
            <ArrowRightIcon
              css={css(arrowRightIconCss)}
              size={arrowRightIconSize}
            />{' '}
          </a>
        </article>
        <article
          className="dc-card"
          css={{ marginTop: '24px', padding: '32px', width: '65%' }}
        >
          <h3 className="dc-u-mb-0">The future of design tokens</h3>
          <p>
            As explained in the documentation, all the primitive values required
            for styling are included in @datacamp/waffles-tokens package. It is
            important to …
          </p>
          <a className="dc-btn dc-btn--inline" href="/articles/01-tokens">
            Read Full Article
            <ArrowRightIcon
              css={css(arrowRightIconCss)}
              size={arrowRightIconSize}
            />{' '}
          </a>
        </article>
      </Page>
    </main>
  );
};
