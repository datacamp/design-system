import { setAppElement } from '@datacamp/waffles-modals';
import { AppProps } from 'next/app';

setAppElement('#__next');

function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default App;
