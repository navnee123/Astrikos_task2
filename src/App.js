// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import NGOList from "./components/NGOList";
import AddNGO from "./components/AddNGO";
import NGODetail from "./components/NGODetail";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<NGOList />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-ngo" element={<AddNGO />} />
          <Route path="/ngo-detail" element={<NGODetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
