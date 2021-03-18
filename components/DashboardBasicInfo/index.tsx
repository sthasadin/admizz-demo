import React, { useEffect, useState } from "react";
import { Input } from "../Input";
import { Grid } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Button } from "../Button";
import Select from "react-select";
import { DropDownSelect } from "../DropDownSelect";
import { useSelector, useDispatch } from "react-redux";
import { getAllCollegeList } from "../../store/Action/allCollage.action";
import { object } from "yup";

const DashboardBasicInfo = (props) => {
  const [selectedCollege, setSelectedCollege] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [fullName, setFullName] = useState("");
  // const [middleName, setMiddleName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [DOB, setDob] = useState("");
  const [nationality, setNationality] = useState("");
  const [gender, setGender] = useState("");
  const [residentialcountry, setResidentialCountry] = useState("");
  const [residentialState, setResidentialState] = useState("");
  const [residentialAddress, setResidentialAddress] = useState("");
  const [residentialZipCode, setResidentialZipCode] = useState("");
  const [residentialCity, setResidentialCity] = useState("");
  const [permanentcountry, setPermanentCountry] = useState("");
  const [permanentState, setPermanentState] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");
  const [permanentZipCode, setPermanentZipCode] = useState("");
  const [permanentCity, setPermanentCity] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [isPermanentAddressSame, setIsPermanentAddressSame] = useState(false);
  const allCollege = useSelector((state) => state.allCollege.collegeList);
  const [CollegesOptions, setCollegesOptions] = useState([]);
  const [courseOption, setCourseOption] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCollegeList());
  }, []);

  // getting course from colleges
  useEffect(() => {
    var list = [];
    if (allCollege && allCollege.length > 0) {
      allCollege.map(({ courses }) => {
        courses.map((course) => {
          if (!list.includes(course.course_name)) {
            list.push(course.course_name);
          }
        });
      });
    }
    setCourseOption(
      list.map((course) => {
        return {
          label: course,
          value: course,
        };
      })
    );
  }, [allCollege]);

  // getting colleges list which has selected course
  useEffect(() => {
    var list = [];
    allCollege.map(({ courses, name, _id }) => {
      courses.map(({ course_name }) => {
        if (course_name === selectedCourse) {
          list.push({ name, id: _id });
        }
      });
    });
    setCollegesOptions(
      list.map((college) => {
        return {
          label: college.name,
          value: college.id,
        };
      })
    );
  }, [selectedCourse]);

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

  const copyResidentialData = () => {
    setPermanentCity(residentialCity);
    setPermanentCountry(residentialcountry);
    setPermanentZipCode(residentialZipCode);
    setPermanentState(residentialState);
    setPermanentAddress(residentialAddress);
  };

  useEffect(() => {
    if (isPermanentAddressSame) {
      copyResidentialData();
    }
  }, [
    isPermanentAddressSame,
    residentialAddress,
    residentialCity,
    residentialState,
    residentialZipCode,
    residentialcountry,
  ]);

  const sendData = () => {
    props.getData({
      selectedCollege,
      selectedCourse,
      fullName,
      // lastName,
      // middleName,
      DOB,
      nationality,
      email,
      phoneNumber,
      countryCode,
      gender,
      permanentAddress,
      residentialAddress,
      permanentcountry,
      residentialcountry,
      permanentState,
      residentialState,
      permanentCity,
      residentialCity,
      permanentZipCode,
      residentialZipCode,
    });
    props.handleNext();
  };

  useEffect(() => {
    if (Object.keys(props.data).length > 0) {
      setFullName(props.data.fullName);
      // setLastName(props.data.lastName);
      // setMiddleName(props.data.middleName);
      setDob(props.data.DOB);
      setNationality(props.data.nationality);
      setEmail(props.data.email);
      setPhoneNumber(props.data.phoneNumber);
      setGender(props.data.gender);
      setCountryCode(props.data.countryCode);
      setPermanentAddress(props.data.permanentAddress);
      setPermanentState(props.data.permanentState);
      setPermanentCity(props.data.permanentCity);
      setPermanentZipCode(props.data.permanentZipCode);
      setResidentialAddress(props.data.residentialcountry);
      setResidentialCity(props.data.residentialCity);
      setResidentialZipCode(props.data.residentialZipCode);
      setResidentialState(props.data.residentialState);
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
                title="Select Stream"
                options={courseOption}
                handelChange={setSelectedCourse}
              />
            </Grid>
            {/* <Grid
              className={"dashboard-basic-info__grid"}
              item
              sm={12}
              md={6}
              xs={12}
            >
              <DropDownSelect
                title="Choose College"
                options={CollegesOptions}
                handelChange={setSelectedCollege}
              />
            </Grid> */}
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
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </Grid>
              {/* <Grid
                className={"dashboard-basic-info__grid"}
                item
                sm={12}
                md={4}
                xs={12}
              >
                <Input
                  className={"dashboard-basic-info__input"}
                  fullWidth
                  placeholder="Middle Name"
                  value={middleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                />
              </Grid> */}
              {/* <Grid
                className={"dashboard-basic-info__grid"}
                item
                sm={12}
                md={4}
                xs={12}
              >
                <Input
                  className={"dashboard-basic-info__input"}
                  fullWidth
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid> */}

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
                  placeholder="Email Address"
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
                  handelChange={setNationality}
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
                  handelChange={setCountryCode}
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
                  placeholder="Phone Number"
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
                  placeholder="Date Of Birth"
                  value={DOB}
                  onChange={(e) => setDob(e.target.value)}
                />
              </Grid>
              {/* <Grid
                className={"dashboard-basic-info__grid"}
                item
                sm={12}
                md={4}
                xs={12}
              >
                <Input
                  className={"dashboard-basic-info__input"}
                  fullWidth
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid> */}
              {/* <Grid
                className={"dashboard-basic-info__grid"}
                item
                sm={12}
                md={4}
                xs={12}
              >
                <DropDownSelect
                  title="Nationality"
                  options={NationalityOptions}
                  handelChange={setNationality}
                />
              </Grid> */}
            </Grid>
            <Grid
              container
              className="dashboard-basic-info__row"
              justify="flex-start"
              direction="row"
            >
              {/* <Grid
                className={"dashboard-basic-info__grid"}
                item
                sm={12}
                md={4}
                xs={12}
              >
                <Input
                  className={"student-info__input student-info__phone"}
                  fullWidth
                  placeholder="Date Of Birth"
                  value={DOB}
                  onChange={(e) => setDob(e.target.value)}
                />
              </Grid> */}
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
                  handelChange={setGender}
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
                    placeholder="Address Line 1"
                    value={residentialAddress}
                    onChange={(e) => setResidentialAddress(e.target.value)}
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
                    handelChange={setResidentialCountry}
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
                    handelChange={setResidentialState}
                    options={
                      residentialcountry === "Nepal"
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
                    placeholder="City"
                    value={residentialCity}
                    onChange={(e) => setResidentialCity(e.target.value)}
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
                    placeholder="Zip Code"
                    value={residentialZipCode}
                    onChange={(e) => setResidentialZipCode(e.target.value)}
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
                  >
                    {/* <FormControlLabel
                      className="dashboard-basic-info__checkboxLabel"
                      control={
                        <Checkbox
                          onChange={() =>
                            setIsPermanentAddressSame(!isPermanentAddressSame)
                          }
                          value={isPermanentAddressSame}
                        />
                      }
                      label="Permanent address is same as residential address"
                    /> */}
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </div>

          {/*          
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
                  placeholder="Address Line 1"
                  value={permanentAddress}
                  onChange={(e) => setPermanentAddress(e.target.value)}
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
                  handelChange={setPermanentCountry}
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
                  handelChange={setPermanentState}
                  options={
                    permanentcountry === "Nepal"
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
                  placeholder="City"
                  value={permanentCity}
                  onChange={(e) => setPermanentCity(e.target.value)}
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
                  placeholder="Zip Code"
                  value={permanentZipCode}
                  onChange={(e) => setPermanentZipCode(e.target.value)}
                />
              </Grid>
              <Grid
                className={"dashboard-basic-info__grid"}
                item
                sm={12}
                md={4}
                xs={12}
              ></Grid>
            </Grid>
          </form>
        */}
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
    </div>
  );
};

export { DashboardBasicInfo };
