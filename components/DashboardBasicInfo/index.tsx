import React, { useEffect, useState, useMemo } from "react";
import { Input } from "../Input";
import { Grid } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import * as yup from "yup";
import { getLevels, getStreams } from "../../store/Action/courses.action";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

import { DropDownSelect } from "../DropDownSelect";
import { CountryCodeDropDown } from "../Select/CountryCodeDropDown";
import { countryList } from "../../utils/CountryLists";
import { CountryCode } from "utils/CountryCode";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
interface studentInfoFormValue {
  fullName: string;
  email: string;

  phoneNumber: number;
  selectedLevel: string;
  DOB: string;
  nationality: string;
  gender: string;
  guardianAddress: string;
  guardianCountry: string;
  guardianState: string;
  guardianCity: string;
  // additional_query: string;
}

const DashboardBasicInfo = (props) => {
  const [selectedLevel, setSelectedLevel] = useState({
    label: "",
    value: "",
  });
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
  const [guardianState, setGuardianState] = useState("");
  const [guardianCity, setGuardianCity] = useState("");
  // const [guardianZipCode, setGuardianZipCode] = useState("" as string);
  const [snackOpen, setSnackOpen] = useState(false as boolean);

  const [formError, setFormError] = useState({} as any);
  const levelChange = (onChangeLevel) => {
    console.log(onChangeLevel);
    // localStorage.removeItem('academicInformation')
    if (!localStorage.getItem("academicInformation")) {
      localStorage.setItem(
        "academicInformation",
        JSON.stringify(onChangeLevel)
      );
    } else {
      localStorage.removeItem("academicInformation");
    }
  };
  const dispatch = useDispatch();

  const allLevels = useSelector((state: any) => state.courses.allLevels);

  const selectLevelOption = useMemo(() => {
    const newLabel = [];
    allLevels.map((l) => {
      if (l.name == "diploma") {
        newLabel[0] = l;
      } else if (l.name == "undergraduate") {
        newLabel[1] = l;
      } else if (l.name == "postgraduate") {
        newLabel[2] = l;
      } else if (l.name == "phd") {
        newLabel[3] = l;
      }
    });
    return newLabel.map((level) => {
      const name =
        level.name === "postgraduate"
          ? "Post Graduate"
          : level.name === "undergraduate"
          ? "Under Graduate"
          : level.name;
      return {
        label: name,
        value: level.name,
      };
    });
  }, [allLevels]);

  useEffect(() => {
    const { authUser } = props;
    if (authUser) {
      setEmail(authUser?.email);
      const found = countryList.find(
        (country) => country.label == authUser?.country
      );
      setNationality(
        found
        // authUser?.country === "Nepal"
        //   ? { label: "Nepali", value: "nepal" }
        //   : { label: "Indian", value: "india" }
      );
      setCountryCode(authUser?.phoneNumber?.split("-")[0]);
      setPhoneNumber(authUser?.phoneNumber?.split("-")[1]);
      setFullName(authUser?.fullName);
    }
  }, [props.authUser]);

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("basicInformation"));

    if (getData) {
      setGender({ label: getData?.gender, value: getData?.gender });
      setDob(getData?.DOB);
      setGuardianAddress(getData?.guardianAddress);
      setGuardianCity(getData?.guardianCity);
      setGuardianCountry({
        label: getData?.guardianCountry,
        value: getData?.guardianCountry,
      });
      setGuardianState(
        getData?.guardianState
        // label: getData?.guardianState,
        // value: getData?.guardianState,
      );
      setSelectedLevel({
        label: getData?.selectedLevel.label,
        value: getData?.selectedLevel.value,
      });

      setEmail(getData?.email);
      setNationality({
        label: getData?.nationality,
        value: getData?.nationality,
      });
      setCountryCode(getData?.countryCode);
      setPhoneNumber(getData?.phoneNumber);
      setFullName(getData?.fullName);
    }
  }, [localStorage.getItem("basicInformation")]);

  useEffect(() => {
    dispatch(getLevels());
  }, []);

  useEffect(() => {
    if (selectedLevel.value) {
      const _selectedLevel = allLevels.find(
        (level) => level.name === selectedLevel.value
      );
      dispatch(getStreams(_selectedLevel?._id));
      //saving to store so that we can it use on choice filling comp
      dispatch({ type: "SELECTED_LEVEL", payload: _selectedLevel });
    }
  }, [allLevels, selectedLevel]);

  const GenderOptions = [
    {
      label: "Male",
      value: "Male",
    },
    {
      label: "Female",
      value: "Female",
    },
    {
      label: "Other",
      value: "Other",
    },
  ];

  const handleCloseSnackbar = () => {
    setSnackOpen(false);
  };

  const validationSchema = yup.object().shape<studentInfoFormValue>({
    fullName: yup.string().required("Name field cannot be empty"),
    email: yup
      .string()
      .required("Required gmail")
      .email("Please provide a valid email"),

    phoneNumber: yup.number().required("Required phone"),
    selectedLevel: yup.string().required("Please select the level"),
    DOB: yup.string().required("Requried DOB"),
    nationality: yup.string().required("Please select the nationality"),

    gender: yup.string().required("Please select the gender"),
    guardianAddress: yup.string().required("Required address"),
    guardianCountry: yup.string().required("Please select the country"),
    guardianState: yup.string().notRequired(),
    // guardianState: yup.string().required("Please select the state"),
    guardianCity: yup.string().required("Required city"),
  });

  const handleOpenSnackbar = () => {
    setSnackOpen(true);
  };

  const validate = async () => {
    const data = {
      selectedLevel: selectedLevel.value,
      fullName: fullName,
      DOB: DOB,
      nationality: nationality.value,
      email,
      phoneNumber,
      countryCode,
      gender: gender.value,
      guardianAddress,
      guardianCountry: guardianCountry.value,
      guardianState,
      //  guardianState.value,
      guardianCity,
    };
    try {
      await validationSchema.validate(
        {
          selectedLevel: selectedLevel.value,
          fullName: fullName,
          DOB: DOB,
          nationality: nationality.value,
          email,
          phoneNumber,
          countryCode,
          gender: gender.value,
          guardianAddress,
          guardianCountry: guardianCountry.value,
          guardianState,
          //  guardianState.value,
          guardianCity,
        },
        {
          abortEarly: false,
        }
      );
      setFormError({});
      return true;
    } catch (err) {
      handleOpenSnackbar();
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
        const data = {
          selectedLevel: {
            label: selectedLevel.label,
            value: selectedLevel.value,
          },
          fullName,
          DOB,
          nationality: nationality.value,
          email,
          phoneNumber,
          countryCode,
          gender: gender.value,
          guardianAddress,
          guardianCountry: guardianCountry.value,
          guardianState,
          // : guardianState.value,
          guardianCity,
        };

        window.localStorage.setItem("basicInformation", JSON.stringify(data));
        props.getData(data);
        props.handleNext();
      }
    } catch (err) {}
  };

  useEffect(() => {
    if (Object.keys(props.data)?.length > 0) {
      setFullName(props.data.fullName);
      setDob(props.data.DOB);
      setSelectedLevel({
        label: props.data.selectedLevel.label,
        value: props.data.selectedLevel.value,
      });
      setNationality({
        label: props.data.nationality,
        value: props.data.nationality,
      });
      setEmail(props.data.email);
      setPhoneNumber(props.data.phoneNumber);
      setGender({
        label: props.data.gender,
        value: props.data.gender,
      });
      setCountryCode(props.data.countryCode);
      setGuardianAddress(props.data.guardianAddress);
      setGuardianCountry({
        label: props.data.guardianCountry,
        value: props.data.guardianCountry,
      });
      setGuardianState(
        props.data.guardianState
        // label: props.data.guardianState,
        // value: props.data.guardianState,
      );
      setGuardianCity(props.data.guardianCity);
      // setGuardianZipCode(props.data.guardianZipCode);
    }
  }, [props.data]);

  return (
    <div className="dashboard-basic-info">
      <div className="dashboard-basic-info__sectionContainer">
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
                options={selectLevelOption}
                handleChange={(e) => {
                  setSelectedLevel(e);
                  setFormError((prev) => ({ ...prev, selectedLevel: null }));
                  levelChange(e);
                  // props.setShowExitPrompt(true);
                }}
                defaultvalue={selectedLevel}
                name={"selectedLevel"}
                errorMessage={formError.selectedLevel}
                error={!!formError.selectedLevel}
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
        <div className="dashboard-basic-info__formContainer personal-details-form">
          <form className="form-container">
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
                  onChange={(e) => {
                    setFullName(e.target.value);
                    setFormError((prev) => ({ ...prev, fullName: null }));
                    // props.setShowExitPrompt(true);
                  }}
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
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setFormError((prev) => ({ ...prev, email: null }));
                    // props.setShowExitPrompt(true);
                  }}
                  name={"email"}
                  errorMessage={formError.email}
                  error={!!formError.email}
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
                    options={countryList}
                    handleChange={(e) => {
                      setNationality(e);
                      setFormError((prev) => ({ ...prev, nationality: null }));
                      // props.setShowExitPrompt(true);
                    }}
                    name={"nationality"}
                    errorMessage={formError.nationality}
                    error={!!formError.nationality}
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
                  <CountryCodeDropDown
                    options={CountryCode}
                    useValue
                    minWidth={"83px"}
                    width={"90px"}
                    value={countryCode}
                    error={!!formError.countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className={"student-info__phone-separator"}
                  />

                  <Input
                    className={"student-info__input student-info__phone"}
                    fullWidth
                    label="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                      setFormError((prev) => ({ ...prev, phoneNumber: null }));
                      // props.setShowExitPrompt(true);
                    }}
                    name={"phoneNumber"}
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
                  type="date"
                  fullWidth
                  label="DOB"
                  value={DOB}
                  onChange={(e) => {
                    setDob(e.target.value);
                    setFormError((prev) => ({ ...prev, DOB: null }));
                    // props.setShowExitPrompt(true);
                  }}
                  name={"DOB"}
                  errorMessage={formError.DOB}
                  error={!!formError.DOB}
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
                  handleChange={(e) => {
                    setGender(e);
                    setFormError((prev) => ({ ...prev, gender: null }));
                    // props.setShowExitPrompt(true);
                  }}
                  defaultvalue={gender}
                  name={"gender"}
                  errorMessage={formError.gender}
                  error={!!formError.gender}
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
            <div className="dashboard-basic-info__formTitle form--title">
              Personal Address
            </div>
            <hr className="dashboard-basic-info__horizontalLine" />
            <div className="dashboard-basic-info__formContainer personal-details-form">
              <form className="dashboard-basic-info__formContent">
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
                    md={12}
                    xs={12}
                  >
                    <Input
                      className={"dashboard-basic-info__input"}
                      fullWidth
                      label="Personal Address"
                      value={guardianAddress}
                      onChange={(e) => {
                        setGuardianAddress(e.target.value);
                        setFormError((prev) => ({
                          ...prev,
                          guardianAddress: null,
                        }));
                        // props.setShowExitPrompt(true);
                      }}
                      name={"guardianAddress"}
                      errorMessage={formError.guardianAddress}
                      error={!!formError.guardianAddress}
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
                      onChange={(e) => {
                        setGuardianCity(e.target.value);
                        setFormError((prev) => ({
                          ...prev,
                          guardianCity: null,
                        }));
                        // props.setShowExitPrompt(true);
                      }}
                      name={"guardianCity"}
                      errorMessage={formError.guardianCity}
                      error={!!formError.guardianCity}
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
                      label="State"
                      value={guardianState}
                      onChange={(e) => {
                        setGuardianState(e.target.value);
                      }}
                      name={"guardianState"}
                      // placeholder="State"
                      errorMessage={formError.guardianState}
                      error={!!formError.guardianState}
                    />
                  </Grid>
                  <Grid
                    className={"dashboard-basic-info__grid"}
                    item
                    sm={6}
                    md={6}
                    xs={12}
                  >
                    <DropDownSelect
                      title="Country"
                      options={countryList}
                      handleChange={(e) => {
                        setGuardianCountry(e);
                        // setGuardianState({
                        //   label: "",
                        //   value: ""
                        // })
                        setFormError((prev) => ({
                          ...prev,
                          guardianCountry: null,
                        }));
                        //props.setShowExitPrompt(true);
                      }}
                      defaultvalue={guardianCountry}
                      name={"guardianCountry"}
                      errorMessage={formError.guardianCountry}
                      error={!!formError.guardianCountry}
                    />
                  </Grid>
                </Grid>
              </form>
            </div>
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
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="error">
          Please check the field and try again!
        </Alert>
      </Snackbar>
    </div>
  );
};

export { DashboardBasicInfo };
