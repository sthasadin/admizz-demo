import { GET_ALL_COLLAGE } from "../const";

const inititalState = {
  collegeList: [],
};

const collegeReducer = (state = inititalState, { type, payload }) => {
  switch (type) {
    case GET_ALL_COLLAGE:
      return {
        ...state,
        collegeList: payload,
      };
    default:
      return state;
  }
};

export default collegeReducer;
