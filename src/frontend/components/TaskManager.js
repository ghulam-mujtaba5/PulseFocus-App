
import React, { useState, useEffect } from 'react';
import { supabase } from '../../services/supabaseClient.js';
import { DataGrid, GridToolbar, GridActionsCellItem } from '@mui/x-data-grid';
import { Box, Paper, Typography, Snackbar, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, IconButton, Tooltip } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formOpen, setFormOpen] = useState(false);
  const [formMode, setFormMode] = useState('add'); // 'add' or 'edit'
  const [formData, setFormData] = useState({ title: '', description: '', due_date: '' });
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [selectionModel, setSelectionModel] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase.from('tasks').select('*');
        if (error) {
          setSnackbar({ open: true, message: 'Error fetching tasks: ' + error.message, severity: 'error' });
        } else {
          setTasks(data);
        }
      } catch (err) {
        setSnackbar({ open: true, message: 'Unexpected error occurred', severity: 'error' });
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);


  const handleFormOpen = (mode, task) => {
    setFormMode(mode);
    if (mode === 'edit' && task) {
      setFormData({ title: task.title, description: task.description, due_date: task.due_date });
      setEditingTaskId(task.id);
    } else {
      setFormData({ title: '', description: '', due_date: '' });
      setEditingTaskId(null);
    }
    setFormOpen(true);
  };

  const handleFormClose = () => {
    setFormOpen(false);
    setFormData({ title: '', description: '', due_date: '' });
    setEditingTaskId(null);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async () => {
    if (!formData.title || !formData.description || !formData.due_date) {
      setSnackbar({ open: true, message: 'Please fill in all fields', severity: 'error' });
      return;
    }
    if (formMode === 'add') {
      try {
        const { data, error } = await supabase.from('tasks').insert([{ ...formData, completed: false }]);
        if (error) {
          setSnackbar({ open: true, message: 'Error adding task: ' + error.message, severity: 'error' });
        } else {
          setTasks([...tasks, data[0]]);
          setSnackbar({ open: true, message: 'Task added successfully', severity: 'success' });
          handleFormClose();
        }
      } catch (err) {
        setSnackbar({ open: true, message: 'Unexpected error occurred', severity: 'error' });
      }
    } else if (formMode === 'edit') {
      try {
        const { data, error } = await supabase.from('tasks').update({
          title: formData.title,
          description: formData.description,
          due_date: formData.due_date,
        }).eq('id', editingTaskId);
        if (error) {
          setSnackbar({ open: true, message: 'Error editing task: ' + error.message, severity: 'error' });
        } else {
          setTasks(tasks.map(task => task.id === editingTaskId ? data[0] : task));
          setSnackbar({ open: true, message: 'Task updated successfully', severity: 'success' });
          handleFormClose();
        }
      } catch (err) {
        setSnackbar({ open: true, message: 'Unexpected error occurred', severity: 'error' });
      }
    }
  };

  const editTask = async () => {
    if (!taskTitle || !taskDescription || !taskDueDate) {
      setNotificationType('error');
      setNotification('Please fill in all fields');
      return;
    }

    try {
      const { data, error } = await supabase.from('tasks').update({
        title: taskTitle,
        description: taskDescription,
        due_date: taskDueDate,
      }).eq('id', editingTaskId);

      if (error) {
        setNotificationType('error');
        setNotification('Error editing task: ' + error.message);
      } else {
        const updatedTasks = tasks.map(task => 
          task.id === editingTaskId ? data[0] : task
        );
        setTasks(updatedTasks);
        setNotificationType('success');
        setNotification('Task updated successfully');
        resetForm();
      }
    } catch (err) {
      setNotificationType('error');
      setNotification('Unexpected error occurred');
    }
  };


  const handleToggleComplete = async (taskId, currentStatus) => {
    try {
      const { data, error } = await supabase.from('tasks').update({ completed: !currentStatus }).eq('id', taskId);
      if (error) {
        setSnackbar({ open: true, message: 'Error toggling completion: ' + error.message, severity: 'error' });
      } else {
        setTasks(tasks.map(task => task.id === taskId ? data[0] : task));
        setSnackbar({ open: true, message: `Task marked as ${data[0].completed ? 'completed' : 'incomplete'}`, severity: 'success' });
      }
    } catch (err) {
      setSnackbar({ open: true, message: 'Unexpected error occurred', severity: 'error' });
    }
  };


  const handleDeleteTask = async (taskId) => {
    try {
      const { error } = await supabase.from('tasks').delete().eq('id', taskId);
      if (error) {
        setSnackbar({ open: true, message: 'Error deleting task: ' + error.message, severity: 'error' });
      } else {
        setTasks(tasks.filter(task => task.id !== taskId));
        setSnackbar({ open: true, message: 'Task deleted successfully', severity: 'success' });
      }
    } catch (err) {
      setSnackbar({ open: true, message: 'Unexpected error occurred', severity: 'error' });
    }
  };

  // Bulk delete
  const handleBulkDelete = async () => {
    try {
      const { error } = await supabase.from('tasks').delete().in('id', selectionModel);
      if (error) {
        setSnackbar({ open: true, message: 'Error deleting selected tasks: ' + error.message, severity: 'error' });
      } else {
        setTasks(tasks.filter(task => !selectionModel.includes(task.id)));
        setSnackbar({ open: true, message: 'Selected tasks deleted', severity: 'success' });
        setSelectionModel([]);
      }
    } catch (err) {
      setSnackbar({ open: true, message: 'Unexpected error occurred', severity: 'error' });
    }
  };


  // DataGrid columns
  const columns = [
    { field: 'title', headerName: 'Title', flex: 1, minWidth: 150 },
    { field: 'description', headerName: 'Description', flex: 2, minWidth: 200 },
    { field: 'due_date', headerName: 'Due Date', type: 'date', flex: 1, minWidth: 120, valueGetter: (params) => params.value ? new Date(params.value) : null, valueFormatter: (params) => params.value ? new Date(params.value).toLocaleDateString() : '' },
    { field: 'completed', headerName: 'Completed', type: 'boolean', flex: 0.7, minWidth: 100, renderCell: (params) => params.value ? <CheckCircleIcon color="success" /> : <CancelIcon color="disabled" /> },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      flex: 1,
      minWidth: 160,
      getActions: (params) => [
        <GridActionsCellItem icon={<Tooltip title={params.row.completed ? 'Mark Incomplete' : 'Mark Complete'}><CheckCircleIcon color={params.row.completed ? 'disabled' : 'success'} /></Tooltip>} label="Toggle Complete" onClick={() => handleToggleComplete(params.row.id, params.row.completed)} />,
        <GridActionsCellItem icon={<Tooltip title="Edit"><EditIcon /></Tooltip>} label="Edit" onClick={() => handleFormOpen('edit', params.row)} />,
        <GridActionsCellItem icon={<Tooltip title="Delete"><DeleteIcon color="error" /></Tooltip>} label="Delete" onClick={() => handleDeleteTask(params.row.id)} />,
      ],
    },
  ];

  return (
    <Box sx={{ width: '100%', maxWidth: 900, mx: 'auto', mt: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={2} align="center">Task Manager</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
        <Button variant="contained" color="primary" onClick={() => handleFormOpen('add')}>
          Add Task
        </Button>
        {selectionModel.length > 0 && (
          <Button variant="outlined" color="error" sx={{ ml: 2 }} onClick={handleBulkDelete}>
            Delete Selected
          </Button>
        )}
      </Box>
      <Paper elevation={4} sx={{ height: 520, width: '100%', mb: 2 }}>
        <DataGrid
          rows={tasks}
          columns={columns}
          getRowId={row => row.id}
          loading={loading}
          checkboxSelection
          disableRowSelectionOnClick
          onRowSelectionModelChange={setSelectionModel}
          rowSelectionModel={selectionModel}
          slots={{ toolbar: GridToolbar }}
          sx={{ fontSize: 15, borderRadius: 2, bgcolor: 'background.paper' }}
        />
      </Paper>
      {/* Task Form Dialog */}
      <Dialog open={formOpen} onClose={handleFormClose} maxWidth="sm" fullWidth>
        <DialogTitle>{formMode === 'add' ? 'Add Task' : 'Edit Task'}</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleFormChange}
            fullWidth
            sx={{ mb: 2 }}
            autoFocus
          />
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleFormChange}
            fullWidth
            multiline
            minRows={2}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Due Date"
            name="due_date"
            type="date"
            value={formData.due_date}
            onChange={handleFormChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFormClose}>Cancel</Button>
          <Button onClick={handleFormSubmit} variant="contained">{formMode === 'add' ? 'Add' : 'Save'}</Button>
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

export default TaskManager;
