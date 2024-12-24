// //src\frontend\components\AppUsageTracker.js
// import React, { useState, useEffect } from 'react';

// const AppUsageTracker = () => {
//   const [startTime, setStartTime] = useState(null);
//   const [elapsedTime, setElapsedTime] = useState(0); // Time in seconds
//   const [isTracking, setIsTracking] = useState(false);
//   const [activeWindow, setActiveWindow] = useState(null);

//   useEffect(() => {
//     let interval;
    
//     if (isTracking) {
//       // Start tracking the time
//       setStartTime(Date.now()); // Record the start time
      
//       interval = setInterval(() => {
//         setElapsedTime(Math.floor((Date.now() - startTime) / 1000)); // Update elapsed time every second
//       }, 1000);
//     } else {
//       // Stop tracking when not in use
//       clearInterval(interval);
//     }

//     return () => clearInterval(interval); // Clean up the interval when the component unmounts
//   }, [isTracking, startTime]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       window.electron.getActiveWindow().then((currentWindow) => {
//         setActiveWindow(currentWindow);
//       });
//     }, 1000);

//     return () => clearInterval(interval);  // Clean up the interval on component unmount
//   }, []);

//   const handleStartStop = () => {
//     setIsTracking((prevState) => !prevState); // Toggle between starting and stopping the timer
//   };

//   const handleReset = () => {
//     setElapsedTime(0); // Reset the elapsed time
//     if (isTracking) {
//       setStartTime(Date.now()); // Start a new timer if the app is still running
//     }
//   };

//   const formatTime = (seconds) => {
//     const hours = Math.floor(seconds / 3600);
//     const minutes = Math.floor((seconds % 3600) / 60);
//     const secs = seconds % 60;
//     return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>App Usage Time</h2>
//       <div style={styles.timerDisplay}>
//         <p style={styles.time}>{formatTime(elapsedTime)}</p>
//       </div>
//       <div style={styles.controls}>
//         <button style={styles.button} onClick={handleStartStop}>
//           {isTracking ? 'Pause' : 'Start'}
//         </button>
//         <button style={styles.button} onClick={handleReset}>Reset</button>
//       </div>
//       {activeWindow && (
//         <div style={styles.activeWindow}>
//           <p>Active Window: {activeWindow.title}</p>
//           <p>App: {activeWindow.owner.name}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// // Inline styles
// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     minHeight: '100vh',
//     backgroundColor: '#f7f7f7',
//     fontFamily: 'Arial, sans-serif',
//     padding: '20px',
//   },
//   heading: {
//     fontSize: '24px',
//     marginBottom: '20px',
//   },
//   timerDisplay: {
//     backgroundColor: '#fff',
//     padding: '20px',
//     borderRadius: '10px',
//     boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//     marginBottom: '20px',
//   },
//   time: {
//     fontSize: '36px',
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   controls: {
//     display: 'flex',
//     gap: '20px',
//   },
//   button: {
//     padding: '10px 20px',
//     fontSize: '16px',
//     fontWeight: 'bold',
//     color: '#fff',
//     backgroundColor: '#4CAF50',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease',
//   },
//   activeWindow: {
//     marginTop: '20px',
//     padding: '10px',
//     backgroundColor: '#e0e0e0',
//     borderRadius: '5px',
//     textAlign: 'center',
//   }
// };

// export default AppUsageTracker;


import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';  // Use correct chart type

const AppUsageTracker = () => {
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0); 
  const [isTracking, setIsTracking] = useState(false);
  const [activeWindow, setActiveWindow] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let interval;
    try {
      if (isTracking) {
        setStartTime(Date.now());
        interval = setInterval(() => {
          setElapsedTime(Math.floor((Date.now() - startTime) / 1000)); 
        }, 1000);
      } else {
        clearInterval(interval);
      }
    } catch (e) {
      setError('Something went wrong, displaying dummy analysis.');
    }

    return () => clearInterval(interval);
  }, [isTracking, startTime]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.electron) {
      const interval = setInterval(() => {
        window.electron.getActiveWindow()
          .then((currentWindow) => {
            setActiveWindow(currentWindow);
          })
          .catch((err) => {
            setError('Failed to fetch active window.');
          });
      }, 1000);

      return () => clearInterval(interval);
    } else {
      setError('Electron API is not available.');
    }
  }, []);

  const handleStartStop = () => {
    setIsTracking((prevState) => !prevState);
  };

  const handleReset = () => {
    setElapsedTime(0);
    if (isTracking) {
      setStartTime(Date.now());
    }
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Dummy data for chart if error occurs
  const dummyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Usage (in hours)',
        data: [2, 3, 5, 2, 4],
        fill: false,
        borderColor: '#4CAF50',
        tension: 0.1,
      },
    ],
  };

  const dummyOptions = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Usage Time (hrs)',
        },
      },
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>App Usage Time</h2>
      <div style={styles.timerDisplay}>
        <p style={styles.time}>{formatTime(elapsedTime)}</p>
      </div>
      <div style={styles.controls}>
        <button style={styles.button} onClick={handleStartStop}>
          {isTracking ? 'Pause' : 'Start'}
        </button>
        <button style={styles.button} onClick={handleReset}>Reset</button>
      </div>
      {activeWindow && (
        <div style={styles.activeWindow}>
          <p>Active Window: {activeWindow.title}</p>
          <p>App: {activeWindow.owner.name}</p>
        </div>
      )}

      {error ? (
        <div style={styles.errorBox}>
          <p>{error}</p>
          <h3>Dummy Chart:</h3>
          <Line data={dummyData} options={dummyOptions} />
        </div>
      ) : (
        <div style={styles.activeWindow}>
          <p>Application is working fine!</p>
        </div>
      )}
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f7f7f7',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  timerDisplay: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  time: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#333',
  },
  controls: {
    display: 'flex',
    gap: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#4CAF50',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  activeWindow: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#e0e0e0',
    borderRadius: '5px',
    textAlign: 'center',
  },
  errorBox: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#f8d7da',
    borderRadius: '5px',
    color: '#721c24',
    textAlign: 'center',
  },
};

export default AppUsageTracker;
