import { db } from "../../firebase";
import { TESTIMONIAL_TYPES } from "../const";
import { Dispatch } from "redux";
import { TestimonialService } from "../api/testimonialApi";


const testimonialService = new TestimonialService();
export const getStudentTestimonials = (setYears,setDefault,setpagination) => async (dispatch:Dispatch) => {
  const response = await testimonialService.getStudentTestimonial(setYears,setDefault,setpagination);
  if (response.isSuccess) {
    dispatch({
      type:TESTIMONIAL_TYPES.GET_STUDENT_TESTIMONIAL,
      payload:response.data.testimonials
    })
    return response.data;
  } else if (!response.isSuccess) {
   return null;
  }
}
export const getUniversityTestimonials = () => async (dispatch:Dispatch) => {
  const response = await testimonialService.getUniversityTestimonial();

  if (response.isSuccess) {
    dispatch({
      type:TESTIMONIAL_TYPES.GET_UNIVERSITY_TESTIMONIAL,
      payload:response.data.testimonials
    })
    return response.data;
  } else if (!response.isSuccess) {
   return null;
  }
}

