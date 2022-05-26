import "../main.scss";
import React from "react";
import NProgress from "nprogress";
import Router from "next/router";
import { AppProps } from "next/app";
import { AuthProvider } from "./AuthContext";
import { Provider } from "react-redux";

// import { createWrapper } from "next-redux-wrapper";
import store from "../store/store";
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
const MyApp = ({ Component, pageProps }: AppProps) => {
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
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
    </>
  );
};
export default MyApp;
