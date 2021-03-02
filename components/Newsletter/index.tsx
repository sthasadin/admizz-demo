import React, {useState} from "react";
import * as yup from "yup";
import {useDispatch} from 'react-redux'
import { addSubscriber } from "../../store/Action/subscriber.action";

const Newsletter = (props: any) => {
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
    <div id="newsletter" className="newsletter">
      <div className="newsletter__inner">
        <div className="newsletter__title">Subscribe to our Newsletter</div>
        <div className="newsletter__form">
          <div className="newsletter__input">
            <input value={subscriber} onChange={onChange} type="text" placeholder="Enter email Address" />
          </div>
          <button onClick={onClick} disabled={loading} className="newsletter__btn">Subscribe Now</button>
        </div>
      </div>
    </div>
  );
};

export { Newsletter };
