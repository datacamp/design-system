/* @jsx jsx */
import { Badge } from '@datacamp/waffles-text';
import tokens from '@datacamp/waffles-tokens';
import { css, jsx } from '@emotion/core';
import { Page } from 'catalog';
import _ from 'lodash';
import React from 'react';

import CustomHeader from '../../components/CustomHeader';

const colors = _.pick(tokens.colors, [
  'navy',
  'green',
  'blue',
  'red',
  'orange',
  'purple',
  'pink',
  'yellow',
  'beige100',
  'beige200',
  'beige300',
  'beige400',
  'grey100',
  'grey200',
  'grey300',
  'grey400',
]);

export default () => {
  return (
    <main>
      <CustomHeader
        description="All the hues you could ever need."
        section="Design"
        subSection="Colors"
      />

      <Page>
        <section className="dc-u-fx dc-u-mb-16 dc-u-w-100pc">
          <div className="dc-card" css={{ flex: '1 1 0', padding: 24 }}>
            <p>
              The DataCamp brand colors are listed below, with their resepective
              hex codes. If you are wanting to use these colours in an
              application, checkout the{' '}
              <a href="/component-library/tokens">tokens package</a>.
            </p>
            <ul>
              {Object.entries(colors).map(([name, value]) => (
                <li css={css({ marginBottom: 8 })} key={name}>
                  {name} -{' '}
                  <Badge color={value} size="large">
                    {value}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Page>
    </main>
  );
};
