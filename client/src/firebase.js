// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-7aa54.firebaseapp.com",
  projectId: "mern-real-7aa54",
  storageBucket: "mern-real-7aa54.appspot.com",
  messagingSenderId: "1017759427209",
  appId: "1:1017759427209:web:30ed8fe328b562a379f458"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);