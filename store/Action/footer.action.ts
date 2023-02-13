import { FooterService } from "../api/footerApi";
import { GET_TOP_COLLEGES_TYPES, GET_TOP_COURSES_TYPES } from "../const";

const footerService = new FooterService();
export const addTopColleges = (top_colleges) => async (dispatch) => {
  const res = await footerService.addTopColleges(top_colleges);

  if (res) {
    dispatch(getTopColleges());
    return "succesfully added";
  }
  return "Server Error";
};

export const getTopColleges = () => async (dispatch) => {
  dispatch({
    type: GET_TOP_COLLEGES_TYPES.TOP_COLLEGES_BEGIN,
  });

  const res = await footerService.getTopColleges();
  if (res) {
    dispatch({
      type: GET_TOP_COLLEGES_TYPES.GET_TOP_COLLEGES,
      payload: res.data,
    });
  }
};

export const addTopCourse = (top_courses) => async (dispatch) => {
  const res = await footerService.addTopCourses(top_courses);

  if (res) {
    dispatch(getTopCourses());
    return "succesfully added";
  }
  return "Server Error";
};

export const getTopCourses = () => async (dispatch) => {
  dispatch({
    type: GET_TOP_COURSES_TYPES.TOP_COURSES_BEGIN,
  });

  const res = await footerService.getTopCourses();
  if (res) {
    dispatch({
      type: GET_TOP_COURSES_TYPES.GET_TOP_COURSES,
      payload: res.data,
    });
  }
};
