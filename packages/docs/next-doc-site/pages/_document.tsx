// eslint-disable-next-line filenames/match-exported
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class CustomDocument extends Document<DocumentInitialProps> {
  static async getInitialProps(
    context: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(context);
    return { ...initialProps };
  }

  // eslint-disable-next-line class-methods-use-this
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link href="/favicon.ico" rel="icon" />
          <link href="/icon.svg" rel="icon" type="image/svg+xml" />
          <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
          <link href="/manifest.webmanifest" rel="manifest" />
          <link
            as="font"
            crossOrigin="anonymous"
            href="https://waffles.datacamp.com/fonts/StudioFeixenSans-Regular.woff2"
            rel="preload"
            type="font/woff2"
          />
          <link
            as="font"
            crossOrigin="anonymous"
            href="https://waffles.datacamp.com/fonts/StudioFeixenSans-Bold.woff2"
            rel="preload"
            type="font/woff2"
          />
          <link href="/fonts.css" rel="stylesheet" />
          <style>{`
*,
::before,
::after {
  box-sizing: border-box;
}
body {
  margin: 0;
}
::selection {
  background: rgba(109, 233, 116, 0.5);
  color: inherit;
}
svg {
  display: block;
  width: 100%;
  height: 100%;
}
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
