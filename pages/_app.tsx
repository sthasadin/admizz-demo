import "../main.scss";
import React from "react";
import NProgress from "nprogress";
import Router from "next/router";
import { AppProps } from "next/app";
import { AuthProvider } from "./AuthContext";
import { Provider } from "react-redux";

// import { createWrapper } from "next-redux-wrapper";
import store from "../store/store";
import Head from "next/head";
if (typeof window !== "undefined") {
  NProgress.configure({ showSpinner: false });

  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });

  Router.events.on("routeChangeError", () => {
    NProgress.done();
  });
}
const PProvider: any = Provider;
const MyApp = ({ Component, pageProps }: AppProps) => {
  <Head>
    <link
      rel="shortcut icon"
      type="image/png"
      sizes="10x20"
      href="../public/admizz-10x20.png"
    />

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    {/* <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0 " user-sclable  /> */}
  </Head>;
  React.useEffect(() => {
    Router.events.on("routeChangeComplete", () => {
      window.scroll({
        top: 0,
        left: 0,
        // behavior: "smooth",
      });
    });
  }, []);

  return (
    <>
      <AuthProvider>
        <PProvider store={store}>
          <Component {...pageProps} />
        </PProvider>
      </AuthProvider>
    </>
  );
};
export default MyApp;
