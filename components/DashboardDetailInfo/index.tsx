import React from "react";
import moment from "moment";
import app from "next/app";

const DashboardDetailInfo = ({ application }) => {
  const { basicInformation, backgroundInformation, selectedChoice, ...rest } =
    application || {};
  function truncateString(str, num) {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    }
    return str;
  }
  return (
    <div className="dashboard-detail-info">
      {/* <Basic Card Info */}
      {basicInformation && (
        <div className="dashboard-detail-info__detailCard">
          <div className="dashboard-detail-info__detailCardTitle">
            Basic Information
          </div>
          <div className="dashboard-detail-info__detailCardInfo">
            <div className="dashboard-detail-info__cardRow">
              <div className="dashboard-detail-info__keyText">Name</div>
              <div className="dashboard-detail-info__valueText">
                {basicInformation?.fullName}
              </div>
            </div>
            <div className="dashboard-detail-info__cardRow">
              <div className="dashboard-detail-info__keyText">Email</div>
              <div
                className="dashboard-detail-info__valueText"
                style={{ whiteSpace: "nowrap" }}
              >
                {basicInformation?.email}
              </div>
            </div>
            <div className="dashboard-detail-info__cardRow">
              <div className="dashboard-detail-info__keyText">Phone</div>
              <div className="dashboard-detail-info__valueText">
                {basicInformation?.countryCode} {basicInformation?.phoneNumber}
              </div>
            </div>
            <div className="dashboard-detail-info__cardRow">
              <div className="dashboard-detail-info__keyText">Gender</div>
              <div className="dashboard-detail-info__valueText">
                {basicInformation?.gender}
              </div>
            </div>
            <div className="dashboard-detail-info__cardRow">
              <div className="dashboard-detail-info__keyText">Nationality</div>
              <div className="dashboard-detail-info__valueText">
                {basicInformation?.nationality}
              </div>
            </div>
            <div className="dashboard-detail-info__cardRow">
              <div className="dashboard-detail-info__keyText">Status</div>
              <div className="dashboard-detail-info__valueText">
                {application?.status}
              </div>
            </div>
            <div className="dashboard-detail-info__cardRow">
              <div className="dashboard-detail-info__keyText">
                Date of Birth
              </div>
              <div className="dashboard-detail-info__valueText">
                {basicInformation?.DOB}
              </div>
            </div>
            <div className="dashboard-detail-info__cardRow">
              <div className="dashboard-detail-info__keyText">Address</div>
              <div className="dashboard-detail-info__valueText">
                {basicInformation?.guardianCountry},
                {basicInformation?.guardianState},{" "}
                {basicInformation?.guardianAddress},
                {basicInformation?.guardianCity}
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
      {/* <Background Information */}
      {backgroundInformation && (
        <div className="dashboard-detail-info__detailCard">
          <div className="dashboard-detail-info__detailCardTitle">
            Background Information
          </div>
          <div className="dashboard-detail-info__detailCardInfo">
            <div className="dashboard-detail-info__cardRow">
              <div className="dashboard-detail-info__keyText">
                Citizenship No.
              </div>
              <div className="dashboard-detail-info__valueText">
                {backgroundInformation?.citizenId}
              </div>
            </div>
            <div className="dashboard-detail-info__cardRow">
              <div className="dashboard-detail-info__keyText">
                Parents Information
              </div>

              <div className="dashboard-detail-info__valueText">
                <div>{backgroundInformation?.references?.fullName}</div>
                <div> {backgroundInformation?.references?.emailAddress}</div>
                <div> {backgroundInformation?.references?.address}</div>
                <div>{backgroundInformation?.references?.phoneNumber}</div>
              </div>
            </div>
            {backgroundInformation?.passportDetails && (
              <>
                {" "}
                <div className="dashboard-detail-info__cardRow">
                  <div className="dashboard-detail-info__keyText">
                    Passport Name
                  </div>
                  <div className="dashboard-detail-info__valueText">
                    {truncateString(
                      backgroundInformation?.passportDetails?.nameOnPassport,
                      15
                    )}
                  </div>
                </div>
                <div className="dashboard-detail-info__cardRow">
                  <div className="dashboard-detail-info__keyText">
                    Passport Number
                  </div>
                  <div className="dashboard-detail-info__valueText">
                    {backgroundInformation?.passportDetails?.numberOnPassport}
                  </div>
                </div>
                <div className="dashboard-detail-info__cardRow">
                  <div className="dashboard-detail-info__keyText">
                    Passport Issue Country
                  </div>
                  <div className="dashboard-detail-info__valueText">
                    {
                      backgroundInformation?.passportDetails
                        ?.passportIssuedCountry
                    }
                  </div>
                </div>
                <div className="dashboard-detail-info__cardRow">
                  <div className="dashboard-detail-info__keyText">
                    Passport Expire Date
                  </div>
                  <div className="dashboard-detail-info__valueText">
                    {backgroundInformation?.passportDetails?.passportExpireDate}
                  </div>
                </div>
              </>
            )}
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
      {/* <Basic Card Info */}
      {basicInformation && (
        <div className="dashboard-detail-info__detailCard">
          <div className="dashboard-detail-info__detailCardTitle">
            Your Application Status
          </div>
          <div className="dashboard-detail-info__detailCardInfo">
            <div className="dashboard-detail-info__cardRow">
              <div className="dashboard-detail-info__keyText">Status</div>
              {/* <div className="dashboard-detail-info__valueText">
                <span className={`application-status ${application?.status}`}>
                  {application?.status}
                </span>
              </div> */}
              <div className="dashboard-detail-info__valueText">
                {application?.status}
              </div>
            </div>

            <div className="dashboard-detail-info__cardRow">
              <div className="dashboard-detail-info__keyText">
                Download the offer letter
              </div>

              <div
                style={{ display: "flex", flexDirection: "column" }}
                className="dashboard-detail-info__valueText"
              >
                {/* {rest.offer_letter.map((letter) => (
                    <a href={letter} download target="_blank">
                      Download
                    </a>
                  ))} */}
                <a href={rest.offer_letter} download target="_blank"></a>
              </div>
            </div>
            {application && application.length > 0 && (
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
            )}
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

export { DashboardDetailInfo };
