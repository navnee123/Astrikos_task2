// src/components/NGODetail.js
import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore'; // Import the necessary functions
import { db } from './firebaseConfig.js'; // Adjust the path if needed
import ReactMarkdown from 'react-markdown';
import './NGODetail.css';  

const NGODetail = ({ match }) => {
  const [ngo, setNgo] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  useEffect(() => {
    const fetchNGO = async () => {
      const ngoDoc = doc(db, 'ngos', match.params.id); // Reference to the specific document
      const docSnap = await getDoc(ngoDoc); // Fetch the document
      if (docSnap.exists()) {
        setNgo(docSnap.data()); // Set the NGO data
      } else {
        console.log('No such document!');
      }
    };

    fetchNGO();
  }, [match.params.id]);

  const handleRating = async () => {
    if (ngo) {
      await updateDoc(doc(db, 'ngos', match.params.id), {
        ratings: [...(ngo.ratings || []), rating], // Ensure ngo.ratings is initialized
      });
      alert('Rating added!');
      setRating(0); // Reset rating input
    }
  };

  const handleComment = async () => {
    if (ngo) {
      await updateDoc(doc(db, 'ngos', match.params.id), {
        comments: [...(ngo.comments || []), comment], // Ensure ngo.comments is initialized
      });
      alert('Comment added!');
      setComment(''); // Reset comment input
    }
  };

  return ngo ? (
    <div className="ngo-detail-container">
      <h3>{ngo.name}</h3>
      <ReactMarkdown className="react-markdown">{ngo.description}</ReactMarkdown>
      
      <div className="rating-section">
        <h4>Rating</h4>
        <input 
          type="number" 
          value={rating} 
          onChange={(e) => setRating(Number(e.target.value))} 
          min="0" // Ensure rating is a positive number
        />
        <button onClick={handleRating}>Submit Rating</button>
      </div>
      
      <div className="comment-section">
        <h4>Comments</h4>
        <textarea 
          value={comment} 
          onChange={(e) => setComment(e.target.value)} 
        />
        <button onClick={handleComment}>Submit Comment</button>

        <div className="comments-list">
          <h4>All Comments</h4>
          {ngo.comments && ngo.comments.map((c, index) => (
            <p key={index}>{c}</p>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default NGODetail;
