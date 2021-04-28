/* eslint-disable filenames/match-exported */
import { GlobalFontFaces } from '@datacamp/waffles-text';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <>
      <GlobalFontFaces />
      <Head>
        <title>Waffles</title>
        <link href="/favicon.png" rel="icon" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
