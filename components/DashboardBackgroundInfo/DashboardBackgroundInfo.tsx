import React, { useEffect, useState } from "react";
import { CountryCodeDropDown } from "../Select/CountryCodeDropDown";
import { Input } from "../Input";
import * as yup from "yup";
import { Grid, setRef } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import Snackbar from "@material-ui/core/Snackbar";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "../Button";
import { UploadButton } from "../Button/uploadButton";
import { DropDownSelect } from "../DropDownSelect";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { CountryCode } from "utils/CountryCode";
import { countryList } from "utils/CountryLists";

interface BackgroundInfo {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  address: string;
  passportId: string;
  countryCode: string;
  documentImage: string;
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const CustomRadio: any = withStyles({
  root: {
    color: "#FFA200",
    "&$checked": {
      color: "#FFA200",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

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
    countryCode: "",
    phoneNumber: "",
    emailAddress: "",
    address: "",
  });
  const [snackOpen, setSnackOpen] = useState(false as boolean);

  // useEffect(() => {
  //   props.setShowExitPrompt(true); //to prevent from refreshing page
  // }, []);

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("backgroundInformation"));
    if (getData) {
      setHaveAppliedPassport(getData?.haveAppliedForPassport);
      setHavePassport(getData?.havePassport);
      setPassportDetails(getData?.passportDetails);
      setPassportDetails({
        ...getData?.passportDetails,
        passportIssuedCountry: {
          label: getData?.passportDetails?.passportIssuingAuthority,
          value: getData?.passportDetails?.passportIssuingAuthority,
        },
      });
      setPassportId(getData?.passportId);
      setReferences(getData?.references);
    }
  }, [localStorage.getItem("backgroundInformation")]);

  const saveDate = () => {
    const data = {
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
    };
    window.localStorage.setItem("backgroundInformation", JSON.stringify(data));
    props.getData(data);
  };

  useEffect(() => {
    if (Object.keys(props.data)?.length > 0) {
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
    // console.log('file',e.target.files[0])
    setDocumentImage(e.target.files[0]);
    // setDocumentImageThumbnail(URL.createObjectURL(e.target.files[0]));
  };

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str?.slice(0, num) + "...";
    }
    return str;
  };

  const validationSchema = yup.object().shape<BackgroundInfo>({
    fullName: yup.string().required("Required fullname"),
    phoneNumber: yup.string().required("Required phonenumber"),
    emailAddress: yup.string().required("Required emailAddress"),
    address: yup.string().required("Required address"),
    passportId: yup.string().required("Required passport id"),
    countryCode: yup.string().required("Required country code"),
    documentImage: yup
      .string()
      .nullable()
      .required("Identification Photo is required"),
  });

  const validate = async () => {
    try {
      await validationSchema.validate(
        {
          fullName: references.fullName,
          phoneNumber: references.phoneNumber,
          emailAddress: references.emailAddress,
          address: references.address,
          passportId: passportId,
          countryCode: references.countryCode,
          documentImage: documentImage,
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
        <div className="dashboard-basic-info__formContainer background-info-container">
          <form className="form-container">
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
                  defaultValue="no"
                  value={havePassport ? "yes" : "no"}
                >
                  <FormControlLabel
                    value="yes"
                    control={<CustomRadio />}
                    label="Yes"
                    onChange={() => setHavePassport(true)}
                  />
                  <FormControlLabel
                    value="no"
                    control={<CustomRadio />}
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
              <div className="passport-field-container">
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
                      type="date"
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
                    <DropDownSelect
                      title="Issuing Country"
                      options={countryList}
                      defaultvalue={passportDetails.passportIssuedCountry}
                      handleChange={(e) => {
                        setPassportDetails({
                          ...passportDetails,
                          passportIssuedCountry: e,
                        });
                      }}
                    />
                  </Grid>
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
                      control={<CustomRadio />}
                      label="Yes"
                      onChange={() => setHaveAppliedPassport(true)}
                    />
                    <FormControlLabel
                      value="no"
                      control={<CustomRadio />}
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
                <div
                  className="dashboard-basic-info__formTitle"
                  style={{ padding: "9px 0" }}
                >
                  Enter your Citizenship / National ID
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
                md={6}
                xs={12}
              >
                <Input
                  className={"dashboard-basic-info__input"}
                  fullWidth
                  label="Citizenship ID / National ID"
                  value={passportId}
                  onChange={(e) => {
                    setPassportId(e.target.value);
                    setFormError((prev) => ({ ...prev, passportId: null }));
                  }}
                  name="passportId"
                  errorMessage={formError.passportId}
                  error={!!formError.passportId}
                />
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
                  style={{ fontWeight: 800 }}
                >
                  Personal Identification
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
                    accept="image/*"
                  />

                  <UploadButton
                    startIcon=" "
                    className="btn-color student-dashboard-button"
                  >
                    Choose File
                  </UploadButton>
                  <div className="error-msg" style={{ marginTop: "10px" }}>
                    {formError.documentImage}
                  </div>
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
                      className="upload-success-img"
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
        <div className="dashboard-basic-info__formContainer ">
          <div className="dashboard-basic-info__marginContainer">
            <form className="form-container">
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
                    onChange={(e) => {
                      setReferences({
                        ...references,
                        fullName: e.target.value,
                      });
                      setFormError((prev) => ({ ...prev, fullName: null }));
                    }}
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
                    <CountryCodeDropDown
                      options={CountryCode}
                      useValue
                      minWidth={"83px"}
                      width={"90px"}
                      value={references.countryCode}
                      // name={"countryCode"}
                      onChange={(e) => {
                        setReferences({
                          ...references,
                          countryCode: e.target.value,
                        });
                        setFormError((prev) => ({
                          ...prev,
                          countryCode: null,
                        }));
                      }}
                      errorMessage={formError.countryCode}
                      error={!!formError.countryCode}
                      className={"student-info__phone-separator"}
                    />
                    <Input
                      className={"student-info__input student-info__phone"}
                      fullWidth
                      label="Phone Number"
                      value={references.phoneNumber}
                      onChange={(e) => {
                        setReferences({
                          ...references,
                          phoneNumber: e.target.value,
                        });
                        setFormError((prev) => ({
                          ...prev,
                          phoneNumber: null,
                        }));
                      }}
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
                    onChange={(e) => {
                      setReferences({
                        ...references,
                        emailAddress: e.target.value,
                      });
                      setFormError((prev) => ({ ...prev, emailAddress: null }));
                    }}
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
                    onChange={(e) => {
                      setReferences({
                        ...references,
                        address: e.target.value,
                      });
                      setFormError((prev) => ({ ...prev, address: null }));
                    }}
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
