import { TESTIMONIAL_TYPES } from "../const";

const initialState = {
  universityTestimonial: [],
  universityYear: [],
  studentTestimonial: [],
  totalDocument: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TESTIMONIAL_TYPES.GET_UNIVERSITY_TESTIMONIAL:
      return {
        ...state,
        universityTestimonial: payload,
      };
    case TESTIMONIAL_TYPES.GET_YEAR_LIST:
      return {
        ...state,
        universityYear: payload,
      };
    case TESTIMONIAL_TYPES.GET_STUDENT_TESTIMONIAL:
      return {
        ...state,
        studentTestimonial: payload.testimonials,
        totalDocument: payload.totalDocument,
      };

    default:
      return state;
  }
};
