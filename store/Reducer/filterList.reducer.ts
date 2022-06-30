import {
  GET_COUNTY_LIST_BEGIN,
  GET_COUNTRY_LIST,
  GET_COURSE_LEVEL_LIST_BEGIN,
  GET_COURSE_LEVEL_LIST,
  GET_STATE_LIST_BEGIN,
  GET_STATE_LIST,
  GET_CITY_LIST_BEGIN,
  GET_CITY_LIST,
  GET_COURSE_LEVEL,
  GET_PROGRAM_NAME,
  TOTAL_COLLEGE,
} from "../const";

const inititalState = {
  countryList: [],
  loader: false,
  courseLevelList: [],
  courseLevel: [],
  stateList: [],
  cityList: [],
  programName: [],
  totalCollege:0
};

const userReducer = (state = inititalState, { type, payload }) => {
  switch (type) {
    case GET_COUNTY_LIST_BEGIN:
      return {
        ...state,
        loader: true,
      };
    case GET_COUNTRY_LIST:
      return {
        ...state,
        countryList: payload,
        loader: false,
      };
    case GET_COURSE_LEVEL_LIST_BEGIN:
      return {
        ...state,
        loader: true,
      };
    case GET_COURSE_LEVEL_LIST:
      return {
        ...state,
        courseLevelList: payload,
        loader: false,
      };
    case GET_STATE_LIST_BEGIN:
      return {
        ...state,
        loader: true,
      };
    case GET_STATE_LIST:
      return {
        ...state,
        stateList: payload,
        loader: false,
      };
    case GET_CITY_LIST_BEGIN:
      return {
        ...state,
        loader: true,
      };
    case GET_CITY_LIST:
      return {
        ...state,
        cityList: payload,
        loader: false,
      };
    case GET_COURSE_LEVEL:
      return {
        ...state,
        courseLevel: payload,
      };
    case GET_PROGRAM_NAME:
      return {
        ...state,
        programName: payload,
      };
      case TOTAL_COLLEGE:
        return {
          ...state,
          totalCollege:payload,
        }
    default:
      return state;
  }
};

export default userReducer;

