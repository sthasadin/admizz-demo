import React, { useEffect, useState } from "react";
// import { Select } from "../Select";
import { Input } from "../Input";
import * as yup from "yup";
import { Grid, Snackbar } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Button } from "../Button";
import { withStyles } from "@material-ui/core/styles";
import { UploadButton } from "../Button/uploadButton";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

const CustomRadio: any = withStyles({
  root: {
    color: "#FFA200",
    "&$checked": {
      color: "#FFA200",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

interface AcademicFormField {
  schoolMarks?: string;
  level2Score?: string;
  underGraduate?: string;
  postGraduteScore?: string;
  certificatesImage?: CertificateI;
  // otherCertificate?: string;
}

interface CertificateI {
  highSchool?: string;
  school?: string;
  under_Graduate?: string;
  post_Gradute?: string;
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const DashboardAcademicInfo = (props) => {
  const [schoolMarks, setSchoolMarks] = useState({ schoolMarks: "" });
  const [otherCertificate, setOtherCertificate] = useState("");
  const [selectedCourse, setselectedCourse] = useState("");
  // const [level0Score, setLevel0Score] = useState("");
  // const [diplomaScore, setDiplomaScore] = useState("");
  const [level1Score, setLevel1Score] = useState("");
  const [level2Score, setLevel2Score] = useState({ level2Score: "" });
  const [postGraduteScore, setPostGraduteScore] = useState({
    postGraduteScore: "",
  });
  const [underGraduate, setUnderGraduate] = useState({ underGraduate: "" });
  const [semesterMarks, setSemesterMarks] = useState("");
  const [gre, setGre] = useState({ haveDone: "no", score: "" });
  const [gmat, setGmat] = useState({ haveDone: "no", score: "" });
  const [sat, setSat] = useState({ haveDone: "no", score: "" });
  const [satII, setSatII] = useState({ haveDone: "no", score: "" });
  const [tofel, setTofel] = useState({ haveDone: "no", score: "" });
  const [jeeAdvance, setJeeAdvance] = useState({ haveDone: "no", score: "" });
  const [formError, setFormError] = useState({} as any);
  const [snackOpen, setSnackOpen] = useState(false as boolean);
  const [ielts, setIelts] = useState({
    haveDone: "no",
    score: "",
    subMars: { listining: "", writing: "", reading: "", speaking: "" },
  });

  const { value: selectedLevel } = props?.selectedLevel?.selectedLevel;

  const [certificatesImage, setCertificatesImage] = useState({
    highSchool: null,
    school: null,
    under_Graduate: null,
    post_Gradute: null,
    other: null,
  });

  const [showClass11Marks, setShowClass11Marks] = useState(false);
  const [showSemesterMarks, setShowsemesterMarks] = useState(false);
  const createValidation = (selectedLevel: string) => {
    switch (selectedLevel) {
      case "diploma":
        return yup.object().shape<AcademicFormField>({
          schoolMarks: yup.string().required("School Marks is required"),

          certificatesImage: yup.object().shape<CertificateI>({
            school: yup
              .string()
              .nullable()
              .required("Please upload your School certificate"),
          }),
        });

      case "highSchool":
        return yup.object().shape<AcademicFormField>({
          schoolMarks: yup.string().required("School Marks is required"),
          level2Score:
            !level1Score && yup.string().required("Level 2 Marks is required"),
          certificatesImage: yup.object().shape<CertificateI>({
            school: yup
              .string()
              .nullable()
              .required("Please upload your School certificate"),
            highSchool: yup
              .string()
              .nullable()
              .required("Please upload your High School certificate"),
          }),
        });
      case "undergraduate":
        return yup.object().shape<AcademicFormField>({
          schoolMarks: yup.string().required("School Marks is required"),
          level2Score:
            !level1Score && yup.string().required("Level 2 Marks is required"),

          certificatesImage: yup.object().shape<CertificateI>({
            highSchool: yup
              .string()
              .nullable()
              .required("Please upload your High School certificate"),
            school: yup
              .string()
              .nullable()
              .required("Please upload your School certificate"),
          }),
        });
      case "postgraduate":
        return yup.object().shape<AcademicFormField>({
          schoolMarks: yup.string().required("School Marks is required"),
          level2Score: yup.string().required("Level 2 Marks is required"),
          underGraduate:
            !semesterMarks &&
            yup.string().required("Undergraduate Marks is required"),

          certificatesImage: yup.object().shape<CertificateI>({
            school: yup
              .string()
              .nullable()
              .required("Please upload your School certificate"),
            highSchool: yup
              .string()
              .nullable()
              .required("Please upload your High School certificate"),
            under_Graduate: yup
              .string()
              .nullable()
              .required("Please upload your Under Graduate certificate"),
          }),
        });
      case "phd":
        return yup.object().shape<AcademicFormField>({
          schoolMarks: yup.string().required("School Marks is required"),
          level2Score: yup.string().required("Level 2 Marks is required"),
          underGraduate: yup
            .string()
            .required("Undergraduate Marks is required"),
          postGraduteScore: yup
            .string()
            .required("Post Graduate Marks is required"),
          certificatesImage: yup.object().shape<CertificateI>({
            school: yup
              .string()
              .nullable()
              .required("Please upload your School certificate"),
            highSchool: yup
              .string()
              .nullable()
              .required("Please upload your High School certificate"),
            under_Graduate: yup
              .string()
              .nullable()
              .required("Please upload your Under Graduate certificate"),
            post_Gradute: yup
              .string()
              .nullable()
              .required("Please upload your Post Graduate certificate"),
          }),
        });
    }
  };
  const validationSchema = createValidation(selectedLevel);
  const validate = async () => {
    try {
      await validationSchema.validate(
        {
          schoolMarks: schoolMarks?.schoolMarks,
          level2Score: level2Score?.level2Score,
          underGraduate: underGraduate?.underGraduate,
          postGraduteScore: postGraduteScore?.postGraduteScore,
          certificatesImage: {
            highSchool: certificatesImage?.highSchool,
            school: certificatesImage?.school,
            under_Graduate: certificatesImage?.under_Graduate,
            post_Gradute: certificatesImage?.post_Gradute,
            //otherCertificate: certificatesImage.other,
          },
        },
        {
          abortEarly: false,
        }
      );
      setFormError({});
      return true;
    } catch (err) {
      console.log(err);
      console.log("validation error");

      setSnackOpen(true);
      const errors = {};
      err.inner.forEach((item: any) => {
        console.log("error", { path: item.path, error: item.errors });
        errors[item.path] = item.errors[0];
      });
      setFormError({ ...errors });
    }
  };

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("academicInformation"));
    if (getData) {
      //   setDiplomaScore(getData?.diplomaScore);
      setGmat(getData?.gmat);
      setGre(getData?.gre);
      // setIelts(getData?.ielts);
      setIelts({
        haveDone: getData?.ielts?.haveDone,
        score: getData?.ielts?.score,
        subMars: {
          listining: getData?.ielts?.subMars?.listinng,
          writing: getData?.ielts?.subMars?.writing,
          reading: getData?.ielts?.subMars?.reading,
          speaking: getData?.ielts?.subMars?.speaking,
        },
      });
      setJeeAdvance(getData?.jeeAdvance);
      setLevel1Score(getData?.level1Score);
      setLevel2Score(getData?.level2Score);
      setSemesterMarks(getData?.semesterMarks);
      setPostGraduteScore(getData?.postGraduteScore);
      setSat(getData?.sat);
      setSatII(getData?.satII);
      setSchoolMarks(getData?.schoolMarks);
      setTofel(getData?.tofel);
      setUnderGraduate(getData?.underGraduate);
      setOtherCertificate(getData?.otherCertificate);
    }
  }, [localStorage.getItem("academicInformation")]);

  const saveData = () => {
    let data = {
      schoolMarks,
      level1Score,
      level2Score,
      semesterMarks,
      // diplomaScore,
      postGraduteScore,
      underGraduate,
      otherCertificate,
      gre: { ...gre, score: gre?.haveDone === "no" ? "" : gre?.score },
      gmat: { ...gmat, score: gmat?.haveDone === "no" ? "" : gmat?.score },
      sat: { ...sat, score: sat?.haveDone === "no" ? "" : sat?.score },
      satII: { ...satII, score: satII?.haveDone === "no" ? "" : satII?.score },
      tofel: { ...tofel, score: tofel?.haveDone === "no" ? "" : tofel?.score },
      jeeAdvance: {
        ...jeeAdvance,
        score: jeeAdvance?.haveDone === "no" ? "" : jeeAdvance?.score,
      },
      ielts: {
        ...ielts,
        score: ielts?.haveDone === "no" ? "" : ielts?.score,
        subMars:
          ielts?.haveDone === "no"
            ? { listining: "", writing: "", reading: "", speaking: "" }
            : ielts?.subMars,
      },
      certificatesImage,
    };
    if (selectedLevel === "diploma")
      data = {
        ...data,
        level1Score: "",
        level2Score: { level2Score: "" },
        underGraduate: { underGraduate: "" },
        postGraduteScore: { postGraduteScore: "" },
      };
    else if (selectedLevel === "undergraduate")
      data = {
        ...data,
        underGraduate: { underGraduate: "" },
        postGraduteScore: { postGraduteScore: "" },
      };
    else if (selectedLevel === "postgraduate")
      data = { ...data, postGraduteScore: { postGraduteScore: "" } };

    window.localStorage.setItem("academicInformation", JSON.stringify(data));

    props.getData(data);
  };

  const sendData = async () => {
    try {
      const isValid = await validate();
      if (isValid) {
        saveData();
        props.handleNext();
      }
    } catch (error) {}
  };

  // back tracking
  useEffect(() => {
    if (Object.keys(props.data)?.length > 0) {
      setSchoolMarks(props.data.schoolMarks);
      // setLevel0Score(props.data.level0Score)
      setLevel1Score(props.data.level1Score);
      setLevel2Score(props.data.level2Score);
      setSemesterMarks(props.data.semesterMarks);
      setOtherCertificate(props.data.otherCertificate);
      // setDiplomaScore(props.data.diplomaScore);
      setPostGraduteScore(props.data.postGraduteScore);
      setUnderGraduate(props.data.underGraduate);
      setGre(props.data.gre);
      setGmat(props.data.gmat);
      setSat(props.data.sat);
      setSatII(props.data.satII);
      setTofel(props.data.tofel);
      setJeeAdvance(props.data.jeeAdvance);
      setIelts(props.data.ielts);
      setCertificatesImage(props.data.certificatesImage);
    }
  }, [props.data]);

  //  image selecting
  const addImage = (image, imageName) => {
    setCertificatesImage({
      ...certificatesImage,
      [imageName]: image.target.files[0],
    });
  };

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    }
    return str;
  };

  return (
    <div className="dashboard-basic-info">
      {/* Background Information */}
      <div className="dashboard-basic-info__sectionContainer">
        <div className="dashboard-basic-info__sectionTitle">
          Academic Information
        </div>

        <div className="dashboard-basic-info__formContainer">
          <div className="dashboard-basic-info__marginContainer">
            <div className="dashboard-basic-info__formTitle form--title">
              Academics Scores
            </div>
            <hr className="dashboard-basic-info__horizontalLine" />

            <form className="form-container">
              {/* -----------end-------------------- */}
              <Grid
                container
                className="dashboard-basic-info__row academic-marks-input-container"
              >
                {(selectedLevel == "diploma" ||
                  selectedLevel == "postgraduate" ||
                  selectedLevel == "undergraduate" ||
                  selectedLevel == "phd") && (
                  <Grid
                    className={
                      "dashboard-basic-info__grid academic-marks-field"
                    }
                    item
                    sm={12}
                    md={12}
                    xs={12}
                  >
                    <div className="dashboard-basic-info__formText">
                      School Marks / Class 10(X) / Level 0
                    </div>
                    <Input
                      className={"dashboard-basic-info__input"}
                      fullWidth
                      placeholder="Enter your marks"
                      value={schoolMarks?.schoolMarks}
                      onChange={(e) => {
                        setSchoolMarks({
                          ...schoolMarks,
                          schoolMarks: e.target.value,
                        });
                        setFormError((prev) => ({
                          ...prev,
                          schoolMarks: null,
                        }));
                      }}
                      name="schoolMarks"
                      errorMessage={formError.schoolMarks}
                      error={!!formError.schoolMarks}
                    />
                  </Grid>
                )}
                {(selectedLevel == "phd" ||
                  // selectedLevel === "diploma" ||
                  selectedLevel === "postgraduate" ||
                  selectedLevel == "undergraduate") && (
                  <>
                    <Grid
                      className={"dashboard-basic-info__grid"}
                      item
                      sm={12}
                      md={12}
                      xs={12}
                    >
                      <div className="dashboard-basic-info__formText">
                        High School Marks /{" "}
                        {showClass11Marks ? "Class 11" : "Class 12"} / Level A
                        Marks / Diploma
                      </div>
                      <div style={{ display: "flex" }}>
                        {showClass11Marks ? (
                          <Input
                            className={"dashboard-basic-info__input"}
                            fullWidth
                            placeholder="Enter your marks"
                            value={level1Score}
                            onChange={(e) => setLevel1Score(e.target.value)}
                            name="level1Score"
                            errorMessage={formError.level1Score}
                            error={!!formError.level1Score}
                          />
                        ) : (
                          <Input
                            className={"dashboard-basic-info__input"}
                            fullWidth
                            placeholder="Enter your marks"
                            value={level2Score?.level2Score}
                            //onChange={(e) => setLevel2Score(e.target.value)}
                            onChange={(e) => {
                              setLevel2Score({
                                ...level2Score,
                                level2Score: e.target.value,
                              });
                              setFormError((prev) => ({
                                ...prev,
                                level2Score: null,
                              }));
                            }}
                            name="level2Score"
                            errorMessage={formError.level2Score}
                            error={!!formError.level2Score}
                          />
                        )}

                        <div
                          onClick={() =>
                            setShowClass11Marks(
                              (showClass11Marks) => !showClass11Marks
                            )
                          }
                          style={{ cursor: "pointer", marginLeft: "5px" }}
                        >
                          {selectedLevel === "undergraduate" && (
                            <u>
                              {showClass11Marks
                                ? "Have completed ?"
                                : `Haven't completed yet?`}
                            </u>
                          )}
                        </div>
                      </div>
                    </Grid>
                  </>
                )}
                {(selectedLevel == "postgraduate" ||
                  selectedLevel == "phd") && (
                  <Grid
                    className={"dashboard-basic-info__grid"}
                    item
                    sm={12}
                    md={12}
                    xs={12}
                  >
                    <div className="dashboard-basic-info__formText">
                      UnderGraduate Marks {""}
                      {showSemesterMarks ? "/ Latest Semester" : ""}
                    </div>
                    <div style={{ display: "flex" }}>
                      {showSemesterMarks ? (
                        <Input
                          className={"dashboard-basic-info__input"}
                          fullWidth
                          placeholder="Enter your marks"
                          value={semesterMarks}
                          onChange={(e) => setSemesterMarks(e.target.value)}
                          name="semesterMarks"
                          errorMessage={formError.semesterMarks}
                          error={!!formError.semesterMarks}
                        />
                      ) : (
                        <Input
                          className={"dashboard-basic-info__input"}
                          fullWidth
                          placeholder="Enter your marks"
                          value={underGraduate?.underGraduate}
                          onChange={(e) => {
                            setUnderGraduate({
                              ...underGraduate,
                              underGraduate: e.target.value,
                            });
                            setFormError((prev) => ({
                              ...prev,
                              underGraduate: null,
                            }));
                          }}
                          name="underGraduate"
                          errorMessage={formError.underGraduate}
                          error={!!formError.underGraduate}
                        />
                      )}
                      <div
                        onClick={() =>
                          setShowsemesterMarks(
                            (showSemesterMarks) => !showSemesterMarks
                          )
                        }
                        style={{ cursor: "pointer", marginLeft: "5px" }}
                      >
                        {selectedLevel === "postgraduate" && (
                          <u>
                            {showSemesterMarks
                              ? "Have completed ?"
                              : `Haven't completed yet?`}
                          </u>
                        )}
                      </div>
                    </div>
                  </Grid>
                )}
                {selectedLevel == "phd" && (
                  <Grid
                    className={"dashboard-basic-info__grid"}
                    item
                    sm={12}
                    md={12}
                    xs={12}
                  >
                    <div className="dashboard-basic-info__formText">
                      Post graduate Marks
                    </div>
                    <Input
                      className={"dashboard-basic-info__input"}
                      fullWidth
                      placeholder="Enter your marks"
                      value={postGraduteScore?.postGraduteScore}
                      onChange={(e) => {
                        setPostGraduteScore({
                          ...postGraduteScore,
                          postGraduteScore: e.target.value,
                        });
                        setFormError((prev) => ({
                          ...prev,
                          postGraduteScore: null,
                        }));
                      }}
                      name="postGraduteScore"
                      errorMessage={formError.postGraduteScore}
                      error={!!formError.postGraduteScore}
                    />
                  </Grid>
                )}
              </Grid>

              {/* -------------academic indentification section------------ */}
              <Grid
                container
                className="dashboard-basic-info__row"
                justify="flex-start"
                direction="row"
              >
                <Grid item sm={12} md={12} xs={12}>
                  <div className="dashboard-basic-info__formTitle form--title">
                    Academic Documents
                  </div>
                  <hr className="dashboard-basic-info__horizontalLine" />
                </Grid>
              </Grid>

              {(selectedLevel == "diploma" ||
                selectedLevel == "postgraduate" ||
                selectedLevel == "undergraduate" ||
                selectedLevel == "phd") && (
                <Grid
                  container
                  className="dashboard-basic-info__row acdemic-certificate-upload"
                  justify="flex-start"
                  direction="row"
                >
                  <Grid item sm={12} md={4} xs={12}>
                    <div className="dashboard-basic-info__subformTitle">
                      School Certificate
                    </div>
                  </Grid>

                  <Grid
                    container
                    sm={6}
                    md={4}
                    xs={6}
                    justify="center"
                    alignContent="center"
                    className="academic-document-upload"
                  >
                    <label htmlFor="upload-photo">
                      <input
                        style={{ display: "none" }}
                        id="upload-photo"
                        name="upload-photo"
                        type="file"
                        onChange={(e) => {
                          addImage(e, "school");
                          // setCertificateThumbnail({
                          //   ...certificateThumbnail,
                          //   school: URL.createObjectURL(e.target.files[0]),
                          // });
                        }}
                      />

                      <UploadButton
                        startIcon=""
                        className="btn-color student-dashboard-button"
                      >
                        Choose File
                      </UploadButton>
                      <div className="error-msg" style={{ marginTop: "10px" }}>
                        {formError["certificatesImage.school"]}
                      </div>
                    </label>
                  </Grid>
                  <Grid
                    item
                    sm={5}
                    md={4}
                    xs={5}
                    style={{ alignSelf: "center" }}
                  >
                    {certificatesImage?.school && (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        {truncateString(certificatesImage.school.name, 10)}{" "}
                        <img
                          src="/check.png"
                          alt="check"
                          className="upload-success-img"
                        />{" "}
                      </div>
                    )}
                  </Grid>
                </Grid>
              )}
              {
                // selectedLevel == "diploma" ||
                (selectedLevel == "postgraduate" ||
                  selectedLevel == "undergraduate" ||
                  selectedLevel == "phd") && (
                  <Grid
                    container
                    className="dashboard-basic-info__row"
                    justify="flex-start"
                    direction="row"
                  >
                    <Grid item sm={12} md={4} xs={12}>
                      <div className="dashboard-basic-info__subformTitle">
                        High School Certificate
                      </div>
                    </Grid>
                    <Grid
                      container
                      sm={12}
                      md={4}
                      xs={6}
                      justify="center"
                      alignContent="center"
                      className="academic-document-upload"
                    >
                      <label htmlFor="upload-photo-High-School">
                        <input
                          style={{ display: "none" }}
                          id="upload-photo-High-School"
                          name="upload-photo"
                          type="file"
                          onChange={(e) => {
                            addImage(e, "highSchool");
                          }}
                        />

                        <UploadButton
                          startIcon=""
                          className="btn-color student-dashboard-button"
                        >
                          Choose File
                        </UploadButton>
                        <div
                          className="error-msg"
                          style={{ marginTop: "10px" }}
                        >
                          {formError["certificatesImage.highSchool"]}
                        </div>
                      </label>
                    </Grid>
                    <Grid
                      item
                      sm={5}
                      md={4}
                      xs={5}
                      style={{ alignSelf: "center" }}
                    >
                      {certificatesImage?.highSchool && (
                        <div style={{ display: "flex", alignItems: "center" }}>
                          {truncateString(
                            certificatesImage.highSchool.name,
                            10
                          )}{" "}
                          <img
                            src="/check.png"
                            alt="check"
                            className="upload-success-img"
                          />{" "}
                        </div>
                      )}
                    </Grid>
                  </Grid>
                )
              }
              {(selectedLevel == "postgraduate" || selectedLevel == "phd") && (
                <Grid
                  container
                  className="dashboard-basic-info__row"
                  justify="flex-start"
                  direction="row"
                >
                  <Grid item sm={12} md={4} xs={12}>
                    <div className="dashboard-basic-info__subformTitle">
                      Under Graduate Marks
                    </div>
                  </Grid>
                  <Grid
                    container
                    sm={6}
                    md={4}
                    xs={6}
                    justify="center"
                    alignContent="center"
                    className="academic-document-upload"
                  >
                    <label htmlFor="upload-photo-Under">
                      <input
                        style={{ display: "none" }}
                        id="upload-photo-Under"
                        name="upload-photo"
                        type="file"
                        onChange={(e) => {
                          addImage(e, "under_Graduate");
                          // setCertificateThumbnail({
                          //   ...certificateThumbnail,
                          //   under_Graduate: URL.createObjectURL(
                          //     e.target.files[0]
                          //   ),
                          // });
                        }}
                      />

                      <UploadButton
                        startIcon=""
                        className="btn-color student-dashboard-button"
                      >
                        Choose File
                      </UploadButton>
                      <div className="error-msg" style={{ marginTop: "10px" }}>
                        {formError["certificatesImage.under_Graduate"]}
                      </div>
                    </label>
                  </Grid>
                  <Grid
                    item
                    sm={5}
                    md={4}
                    xs={5}
                    style={{ alignSelf: "center" }}
                  >
                    {certificatesImage?.under_Graduate && (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        {truncateString(
                          certificatesImage?.under_Graduate.name,
                          10
                        )}{" "}
                        <img
                          src="/check.png"
                          alt="check"
                          className="upload-success-img"
                        />{" "}
                      </div>
                    )}
                  </Grid>
                </Grid>
              )}
              {selectedLevel == "phd" && (
                <Grid
                  container
                  className="dashboard-basic-info__row"
                  justify="flex-start"
                  direction="row"
                >
                  <Grid item sm={12} md={4} xs={12}>
                    <div className="dashboard-basic-info__subformTitle">
                      Post Graduate Marks
                    </div>
                  </Grid>
                  <Grid
                    container
                    sm={6}
                    md={4}
                    xs={6}
                    justify="center"
                    alignContent="center"
                    className="academic-document-upload"
                  >
                    <label htmlFor="upload-photo-Post">
                      <input
                        style={{ display: "none" }}
                        id="upload-photo-Post"
                        name="upload-photo"
                        type="file"
                        onChange={(e) => {
                          addImage(e, "post_Gradute");
                          // setCertificateThumbnail({
                          //   ...certificateThumbnail,
                          //   post_Gradute: URL.createObjectURL(e.target.files[0]),
                          // });
                        }}
                      />

                      <UploadButton
                        startIcon=""
                        className="btn-color student-dashboard-button"
                      >
                        Choose File
                      </UploadButton>
                      <div className="error-msg" style={{ marginTop: "10px" }}>
                        {formError["certificatesImage.post_Gradute"]}
                      </div>
                    </label>
                  </Grid>
                  <Grid
                    item
                    sm={5}
                    md={4}
                    xs={5}
                    style={{ alignSelf: "center" }}
                  >
                    {certificatesImage?.post_Gradute && (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        {truncateString(
                          certificatesImage?.post_Gradute.name,
                          10
                        )}{" "}
                        <img
                          src="/check.png"
                          alt="check"
                          className="upload-success-img"
                        />{" "}
                      </div>
                    )}
                  </Grid>
                </Grid>
              )}
              <Grid
                container
                className="dashboard-basic-info__row"
                justify="flex-start"
                direction="row"
              >
                <Grid item sm={12} md={4} xs={12}>
                  {/* <Input
                    type="text"
                    className={"dashboard-basic-info__input"}
                    fullWidth
                    label="Other Certificate"
                    value={otherCertificate}
                    onChange={(e) => setOtherCertificate(e.target.value)}
                    name="otherCertificate"
                  /> */}
                  <div className="dashboard-basic-info__subformTitle">
                    Other Certificate
                  </div>
                </Grid>

                <Grid
                  container
                  sm={6}
                  md={4}
                  xs={6}
                  justify="center"
                  alignContent="center"
                  className="academic-document-upload"
                >
                  <div
                    className="dashboard-basic-info__uploadButtonContainer"
                    style={{ marginLeft: 0 }}
                  >
                    <label htmlFor="upload-photo-other">
                      <input
                        style={{ display: "none" }}
                        id="upload-photo-other"
                        name="upload-photo"
                        type="file"
                        onChange={(e) => {
                          addImage(e, "other");
                          // setCertificateThumbnail({
                          //   ...certificateThumbnail,
                          //   other: URL.createObjectURL(e.target.files[0]),
                          // });
                        }}
                      />

                      <UploadButton
                        startIcon=""
                        className="btn-color student-dashboard-button"
                      >
                        Choose File
                      </UploadButton>
                    </label>
                  </div>
                </Grid>
                <Grid item sm={5} md={4} xs={5} style={{ alignSelf: "center" }}>
                  {certificatesImage?.other && (
                    <div style={{ display: "flex", alignItems: "center" }}>
                      {truncateString(certificatesImage.other.name, 10)}{" "}
                      <img
                        src="/check.png"
                        alt="check"
                        className="upload-success-img"
                      />{" "}
                    </div>
                  )}
                </Grid>
              </Grid>
              {/* </Grid> */}
            </form>

            {/* Reference Information */}
            <div className="dashboard-basic-info__sectionContainer">
              <Grid
                container
                className="dashboard-basic-info__row"
                justify="flex-start"
                direction="row"
              >
                <Grid item sm={12} md={12} xs={12}>
                  <div className="dashboard-basic-info__formTitle form--title">
                    Exam Scores
                  </div>
                  <hr className="dashboard-basic-info__horizontalLine" />
                </Grid>
              </Grid>
              <div
                className="dashboard-basic-info__formContainer exam-score-container"
                style={{ paddingLeft: "0px", paddingTop: "0px" }}
              >
                <form className="form-container">
                  <Grid
                    container
                    className="dashboard-basic-info__row exam-score"
                    justify="space-around"
                    direction="row"
                  >
                    <Grid item sm={12} md={2} xs={12}>
                      <div className="dashboard-basic-info__formTitle language-score">
                        GRE
                      </div>
                    </Grid>
                    <Grid item sm={12} md={4} xs={12}>
                      <RadioGroup
                        aria-label="passport"
                        name="passport1"
                        row
                        defaultValue="no"
                        value={gre?.haveDone}
                        onChange={(e) =>
                          setGre({ ...gre, haveDone: e.target.value })
                        }
                      >
                        <FormControlLabel
                          value="yes"
                          control={<CustomRadio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="no"
                          control={<CustomRadio />}
                          label="No"
                        />
                      </RadioGroup>
                      {gre?.haveDone === "yes" ? (
                        <Input
                          className={"dashboard-basic-info__input"}
                          placeholder="Enter your marks"
                          value={gre?.score}
                          onChange={(e) =>
                            setGre({ ...gre, score: e.target.value })
                          }
                        />
                      ) : (
                        ""
                      )}
                    </Grid>
                    <Grid item sm={12} md={2} xs={12}>
                      <div className="dashboard-basic-info__formTitle language-score">
                        SAT
                      </div>
                    </Grid>
                    <Grid item sm={12} md={4} xs={12}>
                      <RadioGroup
                        aria-label="passport"
                        name="passport1"
                        row
                        defaultValue="no"
                        value={sat?.haveDone}
                        onChange={(e) =>
                          setSat({ ...sat, haveDone: e.target.value })
                        }
                      >
                        <FormControlLabel
                          value="yes"
                          control={<CustomRadio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="no"
                          control={<CustomRadio />}
                          label="No"
                        />
                      </RadioGroup>
                      {sat?.haveDone === "yes" ? (
                        <Input
                          className={"dashboard-basic-info__input"}
                          placeholder="Enter your marks"
                          value={sat?.score}
                          onChange={(e) =>
                            setSat({ ...sat, score: e.target.value })
                          }
                        />
                      ) : (
                        ""
                      )}
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    className="dashboard-basic-info__row exam-score"
                    justify="space-around"
                    direction="row"
                  >
                    <Grid item sm={12} md={2} xs={12}>
                      <div className="dashboard-basic-info__formTitle language-score">
                        GMAT
                      </div>
                    </Grid>
                    <Grid item sm={12} md={4} xs={12}>
                      <RadioGroup
                        aria-label="passport"
                        name="passport1"
                        row
                        defaultValue="no"
                        value={gmat?.haveDone}
                        onChange={(e) =>
                          setGmat({ ...gmat, haveDone: e.target.value })
                        }
                      >
                        <FormControlLabel
                          value="yes"
                          control={<CustomRadio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="no"
                          control={<CustomRadio />}
                          label="No"
                        />
                      </RadioGroup>

                      {gmat?.haveDone === "yes" ? (
                        <Input
                          className={"dashboard-basic-info__input"}
                          placeholder="Enter your marks"
                          value={gmat?.score}
                          onChange={(e) =>
                            setGmat({ ...gmat, score: e.target.value })
                          }
                        />
                      ) : (
                        ""
                      )}
                    </Grid>
                    <Grid item sm={12} md={2} xs={12}>
                      <div className="dashboard-basic-info__formTitle language-score">
                        SAT II
                      </div>
                    </Grid>
                    <Grid item sm={12} md={4} xs={12}>
                      <RadioGroup
                        aria-label="passport"
                        name="passport1"
                        row
                        defaultValue="no"
                        value={satII?.haveDone}
                        onChange={(e) =>
                          setSatII({ ...satII, haveDone: e.target.value })
                        }
                      >
                        <FormControlLabel
                          value="yes"
                          control={<CustomRadio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="no"
                          control={<CustomRadio />}
                          label="No"
                        />
                      </RadioGroup>

                      {satII?.haveDone === "yes" ? (
                        <Input
                          className={"dashboard-basic-info__input"}
                          placeholder="Enter your marks"
                          value={satII?.score}
                          onChange={(e) =>
                            setSatII({ ...satII, score: e.target.value })
                          }
                        />
                      ) : (
                        ""
                      )}
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    className="dashboard-basic-info__row exam-score"
                    justify="space-around"
                    direction="row"
                  >
                    <Grid item sm={12} md={2} xs={12}>
                      <div className="dashboard-basic-info__formTitle language-score">
                        TOEFL
                      </div>
                    </Grid>
                    <Grid item sm={12} md={4} xs={12}>
                      <RadioGroup
                        aria-label="passport"
                        name="passport1"
                        row
                        defaultValue="no"
                        value={tofel?.haveDone}
                        onChange={(e) =>
                          setTofel({ ...tofel, haveDone: e.target.value })
                        }
                      >
                        <FormControlLabel
                          value="yes"
                          control={<CustomRadio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="no"
                          control={<CustomRadio />}
                          label="No"
                        />
                      </RadioGroup>

                      {tofel?.haveDone === "yes" ? (
                        <Input
                          className={"dashboard-basic-info__input"}
                          placeholder="Enter your marks"
                          value={tofel?.score}
                          onChange={(e) =>
                            setTofel({ ...tofel, score: e.target.value })
                          }
                        />
                      ) : (
                        ""
                      )}
                    </Grid>
                    <Grid item sm={12} md={2} xs={12}>
                      <div className="dashboard-basic-info__formTitle language-score">
                        JEE Advance
                      </div>
                    </Grid>
                    <Grid item sm={12} md={4} xs={12}>
                      <RadioGroup
                        aria-label="passport"
                        name="passport1"
                        row
                        defaultValue="no"
                        value={jeeAdvance?.haveDone}
                        onChange={(e) =>
                          setJeeAdvance({
                            ...jeeAdvance,
                            haveDone: e.target.value,
                          })
                        }
                      >
                        <FormControlLabel
                          value="yes"
                          control={<CustomRadio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="no"
                          control={<CustomRadio />}
                          label="No"
                        />
                      </RadioGroup>

                      {jeeAdvance?.haveDone === "yes" ? (
                        <Input
                          className={"dashboard-basic-info__input"}
                          placeholder="Enter your marks"
                          value={jeeAdvance?.score}
                          onChange={(e) =>
                            setJeeAdvance({
                              ...jeeAdvance,
                              score: e.target.value,
                            })
                          }
                        />
                      ) : (
                        ""
                      )}
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    className="dashboard-basic-info__row exam-score"
                    justify="flex-start"
                    direction="row"
                  >
                    <Grid item sm={12} md={2} xs={12}>
                      <div className="dashboard-basic-info__formTitle language-score">
                        IELTS
                      </div>
                    </Grid>
                    <Grid item sm={12} md={4} xs={12}>
                      <RadioGroup
                        aria-label="passport"
                        name="passport1"
                        row
                        defaultValue="no"
                        value={ielts?.haveDone}
                        onChange={(e) =>
                          setIelts({ ...ielts, haveDone: e.target.value })
                        }
                      >
                        <FormControlLabel
                          value="yes"
                          control={<CustomRadio />}
                          label="Yes"
                        />
                        <FormControlLabel
                          value="no"
                          control={<CustomRadio />}
                          label="No"
                        />
                      </RadioGroup>

                      {ielts?.haveDone === "yes" ? (
                        <Input
                          className={"dashboard-basic-info__input"}
                          placeholder="Enter your marks"
                          value={ielts?.score}
                          onChange={(e) =>
                            setIelts({ ...ielts, score: e.target.value })
                          }
                        />
                      ) : (
                        ""
                      )}
                    </Grid>
                  </Grid>

                  {ielts?.haveDone == "yes" ? (
                    <Grid
                      container
                      className="dashboard-basic-info__row exam-score"
                      direction="row"
                      item
                      sm={12}
                      md={12}
                      xs={12}
                    >
                      <Grid item sm={12} md={2} xs={12}></Grid>
                      <Grid item sm={12} md={2} xs={12}>
                        <div className="dashboard-basic-info__formTitleSecond">
                          Listening
                        </div>
                        <Input
                          className={"dashboard-basic-info__input"}
                          fullWidth
                          placeholder="Enter your marks"
                          value={ielts.subMars.listining}
                          onChange={(e) => {
                            const _itels = {
                              ...ielts,
                              subMars: {
                                ...ielts.subMars,
                                listining: e.target.value,
                              },
                            };
                            setIelts(_itels);
                          }}
                        />
                      </Grid>
                      <Grid item sm={12} md={2} xs={12}>
                        <div className="dashboard-basic-info__formTitleSecond">
                          Writing
                        </div>
                        <Input
                          className={"dashboard-basic-info__input"}
                          fullWidth
                          placeholder="Enter your marks"
                          value={ielts.subMars.writing}
                          onChange={(e) => {
                            const _itels = {
                              ...ielts,
                              subMars: {
                                ...ielts.subMars,
                                writing: e.target.value,
                              },
                            };

                            setIelts(_itels);
                          }}
                        />
                      </Grid>
                      <Grid item sm={12} md={2} xs={12}>
                        <div className="dashboard-basic-info__formTitleSecond">
                          Reading
                        </div>
                        <Input
                          className={"dashboard-basic-info__input"}
                          fullWidth
                          placeholder="Enter your marks"
                          value={ielts.subMars.reading}
                          onChange={(e) => {
                            const _itels = {
                              ...ielts,
                              subMars: {
                                ...ielts.subMars,
                                reading: e.target.value,
                              },
                            };

                            setIelts(_itels);
                          }}
                        />
                      </Grid>
                      <Grid item sm={12} md={2} xs={12}>
                        <div className="dashboard-basic-info__formTitleSecond">
                          Speaking
                        </div>
                        <Input
                          className={"dashboard-basic-info__input"}
                          fullWidth
                          placeholder="Enter your marks"
                          value={ielts.subMars.speaking}
                          onChange={(e) => {
                            const _itels = {
                              ...ielts,
                              subMars: {
                                ...ielts.subMars,
                                speaking: e.target.value,
                              },
                            };

                            setIelts(_itels);
                          }}
                        />
                      </Grid>
                    </Grid>
                  ) : (
                    ""
                  )}
                </form>
                {/* </div> */}
              </div>
              <div className="dashboard-basic-info__buttonContainer">
                <div
                  className="dashboard-basic-info__backContainer"
                  onClick={() => {
                    saveData();
                    props.handleBack();
                  }}
                >
                  Back
                </div>
                <Button onClick={sendData}>Save And Continue</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Snackbar
        open={snackOpen}
        autoHideDuration={4000}
        onClose={() => setSnackOpen(false)}
      >
        <Alert onClose={() => setSnackOpen(false)} severity="error">
          Please check the field and try again!
        </Alert>
      </Snackbar>
    </div>
  );
};
