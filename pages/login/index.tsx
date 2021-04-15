import React from "react";
import { Login } from "../../components/Login";
import { Navbar } from "../../layouts/navbar";
import { Footer } from "../../layouts/footer";
import { withRestrictedRoute } from "../withRestrictedRoute";

const LoginPage = () => {
  return (
    <div className="container">
      <main className="main">
        <Navbar />
        <Login />
      </main>
      <Footer />
    </div>
  );
};

export default withRestrictedRoute(LoginPage);
