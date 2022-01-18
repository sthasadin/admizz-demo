import { GET_FAQ_TYPES } from "../const";

const initialState = {
  faq: [],
  loader: false,
  faqID: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_FAQ_TYPES.FAQ_BEGIN:
      return {
        ...state,
        loader: true,
      };
    case GET_FAQ_TYPES.FAQ_GET:
      return {
        ...state,
        faq: payload,
      };
    case GET_FAQ_TYPES.FAQ_END:
      return {
        ...state,
        loader: false,
      };
    case GET_FAQ_TYPES.FAQ_ID:
      return {
        ...state,
        faqID: payload,
      };
    default:
      return state;
  }
};
