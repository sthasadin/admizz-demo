import React, { useContext, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { DashboardLayout } from "../../layouts/dashboardLayout";
import { withPrivateRoute } from "../withPrivateRoute";
import { auth } from "../../firebase";
import { Favourites } from "components/Favourites/index";
import { getFavourites } from "store/Action/collegefavourite.action";
import { AuthContext } from "pages/AuthContext";

const index = () => {
  const dispatch = useDispatch();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (auth.currentUser && !collegeList?.length) {
      dispatch(getFavourites(user.uid));
    }
  }, [auth]);

  const collegeList = useSelector(
    (state: any) => state.favourites.userFavorite
  );

  return (
    <DashboardLayout title="Dashboard">
      <div className="student-dashboard-main__mainpage">
        <div className="student-dashboard-main__recommendation">
          <Favourites collegeList={collegeList} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default withPrivateRoute(index);
