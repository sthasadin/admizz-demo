import React, { useState } from "react";
import { Input } from "../Input";
import * as yup from "yup";
import MailIcon from "@material-ui/icons/Mail";
import { Button } from "../Button";
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

const SideBarNewsLetter = () => {
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

      .email("Please provide a valid email")
      .required("Please enter your email"),
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
        await dispatch<any>(addSubscriber(subscriber));
        setSubscriber("");
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="side-bar-news-letter">
      <div className="side-bar-news-letter__title">
        Subscribe to our Newsletter
      </div>
      <div className="side-bar-news-letter__input">
        <Input
          placeholder={"Email address"}
          name="subscriber"
          value={subscriber}
          onChange={onChange}
          margin={"0px 0px 16px 0px"}
          fullWidth
          icon={MailIcon}
          error={formError.subscriber}
          errorMessage={formError.subscriber}
        />
        {/* <p className="error-subscribe-msg">{formError.subscriber}</p> */}
      </div>

      <div className="side-bar-news-letter__button">
        <Button onClick={onClick} disabled={loading} fullWidth type="primary">
          Subscribe Now
        </Button>
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

export { SideBarNewsLetter };
