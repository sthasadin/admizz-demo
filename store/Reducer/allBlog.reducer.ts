import { GET_ALL_BLOG } from "../const";

const initialState = {
  allBlog: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_BLOG:
      return {
        allBlog: payload,
      };
    default:
      return state;
  }
};
