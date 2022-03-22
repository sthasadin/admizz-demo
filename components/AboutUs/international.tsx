import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTestimonialUniversity } from "../../store/Action/testimonial.actions";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LeftOne, RightOne } from "@icon-park/react";
import  {AboutusCard } from "./aboutuscard";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background:
      "#FFAD32", }}
      onClick={onClick}
    >
      <RightOne theme="outline" size="40" fill="#fff" strokeWidth={2}/>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background:
      "#FFAD32" }}
      onClick={onClick}
    >
      <LeftOne theme="outline" size="40" fill="#fff" strokeWidth={2}/>
      </div>
  );
}

const international = ({data}) => {
  const dispatch = useDispatch();
  useState;
  const { universityTestimonial } = useSelector(
    (state: any) => state.testimonial
  );
  console.log("logss", universityTestimonial);
  useEffect(() => {
    console.log("go inside this", universityTestimonial);
    dispatch(getTestimonialUniversity());
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
          We Have Served Student’s From 50+ Countries
        </div>
        <div className="international-map">
          <img src="grey-world-map.png" alt="" />
        </div>
      </div>
      <div className="aboutus-testimonial">
        <div className="testimonial-exclusive-content">
          <div className="our-trusted-text">TESTIMONIALS</div>
          <div className="aboutus-exclusive-title">
            What our universities are saying about us.
          </div>
          <div className="aboutus-testimonial-wrapper">
            <Slider {...settings}>
              <AboutusCard data ={universityTestimonial} />
              {/* <AboutusCard />
              <AboutusCard />
              <AboutusCard />
              <AboutusCard />
              <AboutusCard />
              <AboutusCard /> */}
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
    
//   );
// };

