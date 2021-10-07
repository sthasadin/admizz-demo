import axios from "axios";
import { Dispatch } from "react-redux";
import {
  GET_COUNTY_LIST_BEGIN,
  GET_COUNTRY_LIST,
  GET_PROGRAM_NAME,
  GET_COURSE_LEVEL_LIST_BEGIN,
  GET_COURSE_LEVEL_LIST,
  GET_STATE_LIST_BEGIN,
  GET_STATE_LIST,
  GET_CITY_LIST_BEGIN,
  GET_CITY_LIST,
  TOTAL_COLLEGE,
  GET_COURSE_LEVEL,
} from "../const";
import { API_BASE_URL } from "../const";

export const getCountryList = (country: any) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: GET_COUNTY_LIST_BEGIN,
    });
    const res = await axios.post(`${API_BASE_URL}/college/list`, country);

    dispatch({
      type: GET_COUNTRY_LIST,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getStateList = (state) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: GET_STATE_LIST_BEGIN,
    });
    const res = await axios.post(`${API_BASE_URL}/college/list`, state);
    dispatch({
      type: GET_STATE_LIST,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCityList = (city) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: GET_CITY_LIST_BEGIN,
    });
    const res = await axios.post(`${API_BASE_URL}/college/list`, city);
    dispatch({
      type: GET_CITY_LIST,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getTotalCollegeCount = () => async (dispatch: Dispatch) => {
  try {
    const res = await axios.get(`${API_BASE_URL}/college/getCollegeCount`);
    dispatch({
      type: TOTAL_COLLEGE,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCourseLevel = (level) => async (dispatch: Dispatch) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/college/list`, level);
    dispatch({
      type: GET_COURSE_LEVEL,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getProgramName = (program) => async (dispatch: Dispatch) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/college/list`, program);
    dispatch({
      type: GET_PROGRAM_NAME,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
