import React, { useState } from "react";
import * as yup from "yup";
import moment from 'moment';
import { auth, db } from "../../firebase";
import indiaOffice from "../../public/indiaOffice.png"
import nepalOffice from "../../public/nepalOffice.png"
import location from "../../public/location.png"
import telephone from "../../public/telephone.png"
import email from "../../public/email.png"
import { Input } from "../Input";
import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';
import { Button } from "../Button";
import Facebook from "../../public/facebook.png";
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import SubjectIcon from '@material-ui/icons/Subject';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';

interface ContactUsFormValue {
  name: string;
  email: string;
  subject: string;
  query: string;
}

const ContactForm = () => {
  const [formValue, setFormValue] = useState({} as ContactUsFormValue);
  const [formError, setFormError] = useState({} as any);

  const handleChange = (e: any) => {
    console.log("THIS IS THE VALUE", e.target.name, e.target.value, formValue)
    setFormValue({ ...formValue, [e.target.name]: e.target.value })
  }

  const validationSchema = yup.object().shape<ContactUsFormValue>({
    name: yup.string().required("Required"),
    email: yup
      .string()
      .required("Required")
      .email("Please provide a valid email"),
    subject: yup.string().required("Required"),
    query: yup.string().required("Required")
  });

  const validate = async () => {
    try {
      await validationSchema.validate({
        name: formValue.name,
        email: formValue.email,
        subject: formValue.subject,
        query: formValue.query
      }, {
          abortEarly: false
        });
      return false;
    } catch (err) {
      const errors = {};
      err.inner.forEach((item: any) => {
        errors[item.path] = item.errors[0]
      })
      setFormError({ ...errors })
    }
  }

  const handleRegister = async () => {
    const valid = await validate();
    db.collection("contact").add({
      name: formValue.name,
      email: formValue.email,
      subject: formValue.subject,
      query: formValue.query,
      createdAt: moment().format(),
    })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }

  return (
    <div className="contact-form">
      <div className="contact-form__contact-us">
        <div className="contact-form__header">
          Contact Details
                </div>
        <div>
          <div className="contact-form__india-office-container">
            <img src={indiaOffice} />
            <div className="contact-form__office-details">
              <div className="contact-form__details-header">
                India Office
                        </div>
              <div className="contact-form__details-content">
                <img src={location} />
                <span>
                  Bangalore,<br />Karnataka, India
                          </span>
              </div>
              <div className="contact-form__details-content">
                <img src={telephone} />
                <span>
                  +91 805 0259 693
                          </span>
              </div>
            </div>
          </div>
          <div className="contact-form__india-office-container">
            <img src={nepalOffice} />
            <div className="contact-form__office-details">
              <div className="contact-form__details-header">
                Nepal Office
                        </div>
              <div className="contact-form__details-content">
                <img src={location} />
                <span>
                  Bagbazar,<br />Kathmandu, Nepal
                          </span>
              </div>
              <div className="contact-form__details-content">
                <img src={telephone} />
                <span>
                  +91 805 0259 693
                          </span>
              </div>
            </div>
          </div>
          <div className="contact-form__email-us">
            Prefer Email? Email us at:
                        <div className="contact-form_email-holder">
              <img src={email} />
              info@linkservices.co
                        </div>
          </div>
        </div>
      </div>
      <div className="contact-form__lets-talk">
        <div className="contact-form__header">
          Let's Talk
                 </div>
        <div className="contact-form__message">
          Please tell us a bit about you, your project, and how best to reach you. We’ll get right back to you.
        </div>
        <Input name={"name"} onChange={handleChange} placeholder={"Full Name"} errorMessage={formError.name} fullWidth margin={"25px 0px 16px 0px"} icon={PersonIcon} />
        <Input name={"email"} onChange={handleChange} placeholder={"Email Address"} errorMessage={formError.email} margin={"0px 0px 16px 0px"} fullWidth icon={MailIcon} />
        <Input name={"subject"} onChange={handleChange} placeholder={"Subject"} errorMessage={formError.subject} margin={"0px 0px 16px 0px"} fullWidth icon={SubjectIcon} />
        <Input name={"query"} onChange={handleChange} multiline placeholder={"Add additional query you have"} errorMessage={formError.query} margin={"0px 0px 16px 0px"} fullWidth icon={LiveHelpIcon} />
        <div className="contact-form__actions">
          <div className="contact-form__socials">
            <div>Follow Us on:</div>
            <div className="contact-form__icons">
              <img src={Facebook} width="11px" height="23px" />
              <TwitterIcon style={{ fill: "#2F80ED", marginRight: 47, marginLeft: 47 }} />
              <InstagramIcon style={{ fill: "#2F80ED" }} />
            </div>
          </div>
          <div className="contact-form__submit">
            <Button onClick={handleRegister} className="contact-form__send-message" >Send Message</Button>
          </div>
        </div>
      </div>
    </div>
  )
};

export { ContactForm };
