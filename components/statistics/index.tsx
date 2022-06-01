import React from "react";

const Statistics = () => {
  return (
    <div className="stat">
      <div className="stat__inner">
        <div className="stat__heading block-heading">Our statistics</div>
        <div className="stat__title block-title">
          We do more than you can imagine, believe us!
        </div>
        <div className="stat__info">
          <div className="stat__info__top">
            <div className="stat__item">
              <div className="stat__item__count">500+</div>
              <div className="stat__item__title">Graduate Students</div>
            </div>
            <div className="stat__item">
              <div className="stat__item__count">30</div>
              <div className="stat__item__title">aFFiliated universities</div>
            </div>
            <div className="stat__item">
              <div className="stat__item__count secondary">20</div>
              <div className="stat__item__title">countries connected</div>
            </div>

            <div className="stat__item formobileview-stat">
              <div className="stat__item__count blue2">200+</div>
              <div className="stat__item__title">SCHOLARSHIP DELIVERED</div>
            </div>
          </div>
          <div className="stat__info__bottom">
            <div className="stat__item  hideformobile">
              <div className="stat__item__count blue2">200+</div>
              <div className="stat__item__title">SCHOLARSHIP DELIVERED</div>
            </div>

            <div className="stat__item">
              <div className="stat__item__count green2">10000+</div>
              <div className="stat__item__title">REGISTERED STUDENTS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Statistics };
