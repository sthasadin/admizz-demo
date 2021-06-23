import React from "react";

export const Card1 = (props) => {
  return (
    <div className="card-1">
      <div className={`card-1__inner ${props.bgImage}`}>
        <div className="card-1__about">
          <div className="card-1__title">
            <a href="#">{props.title}</a>
          </div>
          <div className="card-1__subtitle">{props.subText}</div>
        </div>
      </div>
    </div>
  );
};
