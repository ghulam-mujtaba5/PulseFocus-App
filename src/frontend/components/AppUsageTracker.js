
import React, { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


// Activity categories for Rize-style tracking
const CATEGORY_MAP = {
  focus: ['code', 'editor', 'word', 'excel', 'notepad', 'chrome', 'firefox', 'edge'],
  meeting: ['zoom', 'teams', 'meet', 'skype', 'webex'],
  break: ['spotify', 'vlc', 'music', 'video', 'game'],
  distraction: ['twitter', 'facebook', 'instagram', 'youtube', 'tiktok', 'reddit'],
};

const getCategory = (window) => {
  if (!window || !window.owner || !window.owner.name) return 'other';
  const name = window.owner.name.toLowerCase();
  for (const [cat, keywords] of Object.entries(CATEGORY_MAP)) {
    if (keywords.some((kw) => name.includes(kw))) return cat;
  }
  return 'other';
};

const ProductivityTracker = () => {
  const [activity, setActivity] = useState('focus');
  const [activeTime, setActiveTime] = useState(0);
  const [totalTime, setTotalTime] = useState({
    focus: 0,
    meeting: 0,
    break: 0,
    distraction: 0,
    other: 0,
  });
  const [isTracking, setIsTracking] = useState(true);
  const [startTime, setStartTime] = useState(Date.now());
  const [remainingTime, setRemainingTime] = useState(0);
  const lastCategory = useRef('focus');


  // Listen for active window changes from Electron
  useEffect(() => {
    if (window.electron && window.electron.onActiveWindow) {
      const handler = (win) => {
        const cat = getCategory(win);
        setActivity(cat);
        setTotalTime((prev) => ({
          ...prev,
          [cat]: prev[cat] + 1,
        }));
        lastCategory.current = cat;
      };
      window.electron.onActiveWindow(handler);
      return () => {
        // No off method in this simple bridge, so nothing to clean up
      };
    }
  }, []);

  // Track active time for current category
  useEffect(() => {
    let interval;
    if (isTracking) {
      interval = setInterval(() => {
        setActiveTime((t) => t + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTracking]);

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
    if (isTracking) {
      handleReset();
    }
    setActivity(newActivity);
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };


  const chartData = {
    labels: ['Focus', 'Meeting', 'Break', 'Distraction', 'Other'],
    datasets: [
      {
        label: 'Activity Time (seconds)',
        data: [totalTime.focus, totalTime.meeting, totalTime.break, totalTime.distraction, totalTime.other],
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
        title: {
          display: true,
          text: 'Activity',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Time (Seconds)',
        },
      },
    },
  };

  return (
    <div style={styles.dashboard}>
      <h2 style={styles.dashboardTitle}>Productivity Dashboard</h2>

      <div style={styles.widgetsContainer}>
        <div style={styles.widget}>
          <div style={styles.widgetHeader}>
            <h3 style={styles.widgetTitle}>Current Activity</h3>
          </div>
          <div style={styles.widgetContent}>
            <p style={styles.time}>{activity.charAt(0).toUpperCase() + activity.slice(1)}</p>
            <p style={styles.time}>{formatTime(totalTime[activity])}</p>
            {remainingTime > 0 && !isTracking && (
              <p style={styles.remainingTime}>Paused: {formatTime(remainingTime)}</p>
            )}
          </div>
          <div style={styles.widgetFooter}>
            <button style={styles.button} onClick={handleStartStop}>
              {isTracking ? 'Pause' : 'Start'}
            </button>
            <button style={styles.button} onClick={handleReset}>
              Add Time
            </button>
          </div>
        </div>

        <div style={styles.widget}>
          <div style={styles.widgetHeader}>
            <h3 style={styles.widgetTitle}>Activity Time Stats</h3>
          </div>
          <div style={styles.widgetContent}>
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>

        <div style={styles.widget}>
          <div style={styles.widgetHeader}>
            <h3 style={styles.widgetTitle}>Activity Selector</h3>
          </div>
          <div style={styles.widgetContent}>
            <button style={styles.activityButton} onClick={() => handleActivityChange('study')}>
              Study
            </button>
            <button style={styles.activityButton} onClick={() => handleActivityChange('work')}>
              Work
            </button>
            <button style={styles.activityButton} onClick={() => handleActivityChange('other')}>
              Other
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  dashboard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f4f7fa',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    padding: '20px',
  },
  dashboardTitle: {
    fontSize: '32px',
    marginBottom: '30px',
    color: '#333',
  },
  widgetsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    flexWrap: 'wrap',
    width: '100%',
    maxWidth: '1200px',
  },
  widget: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '30%',
    minWidth: '300px',
    marginBottom: '20px',
  },
  widgetHeader: {
    borderBottom: '2px solid #4CAF50',
    marginBottom: '15px',
    paddingBottom: '10px',
  },
  widgetTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
  },
  widgetContent: {
    textAlign: 'center',
  },
  widgetFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
    marginTop: '15px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#4CAF50',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  time: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#333',
  },
  remainingTime: {
    fontSize: '24px',
    color: '#f39c12',
  },
  activityButton: {
    padding: '12px 25px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#4CAF50',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginBottom: '10px',
  },
};

export default ProductivityTracker;
