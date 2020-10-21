/* @jsx jsx */
import { css, jsx } from '@emotion/core'; // eslint-disable-line no-unused-vars
import { Page } from 'catalog';
import React from 'react';

const ContainerStyle = {
  margin: '0 30px 0 40px',
  maxWidth: '1024px',
};

export default () => {
  return (
    <main>
      <header
        className="dc-u-pt-96 dc-u-pb-64"
        css={{ backgroundColor: '#05192D' }}
      >
        <div style={ContainerStyle}>
          <h1 className="dc-u-mt-0" css={{ color: '#03EF62' }}>
            Waffles is the DataCamp design system
          </h1>
          <p className="dc-u-maxw-640" css={{ color: 'white' }}>
            Waffles provides all the tools you need to build wonderful
            experiences that look, feel, sound and smell like DataCamp. They are
            also our favourite snack.
          </p>
        </div>
      </header>

      <Page>
        <h2>Brand Guidelines</h2>
        <p>
          Please find the full Datacamp brand guidelines in the pdf below. Check
          out the rest of this site for information on how to apply these
          guidelines, and documentation on our library of packages for use in
          DataCamp applications.
        </p>
        <iframe
          css={{ minHeight: 660, width: '100%' }}
          src="/DC Guidelines (July 8).pdf"
        />
      </Page>
    </main>
  );
};
