import React from "react";
import Head from "next/head";
import { DashboardNavbar } from "./dashboardnavbar";
import { DashboardSidebar } from "../components/DashboardSidebar";

const DashboardLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>Admizz - {title}</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <DashboardNavbar />
      <div className="dashboard-area">
        <div className="container dashboard-wrapper">
          <main className="student-dashboard-main">
            <div className="student-dashboard-main__sidebar">
              <DashboardSidebar />
            </div>
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export { DashboardLayout };
