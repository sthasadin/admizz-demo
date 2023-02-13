import React from "react";

const CallToAction = (props: any) => {
  return (
    <button
      className={`cta-button ${props.className ? props.className : ""}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export { CallToAction };
