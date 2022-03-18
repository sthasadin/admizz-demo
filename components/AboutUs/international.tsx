import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTestimonialUniversity } from "../../store/Action/testimonial.actions";

const international = () => {
  const dispatch = useDispatch();

  const { universityTestimonial } = useSelector(
    (state: any) => state.testimonial
  );
  console.log("logss", universityTestimonial);
  useEffect(() => {
    dispatch(getTestimonialUniversity());
  }, [dispatch]);

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
