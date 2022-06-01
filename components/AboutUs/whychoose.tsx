import React from "react";

const Merits = () => {
  return (
    <div className="merit">
      <div className="merit__aboutus__inner section-wrapper">
        <div className="merit__left">
          <div className="merit__heading block-heading">About Admizz</div>
          <div className="merit__title block-title">
            Why Choose <span>Admizz</span> ?
          </div>
          <div className="merit__desc">
            Admizz is a perfect guide for you if you are planning your further
            study in India. <br></br>
            It is a prime intermediary for students to connect,
            to explore and to apply in top rank educational institutions in
            India . It helps students from all over the world to get detailed
            information about various top ranked universities and various
            colleges that are available in India. With just a one simple click
            on admizz.com , students can get detailed information about
            universities and courses in India. It provides varieties of services
            to students to help pursue their further studies.
          </div>
        </div>
        <div className="merti__right__inner">
          <div className="merit__thumbnail">
            <img src="/admiz.png" alt="admiz" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Merits };
