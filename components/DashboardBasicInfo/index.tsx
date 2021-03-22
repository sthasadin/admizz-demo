import React, { useEffect, useState } from "react";
import { Input } from "../Input";
import { Grid } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";

import { Button } from "../Button";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

import { DropDownSelect } from "../DropDownSelect";
import { ErrorMessages } from "../../utils/ErrorMessages";

import * as yup from "yup";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const DashboardBasicInfo = (props) => {
  const [selectedLevel, setSelectedLevel] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [DOB, setDob] = useState("");
  const [nationality, setNationality] = useState("");
  const [gender, setGender] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const [guardianAddress, setGuardianAddress] = useState("");
  const [guardianCountry, setGuardianCountry] = useState("");
  const [guardianState, setGuardianState] = useState("");
  const [guardianCity, setGuardianCity] = useState("");
  const [guardianZipCode, setGuardianZipCode] = useState("" as string);
  const [snackOpen, setSnackOpen] = useState(false as boolean);
  const [formError, setFormError] = useState({} as any);
  const [loading, setLoading] = useState(false as boolean);
  // const [middleName, setMiddleName] = useState("");
  // const [lastName, setLastName] = useState("");

  // const [residentialcountry, setResidentialCountry] = useState("");
  // const [residentialState, setResidentialState] = useState("");
  // const [residentialAddress, setResidentialAddress] = useState("");
  // const [residentialZipCode, setResidentialZipCode] = useState("");
  // const [residentialCity, setResidentialCity] = useState("");
  // const [permanentcountry, setPermanentCountry] = useState("");
  // const [permanentState, setPermanentState] = useState("");
  // const [permanentAddress, setPermanentAddress] = useState("");
  // const [permanentZipCode, setPermanentZipCode] = useState("");
  // const [permanentCity, setPermanentCity] = useState("");

  // const [isPermanentAddressSame, setIsPermanentAddressSame] = useState(false);
  // const allCollege = useSelector((state) => state.allCollege.collegeList);
  // const [CollegesOptions, setCollegesOptions] = useState([]);
  // const [courseOption, setCourseOption] = useState([]);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllCollegeList());
  // }, []);

  // getting course from colleges
  // useEffect(() => {
  //   var list = [];
  //   if (allCollege && allCollege.length > 0) {
  //     allCollege.map(({ courses }) => {
  //       courses.map((course) => {
  //         if (!list.includes(course.course_name)) {
  //           list.push(course.course_name);
  //         }
  //       });
  //     });
  //   }
  //   setCourseOption(
  //     list.map((course) => {
  //       return {
  //         label: course,
  //         value: course,
  //       };
  //     })
  //   );
  // }, [allCollege]);

  // getting colleges list which has selected course
  // useEffect(() => {
  //   var list = [];
  //   allCollege.map(({ courses, name, _id }) => {
  //     courses.map(({ course_name }) => {
  //       if (course_name === selectedLevel) {
  //         list.push({ name, id: _id });
  //       }
  //     });
  //   });
  //   setCollegesOptions(
  //     list.map((college) => {
  //       return {
  //         label: college.name,
  //         value: college.id,
  //       };
  //     })
  //   );
  // }, [selectedLevel]);

  interface signInProps {
    selectLevel: string;
    //fullName: string;
  }

  const validationSchema = yup.object().shape<signInProps>({
    selectLevel: yup.string().required("Required"),
    //fullName: yup.string().required("full name is required"),
  });

  const validate = async () => {
    try {
      await validationSchema.validate(
        {
          selectLevel: selectedLevel,
          fullName: fullName,
        },
        {
          abortEarly: false,
        }
      );
      setFormError({});
      return true;
    } catch (err) {
      console.log(err);

      const errors = {};
      err.inner.forEach((item: any) => {
        errors[item.path] = item.errors[0];
      });
      setFormError({ ...errors });
      handleOpenSnackbar();
    }
  };

  console.log(formError);

  const SelectLevelOption = [
    {
      label: "Diploma",
      value: "diploma",
    },
    {
      label: "Under Graduate",
      value: "undergraduate",
    },
    {
      label: "Post Graduate",
      value: "postgraduate",
    },
    {
      label: "PHD",
      value: "PHD",
    },
  ];

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
      value: "nepali",
    },
    {
      label: "Indian",
      value: "indian",
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
      const isValid = await validate();

      if (isValid) {
        props.getData({
          selectedLevel,
          fullName,
          DOB,
          nationality,
          email,
          phoneNumber,
          countryCode,
          gender,
          guardianAddress,
          guardianCountry,
          guardianState,
          guardianCity,
          guardianZipCode,
        });
        props.handleNext();
      }
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
                handleChange={setSelectedLevel}
                name={"selectLevel"}
                errorMessage={formError.selectLevel}
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
                <DropDownSelect
                  title="Nationality"
                  options={NationalityOptions}
                  handleChange={setNationality}
                  name={"Nationality"}
                  //error={""}
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
                <DropDownSelect
                  options={CountryCodeOptions}
                  title="Country Code"
                  handleChange={setCountryCode}
                  name={"countrycode"}
                  errorMessage={""}
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
                  className={"student-info__input student-info__phone"}
                  fullWidth
                  label="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
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
                  className={"student-info__input student-info__phone"}
                  fullWidth
                  label="Date Of Birth"
                  value={DOB}
                  onChange={(e) => setDob(e.target.value)}
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
                md={4}
                xs={12}
              >
                <DropDownSelect
                  title="Gender"
                  options={GenderOptions}
                  handleChange={setGender}
                  name={"gender"}
                  errorMessage={""}
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
                    name={"country"}
                    errorMessage={""}
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
                    name={"state"}
                    errorMessage={""}
                    options={
                      guardianCountry === "Nepal"
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
