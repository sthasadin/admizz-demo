import React from "react";
import Link from 'next/link';
import userImage from "./../public/User1.png";
import notificationIcon from "./../public/NotificationIcon.png";
import searchIcon from "./../public/SearchIcon.png";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

const DashboardNavbar = () => {

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
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
        <ListItem button key={"Home"}>
          <Link href="/"><ListItemText primary={"Home"} /></Link>
        </ListItem>
        <ListItem button key={"Colleges"}>
          <Link href="/colleges"><ListItemText primary={"Colleges"} /></Link>
        </ListItem>
        <ListItem button key={"Blogs"}>
          <Link href="/blogs"><ListItemText primary={"Blogs"} /></Link>
        </ListItem>
        <ListItem button key={"Contact"}>
          <Link href="/contact-us"><ListItemText primary={"Contact"} /></Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className="navbar">
      <div className="navbar__inner">
        <div className="navbar__logoImage">
          <img src="/logo.png" alt="" />
        </div>
        <div className="navbar__dashboardRight">
          <div className="navbar__menu">
            <nav className="navigation">
              <ul className="menu">
                <li className="menu-item">
                  <img className="navbar__navImage" src={searchIcon} />
                </li>
                <li className="menu-item">
                  <img className="navbar__navImage" src={notificationIcon} />
                </li>
                <li className="menu-item">
                  <img src={userImage} />
                </li>
                {/* <li className="menu-item">
                  <div className="navbar__hamburger" >
                    <Button onClick={toggleDrawer('left', true)}><MenuIcon /></Button>
                    <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                      {list('anchor')}
                    </Drawer>
                  </div>
                </li> */}
              </ul>
            </nav>
            <div className="navbar__hamburger" >
              <Button onClick={toggleDrawer('left', true)}><MenuIcon />Ham</Button>
              <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                {list('anchor')}
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
