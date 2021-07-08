export const API_BASE_URL = process.env.NEXT_PUBLIC_SERVER_BASE_URL

// alert
export const GLOBAL_ERROR = "GLOBAL_ERROR";
export const SUCCESS = "SUCCESS";

//blog
export const BLOGS_TYPES = {
  GET_BLOGS : "GET_BLOGS",
  GET_BLOGS_INIT: "GET_BLOGS_INIT",
  GET_BLOGS_FINISH: "GET_BLOGS_FINISH",
};
export const BLOG_TYPES = {
  GET_BLOG : "GET_BLOG",
  GET_BLOG_INIT: "GET_BLOG_INIT",
  GET_BLOG_FINISH: "GET_BLOG_FINISH",
};

export const GET_COLLEGE_NEWS="GET_COLLEGE_NEWS";

//college
export const COLLEGES_TYPES = {
  GET_COLLEGES : "GET_COLLEGES",
  GET_COLLEGES_INIT: "GET_COLLEGES_INIT",
  GET_COLLEGES_FINISH: "GET_COLLEGES_FINISH",
};
export const COLLEGE_TYPES = {
  GET_COLLEGE : "GET_COLLEGE",
  GET_COLLEGE_INIT: "GET_COLLEGE_INIT",
  GET_COLLEGE_FINISH: "GET_COLLEGE_FINISH",
};

export const BLOG_COMMENT_TYPE = {
  GET_BLOG_COMMENT : 'GET_BLOG_COMMENT',
  GET_BLOG_COMMENT_INIT : 'GET_BLOG_COMMENT_INIT',
  GET_BLOG_COMMENT_FINISH : 'GET_BLOG_COMMENT_FINISH',
}

export const GET_COLLAGE_DETAIL = 'GET_COLLAGE_DETAIL'
export const GET_ALL_BLOG = 'GET_ALL_BLOG'
export const GET_Blog_Detail = 'GET_Blog_Detail'
export const GET_ALL_COLLAGE = 'GET_ALL_COLLAGE'

//user
export const GET_AUTH_USER = 'GET_AUTH_USER'

//application
export const GET_APPLICATION = 'GET_APPLICATION'
export const UPDATE_APPLICATION = 'UPDATE_APPLICATION'


//courses
export const GET_LEVELS = 'GET_LEVELS'
export const GET_STREAMS = 'GET_STREAMS'
export const GET_PROGRAMS = 'GET_PROGRAMS'
export const GET_CHOICE_COLLEGES = 'GET_CHOICE_COLLEGES'
