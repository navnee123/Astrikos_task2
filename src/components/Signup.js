
import React, { useState } from 'react';
import { auth } from './firebaseConfig.js';  // Import the auth instance
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './Signup.css';  

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('User created successfully!');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="signup-contain">
    <div className="signup-container">
      <div className="signup-box">
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
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
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Signup;
