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
  const [bookingError, setBookingError] = React.useState("");
  const [completed, setCompleted] = React.useState<{ [k: number]: boolean }>(
    {}
  );
  const [snackOpen, setSnackOpen] = useState(false as boolean);
  const [isTermChecked, setIstermChecked] = React.useState(null);
  const [checkValidation, setCheckValidation] = React.useState(false);
  const [counsellorArray, setCounsellorArray] = useState([]);

  //State for Student Info Stepper
  const [formValue, setFormValue] = useState({
    date: new Date(),
  } as any);
  const [formError, setFormError] = useState({} as any);

  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
    setFormError(() => ({ ...formError, [e.target.name]: null }));
  };
  const getFireStoreCounselor = async () => {
    const counsellor = [];
    await db
      .collection("counsellor")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots

          const data = doc.data();
          counsellor.push({
            id: doc.id,
            name: data.name,
            country: data.coverage,
            image: data.imageURL,
            email: data.email,
          });
        });
      });
    setCounsellorArray([...counsellor]);
  };
  useEffect(() => {
    getFireStoreCounselor();
  }, []);
  const dateTimeValidateSchema = yup.object().shape<FirstStepValidateSchema>({
    date: yup.string().required("Please select one date"),
    time: yup.string().required("Required time"),
    counsellor: yup.string().required("Please select counselor"),
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
    home_country: yup.string().required("Please select your country"),
    course: yup.string().required("Course field should not be empty"),
    description: yup.string().notRequired(),
    contact_medium: yup.string().required("Select one medium"),
    contact_id: yup
      .string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Whatapp ID is not valid"
      )
      .required("Contact id field should not be empty"),
  });

  const dateTimeValidate = async () => {
    try {
      let docs = [];
      let query = db
        .collection("appointment")
        .where("counsellor", "==", formValue.counsellor);
      query = query.where("time", "==", formValue.time);
      await query.get().then((querySnapshot) => {
        querySnapshot?.forEach((element) => {
          var data = element.data();
          if (
            moment(data.date.seconds * 1000).format("DD-MM-YYYY") ===
            moment(formValue.date).format("DD-MM-YYYY")
          ) {
            docs.push(data);
          }
        });
      });

      if (docs?.length > 0) {
        setBookingError(
          "Sorry! There is already a booking on chosen date and time, Please try changing date and time"
        );
        return;
      }
      setBookingError("");
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
      err.inner?.forEach((item: any) => {
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
          description: formValue.description || "",
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
      // setLoading(true);
      const selectedCouns =
        counsellorArray?.filter((item) => item.id === formValue.counsellor) ||
        [];
      let emaiData = {
        user: {
          fullname: formValue.name,
          email: formValue.email,
          contact: formValue.phone,
          contact_code: formValue.countryCode,
          course: formValue.course,
          appointment_date: moment(formValue.date).format(
            "MMMM Do YYYY, h:mm a"
          ),
          country: formValue.home_country,
        },
        message: formValue.description || "",

        to: selectedCouns.map((item) => {
          return item.email;
        }),
      };
      await db.collection("appointment").add({
        name: formValue.name,
        email: formValue.email,
        countryCode: formValue.countryCode,
        phone: formValue.phone,
        home_country: formValue.home_country,
        course: formValue.course,
        description: formValue.description || "",
        date: formValue.date,
        time: formValue.time,
        counsellor: formValue.counsellor,
        contact_medium: formValue.contact_medium,
        contact_id: formValue.contact_id,
        createdAt: moment().format(),
      });

      const res = await dispatch<any>(bookingCounsellorMail(emaiData));

      if (res.isSuccess && isTermChecked) {
        setSnackOpen(true);
        setLoading(true);
        setTimeout(() => {
          router.push("/");
        }, 1000);
      } else {
        setCheckValidation(true);
        setLoading(true);
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
    return steps?.length;
  };

  const completedSteps = () => {
    return Object.keys(completed)?.length;
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
            isTermChecked={isTermChecked}
            setIstermChecked={setIstermChecked}
            checkValidation={checkValidation}
            setCheckValidation={setCheckValidation}
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
      {bookingError && <Alert severity="error">{bookingError}</Alert>}
    </div>
  );
};

export { CounselingStepper };
