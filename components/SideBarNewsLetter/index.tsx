import React from "react";
import { Input } from "../Input";
import MailIcon from '@material-ui/icons/Mail';
import { Button } from "../Button";

const SideBarNewsLetter = () => {
  return (
    <div className="side-bar-news-letter">
      <div className="side-bar-news-letter__title">
        Subscribe to news letter
      </div>
      <div className="side-bar-news-letter__input">
        <Input placeholder={"Email Address"} margin={"0px 0px 16px 0px"} fullWidth icon={MailIcon} />
      </div>
      <div className="side-bar-news-letter__button">
        <Button className="contact-form__send-message" >Send Message</Button>
      </div>
    </div>
  );
}; 

export { SideBarNewsLetter };
