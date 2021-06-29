import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getAllCollegeList } from "../../../store/Action/allCollage.action";

// import { DashboardWelcomeCard } from "../../../components/DashboardWelcomeCard";
import { DashboardApplicationStatus } from "../../../components/DashboardApplicationStatus";
import { DashboardRecommend } from "../../../components/DashboardRecommend";

// import { withRestrictedRoute } from "../withRestrictedRoute";
import { withPrivateRoute } from "../../withPrivateRoute";
import { getStudentApplication } from "../../../store/Action/studentapplication.action";
// import { AuthContext } from "../../AuthContext";
import { auth } from "../../../firebase";
import { DashboardLayout } from "../../../layouts/dashboardLayout";

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
    <DashboardLayout>
      <div className="student-dashboard-main__mainpage">
        <div className="student-dashboard-main__detailInfo">
          <DashboardApplicationStatus application={application} />
        </div>
        <div className="student-dashboard-main__recommendation">
          <DashboardRecommend collegeList={collegeList} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default withPrivateRoute(index);
