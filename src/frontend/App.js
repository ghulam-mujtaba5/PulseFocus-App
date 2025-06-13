
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Navigate to="/Signup_Page" />} />
            <Route path="/Signup_Page" element={<SignupPage />} />
            <Route path="/Login_Page" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;

