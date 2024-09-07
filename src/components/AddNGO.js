// src/components/AddNGO.js
import React, { useState } from 'react';
import { db } from './firebaseConfig';  // Import Firestore instance
import { collection, addDoc } from 'firebase/firestore';  // Import Firestore methods
import { useNavigate } from 'react-router-dom';
import './AddNGO.css';  // Import the CSS file

const AddNGO = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'ngos'), {
        name,
        description,
        ratings: [],
        comments: [],
      });
      alert('NGO added successfully!');
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="addngo-container">
      <div className="addngo-box">
        <h2>Add NGO</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="NGO Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="NGO Description (supports markdown)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Add NGO</button>
        </form>
      </div>
    </div>
  );
};

export default AddNGO;
