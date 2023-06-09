import { Grid, Snackbar } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import Alert from "@material-ui/lab/Alert";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import * as yup from "yup";
import { auth, db, storage } from "../../firebase";
import { Button } from "../Button";
import { UploadButton } from "../Button/uploadButton";
import AppliedCollege from "./AppliedCollege";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const CustomizeCheckBox: any = withStyles({
  root: {
    "& .MuiSvgIcon-root": {
      fill: "#828282",
      textTransform: "capitalize",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    "&$checked": {
      "& .MuiIconButton-label": {
        position: "relative",
        zIndex: 0,
      },
      "& .PrivateSwitchBase-root-716": {
        paddingLeft: 0,
      },
      "& .MuiIconButton-label:after": {
        content: '""',
        left: 4.5,
        top: 5,
        height: 14,
        width: 15,
        position: "absolute",
        // zIndex: -1,
        backgroundColor: "#FFAB1A",
      },
    },
  },
  checked: {},
})(Checkbox);

interface ReviewFormValue {
  profileImage: string;
  signatureImage: string;
}

const DashboardReviewConfirm = (props) => {
  const router = useRouter();

  const [profileImage, setProfileImage] = React.useState(null);

  const [profileImageThumbnail, setProfileImageThumbnail] =
    React.useState(null);
  const [signatureImage, setSignatureImage] = React.useState(null);
  const [signatureImageThumbnail, setSignatureImageThumbnail] =
    React.useState(null);
  const [isTermsChecked, setIstermsChecked] = React.useState(false);
  const [snackOpen, setSnackOpen] = useState(false as boolean);
  const [snackOpenError, setSnackOpenError] = useState(false as boolean);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [formError, setFormError] = useState({} as any);
  const [msgType, setMsgType] = useState({} as any);

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(true);
  };
  const handleOpenSnackbar = () => {
    console.log({ msgType });
    setSnackOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackOpen(false);
  };
  useEffect(() => {}, []);
  // useEffect(() => {
  //   props.setShowExitPrompt(true); //to prevent from refreshing the page
  // }, []);

  function toTitleCase(str) {
    // return str.replace(/\w\S*/g, function (txt) {
    //   return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    // });
    return str;
  }

  const validationSchema = yup.object().shape<ReviewFormValue>({
    profileImage: yup.string().nullable().required("Please upload your photo"),
    signatureImage: yup
      .string()
      .nullable()
      .required("Please upload your signature"),
  });

  const validate = async () => {
    try {
      await validationSchema.validate(
        {
          profileImage: profileImage,
          signatureImage: signatureImage,
        },
        {
          abortEarly: false,
        }
      );

      return true;
    } catch (err) {
      const errors = {};
      setSnackOpen(true);
      err.inner.forEach((item: any) => {
        errors[item.path] = item.errors[0];
      });
      setFormError({ ...errors });
    }
  };

  const { basicInfo, backgroundInfo, academicInfo, selectedChoice } = props;
  function truncateString(str, num = 20) {
    if (str?.length <= num) {
      return str;
    }
    return str?.slice(0, num) + "...";
  }

  // submit all form
  const handelSubmit = async () => {
    try {
      const isValid = await validate();
      if (isValid) {
        handleToggle();
        const backgroundInformation = {
          haveAppliedForPassport: backgroundInfo.haveAppliedForPassport,
          havePassport: backgroundInfo.havePassport,
          passportDetails: backgroundInfo.passportDetails,
          citizenId: backgroundInfo.passportId,
          references: backgroundInfo.references,
          documentImage: backgroundInfo.documentImage,
        };

        const basicInformation = {
          ...basicInfo,
        };

        const academicInformation = {
          // diplomaScore: academicInfo.diplomaScore,
          gmat: academicInfo?.gmat,
          gre: academicInfo?.gre,
          ielts: academicInfo?.ielts,
          jeeAdvance: academicInfo?.jeeAdvance,

          level1Score: academicInfo?.level1Score,
          level2Score: academicInfo?.level2Score,
          postGraduteScore: academicInfo?.postGraduteScore,
          sat: academicInfo?.sat,
          satII: academicInfo?.satII,
          schoolMarks: academicInfo?.schoolMarks,
          tofel: academicInfo?.tofel,
          underGraduate: academicInfo?.underGraduate,
          semesterMarks: academicInfo?.semesterMarks,
        };

        const status = "pending";

        for (const [key] of Object?.entries(academicInfo.certificatesImage)) {
          const name = Math.random().toString(36).slice(1);
          const name2 = Math.random().toString(36).slice(1);
          const mixName = name + name2;

          if (academicInfo.certificatesImage[key] !== null) {
            await storage
              .ref(`student-application/${mixName}`)
              .put(academicInfo.certificatesImage[key])
              .then(async () => {
                await storage
                  .ref("student-application")
                  .child(mixName)
                  .getDownloadURL()
                  .then((url) => {
                    academicInformation[key] = url;
                  })
                  .catch((err) => {
                    setFormError({
                      ...formError,
                      otherErrors: "empty",
                    });
                  });
              });
          }
        }

        if (backgroundInfo.documentImage !== null) {
          const name = Math.random().toString(36).slice(1);
          const name2 = Math.random().toString(36).slice(1);
          const mixName = name + name2;
          await storage
            .ref(`student-application/${mixName}`)
            .put(backgroundInfo.documentImage)
            .then(async () => {
              await storage
                .ref("student-application")
                .child(mixName)
                .getDownloadURL()
                .then((url) => {
                  backgroundInformation.documentImage = url;
                })
                .catch((err) => {});
            });
        }

        if (profileImage !== null) {
          const name = Math.random().toString(36).slice(1);
          const name2 = Math.random().toString(36).slice(1);
          const mixName = name + name2;
          await storage
            .ref(`student-application/${mixName}`)
            .put(profileImage)
            .then(async () => {
              await storage
                .ref("student-application")
                .child(mixName)
                .getDownloadURL()
                .then((url) => {
                  basicInformation.profileImage = url;
                })
                .catch((err) => {
                  console.log(err);
                });
            });
        }

        if (signatureImage !== null) {
          const name = Math.random().toString(36).slice(1);
          const name2 = Math.random().toString(36).slice(1);
          const mixName = name + name2;
          await storage
            .ref(`student-application/${mixName}`)
            .put(signatureImage)
            .then(async () => {
              await storage
                .ref("student-application")
                .child(mixName)
                .getDownloadURL()
                .then((url) => {
                  basicInformation.signatureImage = url;
                })
                .catch((err) => {});
            });
        }

        const appdata = {
          basicInformation,
          selectedChoice,
          backgroundInformation,
          academicInformation,
          status,
          student_id: auth.currentUser.uid,
          createdAt: new Date(),
        };

        await db
          .collection("students-application")
          .doc()
          .set(appdata)
          .then(() => {
            setMsgType("success");

            setFormError({
              ...formError,
              otherErrors: (
                <div>Your application has been submitted Successfully.</div>
              ),
            });
            handleOpenSnackbar();
            handleClose();
            localStorage.clear();
            window.location.replace("/studentdashboardmain");

            router.push("/studentdashboardmain");
          })
          .catch((error) => {
            console.log("error 1", error);

            // router.push("/studentdashboardmain");
          });
      } else {
        setMsgType("error");
        setFormError({
          ...formError,
          otherErrors: (
            <div>
              <span>Please check empty field and try again!</span>
            </div>
          ),
        });
        handleOpenSnackbar();
      }
    } catch (err) {
      console.log("err");
    }
  };

  return (
    <div className="dashboard-basic-info">
      {
        <Backdrop className={classes.backdrop} open={open}>
          <ClipLoader color={"green"} loading={open} size={150} />
        </Backdrop>
      }

      <div className="dashboard-basic-info__sectionContainer">
        <div className="dashboard-basic-info__sectionTitle">
          Review and Confirmation
        </div>
        <div className="dashboard-basic-info__formContainer">
          <div className="dashboard-basic-info__marginContainer">
            <div className="dashboard-basic-info__formTitle form--title">
              Basic Information
            </div>
            <hr className="dashboard-basic-info__horizontalLine" />

            <form>
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
                  <div className="basicInformation-container">
                    <div className="basicInformation_container_text">
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          marginRight: 40,
                          width: "28%",
                          minWidth: 350,
                          height: 40,
                        }}
                      >
                        <h4
                          className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                          style={{
                            height: 30,
                            fontWeight: 700,
                            marginRight: 10,
                          }}
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
                          // flexWrap: "wrap",
                          marginRight: 40,
                          minWidth: 350,
                          height: 40,
                        }}
                      >
                        <h4
                          className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                          style={{
                            height: 30,
                            fontWeight: 700,
                            marginRight: 10,
                            whiteSpace: "nowrap",
                          }}
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
                          // width: "8%",
                          // minWidth: 250,
                          height: 40,
                        }}
                      >
                        <h4
                          className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                          style={{
                            //height: 30,
                            fontWeight: 700,
                            marginRight: 10,
                          }}
                        >
                          Phone Number :
                        </h4>
                        <p
                          className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                          style={{ height: 30, wordBreak: "break-all" }}
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
                          style={{
                            height: 30,
                            fontWeight: 700,
                            marginRight: 10,
                          }}
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
                      <div>
                        <label htmlFor="upload-photo">
                          <div
                            className="dashboard-basic-info__imageuploadcontainter"
                            style={{ flexDirection: "column" }}
                          >
                            {profileImageThumbnail && (
                              <img
                                src={profileImageThumbnail}
                                alt="avatar_logo"
                                className="dashboard-basic-info__imageuploadcontainter__thumbnailimage"
                              />
                            )}

                            <input
                              // style={{ position: 'absolute', opacity: '0', width:'100%', height:'100%', border: '1px solid black' }}
                              className="dashboard-profile-upload"
                              id="upload-photo"
                              name="profileImage"
                              type="file"
                              onChange={(e) => {
                                console.log("e", e);
                                e.target.files[0] &&
                                  setProfileImageThumbnail(
                                    URL.createObjectURL(e.target.files[0])
                                  );
                                e.target.files[0] &&
                                  setProfileImage(e.target.files[0]);
                              }}
                              accept="image/*"
                            />
                            <UploadButton
                              className={`dashboard-profileimage-upload ${
                                profileImageThumbnail == null && "active"
                              }`}
                              startIcon={<CameraAltIcon />}
                            >
                              Update
                            </UploadButton>
                          </div>
                        </label>
                      </div>
                      <div className="error-msg">{formError.profileImage}</div>
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
                      {toTitleCase(basicInfo.guardianCity)}{" "}
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
                      {toTitleCase(basicInfo.guardianAddress)}{" "}
                    </p>
                  </div>
                  {/* </div> */}
                </Grid>
              </Grid>

              <div className="dashboard-basic-info__formTitle form--title">
                Background Information
              </div>
              <hr className="dashboard-basic-info__horizontalLine" />

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
                  {backgroundInfo?.havePassport === true ? (
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
                          style={{
                            height: 30,
                            fontWeight: 700,
                            marginRight: 10,
                          }}
                        >
                          Name on Passport :
                        </h4>
                        <p
                          className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                          style={{ height: 30 }}
                        >
                          {" "}
                          {truncateString(
                            backgroundInfo?.passportDetails?.nameOnPassport,
                            10
                          )}
                          {/* {toTitleCase(
                            backgroundInfo?.passportDetails?.nameOnPassport
                          )} */}
                        </p>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          //marginRight: 40,
                          // width: "28%",
                          minWidth: 350,
                          height: 40,
                        }}
                      >
                        <h4
                          className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                          style={{
                            height: 30,
                            fontWeight: 700,
                            marginRight: 10,
                          }}
                        >
                          Passport Issuing Authority :
                        </h4>
                        <p
                          className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                          style={{ height: 30 }}
                        >
                          {" "}
                          {toTitleCase(
                            backgroundInfo.passportDetails
                              .passportIssuingAuthority
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
                          style={{
                            height: 30,
                            fontWeight: 700,
                            marginRight: 10,
                          }}
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
                          style={{
                            height: 30,
                            fontWeight: 700,
                            marginRight: 10,
                          }}
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
                          minWidth: 350,
                          //height: 40,
                        }}
                      >
                        <h4
                          className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                          style={{
                            height: 30,
                            fontWeight: 700,
                            marginRight: 10,
                          }}
                        >
                          Passport Issuing Country :
                        </h4>
                        <p
                          className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                          style={{ height: 30 }}
                        >
                          {" "}
                          {
                            backgroundInfo.passportDetails.passportIssuedCountry
                          }{" "}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h4
                        className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                        style={{ height: 30, fontWeight: 700, marginRight: 10 }}
                      >
                        Applied for passport :{" "}
                        {backgroundInfo?.haveAppliedForPassport === true
                          ? "Yes"
                          : "No"}
                      </h4>
                      <p
                        className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                        style={{ height: 30 }}
                      >
                        {" "}
                        {toTitleCase(
                          backgroundInfo?.passportDetails?.nameOnPassport
                        )}
                      </p>
                    </>
                  )}
                  <Grid
                    container
                    className="dashboard-basic-info__row"
                    justify="space-around"
                    direction="column"
                    style={{ gap: "0" }}
                  >
                    <div className="dashboard-basic-info__formTitle form--title">
                      Reference Information
                    </div>
                    <hr
                      className="dashboard-basic-info__horizontalLine"
                      style={{ width: "100%" }}
                    />
                  </Grid>

                  <div
                    style={{ display: "flex", flexWrap: "wrap" }}
                    className="reference-info-review"
                  >
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
                        {backgroundInfo?.references?.fullName}{" "}
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
                        className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                        style={{ height: 30 }}
                      >
                        {" "}
                        {backgroundInfo?.references?.phoneNumber}{" "}
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
                        Email :
                      </h4>
                      <p
                        className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                        style={{ height: 30 }}
                      >
                        {" "}
                        {backgroundInfo?.references?.emailAddress}{" "}
                      </p>
                    </div>
                  </div>
                </Grid>
              </Grid>

              <div className="dashboard-basic-info__formTitle form--title">
                Academic Information
              </div>
              <hr className="dashboard-basic-info__horizontalLine" />

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
                    {academicInfo?.schoolMarks?.schoolMarks && (
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
                          style={{
                            height: 30,
                            fontWeight: 700,
                            marginRight: 10,
                          }}
                        >
                          School Score :
                        </h4>
                        <p
                          className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                          style={{ height: 30 }}
                        >
                          {" "}
                          {academicInfo?.schoolMarks?.schoolMarks}
                        </p>
                      </div>
                    )}

                    {/* High School Score */}

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
                        {/* Class{" "} */}
                        {academicInfo?.level2Score?.level2Score
                          ? "High School"
                          : " Class 11"}{" "}
                        Score :
                      </h4>
                      <p
                        className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                        style={{ height: 30 }}
                      >
                        {academicInfo?.level2Score?.level2Score
                          ? academicInfo?.level2Score?.level2Score
                          : academicInfo?.level1Score}
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
                        style={{
                          height: 30,
                          fontWeight: 700,
                          marginRight: 10,
                        }}
                      >
                        {academicInfo?.underGraduate?.underGraduate
                          ? "Undergraduate"
                          : "Semester"}{" "}
                        Score :
                      </h4>
                      <p
                        className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                        style={{ height: 30 }}
                      >
                        {academicInfo?.underGraduate?.underGraduate
                          ? academicInfo?.underGraduate?.underGraduate
                          : academicInfo?.semesterMarks}
                      </p>
                    </div>

                    {/* Post graduate Marks */}
                    {academicInfo?.postGraduteScore.postGraduteScore && (
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
                          style={{
                            height: 30,
                            fontWeight: 700,
                            marginRight: 10,
                          }}
                        >
                          Post graduate Marks :
                        </h4>
                        <p
                          className="MuiTypography-root MuiStepLabel-label MuiTypography-body2 MuiTypography-displayBlock"
                          style={{ height: 30 }}
                        >
                          {" "}
                          {academicInfo?.postGraduteScore?.postGraduteScore}
                        </p>
                      </div>
                    )}
                    {/* gmat */}
                    {academicInfo?.gmat?.haveDone === "yes" ? (
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
                          style={{
                            height: 30,
                            fontWeight: 700,
                            marginRight: 10,
                          }}
                        >
                          GMAT :
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
                    {academicInfo?.gre?.haveDone === "yes" ? (
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
                          style={{
                            height: 30,
                            fontWeight: 700,
                            marginRight: 10,
                          }}
                        >
                          GRE :
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
                    {academicInfo?.sat?.haveDone === "yes" ? (
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
                          style={{
                            height: 30,
                            fontWeight: 700,
                            marginRight: 10,
                          }}
                        >
                          SAT :
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
                    {academicInfo?.satII?.haveDone === "yes" ? (
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
                          style={{
                            height: 30,
                            fontWeight: 700,
                            marginRight: 10,
                          }}
                        >
                          SAT II :
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
                    {academicInfo?.ielts?.haveDone === "yes" ? (
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
                          style={{
                            height: 30,
                            fontWeight: 700,
                            marginRight: 10,
                          }}
                        >
                          IELTS :
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
                    {academicInfo?.tofel?.haveDone === "yes" ? (
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
                          style={{
                            height: 30,
                            fontWeight: 700,
                            marginRight: 10,
                          }}
                        >
                          TOFEL :
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
                    {academicInfo?.jeeAdvance?.haveDone === "yes" ? (
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
                          style={{
                            height: 30,
                            fontWeight: 700,
                            marginRight: 10,
                          }}
                        >
                          JEE Advance :
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
                    className="dashboard-basic-info__formTitle form--title"
                    style={{ height: "auto" }}
                  >
                    Choice Filing
                  </div>
                  <hr className="dashboard-basic-info__horizontalLine" />

                  <AppliedCollege selectedCollege={selectedChoice} />
                </Grid>
              </Grid>

              {/* Back ground Info */}

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
                  <CustomizeCheckBox
                    onChange={() => {
                      setIstermsChecked((isTermsChecked) => !isTermsChecked);
                      setSignatureImage(null);
                    }}
                    style={{ paddingLeft: "0" }}
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
                  <Grid
                    container
                    sm={12}
                    md={4}
                    xs={12}
                    alignContent="center"
                    style={{ marginLeft: "3px" }}
                  >
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
                        name="signatureImage"
                        type="file"
                        onChange={(e) => {
                          e.target.files[0] &&
                            setSignatureImageThumbnail(
                              URL.createObjectURL(e.target.files[0])
                            );
                          e.target.files[0] &&
                            setSignatureImage(e.target.files[0]);
                        }}
                        accept="image/*"
                      />

                      <UploadButton startIcon="" className="btn-color">
                        Upload
                      </UploadButton>
                      <div className="error-msg" style={{ marginTop: "10px" }}>
                        {formError.signatureImage}
                      </div>
                    </label>
                  </Grid>
                  {signatureImageThumbnail && (
                    <Grid item sm={12} md={4} xs={12}>
                      <img
                        src={signatureImageThumbnail}
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

      <Snackbar
        open={snackOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={msgType?.toString()}>
          {formError?.otherErrors}
        </Alert>
      </Snackbar>
    </div>
  );
};

export { DashboardReviewConfirm };
