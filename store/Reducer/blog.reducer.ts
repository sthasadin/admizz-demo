import {
  BLOGS_TYPES,
  BLOG_TYPES,
  COMMENT_TYPES,
  GET_COLLEGE_NEWS,
} from "../const";

const initialState = {
  blog: {},
  blogs: [],
  multiLoading: false,
  singleLoading: false,
  collegeNews: [],
  comments: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_COLLEGE_NEWS:
      return {
        ...state,
        collegeNews: payload,
      };
    case BLOGS_TYPES.GET_BLOGS:
      return {
        ...state,
        blogs: payload,
      };
    case BLOG_TYPES.GET_BLOG:
      return {
        ...state,
        blog: payload,
        singleLoading: false,
      };
    case BLOGS_TYPES.GET_BLOGS_INIT:
      return {
        ...state,
        multiLoading: true,
      };
    case BLOGS_TYPES.GET_BLOGS_FINISH:
      return {
        ...state,
        multiLoading: false,
      };
    case BLOG_TYPES.GET_BLOG_FINISH:
      return {
        ...state,
        singleLoading: false,
      };
    case BLOG_TYPES.GET_BLOG_INIT:
      return {
        ...state,
        singleLoading: true,
        blog: {},
      };
    case COMMENT_TYPES.GET_COMMENT:
      return {
        ...state,
        comments: payload,
      };
    default:
      return state;
  }
};
