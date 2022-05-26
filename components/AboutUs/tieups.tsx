import React from "react";
import Link from "next/link";
// import kiitlogo from "public/public/colleges-logo.png";

const tieups = ({ college }) => {
  return (
    <div className="our-exclusive-container">
      <div className="our-exclusive-contents">
        <div className="our-trusted-texts">our trusted partner</div>
        <div className="our-exclusive-title">Our Exclusive Tie-Ups</div>
        <div className="university-list">
        
          {college &&
              college?.map((college) => {
                return (
                  <div>
                    <div className="university-icon">
                      <img src={college?.college_logo} />
                    </div>
                    <Link href={`colleges/${college?.college_slug}`}>
                      <div className="university-name">{college?.name}</div>
                    </Link>
                  </div>
                );
              })}
        </div>

      
      </div>
    </div>
  );
};

export default tieups;
