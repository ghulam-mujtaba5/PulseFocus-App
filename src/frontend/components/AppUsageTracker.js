
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ProductivityTracker = () => {
  const [activity, setActivity] = useState('study');
  const [activeTime, setActiveTime] = useState(0);
  const [totalTime, setTotalTime] = useState({
    study: 0,
    work: 0,
    other: 0,
  });
  const [isTracking, setIsTracking] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [remainingTime, setRemainingTime] = useState(0);

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
            <p style={styles.time}>{formatTime(activeTime)}</p>
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
