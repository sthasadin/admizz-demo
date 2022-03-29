import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import _ from "lodash";
import axios, { AxiosResponse } from "axios";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCjxChYN70lSg57xRAqicg2lgMrFSDvCy4",
  authDomain: "admizz.firebaseapp.com",
  projectId: "admizz",
  storageBucket: "admizz.appspot.com",
  messagingSenderId: "69910659045",
  appId: "1:69910659045:web:97f9ec785001ed835db90c",
  measurementId: "G-7RJP755JEX",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

const db = firebase.firestore();

const seedReviews = () => {
  
  db.collection("reviews")
    .doc("60138a2c50ccc8fef5b00c69")
    .onSnapshot((snapShot) => {
    });
};
const storage = firebase.storage();
export { db, auth, firebase, storage };
