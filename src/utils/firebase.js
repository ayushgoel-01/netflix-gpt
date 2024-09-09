// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR7ccEE-a2OrtFkioHm9Y5gTKHwdRDeTM",
  authDomain: "netflixgpt-1f684.firebaseapp.com",
  projectId: "netflixgpt-1f684",
  storageBucket: "netflixgpt-1f684.appspot.com",
  messagingSenderId: "647893270246",
  appId: "1:647893270246:web:24aa33620e70cbe4ed8527",
  measurementId: "G-CPG1Y2PR18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();