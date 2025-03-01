// Import Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Firestore برای دیتابیس
import { getAuth } from "firebase/auth"; // Authentication در صورت نیاز

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6MZvM5gmEFPKg8DaWOh7wG_JBiFXDNWw",
  authDomain: "sepantareantwebsite.firebaseapp.com",
  projectId: "sepantareantwebsite",
  storageBucket: "sepantareantwebsite.appspot.com", // تصحیح دامنه استوریج
  messagingSenderId: "396867146926",
  appId: "1:396867146926:web:de3673b7788acfc30b093f",
  measurementId: "G-SRYZX2WJXJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // مقداردهی اولیه Firestore
const auth = getAuth(app); // مقداردهی اولیه Authentication (در صورت نیاز)

export { app, db, auth }; // اکسپورت کردن برای استفاده در بقیه پروژه
