import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CollegesCard } from "../collegesBlock/collegesCard";
import rightSideArrow from "../../public/right-side-arrow.png";
import leftSideArrow from "../../public/left-side-arrow.png";

const index = ({ data }) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", zIndex: 1 }}
        onClick={onClick}
      >
        <img src={rightSideArrow} alt=".." style={{ marginLeft: "-30px" }} />
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
          src={leftSideArrow}
          alt=".."
          style={{ marginLeft: "3px", zIndex: 10 }}
        />
      </div>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    dotsClass: "rounded-scroll rounded-program-college slick-thumb",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "program-college-list-slider",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {data &&
          data.map((college, index) => {
            return (
              <div style={{ display: "none" }}>
                <CollegesCard {...college} key={index} />
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default index;
