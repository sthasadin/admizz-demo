import { GET_APPLICATION } from "../const";

const initialState = {
  application: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_APPLICATION:
      return {
        application: payload,
      };
    default:
      return state;
  }
};
