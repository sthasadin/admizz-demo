import React from "react";
import Head from "next/head";
import { Navbar } from "../../layouts/navbar";
import { DashboardSidebar } from "../../components/DashboardSidebar";
import { DashboardWelcomeCard } from "../../components/DashboardWelcomeCard";
import { DashboardDetailInfo } from "../../components/DashboardDetailInfo";
import { DashboardRecommend } from "../../components/DashboardRecommend";

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
          <div className="student-dashboard-main__welcomeCard">
            <DashboardWelcomeCard />
          </div>
          <div className="student-dashboard-main__detailInfo">
            <DashboardDetailInfo />
          </div>
          <div className="student-dashboard-main__recommendation">
            <DashboardRecommend />
          </div>
        </div>
      </main>
    </div>
  );
};

export default collegeList;
