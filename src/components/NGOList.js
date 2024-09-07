import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore'; // Import the necessary functions from Firestore
import { db } from './firebaseConfig.js';
import ReactMarkdown from 'react-markdown';
import './NGOList.css';  

const NGOList = () => {
  const [ngos, setNgos] = useState([]);

  useEffect(() => {
    const fetchNGOs = async () => {
      const ngoCollection = collection(db, 'ngos'); // Create a reference to the 'ngos' collection
      const snapshot = await getDocs(ngoCollection); // Fetch the documents
      setNgos(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))); // Map the documents to the state
    };

    fetchNGOs();
  }, []);

  return (
    <div className="ngo-list-container">
      <h2>NGO List</h2>
      {ngos.map(ngo => (
        <div key={ngo.id} className="ngo-item">
          <h3>{ngo.name}</h3>
          <ReactMarkdown className="react-markdown">{ngo.description}</ReactMarkdown>
        </div>
      ))}
    </div>
  );
};

export default NGOList;
