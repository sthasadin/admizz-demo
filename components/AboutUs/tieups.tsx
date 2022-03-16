import React from "react";
import Link from "next/link";


const tieups = ({college}) => {
    return (
        // <div className="our-exclusive-container">
        //     <div className="aboutus-exclusive-content">
        //       <div className="our-trusted-text">our trusted partner</div>
        //       <div className="our-exclusive-title">Our Exclusive Tie-Ups</div>
        //       <div className="aboutus-university-list">
        //         {/* {college &&
        //           college?.map((college) => { */}
        //             {/* return ( */}
        //               <div>
        //                 <div className="university-icon">
        //                   <img src="jain.png" />
        //                 </div>
        //                 <Link href="#">
        //                   <div className="university-name">Jain University</div>
        //                 </Link>
        //               </div>
        //               <div>
        //                 <div className="university-icon">
        //                   <img src="kiit.png" />
        //                 </div>
        //                 <Link href="#">
        //                   <div className="university-name">Kalinga Institute of Technology</div>
        //                 </Link>
        //               </div>
        //               <div>
        //                 <div className="university-icon">
        //                   <img src="jain.png" />
        //                 </div>
        //                 <Link href="#">
        //                   <div className="university-name">Jain University</div>
        //                 </Link>
        //               </div>
        //               <div>
        //                 <div className="university-icon">
        //                   <img src="kiit.png" />
        //                 </div>
        //                 <Link href="#">
        //                   <div className="university-name">Kalinga Institute of Technology</div>
        //                 </Link>
        //               </div>
        //               <div>
        //                 <div className="university-icon">
        //                   <img src="jain.png" />
        //                 </div>
        //                 <Link href="#">
        //                   <div className="university-name">Jain University</div>
        //                 </Link>
        //               </div>
        //             {/* ); */}
        //           {/* })} */}
        //       </div>
        //     </div>
        // </div>

        <div className="our-exclusive-container">
        <div className="our-exclusive-content">
          <div className="our-trusted-text">our trusted partner</div>
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
    )

}

export default tieups;
