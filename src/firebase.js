// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8Ref6j2awcDxu2nTqpsMwdUX-dRahcbw",
  authDomain: "signup-7257e.firebaseapp.com",
  projectId: "signup-7257e",
  storageBucket: "signup-7257e.firebasestorage.app",
  messagingSenderId: "55831020602",
  appId: "1:55831020602:web:69ec4430a73d3c5344e103",
  measurementId: "G-GF8NCSPZ65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth };