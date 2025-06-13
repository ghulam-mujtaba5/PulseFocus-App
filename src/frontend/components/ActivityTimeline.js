import React, { useEffect, useState } from 'react';
import { Paper, Typography, List, ListItem, ListItemText, Chip, Divider } from '@mui/material';

const categoryColors = {
  focus: 'success',
  meeting: 'info',
  break: 'warning',
  distraction: 'error',
  other: 'default',
};

function formatTime(ts) {
  const d = new Date(ts);
  return d.toLocaleTimeString();
}

const ActivityTimeline = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      if (window.electron && window.electron.fetchActivityLogs) {
        // Fetch logs for today only
        const startOfDay = new Date();
        startOfDay.setHours(0, 0, 0, 0);
        const rows = await window.electron.fetchActivityLogs(startOfDay.getTime());
        setLogs(rows || []);
      }
    };
    fetchLogs();
    const interval = setInterval(fetchLogs, 60000); // Refresh every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Activity Timeline (Today)
      </Typography>
      <List>
        {logs.length === 0 && <ListItem><ListItemText primary="No activity recorded yet." /></ListItem>}
        {logs.map((log, idx) => (
          <React.Fragment key={log.id}>
            <ListItem>
              <ListItemText
                primary={log.window_title || log.app_name}
                secondary={formatTime(log.timestamp)}
              />
              <Chip label={log.category} color={categoryColors[log.category] || 'default'} size="small" />
            </ListItem>
            {idx < logs.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default ActivityTimeline;
