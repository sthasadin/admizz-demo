import React from "react";

const DashboardDetailInfo = ({application}) => {
  const {basicInfo,backgroundInformation, selectedChoice} = application || {}
  return (
    <div className="dashboard-detail-info">
      {/* <Basic Card Info */}
    { basicInfo && <div className="dashboard-detail-info__detailCard">
        <div className="dashboard-detail-info__detailCardTitle">
          Basic Information
        </div>
        <div className="dashboard-detail-info__detailCardInfo">
          <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__keyText">
              Name
            </div>
            <div className="dashboard-detail-info__valueText">
               {basicInfo?.fullName}
            </div>
          </div>
          <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__keyText">
              Email
            </div>
            <div className="dashboard-detail-info__valueText">
              {basicInfo?.email}
            </div>
          </div>
          <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__keyText">
              Phone 
            </div>
            <div className="dashboard-detail-info__valueText">
               {basicInfo?.countryCode} {basicInfo?.phoneNumber}
            </div>
          </div>
          <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__keyText">
              Gender
            </div>
            <div className="dashboard-detail-info__valueText">
               {basicInfo?.gender}
            </div>
          </div>
          <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__keyText">
              Nationality 
            </div>
            <div className="dashboard-detail-info__valueText">
               {basicInfo?.nationality}
            </div>
          </div>
          <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__keyText">
              Status
            </div>
            <div className="dashboard-detail-info__valueText">
               {application?.status}
            </div>
          </div>
          <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__keyText">
              Date of Birth
            </div>
            <div className="dashboard-detail-info__valueText">
               {basicInfo?.DOB}
            </div>
          </div>
          <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__keyText">
              Guardian Address
            </div>
            <div className="dashboard-detail-info__valueText">
               {basicInfo?.guardianCountry},{basicInfo?.guardianState}, {basicInfo?.guardianAddress},{basicInfo?.guardianCity}
            </div>
          </div>
          <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__keyText">
              Zip Code
            </div>
            <div className="dashboard-detail-info__valueText">
               {basicInfo?.guardianZipCode}
            </div>
          </div>
          <div className="dashboard-detail-info__cardRowButton">
            {/* <div className="dashboard-detail-info__viewText">
              View
            </div> */}
            <div className="dashboard-detail-info__editText">
              Edit
            </div>
          </div>
        </div>
      </div>
}
      {/* <Background Information */}
    {backgroundInformation && <div className="dashboard-detail-info__detailCard">
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
              References
            </div>
          </div>
          <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__valueText">
              {backgroundInformation?.references?.fullName}, {backgroundInformation?.references?.emailAddress}
            </div>
            <div className="dashboard-detail-info__valueText">
              {backgroundInformation?.references?.address}, {`${backgroundInformation?.references?.phoneNumber}`}
            </div>
            {/* <div className="dashboard-detail-info__valueText">
              {backgroundInformation?.references?.address}
            </div> */}
          </div>
         { backgroundInformation?.passportDetails &&<> <div className="dashboard-detail-info__cardRow">
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
              {backgroundInformation?.passportDetails?.passportIssuedCountry}
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
         } 
          <div className="dashboard-detail-info__cardRowButton">
            {/* <div className="dashboard-detail-info__viewText">
              View
            </div> */}
            <div className="dashboard-detail-info__editText">
              Edit
            </div>
          </div>
        </div>
      </div>
}
      {/* <Choice Detail */}
     { selectedChoice?.length &&  <div className="dashboard-detail-info__detailCard">
        <div className="dashboard-detail-info__detailCardTitle">
          Choice Detail
        </div>
        <div className="dashboard-detail-info__detailCardInfo">
          <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__keyText">
              Level
            </div>
            <div className="dashboard-detail-info__valueText">
              {application?.basicInfo?.selectedLevel}
            </div>
          </div>
          <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__keyText">
              Stream  
            </div>
            <div className="dashboard-detail-info__valueText">
              {selectedChoice?.map(choice => choice.collegeStream).join(', ')}
            </div>
          </div>
          <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__keyText">
              Specialization
            </div>
            <div className="dashboard-detail-info__valueText">
              {selectedChoice?.map(choice => choice.collegeProgram).join(', ')}
            </div>
          </div>
          <div className="dashboard-detail-info__cardRow">
            <div className="dashboard-detail-info__keyText">
              College/University
            </div>
            <div className="dashboard-detail-info__valueText">
              {selectedChoice?.map(choice => choice.collegeName).join(', ')}
            </div>
          </div>
          <div className="dashboard-detail-info__cardRowButton">
            {/* <div className="dashboard-detail-info__viewText">
              View
            </div> */}
            <div className="dashboard-detail-info__editText">
              Edit
            </div>
          </div>
        </div>
      </div>
    }
    </div>
  );
};

export { DashboardDetailInfo };
