import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";
import _ from 'lodash'
import axios,{AxiosResponse} from 'axios'
import "firebase/storage"

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




 const seedReviews = () => {

    // let arr = [{
    //   academics:8,
    //   accomodation:9,
    //   faculty:7,
    //   infrastructures:7,
    //   placements:9,
    //   social:10,
    //   isReported:false,
    //   by:'czdSyNe9xuSJceGDy3BswI5XnDe2',
    //   comment:'this is good college.',
    //   timestamp:Date.now(),
    //   noOFLikes:['czdSyNe9xuSJceGDy3BswI5XnDe2'],//student id
    //   noOFDisLikes:[]
    // }]

    // db.collection('reviews').doc('60138a2c50ccc8fef5b00c69').set({all_reviews:arr},{ merge: true })
    // .then(()=>console.log('object'))
    // .catch(err=>console.log(err))

    db.collection('reviews').doc('60138a2c50ccc8fef5b00c69').onSnapshot(snapShot=> {
      console.log(snapShot.data())
      //  db.collection('otherCollection').add({otherDoc: snapShot.ref})
    })

  }

  // seedReviews()

const storage = firebase.storage()
export { db, auth, firebase, storage }
