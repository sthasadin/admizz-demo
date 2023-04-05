import React from 'react'
import Layout from "../../layouts";
import { withRestrictedRoute } from "../withRestrictedRoute";
import Register from 'pages/register';
import Apply from './Apply';
import '@progress/kendo-theme-default/dist/all.css';

const ApplyPage = () => {
  return (<Layout title="Apply" stickyBar={true}>
    <div className="container">
      <main className="main">
        <Apply />
      </main>
    </div>
  </Layout>)
}

export default withRestrictedRoute(ApplyPage)