import React from "react";

const ProgramSubMenu = () => {
  const [state, setState] = React.useState("about");
  return (
    <div className="submenu-bar">
      <div className="submenu-bar__inner section-wrapper">
        <ul
          className="submenu"
          style={{ justifyContent: "unset", gap: "50px" }}
        >
          <li
            className={`submenu__item ${state === "about" ? "active" : ""}`}
            onClick={() => setState("about")}
          >
            <a href="#about">About MBA</a>
          </li>
          <li
            className={`submenu__item ${
              state === "colleges" ? "active" : ""
            }  `}
            onClick={() => setState("colleges")}
          >
            <a href="#colleges">MBA Colleges</a>
          </li>

          <li
            className={`submenu__item ${state === "outline" ? "active" : ""}`}
            onClick={() => setState("outline")}
          >
            <a href="#outline">Course Outline</a>
          </li>
          <li
            className={`submenu__item ${state === "career" ? "active" : ""}`}
            onClick={() => setState("career")}
          >
            <a href="#career">Career Options</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { ProgramSubMenu };
