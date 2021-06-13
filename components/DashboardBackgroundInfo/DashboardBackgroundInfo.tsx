import React, { useEffect, useState } from "react";
import { Select } from "../Select";
import { Input } from "../Input";
import * as yup from "yup";
import { Grid, setRef } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import Snackbar from "@material-ui/core/Snackbar";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Button } from "../Button";
import { UploadButton } from "../Button/uploadButton";
import { DropDownSelect } from "../DropDownSelect";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

interface BackgroundInfo {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  address: string;
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const DashboardBackgroundInfo = (props) => {
  const [havePassport, setHavePassport] = useState(false);
  const [formError, setFormError] = useState({} as any);
  const [passportDetails, setPassportDetails] = useState({
    nameOnPassport: "",
    numberOnPassport: "",
    passportIssuingAuthority: "",
    passportExpireDate: "",
    passportIssuedCountry: { label: "", value: "" },
  });
  const [haveAppliedForPassport, setHaveAppliedPassport] = useState(false);
  const [passportId, setPassportId] = useState("");
  const [documentImage, setDocumentImage] = useState(null);
  // const [documentImageThumbnail, setDocumentImageThumbnail] = useState(null);
  const [references, setReferences] = useState({
    fullName: "",
    countryCode: {
      label: "",
      value: "",
    },
    phoneNumber: "",
    emailAddress: "",
    address: "",
  });
  const [snackOpen, setSnackOpen] = useState(false as boolean);

  const saveDate = () => {
    props.getData({
      havePassport,
      passportDetails: havePassport
        ? {
            ...passportDetails,
            passportIssuedCountry: passportDetails.passportIssuedCountry?.value,
          }
        : {},
      haveAppliedForPassport: havePassport ? false : haveAppliedForPassport,
      passportId,

      documentImage,
      references,
    });
  };

  const countryOption = [
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
      label: "India (+91)",
      value: "+91",
    },
    {
      label: "Nepal (+977)",
      value: "+977",
    },
  ];

  useEffect(() => {
    if (Object.keys(props.data).length > 0) {
      setHavePassport(props.data.havePassport);
      setPassportDetails({
        ...props.data?.passportDetails,
        passportIssuedCountry: {
          label: props.data?.passportDetails?.passportIssuedCountry,
          value: props.data?.passportDetails?.passportIssuedCountry,
        },
      });
      setHaveAppliedPassport(props.data.haveAppliedForPassport);
      setPassportId(props.data.passportId);
      setDocumentImage(props.data.documentImage);
      setReferences(props.data.references);
    }
  }, [props.data]);

  const handleImageChange = (e) => {
    setDocumentImage(e.target.files[0]);
    // setDocumentImageThumbnail(URL.createObjectURL(e.target.files[0]));
  };

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str?.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  const validationSchema = yup.object().shape<BackgroundInfo>({
    fullName: yup.string().required("Required fullname"),
    phoneNumber: yup.string().required("Required phonenumber"),
    emailAddress: yup.string().required("Required emailAddress"),
    address: yup.string().required("Required address"),
    // passportId: yup.string().required("Required passport id"),
  });

  const validate = async () => {
    try {
      await validationSchema.validate(
        {
          fullName: references.fullName,
          phoneNumber: references.phoneNumber,
          emailAddress: references.emailAddress,
          address: references.address,
        },
        {
          abortEarly: false,
        }
      );
      setFormError({});
      return true;
    } catch (err) {
      setSnackOpen(true);
      const errors = {};
      err.inner.forEach((item: any) => {
        errors[item.path] = item.errors[0];
      });
      setFormError({ ...errors });
    }
  };

  const sendData = async () => {
    try {
      const isValid = await validate();

      if (isValid) {
        saveDate();
        props.handleNext();
      }
    } catch (err) {}
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
                  value={havePassport ? "yes" : "no"}
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
                      label="Passport Number"
                      value={passportDetails.numberOnPassport}
                      onChange={(e) =>
                        setPassportDetails({
                          ...passportDetails,
                          numberOnPassport: e.target.value,
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
                      label="Issuing Authority"
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
                      label="Expiry Date of Passport"
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
                  >
                    <DropDownSelect
                      title="Issuing Country"
                      options={countryOption}
                      defaultvalue={passportDetails.passportIssuedCountry}
                      handleChange={(e) => {
                        setPassportDetails({
                          ...passportDetails,
                          passportIssuedCountry: e,
                        });
                      }}
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
                    value={haveAppliedForPassport ? "yes" : "no"}
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
                  label="Citizenship ID / National ID"
                  value={passportId}
                  onChange={(e) => setPassportId(e.target.value)}
                  // name="passportId"
                  // errorMessage={formError.passportId}
                  // error={!!formError.passportId}
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

                  <UploadButton startIcon="" className="">
                    Upload button
                  </UploadButton>
                </label>
              </Grid>

              <Grid
                item
                sm={12}
                md={4}
                xs={12}
                justify="flex-start"
                style={{ display: "flex" }}
              >
                {documentImage && (
                  <>
                    <div style={{ alignSelf: "center" }}>
                      {truncateString(documentImage.name, 20)}
                    </div>{" "}
                    <img
                      src="/check.png"
                      alt="check"
                      style={{ marginLeft: "20px" }}
                    />{" "}
                  </>
                )}
              </Grid>
            </Grid>
          </form>
        </div>
      </div>

      {/* Reference Information */}
      <div className="dashboard-basic-info__sectionContainer">
        <div className="dashboard-basic-info__sectionTitle">
          Parents Information
        </div>
        <div className="dashboard-basic-info__formContainer">
          <div className="dashboard-basic-info__marginContainer">
            {/* <div className="dashboard-basic-info__formTitle">Parents</div>
            <hr className="dashboard-basic-info__horizontalLine" /> */}
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
                    errorMessage={formError.fullName}
                    error={!!formError.fullName}
                  />
                </Grid>

                <Grid
                  className={"dashboard-basic-info__grid"}
                  item
                  sm={12}
                  md={4}
                  xs={12}
                >
                  <div className="student-info__phone-input">
                    <Select
                      options={CountryCodeOptions}
                      useValue
                      minWidth={"83px"}
                      width={"90px"}
                      value={references.countryCode}
                      // name={"countryCode"}
                      onChange={(e) =>
                        setReferences({
                          ...references,
                          countryCode: e.target.value,
                        })
                      }
                      className={"student-info__phone-separator"}
                    />
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
                      name="phoneNumber"
                      errorMessage={formError.phoneNumber}
                      error={!!formError.phoneNumber}
                    />
                  </div>
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
                    label="Email Address"
                    value={references.emailAddress}
                    onChange={(e) =>
                      setReferences({
                        ...references,
                        emailAddress: e.target.value,
                      })
                    }
                    name="emailAddress"
                    errorMessage={formError.emailAddress}
                    error={!!formError.emailAddress}
                  />
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
                  md={12}
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
                    name="address"
                    errorMessage={formError.address}
                    error={!!formError.address}
                  />
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
        <div className="dashboard-basic-info__buttonContainer">
          <div
            className="dashboard-basic-info__backContainer"
            onClick={() => {
              saveDate();
              props.handleBack();
            }}
          >
            Back
          </div>
          <Button onClick={sendData}>Save And Continue</Button>
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

export { DashboardBackgroundInfo };
