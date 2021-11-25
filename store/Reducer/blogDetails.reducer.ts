import { GET_Blog_Detail } from "../const";


const inititalState = {
  blog: {},

};

const BlogReducer = (state = inititalState, { type, payload }) => {
  switch (type) {
    case GET_Blog_Detail:
      return {
        ...state,
        blog: payload,
      };
    default:
      return state;
  }
};

export default BlogReducer;
