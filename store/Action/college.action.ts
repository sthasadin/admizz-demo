import { Dispatch } from "react-redux";
import { COLLEGE_TYPES, SUCCESS, COLLEGES_TYPES, COLLEGE_BY_LIMIT_BEGIN, COLLEGE_BY_FILTER, COLLEGE_BY_LIMIT, COLLEGE_BY_SEARCH } from "../const";
import { finish, init, success, error } from "../commonActions";
import { CollegeService } from "../api/collegeApi";

const collegeService = new CollegeService();
export const getColleges = () => async (dispatch: Dispatch) => {
  dispatch(init(COLLEGES_TYPES.GET_COLLEGES));
  const response = await collegeService.getColleges();
  dispatch(finish(COLLEGES_TYPES.GET_COLLEGES));

  if (response.isSuccess) {
    dispatch(success(COLLEGES_TYPES.GET_COLLEGES, response.data));
  } else if (!response.isSuccess) {
    dispatch(error(response.errorMessage));
  }
};

export const getCollege = (college_slug) => async (dispatch: Dispatch) => {
  dispatch(init(COLLEGE_TYPES.GET_COLLEGE));

  const response: any = await collegeService.getCollege(college_slug);


  dispatch(finish(COLLEGE_TYPES.GET_COLLEGE));

  if (response.isSuccess) {
    dispatch(success(COLLEGE_TYPES.GET_COLLEGE, response.data));
  } else if (!response.isSuccess) {
    dispatch(error(response.errorMessage));
  }
};

export const getCollegesByStream = (stream) => async (dispatch: Dispatch) => {
  dispatch(init(COLLEGES_TYPES.GET_COLLEGES));
  const response = await collegeService.getCollegesByStream(stream);
  dispatch(finish(COLLEGES_TYPES.GET_COLLEGES));

  if (response.isSuccess) {
    dispatch(success(COLLEGES_TYPES.GET_COLLEGES, response.data));
  } else if (!response.isSuccess) {
    dispatch(error(response.errorMessage));
  }
};

export const getCollegesByCity = (stream) => async (dispatch: Dispatch) => {
  dispatch(init(COLLEGES_TYPES.GET_COLLEGES));
  const response = await collegeService.getCollegesByCity(stream);
  dispatch(finish(COLLEGES_TYPES.GET_COLLEGES));

  if (response.isSuccess) {
    dispatch(success(COLLEGES_TYPES.GET_COLLEGES, response.data));
  } else if (!response.isSuccess) {
    dispatch(error(response.errorMessage));
  }
};

export const getCollegeFilter = (filterType) => async (dispatch: Dispatch) => {
  dispatch(init(COLLEGES_TYPES.GET_COLLEGES));
  const response = await collegeService.getFilterList(filterType);
  dispatch(finish(COLLEGES_TYPES.GET_COLLEGES));

  if (response.isSuccess) {
    dispatch(success(COLLEGES_TYPES.GET_COLLEGES, response.data));
  } else if (!response.isSuccess) {
    dispatch(error(response.errorMessage));
  }
}

export const getCollegeByLimit = (limit) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: COLLEGE_BY_LIMIT_BEGIN
    })
    const res = await collegeService.getCollegeByLimit(limit)
    dispatch({
      type: COLLEGE_BY_LIMIT,
      payload: res.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const getCollegeByFilter = (filter) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: COLLEGE_BY_LIMIT_BEGIN
    })

    const res = await collegeService.getCollegeByFilter(filter)
    dispatch({
      type: COLLEGE_BY_FILTER,
      payload: res.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const getCollegeBySearch = (text) => async (dispatch) => {
  try {
    dispatch({
      type: COLLEGE_BY_LIMIT_BEGIN
    })
    const res = await collegeService.getCollegeBySearch(text);
    dispatch({
      type: COLLEGE_BY_SEARCH,
      payload: res.data
    })
  } catch (error) {
    console.log(error)
  }
}



