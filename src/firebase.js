// Import the functions you need from the SDKs you need
// import firebase from "firebase/app";
// import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwnakMU2mQY72Gr8RtcigHF6NsZZ7SMxU",
  authDomain: "womenu-b3c9f.firebaseapp.com",
  projectId: "womenu-b3c9f",
  storageBucket: "womenu-b3c9f.appspot.com",
  messagingSenderId: "339590600150",
  appId: "1:339590600150:web:d87b9c0579067a30520077",
  measurementId: "G-HNYCBVMHGQ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export default firebase;
