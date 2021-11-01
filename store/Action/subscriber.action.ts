import { db } from "../../firebase";
import { Dispatch } from "react-redux";

export const addSubscriber = (email) => async (dispatch: Dispatch) => {
  try {
    let resp = await db.collection("subscriber").add({ email });
  } catch (error) {
    console.log(error);
  }
};

