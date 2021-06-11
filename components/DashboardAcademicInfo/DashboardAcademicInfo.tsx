import React, { useEffect, useState } from "react";
// import { Select } from "../Select";
import { Input } from "../Input";
import * as yup from "yup";
import { Grid } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Button } from "../Button";
import { UploadButton } from "../Button/uploadButton";

interface AcademicFormField {
  schoolMarks: string;
  diplomaScore: string;
  level1Score: string;
  level2Score: string;
  underGraduate: string;
  postGraduteScore: string;
}

export const DashboardAcademicInfo = (props) => {
  const [schoolMarks, setSchoolMarks] = useState("");
  const [selectedCourse, setselectedCourse] = useState("");
  // const [level0Score, setLevel0Score] = useState("");
  const [diplomaScore, setDiplomaScore] = useState("");
  const [level1Score, setLevel1Score] = useState("");
  const [level2Score, setLevel2Score] = useState("");
  const [postGraduteScore, setPostGraduteScore] = useState("");
  const [underGraduate, setUnderGraduate] = useState("");
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

  const { selectedLevel } = props.selectedLevel;

  const [certificatesImage, setCertificatesImage] = useState({
    highSchool: null,
    school: null,
    under_Graduate: null,
    post_Gradute: null,
    other: null,
  });

  const [showClass11Marks, setShowClass11Marks] = useState(false);

  const saveData = () => {
    props.getData({
      schoolMarks,
      // level0Score,
      level1Score,
      level2Score,
      diplomaScore,
      postGraduteScore,
      underGraduate,
      gre: { ...gre, score: gre?.haveDone === "no" ? "" : gre.score },
      gmat: { ...gmat, score: gmat?.haveDone === "no" ? "" : gmat.score },
      sat: { ...sat, score: sat?.haveDone === "no" ? "" : sat.score },
      satII: { ...satII, score: satII?.haveDone === "no" ? "" : satII.score },
      tofel: { ...tofel, score: tofel?.haveDone === "no" ? "" : tofel.score },
      jeeAdvance: {
        ...jeeAdvance,
        score: jeeAdvance?.haveDone === "no" ? "" : jeeAdvance.score,
      },
      ielts: {
        ...ielts,
        score: ielts?.haveDone === "no" ? "" : ielts.score,
        subMars:
          ielts?.haveDone === "no"
            ? { listining: "", writing: "", reading: "", speaking: "" }
            : ielts.subMars,
      },
      certificatesImage,
    });
  };

  // const validationSchema = yup.object().shape<AcademicFormField>({
  //   schoolMarks: yup.string().required("Required school marks"),
  //   diplomaScore: yup.string().required("Required diploma score"),
  //   level1Score: yup.string().required("Required level1score"),
  //   level2Score: yup.string().required("Required level2score"),
  //   underGraduate: yup.string().required("Required under graduate score"),
  //   postGraduteScore: yup.string().required("Required post graduate score"),
  // });

  // const validate = async () => {
  //   try {
  //     await validationSchema.validate(
  //       {
  //         schoolMarks: schoolMarks,
  //         diplomaScore: diplomaScore,
  //         level1Score: level1Score,
  //         level2Score: level2Score,
  //         underGraduate: underGraduate,
  //         postGraduteScore: postGraduteScore,
  //       },
  //       {
  //         abortEarly: false,
  //       }
  //     );
  //     setFormError({});
  //     return true;
  //   } catch (err) {
  //     setSnackOpen(true);
  //     const errors = {};
  //     err.inner.forEach((item: any) => {
  //       errors[item.path] = item.errors[0];
  //     });
  //     setFormError({ ...errors });
  //   }
  // };

  const sendData = async () => {
    try {
      // const isValid = await validate();
      // if (isValid) {
      saveData();
      props.handleNext();
      // }
    } catch (error) {}
  };

  // back tracking
  useEffect(() => {
    if (Object.keys(props.data).length > 0) {
      setSchoolMarks(props.data.schoolMarks);
      // setLevel0Score(props.data.level0Score);

      setLevel1Score(props.data.level1Score);
      setLevel2Score(props.data.level2Score);
      setDiplomaScore(props.data.diplomaScore);
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
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="dashboard-basic-info">
      {/* Background Information */}
      <div className="dashboard-basic-info__sectionContainer">
        <div className="dashboard-basic-info__sectionTitle">
          Academic Information
        </div>
        <hr className="dashboard-basic-info__horizontalLine" />
        <div className="dashboard-basic-info__formContainer">
          <form>
            {/* Academic Heading score */}
            <Grid
              container
              className="dashboard-basic-info__row"
              justify="flex-start"
              direction="row"
            >
              <Grid item sm={12} md={12} xs={12}>
                <div className="dashboard-basic-info__formTitle">
                  Academics Scores
                </div>
                <hr className="dashboard-basic-info__horizontalLine" />
              </Grid>
            </Grid>

            {/* -----------end-------------------- */}
            <Grid
              container
              className="dashboard-basic-info__row"
              justify="flex-start"
              direction="row"
            >
              {(selectedLevel == "diploma" ||
                selectedLevel == "postgraduate" ||
                selectedLevel == "undergraduate" ||
                selectedLevel == "phd") && (
                <Grid
                  className={"dashboard-basic-info__grid"}
                  item
                  sm={12}
                  md={6}
                  xs={12}
                  style={{ paddingLeft: "15px", marginBottom: "20px" }}
                >
                  <div className="dashboard-basic-info__formText">
                    School Marks / Class 10(X)
                  </div>
                  <Input
                    className={"dashboard-basic-info__input"}
                    fullWidth
                    placeholder="eg: 50.50"
                    value={schoolMarks}
                    onChange={(e) => setSchoolMarks(e.target.value)}
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
                    md={6}
                    xs={12}
                  >
                    <div className="dashboard-basic-info__formText">
                      High School Marks /{" "}
                      {showClass11Marks ? "Class 11" : "Class 12"} / Level 0
                      Marks
                    </div>
                    <div style={{ display: "flex" }}>
                      {showClass11Marks ? (
                        <Input
                          className={"dashboard-basic-info__input"}
                          fullWidth
                          placeholder="eg: 50.50 class 11"
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
                          placeholder="eg: 50.50 class 12"
                          value={level2Score}
                          onChange={(e) => setLevel2Score(e.target.value)}
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
                selectedLevel == "undergraduate" ||
                selectedLevel == "phd") && (
                <Grid
                  className={"dashboard-basic-info__grid"}
                  item
                  sm={12}
                  md={6}
                  xs={12}
                  style={{ marginBottom: "20px" }}
                >
                  <div className="dashboard-basic-info__formText">
                    Diploma Scroes
                  </div>
                  <Input
                    className={"dashboard-basic-info__input"}
                    fullWidth
                    placeholder="eg: 50.50"
                    value={diplomaScore}
                    onChange={(e) => setDiplomaScore(e.target.value)}
                    name="diplomaScore"
                    errorMessage={formError.diplomaScore}
                    error={!!formError.diplomaScore}
                  />
                </Grid>
              )}

              {selectedLevel == "phd" && (
                <Grid
                  className={"dashboard-basic-info__grid"}
                  item
                  sm={12}
                  md={6}
                  xs={12}
                >
                  <div className="dashboard-basic-info__formText">
                    Post graduate Marks
                  </div>
                  <Input
                    className={"dashboard-basic-info__input"}
                    fullWidth
                    placeholder="eg: 50.50"
                    value={postGraduteScore}
                    onChange={(e) => setPostGraduteScore(e.target.value)}
                    name="postGraduteScore"
                    errorMessage={formError.postGraduteScore}
                    error={!!formError.postGraduteScore}
                  />
                </Grid>
              )}
              {(selectedLevel == "postgraduate" || selectedLevel == "phd") && (
                <Grid
                  className={"dashboard-basic-info__grid"}
                  item
                  sm={12}
                  md={6}
                  xs={12}
                >
                  <div className="dashboard-basic-info__formText">
                    UnderGraduate Marks
                  </div>
                  <Input
                    className={"dashboard-basic-info__input"}
                    fullWidth
                    placeholder="eg: 50.50"
                    value={underGraduate}
                    onChange={(e) => setUnderGraduate(e.target.value)}
                    name="underGraduate"
                    errorMessage={formError.underGraduate}
                    error={!!formError.underGraduate}
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
                <div className="dashboard-basic-info__formTitle">
                  Academic Identification
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
                className="dashboard-basic-info__row"
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
                  sm={12}
                  md={4}
                  xs={12}
                  justify="center"
                  alignContent="center"
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

                    <UploadButton startIcon="" className="">
                      Upload button
                    </UploadButton>
                  </label>
                </Grid>
                <Grid item sm={12} md={4} xs={12}>
                  {certificatesImage?.school && (
                    <div style={{ display: "flex", marginTop: "10px" }}>
                      {truncateString(certificatesImage.school.name, 10)}{" "}
                      <img
                        src="/check.png"
                        alt="check"
                        style={{ marginLeft: "20px" }}
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
                      High School Marks
                    </div>
                  </Grid>
                  <Grid
                    container
                    sm={12}
                    md={4}
                    xs={12}
                    justify="center"
                    alignContent="center"
                  >
                    <label htmlFor="upload-photo-High-School">
                      <input
                        style={{ display: "none" }}
                        id="upload-photo-High-School"
                        name="upload-photo"
                        type="file"
                        onChange={(e) => {
                          addImage(e, "highSchool");
                          // setCertificateThumbnail({
                          //   ...certificateThumbnail,
                          //   highSchool: URL.createObjectURL(e.target.files[0]),
                          // });
                        }}
                      />

                      <UploadButton startIcon="" className="">
                        Upload button
                      </UploadButton>
                    </label>
                  </Grid>
                  <Grid item sm={12} md={4} xs={12}>
                    {certificatesImage?.highSchool && (
                      <div style={{ display: "flex", marginTop: "10px" }}>
                        {truncateString(certificatesImage.highSchool.name, 10)}{" "}
                        <img
                          src="/check.png"
                          alt="check"
                          style={{ marginLeft: "20px" }}
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
                  sm={12}
                  md={4}
                  xs={12}
                  justify="center"
                  alignContent="center"
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

                    <UploadButton startIcon="" className="">
                      Upload button
                    </UploadButton>
                  </label>
                </Grid>
                <Grid item sm={12} md={4} xs={12}>
                  {certificatesImage?.under_Graduate && (
                    <div style={{ display: "flex", marginTop: "10px" }}>
                      {truncateString(
                        certificatesImage?.under_Graduate.name,
                        20
                      )}{" "}
                      <img
                        src="/check.png"
                        alt="check"
                        style={{ marginLeft: "20px" }}
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
                  sm={12}
                  md={4}
                  xs={12}
                  justify="center"
                  alignContent="center"
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

                    <UploadButton startIcon="" className="">
                      Upload button
                    </UploadButton>
                  </label>
                </Grid>
                <Grid item sm={12} md={4} xs={12}>
                  {certificatesImage?.post_Gradute && (
                    <div style={{ display: "flex", marginTop: "10px" }}>
                      {truncateString(certificatesImage?.post_Gradute.name, 10)}{" "}
                      <img
                        src="/check.png"
                        alt="check"
                        style={{ marginLeft: "20px" }}
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
                <Input
                  type="text"
                  className={"dashboard-basic-info__input"}
                  fullWidth
                  label="Other Certificate"
                />
              </Grid>

              <Grid
                container
                sm={12}
                md={4}
                xs={12}
                justify="center"
                alignContent="center"
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

                    <UploadButton startIcon="" className="">
                      Upload Button
                    </UploadButton>
                  </label>
                </div>
              </Grid>
              <Grid item sm={12} md={3} xs={12}>
                {certificatesImage?.other && (
                  <div style={{ display: "flex", marginTop: "10px" }}>
                    {truncateString(certificatesImage.other.name, 10)}{" "}
                    <img
                      src="/check.png"
                      alt="check"
                      style={{ marginLeft: "20px" }}
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
                <div className="dashboard-basic-info__formTitle">
                  Exam Scores
                </div>
                <hr className="dashboard-basic-info__horizontalLine" />
              </Grid>
            </Grid>
            <div
              className="dashboard-basic-info__formContainer"
              style={{ paddingTop: "0px" }}
            >
              {/* <div className="dashboard-basic-info__marginContainer"> */}
              {/* <div className="dashboard-basic-info__formTitle">
                  Exam Scores
                </div>
                <hr className="dashboard-basic-info__horizontalLine" /> */}
              <form>
                <Grid
                  container
                  className="dashboard-basic-info__row"
                  justify="space-around"
                  direction="row"
                >
                  <Grid item sm={12} md={2} xs={12}>
                    <div className="dashboard-basic-info__formTitle">GRE</div>
                  </Grid>
                  <Grid item sm={12} md={4} xs={12}>
                    <RadioGroup
                      aria-label="passport"
                      name="passport1"
                      row
                      defaultValue="no"
                      value={gre.haveDone}
                      onChange={(e) =>
                        setGre({ ...gre, haveDone: e.target.value })
                      }
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                    {gre.haveDone === "yes" ? (
                      <Input
                        className={"dashboard-basic-info__input"}
                        placeholder="eg: 50"
                        value={gre.score}
                        onChange={(e) =>
                          setGre({ ...gre, score: e.target.value })
                        }
                      />
                    ) : (
                      ""
                    )}
                  </Grid>
                  <Grid item sm={12} md={2} xs={12}>
                    <div className="dashboard-basic-info__formTitle">SAT</div>
                  </Grid>
                  <Grid item sm={12} md={4} xs={12}>
                    <RadioGroup
                      aria-label="passport"
                      name="passport1"
                      row
                      defaultValue="no"
                      value={sat.haveDone}
                      onChange={(e) =>
                        setSat({ ...sat, haveDone: e.target.value })
                      }
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                    {sat.haveDone === "yes" ? (
                      <Input
                        className={"dashboard-basic-info__input"}
                        placeholder="eg: 50"
                        value={sat.score}
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
                  className="dashboard-basic-info__row"
                  justify="space-around"
                  direction="row"
                >
                  <Grid item sm={12} md={2} xs={12}>
                    <div className="dashboard-basic-info__formTitle">GMAT</div>
                  </Grid>
                  <Grid item sm={12} md={4} xs={12}>
                    <RadioGroup
                      aria-label="passport"
                      name="passport1"
                      row
                      defaultValue="no"
                      value={gmat.haveDone}
                      onChange={(e) =>
                        setGmat({ ...gmat, haveDone: e.target.value })
                      }
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>

                    {gmat.haveDone === "yes" ? (
                      <Input
                        className={"dashboard-basic-info__input"}
                        placeholder="eg: 50"
                        value={gmat.score}
                        onChange={(e) =>
                          setGmat({ ...gmat, score: e.target.value })
                        }
                      />
                    ) : (
                      ""
                    )}
                  </Grid>
                  <Grid item sm={12} md={2} xs={12}>
                    <div className="dashboard-basic-info__formTitle">
                      SAT II
                    </div>
                  </Grid>
                  <Grid item sm={12} md={4} xs={12}>
                    <RadioGroup
                      aria-label="passport"
                      name="passport1"
                      row
                      defaultValue="no"
                      value={satII.haveDone}
                      onChange={(e) =>
                        setSatII({ ...satII, haveDone: e.target.value })
                      }
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>

                    {satII.haveDone === "yes" ? (
                      <Input
                        className={"dashboard-basic-info__input"}
                        placeholder="eg: 50.50"
                        value={satII.score}
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
                  className="dashboard-basic-info__row"
                  justify="space-around"
                  direction="row"
                >
                  <Grid item sm={12} md={2} xs={12}>
                    <div className="dashboard-basic-info__formTitle">TOFEL</div>
                  </Grid>
                  <Grid item sm={12} md={4} xs={12}>
                    <RadioGroup
                      aria-label="passport"
                      name="passport1"
                      row
                      defaultValue="no"
                      value={tofel.haveDone}
                      onChange={(e) =>
                        setTofel({ ...tofel, haveDone: e.target.value })
                      }
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>

                    {tofel.haveDone === "yes" ? (
                      <Input
                        className={"dashboard-basic-info__input"}
                        placeholder="eg: 50"
                        value={tofel.score}
                        onChange={(e) =>
                          setTofel({ ...tofel, score: e.target.value })
                        }
                      />
                    ) : (
                      ""
                    )}
                  </Grid>
                  <Grid item sm={12} md={2} xs={12}>
                    <div className="dashboard-basic-info__formTitle">
                      JEE Advance
                    </div>
                  </Grid>
                  <Grid item sm={12} md={4} xs={12}>
                    <RadioGroup
                      aria-label="passport"
                      name="passport1"
                      row
                      defaultValue="no"
                      value={jeeAdvance.haveDone}
                      onChange={(e) =>
                        setJeeAdvance({
                          ...jeeAdvance,
                          haveDone: e.target.value,
                        })
                      }
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>

                    {jeeAdvance.haveDone === "yes" ? (
                      <Input
                        className={"dashboard-basic-info__input"}
                        placeholder="eg: 50"
                        value={jeeAdvance.score}
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
                  className="dashboard-basic-info__row"
                  justify="flex-start"
                  direction="row"
                >
                  <Grid item sm={12} md={2} xs={12}>
                    <div className="dashboard-basic-info__formTitle">IELTS</div>
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
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>

                    {ielts.haveDone === "yes" ? (
                      <Input
                        className={"dashboard-basic-info__input"}
                        placeholder="eg: 50"
                        value={ielts.score}
                        onChange={(e) =>
                          setIelts({ ...ielts, score: e.target.value })
                        }
                      />
                    ) : (
                      ""
                    )}
                  </Grid>
                </Grid>

                {ielts.haveDone == "yes" ? (
                  <Grid
                    container
                    className="dashboard-basic-info__row"
                    justify="space-around"
                    direction="row"
                  >
                    <Grid item sm={12} md={1} xs={12}></Grid>
                    <Grid item sm={12} md={2} xs={12}>
                      <div className="dashboard-basic-info__formTitleSecond">
                        Listening
                      </div>
                      <Input
                        className={"dashboard-basic-info__input"}
                        fullWidth
                        placeholder="eg: 50.50"
                        value={ielts.subMars.listining}
                        onChange={(e) => {
                          let _itels = {
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
                        placeholder="eg: 50.50"
                        onChange={(e) => {
                          let _itels = {
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
                        placeholder="eg: 50.50"
                        onChange={(e) => {
                          let _itels = {
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
                        placeholder="eg: 50.50"
                        onChange={(e) => {
                          let _itels = {
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
  );
};
