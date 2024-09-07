import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword } from "firebase/auth";

// Function to sign in the user
const signInUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in successfully
      const user = userCredential.user;
      console.log("User signed in:", user);
    })
    .catch((error) => {
      // Handle sign-in errors
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error signing in:", errorCode, errorMessage);
    });
};

// Example usage
const email = "user@example.com";
const password = "user-password";
signInUser(email, password);