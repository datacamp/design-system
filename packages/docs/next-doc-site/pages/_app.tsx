/* eslint-disable filenames/match-exported */
import '../styles/globals.css';

import { AppProps } from 'next/app';
import React from 'react';

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return <Component {...pageProps} />;
};

export default App;
