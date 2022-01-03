import React from "react";

const SectionTitle = (props: any) => {
  return (
    <div className="section-title">
      <div className="section-title__memberTitle">
        <div className="section-title__memberTitleText">{props.title}</div>
      </div>
      <hr />
    </div>
  );
};

export { SectionTitle };
