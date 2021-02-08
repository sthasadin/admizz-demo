import "../main.scss";
import React from "react";
import { AppProps } from "next/app";
import { AuthProvider } from "./AuthContext";
import { Provider } from "react-redux";
// import { createWrapper } from "next-redux-wrapper";
import store from "../store/store";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>

  );
};
export default MyApp;