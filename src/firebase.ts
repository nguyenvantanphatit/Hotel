// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHvO2LJl6yIw6E1Z7uJ_4D08dO4rziwd8",
  authDomain: "hotel-92287.firebaseapp.com",
  projectId: "hotel-92287",
  storageBucket: "hotel-92287.appspot.com",
  messagingSenderId: "307628341429",
  appId: "1:307628341429:web:784c7382410c557408a6fc",
  measurementId: "G-2KVGGZS28T"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app); 