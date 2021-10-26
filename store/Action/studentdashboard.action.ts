import { db } from "../../firebase";
import { Dispatch } from "react-redux";

export const stage1 = (data) => async (dispatch: Dispatch) => {
  try {
    await db.collection("stage-1").add({ basicInformation: data });
  } catch (err) {
    console.log(err);
  }
};

