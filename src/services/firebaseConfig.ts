import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDOe7OjlvFRrXqxCLwskvLeAay9EjGijig",
  authDomain: "task-management-app-aa5c0.firebaseapp.com",
  databaseURL: "https://task-management-app-aa5c0-default-rtdb.firebaseio.com/",
  projectId: "task-management-app-aa5c0",
  storageBucket: "task-management-app-aa5c0.firebasestorage.app",
  messagingSenderId: "628266755632",
  appId: "1:628266755632:web:0ac00cba88d86d5233eff5",
  measurementId: "G-PHLYZ7RL3M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { database, auth };
