import React from "react";

export const Card1 = (props) => {
  return (
    <a className={"card-1"}
    href = {props.href}
    >
        
      <div className={`card-1__inner ${props.bgImage}`}>
        <div className="card-1__about">
          <div className="card-1__title">

            <div>{props.title}</div>
          </div>
          <div className="card-1__subtitle">
          <div>{props.subText}</div>
          </div>
        </div>
      </div>
    </a>
  );
};
