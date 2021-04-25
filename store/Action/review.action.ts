import { db } from "../../firebase";
import { Dispatch } from "react-redux";



export const getReviews = (college_id) => async (dispatch: Dispatch) => { 
  let reviews = [];
  //  let arr = [{
  //     academics:8,
  //     accomodation:9,
  //     faculty:7,
  //     infrastructures:7,
  //     placements:9,
  //     social:10,
  //     isReported:false,
  //     by:'czdSyNe9xuSJceGDy3BswI5XnDe2',
  //     comment:'this is good college.',
  //     timestamp:Date.now(),
  //     noOFLikes:['czdSyNe9xuSJceGDy3BswI5XnDe2'],//student id
  //     noOFDisLikes:[]
  //   }]

  //   db.collection('reviews').doc('60138a2c50ccc8fef5b00c66').set({all_reviews:arr},{ merge: true })
  //   .then(()=>console.log('object'))
  //   .catch(err=>console.log(err))
  try {
    let doc = await db.collection("reviews").doc(college_id).get();
    if (doc.exists) {
      console.log("Document data:", doc.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    return reviews;
  } catch (error) {
    console.log(error);
    return [];
  }
}


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
    let qnas = []
    db.collection('qna').where('college','==', college_id).get().then(snapshot => {// one iteration
    snapshot.docs.forEach(doc => {

    let data = doc.data()//the qnas of the college
    console.log(data)
    data.qnas.forEach(qna => {
    let questionBy //with populate data
    qna.questionBy.get().then(snap => {
      questionBy = snap.data()
    })

    let replies = []
    qna.replies.forEach(reply => {
        let by //with popoulate data
        reply.by.get().then(snap => {
        by = snap.data()        
        replies.push({
            by:by,
            data:reply.date,
            no_of_likes:reply.no_of_likes.length,
            no_of_dislikes: reply.no_of_dislikes.length,
            isReported: reply.isReported
        })
    })
    })
    console.log(replies)
    qnas.push({
        college:college_id,
        replies,
        questionBy,
        questionedDate: qna.questionDate,
        isReported: qna.isReported
    })


    })
  })
})
console.log(qnas)
};
