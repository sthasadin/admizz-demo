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
    <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
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
