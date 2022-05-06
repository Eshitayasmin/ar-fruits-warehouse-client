// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg5-eXMYQKzBhC6ZJ2aRBYnCvJRLLTu5E",
  authDomain: "ar-fruits-warehouse.firebaseapp.com",
  projectId: "ar-fruits-warehouse",
  storageBucket: "ar-fruits-warehouse.appspot.com",
  messagingSenderId: "139389612666",
  appId: "1:139389612666:web:e750bcd0f88e3acd27c1c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;