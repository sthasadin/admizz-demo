import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import userImage from "./../public/User1.png";
import notificationIcon from "./../public/NotificationIcon.png";
import searchIcon from "./../public/SearchIcon.png";
import StickyBox from "react-sticky-box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";

const DashboardNavbar = () => {
  const [state, setState] = React.useState({
    left: false,
  });
  const router = useRouter();

  const toggleDrawer = (anchor, open) => (event) => {
    console.log(`anchor ${anchor}`);
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key={"Dashboard"}>
          <Link href="/studentdashboardmain">
            <ListItemText primary={"Dashboard"} />
          </Link>
        </ListItem>
        <ListItem button key={"Application Status"}>
          <Link href="/dashboardbasicinfo/status">
            <ListItemText primary={"Application Status"} />
          </Link>
        </ListItem>
        <ListItem button key={"back"}>
          <Link href="/">
            <ListItemText primary={"Back To Home"} />
          </Link>
        </ListItem>
        <ListItem button key={"logout"}>
          <Link href="/contact-us">
            <ListItemText primary={"logout"} />
          </Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div
      className="navbar"
      style={{ padding: "10px", borderBottom: "1px solid #e0e0e0" }}
    >
      <div className={`navbar__inner dashboard-navbar`}>
        <div className="logo" style={{ cursor: "pointer" }}>
          <img src="/logo.png" alt="" onClick={() => router.push("/")} />
        </div>
        <div className="navbar__dashboardRight">
          <div className="navbar__menu">
            <div className="navbar__hamburger">
              <Button onClick={toggleDrawer("left", true)}>
                <MenuIcon />
              </Button>
              <Drawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
              >
                {list("anchor")}
              </Drawer>
            </div>
          </div>
          <div className="navbar__search-icon">
            <div className="search-icon"></div>
          </div>
          <div className="navbar__drawer-icon">
            <div className="drawer-icon"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DashboardNavbar };
