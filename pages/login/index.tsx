import React from "react";
import { Login } from "../../components/Login";
import Layout from "../../layouts";
import { withRestrictedRoute } from "../withRestrictedRoute";

const LoginPage = () => {
  return (
    <Layout title="Login">
      <div className="container">
        <main className="main">
          <Login />
        </main>
      </div>
    </Layout>
  );
};

export default withRestrictedRoute(LoginPage);
