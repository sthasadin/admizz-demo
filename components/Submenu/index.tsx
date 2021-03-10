import React from "react";

const Submenu = (props: any) => {
  return (
    <div className="submenu-bar">
      <div className="submenu-bar__inner inner">
        <ul className="submenu">
          <li className="submenu__item active">
            <a href="#overview">Overview</a>
          </li>
          <li className="submenu__item">
            <a href="#course_fee">Courses & Fee</a>
          </li>
          {/* <li className="submenu__item">
            <a href="#ranking">Rankings & Awards</a>
          </li> */}
          <li className="submenu__item">
            <a href="#rating">Rating & Reviews</a>
          </li>
          <li className="submenu__item">
            <a href="#gallery">Gallery</a>
          </li>
          <li className="submenu__item">
            <a href="#admission">Admission Process</a>
          </li>
          <li className="submenu__item">
            <a href="#placement">Placements</a>
          </li>
          <li className="submenu__item">
            <a href="#qna">Q&A</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Submenu };
