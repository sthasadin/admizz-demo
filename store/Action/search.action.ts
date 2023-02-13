import { AllSearchService } from "../api/allSearchApi";

const allSearchService = new AllSearchService();
export const searchAllItem = (keyword) => async (dispatch) => {
  try {
    dispatch({
      type: "SEARCH_BEGIN",
    });

    const res = await allSearchService.getAllItem(keyword);
    if (res.isSuccess) {
      dispatch({
        type: "SEARCH_GET_DATA",
        payload: res.data,
      });
    } else {
      dispatch({
        type: "SEARCH_END",
      });
    }
  } catch (error) {
    dispatch({
      type: "SEARCH_END",
    });
    console.log(error);
  }
};
