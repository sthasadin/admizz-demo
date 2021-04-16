import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import menuIcon from "../public/menuIcon.png";
import mobileVersionLogo from "../public/mobileVersionLogo.png";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";



const Navbar = (props: any) => {
  const router = useRouter();

  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
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
      className="navbar__drawer__container"
    >
      <div className="drawer__header">
        <img src="/whiteLogo.png" alt="admizz_logo" className="img__logo" />
        <div className="select__boxcontainer">
          <div className="selectbox__text">Study In</div>
          <Select className="selectBox">
            <MenuItem value="usa">USA</MenuItem>
            <MenuItem value="nepal">NEPAL</MenuItem>
          </Select>
        </div>
        <img
          src="/crossIcon.png"
          alt="crossIcon_logo"
          className="cross_logo"
          onClick={toggleDrawer("top", false)}
        />
      </div>

      <List className="navbar__listcontainer">
        <ListItem button key={"Home"} className="navbar__list">
          <Link href="/">
            <ListItemText primary={"Home"} />
          </Link>
        </ListItem>
        <ListItem button key={"Colleges"} className="navbar__list">
          <Link href="/colleges">
            <ListItemText primary={"Colleges"} />
          </Link>
        </ListItem>
        <ListItem button key={"Blogs"} className="navbar__list">
          <Link href="/blogs">
            <ListItemText primary={"Blogs"} />
          </Link>
        </ListItem>
        <ListItem button key={"FAQs"} className="navbar__list">
          <Link href="/faq">
            <ListItemText primary={"FAQs"} />
          </Link>
        </ListItem>
        <ListItem button key={"Contact"} className="navbar__list">
          <Link href="/contact-us">
            <ListItemText primary={"Contact"} />
          </Link>
        </ListItem>
        <ListItem button key={"Contact"} className="navbar__list">
          <Link href="/contact-us">
            <ListItemText primary={"Sign Up/Login"} />
          </Link>
        </ListItem>
      </List>

      <div className="navbar__applyaddresscontainer">
        <div className="navbar__applynowcontainer">
          <div className="navbar__applynowtext"> Ready to get started?</div>
          <Button className="navbar__applybtn">Apply Now</Button>
        </div>

        <div className="navbar__contactcontainer">
          <div className="navbar__contactdetails">
            <div className="navbar__contactIcons">
              <img src="/contactIcon.png" alt="contact_logo" />
              <div>Contact us</div>
            </div>
            <div className="navbar__contact1">
              <div className="navbar__countryname">Nepal:</div>
              <div className="navbar__contactnumber">+977 87654321</div>
            </div>
            <div className="navbar__contact2">
              <div className="navbar__countryname">India:</div>
              <div className="navbar__contactnumber">+977 87654321</div>
            </div>
          </div>

          <div className="navbar__contactdetails">
            <div className="navbar__contactIcons">
              <img src="/contactIcon.png" alt="contact_logo" />
              <div>Contact us</div>
            </div>
            <div className="navbar__contact1">
              <div className="navbar__countryname">Nepal:</div>
              <div className="navbar__contactnumber">+977 87654321</div>
            </div>
            <div className="navbar__contact2">
              <div className="navbar__countryname">India:</div>
              <div className="navbar__contactnumber">+977 87654321</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="navbar">
      <div className="navbar__inner">
        <div className="navbar__logo">
          <div className="logo" onClick={() => router.push("/")}>
            <img
              src={props.windowsSize < 550 ? mobileVersionLogo : "/logo.png"}
              alt="Admizz_logo"
            />
          </div>
        </div>

        <div className="navbar__hamburger">
          <Button onClick={toggleDrawer("top", true)}>
            <img src={menuIcon} />
          </Button>
          <Drawer
            anchor={"top"}
            open={state["top"]}
            onClose={toggleDrawer("top", false)}
            className="navbar__drawer"
          >
            {list("anchor")}
          </Drawer>
        </div>

        <div className="navbar__right">
          <div className="navbar__menu">
            <nav className="navigation">
              <ul className="menu">
                <li className="menu-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="menu-item">
                  <Link href="/colleges">Colleges</Link>
                </li>
                <li className="menu-item">
                  <Link href="/blogs">Blogs</Link>
                </li>
                <li className="menu-item">
                  <Link href="/faq">FAQs</Link>
                </li>
                <li className="menu-item">
                  <Link href="/contact-us">Contact</Link>
                </li>
              </ul>
            </nav>
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

export { Navbar };
