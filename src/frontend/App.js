
//src\frontend\App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignupPage from './pages/Signup_Page';
import LoginPage from './pages/Login_Page';
import Dashboard from './pages/Dashboard'; // Import Dashboard or any other page

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate to="/Signup_Page" />} />
        
        {/* Specific routes */}
        <Route path="/Signup_Page" element={<SignupPage />} />
        <Route path="/Login_Page" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Add Dashboard route */}
      </Routes>
    </Router>
  );
}

export default App;


// src/frontend/App.js

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import TaskManager from '../frontend/components/TaskManager'; // Import AppUsageTracker

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Directly render AppUsageTracker */}
//         <Route path="/" element={<TaskManager />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
