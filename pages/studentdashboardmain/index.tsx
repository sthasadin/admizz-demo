import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { DashboardWelcomeCard } from "../../components/DashboardWelcomeCard";
import { DashboardDetailInfo } from "../../components/DashboardDetailInfo";
import { DashboardApplicationStatus } from "../../components/DashboardApplicationStatus";
import { DashboardRecommend } from "../../components/DashboardRecommend";
import { DashboardLayout } from "../../layouts/dashboardLayout";
import { getColleges } from "../../store/Action/college.action";
// import { withRestrictedRoute } from "../withRestrictedRoute";
import { withPrivateRoute } from "../withPrivateRoute";
import { getStudentApplication } from "../../store/Action/studentapplication.action";
// import { AuthContext } from "../AuthContext";
import { auth, firebase } from "../../firebase";

const index = () => {
  const dispatch = useDispatch();
  // const { authenticated, user } = useContext(AuthContext);
  useEffect(() => {
    if(firebase.auth().currentUser.uid){}

    if (auth.currentUser && !collegeList.length) {
      dispatch(getColleges());
      dispatch(getStudentApplication(auth.currentUser.uid));
    }else{
    }
  }, [auth]);

  const {authUser} = useSelector((state:any)=> state.user)
  const collegeList = useSelector((state: any) => state.college.colleges);
  const { application } = useSelector(
    (state: any) => state.student_application
  );

  const loader = useSelector((state: any) => state.college.multiLoading);

  return (
    <DashboardLayout title="Dashboard">
      <div className="student-dashboard-main__mainpage">
        {!application?.id && (
          <div className="student-dashboard-main__welcomeCard">
            <DashboardWelcomeCard />
          </div>
        )}
        <div className="student-dashboard-main__detailInfo">
          <DashboardDetailInfo application={application} />
        </div>

        <div className="student-dashboard-main__mainpage">
          <div className="student-dashboard-main__detailInfo">
            <DashboardApplicationStatus application={application} />
          </div>
        </div>

        <div className="student-dashboard-main__recommendation">
          <DashboardRecommend collegeList={collegeList} loader={loader} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default withPrivateRoute(index);
