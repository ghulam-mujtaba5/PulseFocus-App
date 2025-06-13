

import React, { useState, useEffect } from 'react';
import { getCurrentUser } from '../services/authService.js'; // Adjust the path according to your folder structure


import { Card, CardContent, Typography, Avatar, Box, CircularProgress } from '@mui/material';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { user, error } = await getCurrentUser();
        if (error) {
          setError(error.message);
        } else {
          setUser(user);
        }
      } catch (error) {
        setError('Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">Error: {error}</Typography>
      ) : (
        <Card sx={{ minWidth: 350, p: 2, boxShadow: 3 }}>
          <CardContent>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar sx={{ width: 80, height: 80, mb: 2 }}>
                {user.name ? user.name[0].toUpperCase() : '?'}
              </Avatar>
              <Typography variant="h5" gutterBottom>
                {user.name || 'User'}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {user.email}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

// Basic inline styling for the profile page
const styles = {
  profileContainer: {
    width: '100%',
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  loadingText: {
    fontSize: '1.2rem',
    color: '#777',
  },
  errorText: {
    fontSize: '1.2rem',
    color: 'red',
  },
  welcomeText: {
    fontSize: '2rem',
    color: '#333',
  },
  userInfo: {
    fontSize: '1rem',
    color: '#555',
  },
};

export default Profile;
