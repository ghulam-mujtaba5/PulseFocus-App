import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignupPage from './pages/Signup_Page.js';
import LoginPage from './pages/Login_Page.js';
import Dashboard from './pages/Dashboard.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Signup_Page" />} />
        <Route path="/Signup_Page" element={<SignupPage />} />
        <Route path="/Login_Page" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

