import { db, storage, auth } from "../../firebase";

export const getCourses = () => async (dispatch) => {
  let streams = [];
  try {
    let querySnapshot = await db.collection("courses").get();

    querySnapshot.forEach(function (doc) {
      //   console.log(doc);
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
