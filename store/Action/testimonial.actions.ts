import { db } from "../../firebase";
import { TESTIMONIAL_TYPES } from "../const";
import { Dispatch } from "redux";

export const getTestimonial = () => async (dispatch) => {
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

export const getTestimonialYear = () => {
  return async (dispatch:Dispatch) => {
    try{
      const response = await db
      .collection("testimonial")
      .orderBy('year')
      .limit(4)
      .get();
      const testimonial:any=[];
      response.forEach((doc:any) =>{
        testimonial.push({
          id:doc.id,
          ...doc.data(),
        });
      });
      dispatch({
        type:TESTIMONIAL_TYPES.GET_YEAR_LIST,
        payload:testimonial,
      });      
    } catch (err:any){
      console.log(err);
    }
  }
}
