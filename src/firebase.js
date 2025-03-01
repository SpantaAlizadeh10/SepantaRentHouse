// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6MZvM5gmEFPKg8DaWOh7wG_JBiFXDNWw",
  authDomain: "sepantareantwebsite.firebaseapp.com",
  projectId: "sepantareantwebsite",
  storageBucket: "sepantareantwebsite.firebasestorage.app",
  messagingSenderId: "396867146926",
  appId: "1:396867146926:web:de3673b7788acfc30b093f",
  measurementId: "G-SRYZX2WJXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);