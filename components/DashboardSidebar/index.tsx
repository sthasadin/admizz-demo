import React from "react";
import StickyBox from "react-sticky-box";

import { Button } from "../Button";
import { auth, db } from "../../firebase";
import { useRouter } from "next/router";
const STStickyBox: any = StickyBox;
const DashboardSidebar = () => {
  const router = useRouter();
  const logout = async () => {
    await auth.signOut();
    router.push("/");
  };
  return (
    <STStickyBox style={{ height: "100vh" }}>
      <div
        className="dashboard-sidebar"
        style={{ width: "100%", cursor: "pointer" }}
        // onClick={() => router.push("/")}
      >
        <div
          className={`dashboard-sidebar-tab  ${
            router.pathname === "/studentdashboardmain"
              ? "active-dashboard"
              : ""
          }`}
          onClick={() => router.push("/studentdashboardmain")}
        >
          Dashboard
        </div>

        {/* <div
          className={`dashboard-sidebar-tab ${
            router.pathname === "/dashboardbasicinfo/status"
              ? "active-dashboard"
              : ""
          }`}
          onClick={() => router.push("/dashboardbasicinfo/status")}
        >
          Application Status
        </div> */}
        <div
          className={`dashboard-sidebar-tab `}
          onClick={() => router.push("/favourites")}
        >
          My Favourites
        </div>
        <div
          className={`dashboard-sidebar-tab `}
          onClick={() => router.push("/")}
        >
          Back To Home
        </div>
        <div onClick={logout} className="dashboard-sidebar__logout">
          Logout
        </div>
      </div>
    </STStickyBox>
  );
};

export { DashboardSidebar };
