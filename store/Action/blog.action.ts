import { Dispatch } from "redux";
import { BLOGS_TYPES, BLOG_TYPES, GET_COLLEGE_NEWS } from "../const";
import { finish, init, success, error } from "../commonActions";
import { BlogService } from "../api/blogApi";
import { db } from "../../firebase";

const blogService = new BlogService();
export const getBlogs = (blog_category) => async (dispatch: Dispatch) => {
  dispatch(init(BLOGS_TYPES.GET_BLOGS));
  const response = await blogService.getBlogs(blog_category);
  dispatch(finish(BLOGS_TYPES.GET_BLOGS));

  if (response.isSuccess) {
    dispatch(success(BLOGS_TYPES.GET_BLOGS, response.data));
  } else if (!response.isSuccess) {
    dispatch(error(response.errorMessage));
  }
};

export const getBlog = (blog_slug) => async (dispatch: Dispatch) => {
  dispatch(init(BLOG_TYPES.GET_BLOG));

  const response: any = await blogService.getBlog(blog_slug);
  dispatch(finish(BLOG_TYPES.GET_BLOG));

  if (response.isSuccess) {
    dispatch(success(BLOG_TYPES.GET_BLOG, response.data));
  } else if (!response.isSuccess) {
    dispatch(error(response.errorMessage));
  }
};

export const getNewsOfCollege =
  (college_slug) => async (dispatch: Dispatch) => {
    const response: any = await blogService.getNewsOfCollege(college_slug);
    if (response.isSuccess) {
      dispatch(success(GET_COLLEGE_NEWS, response.data));
    } else if (!response.isSuccess) {
      dispatch(error(response.errorMessage));
    }
  };

export const addBlogComment = (comments: any) => async (dispatch: Dispatch) => {
  try {
    await db.collection("comment").add(comments);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
