import { api } from "../api/api";
import { Dispatch } from 'react-redux';
import { GET_Blog_Detail } from "../const";

export const getBlogDetail = (id) => async (dispatch: Dispatch) => {
  api.get(`/blogs/getOneBlog/?id=${id}`)
    .then((res) => {
      dispatch({ type: GET_Blog_Detail, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
