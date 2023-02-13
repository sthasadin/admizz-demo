import {
  COLLEGES_TYPES,
  COLLEGE_BY_FILTER,
  COLLEGE_TYPES,
  COLLEGE_BY_LIMIT_BEGIN,
  COLLEGE_BY_LIMIT,
  TOTAL_COLLEGE,
  COLLEGE_BY_SEARCH,
} from "../const";

const initialState = {
  college: {},
  colleges: [],
  compareCollege: "",
  multiLoading: false,
  singleLoading: false,
  collegesByLimit: [],
  collegeByLimitLoader: false,
  totalCollegeCount: 0,
  collegeLoading: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  console.log({ action });
  switch (type) {
    case COLLEGE_BY_LIMIT_BEGIN:
      return {
        ...state,
        collegeByLimitLoader: true,
      };

    case COLLEGE_BY_LIMIT:
      return {
        ...state,
        collegesByLimit: [...payload], //...state.collegesByLimit,
        totalCollegeCount: payload.length,
        collegeByLimitLoader: false,
      };

    case COLLEGE_BY_FILTER:
      return {
        ...state,
        collegesByLimit: payload,
        totalCollegeCount: payload.length,
        collegeByLimitLoader: false,
      };
    case COLLEGE_BY_SEARCH:
      return {
        ...state,
        collegesByLimit: payload,
        totalCollegeCount: payload.length,
        collegeByLimitLoader: false,
      };
    case COLLEGES_TYPES.GET_COMPARE_LIST:
      return {
        ...state,
        compareCollege: payload,
      };
    case TOTAL_COLLEGE:
      return {
        ...state,
        totalCollegeCount: payload,
      };

    case COLLEGES_TYPES.GET_COLLEGES:
      return {
        ...state,
        colleges: payload,
      };
    case COLLEGE_TYPES.GET_COLLEGE:
      return {
        ...state,
        college: payload,
        singleLoading: true,
      };
    case COLLEGES_TYPES.GET_COLLEGES_INIT:
      return {
        ...state,
        multiLoading: true,
      };
    case COLLEGES_TYPES.GET_COLLEGES_FINISH:
      return {
        ...state,
        multiLoading: false,
      };
    case COLLEGE_TYPES.GET_COLLEGE_FINISH:
      return {
        ...state,
        singleLoading: false,
      };
    case COLLEGE_TYPES.GET_COLLEGE_INIT:
      return {
        ...state,
        singleLoading: true,
        college: {},
      };

    default:
      return state;
  }
};
