// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeaut75RC9QYcAogvYL-rojEIwP-fGegI",
  authDomain: "chatbot-shakib.firebaseapp.com",
  projectId: "chatbot-shakib",
  storageBucket: "chatbot-shakib.appspot.com",
  messagingSenderId: "66356950610",
  appId: "1:66356950610:web:37c9b08356d1662ff8118b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth
const auth = getAuth(app);

export default auth;
