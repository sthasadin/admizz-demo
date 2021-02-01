import React from "react";
import Link from 'next/link';
import { useRouter } from 'next/router'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const Navbar = () => {
  const router = useRouter();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      // className={clsx(classes.list, {
      //   [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      // })}
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
        <div className="navbar__logo">
          <div className="logo" onClick={() => router.push('/')}>
            <img src="/logo.png" alt="" />
          </div>
        </div>

        <React.Fragment key={'left'}>
          <Button onClick={toggleDrawer('left', true)}>{'left'}</Button>
          <Drawer anchor={'anchor'} open={state['left']} onClose={toggleDrawer('left', false)}>
            {list('anchor')}
          </Drawer>
        </React.Fragment>

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
