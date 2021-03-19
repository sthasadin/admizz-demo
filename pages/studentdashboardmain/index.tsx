import React, { useEffect } from "react";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { getAllCollegeList } from "../../store/Action/allCollage.action";
import { DashboardSidebar } from "../../components/DashboardSidebar";
import { DashboardWelcomeCard } from "../../components/DashboardWelcomeCard";
import { DashboardDetailInfo } from "../../components/DashboardDetailInfo";
import { DashboardRecommend } from "../../components/DashboardRecommend";
import { DashboardNavbar } from "../../layouts/dashboardnavbar";
// import { withRestrictedRoute } from "../withRestrictedRoute";
import { withPrivateRoute } from "../withPrivateRoute";

const index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCollegeList());
  }, []);

  const { collegeList } = useSelector((state) => state.allCollege);

  return (
    <div className="container">
      <Head>
        <title>Admizz - Home</title>
        <link rel="icon" href="favicon.svg" />
        <DashboardNavbar />
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
            <DashboardRecommend collegeList={collegeList} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default withPrivateRoute(index);
