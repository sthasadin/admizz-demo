import { faMicrophoneAlt, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AuthContext } from "pages/AuthContext";
import React, {useContext, useEffect, useState} from "react";

// import { Select } from "../components";
import Link from "next/link";
// import { auth as isAuth } from "../firebase";

const Topbar = (props: any) => {
  const { auth } = useContext(AuthContext);
  return (
    <div className="topbar">
      <div className="topbar__inner">
        <div className="topbar__contact">
          <div className="contact">
            <div className="contact__icon">
              {/* <FontAwesomeIcon icon={faMicrophoneAlt} /> */}

              <img src="/contactIcon.png" alt="contact-us" />
            </div>
            <div className="contact__item">
              <span className="contact__title">Nepal:</span>
              <Link href="tel:+977 9802728444 ">
                <span className="contact__info">+977 9802728444 </span>
              </Link>
            </div>
            <div className="contact__item">
              <span className="contact__title">India:</span>
              <Link href="tel:+91 8050259693">
                <span className="contact__info">+91 8050259693</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="topbar__right">
          {/* <div className="topbar__country">
            <Link href="/login">
              <span>Study In</span>
             
            </Link>
          </div> */}

          <div className="topbar__signup">
            {!auth?.currentUser?.emailVerified ? (
              <div className="signup">
                {/* <div className="signup__icon">
                  <FontAwesomeIcon icon={faUserTie} />
                </div> */}
                <div className="signup__text">
                  <Link href="/register">Sign Up</Link>
                </div>
              </div>
            ) : (
              <div className="signup">
                <div className="signup__icon">
                  {/* <FontAwesomeIcon 
                  icon={faUserTie}
                   /> */}
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
