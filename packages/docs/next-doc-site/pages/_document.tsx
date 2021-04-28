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
      <Html>
        <Head lang="en">
          <link href="/favicon.png" rel="icon" sizes="32x32" type="image/png" />
          <style>{`
*,
::before,
::after {
  box-sizing: border-box;
}
body {
  margin: 0;
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
