import React from "react";
import Head from "next/head";
import { Navbar } from "../../layouts/navbar";
import { DashboardSidebar } from "../../components/DashboardSidebar";
import { DashboardBasicInfo } from "../../components/DashboardBasicInfo";

const DashboardBasicInfoPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Admizz - Home</title>
        <link rel="icon" href="favicon.svg" />
        <Navbar />
      </Head>
      <main className="student-dashboard-main">
        <div className="student-dashboard-main__sidebar">
          <DashboardSidebar />
        </div>
        <div className="student-dashboard-main__mainpage">
          <DashboardBasicInfo />
        </div>
      </main>
    </div>
  );
};

export default DashboardBasicInfoPage;
