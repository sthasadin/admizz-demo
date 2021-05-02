import React, { useEffect, useState } from "react";
import { Input } from "../Input";
import { Grid } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import { getLevels } from "../../store/Action/courses.action";
import { useDispatch } from "react-redux";
import { Select } from "../Select";

import { Button } from "../Button";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

import { DropDownSelect } from "../DropDownSelect";
import { ErrorMessages } from "../../utils/ErrorMessages";

import * as yup from "yup";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const DashboardBasicInfo = (props) => {
  const [selectedLevel, setSelectedLevel] = useState({
    label: "",
    value: "",
  });
  const [selectLevel, setSelectLevel] = useState([]);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [DOB, setDob] = useState("");
  const [nationality, setNationality] = useState({
    label: "",
    value: "",
  });
  const [gender, setGender] = useState({
    label: "",
    value: "",
  });
  const [countryCode, setCountryCode] = useState("");

  const [guardianAddress, setGuardianAddress] = useState("");
  const [guardianCountry, setGuardianCountry] = useState({
    label: "",
    value: "",
  });
  const [guardianState, setGuardianState] = useState({
    label: "",
    value: "",
  });
  const [guardianCity, setGuardianCity] = useState("");
  const [guardianZipCode, setGuardianZipCode] = useState("" as string);
  const [snackOpen, setSnackOpen] = useState(false as boolean);
  const [formError, setFormError] = useState({} as any);
  const [loading, setLoading] = useState(false as boolean);
  const dispatch = useDispatch();

  useEffect(() => {
    const { authUser } = props;
    console.log(authUser?.phoneNumber?.split("-"));
    if (authUser) {
      setEmail(authUser?.email);
      setNationality(
        authUser?.country === "Nepal"
          ? { label: "Nepal", value: "Nepali" }
          : { label: "indain", value: "indain" }
      );
      setCountryCode(authUser?.phoneNumber?.split("-")[0]);
      setPhoneNumber(authUser?.phoneNumber?.split("-")[1]);
      setFullName(authUser?.fullName);
    }
  }, [props.authUser]);

  const getAllLevels = async () => {
    setLoading(true);
    const fetchLevel = await dispatch(getLevels());
    setSelectLevel(fetchLevel);
    setLoading(false);
  };

  useEffect(() => {
    getAllLevels();
  }, []);

  const SelectLevelOption = selectLevel.map((level) => {
    return {
      label: level.name,
      value: level.name,
    };
  });

  const GenderOptions = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
    {
      label: "Other",
      value: "other",
    },
  ];

  const NationalityOptions = [
    {
      label: "Nepali",
      value: "Nepali",
    },
    {
      label: "Indian",
      value: "Indian",
    },
  ];

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

  const NepalState = [
    "Arun",
    "Janakpur",
    "Kathmandu",
    "Gandak",
    "Kapilavastu",
    "Karnali",
    "Mahakali",
  ];
  const IndianState = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh ",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];
  const NepalStateOption = NepalState.map((state) => {
    return {
      label: state,
      value: state,
    };
  });

  const IndiaStateOption = IndianState.map((state) => {
    return {
      label: state,
      value: state,
    };
  });

  const handleOpenSnackbar = () => {
    setSnackOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackOpen(false);
  };

  const sendData = async () => {
    try {
      // setLoading(true);
      // const isValid = await validate();

      // if (isValid) {
      props.getData({
        selectedLevel: selectedLevel.value,
        fullName,
        DOB,
        nationality: nationality.value,
        email,
        phoneNumber,
        countryCode,
        gender: gender.value,
        guardianAddress,
        guardianCountry: guardianCountry.value,
        guardianState: guardianState.value,
        guardianCity,
        guardianZipCode,
      });
      props.handleNext();
      // }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (Object.keys(props.data).length > 0) {
      setFullName(props.data.fullName);
      setDob(props.data.DOB);
      setNationality(props.data.nationality);
      setEmail(props.data.email);
      setPhoneNumber(props.data.phoneNumber);
      setGender(props.data.gender);
      setCountryCode(props.data.countryCode);
      setGuardianAddress(props.data.guardianAddress);
      setGuardianCountry(props.data.guardianCountry);
      setGuardianState(props.data.guardianState);
      setGuardianCity(props.data.guardianCity);
      setGuardianZipCode(props.data.guardianZipCode);
    }
  }, [props.data]);

  console.log(selectedLevel);

  return (
    <div className="dashboard-basic-info">
      {/* Apply For */}
      <div className="dashboard-basic-info__sectionContainer">
        <div className="dashboard-basic-info__pageTitle">
          {"Dashboard > "}
          <p className="dashboard-basic-info__pageTitleHighlight">Apply</p>
        </div>
        <div className="dashboard-basic-info__sectionTitle">Applying For</div>
        <div className="dashboard-basic-info__formContainer">
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
                title="Select Level"
                options={SelectLevelOption}
                handleChange={(e) => setSelectedLevel(e)}
                defaultvalue={selectedLevel}
                // name={"selectLevel"}
                // errorMessage={formError.selectLevel}
                // error={!!formError.email}
              />
            </Grid>
          </Grid>
        </div>
      </div>

      {/* Personal Detail */}
      <div className="dashboard-basic-info__sectionContainer">
        <div className="dashboard-basic-info__sectionTitle">
          Personal Detail
        </div>
        <div className="dashboard-basic-info__formContainer">
          <form>
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
                md={4}
                xs={12}
              >
                <Input
                  className={"dashboard-basic-info__input"}
                  fullWidth
                  name={"fullName"}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  label="Full Name"
                  error={!!formError.fullName}
                  errorMessage={formError.fullName}
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
                  label="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid
                className={"dashboard-basic-info__grid"}
                item
                sm={12}
                md={4}
                xs={12}
              >
                <div>
                  <DropDownSelect
                    defaultvalue={nationality}
                    title="Nationality"
                    options={NationalityOptions}
                    handleChange={(e) => setNationality(e)}
                    // name={"Nationality"}
                    //error={""}
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
                <div className="student-info__phone-input">
                  <Select
                    options={CountryCodeOptions}
                    useValue
                    minWidth={"83px"}
                    width={"90px"}
                    defaultValue={countryCode}
                    // name={"countryCode"}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className={"student-info__phone-separator"}
                  />
                  <Input
                    className={"student-info__input student-info__phone"}
                    fullWidth
                    label="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
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
                  className={"student-info__input student-info__phone"}
                  type="date"
                  fullWidth
                  value={DOB}
                  onChange={(e) => setDob(e.target.value)}
                />
              </Grid>
              <Grid
                className={"dashboard-basic-info__grid"}
                item
                sm={12}
                md={4}
                xs={12}
              >
                <DropDownSelect
                  title="Gender"
                  options={GenderOptions}
                  handleChange={setGender}
                  defaultvalue={gender}
                  // errorMessage={""}
                />
              </Grid>
            </Grid>
          </form>
        </div>
      </div>

      {/* Address Detail */}
      <div className="dashboard-basic-info__sectionContainer">
        <div className="dashboard-basic-info__sectionTitle">Address Detail</div>
        <div className="dashboard-basic-info__formContainer">
          <div className="dashboard-basic-info__marginContainer">
            <div className="dashboard-basic-info__formTitle">
              Guardians Address
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
                  item
                  sm={12}
                  md={4}
                  xs={12}
                >
                  <Input
                    className={"dashboard-basic-info__input"}
                    fullWidth
                    label="Guardian Address"
                    value={guardianAddress}
                    onChange={(e) => setGuardianAddress(e.target.value)}
                  />
                </Grid>
                <Grid
                  className={"dashboard-basic-info__grid"}
                  item
                  sm={12}
                  md={4}
                  xs={12}
                >
                  <DropDownSelect
                    title="Country"
                    options={CountryOption}
                    handleChange={setGuardianCountry}
                    defaultvalue={guardianCountry}
                    // name={"country"}
                    // errorMessage={""}
                  />
                </Grid>
                <Grid
                  className={"dashboard-basic-info__grid"}
                  item
                  sm={12}
                  md={4}
                  xs={12}
                >
                  <DropDownSelect
                    title="State"
                    handleChange={setGuardianState}
                    defaultvalue={guardianState}
                    // name={"state"}
                    // errorMessage={""}
                    options={
                      guardianCountry.value === "Nepal"
                        ? NepalStateOption
                        : IndiaStateOption
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
                  md={4}
                  xs={12}
                >
                  <Input
                    className={"dashboard-basic-info__input"}
                    fullWidth
                    label="City"
                    value={guardianCity}
                    onChange={(e) => setGuardianCity(e.target.value)}
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
                    label="Zip Code"
                    value={guardianZipCode}
                    onChange={(e) => setGuardianZipCode(e.target.value)}
                  />
                </Grid>
                <Grid
                  className={"dashboard-basic-info__grid"}
                  item
                  sm={12}
                  md={4}
                  xs={12}
                ></Grid>
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
                    xs={12}
                  ></Grid>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
        <div className="dashboard-basic-info__buttonContainer">
          <div className="dashboard-basic-info__backContainer">Cancel</div>
          <Button
            onClick={() => {
              sendData();
            }}
          >
            {"Save & Continue"}
          </Button>
        </div>
      </div>
      <Snackbar
        open={snackOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="error">
          {formError && "Error"}
        </Alert>
      </Snackbar>
    </div>
  );
};

export { DashboardBasicInfo };
