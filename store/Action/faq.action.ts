import { FAQService } from "../api/faqApi";
import { Dispatch } from "redux";
import { GET_FAQ_TYPES } from "../const";


const faqService = new FAQService();


export const getFAQ = () => async (disptach) => {
  disptach({
    type: GET_FAQ_TYPES.FAQ_GET,
  });
  const res = await faqService.getFAQ();
  if (res) {
    console.log("res", res.data);
    disptach({
      type: GET_FAQ_TYPES.FAQ_GET,
      payload: res.data,
    });
  } else {
    return res.data;
  }
};
