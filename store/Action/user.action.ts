import { Dispatch } from "react-redux";
import { db, storage, auth } from "../../firebase";
import { GET_AUTH_USER } from "../const";

export const getAuthUser = (id:string) => async (dispatch:Dispatch) => {
  try {
    let doc = await db.collection("users").doc(id).get();
     if (doc.exists) {
       let user = {...doc.data(),id:doc.id}
       dispatch({type:GET_AUTH_USER, payload:user})
      return user
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      throw Error("No such document!")
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
