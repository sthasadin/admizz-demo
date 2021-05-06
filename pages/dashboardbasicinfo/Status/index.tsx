import React, { useEffect } from "react";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { getAllCollegeList } from "../../../store/Action/allCollage.action";
import { DashboardSidebar } from "../../../components/DashboardSidebar";
// import { DashboardWelcomeCard } from "../../../components/DashboardWelcomeCard";
import { DashboardDetailInfo } from "../../../components/DashboardDetailInfo";
import { DashboardRecommend } from "../../../components/DashboardRecommend";
import { DashboardNavbar } from "../../../layouts/dashboardnavbar";
// import { withRestrictedRoute } from "../withRestrictedRoute";
import { withPrivateRoute } from "../../withPrivateRoute";
import { getStudentApplication } from "../../../store/Action/studentapplication.action";
// import { AuthContext } from "../../AuthContext";
import { auth } from "../../../firebase";

const index = () => {
  const dispatch = useDispatch();
  // const { authenticated, user } = useContext(AuthContext);
  useEffect(() => {
    if (auth.currentUser) {
      dispatch(getAllCollegeList());
      dispatch(getStudentApplication(auth.currentUser.uid));
    }
  }, [auth]);

  const { collegeList } = useSelector((state: any) => state.allCollege);
  const { application } = useSelector(
    (state: any) => state.student_application
  );
  return (
    <div className="container">
      <Head>
        <DashboardNavbar />
        <title>Admizz - Home</title>
        <link rel="icon" href="favicon.svg" />
      </Head>
      <main className="student-dashboard-main">
        <div className="student-dashboard-main__sidebar">
          <DashboardSidebar />
        </div>
        <div className="student-dashboard-main__mainpage">
          <div className="student-dashboard-main__detailInfo">
            <DashboardDetailInfo application={application} />
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
