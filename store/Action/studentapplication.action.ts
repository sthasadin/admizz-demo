import { db } from "../../firebase";
import { GET_APPLICATION } from "../const";

export const getStudentApplication = (id) => {
  return async (dispatch) => {
    try {
        let applications = []
      let querySnapshot = await db.collection('students-application').where('student_id','==',id).get()
      // console.log(doc.data())
      querySnapshot.forEach(doc => {
        applications.push({
            ...doc.data(),
            id:doc.id
        })
      })
      dispatch({type:GET_APPLICATION,payload:applications[0]})
      // return applications[0]
    } catch (error) {
      console.log(error)
      // return {}
    }
  }
}

export const updateStudentApplication = (status,id) => {
  return async (dispatch) => {
    try {
      await db.collection('students-application').doc(id).update({
        status
      })
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }
}