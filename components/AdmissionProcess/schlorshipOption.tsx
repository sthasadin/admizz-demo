import React from "react";

const ScholarshipOption = (props: any) => {
  return (
    <div className="scholarship-item">
      <div className="scholoarship-item__logo">
        <img
          src={props.image}
          alt=""
          style={{ maxWidth: "120px", maxHeight: "50px" }}
        />
      </div>
      <div className="scholarship-item__title">{props.title}</div>
    </div>
  );
};

export { ScholarshipOption };
