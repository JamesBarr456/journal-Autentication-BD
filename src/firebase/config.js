// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG3HXP-2HF1dhRd6atOhZYj9TY09ZUrjY",
  authDomain: "react-cursos-a4399.firebaseapp.com",
  projectId: "react-cursos-a4399",
  storageBucket: "react-cursos-a4399.appspot.com",
  messagingSenderId: "327807062714",
  appId: "1:327807062714:web:54e611c4bcc087e0aee883"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)