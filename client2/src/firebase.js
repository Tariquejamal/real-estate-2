// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-22bf0.firebaseapp.com",
  projectId: "mern-estate-22bf0",
  storageBucket: "mern-estate-22bf0.appspot.com",
  messagingSenderId: "1052396284454",
  appId: "1:1052396284454:web:587f734d2b146eeb9ed4e7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);