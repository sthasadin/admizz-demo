import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";
import favIcon from "../public/admizz.png";
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* preview links */}
          <meta name="description" content="Admission With Ease" />
          <meta property="og:title" content="Admizz" />
          <meta property="og:description" content="Admission With Ease" />
          <meta property="og:image" content="https://admizz.com/Hero-images.png" />
          <meta property="og:url" content="https://admizz.com" />
          {/* preview links */}
          <link
            rel="shortcut icon"
            type="image/png"
            sizes="50x62"
            href="../public/admizz-50x20.png"
          />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
