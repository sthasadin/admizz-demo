import { FAQService } from "../api/faqApi";
import { Dispatch } from "redux";
import { FAQ_TYPES } from "../const";
import { finish, init, success, error } from "../commonActions";
const faqService = new FAQService();

export const addFaq = (faq) => async (dispatch: Dispatch) => {
  const response = await faqService.addFaq(faq);
  if (response.isSuccess) {
    return true;
  } else if (!response.isSuccess) {
    return false;
  }
};

export const updateFaq = (id, faq) => async (dispatch: Dispatch) => {
  const response = await faqService.updateFaq(id, faq);
  if (response.isSuccess) {
    return true;
  } else if (!response.isSuccess) {
    return false;
  }
};

export const deleteFaq = (id) => async (dispatch: Dispatch) => {
  const response = await faqService.deleteFaq(id);
  if (response.isSuccess) {
    return true;
  } else if (!response.isSuccess) {
    return false;
  }
};

export const getFaq = () => async (dispatch: Dispatch) => {
  dispatch(init(FAQ_TYPES.GET_FAQS));
  const response = await faqService.getFaqs();
  dispatch(finish(FAQ_TYPES.GET_FAQS));
  if (response.isSuccess) {
    dispatch(success(FAQ_TYPES.GET_FAQS, response.data));
  } else if (!response.isSuccess) {
    dispatch(error(response.errorMessage));
  }
};

export const getSearchFaq = (query) => async (dispatch: Dispatch) => {
  console.log({ query });

  dispatch(init(FAQ_TYPES.GET_FAQS));
  const response = await faqService.getSearchFaqs(query);
  console.log({ response });
  dispatch(finish(FAQ_TYPES.GET_FAQS));
  if (response.isSuccess) {
    dispatch(success(FAQ_TYPES.GET_FAQS, response.data));
  } else if (!response.isSuccess) {
    dispatch(error(response.errorMessage));
  }
};
