// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjzl_WWurYiGk64qY9zZFynzPkFczHIRU",
  authDomain: "realtor-clone-5e05b.firebaseapp.com",
  projectId: "realtor-clone-5e05b",
  storageBucket: "realtor-clone-5e05b.appspot.com",
  messagingSenderId: "363789215863",
  appId: "1:363789215863:web:1c2eeacb8899dfa2c77e72",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
