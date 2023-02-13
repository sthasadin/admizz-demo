const initialState = {
  data: [],
  loader: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SEARCH_BEGIN":
      return {
        ...state,
        loader: true,
      };
    case "SEARCH_GET_DATA":
      return {
        ...state,
        data: payload,
        loader: false,
      };
    case "SEARCH_END":
      return {
        ...state,
        loader: false,
      };
    default:
      return state;
  }
};
