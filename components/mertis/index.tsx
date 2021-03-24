import React from "react";
import { CallToAction } from "../Button/callToAction";

const Merits = () => {
  const [windowSize, setWindowSize] = React.useState({ width: null });

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
          {windowSize.width > 450 && (
            <CallToAction className="learnmore__btn">Learn More</CallToAction>
          )}
        </div>
        <div className="merit__right">
          <div className="merti__right__inner">
            <div className="merit__thumbnail">
              <img src="/india.jpg" alt="" />
            </div>
            <div className="merit__thumbnail__text">
              <div className="merit__thumbnail__title">
                {windowSize.width > 450
                  ? "Some Facts about India That you should know"
                  : null}
              </div>
              <div className="merit__thumbnail__cta">
                <a href="#">
                  {windowSize.width > 450 ? (
                    "watch video"
                  ) : (
                    <img src="/playvideoIcon.png" alt="playicon_logo" />
                  )}
                </a>
              </div>
              {windowSize.width < 450 && (
                <div>
                  <CallToAction className="learnmore__btn">
                    Learn More
                  </CallToAction>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Merits };
