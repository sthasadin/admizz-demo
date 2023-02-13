import { Dispatch } from "redux";
import { api } from "../api/api";
import { GET_ALL_BLOG } from "../const";

export const getAllBLog = () => async (dispatch: Dispatch) => {
  api
    .get("/blogs")
    .then((res) => {
      dispatch({
        type: GET_ALL_BLOG,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
