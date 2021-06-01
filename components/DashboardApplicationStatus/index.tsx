import React from "react";
import { useRouter } from "next/router";
const DashboardApplicationStatus = ({ application }) => {
  const router = useRouter();
  const { basicInformation, ...rest } = application || {};
  return (
    <div className="dashboard-detail-info">
      {/* <Basic Card Info */}
      {basicInformation && (
        <div className="dashboard-detail-info__detailCard">
          <div className="dashboard-detail-info__detailCardTitle">
            Your Application Status
          </div>
          <div className="dashboard-detail-info__detailCardInfo">
            <div className="dashboard-detail-info__cardRow">
              <div className="dashboard-detail-info__keyText">Status</div>
              <div className="dashboard-detail-info__valueText">
                <span className={`application-status ${application?.status}`}>
                  {application?.status}
                </span>
              </div>
            </div>
            {rest?.offer_letter && (
              <div className="dashboard-detail-info__cardRow">
                <div className="dashboard-detail-info__keyText">
                  Download the offer letter
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column" }}
                  className="dashboard-detail-info__valueText"
                >
                  {rest.offer_letter.map((letter) => (
                    <a href={letter} download target="_blank">
                      Download
                    </a>
                  ))}
                </div>
              </div>
            )}
            <div
              className="dashboard-detail-info__cardRow"
              style={{ display: "block" }}
            >
              <div
                className="dashboard-detail-info__keyText"
                style={{
                  marginBottom: "5px",
                }}
              >
                Remark
              </div>
              <div
                className="dashboard-detail-info__valueText"
                style={{
                  textAlign: "left",
                  width: "100%",
                  backgroundColor: "#e5e5e5",
                  padding: "0 5px",
                  fontWeight: 400,
                }}
              >
                {application?.remark}
              </div>
            </div>
            <div className="dashboard-detail-info__cardRowButton">
              {/* <div className="dashboard-detail-info__viewText">
              View
            </div> */}
              {/* <div className="dashboard-detail-info__editText" onClick={()=>router.push('/dashboardbasicinforbasicInformation/Apply?edit=true')} style={{cursor:'pointer'}}>
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
