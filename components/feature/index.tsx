import React from "react";

const Feature = ({ data }) => {
  return (
    <div className="feature">
      <div className="feature-image">{data.icon}</div>
      <div className="feature-title">{data.title}</div>
      <div className="feature-description">{data.description}</div>
      <div className="learn-more">Learn More</div>
    </div>
  );
};

export { Feature };
