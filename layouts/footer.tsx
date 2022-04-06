import React, { useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { addSubscriber } from "../store/Action/subscriber.action";
import { valueOf } from "*.jpg";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import { getTopColleges, getTopCourses } from "../store/Action/footer.action";
import { Facebook, Instagram, Twitter } from "@icon-park/react";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface studentInfoFormValue {
  subscriber: string;
}

const Footer = () => {
  const [subscriber, setSubscriber] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false as boolean);
  const [formError, setFormError] = useState({} as any);
  const dispatch = useDispatch();
  const onChange = (e) => {
    setSubscriber(e.target.value);
    setFormError({ subscriber: null });
  };

  const topColleges = useSelector((state: any) => state.footer.topColleges);
  const topCourses = useSelector((state: any) => state.footer.topCourses);
  React.useEffect(() => {
    dispatch(getTopColleges());
    dispatch(getTopCourses());
  }, []);

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
    } catch (error) { }
    setLoading(false);
  };
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__col logo">
            <div className="footer__logo">
              <img src="./footer-logo.png" alt="" />
             
            </div>
            <div>
            <div className="footer__title">
              It’s a unique platform for direct admissions of 
                International Students <br/> at reputed colleges/universities 
                in India.</div>
            </div>
            <div className="footer__newsletter">
              <div className="footer__newsletter__title">
                Subscribe to our newsletter
              </div>
              <div className="footer__newsletter__searchbox">
                <input
                  value={subscriber}
                  name="subscriber"
                  onChange={onChange}
                  className="newsletter_input"
                  placeholder="Enter your email"
                />
                <button
                  onClick={onClick}
                  disabled={loading}
                  className="newsletter_go"
                >
                  <KeyboardArrowRight />
                </button>
              </div>
              <p className="error-subscribe-msg">{formError.subscriber}</p>
            </div>
          </div>
          <div className="footer__mobileCol">
            <div className="footer__col">
              <div className="footer__col__title">top colleges</div>
              {topColleges &&
                topColleges?.map((college, i) => {
                  return (
                    <Link href={`/colleges/${college?.college_slug}`} key={i}>
                      <div className="footer__col__item">
                        {college?.college_name}
                      </div>
                    </Link>
                  );
                })}
            </div>
            <div className="footer__col">
              <div className="footer__col__title" >top courses</div>

              {topCourses &&
                topCourses?.map((item, i) => {
                  return (
                    <Link
                      href={`colleges/program/${item?.course_slug}`}
                      key={i}
                    >
                      <div className="footer__col__item">
                        {item?.course_name}
                      </div>
                    </Link>
                  );
                })}


            </div>
            {/* </div>
          <div className="footer__mobileCol" >
         */}
            <div className="footer__col">
              <div className="footer__col__title">other links</div>
              <div className="footer__col__item">
                <Link href="/aboutus">About Admizz</Link>
              </div>
              <div className="footer__col__item">
                <Link href="/contact-us">Contact Us</Link>
              </div>

              <div className="footer__col__item">
                <Link href="/faq">FAQs</Link>
              </div>
              <div className="footer__col__item">
                <Link href="/register">Sign In/Register</Link>
              </div>
            </div>
          </div>



        </div>
        <div className="footer__middle">
          <div className="footer__middle__left">
            <div className="footer__default">
              <a href="#"
              // className="footer__study"
              >STUDY IN INDIA</a>
            </div>
          </div>
          <div className="footer__middle__right">
            <div className="social-icons">
              <div>
                <Facebook theme="outline" size="24" fill="#fff" />
              </div>
              <div>
                <Twitter theme="outline" size="24" fill="#fff" />
              </div>
              <div>
                <Instagram theme="outline" size="24" fill="#fff" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__copyright">
          Copyright @ {new Date().getFullYear()} Admizz | All Right Reserved
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
    </footer>
  );
};

export { Footer };
