import React from "react";
import { Feature } from "../feature";

const Us = () => {
  return (
    <div className="us">
      <div className="us__inner">
        <div className="us__left">
          <div className="us__left__inner">
            <div className="us__title">Why Choose Admizz?</div>
            <div className="us__desc">
              Kickstart your career by starting early. Admizz helps you join the
              right diploma course right after 10th grade so you’re always a
              step ahead of others.
            </div>
            <div className="us__feature">
              <Feature />
            </div>
            <div className="us__btn">
              <button className="btn btn--block btn--light">Learn More</button>
            </div>
          </div>
        </div>
        <div className="us__right">
          <div className="us__right__top">
            <div className="us__title-wrap">
              <div className="us__title us__title--medium">
                Our Exclusive Tie-ups
              </div>
            </div>
            <div className="us__info">
              <div className="us__info__logo">
                <img src="/us-logo.png" alt="logo" />
              </div>
              <div className="us__info__text">
                <div className="us__info__cat-wrap">
                  <div className="us__info__estd">
                    Estd:
                    <span>1995</span>
                  </div>
                  <div className="us__info__cat">
                    DCI, INC, MCI, AICTE, UGC, NBA, NAAC-A
                  </div>
                </div>
                <div className="us__info__name">
                  kalinga Institute of Industrial Technology
                </div>
                <div className="us__info__details-wrap">
                  <div className="us__info__details">
                    Some of the detail about KIIT here.
                  </div>
                  <div className="us__cta">View Details</div>
                </div>
              </div>
            </div>
          </div>
          <div className="us__right__bottom">
            <div className="us__read">
              <div className="us__read__title">We are now International</div>
              <div className="us__read__desc">
                We accept and register students from all over the world
              </div>
              <div className="us__cta">Learn More</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Us };
