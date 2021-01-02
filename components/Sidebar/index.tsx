import React from "react";
import { CallToAction } from "../Button/callToAction";

const Sidebar = (props: any) => {
  return (
    <aside className="sidebar">
      <CallToAction className="filled full-width">Apply Now</CallToAction>
    </aside>
  );
};

export { Sidebar };
