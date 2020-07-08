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
            This is the BETA waffles site
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
          Please find the updated Datacamp brand guidelines in the pdf below.
          The rest of this site will be updated to reflect the information
          contained below, but at present doesn't represent the latest
          guidelines.
        </p>
        <p>
          <strong>For internal use only, do not share.</strong>
        </p>
        <iframe
          css={{ minHeight: 660, width: '100%' }}
          src="/DC Guidelines (July 8).pdf"
        />
      </Page>
    </main>
  );
};
