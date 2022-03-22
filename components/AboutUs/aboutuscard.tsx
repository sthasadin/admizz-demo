import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTestimonialUniversity } from "../../store/Action/testimonial.actions";
import Slider from "react-slick";


const AboutusCard = () => {
  const dispatch = useDispatch();

  const { universityTestimonial } = useSelector(
    (state: any) => state.testimonial
  );
  useEffect(() => {
    console.log("universityTestimonial",universityTestimonial);
    dispatch(getTestimonialUniversity());
  }, [dispatch]);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          width: 56,
          height: 56,
          backgroundImage: `url(sidearrow.png)`,
          borderRadius: 10,

        }}  
        onClick={onClick}>
      </div>

    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          // display: "block",
          width: 56,
          height: 56,
          backgroundImage: `url(sidearrowL.png)`,
          borderRadius: 10,

        }}
        onClick={onClick}
      ></div>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (

    <div>
         <Slider {...settings}>
           {universityTestimonial.lenght ? universityTestimonial?.map((item)=>{
          <div>
            <h3>{item.designation}</h3>
          </div>
           }) : <div>
           <h3>NO slides</h3>
         </div>}
         
        </Slider>

    </div>
  );
};
export { AboutusCard };
