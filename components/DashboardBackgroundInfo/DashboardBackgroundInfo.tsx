import React, { useEffect, useState } from "react";
import { Select } from "../Select";
import { Input } from "../Input";
import { Grid, setRef } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Button } from "../Button";
import { UploadButton } from "../Button/uploadButton";
import { DropDownSelect } from "../DropDownSelect";

const DashboardBackgroundInfo = (props) => {
  const [havePassport, setHavePassport] = useState(false);
  const [passportDetails, setPassportDetails] = useState({
    nameOnPassport: "",
    numberOnPassword: "",
    passwportCountry: "",
    passportIssuingAuthority: "",
    passportExpireDate: "",
  });
  const [haveAppliedForPassport, setHaveAppliedPassport] = useState(false);
  const [passportId, setPassportId] = useState("");
  const [documentImage, setDocumentImage] = useState(null);
  const [documentImageThumbnail, setDocumentImageThumbnail] = useState(null);
  const [references, setReferences] = useState({
    fullName: "",
    countryCode: "",
    phoneNumber: "",
    emailAddress: "",
    address: "",
  });

  const sendData = () => {
    props.getData({
      havePassport,
      passportDetails,
      haveAppliedForPassport,
      passportId,

      documentImage,
      references,
    });
    props.handleNext();
  };
  const CountryOption = [
    {
      label: "Nepal",
      value: "Nepal",
    },
    {
      label: "India",
      value: "India",
    },
  ];

  const CountryCodeOptions = [
    {
      label: "+91",
      value: "+91",
    },
    {
      label: "+977",
      value: "+977",
    },
  ];

  useEffect(() => {
    if (Object.keys(props.data).length > 0) {
      setHavePassport(props.data.havePassport);
      setPassportDetails(props.data.passportDetails);
      setHaveAppliedPassport(props.data.haveAppliedForPassport);
      setPassportId(props.data.passportId);
      setDocumentImage(props.data.documentImage);
      setReferences(props.data.references);
    }
  }, [props.data]);

  const handleImageChange = (e) => {
    setDocumentImage(e.target.files[0]);
    setDocumentImageThumbnail(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className="dashboard-basic-info">
      {/* Background Information */}
      <div className="dashboard-basic-info__sectionContainer">
        <div className="dashboard-basic-info__sectionTitle">
          Background Information
        </div>
        <div className="dashboard-basic-info__formContainer">
          <form>
            <Grid
              container
              className="dashboard-basic-info__row"
              justify="space-around"
              direction="row"
            >
              <Grid item sm={12} md={5} xs={12}>
                <div className="dashboard-basic-info__formTitle">
                  Do you have a passport?
                </div>
              </Grid>
              <Grid item sm={12} md={7} xs={12}>
                <RadioGroup
                  aria-label="passport"
                  name="passport1"
                  row
                  onChange={(e) => console.log(e)}
                  defaultValue="no"
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                    onChange={() => setHavePassport(true)}
                  />
                  <FormControlLabel
                    value="no"
                    control={<Radio />}
                    label="No"
                    onChange={() => setHavePassport(false)}
                  />
                </RadioGroup>
              </Grid>
            </Grid>
            {/*  */}
            {!havePassport ? (
              ""
            ) : (
              <div>
                <Grid
                  container
                  className="dashboard-basic-info__row"
                  justify="space-around"
                  direction="row"
                >
                  <Grid
                    className={"dashboard-basic-info__grid"}
                    item
                    sm={12}
                    md={6}
                    xs={12}
                  >
                    <Input
                      className={"dashboard-basic-info__input"}
                      fullWidth
                      label="Name On Passport"
                      value={passportDetails.nameOnPassport}
                      onChange={(e) =>
                        setPassportDetails({
                          ...passportDetails,
                          nameOnPassport: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid
                    className={"dashboard-basic-info__grid"}
                    item
                    sm={12}
                    md={6}
                    xs={12}
                  >
                    <Input
                      className={"dashboard-basic-info__input"}
                      fullWidth
                      placeholder="Passport Number"
                      value={passportDetails.numberOnPassword}
                      onChange={(e) =>
                        setPassportDetails({
                          ...passportDetails,
                          numberOnPassword: e.target.value,
                        })
                      }
                    />
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
                    item
                    sm={12}
                    md={6}
                    xs={12}
                  >
                    <Input
                      className={"dashboard-basic-info__input"}
                      fullWidth
                      placeholder="Issuing Authority"
                      value={passportDetails.passportIssuingAuthority}
                      onChange={(e) =>
                        setPassportDetails({
                          ...passportDetails,
                          passportIssuingAuthority: e.target.value,
                        })
                      }
                    />
                  </Grid>
                  <Grid
                    className={"dashboard-basic-info__grid"}
                    item
                    sm={12}
                    md={6}
                    xs={12}
                  >
                    <Input
                      className={"dashboard-basic-info__input"}
                      fullWidth
                      placeholder="Expiry Date of Passport"
                      value={passportDetails.passportExpireDate}
                      onChange={(e) =>
                        setPassportDetails({
                          ...passportDetails,
                          passportExpireDate: e.target.value,
                        })
                      }
                    />
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
                    item
                    sm={12}
                    md={6}
                    xs={12}
                  ></Grid>
                </Grid>
              </div>
            )}
            {havePassport ? (
              ""
            ) : (
              <Grid
                container
                className="dashboard-basic-info__row"
                justify="space-around"
                direction="row"
              >
                <Grid item sm={12} md={5} xs={12}>
                  <div className="dashboard-basic-info__formTitle">
                    Have you applied for Passport?
                  </div>
                </Grid>
                <Grid item sm={12} md={7} xs={12}>
                  <RadioGroup
                    aria-label="passport"
                    name="passport1"
                    row
                    defaultValue="no"
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Yes"
                      onChange={() => setHaveAppliedPassport(true)}
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="No"
                      onChange={() => setHaveAppliedPassport(false)}
                    />
                  </RadioGroup>
                </Grid>
              </Grid>
            )}
            <Grid
              container
              className="dashboard-basic-info__row"
              justify="space-around"
              direction="row"
            >
              <Grid item sm={12} md={12} xs={12}>
                <div className="dashboard-basic-info__formTitle">
                  Enter your Citizenship / National ID
                </div>
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
                item
                sm={12}
                md={6}
                xs={12}
              >
                <Input
                  className={"dashboard-basic-info__input"}
                  fullWidth
                  placeholder="Citizenship ID / National ID"
                  value={passportId}
                  onChange={(e) => setPassportId(e.target.value)}
                />
              </Grid>
              <Grid
                className={"dashboard-basic-info__grid"}
                item
                sm={12}
                md={6}
                xs={12}
              ></Grid>
            </Grid>
            <Grid
              container
              className="dashboard-basic-info__row"
              justify="space-around"
              direction="row"
            >
              <Grid item sm={12} md={12} xs={12}>
                <div className="dashboard-basic-info__formTitle">
                  Personal Identification
                </div>
              </Grid>
            </Grid>
            <Grid
              container
              className="dashboard-basic-info__row"
              justify="flex-start"
              direction="row"
            >
              <Grid item sm={12} md={4} xs={12}>
                <div className="dashboard-basic-info__subformTitle">
                  Passport/Citizenship/National ID
                </div>
              </Grid>
              <Grid container alignContent="center" sm={12} md={4} xs={12}>
                <label htmlFor="upload-photo">
                  <input
                    style={{ display: "none" }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                    onChange={handleImageChange}
                  />

                  <UploadButton>Upload button</UploadButton>
                </label>
              </Grid>
              {documentImageThumbnail && (
                <Grid item sm={12} md={4} xs={12}>
                  <img
                    src={documentImageThumbnail}
                    alt="document_logo"
                    className="image__thumbnail"
                  />
                  <p style={{ margin: 10 }}>
                    {documentImage ? documentImage.name : ""}
                  </p>
                </Grid>
              )}
            </Grid>
          </form>
        </div>
      </div>

      {/* Reference Information */}
      <div className="dashboard-basic-info__sectionContainer">
        <div className="dashboard-basic-info__sectionTitle">
          Reference Information
        </div>
        <div className="dashboard-basic-info__formContainer">
          <div className="dashboard-basic-info__marginContainer">
            <div className="dashboard-basic-info__formTitle">References</div>
            <hr className="dashboard-basic-info__horizontalLine" />
            <form>
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
                  md={4}
                  xs={12}
                >
                  <Input
                    className={"dashboard-basic-info__input"}
                    fullWidth
                    label="Full Name"
                    value={references.fullName}
                    onChange={(e) =>
                      setReferences({
                        ...references,
                        fullName: e.target.value,
                      })
                    }
                  />
                </Grid>
                <Grid
                  className={"dashboard-basic-info__grid"}
                  item
                  sm={6}
                  md={3}
                  xs={4}
                >
                  <DropDownSelect
                    options={CountryCodeOptions}
                    title="Country Code"
                    handleChange={(e) =>
                      setReferences({
                        ...references,
                        countryCode: e,
                      })
                    }
                    //handleChange={setReferences}
                  />
                </Grid>
                <Grid
                  className={"dashboard-basic-info__grid"}
                  item
                  sm={12}
                  md={4}
                  xs={12}
                >
                  <div className={"student-info__phone-input"}>
                    <Input
                      className={"student-info__input student-info__phone"}
                      fullWidth
                      label="Phone Number"
                      value={references.phoneNumber}
                      onChange={(e) =>
                        setReferences({
                          ...references,
                          phoneNumber: e.target.value,
                        })
                      }
                    />
                  </div>
                </Grid>
              </Grid>

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
                  md={4}
                  xs={12}
                >
                  <Input
                    className={"dashboard-basic-info__input"}
                    fullWidth
                    label="Email Address"
                    value={references.emailAddress}
                    onChange={(e) =>
                      setReferences({
                        ...references,
                        emailAddress: e.target.value,
                      })
                    }
                  />
                </Grid>
                <Grid
                  className={"dashboard-basic-info__grid"}
                  item
                  sm={12}
                  md={4}
                  xs={12}
                >
                  <Input
                    className={"dashboard-basic-info__input"}
                    fullWidth
                    label="Address"
                    value={references.address}
                    onChange={(e) =>
                      setReferences({
                        ...references,
                        address: e.target.value,
                      })
                    }
                  />
                </Grid>
              </Grid>
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

export { DashboardBackgroundInfo };
