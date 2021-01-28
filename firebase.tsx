import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCjxChYN70lSg57xRAqicg2lgMrFSDvCy4",
    authDomain: "admizz.firebaseapp.com",
    projectId: "admizz",
    storageBucket: "admizz.appspot.com",
    messagingSenderId: "69910659045",
    appId: "1:69910659045:web:97f9ec785001ed835db90c",
    measurementId: "G-7RJP755JEX"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db }