import React, { useState } from "react";
import * as yup from "yup";
import { auth, db } from "../../firebase";
import indiaOffice from "../../public/indiaOffice.png";
import nepalOffice from "../../public/nepalOffice.png";
import bangladeshOffice from "../../public/bangladeshoffice.png";
import location from "../../public/location.png";
import telephone from "../../public/telephone.png";
import email from "../../public/email.png";
import { Input } from "../Input";
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";
import { Button } from "../Button";
import Facebook from "../../public/facebook.png";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import SubjectIcon from "@material-ui/icons/Subject";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import usaOffice from "../../public/usaOffice.png";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface ContactUsFormValue {
  name: string;
  email: string;
  subject: string;
  query: string;
}

const ContactForm = () => {
  const [formValue, setFormValue] = useState({} as ContactUsFormValue);
  const [formError, setFormError] = useState({} as any);
  const [loading, setLoading] = useState(false as boolean);
  const [snackOpen, setSnackOpen] = useState(false as boolean);

  const handleChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
    setFormError(() => ({ ...formError, [e.target.name]: null }));
  };

  const validationSchema = yup.object().shape<ContactUsFormValue>({
    name: yup.string().required("Please enter your name"),
    email: yup
      .string()
      .required("Please enter your gmail")
      .email("Please provide a valid email"),
    subject: yup.string().required("Please enter the subject"),
    query: yup.string().required("Please enter your query"),
  });

  const validate = async () => {
    try {
      await validationSchema.validate(
        {
          name: formValue.name,
          email: formValue.email,
          subject: formValue.subject,
          query: formValue.query,
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

  const handleRegister = async () => {
    // setLoading(true);
    const valid = await validate();
    if (valid) {
      db.collection("contact")
        .add({
          name: formValue.name,
          email: formValue.email,
          subject: formValue.subject,
          query: formValue.query,
          createdAt: new Date(),
        })
        .then(function (docRef) {
          setSnackOpen(true);
          setFormValue({
            ...formValue,
            name: "",
            email: "",
            subject: "",
            query: "",
          });
          // setLoading(false);
          setLoading(true);
        })
        .catch(function (error) {
          setLoading(false);
          console.error("Error adding document: ", error);
        });
    }
  };

  return (
    <div className="contact-form">
      <div className="contact-form__contact-us">
        <div className="contact-form__header">Contact Details</div>
        <div>
          <div className="contact-form__india-office-container">
            <img src={indiaOffice} style={{ height: 54, width: 54 }} />
            <div
              className="contact-form__office-details"
              style={{ marginTop: -12 }}
            >
              <div
                className="contact-form__details-header"
                style={{ fontSize: 16 }}
              >
                India Office
              </div>
              <div className="contact-form__details-content">
                <img src={location} style={{ height: 20, width: 20 }} />
                <span style={{ fontSize: 14, marginTop: -15 }}>
                  2nd Floor, Jayaram Building, Kanakapura Rd, Gubbalala,
                  Bengaluru, Karnataka 560062
                </span>
              </div>
              <div className="contact-form__details-content">
                <img src={telephone} style={{ height: 20, width: 20 }} />
                <span style={{ fontSize: 14, marginTop: -13 }}>
                  +91 805 0259 693
                </span>
              </div>
            </div>
          </div>
          <div className="contact-form__india-office-container">
            <img src={usaOffice} style={{ height: 54, width: 54 }} />
            <div
              className="contact-form__office-details"
              style={{ marginTop: -12 }}
            >
              <div
                className="contact-form__details-header"
                style={{ fontSize: 16 }}
              >
                USA Office
              </div>
              <div className="contact-form__details-content">
                <img src={location} style={{ height: 20, width: 20 }} />
                <span style={{ fontSize: 14, marginTop: -15 }}>
                  USA 1912 E Hardvard Dr Denver, CO
                </span>
              </div>
              <div className="contact-form__details-content">
                <img src={telephone} style={{ height: 20, width: 20 }} />
                <span style={{ fontSize: 14, marginTop: -13 }}>
                  +1(719) 398-1707
                </span>
              </div>
            </div>
          </div>
          <div className="contact-form__india-office-container">
            <img src={nepalOffice} style={{ height: 54, width: 54 }} />
            <div
              className="contact-form__office-details"
              style={{ marginTop: -12 }}
            >
              <div
                className="contact-form__details-header"
                style={{ fontSize: 16 }}
              >
                Nepal Office
              </div>
              <div className="contact-form__details-content">
                <img src={location} style={{ height: 20, width: 20 }} />
                <span style={{ fontSize: 14, marginTop: -15 }}>
                  Ground Floor, Putalisadak,
                  <br />
                  Kathmandu (Oppo to Raymond Tailor)
                </span>
              </div>
              <div className="contact-form__details-content">
                <img src={telephone} />
                <span style={{ fontSize: 14, marginTop: -13 }}>
                  +977 9802728444
                </span>
              </div>
            </div>
          </div>{" "}
          <div className="contact-form__india-office-container">
            <img src={bangladeshOffice} style={{ height: 54, width: 54 }} />
            <div className="contact-form__office-details">
              <div
                className="contact-form__details-header"
                style={{ fontSize: 16 }}
              >
                Bangladesh Office
              </div>
              <div className="contact-form__details-content">
                <img src={location} style={{ height: 20, width: 20 }} />
                <span style={{ fontSize: 14, marginTop: -15 }}>
                  Bogra Tole, Bogura 5800,
                  <br />
                  Bangladesh
                </span>
              </div>
              <div className="contact-form__details-content">
                <img src={telephone} style={{ height: 20, width: 20 }} />
                <span style={{ fontSize: 14, marginTop: -13 }}>
                  {" "}
                  +880 1775 639993
                </span>
              </div>
            </div>
          </div>
          <div className="contact-form__email-us" style={{ marginTop: 32 }}>
            Prefer Email? Email us at:
            <div className="contact-form_email-holder">
              <img src={email} />
              support@admizz.com
            </div>
          </div>
        </div>
      </div>
      <div className="contact-form__lets-talk">
        <div className="contact-form__header">Let's Talk</div>
        <div className="contact-form__message">
          Please tell us a bit about you, your query, and how best to reach you.
          We’ll get right back to you.
        </div>
        <Input
          name={"name"}
          onChange={handleChange}
          placeholder={"Full Name"}
          errorMessage={formError.name}
          error={!!formError.name}
          value={formValue.name}
          fullWidth
          margin={"25px 0px 16px 0px"}
          icon={PersonIcon}
        />
        <Input
          name={"email"}
          onChange={handleChange}
          value={formValue.email}
          placeholder={"Email Address"}
          errorMessage={formError.email}
          error={!!formError.email}
          margin={"0px 0px 16px 0px"}
          fullWidth
          icon={MailIcon}
        />
        <Input
          name={"subject"}
          onChange={handleChange}
          value={formValue.subject}
          placeholder={"Subject"}
          errorMessage={formError.subject}
          error={!!formError.subject}
          margin={"0px 0px 16px 0px"}
          fullWidth
          icon={SubjectIcon}
        />
        <Input
          name={"query"}
          onChange={handleChange}
          value={formValue.query}
          multiline
          placeholder={"Add additional query you have"}
          errorMessage={formError.query}
          error={!!formError.query}
          margin={"0px 0px 16px 0px"}
          fullWidth
        />
        <div className="contact-form__actions">
          <div className="contact-form__socials">
            <div className="contact-form__followUsText">Follow Us on:</div>
            <div className="contact-form__icons">
              <a href="https://www.facebook.com/admizz" target="_blank">
                <img src={Facebook} width="11px" height="23px" />{" "}
              </a>
              <a href="https://twitter.com/admizz_official" target="_blank">
                <TwitterIcon
                  style={{ fill: "#2F80ED", marginRight: 26, marginLeft: 26 }}
                />
              </a>
              <a
                href="https://www.instagram.com/admizz_official/"
                target="_blank"
              >
                <InstagramIcon style={{ fill: "#2F80ED" }} />
              </a>
            </div>
          </div>
          <div className="contact-form__submit">
            <Button
              onClick={handleRegister}
              className="contact-form__send-message"
              // disabled={loading}
              // loading={loading}
            >
              Send Message
            </Button>
          </div>
        </div>
      </div>
      <Snackbar
        open={snackOpen}
        autoHideDuration={4000}
        onClose={() => setSnackOpen(false)}
      >
        <Alert onClose={() => setSnackOpen(false)} severity="success">
          Thanks for contacting us. We will get in touch with you as possible.
        </Alert>
      </Snackbar>
    </div>
  );
};

export { ContactForm };
