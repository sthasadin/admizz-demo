import {
  GET_LEVELS,
  GET_STREAMS,
  GET_PROGRAMS,
  GET_CHOICE_COLLEGES,
} from "../const";

const inititalState = {
  allLevels: [],
  selectedLevel: {},
  allStreams: [],
  allPrograms: [],
  allColleges: [],
  appliedColleges: [],
};

const userReducer = (state = inititalState, { type, payload }) => {
  switch (type) {
    case GET_LEVELS:
      return {
        ...state,
        allLevels: payload,
      };
    case GET_STREAMS:
      return {
        ...state,
        allStreams: payload,
      };
    case GET_PROGRAMS:
      return {
        ...state,
        allPrograms: payload,
      };
    case GET_CHOICE_COLLEGES:
      return {
        ...state,
        allColleges: payload,
      };
    case "SELECTED_LEVEL":
      return {
        ...state,
        selectedLevel: payload,
      };
    case "SAVE_APPLIED_COLLEGES":
      return {
        ...state,
        appliedColleges: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
