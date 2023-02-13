import { GET_TOP_COLLEGES_TYPES, GET_TOP_COURSES_TYPES } from "../const";

const initialState = {
  topColleges: [],
  topCollegesLoader: false,
  topCourses: [],
  topCoursesLoader: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TOP_COLLEGES_TYPES.TOP_COLLEGES_BEGIN:
      return {
        ...state,
        topCollegesLoader: true,
      };
    case GET_TOP_COLLEGES_TYPES.GET_TOP_COLLEGES:
      return {
        ...state,
        topColleges: payload,
      };
    case GET_TOP_COURSES_TYPES.TOP_COURSES_BEGIN:
      return {
        ...state,
        topCoursesLoader: true,
      };
    case GET_TOP_COURSES_TYPES.GET_TOP_COURSES:
      return {
        ...state,
        topCourses: payload,
      };
    default:
      return state;
  }
};
