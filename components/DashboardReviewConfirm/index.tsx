import React, { useEffect, useState } from "react";
import { Grid, Button } from "@material-ui/core";
// import { Button } from "../Button";
import { storage, db } from "../../firebase";
import Checkbox from "@material-ui/core/Checkbox";
import { UploadButton } from "../Button/uploadButton";
import AppliedCollege from "./appliedCollege";
import CameraAltIcon from "@material-ui/icons/CameraAlt";

const DashboardReviewConfirm = (props) => {
  const [document, setDocument] = useState({});
  const [profileImage, setProfileImage] = React.useState(null);
  const [signatureImage, setSignatureImage] = React.useState(null);
  const [isTermsChecked, setIstermsChecked] = React.useState(false);
  // console.log(props.selectedChoice);

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  const {
    basicInfo,
    backgroundInfo,
    academicInfo,
    selectedChoice,
    setBackgroundInfo,
    setAcademicInfo,
  } = props;
 

  // trunclate string
  function truncateString(str, num = 20) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }

  // submit all form
  const handelSubmit = async () => {
    const backgroundInformation = {
      haveAppliedForPassport: backgroundInfo.haveAppliedForPassport,
      havePassport: backgroundInfo.havePassport,
      passportDetails: backgroundInfo.passportDetails,
      passportId: backgroundInfo.passportId,
      references: backgroundInfo.references,
    };
    // var documentRes = {};
    for (const [key] of Object.entries(academicInfo.certificatesImage)) {
      // console.log(key);
      const name = Math.random().toString(36).slice(1);
      const name2 = Math.random().toString(36).slice(1);
      const mixName = name + name2;

      if (academicInfo.certificatesImage[key] == null) {
      } else {
        storage
          .ref(`student-application/${mixName}`)
          .put(academicInfo.certificatesImage[key])
          .then(() => {
            storage
              .ref("student-application")
              .child(mixName)
              .getDownloadURL()
              .then((url) => {
                console.log(url);
                setAcademicInfo({
                  ...academicInfo,
                  [key]: url,
                });
                // documentRes[key] = url;
              });
          });
      }
    }
    if (backgroundInfo.documentImage !== null) {
      const name = Math.random().toString(36).slice(1);
      const name2 = Math.random().toString(36).slice(1);
      const mixName = name + name2;
      storage
        .ref(`student-application/${mixName}`)
        .put(backgroundInfo.documentImage)
        .then(() => {
          storage
            .ref("student-application")
            .child(mixName)
            .getDownloadURL()
            .then((url) => {
              console.log(url);
              setBackgroundInfo({
                ...backgroundInfo,
                Personal_Identification_Id: url,
              });
            });
        });
    }

    await db
      .collection("students-application")
      .add({
        basicInfo,
        // documentRes,
        selectedChoice,
        // academicInformation,
        academicInfo,
        backgroundInformation,
      })
      .then((res) => console.log("response", res))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    console.log("//////////////", document);
  }, [setDocument]);

  return (
    <div className="dashboard-basic-info">
      {/* Background Information */}
      <div className="dashboard-basic-info__sectionContainer">
        <div className="dashboard-basic-info__sectionTitle">
          Review and Confirmation
        </div>
        <div className="dashboard-basic-info__formContainer">
          <form>
            <Grid
              container
              className="dashboard-basic-info__row"
              justify="flex-end"
              direction="row"
            ></Grid>
            <Grid
              container
              className="dashboard-basic-info__row"
              justify="space-around"
              direction="row"
            >
              <Grid item sm={12} md={12} xs={12}>
                <div className="dashboard-basic-info__formTitle">
                  Basic Information
                </div>
                <hr className="dashboard-basic-info__horizontalLine" />
              </Grid>
            </Grid>
            <Grid
              container
              className="dashboard-basic-info__row"
              justify="space-around"
              direction="row"
            >
              <Grid
                className={"dashboard-basic-info__grid"}
                style={{ width: "100%" }}
              >
                {/* <div style={{ display: "flex", flexWrap: "wrap" }}> */}
                <div
                  className="basicInformation-container"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="basicInformation_container_text">
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        marginRight: 40,
                        width: "28%",
                        minWidth: 250,
                        height: 40,
                      }}
                    >
                      <h4
                        className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                        style={{ height: 30, fontWeight: 700, marginRight: 10 }}
                      >
                        Full Name :
                      </h4>
                      <p
                        className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                        style={{ height: 30 }}
                      >
                        {" "}
                        {toTitleCase(basicInfo.fullName)}{" "}
                      </p>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        marginRight: 40,
                        minWidth: 250,
                        height: 40,
                      }}
                    >
                      <h4
                        className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                        style={{ height: 30, fontWeight: 700, marginRight: 10 }}
                      >
                        Email Address :
                      </h4>
                      <p
                        className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                        style={{ height: 30, width: "auto" }}
                      >
                        {toTitleCase(basicInfo.email)}
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        marginRight: 40,
                        width: "28%",
                        minWidth: 250,
                        height: 40,
                      }}
                    >
                      <h4
                        className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                        style={{ height: 30, fontWeight: 700, marginRight: 10 }}
                      >
                        Phone Number :
                      </h4>
                      <p
                        className="MuiTypography-root MuisStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                        style={{ height: 30 }}
                      >
                        {" "}
                        {basicInfo.countryCode}-{basicInfo.phoneNumber}{" "}
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        marginRight: 40,
                        width: "28%",
                        minWidth: 250,
                        height: 40,
                      }}
                    >
                      <h4
                        className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                        style={{ height: 30, fontWeight: 700, marginRight: 10 }}
                      >
                        Gender :
                      </h4>
                      <p
                        className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                        style={{ height: 30 }}
                      >
                        {" "}
                        {toTitleCase(basicInfo.gender)}{" "}
                      </p>
                    </div>
                  </div>
                  <div className="dashboard__imageuploadcontainer">
                    <label htmlFor="upload-photo">
                      <div className="dashboard-basic-info__imageuploadcontainter">
                       
                        {profileImage && (
                          <img
                            src={profileImage}
                            alt="avatar_logo"
                            className="dashboard-basic-info__imageuploadcontainter__thumbnailimage"
                          />
                        )}

                        <input
                          // style={{ position: 'absolute', opacity: '0', width:'100%', height:'100%', border: '1px solid black' }}
                          className="dashboard-profile-upload"
                          id="upload-photo"
                          name="upload-photo"
                          type="file"
                          onChange={(e) =>
                            setProfileImage(
                              URL.createObjectURL(e.target.files[0])
                            )
                          }
                        />
                         < UploadButton
                          className="dashboard-profileimage-upload"
                          startIcon={<CameraAltIcon />}
                        >
                          Update
                        </ UploadButton>
                      </div>
                    </label>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginRight: 40,
                    width: "28%",
                    minWidth: 250,
                    height: 40,
                  }}
                >
                  <h4
                    className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                    style={{ height: 30, fontWeight: 700, marginRight: 10 }}
                  >
                    Nationality :
                  </h4>
                  <p
                    className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                    style={{ height: 30 }}
                  >
                    {" "}
                    {toTitleCase(basicInfo.nationality)}{" "}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginRight: 40,
                    width: "28%",
                    minWidth: 250,
                    height: 40,
                  }}
                >
                  <h4
                    className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                    style={{ height: 30, fontWeight: 700, marginRight: 10 }}
                  >
                    City :
                  </h4>
                  <p
                    className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                    style={{ height: 30 }}
                  >
                    {" "}
                    {toTitleCase(basicInfo.guardianCity)}-
                    {basicInfo.phoneNumber}{" "}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginRight: 40,
                    width: "28%",
                    minWidth: 250,
                    height: 40,
                  }}
                >
                  <h4
                    className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                    style={{ height: 30, fontWeight: 700, marginRight: 10 }}
                  >
                    Zip Code :
                  </h4>
                  <p
                    className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                    style={{ height: 30 }}
                  >
                    {" "}
                    {toTitleCase(basicInfo.guardianZipCode)}{" "}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    marginRight: 40,
                    width: "28%",
                    minWidth: 250,
                    height: 40,
                  }}
                >
                  <h4
                    className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                    style={{ height: 30, fontWeight: 700, marginRight: 10 }}
                  >
                    Address :
                  </h4>
                  <p
                    className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                    style={{ height: 30 }}
                  >
                    {" "}
                    {toTitleCase(
                      truncateString(basicInfo.guardianAddress)
                    )}{" "}
                  </p>
                </div>
                {/* </div> */}
              </Grid>
            </Grid>
            <Grid
              container
              className="dashboard-basic-info__row"
              justify="space-around"
              direction="row"
            >
              <Grid item sm={12} md={12} xs={12}>
                <div className="dashboard-basic-info__formTitle">
                  Background Information
                </div>
                <hr className="dashboard-basic-info__horizontalLine" />
              </Grid>
            </Grid>

            {/* Back ground Info */}
            <Grid
              container
              className="dashboard-basic-info__row"
              justify="space-around"
              direction="row"
            >
              <Grid
                className={"dashboard-basic-info__grid"}
                style={{ width: "100%" }}
              >
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      marginRight: 40,
                      width: "28%",
                      minWidth: 250,
                      height: 40,
                    }}
                  >
                    <h4
                      className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                      style={{ height: 30, fontWeight: 700, marginRight: 10 }}
                    >
                      Name on Passport :
                    </h4>
                    <p
                      className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                      style={{ height: 30 }}
                    >
                      {" "}
                      {toTitleCase(
                        backgroundInfo.passportDetails.nameOnPassport
                      )}
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      marginRight: 40,
                      width: "28%",
                      minWidth: 250,
                      height: 40,
                    }}
                  >
                    <h4
                      className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                      style={{ height: 30, fontWeight: 700, marginRight: 10 }}
                    >
                      Passport Issuing Authority :
                    </h4>
                    <p
                      className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                      style={{ height: 30 }}
                    >
                      {" "}
                      {toTitleCase(
                        backgroundInfo.passportDetails.passportIssuingAuthority
                      )}{" "}
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      marginRight: 40,
                      width: "28%",
                      minWidth: 250,
                      height: 40,
                    }}
                  >
                    <h4
                      className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                      style={{ height: 30, fontWeight: 700, marginRight: 10 }}
                    >
                      Passport Expiry Date :
                    </h4>
                    <p
                      className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                      style={{ height: 30 }}
                    >
                      {" "}
                      {backgroundInfo.passportDetails.passportExpireDate}
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      marginRight: 40,
                      width: "28%",
                      minWidth: 250,
                      height: 40,
                    }}
                  >
                    <h4
                      className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                      style={{ height: 30, fontWeight: 700, marginRight: 10 }}
                    >
                      Passport Number :
                    </h4>
                    <p
                      className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                      style={{ height: 30 }}
                    >
                      {" "}
                      {backgroundInfo.passportDetails.numberOnPassport}{" "}
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      marginRight: 40,
                      width: "28%",
                      minWidth: 250,
                      height: 40,
                    }}
                  >
                    <h4
                      className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                      style={{ height: 30, fontWeight: 700, marginRight: 10 }}
                    >
                      Passport Issuing Country :
                    </h4>
                    <p
                      className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                      style={{ height: 30 }}
                    >
                      {" "}
                      {backgroundInfo.passportDetails.passportIssuedCountry}{" "}
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      marginRight: 40,
                      width: "100%",
                      minWidth: 250,
                      height: 40,
                    }}
                  >
                    <h3
                      className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                      style={{
                        height: 30,
                        fontSize: 14,
                        color: "black",
                        fontWeight: 700,
                        marginRight: 10,
                      }}
                    >
                      Reference Information
                    </h3>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      marginRight: 40,
                      width: "28%",
                      minWidth: 250,
                      height: 40,
                    }}
                  >
                    <h4
                      className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                      style={{ height: 30, fontWeight: 700, marginRight: 10 }}
                    >
                      Name :
                    </h4>
                    <p
                      className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                      style={{ height: 30 }}
                    >
                      {" "}
                      {backgroundInfo.references.fullName}{" "}
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      marginRight: 40,
                      width: "28%",
                      minWidth: 250,
                      height: 40,
                    }}
                  >
                    <h4
                      className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                      style={{ height: 30, fontWeight: 700, marginRight: 10 }}
                    >
                      Phone Nubmer:
                    </h4>
                    <p
                      className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                      style={{ height: 30 }}
                    >
                      {" "}
                      {backgroundInfo.references.phoneNumber}{" "}
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      marginRight: 40,
                      width: "28%",
                      minWidth: 250,
                      height: 40,
                    }}
                  >
                    <h4
                      className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                      style={{ height: 30, fontWeight: 700, marginRight: 10 }}
                    >
                      Email:
                    </h4>
                    <p
                      className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                      style={{ height: 30 }}
                    >
                      {" "}
                      {backgroundInfo.references.emailAddress}{" "}
                    </p>
                  </div>
                </div>
              </Grid>
            </Grid>

            <Grid
              container
              className="dashboard-basic-info__row"
              justify="space-around"
              direction="row"
            >
              <Grid item sm={12} md={12} xs={12}>
                <div className="dashboard-basic-info__formTitle">
                  Academic Information
                </div>
                <hr className="dashboard-basic-info__horizontalLine" />
              </Grid>
            </Grid>
            {/* Academic Info */}
            <Grid
              container
              className="dashboard-basic-info__row"
              justify="space-around"
              direction="row"
            >
              <Grid
                className={"dashboard-basic-info__grid"}
                style={{ width: "100%" }}
              >
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {/* School Score */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      marginRight: 40,
                      width: "28%",
                      minWidth: 250,
                      height: 40,
                    }}
                  >
                    <h4
                      className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                      style={{ height: 30, fontWeight: 700, marginRight: 10 }}
                    >
                      School Score :
                    </h4>
                    <p
                      className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                      style={{ height: 30 }}
                    >
                      {" "}
                      {academicInfo.schoolMarks}
                    </p>
                  </div>

                  {/* High School Score */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      marginRight: 40,
                      width: "28%",
                      minWidth: 250,
                      height: 40,
                    }}
                  >
                    <h4
                      className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                      style={{ height: 30, fontWeight: 700, marginRight: 10 }}
                    >
                      High School Score :
                    </h4>
                    <p
                      className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                      style={{ height: 30 }}
                    >
                      {" "}
                      {academicInfo.level0Score}
                    </p>
                  </div>

                  {/* Diploma Score  */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      marginRight: 40,
                      width: "28%",
                      minWidth: 250,
                      height: 40,
                    }}
                  >
                    <h4
                      className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                      style={{ height: 30, fontWeight: 700, marginRight: 10 }}
                    >
                      Diploma Score :
                    </h4>
                    <p
                      className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                      style={{ height: 30 }}
                    >
                      {" "}
                      {academicInfo.diplomaScore}
                    </p>
                  </div>

                  {/* Class 11 Score */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      marginRight: 40,
                      width: "28%",
                      minWidth: 250,
                      height: 40,
                    }}
                  >
                    <h4
                      className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                      style={{ height: 30, fontWeight: 700, marginRight: 10 }}
                    >
                      Class 11 Score :
                    </h4>
                    <p
                      className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                      style={{ height: 30 }}
                    >
                      {" "}
                      {academicInfo.level1Score}
                    </p>
                  </div>

                  {/* Post graduate Marks */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      marginRight: 40,
                      width: "28%",
                      minWidth: 250,
                      height: 40,
                    }}
                  >
                    <h4
                      className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                      style={{ height: 30, fontWeight: 700, marginRight: 10 }}
                    >
                      Post graduate Marks :
                    </h4>
                    <p
                      className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                      style={{ height: 30 }}
                    >
                      {" "}
                      {academicInfo.postGraduteScore}
                    </p>
                  </div>

                  {/* UnderGraduate Marks */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      marginRight: 40,
                      width: "28%",
                      minWidth: 250,
                      height: 40,
                    }}
                  >
                    <h4
                      className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                      style={{ height: 30, fontWeight: 700, marginRight: 10 }}
                    >
                      UnderGraduate Marks:
                    </h4>
                    <p
                      className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                      style={{ height: 30 }}
                    >
                      {" "}
                      {academicInfo.underGraduate}
                    </p>
                  </div>
                  {/* gmat */}
                  {academicInfo.gmat.haveDone === "yes" ? (
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        marginRight: 40,
                        width: "28%",
                        minWidth: 250,
                        height: 40,
                      }}
                    >
                      <h4
                        className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                        style={{ height: 30, fontWeight: 700, marginRight: 10 }}
                      >
                        GMAT:
                      </h4>
                      <p
                        className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                        style={{ height: 30 }}
                      >
                        {" "}
                        {academicInfo.gmat.score}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                  {/* gre */}
                  {academicInfo.gre.haveDone === "yes" ? (
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        marginRight: 40,
                        width: "28%",
                        minWidth: 250,
                        height: 40,
                      }}
                    >
                      <h4
                        className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                        style={{ height: 30, fontWeight: 700, marginRight: 10 }}
                      >
                        GRE:
                      </h4>
                      <p
                        className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                        style={{ height: 30 }}
                      >
                        {" "}
                        {academicInfo.gre.score}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                  {/* sat */}
                  {academicInfo.sat.haveDone === "yes" ? (
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        marginRight: 40,
                        width: "28%",
                        minWidth: 250,
                        height: 40,
                      }}
                    >
                      <h4
                        className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                        style={{ height: 30, fontWeight: 700, marginRight: 10 }}
                      >
                        SAT:
                      </h4>
                      <p
                        className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                        style={{ height: 30 }}
                      >
                        {" "}
                        {academicInfo.sat.score}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                  {/* satii */}
                  {academicInfo.satII.haveDone === "yes" ? (
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        marginRight: 40,
                        width: "28%",
                        minWidth: 250,
                        height: 40,
                      }}
                    >
                      <h4
                        className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                        style={{ height: 30, fontWeight: 700, marginRight: 10 }}
                      >
                        SAT II:
                      </h4>
                      <p
                        className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                        style={{ height: 30 }}
                      >
                        {" "}
                        {academicInfo.satII.score}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                  {/* ielts */}
                  {academicInfo.ielts.haveDone === "yes" ? (
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        marginRight: 40,
                        width: "28%",
                        minWidth: 250,
                        height: 40,
                      }}
                    >
                      <h4
                        className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                        style={{ height: 30, fontWeight: 700, marginRight: 10 }}
                      >
                        IELTS:
                      </h4>
                      <p
                        className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                        style={{ height: 30 }}
                      >
                        {" "}
                        {academicInfo.ielts.score}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                  {/* tofel */}
                  {academicInfo.tofel.haveDone === "yes" ? (
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        marginRight: 40,
                        width: "28%",
                        minWidth: 250,
                        height: 40,
                      }}
                    >
                      <h4
                        className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                        style={{ height: 30, fontWeight: 700, marginRight: 10 }}
                      >
                        TOFEL:
                      </h4>
                      <p
                        className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                        style={{ height: 30 }}
                      >
                        {" "}
                        {academicInfo.tofel.score}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                  {/* jeeAdvance */}
                  {academicInfo.jeeAdvance.haveDone === "yes" ? (
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        marginRight: 40,
                        width: "28%",
                        minWidth: 250,
                        height: 40,
                      }}
                    >
                      <h4
                        className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                        style={{ height: 30, fontWeight: 700, marginRight: 10 }}
                      >
                        JEE Advance:
                      </h4>
                      <p
                        className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                        style={{ height: 30 }}
                      >
                        {" "}
                        {academicInfo.jeeAdvance.score}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </Grid>
            </Grid>
            <Grid
              container
              className="dashboard-basic-info__row"
              justify="space-around"
              direction="row"
            >
              <Grid item sm={12} md={12} xs={12}>
                <div
                  className="dashboard-basic-info__formTitle"
                  style={{ height: "auto" }}
                >
                  Choice Filing
                </div>
                <hr className="dashboard-basic-info__horizontalLine" />

                <AppliedCollege  selectedCollege={selectedChoice}/>
              </Grid>
            </Grid>

            {/* Back ground Info */}
{/* 
            <Grid
              container
              className="dashboard-basic-info__row"
              justify="space-around"
              direction="row"
            >
              <Grid item sm={12} md={12} xs={12}>
                <div className="dashboard-basic-info__formTitle">
                  Personal Identification and AcademicsDocuments
                </div>
                <hr className="dashboard-basic-info__horizontalLine" />
              </Grid>
            </Grid> */}
           
            <Grid
              container
              className="dashboard-basic-info__row"
              justify="flex-start"
              direction="row"
            >
              <Grid
                className={"dashboard-basic-info__grid"}
                item
                sm={12}
                md={6}
                xs={12}
              >
                <Checkbox
                  onChange={() => {
                    setIstermsChecked((isTermsChecked) => !isTermsChecked);
                    setSignatureImage(null);
                  }}
                />
                <label>
                  &nbsp; Click to agree <u>terms and conditions</u>
                </label>
              </Grid>
            </Grid>
            {isTermsChecked && (
              <Grid
                container
                className="dashboard-basic-info__row"
                justify="flex-start"
                direction="row"
              >
                <Grid container sm={12} md={4} xs={12} alignContent="center">
                  Upload your signature
                </Grid>

                <Grid
                  container
                  sm={12}
                  md={3}
                  xs={12}
                  justify="center"
                  alignContent="center"
                >
                  <label htmlFor="signature-image">
                    <input
                      style={{ display: "none" }}
                      id="signature-image"
                      name="signature-image"
                      type="file"
                      onChange={(e) =>
                        setSignatureImage(
                          URL.createObjectURL(e.target.files[0])
                        )
                      }
                    />

                    <UploadButton>Upload</UploadButton>
                  </label>
                </Grid>
                {signatureImage && (
                  <Grid item sm={12} md={4} xs={12}>
                    <img
                      src={signatureImage}
                      alt="document_logo"
                      className="image__thumbnail"
                    />
                  </Grid>
                )}
              </Grid>
            )}
          </form>
        </div>
      </div>

      <div className="dashboard-basic-info__sectionContainer">
        <div className="dashboard-basic-info__buttonContainer">
          <div
            className="dashboard-basic-info__backContainer"
            onClick={props.handleBack}
          >
            Back
          </div>
          <Button onClick={handelSubmit}>Confirm Application</Button>
        </div>
      </div>
    </div>
  );
};

export { DashboardReviewConfirm };
