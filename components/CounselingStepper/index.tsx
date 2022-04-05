import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { useRouter } from "next/router";
import { bookingCounsellorMail } from "../../store/Action/sendMail.action";
import moment from "moment";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { db } from "../../firebase";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import { ConfirmDateTime } from "./ConfirmDateTime";
import { StudentInfo } from "./StudentInfo";
import ConfirmBook from "./ConfirmSection";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";


function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface studentInfoFormValue {
  name: string;
  email: string;
  countryCode: string;
  phone: number;
  home_country: string;
  course: string;
  description: string;
  contact_medium: string;
  contact_id: string;

}

interface FirstStepValidateSchema {
  date: string;
  time: string;
  counsellor: string;
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
  const [loading, setLoading] = React.useState(false);
  const [bookingError, setBookingError] = React.useState("")
  const [completed, setCompleted] = React.useState<{ [k: number]: boolean }>(
    {}
  );
  const [snackOpen, setSnackOpen] = useState(false as boolean);

  //State for Student Info Stepper
  const [formValue, setFormValue] = useState({
    date: new Date(),
  } as any);
  const [formValues, setFormValues] = useState({
    countryCode: "+977",
  } as studentInfoFormValue);
  const [formError, setFormError] = useState({} as any);

  const dispatch = useDispatch();


  const handleChange = (e: any) => {
    formValue[e.target.name] = e.target.value
    setFormValue({ ...formValue});
    setFormError(() => ({ ...formError, [e.target.name]: null }));

    if (e.target.name === "home_country") {
      if (e.target.value === "nepal") {
        setFormValue({ ...formValue, countryCode: "+977" } as studentInfoFormValue);
      } else setFormValue({ ...formValue, countryCode: "+91" } as studentInfoFormValue);
    }
  };

  const dateTimeValidateSchema = yup.object().shape<FirstStepValidateSchema>({
    date: yup.string().required("Please select one date"),
    time: yup.string().required("Required time"),
    counsellor: yup.string().required("Please select  counselor"),
  });

  const validationSchema = yup.object().shape<studentInfoFormValue>({
    name: yup.string().required("Name field should not be empty"),
    email: yup
      .string()
      .required("Email field should not be empty")
      .email("Please provide a valid email"),
    countryCode: yup.string().required("Required code"),
    phone: yup
      .number()
      .required("Phone number field should not be empty")
      .typeError("Value should be number"),
    home_country: yup
      .string().required("Please select your country"),
    course: yup.string().required("Course field should not be empty"),
    description: yup.string().required("Description field should not be empty"),
    contact_medium: yup.string().required("Select one medium"),
    contact_id: yup.string().required("Contact id field should not be empty"),
  });

  const dateTimeValidate = async () => {
    try {
      const docRef = await db.collection("appointment").where("counsellor", "==", formValue.counsellor).where("date", "==", formValue.date).where("time", "==",formValue.time).get()
     const docs = docRef.docs
      if(docs.length > 0){
        setBookingError("Sorry! There is already a booking on chosen date and time, Please try changing date and time")
        return 
      }
      setBookingError("")
      await dateTimeValidateSchema.validate(
        {
          date: formValue.date,
          time: formValue.time,
          counsellor: formValue.counsellor,
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

  const validate = async () => {
    try {
      await validationSchema.validate(
        {
          name: formValue.name,
          email: formValue.email,
          countryCode: formValue.countryCode,
          phone: formValue.phone,
         home_country: formValue.home_country,
          course: formValue.course,
          description: formValue.description,
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
    try {
      setLoading(true);
      await db.collection("appointment").add({
        name: formValue.name,
        email: formValue.email,
        countryCode: formValue.countryCode,
        phone: formValue.phone ,
        home_country: formValue.home_country,
        course: formValue.course,
        description: formValue.description,
        date: formValue.date,
        time: formValue.time,
        counsellor: formValue.counsellor,
        contact_medium: formValue.contact_medium,
        contact_id: formValue.contact_id,
        createdAt: moment().format(),
      });

      const res = await dispatch<any>(bookingCounsellorMail(formValue.email));
      if (res.isSuccess) {
        setSnackOpen(true);
        setLoading(false);
        setTimeout(() => {
          router.push("/");
        }, 1000);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error adding document: ", error);
    }
  };

  const steps = [
    "Student’s Detail",
    "Confirm Date & Time",
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

  const handleNext = async () => {
    const valid = await dateTimeValidate();

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
          <StudentInfo
            handleNext={handleNextFormValidation}
            handleChange={handleChange}
            formValue={formValue}
            formError={formError}
          />
        );
      case 1:
        return (
          <ConfirmDateTime
            handleNext={handleNext}
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
            loading={loading}
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
      <Snackbar
        open={snackOpen}
        autoHideDuration={6000}
        onClose={() => setSnackOpen(false)}
      >
        <Alert onClose={() => setSnackOpen(false)} severity="success">
          Your Booking has been Confirmed. Redirecting to home page.
        </Alert>
      </Snackbar>
      {bookingError &&  <Alert severity="error">{bookingError}</Alert>}
    </div>
  );
};

export { CounselingStepper };