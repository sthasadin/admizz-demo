import { db, storage } from "../../firebase";
import { message } from "antd";



export const getAllTieUp = () => async (dispatch) => {
  let tieup = [];
  try {
    let querySnapshot = await db.collection("tieup").get();

    querySnapshot.forEach(function (doc) {
      const data = doc.data();
      data.id = doc.id;
      tieup.push(data);
    });
    return tieup;
  } catch (error) {
    return [];
  }
};


;

