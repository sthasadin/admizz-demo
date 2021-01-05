import React from "react";
import { Select } from "../Select";
import { Input } from "../Input";

const DashboardBasicInfo = () => {
  return (
    <div className="dashboard-basic-info">
      {/* Apply For */}
      <div className="dashboard-basic-info__sectionContainer">
        <div className="dashboard-basic-info__pageTitle">
          Dashboard > Apply
        </div>
        <div className="dashboard-basic-info__sectionTitle"> 
          Applying For
        </div>
        <div className ="dashboard-basic-info__formContainer">
          <div className="dashboard-basic-info__inputContainer">
            <Select title="Select Stream" />
          </div>
          <div className="dashboard-basic-info__inputContainer">
            <Select title="Choose Catagory" />
          </div>
        </div>
      </div>

      {/* Personal Detail */}
      <div className="dashboard-basic-info__sectionContainer">
        <div className="dashboard-basic-info__sectionTitle"> 
          Personal Detail
        </div>
        <div className ="dashboard-basic-info__formContainer">
          <div className="dashboard-basic-info__inputContainerSmall">
            <Input placeholder={"Full Name"} fullWidth margin={"25px 0px 16px 0px"} />
          </div>
          <div className="dashboard-basic-info__inputContainerSmall">
            <Input placeholder={"Middle Name"} fullWidth margin={"25px 0px 16px 0px"} />
          </div>
          <div className="dashboard-basic-info__inputContainerSmall">
            <Input placeholder={"Last Name"} fullWidth margin={"25px 0px 16px 0px"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { DashboardBasicInfo };
