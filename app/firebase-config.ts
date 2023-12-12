// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDbPhAyVLZdWjX2Q8tE5vabXxoOIq7nty8",
  authDomain: "fir-course-bb2a2.firebaseapp.com",
  projectId: "fir-course-bb2a2",
  storageBucket: "fir-course-bb2a2.appspot.com",
  messagingSenderId: "1019586017904",
  appId: "1:1019586017904:web:a05c0e0f33c85409f1d2b5",
  measurementId: "G-6T1C4GF99S"
};

const app = initializeApp(firebaseConfig);
export const authentication =getAuth(app)