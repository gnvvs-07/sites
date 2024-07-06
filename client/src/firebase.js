// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-sites.firebaseapp.com",
  projectId: "mern-sites",
  storageBucket: "mern-sites.appspot.com",
  messagingSenderId: "344235865633",
  appId: "1:344235865633:web:2368e8d64c1eec6f155560"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);