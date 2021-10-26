import { db } from "../../firebase";
import { GET_APPLICATION } from "../const";

export const getStudentApplication = (id) => {
  return async (dispatch) => {
    try {
      let applications = {} as any;
      let remark = [];
      let querySnapshot = await db
        .collection("students-application")
        .where("student_id", "==", id)
        .get();

      querySnapshot.forEach(async (doc) => {
        applications = {
          ...doc.data(),
          id: doc.id,
        };
      });

      let remarkRef = await db
        .collection("students-application")
        .doc(applications.id)
        .collection("remarks")
        .get();

      remarkRef.forEach((doc) => {
        remark.push({
          ...doc.data(),
        });
      });

      applications = { ...applications, remark: remark };

      dispatch({ type: GET_APPLICATION, payload: applications });
    } catch (error) {
      console.log(error);
      // return {}
    }
  };
};

// export const getStudentRemark = (id) => async () => {
//   try {
//     let remark = [];
//     let querySnapshot = await db.collection('students-application').where('student_id', '==', id).collection('remark').get();
//   } catch (error) {

//   }
// }

export const updateStudentApplication = (status, id) => {
  return async (dispatch) => {
    try {
      await db.collection("students-application").doc(id).update({
        status,
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
};

