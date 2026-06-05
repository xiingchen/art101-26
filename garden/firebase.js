// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKKTEoa1-w4QhNDs8wqZCZx9P4RXSUUP8",
  authDomain: "art101s26.firebaseapp.com",
  projectId: "art101s26",
  storageBucket: "art101s26.firebasestorage.app",
  messagingSenderId: "543001696788",
  appId: "1:543001696788:web:8defa4b595e574e903e501"
};

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 // Get database
 const db = firebase.database();

//
const creatureRef = db.ref("garden/creatures");