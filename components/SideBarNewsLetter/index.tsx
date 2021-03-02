import React, {useState} from "react";
import { Input } from "../Input";
import * as yup from "yup";
import MailIcon from '@material-ui/icons/Mail';
import { Button } from "../Button";
import {useDispatch} from 'react-redux'
import { addSubscriber } from "../../store/Action/subscriber.action";

const SideBarNewsLetter = () => {
  const [subscriber, setSubscriber] = useState('')
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const onChange = e => {
    setSubscriber(e.target.value)
  }
  const onClick =async ()=> {
    setLoading(true)
    let schema = yup.string().email();
    let result = schema.isValidSync(subscriber)
    if (result) {      
      await dispatch(addSubscriber(subscriber))
    }
    setSubscriber('')
    setLoading(false)
  }


  return (
    <div className="side-bar-news-letter">
      <div className="side-bar-news-letter__title">
        Subscribe to news letter
      </div>
      <div className="side-bar-news-letter__input">
        <Input placeholder={"Email Address"} name='subscriber' value={subscriber} onChange={onChange} margin={"0px 0px 16px 0px"} fullWidth icon={MailIcon} />
      </div>
      <div className="side-bar-news-letter__button">
        <Button onClick={onClick} disabled={loading} className="contact-form__send-message" >Send Message</Button>
      </div>
    </div>
  );
}; 

export { SideBarNewsLetter };
