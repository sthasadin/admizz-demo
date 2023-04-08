import React from 'react'
import Layout from "../../layouts";
import { withRestrictedRoute } from "../withRestrictedRoute";
import Register from 'pages/register';
import Apply from './Apply';
import '@progress/kendo-theme-default/dist/all.css';
import { ContinueRegistration } from './Registration/ContinueRegistration';

const ApplyPage = () => {
  const [showRegister, setShowRegister] = React.useState(false)


  const onRegisterClick = (e) => {
    // e.preventDefault();
    // console.log("first");
    setShowRegister(e)
  }


  return (<Layout title="Apply" stickyBar={true}>
    <div className="container">
      <main className="main">
        {!showRegister && <Apply  onRegister={onRegisterClick} />}
        {showRegister && <ContinueRegistration />}
      </main>
    </div>
  </Layout>)
}

export default withRestrictedRoute(ApplyPage)