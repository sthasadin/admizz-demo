import React from "react";
import collaboration from "../../public/collaboration.png";
import collaboration1 from "../../public/collaboration1.png";
import collaboration2 from "../../public/collaboration2.png";
import collaboration3 from "../../public/collaboration3.png";

const InternationalCollaboration = (props: any) => {
  return (
    <div className="international-collaboration">
      <div className="international-collaboration__inner">
        <div className="sidebar__title">International Collaboration</div>
        <div className="international-collaboration__list">
          <div className="international-collaboration__item">
            <div className="international-collaboration__thumbnail">
              <img src={collaboration} alt="" />
            </div>
            <div className="international-collaboration__label">
              JIT University
            </div>
          </div>
          <div className="international-collaboration__item">
            <div className="international-collaboration__thumbnail">
              <img src={collaboration1} alt="" />
            </div>
            <div className="international-collaboration__label">
              KIIT University
            </div>
          </div>
          <div className="international-collaboration__item">
            <div className="international-collaboration__thumbnail">
              <img src={collaboration2} alt="" />
            </div>
            <div className="international-collaboration__label">
              ISM University
            </div>
          </div>
          <div className="international-collaboration__item">
            <div className="international-collaboration__thumbnail">
              <img src={collaboration3} alt="" />
            </div>
            <div className="international-collaboration__label">
              Banglore University
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalCollaboration;
