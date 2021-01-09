import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import { ConfirmDateTime } from "./ConfirmDateTime";
import { StudentInfo } from './StudentInfo';
import ConfirmBook from './ConfirmSection';

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

    const getStepContent = (step: number) => {
        switch (step) {
            case 0:
                return <ConfirmDateTime handleNext={handleNext} />
            case 1:
                return <StudentInfo handleNext={handleNext} handleBack={handleBack} />;
            case 2:
                return <ConfirmBook handleBack={handleBack} />;
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