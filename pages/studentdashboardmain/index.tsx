import React from "react";
import Head from "next/head";
import { Footer } from "../../layouts/footer";
import { Navbar } from "../../layouts/navbar";
import { Topbar } from "../../layouts/topbar";
import { CollegeListSideBar } from "../../components/CollegeLIstSideBar";
import { CollegeListResult } from "../../components/CollegeListResult";
import { DashboardSidebar } from "../../components/DashboardSidebar";

const collegeList = () => {
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
          <div className="student-dashboard-main__completeApplication">
            Complete Application
          </div>
          <div className="student-dashboard-main__detailInfo">
            Detail Info
          </div>
          <div className="student-dashboard-main__recommendation">
            Recommendation
          </div>
        </div>
      </main>
    </div>
  );
};

export default collegeList;
