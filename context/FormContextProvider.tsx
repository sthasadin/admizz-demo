import { SelectChangeEvent } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import React from "react";

export const FormContext = React.createContext({
  countryselected: "",
  selectedDate: dayjs("2022-04-17"),
  gender: "",
  phone: "",
  level: "",
  nationalityselected: "",
  passport: "",
  appliedPassport: "",
  parentPhone: "",
  choiceNumber: 1,
  choices: [],
  // review: false,
  fullname: "",
  email: "",
  address: "",
  city: "",
  state: "",
  identification: "",
  selectedFile: {},
  parentName: "",
  parentEmail: "",
  parentAddress: "",
  radioGroup: {},
  schoolmarks: "",
  HighSchoolMarks: "",
  showReview: false,
  firstStep: true,
  secondStep: false,
  thirdStep: false,
  fourthStep: false,
  showRegister: false,
  confirmation: 0,
  passportLink: "",
  schoolLink: "",
  highSchoolLink: "",
  otherLink: "",

  handleNationalityChange: (e) => {},
  handleCountryChange: (e) => {},
  handleDateChange: (date) => {},
  handleGenderChange: (e) => {},
  handlePhoneChange: (newPhone) => {},
  handleLevelChange: (e) => {},
  handlePassportChange: (e) => {},
  handleNoPassportChange: (e) => {},
  handleParentPhoneChange: (newPhone) => {},
  // handleChoiceNumberChange: (e) => { },
  // handleChoicesChange: (e) => { },
  chooseCollegeHandler: () => {},
  handleCollegeChange: (index: number, object: any) => {},
  // handleReview: () => {},
  handleFullName: (e) => {},
  handlleEmailChange: (e) => {},
  handleAddressChange: (e) => {},
  handleCityChange: (e) => {},
  handleStateChange: (e) => {},
  handleIdentificationChange: (e) => {},
  handleFileSelect: (e) => {},
  handleFileSubmit: (e) => {},
  handleParentNameChange: (e) => {},
  handleParentEmailChange: (e) => {},
  handleParentAddressChange: (e) => {},
  handleRadioChange: (e) => {},
  handleSchoolMarksChange: (e) => {},
  handleHighSchoolMarksChange: (e) => {},
  handleShowReview: () => {},
  onRegisterClick: (e) => {},
  handleLeftFormSubmit: () => {},
  onNextClick: () => {},
  onPreviousClick: () => {},

  handleFirstStep: () => {},
  handleSecondStep: () => {},
  handleThirdStep: () => {},
  handleFourthStep: () => {},

  handlePassportLink: (e) => {},
  handleSchoolLink: (e) => {},
  handleHighSchoolLink: (e) => {},
  handleOtherLink: (e) => {},
});

