import { db } from "../../firebase";
import { Dispatch } from "redux";
import { COMMENT_TYPES } from "../const";

export const addComment = (comment:any) => async (dispatch:Dispatch)  =>{
try{
    await db.collection("comment").add(comment);
    return true;
}catch(error){
    console.log(error);
    return false;
}
};

export const getComments = (blog_id:any) => {
    // get all comments from firebase
    return async (dispatch: Dispatch) => {

      try {
        const response = await 
          db
          .collection("comment")
          .where('blog_id', '==', blog_id)
          .get();
        const comments: any = [];
        response.forEach((doc: any) => {

          comments.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        dispatch({
          type: COMMENT_TYPES.GET_COMMENT,
          payload: comments,
        });
      } catch (err: any) {
        console.log(err);
      }
    };
  };

export const getComment = () => async (dispatch:Dispatch) =>{
    let comment = [];
    try {
        let commentSnapshots = await db
        .collection("comment")
        .get()
        commentSnapshots.forEach((doc)=>{
            let comments = doc.data();
            comment.push({
                ...comments,
                id:doc.id,
            });
        });
        return comment;
    }catch (error){
        console.log(error);
        return [];
    }
}