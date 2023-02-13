import { Dispatch } from "redux";
import { db, storage, auth } from "../../firebase";

export const getCourses = () => async (dispatch: Dispatch) => {
  const streams = [];
  try {
    const querySnapshot = await db.collection("courses").get();

    querySnapshot.forEach(function (doc) {
      const data = doc.data();
      data.id = doc.id;
      streams.push(data);
    });
    return streams;
  } catch (error) {
    console.log(error);
    return [];
  }
};
