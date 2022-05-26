import { Dispatch } from "redux";
import { db, storage, auth } from "../../firebase";
import { GET_AUTH_USER } from "../const";

export const getAuthUser = (id: string) => async (dispatch: Dispatch) => {
  try {
    let doc = await db.collection("users").doc(id).get();
    if (doc.exists) {
      console.log(doc);
      let user = { ...doc.data(), id: doc.id };
      dispatch({ type: GET_AUTH_USER, payload: user });
      return user;
    } else {
      // doc.data() will be undefined in this case
      throw Error("No such document!");
    }
  } catch (error) {
    return null;
  }
};
