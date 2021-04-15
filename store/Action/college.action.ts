import { Dispatch } from "react-redux";
import { COLLEGE_TYPES, SUCCESS, COLLEGES_TYPES} from "../const";
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

  const response:any = await collegeService.getCollege(college_slug);


  dispatch(finish(COLLEGE_TYPES.GET_COLLEGE));

  if (response.isSuccess) {
    dispatch(success(COLLEGE_TYPES.GET_COLLEGE, response.data));
  } else if (!response.isSuccess) {
    dispatch(error(response.errorMessage));
  }
};