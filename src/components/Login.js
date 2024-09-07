
import React, { useState } from "react";
import { auth } from "./firebaseConfig.js";
import './Login.css';  

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      alert("Logged in successfully!");
    } catch (error) {
      setError(error.message); // Set error message to state
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button onClick={handleLogin}>Login</button>
        {error && <span className="error-message">{error}</span>} {/* Display error message */}
      </div>
    </div>
  );
};

export default Login;
