import React from "react";
import moment from "moment";
const DashboardApplicationStatus = ({ application }) => {
  const { basicInformation, ...rest } = application || {};
  // console.log(application);
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
                  color: "#333",
                  fontWeight: 400,
                }}
              >
                {application?.remark.map((item, i) => {
                  return (
                    <div key={i} className="remark-container">
                      <div className="remark-content">{item.remark} </div>
                      <div>
                        {moment(item.createdAt).format("DD/MMMM/YYYY")}{" "}
                      </div>
                    </div>
                  );
                })}
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
