import React from "react";
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <div className="logo">
          <Link href="/">
            <img src="/logo.png" alt="" />
          </Link>
        </div>
      </div>
      <div className="navbar__right">
        <div className="navbar__menu">
          <nav className="navigation">
            <ul className="menu">
              <li className="menu-item">
                <Link href="/">Home</Link>
              </li>
              <li className="menu-item">
                <Link href="/collegelist">Colleges</Link>
              </li>
              <li className="menu-item">
                <Link href="/bloglist">Blogs</Link>
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
  );
};

export { Navbar };
