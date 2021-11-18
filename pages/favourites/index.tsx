import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { DashboardLayout } from "../../layouts/dashboardLayout";
import { getColleges } from "../../store/Action/college.action";
// import { withRestrictedRoute } from "../withRestrictedRoute";
import { withPrivateRoute } from "../withPrivateRoute";
import { getStudentApplication } from "../../store/Action/studentapplication.action";
// import { AuthContext } from "../AuthContext";
import { auth } from "../../firebase";
import { Favourites } from "@/components/Favourites";

const index = () => {
  const dispatch = useDispatch();
  // const { authenticated, user } = useContext(AuthContext);
  useEffect(() => {
    if (auth.currentUser && !collegeList.length) {
      dispatch(getColleges());
      dispatch(getStudentApplication(auth.currentUser.uid));
    }
  }, [auth]);

  const collegeList = useSelector((state: any) => state.college.colleges);
 

  const loader = useSelector((state) => state.college.multiLoading);

  return (
    <DashboardLayout title="Dashboard">
      <div className="student-dashboard-main__mainpage">
        <div className="student-dashboard-main__recommendation">
          <Favourites collegeList={collegeList} loader={loader} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default withPrivateRoute(index);
