import { db } from "../../firebase";
import { TESTIMONIAL_TYPES } from "../const";
import { Dispatch } from "redux";
import { TestimonialService } from "../api/testimonialApi";

const testimonialService = new TestimonialService();
export const getStudentTestimonial = () => async (dispatch:Dispatch) =>{
  const response = await testimonialService.getTestimonial();
  if(response.isSuccess){
    return true;
  }else if(!response.isSuccess){
    return false;
  }
}


export const getTestimonials = () => async (dispatch) => {
  let testimonial = [];
  try {
    let querySnapshot = await db
      .collection("testimonial")
      .where("designation", "==", "student")
      .get();

    querySnapshot.forEach(function (doc) {
      const data = doc.data();
      data.id = doc.id;
      testimonial.push(data);
    });
    return testimonial;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const getTestimonial = () => async (dispatch) => {
  let testimonial = [];
  try {
    let querySnapshot = await db
      .collection("testimonial")
      .where("designation", "==", "student")
      .orderBy("year")
      .get();

    querySnapshot.forEach(function (doc) {
      const data = doc.data();
      data.id = doc.id;
      testimonial.push(data);
    });
    return testimonial;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getTestimonialStudent = (setYears, setDefault, setpagination) => {
  return async (dispatch: Dispatch) => {
 
    try {
      const response = await db
        .collection("testimonial")
        .where("designation", "==", "student")
        .orderBy("year")
        //  .isEqual(setYears)
        .limit(setpagination)
        .get();

      const testimonial: any = [];
      response.forEach((doc: any) => {
        testimonial.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      dispatch({
        type: TESTIMONIAL_TYPES.GET_STUDENT_TESTIMONIAL,
        payload: testimonial,
      });
    } catch (err: any) {
      console.log(err);
    }
  };
};

export const getTestimonialUniversity = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await db
        .collection("testimonial")
        .where("designation", "==", "university")
        .get();
      const testimonial: any = [];
      response.forEach((doc: any) => {
        testimonial.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      dispatch({
        type: TESTIMONIAL_TYPES.GET_TESTIMONIAL,
        payload: testimonial,
      });
    } catch (err: any) {
      console.log(err);
    }
  };
};
