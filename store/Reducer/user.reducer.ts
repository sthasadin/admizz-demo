import { GET_AUTH_USER } from "../const";

const inititalState = {
  authUser: {}
};

const userReducer = (state = inititalState,{ type, payload }) => {
  switch (type) {
    case GET_AUTH_USER:
      console.log("userpayload",payload);
      return {
        authUser: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
