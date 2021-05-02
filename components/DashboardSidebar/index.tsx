import React from "react";
import StickyBox from "react-sticky-box";
import { DashboardSidebarTab } from "../DashboardSidebarTab";
import { Button } from "../Button";
import { auth, db } from "../../firebase";
import { useRouter } from "next/router";

const DashboardSidebar = () => {
  const router = useRouter();
  const logout = async () => {
    await auth.signOut();
    router.push("/");
  };
  return (
    <StickyBox style={{ height: "100vh" }}>
      <div
        className="dashboard-sidebar"
        style={{ width: "100%", cursor: "pointer" }}
        onClick={() => router.push("/")}
      >
        <div style={{ margin: "0 auto" }}>
          <img src="/logo.png" alt="admizz" />
        </div>
        <div onClick={() => router.push("/studentdashboardmain")}>
          <DashboardSidebarTab title="Dashboard" />
        </div>
        {/* <div onClick={() => router.push("/dashboardbasicinfo/Apply")}>
          <DashboardSidebarTab title="Apply Application" />
        </div> */}
        {/* <DashboardSidebarTab title="Result" /> */}
        {/* <div onClick={()=>router.push('/studentapplicationstatus')}>
        <DashboardSidebarTab  title="Application Status" />
        </div> */}
        <div onClick={() => router.push("/")}>
          <DashboardSidebarTab title="Back To Home" />
        </div>
        <div onClick={logout} className="dashboard-sidebar__logout">
          LogOut
        </div>
      </div>
    </StickyBox>
  );
};

export { DashboardSidebar };
