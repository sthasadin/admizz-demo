import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getColleges } from "../../../store/Action/college.action";

import { DashboardApplicationStatus } from "../../../components/DashboardApplicationStatus";
import { DashboardRecommend } from "../../../components/DashboardRecommend";
import { withPrivateRoute } from "../../withPrivateRoute";
import { getStudentApplication } from "../../../store/Action/studentapplication.action";
import { auth } from "../../../firebase";
import { DashboardLayout } from "../../../layouts/dashboardLayout";

const index = () => {
  const dispatch = useDispatch();
  // const { authenticated, user } = useContext(AuthContext);
  useEffect(() => {
    if (auth.currentUser && !collegeList.length) {
      dispatch(getColleges());
      dispatch(getStudentApplication(auth.currentUser.uid));
    }
  }, [auth]);

  // const { collegeList } = useSelector((state: any) => state.allCollege);
  const collegeList = useSelector((state: any) => state.college.colleges);
  const Loading = useSelector((state: any) => state.college.multiLoading);
  const { application } = useSelector(
    (state: any) => state.student_application
  );

  return (
    <DashboardLayout title="Application Status">
      <div className="student-dashboard-main__mainpage">
        <div className="student-dashboard-main__detailInfo">
          <DashboardApplicationStatus application={application} />
        </div>
        <div className="student-dashboard-main__recommendation">
          <DashboardRecommend collegeList={collegeList} loader={Loading} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default withPrivateRoute(index);
