import React, { useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { addSubscriber } from "../store/Action/subscriber.action";
import { valueOf } from "*.jpg";

const Footer = () => {
  const [subscriber, setSubscriber] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const onChange = (e) => {
    setSubscriber(e.target.value);
  };
  const onClick = async () => {
    setLoading(true);
    let schema = yup.string().email();
    let result = schema.isValidSync(subscriber);
    if (result) {
      await dispatch(addSubscriber(subscriber));
    }
    setSubscriber("");
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
            <div className="footer__newsletter">
              <div className="footer__newsletter__title">
                Subscribe to our newsletter
              </div>
              <div className="footer__newsletter__searchbox">
                <input
                  value={subscriber}
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
            </div>
          </div>
          <div className="footer__mobileCol">
            <div className="footer__col">
              <div className="footer__col__title">top colleges</div>
              <a href="#" className="footer__col__item">
                Engineering
              </a>
              <a href="#" className="footer__col__item">
                Management
              </a>
              <a href="#" className="footer__col__item">
                Medical
              </a>
              <a href="#" className="footer__col__item">
                Law
              </a>
              <a href="#" className="footer__col__item">
                Commerce
              </a>
              <a href="#" className="footer__col__item">
                Science
              </a>
              <a href="#" className="footer__col__item">
                Arts
              </a>
            </div>
            <div className="footer__col">
              <div className="footer__col__title">top courses</div>
              <a href="#" className="footer__col__item">
                M.B.A
              </a>
              <a href="#" className="footer__col__item">
                B.Tech/B.E
              </a>
              <a href="#" className="footer__col__item">
                MCA
              </a>
              <a href="#" className="footer__col__item">
                M.Tech
              </a>
              <a href="#" className="footer__col__item">
                MA
              </a>
              <a href="#" className="footer__col__item">
                BA
              </a>
              <a href="#" className="footer__col__item">
                BCA
              </a>
            </div>
          </div>
          <div className="footer__mobileCol">
            <div className="footer__col">
              <div className="footer__col__title">study in</div>
              <a href="#" className="footer__col__item">
                India
              </a>
              <a href="#" className="footer__col__item">
                USA
              </a>
            </div>
            <div className="footer__col">
              <div className="footer__col__title">other links</div>
              <a href="#" className="footer__col__item">
                About Admix
              </a>
              <a className="footer__col__item" href="/contact-us">
                Contact Us
              </a>
              <a className="footer__col__item" href="#">
                Careers
              </a>
              <a className="footer__col__item" href="/faq">
                FAQs
              </a>
              <a href="#" className="footer__col__item">
                Terms & Condition
              </a>
              <a href="#" className="footer__col__item">
                Sign In/Register
              </a>
            </div>
          </div>
        </div>
        <div className="footer__middle">
          <div className="footer__middle__left">
            <div className="footer__default">
              <a href="#">Terms & Conditions</a>
            </div>
            <div className="footer__default">
              <a href="#">Privacy Policy</a>
            </div>
          </div>
          <div className="footer__middle__right">
            <div className="social-icons"></div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__copyright">
          Copyright @ 2020 Admizz | All Right Reserved
        </div>
      </div>
    </footer>
  );
};

export { Footer };
