import React, { useEffect, useState } from "react";
import { Select } from "../Select";
import { Input } from "../Input";
import { Grid } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Button } from "../Button";
import { UploadButton } from "../Button/uploadButton";

const DashboardAcademicInfo = (props) => {
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
  const [certificateThumbnail, setCertificateThumbnail] = useState({
    highSchool: null,
    school: null,
    under_Graduate: null,
    post_Gradute: null,
  });

  const {selectedLevel} = props.selectedLevel;
  console.log(selectedLevel);

  // if(props.selectedLevel.selectedLevel =="diploma"){
  //   setselectedCourse("diploma")
    
  // }

  const [certificatesImage, setCertificatresImage] = useState({
    highSchool: null,
    school: null,
    under_Graduate: null,
    post_Gradute: null,
    other: null,
  });
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
      certificatesImage,
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
      setCertificatresImage(props.data.certificatesImage);
    }
  }, [props.data]);

  //  image selecting
  const addImage = (image, imageName) => {
    setCertificatresImage({
      ...certificatesImage,
      [imageName]: image.target.files[0],
    });
  };

  const truncateString =(str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }


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
            <Grid
              container
              className="dashboard-basic-info__row"
              justify="space-around"
              direction="row"
            >
              <Grid item sm={12} md={12} xs={12}>
                <div className="dashboard-basic-info__formTitle">
                  Academics Scores
                </div>
                <hr className="dashboard-basic-info__horizontalLine" />
              </Grid>
            </Grid>
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
             { (selectedLevel == 'phd' || selectedLevel === 'diploma' || selectedLevel === 'postgraduate' || selectedLevel == 'undergraduate')  &&
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
                <Input
                  className={"dashboard-basic-info__input"}
                  fullWidth
                  placeholder="eg: 50.50"
                  value={level0Score}
                  onChange={(e) => setLevel0Score(e.target.value)}
                />
              </Grid>
        }
            </Grid>
            <Grid
              container
              className="dashboard-basic-info__row"
              justify="flex-start"
              direction="row"
            >
              { (selectedLevel == 'postgraduate' || selectedLevel == 'undergraduate' || selectedLevel == 'phd') &&
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
          }   
          {(selectedLevel == 'diploma' || selectedLevel == 'postgraduate' || selectedLevel == 'undergraduate' || selectedLevel == 'phd') &&
              <Grid
                className={"dashboard-basic-info__grid"}
                item
                sm={12}
                md={6}
                xs={12}
              >
                <div className="dashboard-basic-info__formText">
                  Class 11/Level1 Marks
                </div>
                <Input
                  className={"dashboard-basic-info__input"}
                  fullWidth
                  placeholder="eg: 50.50"
                  value={level1Score}
                  onChange={(e) => setLevel1Score(e.target.value)}
                />
              </Grid>
            }
            </Grid>
            <Grid
              container
              className="dashboard-basic-info__row"
              justify="flex-start"
              direction="row"
            >
              {selectedLevel == 'phd' &&
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
              }
              {(selectedLevel == 'postgraduate' || selectedLevel == 'phd') &&
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
              }
            </Grid>
            <Grid
              container
              className="dashboard-basic-info__row"
              justify="space-around"
              direction="row"
            >
              <Grid item sm={12} md={12} xs={12}>
                <div className="dashboard-basic-info__formText">
                  Academic Identification
                </div>
                <hr className="dashboard-basic-info__horizontalLine" />
              </Grid>
            </Grid>
            {(selectedLevel == 'diploma' || selectedLevel == 'postgraduate' || selectedLevel == 'undergraduate' || selectedLevel == 'phd') &&
            
            <Grid
              container
              className="dashboard-basic-info__row"
              justify="space-around"
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
                      setCertificateThumbnail(
                        certificateThumbnail.school(
                          URL.createObjectURL(e.target.files[0])
                        )
                      );
                    }}
                  />

                  <UploadButton>Upload button</UploadButton>
                </label>
              </Grid>
              <Grid item sm={12} md={4} xs={12}>
              {certificatesImage.school && <div style={{display: 'flex', marginTop:'10px'}}>{truncateString(certificatesImage.school.name, 20)} <img src="/check.png" alt="check" style={{marginLeft: '20px'}} /> </ div>}
              </Grid>
              
            
            </Grid>
            }
            {(selectedLevel == 'diploma' || selectedLevel == 'postgraduate' || selectedLevel == 'undergraduate' || selectedLevel == 'phd') &&
            
            <Grid
              container
              className="dashboard-basic-info__row"
              justify="space-around"
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
                    onChange={(e) => addImage(e, "highSchool")}
                  />

                  <UploadButton>Upload button</UploadButton>
                </label>
              </Grid>
              <Grid item sm={12} md={4} xs={12}>
              {certificatesImage.highSchool && <div style={{display: 'flex', marginTop:'10px'}}>{truncateString(certificatesImage.highSchool.name, 20)} <img src="/check.png" alt="check" style={{marginLeft: '20px'}} /> </ div>}
              </Grid>
            </Grid>
            }
            {(selectedLevel == 'postgraduate' || selectedLevel == 'phd') &&
            
            <Grid
              container
              className="dashboard-basic-info__row"
              justify="space-around"
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
                    onChange={(e) => addImage(e, "under_Graduate")}
                  />

                  <UploadButton>Upload button</UploadButton>
                </label>
              </Grid>
              <Grid item sm={12} md={4} xs={12}>
              {certificatesImage.under_Graduate && <div style={{display: 'flex', marginTop:'10px'}}>{truncateString(certificatesImage.under_Graduate.name, 20)} <img src="/check.png" alt="check" style={{marginLeft: '20px'}} /> </ div>}
              </Grid>
            </Grid>
          }
          {( selectedLevel == 'phd') &&
            
            <Grid
              container
              className="dashboard-basic-info__row"
              justify="space-around"
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
                    onChange={(e) => addImage(e, "post_Gradute")}
                  />

                  <UploadButton>Upload button</UploadButton>
                </label>
              </Grid>
              <Grid item sm={12} md={4} xs={12}>
              {certificatesImage.post_Gradute && <div style={{display: 'flex', marginTop:'10px'}}>{truncateString(certificatesImage.post_Gradute.name, 20)} <img src="/check.png" alt="check" style={{marginLeft: '20px'}} /> </ div>}
              </Grid>
            </Grid>
            }
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
                  placeholder="Enter Title"
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
                    />

                    <UploadButton>Upload button</UploadButton>
                  </label>
                </div>
              </Grid>
              <Grid item sm={12} md={3} xs={12}>
              {certificatesImage.other && <div style={{display: 'flex', marginTop:'10px'}}>{truncateString(certificatesImage.other.name, 20)} <img src="/check.png" alt="check" style={{marginLeft: '20px'}} /> </ div>}
              </Grid>
            </Grid>
          </form>
        </div>
      </div>

      {/* Reference Information */}
      <div className="dashboard-basic-info__sectionContainer">
        <div className="dashboard-basic-info__formContainer">
          <div className="dashboard-basic-info__marginContainer">
            <div className="dashboard-basic-info__formTitle">Exam Scores</div>
            <hr className="dashboard-basic-info__horizontalLine" />
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
                  <div className="dashboard-basic-info__formTitle">GMAT</div>
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
                  <div className="dashboard-basic-info__formTitle">SAT II</div>
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
                  <div className="dashboard-basic-info__formTitle">TOFEL</div>
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
                      setJeeAdvance({ ...jeeAdvance, haveDone: e.target.value })
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
                        setJeeAdvance({ ...jeeAdvance, score: e.target.value })
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
          </div>
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
  );
};

export { DashboardAcademicInfo };
