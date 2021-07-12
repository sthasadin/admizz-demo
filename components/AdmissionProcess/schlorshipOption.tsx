import React from "react";

const ScholarshipOption = (props: any) => {
  return (
    <div className="scholarship-item">
      <img src={props.image} alt="" style={{ width: "100%" }} />
      <div className="scholarship-item__title">
        {props.title ? props.title : `scholarship ${props.count}`}
      </div>
    </div>
  );
};

export { ScholarshipOption };
