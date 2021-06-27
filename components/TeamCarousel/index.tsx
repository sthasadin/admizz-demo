import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TeamCard } from "./TeamCard";

const index = ({ data }) => {
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
          style={{ marginLeft: "5px", zIndex: 10 }}
        />
      </div>
    );
  }
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
          style={{ marginLeft: "-22px" }}
        />
      </div>
    );
  }
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={data[i].image} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-thumb custom-pagination-team-member",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };
  return (
    <Slider {...settings}>
      {data &&
        data.map((data) => {
          return <TeamCard showClickedMember={data} />;
        })}
    </Slider>
  );
};

export default index;
