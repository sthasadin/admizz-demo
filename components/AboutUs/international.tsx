import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUniversityTestimonials } from "../../store/Action/testimonial.actions";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LeftOne, RightOne } from "@icon-park/react";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style, display: "block", background:
          "#FFAD32",
      }}
      onClick={onClick}
    >
      <RightOne theme="outline" size="40" fill="#fff" strokeWidth={2} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style, display: "block", background:
          "#FFAD32"
      }}
      onClick={onClick}
    >
      <LeftOne theme="outline" size="40" fill="#fff" strokeWidth={2} />
    </div>
  );
}

const international = () => {
  const dispatch = useDispatch();
  useState;
  const { universityTestimonial } = useSelector(
    (state: any) => state.testimonial
  );
  useEffect(() => {
    dispatch(getUniversityTestimonials());
  }, [dispatch]);

  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="our-exclusive-container">
      <div className="aboutus-exclusive-content">
        <div className="our-trusted-text">We are international</div>
        <div className="aboutus-exclusive-title">
          We Have Served Students From 50+ Countries
        </div>
        <div className="international-map">
          <img src="grey-world-map.png" alt="" />
        </div>
      </div>
      <div className="aboutus-testimonial">
        <div className="testimonial-exclusive-content">
          <div className="our-trusted-text">TESTIMONIALS</div>
          <div className="aboutus-exclusive-title">
            What our universities and institutions have to say about us.
          </div>
          <div className="aboutus-testimonial-wrapper">

            <Slider {...settings}>
              {/* <AboutusCard data={universityTestimonial} /> */}

              {universityTestimonial?.map((item) => {
                return (
                  <div>
                    <div className="about-us__card">
                      <blockquote>
                        <p>

                          {item?.description}
                        </p>{" "}
                      </blockquote>
                    </div>
                    <div className="about-us__cardImage">
                      {/* <Image width={70} height={70} src='/colleges-logo.png' /> */}
                      <img 
                      src={item?.image}
                      style={{objectFit:'cover',
                    height:80,width:80,borderRadius:'50%',borderColor:'#E0E0E0'}}
                      />
                      <p>{item?.name}</p>
                    </div>
                  </div>


                )
              })

              }
              </Slider>
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default international;

// const Card = () => {
//   return (
//     <>
//     <div className="about-us__card">
//       <blockquote>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu turpis
//           pulvinar justo dictum blandit eget vel diam. Morbi ornare vulputate
//           nulla, non vestibulum nisi. Sed eu turpis pulvinar justo dictum
//           blandit eget vel diam. Morbi ornare vulputate nulla, non vestibulum
//           nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
//           turpis pulvinar justo dictum blandit eget vel diam. Morbi ornare
//           vulputate nulla, non vestibulum nisi. Lorem ipsum dolor sit amet,
//           consectetur adipiscing elit.{" "}
//         </p>{" "}
//       </blockquote>
//     </div>
//       <div className="about-us__cardImage">
//         <Image width={70} height={70} src='/colleges-logo.png' />
//         <p>Kalinga Institute of Industrial Technology</p>
//       </div>

//     </>
//   );
// };