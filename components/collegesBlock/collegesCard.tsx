import React from "react";
import { CollegeCourse } from "./collegeCourse";
import { useRouter } from 'next/router'

const CollegesCard = () => {
  const router = useRouter();
  return (
    <div className="colleges-card" onClick={() => router.push('/collegeprofile')}>
      <div className="colleges-card__inner">
        <div className="colleges-card__thumbnail">
          <img src="/colleges.png" alt="college" />
          <div className="colleges-card__title-wrap">
            <div className="colleges-card__title">
              BMS College of Engineering (BMSCE)
            </div>
            <div className="colleges-card__location">Bangalore</div>
          </div>
        </div>
        <div className="colleges-card__details">
          <div className="colleges-card__top">
            <div className="colleges-card__key-value-wrap">
              <div className="colleges-card__key-value">
                <div className="colleges-card__key">ESTD:</div>
                <div className="colleges-card__value">1995</div>
              </div>
              <div className="colleges-card__key-value">
                <div className="colleges-card__key">Type:</div>
                <div className="colleges-card__value">Private</div>
              </div>
            </div>
            <div className="colleges-card__logo">
              <img src="/college-logo.png" alt="" />
            </div>
          </div>
          <div className="colleges-card__bottom">
            <div className="colleges-card__key-value-wrap lg">
              <div className="colleges-card__key-value lg">
                <div className="colleges-card__key lg">Total Course:</div>
                <div className="colleges-card__value lg">500+</div>
              </div>
              <div className="colleges-card__key-value lg">
                <div className="colleges-card__key lg">Total students:</div>
                <div className="colleges-card__value lg">50K+</div>
              </div>
            </div>
            <div className="colleges-card__course">
              <CollegeCourse />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CollegesCard };
