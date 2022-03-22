import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTestimonialUniversity } from "../../store/Action/testimonial.actions";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}


const international = () => {
  const dispatch = useDispatch();
  useState
  const { universityTestimonial } = useSelector(
    (state: any) => state.testimonial
  );
  console.log("logss", universityTestimonial);
  useEffect(() => {
    console.log("go inside this",universityTestimonial);
    dispatch(getTestimonialUniversity());
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
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
         
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
            {universityTestimonial?.map((data, i) => {
              return (
                <div className="aboutus-testimonial-content">
                 {data.designation}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default international;