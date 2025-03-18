// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9EK6jNVYKVLA4i-6Sp5HppAI3drJkcOU",
  authDomain: "venera-business.firebaseapp.com",
  projectId: "venera-business",
  storageBucket: "venera-business.firebasestorage.app",
  messagingSenderId: "26873295843",
  appId: "1:26873295843:web:fe0ab2fe643b16a2b126d6",
  measurementId: "G-YQHD5HCYNY"
};

const app = initializeApp(firebaseConfig); // Initialize Firebase app
const db = getFirestore(app); // Get Firestore instance

export { db }; // Export db so you can use it in other files