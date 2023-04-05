import { AuthContext } from "pages/AuthContext";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";

const Topbar = (props: any) => {
  const { auth } = useContext(AuthContext);
  return (
    <div className="topbar">
      <div className="topbar__inner">
        <div className="topbar__contact">
          <div className="contact">
            <div className="contact__icon">
              <img src="/email-icon.png" alt="contact-us" />
            </div>
            <span className="contact__info"> support@admizz.com </span>

            <div className="contact__item"></div>
            {/* <div className="contact__item">
              <span className="contact__title">Nepal:</span>
              <Link href="tel:+977 9802728444 ">
                <span className="contact__info">+977 9802728444 </span>
              </Link>
            </div> */}
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
                  <div className="signup__icon">
                    <img src="/user-icon.png" alt="contact-us" />
                  </div>
                  <Link href="/apply">Sign Up</Link>
                </div>
              </div>
            ) : (
              <div className="signup">
                <div className="signup__icon">
                  {/* <FontAwesomeIcon 
                  icon={faUserTie}
                   /> */}
                  <img src="/user-icon.png" alt="contact-us" />
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
