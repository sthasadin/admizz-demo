import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialData from "./TestimonialData";

const index = ({ data }) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", zIndex: 1 }}
        onClick={onClick}
      >
        <img
          src="./right-side-arrow.png"
          alt=".."
          style={{ marginLeft: "-30px" }}
        />
      </div>
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", zIndex: 1 }}
        onClick={onClick}
      >
        <img
          src="./left-side-arrow.png"
          alt=".."
          style={{ marginLeft: "15px", zIndex: 10 }}
        />
      </div>
    );
  }
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: "college-list-slider",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {data &&
          data.map((testimonial, index) => {
            return (
              <div style={{ display: "none" }}>
                <TestimonialData data={testimonial} key={index} />
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default index;
