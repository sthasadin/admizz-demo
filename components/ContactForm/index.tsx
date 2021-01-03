import React from "react";
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

const ContactForm = () => {
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
                <Input placeholder={"Full Name"} fullWidth margin={"25px 0px 16px 0px"} icon={PersonIcon} />
                <Input placeholder={"Email Address"} margin={"0px 0px 16px 0px"} fullWidth icon={MailIcon} />
                <Input placeholder={"Subject"} margin={"0px 0px 16px 0px"} fullWidth />
                <Input multiline placeholder={"Add additional query you have"} margin={"0px 0px 16px 0px"} fullWidth />
                <div className="contact-form__captcha-container">
                    <div className="contact-form__captcha-code">
                        NJVY
                    </div>
                    <Input placeholder={"Enter Captcha Code"} margin={"0px 0px 16px 0px"} fullWidth />
                </div>
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
                        <Button className="contact-form__send-message" >Send Message</Button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export { ContactForm };
