// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOe7OjlvFRrXqxCLwskvLeAay9EjGijig",
  authDomain: "task-management-app-aa5c0.firebaseapp.com",
  projectId: "task-management-app-aa5c0",
  storageBucket: "task-management-app-aa5c0.firebasestorage.app",
  messagingSenderId: "628266755632",
  appId: "1:628266755632:web:0ac00cba88d86d5233eff5",
  measurementId: "G-PHLYZ7RL3M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
