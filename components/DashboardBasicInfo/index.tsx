import React, { useEffect, useState } from "react";
import { Input } from "../Input";
import { Grid } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Button } from "../Button";
import { Select } from '../Select';
import { DropDownSelect } from "../DropDownSelect";
import { useSelector, useDispatch } from "react-redux";
import {getLevels} from "../../store/Action/courses.action";
import { getAllCollegeList } from "../../store/Action/allCollage.action";
import { object } from "yup";

const DashboardBasicInfo = (props:any) => {
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectLevel, setSelectLevel] = useState([]);
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCollegeList());
  }, []);

  useEffect(()=> {
    const {authUser} = props
    console.log(authUser?.phoneNumber?.split('-'))
    if (authUser) {
      setEmail(authUser?.email)
      setNationality(authUser?.country === "Nepal"? "nepal": "indain")
      setCountryCode(authUser?.phoneNumber?.split('-')[0])
      setPhoneNumber(authUser?.phoneNumber?.split('-')[1])
      setFullName(authUser?.fullName)
    }
  },[props.authUser])

  const getAllLevels = async () => {
    setLoading(true)
    const fetchLevel = await dispatch(getLevels());
    setSelectLevel(fetchLevel);
    setLoading(false);
  }

  useEffect(() => {
  
    getAllLevels();
    
    
  }, [])

  

  

  const SelectLevelOption = selectLevel.map((level) => {
    return{
      label:level.name,
      value:level.name,
    }
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

 

  

  const sendData = async () => {
    // return console.log(selectedLevel,
    //   fullName,
    //   DOB,
    //   nationality,
    //   email,
    //   phoneNumber,
    //   countryCode,
    //   gender,
    //   guardianAddress,
    //   guardianCountry,
    //   guardianState,
    //   guardianCity,
    //   guardianZipCode,)
    try {
      
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
                options={ SelectLevelOption }
                defaultvalue={selectedLevel}
                handleChange={setSelectedLevel}
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
                  label="Full Name"
                  value={fullName}
                  onChange={setFullName}
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
                  defaultvalue={nationality}
                  title="Nationality"
                  options={NationalityOptions}
                  handleChange={setNationality}
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
                 <div className='student-info__phone-input'>
                <Select
                options={CountryCodeOptions}
                useValue
                minWidth={"83px"}
                width={"90px"}
                defaultValue={countryCode}
                // name={"countryCode"}
                onChange={e => setCountryCode(e.target.value)}
                className={"student-info__phone-separator"}
              />
                <Input
                  className={"student-info__input student-info__phone"}
                  fullWidth
                  label="Phone Number"
                  value={phoneNumber}
                  onChange={e => setPhoneNumber(e.target.value)}
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
                  fullWidth
                  label="Date Of Birth"
                  value={DOB}
                  onChange={e => setDob(e.target.value)}
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
                  defaultvalue={gender}
                  handleChange={setGender}
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
                    onChange={e => setGuardianAddress(e.target.value)}
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
                    defaultvalue={guardianCountry}
                    handleChange={setGuardianCountry}
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
    </div>
  );
};

export { DashboardBasicInfo };
