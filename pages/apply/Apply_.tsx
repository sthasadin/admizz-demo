import * as React from "react";
import * as ReactDOM from "react-dom";
import "@progress/kendo-theme-default/dist/all.css";

import { Form, FormElement } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { Stepper, StepperProps } from "@progress/kendo-react-layout";

import { AccountDetails } from "./Enquiry/account-details";
import { PersonalDetails } from "./Enquiry/personal-details";
// import { PaymentDetails } from './payment-details';
import { ProgramDetails } from "./Enquiry/program-details";
import { AskConfirmation } from "./Enquiry/ask-confirmation";
import { useRef } from "react";
import axios from "axios";

import {
  FormRenderProps,
  FormSubmitClickEvent,
} from "@progress/kendo-react-form";
import ThankYou from "./Shared/ThankYou";
import { ContinueRegistration } from "./Registration/ContinueRegistration";

// import {  Stepper } from "@material-ui/core";
import { Step, StepLabel } from "@material-ui/core";
import { FormContext } from "context/FormContextProvider";

interface stepsInterface {
  isValid: boolean | undefined;
  label?: string;
  hidden?: boolean;
}

export const Apply_ = (props) => {
  const { confirmation, onNextClick, onPreviousClick, handleLeftFormSubmit } =
    React.useContext(FormContext);
  const [step, setStep] = React.useState<number>(0);
  const [showComponent, setShowComponent] = React.useState(false);

  const stepPages = [
    <AccountDetails />,
    <>
      {step === 1 && !showComponent && <PersonalDetails />}
      {step === 1 && showComponent && <AskConfirmation />}
    </>,
    <ProgramDetails step={confirmation} />,
  ];
  const formRef = useRef(null);

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbxk1uH3Rp2IisQak6sqk0BnCBkGKOKvR9Ght7SGdEBe8Cqi__j6TLw3oDtUsAAiG-2SpQ/exec";
  const sheetbesturl =
    "https://sheet.best/api/sheets/f9fb9352-97e0-4749-a2ef-90536313b15a";
  const [loading, setLoading] = React.useState(false);
  const [formState, setFormState] = React.useState<Object>({});
  const [showThankYou, setShowThankYou] = React.useState(false);

  const [steps, setSteps] = React.useState<Array<stepsInterface>>([
    { label: "Account", isValid: undefined },
    { label: "Basic Info", isValid: true },
    { label: "Education Interest", isValid: undefined },
  ]);

  const lastStepIndex = steps.length - 1;
  const isLastStep = lastStepIndex === step;

  const onStepSubmit = React.useCallback(
    (event: FormSubmitClickEvent) => {
      const { isValid, values } = event;

      const currentSteps = steps.map(
        (currentStep: stepsInterface, index: number) => ({
          ...currentStep,
          isValid: index === step ? isValid : currentStep.isValid,
        })
      );

      setSteps(currentSteps);

      if (!isValid) {
        return;
      }

      setStep(() => Math.min(step + 1, lastStepIndex));
      setFormState(values);

      // if (step == 1) {
      //   setShowComponent(true); // Set the state to true when the next button is clicked in step 1
      // }

      if (isLastStep) {
        setLoading(true);
        axios
          .post("https://sheetdb.io/api/v1/wm64j1k4vi9w7", values)
          .then((res) => {
            console.log("Success");
            console.log(res);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
        setShowThankYou(true);
        setTimeout(() => {
          setShowThankYou(false);
        }, 3000);
        handleLeftFormSubmit;
      }
    },
    [steps, isLastStep, step, lastStepIndex, setShowComponent]
  );

  const onPrevClick = React.useCallback(
    (event) => {
      event.preventDefault();
      setStep(() => Math.max(step - 1, 0));
      onPreviousClick;
    },
    [step, setStep, confirmation, onNextClick, onPreviousClick]
  );

  const onNextClickHandler = (event) => {
    event.preventDefault();
    if (step === 1) {
      setShowComponent(true); // Set the state to true when the next button is clicked in step 1
    }
    onNextClick();
  };

  const onRegisterClickHandler = (e) => {
    e.preventDefault();
    console.log("first");
    props.onRegister(true);
  };

  return (
    <div className="signin">
      <div className="signin__inner">
        <div className="signin__left">
          <div className="signin__title">How Admizz helps you in Admission</div>
          <div className="signin__desc">
            We continuously strive towards facilitating campus-drives where
            eminent companies offer the most worth-while career opportunities.
          </div>
          <div className="signin__list">
            <div className="signin__item">
              <div className="signin__item__icon">
                <svg
                  width="18"
                  height="22"
                  viewBox="0 0 18 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.125 6.3125V5.1875C13.125 5.08437 13.0406 5 12.9375 5H3.9375C3.83437 5 3.75 5.08437 3.75 5.1875V6.3125C3.75 6.41563 3.83437 6.5 3.9375 6.5H12.9375C13.0406 6.5 13.125 6.41563 13.125 6.3125ZM3.9375 8.375C3.83437 8.375 3.75 8.45937 3.75 8.5625V9.6875C3.75 9.79062 3.83437 9.875 3.9375 9.875H8.25C8.35312 9.875 8.4375 9.79062 8.4375 9.6875V8.5625C8.4375 8.45937 8.35312 8.375 8.25 8.375H3.9375ZM7.3125 18.9688H1.875V2.46875H15V10.5312C15 10.6344 15.0844 10.7188 15.1875 10.7188H16.5C16.6031 10.7188 16.6875 10.6344 16.6875 10.5312V1.53125C16.6875 1.11641 16.3523 0.78125 15.9375 0.78125H0.9375C0.522656 0.78125 0.1875 1.11641 0.1875 1.53125V19.9062C0.1875 20.3211 0.522656 20.6562 0.9375 20.6562H7.3125C7.41563 20.6562 7.5 20.5719 7.5 20.4688V19.1562C7.5 19.0531 7.41563 18.9688 7.3125 18.9688ZM17.7586 20.1758L15.5719 17.9891C16.0945 17.2977 16.4062 16.4352 16.4062 15.5C16.4062 13.2219 14.5594 11.375 12.2812 11.375C10.0031 11.375 8.15625 13.2219 8.15625 15.5C8.15625 17.7781 10.0031 19.625 12.2812 19.625C13.1203 19.625 13.8984 19.3742 14.55 18.9453L16.7695 21.1648C16.807 21.2023 16.8539 21.2188 16.9008 21.2188C16.9477 21.2188 16.9969 21.2 17.032 21.1648L17.7586 20.4383C17.7759 20.4211 17.7896 20.4006 17.799 20.3781C17.8083 20.3556 17.8132 20.3314 17.8132 20.307C17.8132 20.2826 17.8083 20.2585 17.799 20.236C17.7896 20.2134 17.7759 20.193 17.7586 20.1758ZM12.2812 18.125C10.8305 18.125 9.65625 16.9508 9.65625 15.5C9.65625 14.0492 10.8305 12.875 12.2812 12.875C13.732 12.875 14.9062 14.0492 14.9062 15.5C14.9062 16.9508 13.732 18.125 12.2812 18.125Z"
                    fill="#FFA200"
                  />
                </svg>
              </div>
              <div className="signin__item__title" style={{ marginLeft: 5 }}>
                Research Your Options
              </div>
            </div>
            <div className="signin__item">
              <div className="signin__item__icon">
                <img src="/icon/register-icon.png" alt="admizz-register" />
              </div>
              <div className="signin__item__title">
                Register Yourself - Online/Offline
              </div>
            </div>
            <div className="signin__item">
              <div className="signin__item__icon">
                <img
                  src="/icon/submit-application-icon.png"
                  alt="admizz-register"
                />
              </div>
              <div className="signin__item__title">Submit Your Application</div>
            </div>
            <div className="signin__item">
              <div className="signin__item__icon">
                <img src="/icon/download-offer-icon.png" alt="admizz-offer" />
              </div>
              <div className="signin__item__title">
                Download The Offer Letter
              </div>
            </div>
            <div className="signin__item">
              <div className="signin__item__icon">
                <img src="/icon/depature-icon.png" alt="admizz-depature" />
              </div>
              <div className="signin__item__title">Prepare To Departure</div>
            </div>
          </div>
          <div className="signin__cta">Learn More About Us</div>
        </div>
        <div className="signin__right">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Stepper value={step} items={steps} className="my-stepper" />
            <Form
              ref={formRef}
              initialValues={formState}
              onSubmitClick={onStepSubmit}
              render={(formRenderProps: FormRenderProps) => (
                <div style={{ alignSelf: "center" }}>
                  <FormElement style={{ width: 480 }}>
                    <div>
                      {stepPages[step]}

                      <span
                        style={{ marginTop: "40px" }}
                        className={"k-form-separator"}
                      />
                      <div
                        style={{
                          justifyContent: "space-between",
                          alignContent: "center",
                        }}
                        className={
                          "k-form-buttons k-button k-button-md k-rounded-md k-button-solid k-button-solid-bases-end"
                        }
                      >
                        <span style={{ alignSelf: "center" }}>
                          Step {step + 1} of 3
                        </span>
                        <span>step:{step}</span>

                        {step !== 0 ? (
                          <Button
                            style={{ marginRight: "16px" }}
                            onClick={onPrevClick}
                          >
                            Previous
                          </Button>
                        ) : undefined}
                        {showComponent ? (
                          <>
                            <Button
                              themeColor={"primary"}
                              style={{
                                marginRight: "16px",
                                //  backgroundColor: "#5f1702",
                                //  borderColor: "#5f1702",
                                width: "200px",
                              }}
                              onClick={onRegisterClickHandler}
                            >
                              Register on Portal
                            </Button>
                            <Button
                              themeColor={"primary"}
                              style={{
                                marginRight: "16px",
                                //  backgroundColor: "#5f1702",
                                //  borderColor: "#5f1702",
                                width: "200px",
                              }}
                              onClick={() => {
                                // onNextClick;
                                formRenderProps.onSubmit;
                              }}
                            >
                              Book a Counselling
                            </Button>
                            <br />
                          </>
                        ) : (
                          <Button
                            themeColor={"primary"}
                            disabled={!formRenderProps.allowSubmit}
                            onClick={() => {
                              formRenderProps.onSubmit;
                              setShowComponent(true);
                            }}
                          >
                            {isLastStep ? "Submit" : "Next"}
                          </Button>
                        )}

                        {/* {step !== 0 ? (
                          <Button
                            style={{
                              marginRight: "16px",
                            }}
                            onClick={onPrevClick}
                          >
                            Previous
                          </Button>
                        ) : undefined}
                        {step != 2 ? (
                          step == 1 ? (
                            confirmation != 1 ? (
                              <>
                                <Button
                                  themeColor={"primary"}
                                  style={{
                                    marginRight: "16px",
                                    backgroundColor: "#5f1702",
                                    borderColor: "#5f1702",
                                    width: "200px",
                                  }}
                                  onClick={onRegisterClickHandler}
                                >
                                  Register on Portal
                                </Button>
                                <Button
                                  themeColor={"primary"}
                                  style={{
                                    marginRight: "16px",
                                    backgroundColor: "#5f1702",
                                    borderColor: "#5f1702",
                                    width: "200px",
                                  }}
                                  onClick={() => {
                                    // onNextClick;
                                    formRenderProps.onSubmit;
                                  }}
                                >
                                  Book a Counselling
                                </Button>
                                <br />
                              </>
                            ) : (
                              <Button
                                themeColor={"primary"}
                                disabled={!formRenderProps.allowSubmit}
                                style={{
                                  marginRight: "16px",
                                  backgroundColor: "#5f1702",
                                  borderColor: "#5f1702",
                                }}
                                onClick={
                                  step == 1 || step == 0
                                    ? onNextClick
                                    : formRenderProps.onSubmit
                                }
                              >
                                {isLastStep ? "Submit" : "Next"}
                              </Button>
                            )
                          ) : (
                            <Button
                              themeColor={"primary"}
                              disabled={!formRenderProps.allowSubmit}
                              style={{
                                marginRight: "16px",
                                backgroundColor: "#5f1702",
                                borderColor: "#5f1702",
                              }}
                              onClick={
                                step == 1 || step == 0
                                  ? onNextClick
                                  : formRenderProps.onSubmit
                              }
                            >
                              {isLastStep ? "Submit" : "Next"}
                            </Button>
                          )
                        ) : (
                          <Button
                            themeColor={"primary"}
                            disabled={!formRenderProps.allowSubmit}
                            style={{
                              marginRight: "16px",
                              backgroundColor: "#5f1702",
                              borderColor: "#5f1702",
                            }}
                            onClick={formRenderProps.onSubmit}
                          >
                            {isLastStep ? "Submit" : "Next"}
                          </Button>
                        )} */}
                      </div>
                      {/* : undefined} */}
                    </div>
                    {/* </div>
                    </div> */}
                  </FormElement>
                </div>
              )}
            />
            {showThankYou && <ThankYou />}
          </div>
          {/* {step === 1 && showComponent && <PersonalDetails />} */}
        </div>
      </div>
    </div>
  );
};

export default Apply_;
