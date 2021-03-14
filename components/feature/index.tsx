import React from "react";

const Feature = ({ data }) => {
  return (
    <div className="feature">
      <div className="feature__heading">Our Features:</div>

      <div className="feature__listcontainer">
        <div className="feature__details">
          <img src={data.icon} />
          <div className="feature__title">{data.title}</div>
        </div>
        <div className="feature__descrition">{data.description}</div>
      </div>

      <div className="feature__btn">
        <button className="btn btn--block btn--light">Learn More</button>
      </div>
    </div>
  );
};

export { Feature };
