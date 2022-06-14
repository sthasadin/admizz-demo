import React, { useMemo, useState } from "react";
import { Input } from "../Input";
import { PasswordField } from "../Input/PasswordField";
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LockIcon from "@material-ui/icons/Lock";
import { auth, db } from "../../firebase";
import { useRouter } from "next/router";
import * as yup from "yup";
import { Button } from "../Button";
import { ErrorMessages } from "../../utils/ErrorMessages";
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Select } from "../Select";
import { countryList } from "../../utils/CountryLists";
import { CountryCodeDropDown } from "../Select/CountryCodeDropDown";
import Link from "next/link";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import { CountryCode } from "utils/CountryCode";
import countryLists from "react-select-country-list";
import PhoneInput from "react-phone-number-input";
interface signUpFormValue {
  fullName: string;
  email: string;
  phoneNumber: string;
  country: string;
  password: string;
  confirmPassword: string;
  [key: string]: any;
  countryCode: string;
}

const Register = () => {
  const [formValue, setFormValue] = useState({
    countryCode: "+977",
  } as signUpFormValue);
  const [formError, setFormError] = useState({} as any);
  const [msgType, setMsgType] = useState({} as any);
  const [showPassword, setShowPassword] = useState(false as boolean);
  const [showconfirmPassword, setShowConfirmPassword] = useState(
    false as boolean
  );
  const options = useMemo(() => countryLists().getData(), []);
  const [loading, setLoading] = useState(false as boolean);
  const [snackOpen, setSnackOpen] = useState(false as boolean);

  const router = useRouter();

  const CustomizeCheckBox: any = withStyles({
    root: {
      "& .MuiSvgIcon-root": {
        fill: "#828282",
        textTransform: "capitalize",
        "&:hover": {
          backgroundColor: "transparent",
        },
      },
      "&$checked": {
        "& .MuiIconButton-label": {
          position: "relative",
          zIndex: 0,
        },
        "& .PrivateSwitchBase-root-716": {
          paddingLeft: 0,
        },
        "& .MuiIconButton-label:after": {
          content: '""',
          left: 4.5,
          top: 5,
          height: 14,
          width: 15,
          position: "absolute",
          // zIndex: -1,
          backgroundColor: "#FFAB1A",
        },
      },
    },
    checked: {},
  })(Checkbox);
  const handleChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
    setFormError(() => ({ ...formError, [e.target.name]: null }));
    // formValue[e.target.name] = e.target.value
    // setFormValue({ ...formValue });
    // setFormError(() => ({ ...formError, [e.target.name]: null }));

    // if (e.target.name === "country") {
    //   if (e.target.value === "Nepal") {
    //     setFormValue({ ...formValue, countryCode: "+977" } as signUpFormValue);
    //   } else setFormValue({ ...formValue, countryCode: "+91" } as signUpFormValue);
    // }
  };

  const validationSchema = yup.object().shape<signUpFormValue>({
    fullName: yup.string().required("Please enter your full name"),
    email: yup
      .string()
      .required("Please enter your gmail")
      .email("Please provide a valid email"),
    password: yup.string().required("Please enter your password"),
    confirmPassword: yup.string().required("Please enter your password"),
    country: yup.string().required("Please select your country"),
    phoneNumber: yup.string().required("Please enter your phone number"),
    countryCode: yup.string().required("Required"),
  });

  const validate = async () => {
    try {
      await validationSchema.validate(
        {
          fullName: formValue.fullName,
          email: formValue.email,
          password: formValue.password,
          confirmPassword: formValue.confirmPassword,
          country: formValue.country,
          phoneNumber: formValue.phoneNumber,
          countryCode: formValue.countryCode,
        },
        {
          abortEarly: false,
        }
      );
      if (formValue.password !== formValue.confirmPassword) {
        setFormError({ confirmPassword: "Password does not match" });
      } else {
        setFormError({});
        return true;
      }
      return false;
    } catch (err) {
      const errors = {};
      err.inner.forEach((item: any) => {
        errors[item.path] = item.errors[0];
      });
      setFormError({ ...errors });
    }
  };

  const CountryCodeOptions = [
    {
      label: `+91`,
      value: "+91 ",
      imgSrc: "/country-icon/india.png",
    },
    {
      label: "+977",
      value: "+977",
      imgSrc: "/country-icon/nepal.png",
    },
  ];

  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const valid = await validate();
      if (valid) {
        let authUser = await auth.createUserWithEmailAndPassword(
          formValue.email,
          formValue.password
        );
        auth.currentUser.updateProfile({
          displayName: formValue.fullName,
        });
        if (authUser.user) {
          await db
            .collection("users")
            .doc(authUser.user.uid)
            .set({
              fullName: formValue.fullName,
              email: formValue.email,
              phoneNumber: formValue.countryCode + "-" + formValue.phoneNumber,
              country: formValue.country,
            });

          authUser.user
            .sendEmailVerification()
            .then(() => {
              setMsgType("success");
              setFormError({
                ...formError,
                otherErrors: (
                  <div>
                    Successfully registred.{""}
                    <span>Please verify your email.</span>
                  </div>
                ),
              });
              handleOpenSnackbar();

              router.push("/login");
            })
            .catch((err) => {
              setFormError({
                ...formError,
                otherErrors: "Please verify your email address",
              });
              console.error(err);
            });
        }
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      const errorMessage = ErrorMessages[err.code];
      handleOpenSnackbar();
      setMsgType("error");
      if (errorMessage) {
        setFormError({ ...formError, otherErrors: errorMessage });
      } else {
        setFormError({ ...formError, otherErrors: "Error occurred" });
      }
    }
  };

  const handleOpenSnackbar = () => {
    console.log({ msgType });
    setSnackOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackOpen(false);
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
          <div className="signin__header">Register to Apply</div>
          <div className="signin__header__desc">
            Become a leader, become a part of the best institution.
          </div>
          <div className="signin__form ">
            <form onSubmit={handleRegister}>
              <div className={"signin__form-grid"}>
                <Input
                  fullWidth
                  onChange={handleChange}
                  name={"fullName"}
                  icon={PersonIcon}
                  placeholder="Full Name*"
                  label="Full Name"
                  error={!!formError.fullName}
                  errorMessage={formError.fullName}
                  value={formValue.fullName}
                  type="text"
                />
                <Input
                  fullWidth
                  onChange={handleChange}
                  name={"email"}
                  icon={MailIcon}
                  placeholder="Email Address*"
                  label="Email Address"
                  error={!!formError.email}
                  errorMessage={formError.email}
                  type="text"
                  value={formValue.email}
                />

                <Select
                  useLabel
                  options={options}
                  onChange={handleChange}
                  icon={LocationOnIcon}
                  placeholder={"Home Country"}
                  name={"country"}
                  names="Nationality"
                  error={!!formError.country}
                  errorMessage={formError.country}
                  value={formValue.country}
                />
                <div className={"student-info__phone-input"}>
                  {/* <PhoneInput country="US" 
                  value={formValue.countryCode} 
                  onChange={handleChange}
                  style={{width:90}} /> */}

                  <CountryCodeDropDown
                    options={CountryCode}
                    useValue
                    minWidth={"83px"}
                    width={"90px"}
                    value={formValue.countryCode}
                    // defaultValue={"+977"}
                    name={"countryCode"}
                    onChange={handleChange}
                    error={!!formError.countryCode}
                    errorMessage={formError.countryCode}
                    className={"student-info__phone-separator"}
                  />

                  <Input
                    fullWidth
                    onChange={handleChange}
                    name={"phoneNumber"}
                    icon={PhoneIcon}
                    borderRadius={"0px 5px 5px 0px"}
                    placeholder="Phone Number*"
                    label="Phone Number"
                    error={!!formError.phoneNumber}
                    errorMessage={formError.phoneNumber}
                    type="text"
                    value={formValue.phoneNumber}
                  />
                </div>

                <PasswordField
                  fullWidth
                  onChange={handleChange}
                  name={"password"}
                  icon={LockIcon}
                  placeholder="Password"
                  label="Password"
                  error={!!formError.password}
                  errorMessage={formError.password}
                  type={`${showPassword ? "text" : "password"}`}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                  showPassword={showPassword}
                  value={formValue.password}
                />
                <PasswordField
                  fullWidth
                  onChange={handleChange}
                  name={"confirmPassword"}
                  icon={LockIcon}
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  error={!!formError.confirmPassword}
                  errorMessage={formError.confirmPassword}
                  type={`${showconfirmPassword ? "text" : "password"}`}
                  onClick={() =>
                    setShowConfirmPassword(
                      (showconfirmPassword) => !showconfirmPassword
                    )
                  }
                  showconfirmPassword={showconfirmPassword}
                  value={formValue.confirmPassword}
                />
              </div>
              <div className="signin__info">
                <CustomizeCheckBox style={{ paddingLeft: "0" }} />
                By submitting this form, you accept and agree to our
                <span>Terms & Conditions.</span>
              </div>
              <div className="signin__submit">
                <div className="signin__change">
                  <Link href="/login">
                    Already Registered? Click Here To Login.
                  </Link>
                </div>
                <Button
                  htmlType={"submit"}
                  loading={loading}
                  fullWidth
                  disabled={loading}
                >
                  Register Now
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Snackbar
        open={snackOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={msgType?.toString()}>
          {formError?.otherErrors}
        </Alert>
      </Snackbar>
    </div>
  );
};

export { Register };
