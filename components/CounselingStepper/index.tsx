import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useRouter } from "next/router";
import moment from "moment";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { db } from "../../firebase";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import { ConfirmDateTime } from "./ConfirmDateTime";
import { StudentInfo } from "./StudentInfo";
import ConfirmBook from "./ConfirmSection";

interface studentInfoFormValue {
  name: string;
  email: string;
  country_code: number;
  phone: number;
  home_country: string;
  course: string;
  description: string;
  date: string;
  time: string;
  counsellor: string;
  contact_medium: string;
  contact_id: string;
  // additional_query: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    button: {
      marginRight: theme.spacing(1),
    },
    completed: {
      display: "inline-block",
    },
    instructions: {},
    stepper: {
      "& .MuiStepLabel-label": {
        fontFamily: `"M PLUS 1p"`,
        fontWeight: 500,
      },
      "& .MuiStepIcon-active": {
        color: "#FFA200",
      },
    },
    stepperContainer: {
      "@media(max-width: 510px)": {
        flexDirection: "column !important",
        alignItems: "start",
        paddingLeft: 0,
      },
      "& .MuiStep-horizontal": {
        "@media(max-width: 510px)": {
          marginTop: 15,
        },
      },
      "& .MuiStepConnector-lineHorizontal": {
        visibility: "hidden",
      },
    },
  })
);

const CounselingStepper = () => {
  const router = useRouter();
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{ [k: number]: boolean }>(
    {}
  );

  //State for Student Info Stepper
  const [formValue, setFormValue] = useState({} as studentInfoFormValue);
  const [formError, setFormError] = useState({} as any);

  const handleChange = (e: any) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
      country_code: 977,
    });
  };

  const validationSchema = yup.object().shape<studentInfoFormValue>({
    name: yup.string().required("Required name"),
    email: yup
      .string()
      .required("Required")
      .email("Please provide a valid email"),
    country_code: yup.number().required("Required code"),
    phone: yup
      .number()
      .required("Required phone")
      .typeError("Value should be number"),
    home_country: yup.string().required("Required country name"),
    course: yup.string().required("Required course"),
    description: yup.string().required("Required desc"),

    date: yup.string().required("Required date"),
    time: yup.string().required("Required time"),
    counsellor: yup.string().required("Required counsellor"),
    // additional_query: yup.string().required("Required query"),
    contact_medium: yup.string().required("Required medium"),
    contact_id: yup.string().required("Required constact id"),
  });

  const validate = async () => {
    try {
      await validationSchema.validate(
        {
          name: formValue.name,
          email: formValue.email,
          country_code: formValue.country_code,
          phone: formValue.phone,
          home_country: formValue.home_country,
          course: formValue.course,
          description: formValue.description,
          date: formValue.date,
          time: formValue.time,
          counsellor: formValue.counsellor,
          // additional_query: formValue.additional_query,
          contact_medium: formValue.contact_medium,
          contact_id: formValue.contact_id,
        },
        {
          abortEarly: false,
        }
      );
      setFormError({});
      return true;
    } catch (err) {
      const errors = {};
      err.inner.forEach((item: any) => {
        errors[item.path] = item.errors[0];
      });
      setFormError({ ...errors });
    }
  };

  const handleBook = async () => {
    db.collection("appointment")
      .add({
        name: formValue.name,
        email: formValue.email,
        country_code: formValue.country_code,
        phone: formValue.phone,
        home_country: formValue.home_country,
        course: formValue.course,
        description: formValue.description,
        date: formValue.date,
        time: formValue.time,
        counsellor: formValue.counsellor,
        // additional_query: formValue.additional_query,
        contact_medium: formValue.contact_medium,
        contact_id: formValue.contact_id,
        createdAt: moment().format(),
      })
      .then(function (docRef) {
        router.push("/");
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  const steps = [
    "Confirm Date & Time",
    "Student’s Detail",
    "Confirm Your Session",
  ];

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleNextFormValidation = async () => {
    const valid = await validate();

    if (valid) {
      const newActiveStep =
        isLastStep() && !allStepsCompleted()
          ? // It's the last step, but not all steps have been completed,
            // find the first step that has been completed
            steps.findIndex((step, i) => !(i in completed))
          : activeStep + 1;
      setActiveStep(newActiveStep);
    }
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <ConfirmDateTime
            handleNext={handleNext}
            handleChange={handleChange}
            formValue={formValue}
          />
        );
      case 1:
        return (
          <StudentInfo
            handleNext={handleNextFormValidation}
            handleBack={handleBack}
            handleChange={handleChange}
            formValue={formValue}
            formError={formError}
          />
        );
      case 2:
        return (
          <ConfirmBook
            handleBack={handleBack}
            handleBook={handleBook}
            formValue={formValue}
          />
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <div className={classes.root}>
      <Stepper
        className={classes.stepperContainer}
        nonLinear
        activeStep={activeStep}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton
              className={classes.stepper}
              completed={completed[index]}
            >
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>{getStepContent(activeStep)}</div>
    </div>
  );
};

export { CounselingStepper };
