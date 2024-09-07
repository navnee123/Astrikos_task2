// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";  // Import Firebase Authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRAZKlJYE4sAPJx5Z2ZDxn6WUjUgLuQb8",
  authDomain: "ngoproject-564fd.firebaseapp.com",
  projectId: "ngoproject-564fd",
  storageBucket: "ngoproject-564fd.appspot.com",
  messagingSenderId: "1029129634706",
  appId: "1:1029129634706:web:a16b3ee5fdc8cab667f74b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and export it
const db = getFirestore(app);

// Initialize Firebase Authentication and export it
const auth = getAuth(app);

export { db, auth };
