import React, { useContext } from "react";
import Layout from "../../layouts";
import { withRestrictedRoute } from "../withRestrictedRoute";
import Register from "pages/register";
import Apply from "./Apply";
import "@progress/kendo-theme-default/dist/all.css";
import { ContinueRegistration } from "./Registration/ContinueRegistration";
import Review from "./Registration/Review";
import { FormContext } from "context/FormContextProvider";

const ApplyPage = () => {
  const { showRegister, onRegisterClick } = useContext(FormContext);

  return (
    <Layout title="Apply" stickyBar={true}>
      <div className="container">
        <main className="main">
          {!showRegister && <Apply onRegister={onRegisterClick} />}
          {showRegister && <ContinueRegistration />}
        </main>
      </div>
    </Layout>
  );
};

export default withRestrictedRoute(ApplyPage);
