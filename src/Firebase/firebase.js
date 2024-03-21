// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8PDPOaQGLk6wykseXp8WnbmXh9wy5TJw",
  authDomain: "e-commerce-da7ea.firebaseapp.com",
  projectId: "e-commerce-da7ea",
  storageBucket: "e-commerce-da7ea.appspot.com",
  messagingSenderId: "672979094674",
  appId: "1:672979094674:web:466ec76cf06ca53c29ea4b",
};

// Initialize Firebase
const app = getApp.length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;
