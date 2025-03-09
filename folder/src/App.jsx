import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './Dashboard.jsx';  
import Login from './Login.jsx';
import Register from './Register.jsx';

const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </Router>
    </div>
  );
};

export default App;