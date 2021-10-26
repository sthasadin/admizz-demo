import { Dispatch } from "react-redux";
import { api } from "../api/api";
import { GET_ALL_COLLAGE } from "../const";

export const getAllCollegeList = () => async (dispatch: Dispatch) => {
  api
    .get("/college")
    .then((res) => {
      dispatch({ type: GET_ALL_COLLAGE, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
