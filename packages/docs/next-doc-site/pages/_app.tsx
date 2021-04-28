/* eslint-disable filenames/match-exported */
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Waffles - The DataCamp Design System</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
