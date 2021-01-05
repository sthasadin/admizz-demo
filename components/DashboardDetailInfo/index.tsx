import React from "react";
import { Button } from "../Button";

const DashboardDetailInfo = () => {
  return (
    <div className="dashboard-detail-info">
      {/* <Basic Card Info */}
      <div className="dashboard-detail-info__detailCard">
        <div className="dashboard-detail-info__detailCardTitle">
          Basic Info
        </div>
        <div className="dashboard-detail-info__detailCardInfo">
          <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__keyText">
              Email
            </div>
            <div className="dashboard-detail-info__valueText">
              someemail@domain.com
            </div>
          </div>
          <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__keyText">
              Phone 
            </div>
            <div className="dashboard-detail-info__valueText">
              987654321
            </div>
          </div>
          <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__keyText">
              Status
            </div>
            <div className="dashboard-detail-info__valueText">
              Active
            </div>
          </div>
          <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__keyText">
              Date of Birth
            </div>
            <div className="dashboard-detail-info__valueText">
              1994-02-12
            </div>
          </div>
          <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__keyText">
              Country
            </div>
            <div className="dashboard-detail-info__valueText">
              Nepal
            </div>
          </div>
          <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__keyText">
              Residential Address
            </div>
            <div className="dashboard-detail-info__valueText">
              kathmandu
            </div>
          </div>
          <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__keyText">
              Permanent Address
            </div>
            <div className="dashboard-detail-info__valueText">
              Kathmandu
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-detail-info__detailCard">
        <div className="dashboard-detail-info__detailCardTitle">
          Basic Info
        </div>
      </div>
      <div className="dashboard-detail-info__detailCard">
        <div className="dashboard-detail-info__detailCardTitle">
          Basic Info
        </div>
      </div>
    </div>
  );
};

export { DashboardDetailInfo };
