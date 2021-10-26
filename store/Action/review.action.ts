import { db } from "../../firebase";
import { Dispatch } from "react-redux";

export const addReview = (review: any) => async (dispatch: Dispatch) => {
  try {
    await db.collection("reviews").add(review);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const updateReview = (review: any, id: any) => async (
  dispatch: Dispatch
) => {
  try {
    await db
      .collection("reviews")
      .doc(id)
      .set(
        {
          ...review,
        },
        { merge: true }
      );
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getReviews = (college_id) => async (dispatch: Dispatch) => {
  let reviews = [];
  try {
    let reviewSnapshots = await db
      .collection("reviews")
      .where("college", "==", college_id)
      .get();
    reviewSnapshots.forEach((doc) => {
      let review = doc.data();
      reviews.push({
        ...review,
        id: doc.id,
      });
    });
    return reviews;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getQnas = (college_id) => async (dispatch: Dispatch) => {
  // let qnas = {
  //   college:colleges[0]._id,
  //   qnas:[{
  //     question:"What is the fee for Bsc.CSIT",
  //     questionBy:db.doc(`users/${_.sample(students).id}`),
  //     questionedDate: Date.now(),
  //     isReported:false,
  //     replies: [{
  //       by:db.doc(`users/${_.sample(students).id}`),
  //       date: Date.now(),
  //       no_of_likes: [db.doc(`users/${_.sample(students).id}`),db.doc(`users/${_.sample(students).id}`),_.sample(students).id],
  //       no_of_dislikes: [db.doc(`users/${_.sample(students).id}`)],
  //       isReported:false
  //     }]
  //   }]
  // }
  let qnas = [];
  db.collection("qna")
    .where("college", "==", college_id)
    .get()
    .then((snapshot) => {
      // one iteration
      snapshot.docs.forEach((doc) => {
        let data = doc.data(); //the qnas of the college

        data.qnas.forEach((qna) => {
          let questionBy; //with populate data
          qna.questionBy.get().then((snap) => {
            questionBy = snap.data();
          });

          let replies = [];
          qna.replies.forEach((reply) => {
            let by; //with popoulate data
            reply.by.get().then((snap) => {
              by = snap.data();
              replies.push({
                by: by,
                data: reply.date,
                no_of_likes: reply.no_of_likes.length,
                no_of_dislikes: reply.no_of_dislikes.length,
                isReported: reply.isReported,
              });
            });
          });

          qnas.push({
            college: college_id,
            replies,
            questionBy,
            questionedDate: qna.questionDate,
            isReported: qna.isReported,
          });
        });
      });
    });
};
