import React from "react";
import userImage from "./../public/User1.png";
import notificationIcon from "./../public/NotificationIcon.png";
import searchIcon from "./../public/SearchIcon.png";

const DashboardNavbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <div className="logo">
          <img src="/logo.png" alt="" />
          Basic
        </div>
      </div>
      <div className="navbar__right">
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
  );
};

export { DashboardNavbar };
