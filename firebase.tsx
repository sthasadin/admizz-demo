import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";
import _ from 'lodash'
import axios,{AxiosResponse} from 'axios'

var firebaseConfig = {
    apiKey: "AIzaSyCjxChYN70lSg57xRAqicg2lgMrFSDvCy4",
    authDomain: "admizz.firebaseapp.com",
    projectId: "admizz",
    storageBucket: "admizz.appspot.com",
    messagingSenderId: "69910659045",
    appId: "1:69910659045:web:97f9ec785001ed835db90c",
    measurementId: "G-7RJP755JEX"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth()

const db = firebase.firestore();
//  db.settings({ timestampsInSnapshots: true }); 


const seedQnAs = async () => {
    let colleges = await axios.get('http://157.245.106.9/college')
    colleges = colleges.data

    const getStudents = async() => {
    const snapshot = await db.collection('users').get()
    return snapshot.docs.map(doc => {
      return{...doc.data(),id:doc.id}
    });
    }
    let students = await getStudents()

    let qnas = {
      college:colleges[0]._id,
      qnas:[{
        question:"What is the fee for Bsc.CSIT",
        questionBy:db.doc(`users/${_.sample(students).id}`),
        questionedDate: Date.now(),
        isReported:false,
        replies: [{
          by:db.doc(`users/${_.sample(students).id}`),
          date: Date.now(),
          no_of_likes: [db.doc(`users/${_.sample(students).id}`),db.doc(`users/${_.sample(students).id}`),_.sample(students).id],
          no_of_dislikes: [db.doc(`users/${_.sample(students).id}`)],
          isReported:false
        }]
      }]
    }
    // db.collection('qna').add(qnas).then((data)=> {
    //   console.log(data)
    // }).catch(err => console.log(err))

//     let qnass = []
//     db.collection('qna').where('college','==','60138a2c50ccc8fef5b00c60').get().then(snapshot => {
//   snapshot.docs.forEach(doc => {
//     const comment = doc.data()
//     comment.qnas[0].questionBy.get().then(snap => {
//       comment.user = snap.data()
//       console.log(comment)
//       qnass.push(comment)
//     })
//   })
// })
// console.log(qnass)

    // let qnas = colleges.map(async clg => {
    //     let newQnas = [{
    //             college: clg._id,
    //             qnas:[{
    //                 question: "What is the fee for Bsc.CSIT??",
    //                 question_by: _.sample(students).id,
    //                 replies:[{
    //                         by: _.sample(students).id
    //                     }],
    //                     no_of_likes: [_.sample(students).id],
    //                     no_of_dislikes: [_.sample(students).id],
    //                     isReported: false//default false
    //                 }]
    //                 }]
    // })
}
seedQnAs()

 const seedReviews = () => {
    var batch = db.batch()
    let array = [{
    type:_.sample(['Academics', 'Accomodation', 'Faculty', 'Infrastructures', 'Placements', 'Social']),//enum[Academics, Accomodation, Faculty, Infrastructures, Placements, Social]
    // college:college,
    // student:student,
    // comment:String,
    // star:Number,//max 10
    // no_of_likes:[student],
    // no_of_dislikes:[student],
    isReported: Boolean//default false
    }]
    array.forEach((doc) => {
      var docRef = db.collection("review").doc(); //automatically generate unique id
      batch.set(docRef, doc);
    });
    batch.commit().then((data)=>{
      console.log(data)
    }).catch(err => {
      console.log(err)
    })

  }

export { db, auth, firebase }
