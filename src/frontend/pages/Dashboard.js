import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../services/supabaseClient.js';
import TaskManager from '../components/TaskManager.js';
import ProgressChart from '../components/ProgressChart.js';
import HabitManager from '../components/HabitManager.js';
import AppUsageTracker from '../components/AppUsageTracker.js';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Box, Grid, Paper, Typography, Button, Stack } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activity, setActivity] = useState('study');
  const [activeTime, setActiveTime] = useState(0);
  const [totalTime, setTotalTime] = useState({ study: 0, work: 0, other: 0 });
  const [isTracking, setIsTracking] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [remainingTime, setRemainingTime] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) setUser(session.user);
      setLoading(false);
    };
    getSession();
  }, []);

  useEffect(() => {
    let interval;
    if (isTracking) {
      if (startTime === null) {
        setStartTime(Date.now() - activeTime * 1000);
      }
      interval = setInterval(() => {
        setActiveTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTracking, startTime, activeTime]);

  const handleStartStop = () => {
    setIsTracking((prevState) => !prevState);
    if (isTracking) {
      setTotalTime((prevState) => ({
        ...prevState,
        [activity]: prevState[activity] + activeTime,
      }));
      setRemainingTime(activeTime);
    } else {
      setRemainingTime(0);
      setStartTime(Date.now());
    }
  };

  const handleReset = () => {
    setTotalTime((prevState) => ({
      ...prevState,
      [activity]: prevState[activity] + activeTime,
    }));
    setActiveTime(0);
    setRemainingTime(0);
    setStartTime(Date.now());
  };

  const handleActivityChange = (newActivity) => {
    if (isTracking) handleReset();
    setActivity(newActivity);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/Login_Page');
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const chartData = {
    labels: ['Study', 'Work', 'Other'],
    datasets: [
      {
        label: 'Activity Time (in seconds)',
        data: [totalTime.study, totalTime.work, totalTime.other],
        fill: false,
        borderColor: '#4CAF50',
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        title: { display: true, text: 'Activity' },
      },
      y: {
        title: { display: true, text: 'Time (Seconds)' },
      },
    },
  };

  if (loading) return <Box p={4}><Typography variant="h6">Loading...</Typography></Box>;
  if (!user) return <Box p={4}><Typography variant="h6">Please log in first.</Typography></Box>;

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #4e73df, #1cc88a)', p: 3 }}>
      <Typography variant="h4" sx={{ color: '#fff', mb: 3, fontWeight: 700, letterSpacing: 2 }}>
        Welcome to your Dashboard
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <Button variant="contained" color="error" onClick={handleSignOut}>
          Sign Out
        </Button>
      </Box>
      <Grid container spacing={3} sx={{ mb: 2 }}>
        <Grid item xs={12} md={4}>
          <Paper elevation={4} sx={{ p: 2, borderRadius: 3 }}>
            <HabitManager />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ mb: 2 }}>
        <Grid item xs={12} md={4}>
          <Paper elevation={4} sx={{ p: 2, borderRadius: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>Current Activity</Typography>
            <Typography variant="subtitle1">{activity.charAt(0).toUpperCase() + activity.slice(1)}</Typography>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>{formatTime(activeTime)}</Typography>
            {remainingTime > 0 && !isTracking && (
              <Typography color="text.secondary">Paused: {formatTime(remainingTime)}</Typography>
            )}
            <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
              <Button variant="contained" color={isTracking ? 'warning' : 'success'} onClick={handleStartStop}>
                {isTracking ? 'Pause' : 'Start'}
              </Button>
              <Button variant="outlined" color="primary" onClick={handleReset}>
                Add Time
              </Button>
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={4} sx={{ p: 2, borderRadius: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>Activity Time Stats</Typography>
            <Line data={chartData} options={chartOptions} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={4} sx={{ p: 2, borderRadius: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>Activity Selector</Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button variant={activity === 'study' ? 'contained' : 'outlined'} onClick={() => handleActivityChange('study')}>Study</Button>
              <Button variant={activity === 'work' ? 'contained' : 'outlined'} onClick={() => handleActivityChange('work')}>Work</Button>
              <Button variant={activity === 'other' ? 'contained' : 'outlined'} onClick={() => handleActivityChange('other')}>Other</Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ mb: 2 }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={4} sx={{ p: 2, borderRadius: 3, height: '100%' }}>
            <TaskManager />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={4} sx={{ p: 2, borderRadius: 3, height: '100%' }}>
            <ProgressChart />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={4} sx={{ p: 2, borderRadius: 3 }}>
            <AppUsageTracker />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
