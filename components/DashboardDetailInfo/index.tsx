import React from "react";

const DashboardDetailInfo = () => {
  return (
    <div className="dashboard-detail-info">
      {/* <Basic Card Info */}
      <div className="dashboard-detail-info__detailCard">
        <div className="dashboard-detail-info__detailCardTitle">
          Basic Information
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
          <div className="dashboard-detail-info__cardRowButton">
            <div className="dashboard-detail-info__viewText">
              View
            </div>
            <div className="dashboard-detail-info__editText">
              Edit
            </div>
          </div>
        </div>
      </div>

      {/* <Background Information */}
      <div className="dashboard-detail-info__detailCard">
        <div className="dashboard-detail-info__detailCardTitle">
          Background Information
        </div>
        <div className="dashboard-detail-info__detailCardInfo">
          <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__keyText">
              Personal Detail
            </div>
          </div>
          <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__keyText">
              Citizenship No. 
            </div>
            <div className="dashboard-detail-info__valueText">
              987654321
            </div>
          </div>
          <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__keyText">
              References
            </div>
          </div>
          <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__valueText">
              Ram B. Mahat
            </div>
            <div className="dashboard-detail-info__valueText">
              987654321
            </div>
            <div className="dashboard-detail-info__valueText">
              987654321
            </div>
          </div>
          <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__valueText">
              Ram B. Mahat
            </div>
            <div className="dashboard-detail-info__valueText">
              987654321
            </div>
            <div className="dashboard-detail-info__valueText">
              987654321
            </div>
          </div>
          <div className="dashboard-detail-info__cardRowButton">
            <div className="dashboard-detail-info__viewText">
              View
            </div>
            <div className="dashboard-detail-info__editText">
              Edit
            </div>
          </div>
        </div>
      </div>

      {/* <Choice Detail */}
      <div className="dashboard-detail-info__detailCard">
        <div className="dashboard-detail-info__detailCardTitle">
          Choice Detail
        </div>
        <div className="dashboard-detail-info__detailCardInfo">
          <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__keyText">
              Level
            </div>
            <div className="dashboard-detail-info__valueText">
              Under Graduate
            </div>
          </div>
          <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__keyText">
              Stream  
            </div>
            <div className="dashboard-detail-info__valueText">
              Engineering, Management, Humanities
            </div>
          </div>
          <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__keyText">
              Specialization
            </div>
            <div className="dashboard-detail-info__valueText">
              Computer Science, Electronics, Medical Science
            </div>
          </div>
          <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__keyText">
              College/University
            </div>
            <div className="dashboard-detail-info__valueText">
              Thaper, JIT, KIIT, BMS Engineering, Other
            </div>
          </div>
          <div className="dashboard-detail-info__cardRowButton">
            <div className="dashboard-detail-info__viewText">
              View
            </div>
            <div className="dashboard-detail-info__editText">
              Edit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DashboardDetailInfo };
