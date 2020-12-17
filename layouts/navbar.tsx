import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <div className="logo">
          <img src="/logo.png" alt="" />
        </div>
      </div>
      <div className="navbar__right">
        <div className="navbar__menu">
          <nav className="navigation">
            <ul className="menu">
              <li className="menu-item">
                <a href="#">Home</a>
              </li>
              <li className="menu-item">
                <a href="#">Colleges</a>
              </li>
              <li className="menu-item">
                <a href="#">Blogs</a>
              </li>
              <li className="menu-item">
                <a href="#">Contact</a>
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

export { Navbar };
