// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgTALMfRJjFBsyM6a28GCouYJyBrLOqUk",
  authDomain: "otp-for-meesho-app-bdf3d.firebaseapp.com",
  projectId: "otp-for-meesho-app-bdf3d",
  storageBucket: "otp-for-meesho-app-bdf3d.appspot.com",
  messagingSenderId: "288850773208",
  appId: "1:288850773208:web:627e867c83414479cfc3ad",
  measurementId: "G-27P0N9R030"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



