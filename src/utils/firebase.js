// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxR3yx7JUOSjWv1YGhzW6wu1VT4LJ5Vqw",
  authDomain: "netflixgpt-deea1.firebaseapp.com",
  projectId: "netflixgpt-deea1",
  storageBucket: "netflixgpt-deea1.firebasestorage.app",
  messagingSenderId: "840872036461",
  appId: "1:840872036461:web:35286a2e805178d58a5764",
  measurementId: "G-SY2TR6FN8W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();