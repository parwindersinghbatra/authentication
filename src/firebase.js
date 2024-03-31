// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfU6bPJxeOsP_I8SiXcOOF0-v18KtWlmM",
  authDomain: "autho-2db37.firebaseapp.com",
  projectId: "autho-2db37",
  storageBucket: "autho-2db37.appspot.com",
  messagingSenderId: "999528129947",
  appId: "1:999528129947:web:2f72c7b841e7c639a3ad3e",
  measurementId: "G-DBTY7TW5X4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)


export {app, db}