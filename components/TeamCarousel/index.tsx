import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TeamCard } from "./TeamCard";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

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
          className: "center",
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          className: "center",
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: null,
          nextArrow: null,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {data &&
        data.slice(0, 6).map((data) => {
          return <TeamCard teamMember={data} />;
        })}
    </Slider>
  );
};

export default index;