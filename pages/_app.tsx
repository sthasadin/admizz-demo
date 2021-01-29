import "../main.scss";
import React from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
// import { createWrapper } from "next-redux-wrapper";
import store from "../store/store";
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};
export default MyApp;