const FormContextProvider = ({ children }) => {
  const [nationalityselected, setNationalitySelected] = React.useState("");
  const [countryselected, setCountrySelected] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(
    dayjs("2022-04-17")
  );
  const [gender, setGender] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [level, setLevel] = React.useState("");
  const [passport, setPassport] = React.useState("Yes");
  const [appliedPassport, setAppliedPassport] = React.useState("Yes");
  const [parentPhone, setParentPhone] = React.useState("");
  const [parentName, setParentName] = React.useState("");
  const [parentEmail, setParentEmail] = React.useState("");
  const [parentAddress, setParentAddress] = React.useState("");
  const [choiceNumber, setChoiceNumber] = React.useState(1);
  const [choices, setChoices] = React.useState([]);
  // const [review, setReview] = React.useState(false);
  const [fullname, setFullname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [identification, setIdentification] = React.useState("");
  const [passportLink, setPassportLink] = React.useState("");
  const [schoolLink, setSchoolLink] = React.useState("");
  const [highSchoolLink, setHighSchoolLink] = React.useState("");
  const [otherLink, setOtherLink] = React.useState("");

  const [selectedFile, setSelectedFile] = React.useState({
    "passport-file-upload": null,
    "school-file-upload": null,
    "highschool-file-upload": null,
    "other-file-upload": null,
  });
  const [schoolmarks, setSchoolmarks] = React.useState("");
  const [HighSchoolMarks, setHighSchoolMarks] = React.useState("");
  const [radioGroup, setRadioGroup] = React.useState({
    GRE: "Yes",
    SAT: "Yes",
    GMAT: "Yes",
    "SAT II": "Yes",
    TOEFL: "Yes",
    "JEE Advance": "Yes",
    IELTS: "Yes",
  });
  const [showReview, setShowReview] = React.useState(false);
  const [showRegister, setShowRegister] = React.useState(false);
  const [confirmation, setConfirmation] = React.useState(0);
  const [firstStep, setFirstStep] = React.useState(true);
  const [secondStep, setSecondStep] = React.useState(false);
  const [thirdStep, setThirdStep] = React.useState(false);
  const [fourthStep, setFourthStep] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showThankYou, setShowThankYou] = React.useState(false);

  const handleLeftFormSubmit = () => {
    setNationalitySelected("");
    setCountrySelected("");
    setSelectedDate(dayjs("2022-04-17"));
    setGender("");
    setPhone("");
    setLevel("");
    setPassport("Yes");
    setAppliedPassport("Yes");
    setParentPhone("");
    setParentName("");
    setParentEmail("");
    setParentAddress("");
    setChoiceNumber(1);
    setChoices([]);
    // setReview(false);
    setFullname("");
    setEmail("");
    setAddress("");
    setCity("");
    setState("");
    setIdentification("");
    setSelectedFile({
      "passport-file-upload": null,
      "school-file-upload": null,
      "highschool-file-upload": null,
      "other-file-upload": null,
    });
    setSchoolmarks("");
    setHighSchoolMarks("");
    setRadioGroup({
      GRE: "Yes",
      SAT: "Yes",
      GMAT: "Yes",
      "SAT II": "Yes",
      TOEFL: "Yes",
      "JEE Advance": "Yes",
      IELTS: "Yes",
    });
    setShowReview(false);
    setShowRegister(false);
    setConfirmation(0);
  };

  const handleNationalityChange = (event: SelectChangeEvent) => {
    setNationalitySelected(event.target.value as string);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const handlePhoneChange = (newPhone) => {
    setPhone(newPhone);
  };
  const handleLevelChange = (event: SelectChangeEvent) => {
    setLevel(event.target.value as string);
  };
  const handleCountryChange = (event: SelectChangeEvent) => {
    setCountrySelected(event.target.value as string);
  };
  const handlePassportChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassport(event.target.value);
  };
  const handleNoPassportChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAppliedPassport(event.target.value);
  };
  const handleParentPhoneChange = (newPhone) => {
    setParentPhone(newPhone);
  };

  const chooseCollegeHandler = () => {
    setChoiceNumber((prevNumber) => prevNumber + 1);
  };

  const handleCollegeChange = (choiceIndex: number, object: object) => {
    const newChoices = [...choices];
    newChoices[choiceIndex] = object;
    setChoices(newChoices);
  };

  // const handleReview = () => {
  //   setReview((prev) => !prev);
  // };

  const handleFullName = (e) => {
    setFullname(e.target.value);
  };

  const handlleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const handleIdentificationChange = (e) => {
    setIdentification(e.target.value);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log("event.target", event.target);
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile({
        ...selectedFile,
        [event.target.id]: event.target.value,
      });
      console.log("selectedFile", selectedFile);
      // console.log("event.target", event.target);
      // console.log("event.target.files", event.target.files);
    }
  };

  const handleFileSubmit = () => {
    // Do something with the selected file
    console.log(selectedFile);
  };

  const handleParentNameChange = (e) => {
    setParentName(e.target.value);
  };

  const handleParentEmailChange = (e) => {
    setParentEmail(e.target.value);
  };

  const handleParentAddressChange = (e) => {
    setParentAddress(e.target.value);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioGroup({
      ...radioGroup,
      [event.target.name]: event.target.value,
    });
    // console.log("radioGroup", radioGroup);
  };

  const handleSchoolMarksChange = (e) => {
    setSchoolmarks(e.target.value);
  };

  const handleHighSchoolMarksChange = (e) => {
    setHighSchoolMarks(e.target.value);
  };

  const handleShowReview = () => {
    setShowReview((prev) => !prev);
  };

  const onRegisterClick = (e) => {
    // e.preventDefault();
    console.log("first", showRegister);
    setShowRegister((prev) => !prev);
  };

  const onNextClick = () => {
    setConfirmation((prev) => prev + 1);
  };
  const onPreviousClick = () => {
    setConfirmation((prev) => prev - 1);
  };

  const handleFirstStep = () => {
    setFirstStep((prev) => !prev);
  };

  const handleSecondStep = () => {
    setSecondStep((prev) => !prev);
  };

  const handleThirdStep = () => {
    setThirdStep((prev) => !prev);
  };

  const handleFourthStep = () => {
    setFourthStep((prev) => !prev);
  };

  const handleShowThankYou = () => {
    setShowThankYou((prev) => !prev);
  };

  const handlePassportLink = (e) => {
    setPassportLink(e.target.value);
  };

  const handleSchoolLink = (e) => {
    setSchoolLink(e.target.value);
  };

  const handleHighSchoolLink = (e) => {
    setHighSchoolLink(e.target.value);
  };

  const handleOtherLink = (e) => {
    setOtherLink(e.target.value);
  };

  return (
    <FormContext.Provider
      value={{
        level,
        countryselected,
        selectedDate,
        gender,
        phone,
        passport,
        appliedPassport,
        nationalityselected,
        parentPhone,
        choiceNumber,
        choices,
        // review,
        fullname,
        email,
        address,
        city,
        state,
        identification,
        selectedFile,
        parentName,
        parentEmail,
        parentAddress,
        radioGroup,
        schoolmarks,
        HighSchoolMarks,
        showReview,
        showRegister,
        confirmation,
        firstStep,
        secondStep,
        thirdStep,
        fourthStep,

        passportLink,
        schoolLink,
        highSchoolLink,
        otherLink,

        handleParentNameChange,
        handleParentEmailChange,
        handleParentAddressChange,
        handleFileSelect,
        handleFileSubmit,
        handleIdentificationChange,
        handleAddressChange,
        handleCityChange,
        handleStateChange,
        handlleEmailChange,
        handleFullName,
        handleParentPhoneChange,
        handleCountryChange,
        handleDateChange,
        handleGenderChange,
        handlePhoneChange,
        handleLevelChange,
        handleNationalityChange,
        handlePassportChange,
        handleNoPassportChange,
        chooseCollegeHandler,
        handleCollegeChange,
        // handleReview,
        handleRadioChange,
        handleSchoolMarksChange,
        handleHighSchoolMarksChange,
        handleShowReview,
        onRegisterClick,
        handleLeftFormSubmit,
        onNextClick,
        onPreviousClick,
        handleFirstStep,
        handleSecondStep,
        handleThirdStep,
        handleFourthStep,

        handlePassportLink,
        handleSchoolLink,
        handleHighSchoolLink,
        handleOtherLink,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
