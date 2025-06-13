
import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import MainLayout from './components/MainLayout.js';
import SignupPage from './pages/Signup_Page.js';
import LoginPage from './pages/Login_Page.js';
import Dashboard from './pages/Dashboard.js';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    background: { default: '#f4f6fa' },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: 'Segoe UI, Roboto, Arial, sans-serif',
    fontWeightMedium: 600,
  },
});

import { useNavigate } from 'react-router-dom';

function App() {
  // Custom navigation handler for MainLayout
  const NavigateWrapper = () => {
    const navigate = useNavigate();
    const handleNav = (page) => {
      if (page === 'dashboard') navigate('/dashboard');
      else if (page === 'tasks') navigate('/dashboard'); // Adjust if you have a separate tasks page
      else if (page === 'profile') navigate('/dashboard'); // Adjust if you have a profile page/route
      else navigate('/');
    };
    return (
      <MainLayout onNav={handleNav}>
        <Routes>
          <Route path="/" element={<Navigate to="/Signup_Page" />} />
          <Route path="/Signup_Page" element={<SignupPage />} />
          <Route path="/Login_Page" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </MainLayout>
    );
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <NavigateWrapper />
      </Router>
    </ThemeProvider>
  );
}

export default App;

