import { faMicrophoneAlt, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import { Select } from "../components";
import Link from "next/link";
import { auth } from "../firebase";

const Topbar = (props: any) => {
  return (
    <div className="topbar">
      <div className="topbar__inner">
        <div className="topbar__contact">
          <div className="contact">
            <div className="contact__icon">
              <FontAwesomeIcon icon={faMicrophoneAlt} />
            </div>
            <div className="contact__item">
              <span className="contact__title">Nepal:</span>
              <span className="contact__info">+977 87654321</span>
            </div>
            <div className="contact__item">
              <span className="contact__title">India:</span>
              <span className="contact__info">+91 87654321</span>
            </div>
          </div>
        </div>
        <div className="topbar__right">
          <div className="topbar__country">
            <Link href="/login">
              <span>Study In</span>
              {/* <Select /> */}
            </Link>
          </div>

          <div className="topbar__signup">
            {!auth.currentUser ? (
              <div className="signup">
                <div className="signup__icon">
                  <FontAwesomeIcon icon={faUserTie} />
                </div>
                <div className="signup__text">
                  <Link href="/register">Sign up</Link>
                </div>
              </div>
            ) : (
              <div className="signup">
                <div className="signup__icon">
                  <FontAwesomeIcon icon={faUserTie} />
                </div>
                <div className="signup__text">
                  <Link href="/studentdashboardmain">Student Dashboard</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Topbar };
