import React from "react";
import { useRouter } from "next/router";
const DashboardApplicationStatus = ({application}) => {
  const router = useRouter()
  const {basicInfo,...rest} = application || {}
  return (
    <div className="dashboard-detail-info">
      {/* <Basic Card Info */}
    { basicInfo && <div className="dashboard-detail-info__detailCard">
        <div className="dashboard-detail-info__detailCardTitle">
          Your Application Status 
        </div>
        <div className="dashboard-detail-info__detailCardInfo">
          
          <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__keyText">
              Status
            </div>
            <div className="dashboard-detail-info__valueText">
               {application?.status}
            </div>
          </div>
           {rest?.offer_letter && <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__keyText">
              Download the offer letter
            </div>
            <div className="dashboard-detail-info__valueText">
               <a href={rest.offer_letter} download target="_blank">Download</a>
            </div>
          </div>}
          <div className="dashboard-detail-info__cardRowButton">
            {/* <div className="dashboard-detail-info__viewText">
              View
            </div> */}
            {/* <div className="dashboard-detail-info__editText" onClick={()=>router.push('/dashboardbasicinfo/Apply?edit=true')} style={{cursor:'pointer'}}>
              Edit
            </div> */}
          </div>
        </div>
      </div>
}
    
    </div>
  );
};

export { DashboardApplicationStatus };
