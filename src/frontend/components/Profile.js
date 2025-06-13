

import React, { useState, useEffect } from 'react';
import { getCurrentUser, logout, updateProfile, changePassword } from '../../services/userService.js';
import { supabase } from '../../services/supabaseClient.js';


import {
  Card, CardContent, Typography, Avatar, Box, CircularProgress, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Snackbar, Tooltip, Divider, Stack
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';
import PasswordIcon from '@mui/icons-material/Password';


const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editOpen, setEditOpen] = useState(false);
  const [editName, setEditName] = useState('');
  const [pwOpen, setPwOpen] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [stats, setStats] = useState({ completed: 0, total: 0 });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { user, error } = await getCurrentUser();
        if (error) {
          setError(error.message);
        } else {
          setUser(user);
          setEditName(user.name || '');
        }
      } catch (error) {
        setError('Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    // Fetch user stats (tasks completed/total)
    const fetchStats = async () => {
      if (!user?.id) return;
      const { count: total } = await supabase.from('tasks').select('*', { count: 'exact', head: true }).eq('user_id', user.id);
      const { count: completed } = await supabase.from('tasks').select('*', { count: 'exact', head: true }).eq('user_id', user.id).eq('completed', true);
      setStats({ completed: completed || 0, total: total || 0 });
    };
    if (user?.id) fetchStats();
  }, [user]);

  const handleLogout = async () => {
    await logout();
    window.location.reload();
  };

  const handleEditProfile = async () => {
    const { error } = await updateProfile(user.id, { name: editName });
    if (error) {
      setSnackbar({ open: true, message: error.message, severity: 'error' });
    } else {
      setUser({ ...user, name: editName });
      setSnackbar({ open: true, message: 'Profile updated!', severity: 'success' });
      setEditOpen(false);
    }
  };

  const handleChangePassword = async () => {
    const { error } = await changePassword(newPassword);
    if (error) {
      setSnackbar({ open: true, message: error.message, severity: 'error' });
    } else {
      setSnackbar({ open: true, message: 'Password changed!', severity: 'success' });
      setPwOpen(false);
      setNewPassword('');
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', background: (theme) => theme.palette.mode === 'dark' ? '#181c20' : '#f4f6fa', display: 'flex', alignItems: 'center', justifyContent: 'center', py: 4 }}>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">Error: {error}</Typography>
      ) : (
        <Paper elevation={6} sx={{ minWidth: 350, maxWidth: 420, p: 4, borderRadius: 4, bgcolor: (theme) => theme.palette.background.paper }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, letterSpacing: 1, textAlign: 'center' }}>Profile</Typography>
          <Divider sx={{ mb: 2 }} />
          <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
            <Avatar sx={{ width: 90, height: 90, mb: 1, bgcolor: '#1976d2', fontSize: 40 }}>
              {user.name ? user.name[0].toUpperCase() : '?'}
            </Avatar>
            <Stack direction="row" alignItems="center" gap={1}>
              <Typography variant="h5" fontWeight={600}>{user.name || 'User'}</Typography>
              <Tooltip title="Edit Name">
                <IconButton size="small" onClick={() => setEditOpen(true)}><EditIcon fontSize="small" /></IconButton>
              </Tooltip>
            </Stack>
            <Typography variant="body1" color="text.secondary">{user.email}</Typography>
            <Divider sx={{ my: 2, width: '100%' }} />
            <Typography variant="body2" color="text.secondary">Account Created: {user.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}</Typography>
            {user.last_sign_in_at && (
              <Typography variant="body2" color="text.secondary">Last Login: {new Date(user.last_sign_in_at).toLocaleString()}</Typography>
            )}
            <Box mt={2} mb={1}>
              <Typography variant="subtitle1" fontWeight={500}>Your Stats</Typography>
              <Typography variant="body2">Tasks Completed: {stats.completed} / {stats.total}</Typography>
            </Box>
            <Stack direction="row" spacing={2} mt={2}>
              <Button variant="outlined" color="primary" startIcon={<PasswordIcon />} onClick={() => setPwOpen(true)}>
                Change Password
              </Button>
              <Button variant="outlined" color="error" startIcon={<LogoutIcon />} onClick={handleLogout}>
                Logout
              </Button>
            </Stack>
          </Box>
        </Paper>
      )}
      {/* Edit Name Dialog */}
      <Dialog open={editOpen} onClose={() => setEditOpen(false)}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={editName}
            onChange={e => setEditName(e.target.value)}
            fullWidth
            autoFocus
            sx={{ mt: 1 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditOpen(false)}>Cancel</Button>
          <Button onClick={handleEditProfile} variant="contained">Save</Button>
        </DialogActions>
      </Dialog>
      {/* Change Password Dialog */}
      <Dialog open={pwOpen} onClose={() => setPwOpen(false)}>
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent>
          <TextField
            label="New Password"
            type="password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            fullWidth
            sx={{ mt: 1 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPwOpen(false)}>Cancel</Button>
          <Button onClick={handleChangePassword} variant="contained">Change</Button>
        </DialogActions>
      </Dialog>
      {/* Snackbar for feedback */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        message={snackbar.message}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </Box>
  );
};

export default Profile;
