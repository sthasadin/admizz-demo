import React, { useEffect, useState } from "react";
import { Select } from "../Select";
import { Input } from "../Input";
import { Grid } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Button } from "../Button";
import { UploadButton } from "../Button/uploadButton";

export const DashboardAcademicInfo = (props) => {
  const [schoolMarks, setSchoolMarks] = useState("");
  const [selectedCourse, setselectedCourse] = useState("");
  const [level0Score, setLevel0Score] = useState("");
  const [diplomaScore, setDiplomaScore] = useState("");
  const [level1Score, setLevel1Score] = useState("");
  const [postGraduteScore, setPostGraduteScore] = useState("");
  const [underGraduate, setUnderGraduate] = useState("");
  const [gre, setGre] = useState({ haveDone: "no", score: "" });
  const [gmat, setGmat] = useState({ haveDone: "no", score: "" });
  const [sat, setSat] = useState({ haveDone: "no", score: "" });
  const [satII, setSatII] = useState({ haveDone: "no", score: "" });
  const [tofel, setTofel] = useState({ haveDone: "no", score: "" });
  const [jeeAdvance, setJeeAdvance] = useState({ haveDone: "no", score: "" });
  const [ielts, setIelts] = useState({
    haveDone: "no",
    score: "",
    subMars: { listining: "", writing: "", reading: "", speaking: "" },
  });

  const { selectedLevel } = props.selectedLevel;
  console.log(selectedLevel);

  const [certificatesImage, setCertificatesImage] = useState({
    highSchool: null,
    school: null,
    under_Graduate: null,
    post_Gradute: null,
    other: null,
  });

  const [showClass11Marks, setShowClass11Marks] = useState(false);

  const sendData = () => {
    props.getData({
      schoolMarks,
      level0Score,
      level1Score,
      diplomaScore,
      postGraduteScore,
      underGraduate,
      gre,
      gmat,
      sat,
      satII,
      tofel,
      jeeAdvance,
      ielts,
      // certificatesImage,
    });
    props.handleNext();
  };

  // back tracking
  useEffect(() => {
    if (Object.keys(props.data).length > 0) {
      setSchoolMarks(props.data.schoolMarks);
      setLevel0Score(props.data.level0Score);
      setLevel1Score(props.data.level1Score);
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
              {(selectedLevel == 'diploma' || selectedLevel == 'postgraduate' || selectedLevel == 'undergraduate' || selectedLevel == 'phd') && 

      
              <Grid
                className={"dashboard-basic-info__grid"}
                item
                sm={12}
                md={6}
                xs={12}
                style={{paddingLeft: '15px'}}
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
                />
              </Grid>
                
            }
              {(selectedLevel == "phd" ||
                selectedLevel === "diploma" ||
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
                      High School Marks / Class 12 / Level 0 Marks
                    </div>
                    <div style={{ display: "flex" }}>
                      <Input
                        className={"dashboard-basic-info__input"}
                        fullWidth
                        placeholder="eg: 50.50"
                        value={level0Score}
                        onChange={(e) => setLevel0Score(e.target.value)}
                      />
                     <div onClick={()=> setShowClass11Marks(showClass11Marks => !showClass11Marks)} style={{cursor: 'pointer', marginLeft: '5px'}}><u>Haven't completed yet?</u></div>
                    </div>
                  </Grid>
                  {showClass11Marks && (
                    <Grid
                      className={"dashboard-basic-info__grid"}
                      item
                      sm={12}
                      md={6}
                      xs={12}
                    >
                      <div className="dashboard-basic-info__formText">
                        High School Marks / Class 11 / Level 0 Marks
                      </div>

                      <Input
                        className={"dashboard-basic-info__input"}
                        fullWidth
                        placeholder="eg: 50.50"
                        value={level0Score}
                        onChange={(e) => setLevel0Score(e.target.value)}
                      />
                    </Grid>
                  )}
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
                    />
                  </Grid>
                )}
                {(selectedLevel == "postgraduate" ||
                  selectedLevel == "phd") && (
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
                    {certificatesImage.school && (
                      <div style={{ display: "flex", marginTop: "10px" }}>
                        {truncateString(certificatesImage.school.name, 20)}{" "}
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
                    {certificatesImage.highSchool && (
                      <div style={{ display: "flex", marginTop: "10px" }}>
                        {truncateString(certificatesImage.highSchool.name, 20)}{" "}
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
                    {certificatesImage.under_Graduate && (
                      <div style={{ display: "flex", marginTop: "10px" }}>
                        {truncateString(
                          certificatesImage.under_Graduate.name,
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
                    {certificatesImage.post_Gradute && (
                      <div style={{ display: "flex", marginTop: "10px" }}>
                        {truncateString(
                          certificatesImage.post_Gradute.name,
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
              <Grid
                container
                className="dashboard-basic-info__row"
                justify="flex-start"
                direction="row"
              >
                <Grid item sm={12} md={2} xs={12}>
                  <div className="dashboard-basic-info__subformTitle">
                    Other Certificates
                  </div>
                </Grid>
                <Grid
                  className={"dashboard-basic-info__grid"}
                  container
                  justify="center"
                  alignContent="center"
                  sm={12}
                  md={3}
                  xs={12}
                >
                  <Input
                    className={"dashboard-basic-info__input"}
                    fullWidth
                    label="Title"
                  />
                </Grid>
                <Grid
                  container
                  sm={12}
                  md={3}
                  xs={12}
                  justify="center"
                  alignContent="center"
                >
                  <div className="dashboard-basic-info__uploadButtonContainer">
                    <label htmlFor="upload-photo">
                      <input
                        style={{ display: "none" }}
                        id="upload-photo"
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
                        Upload image
                      </UploadButton>
                    </label>
                  </div>
                </Grid>
                <Grid item sm={12} md={3} xs={12}>
                  {certificatesImage.other && (
                    <div style={{ display: "flex", marginTop: "10px" }}>
                      {truncateString(certificatesImage.other.name, 20)}{" "}
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
            <div className="dashboard-basic-info__formContainer" style={{paddingTop: '0px'}}>
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
                      <div className="dashboard-basic-info__formTitle">
                        GMAT
                      </div>
                    </Grid>
                    <Grid item sm={12} md={4} xs={12}>
                      <RadioGroup
                        aria-label="passport"
                        name="passport1"
                        row
                        defaultValue="no"
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
                      <div className="dashboard-basic-info__formTitle">
                        TOFEL
                      </div>
                    </Grid>
                    <Grid item sm={12} md={4} xs={12}>
                      <RadioGroup
                        aria-label="passport"
                        name="passport1"
                        row
                        defaultValue="no"
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
                      <div className="dashboard-basic-info__formTitle">
                        IELTS
                      </div>
                    </Grid>
                    <Grid item sm={12} md={4} xs={12}>
                      <RadioGroup
                        aria-label="passport"
                        name="passport1"
                        row
                        defaultValue="no"
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
                    {/* <Grid item sm={12} md={2} xs={12}>
                  <div className="dashboard-basic-info__formTitle">
                    SAT II
              </div>
                </Grid>
                <Grid item sm={12} md={4} xs={12}>
                  <RadioGroup aria-label="passport" name="passport1" row>
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
                  <Input
                    className={'dashboard-basic-info__input'}
                    fullWidth
                    placeholder="eg: 50.50" />
                </Grid> */}
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
                onClick={props.handleBack}
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
