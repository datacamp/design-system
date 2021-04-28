/* eslint-disable filenames/match-exported */
import { GlobalFontFaces } from '@datacamp/waffles-text';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalFontFaces />
      <Head>
        <title>Waffles - The DataCamp Design System</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
