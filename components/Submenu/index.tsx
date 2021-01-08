import React from "react";

const Submenu = (props: any) => {
  return (
    <div className="submenu-bar">
      <div className="submenu-bar__inner inner">
        <ul className="submenu">
          <li className="submenu__item active">
            <a href="#">Overview</a>
          </li>
          <li className="submenu__item">
            <a href="#">Courses & Fee</a>
          </li>
          <li className="submenu__item">
            <a href="#">Rankings & Awards</a>
          </li>
          <li className="submenu__item">
            <a href="#">Rating & Reviews</a>
          </li>
          <li className="submenu__item">
            <a href="#">Gallery</a>
          </li>
          <li className="submenu__item">
            <a href="#">Admission Process</a>
          </li>
          <li className="submenu__item">
            <a href="#">Placements</a>
          </li>
          <li className="submenu__item">
            <a href="#">Q&A</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Submenu };
