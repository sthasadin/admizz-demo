import React from "react";
import { Register } from "../../components/register";
import { Navbar } from "../../layouts/navbar";
import { Footer } from "../../layouts/footer";
import { withRestrictedRoute } from "../../withRestrictedRoute";

const RegisterPage = () => {
  return (
    <div className="container">
      <main className="main">
        <Navbar />
        <Register />
      </main>
      <Footer />
    </div>
  );
};
export default withRestrictedRoute(RegisterPage);
