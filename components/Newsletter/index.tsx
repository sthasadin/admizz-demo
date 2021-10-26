import React, { useState } from "react";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addSubscriber } from "../../store/Action/subscriber.action";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface studentInfoFormValue {
  subscriber: string;
}

const Newsletter = (props: any) => {
  const [subscriber, setSubscriber] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false as boolean);
  const [formError, setFormError] = useState({} as any);
  const dispatch = useDispatch();
  const onChange = (e) => {
    setSubscriber(e.target.value);
    setFormError({ subscriber: null });
  };

  const validationSchema = yup.object().shape<studentInfoFormValue>({
    subscriber: yup
      .string()
      .required("Please enter your email")
      .email("Please provide a valid email"),
  });

  const validate = async () => {
    try {
      await validationSchema.validate(
        {
          subscriber,
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

  const onClick = async () => {
    setLoading(true);
    try {
      const isValid = await validate();
      if (isValid) {
        setSnackOpen(true);
        await dispatch(addSubscriber(subscriber));
        setSubscriber("");
      }
    } catch (error) {}
    setLoading(false);

    // setLoading(true);
    // let schema = yup.string().email();
    // let result = schema.isValidSync(subscriber);
    // if (result) {
    //   await dispatch(addSubscriber(subscriber));
    // }
    // setSubscriber("");
    // setLoading(false);
  };
  return (
    <div id="newsletter" className="newsletter">
      <div className="newsletter__inner">
        <div className="newsletter__title">Subscribe to our Newsletter</div>
        <div className="newsletter__form">
          <div className="newsletter__input">
            <input
              value={subscriber}
              onChange={onChange}
              type="text"
              placeholder="Enter email address"
              className="subscribe-newsletter-field"
            />
            <p className="error-subscribe-msg news-letter-email">
              {formError.subscriber}
            </p>
          </div>
          <button
            onClick={onClick}
            disabled={loading}
            className="newsletter__btn"
          >
            Subscribe Now
          </button>
        </div>
      </div>

      <Snackbar
        open={snackOpen}
        autoHideDuration={4000}
        onClose={() => setSnackOpen(false)}
      >
        <Alert onClose={() => setSnackOpen(false)} severity="success">
          Thanks for subscribing
        </Alert>
      </Snackbar>
    </div>
  );
};

export { Newsletter };
