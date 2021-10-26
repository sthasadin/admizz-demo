import React from "react";
import { Register } from "../../components/register";
import Layout from "../../layouts";
import { withRestrictedRoute } from "../withRestrictedRoute";

const RegisterPage = () => {
  return (
    <Layout title="Register" stickyBar={true}>
      <div className="container">
        <main className="main">
          <Register />
        </main>
      </div>
    </Layout>
  );
};
export default withRestrictedRoute(RegisterPage);
