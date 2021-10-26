import React from "react";
import { useRouter } from "next/router";
const DashboardDetailInfo = ({ application }) => {
  const router = useRouter();
  const { basicInformation, backgroundInformation, selectedChoice } =
    application || {};
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
              <div className="dashboard-detail-info__keyText">
                Guardian Address
              </div>
              <div className="dashboard-detail-info__valueText">
                {basicInformation?.guardianCountry},
                {basicInformation?.guardianState},{" "}
                {basicInformation?.guardianAddress},
                {basicInformation?.guardianCity}
              </div>
            </div>
            {/* <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__keyText">
              Zip Code
            </div>
            <div className="dashboard-detail-info__valueText">
               {basicInformation?.guardianZipCode}
            </div>
          </div> */}
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
              <div className="dashboard-detail-info__keyText">References</div>

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
                    {backgroundInformation?.passportDetails?.nameOnPassport}
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
      {/* <Choice Detail */}
      {selectedChoice?.length && (
        <div className="dashboard-detail-info__detailCard">
          <div className="dashboard-detail-info__detailCardTitle">
            Choice Detail
          </div>
          <div className="dashboard-detail-info__detailCardInfo">
            <div className="dashboard-detail-info__cardRow">
              <div className="dashboard-detail-info__keyText">Level</div>
              <div className="dashboard-detail-info__valueText">
                {application?.basicInformation?.selectedLevel}
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

export { DashboardDetailInfo };
