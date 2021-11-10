import React from "react";
import { ForgotPassword } from "../../components/Login/forgotPassword";
import Layout from "../../layouts";
import { withRestrictedRoute } from "../withRestrictedRoute";

const forgotPassword = () => {
  return (
    <Layout title="forgotPassword" stickyBar={true}>
      <div className="container">
        <main className="main">
          <ForgotPassword />
        </main>
      </div>
    </Layout>
  );
};

export default withRestrictedRoute(forgotPassword);
