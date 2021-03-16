import React from "react";
import { CallToAction } from "../Button/callToAction";

const Merits = () => {
  return (
    <div className="merit">
      <div className="merit__inner">
        <div className="merit__left">
          <div className="merit__heading block-heading">study in india</div>
          <div className="merit__title block-title">
            why to study in <span>india</span>
          </div>
          <div className="merit__desc">
            We continuously strive towards facilitating campus-drives where
            eminent companies offer the most worth-while career opportunities.
          </div>
          <div className="list-item-wrap">
            <div className="list-item">
              <div className="list-item__icon">
                {" "}
                <img src="/peopleIcon.png" alt="people_logo" />
              </div>
              <div className="list-item__text">
                <div className="list-item__title">
                  15,000+ Placements in 1,500+ Companies
                </div>
                <div className="list-item__desc">
                  We continuously strive towards facilitating campus-drives
                  where eminent companies offer the most worth-while career
                  opportunities.
                </div>
              </div>
            </div>
            <div className="list-item">
              <div className="list-item__icon">
                <img src="/packageIcon.png" alt="people_logo" />
              </div>
              <div className="list-item__text">
                <div className="list-item__title">
                  15,000+ Placements in 1,500+ Companies
                </div>
                <div className="list-item__desc">
                  We continuously strive towards facilitating campus-drives
                  where eminent companies offer the most worth-while career
                  opportunities.
                </div>
              </div>
            </div>
          </div>
          <CallToAction>Learn More</CallToAction>
        </div>
        <div className="merit__right">
          <div className="merti__right__inner">
            <div className="merit__thumbnail">
              <img src="/india.jpg" alt="" />
            </div>
            <div className="merit__thumbnail__text">
              <div className="merit__thumbnail__title">
                Some Facts about India That you should know
              </div>
              <div className="merit__thumbnail__cta">
                <a href="#">watch video</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Merits };
