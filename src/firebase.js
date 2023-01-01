// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA2p2qMdCLq7yhq2EqWGJfczVQd1VSKMWM",
    authDomain: "yours-resolution.firebaseapp.com",
    projectId: "yours-resolution",
    storageBucket: "yours-resolution.appspot.com",
    messagingSenderId: "334101024186",
    appId: "1:334101024186:web:2cdd3d29080744cc342183"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;