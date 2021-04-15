import React from "react";
import StickyBox from "react-sticky-box";
import { DashboardSidebarTab } from "../DashboardSidebarTab";
import { Button } from "../Button";
import { auth, db } from "../../firebase";
import { useRouter } from "next/router";

const DashboardSidebar = () => {
  const router = useRouter();
  const logout = async () => {
    await auth.signOut()
    router.push("/");
  }
  return (
    <StickyBox>
      <div className="dashboard-sidebar">
        <div onClick={()=>router.push('/studentdashboardmain')}><DashboardSidebarTab  title="DashBoard" /></div>
        <DashboardSidebarTab title="Student" />
        <DashboardSidebarTab title="Result" />
        <DashboardSidebarTab title="Latest Update" />
        <DashboardSidebarTab title="Application Status" />
        <div onClick={logout} className="dashboard-sidebar__logout">
          LogOut
      </div>
      </div>
    </StickyBox>
  );
};

export { DashboardSidebar };
