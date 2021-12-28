import React from "react";
import moment from "moment";
const DashboardApplicationStatus = ({ application }) => {
  const { basicInformation,selectedChoice, ...rest } = application || {};
  // console.log(application);
  return (
     <div className="dashboard-detail-info">
   

    
    {selectedChoice?.length && (
      <div className="dashboard-detail-info__detailCard">
        <div className="dashboard-detail-info__detailCardTitle">
          Choice Detail
        </div>
        <div className="dashboard-detail-info__detailCardInfo">
          <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__keyText">Level</div>
            <div className="dashboard-detail-info__valueText">
              {application?.basicInformation?.selectedLevel.value}
            </div>
          </div>
          <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__keyText">Stream</div>
            <div className="dashboard-detail-info__valueText">
              {selectedChoice
                ?.map((choice) => choice.collegeStream)
                .join(", ")}
            </div>
          </div>
          <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__keyText">
              Specialization
            </div>
            <div className="dashboard-detail-info__valueText">
              {selectedChoice
                ?.map((choice) => choice.collegeProgram)
                .join(", ")}
            </div>
          </div>
          <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__keyText">
              College/University
            </div>
            <div className="dashboard-detail-info__valueText">
              {selectedChoice?.map((choice) => choice.collegeName).join(", ")}
            </div>
          </div>
          <div className="dashboard-detail-info__cardRowButton">
            {/* <div className="dashboard-detail-info__viewText">
            View
          </div> */}
            {/* <div className="dashboard-detail-info__editText" onClick={()=>router.push('/dashboardbasicinforamtion/Apply?edit=true')} style={{cursor:'pointer'}}>
            Edit
          </div> */}
          </div>
        </div>
      </div>
    )}
</div>
  );
};

export { DashboardApplicationStatus };
