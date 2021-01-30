import React, { useState } from 'react';
import * as yup from "yup";
import moment from 'moment';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { db } from "../../firebase";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import { ConfirmDateTime } from "./ConfirmDateTime";
import { StudentInfo } from './StudentInfo';
import ConfirmBook from './ConfirmSection';

interface studentInfoFormValue {
  name: string;
  email: string;
  country_code: number;
  phone: number;
  home_country: string;
  course: string;
  description: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    button: {
      marginRight: theme.spacing(1),
    },
    completed: {
      display: 'inline-block',
    },
    instructions: {

    },
    stepper: {
      '& .MuiStepLabel-label': {
        fontFamily: `"M PLUS 1p"`,
        fontWeight: 500,
      },
      '& .MuiStepIcon-active': {
        color: '#FFA200'
      },
    },
    stepperContainer: {
      '& .MuiStepConnector-lineHorizontal': {
        visibility: "hidden"
      },
    }
  }),
);

// function getStepContent(step: number) {
//     switch (step) {
//         case 0:
//             return <ConfirmDateTime />
//         case 1:
//             return 'Step 2: What is an ad group anyways?';
//         case 2:
//             return 'Step 3: This is the bit I really care about!';
//         default:
//             return 'Unknown step';
//     }
// }

const CounselingStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{ [k: number]: boolean }>({});

  //State for Student Info Stepper
  const [formValue, setFormValue] = useState({} as studentInfoFormValue);
  const [formError, setFormError] = useState({} as any);

  const handleChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value, country_code: 977 })
  }

  const validationSchema = yup.object().shape<studentInfoFormValue>({
    name: yup.string().required("Required"),
    email: yup
      .string()
      .required("Required")
      .email("Please provide a valid email"),
    country_code: yup.number().required("Required"),
    phone: yup.number().required("Required").typeError('Value should be number'),
    home_country: yup.string().required("Required"),
    course: yup.string().required("Required"),
    description: yup.string().required("Required"),
  });

  const validate = async () => {
    try {
      await validationSchema.validate({
        name: formValue.name,
        email: formValue.email,
        country_code: formValue.country_code,
        phone: formValue.phone,
        home_country: formValue.home_country,
        course: formValue.course,
        description: formValue.description
      }, {
          abortEarly: false
        });
      setFormError({})
      return true;
    } catch (err) {
      const errors = {};
      err.inner.forEach((item: any) => {
        errors[item.path] = item.errors[0]
      })
      setFormError({ ...errors })
    }
  }

  const handleBook = async () => {
    db.collection("counsellor").add({
      name: formValue.name,
      email: formValue.email,
      country_code: formValue.country_code,
      phone: formValue.phone,
      home_country: formValue.home_country,
      course: formValue.course,
      description: formValue.description,
      createdAt: moment().format(),
    })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }

  const steps = ["Confirm Date & Time", "Student’s Detail", "Confirm Your Session"]

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
        return <ConfirmDateTime handleNext={handleNext} />
      case 1:
        return <StudentInfo handleNext={handleNextFormValidation} handleBack={handleBack} handleChange={handleChange} formValue={formValue} formError={formError} />;
      case 2:
        return <ConfirmBook handleBack={handleBack} handleBook={handleBook} />;
      default:
        return 'Unknown step';
    }
  }

  return (
    <div className={classes.root}>
      <Stepper className={classes.stepperContainer} nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton className={classes.stepper} completed={completed[index]}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {getStepContent(activeStep)}
      </div>
    </div>
  );
}

export { CounselingStepper }