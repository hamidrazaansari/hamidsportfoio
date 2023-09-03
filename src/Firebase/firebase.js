// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC4HZHLKjck7YKz1jPC01XhZyy1DOFp56Q",
  authDomain: "hamidsportfolio-a32a6.firebaseapp.com",
  projectId: "hamidsportfolio-a32a6",
  storageBucket: "hamidsportfolio-a32a6.appspot.com",
  messagingSenderId: "764031551985",
  appId: "1:764031551985:web:bf770a2e28c42a9a5f5c50",
  measurementId: "G-XTQGEWJQB4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);







