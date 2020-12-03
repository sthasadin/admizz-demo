import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const intialProps = await Document.getInitialProps(ctx);
    return { ...intialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/assets/favicon.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
