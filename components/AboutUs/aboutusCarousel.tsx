// import React,{useEffect,useState} from "react";
// import { AboutusCard } from "./aboutuscard";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { CollegesCard } from "../collegesBlock/collegesCard";
// import { useDispatch, useSelector } from "react-redux";
// import { getTestimonialUniversity } from "../../store/Action/testimonial.actions";

// const index = ({ data }) => {
//   const dispatch = useDispatch();
//   const { universityTestimonial } = useSelector(
//     (state: any) => state.testimonial
//   );
//   useEffect(() => {
//     dispatch(getTestimonialUniversity());
//   }, [dispatch]);

//   function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", zIndex: 1 }}
//         onClick={onClick}
//       >
//         <img
//           src="./right-side-arrow.png"
//           alt=".."
//           style={{ marginLeft: "-30px" }}
//         />
//       </div>
//     );
//   }
//   function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", zIndex: 1 }}
//         onClick={onClick}
//       >
//         <img
//           src="./sideArrow-left.png"
//           alt=".."
//           style={{ marginLeft: "15px", zIndex: 10 }}
//         />
//       </div>
//     );
//   }
//   const settings = {
//     dots: true,
//     infinite: false,
//     dotsClass: "rounded-scroll slick-thumb",
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     className: "college-list-slider",
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,

//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           dots: true,
//           nextArrow: false,
//           prevArrow: false,
//         },
//       },
//     ],
//   };
//   return (
//     <div>
//       <Slider {...settings}>
     
//           {universityTestimonial?.map((data,i) =>{
//             return(
//               <div>
//                 <AboutusCard  {...universityTestimonial} key={index}/>
//               </div>
//             )
//           })}
          
//       </Slider>
//     </div>
//   );
// };

// export default index;

import React from 'react'
import Slider from 'react-slick';
const index = ({ data }) => {  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
return(
  
  <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div  className="about-us_Container">
            <h3>1</h3>
          </div>
          <div  className="about-us_Container">
            <h3>2</h3>
          </div>
          <div  className="about-us_Container">
            <h3>3</h3>
          </div>
          {/* <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div> */}
        </Slider>
      </div>
)
}

export default index;


