import React, { useState, useEffect } from 'react';
import { supabase } from '../../services/supabaseClient.js';
import HabitTracker from './HabitTracker.js';
import { Box, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, IconButton, Paper, Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const HabitManager = () => {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formOpen, setFormOpen] = useState(false);
  const [formMode, setFormMode] = useState('add');
  const [formData, setFormData] = useState({ task_name: '', task_description: '', target_count: 1 });
  const [editingHabitId, setEditingHabitId] = useState(null);

  useEffect(() => {
    fetchHabits();
  }, []);

  const fetchHabits = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('habits').select('*');
    if (!error) setHabits(data);
    setLoading(false);
  };

  const handleFormOpen = (mode, habit) => {
    setFormMode(mode);
    if (mode === 'edit' && habit) {
      setFormData({
        task_name: habit.task_name,
        task_description: habit.task_description,
        target_count: habit.target_count || 1,
      });
      setEditingHabitId(habit.id);
    } else {
      setFormData({ task_name: '', task_description: '', target_count: 1 });
      setEditingHabitId(null);
    }
    setFormOpen(true);
  };

  const handleFormClose = () => {
    setFormOpen(false);
    setFormData({ task_name: '', task_description: '', target_count: 1 });
    setEditingHabitId(null);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async () => {
    if (!formData.task_name || !formData.task_description) return;
    if (formMode === 'add') {
      const { error } = await supabase.from('habits').insert([{ ...formData }]);
      if (!error) fetchHabits();
    } else if (formMode === 'edit') {
      const { error } = await supabase.from('habits').update({
        task_name: formData.task_name,
        task_description: formData.task_description,
        target_count: formData.target_count,
      }).eq('id', editingHabitId);
      if (!error) fetchHabits();
    }
    handleFormClose();
  };

  const handleDeleteHabit = async (id) => {
    await supabase.from('habits').delete().eq('id', id);
    fetchHabits();
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 1000, mx: 'auto', mt: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={2} align="center">Habit Tracker</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <Button variant="contained" color="primary" onClick={() => handleFormOpen('add')}>Add Habit</Button>
      </Box>
      <Grid container spacing={2}>
        {habits.map(habit => (
          <Grid item xs={12} md={4} key={habit.id}>
            <Paper elevation={3} sx={{ p: 2, borderRadius: 2, position: 'relative' }}>
              <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
                <IconButton size="small" onClick={() => handleFormOpen('edit', habit)}><EditIcon fontSize="small" /></IconButton>
                <IconButton size="small" onClick={() => handleDeleteHabit(habit.id)}><DeleteIcon fontSize="small" color="error" /></IconButton>
              </Box>
              <HabitTracker
                taskName={habit.task_name}
                taskDescription={habit.task_description}
                targetCount={habit.target_count}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Dialog open={formOpen} onClose={handleFormClose} maxWidth="sm" fullWidth>
        <DialogTitle>{formMode === 'add' ? 'Add Habit' : 'Edit Habit'}</DialogTitle>
        <DialogContent>
          <TextField
            label="Habit Name"
            name="task_name"
            value={formData.task_name}
            onChange={handleFormChange}
            fullWidth
            sx={{ mb: 2 }}
            autoFocus
          />
          <TextField
            label="Description"
            name="task_description"
            value={formData.task_description}
            onChange={handleFormChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Target Count (per day)"
            name="target_count"
            type="number"
            value={formData.target_count}
            onChange={handleFormChange}
            fullWidth
            sx={{ mb: 2 }}
            inputProps={{ min: 1 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFormClose}>Cancel</Button>
          <Button onClick={handleFormSubmit} variant="contained">{formMode === 'add' ? 'Add' : 'Save'}</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default HabitManager;
