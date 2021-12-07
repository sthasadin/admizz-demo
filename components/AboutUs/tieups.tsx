import React from "react";
import Link from "next/link";

const tieups = () => {
    return (
        <div className="our-exclusive-container">
            <div className="our-exclusive-content">
              <div className="our-trusted-text">our trusted partner</div>
              <div className="our-exclusive-title">Our Exclusive Tie-Ups</div>
              <div className="university-list">
                {/* {college &&
                  college?.map((college) => { */}
                    {/* return ( */}
                      <div>
                        <div className="university-icon">
                          <img src="jio.png" />
                        </div>
                        <Link href="#">
                          <div className="university-name">Jain University</div>
                        </Link>
                      </div>
                      <div>
                        <div className="university-icon">
                          <img src="jio.png" />
                        </div>
                        <Link href="#">
                          <div className="university-name">Jain University</div>
                        </Link>
                      </div>
                    {/* ); */}
                  {/* })} */}
              </div>
            </div>
        </div>
    )

}

export default tieups;
