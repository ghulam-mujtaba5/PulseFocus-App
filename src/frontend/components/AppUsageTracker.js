

// // // export default ProductivityTracker;
// // import React, { useState, useEffect } from 'react';
// // import { Line } from 'react-chartjs-2';
// // import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// // ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// // const ProductivityTracker = () => {
// //   const [activity, setActivity] = useState('study');
// //   const [activeTime, setActiveTime] = useState(0);
// //   const [totalTime, setTotalTime] = useState({
// //     study: 0,
// //     work: 0,
// //     other: 0,
// //   });
// //   const [isTracking, setIsTracking] = useState(false);
// //   const [startTime, setStartTime] = useState(null);
// //   const [remainingTime, setRemainingTime] = useState(0);

// //   useEffect(() => {
// //     let interval;
// //     if (isTracking) {
// //       if (startTime === null) {
// //         setStartTime(Date.now() - activeTime * 1000);
// //       }

// //       interval = setInterval(() => {
// //         setActiveTime(Math.floor((Date.now() - startTime) / 1000));
// //       }, 1000);
// //     } else {
// //       clearInterval(interval);
// //     }

// //     return () => clearInterval(interval);
// //   }, [isTracking, startTime, activeTime]);

// //   const handleStartStop = () => {
// //     setIsTracking((prevState) => !prevState);

// //     if (isTracking) {
// //       setTotalTime((prevState) => ({
// //         ...prevState,
// //         [activity]: prevState[activity] + activeTime,
// //       }));
// //       setRemainingTime(activeTime);
// //     } else {
// //       setRemainingTime(0);
// //       setStartTime(Date.now());
// //     }
// //   };

// //   const handleReset = () => {
// //     setTotalTime((prevState) => ({
// //       ...prevState,
// //       [activity]: prevState[activity] + activeTime,
// //     }));
// //     setActiveTime(0);
// //     setRemainingTime(0);
// //     setStartTime(Date.now());
// //   };

// //   const handleActivityChange = (newActivity) => {
// //     if (isTracking) {
// //       handleReset();
// //     }
// //     setActivity(newActivity);
// //   };

// //   const formatTime = (seconds) => {
// //     const hours = Math.floor(seconds / 3600);
// //     const minutes = Math.floor((seconds % 3600) / 60);
// //     const secs = seconds % 60;
// //     return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
// //   };

// //   const chartData = {
// //     labels: ['Study', 'Work', 'Other'],
// //     datasets: [
// //       {
// //         label: 'Activity Time (in seconds)',
// //         data: [totalTime.study, totalTime.work, totalTime.other],
// //         fill: false,
// //         borderColor: '#4CAF50',
// //         tension: 0.1,
// //       },
// //     ],
// //   };

// //   const chartOptions = {
// //     responsive: true,
// //     scales: {
// //       x: {
// //         title: {
// //           display: true,
// //           text: 'Activity',
// //         },
// //       },
// //       y: {
// //         title: {
// //           display: true,
// //           text: 'Time (Seconds)',
// //         },
// //       },
// //     },
// //   };

// //   return (
// //     <div style={styles.dashboard}>
// //       <h2 style={styles.dashboardTitle}>Productivity Dashboard</h2>

// //       <div style={styles.widgetsContainer}>
// //         <div style={styles.widget}>
// //           <div style={styles.widgetHeader}>
// //             <h3 style={styles.widgetTitle}>Current Activity</h3>
// //           </div>
// //           <div style={styles.widgetContent}>
// //             <p style={styles.time}>{activity.charAt(0).toUpperCase() + activity.slice(1)}</p>
// //             <p style={styles.time}>{formatTime(activeTime)}</p>
// //             {remainingTime > 0 && !isTracking && (
// //               <p style={styles.remainingTime}>Paused: {formatTime(remainingTime)}</p>
// //             )}
// //           </div>
// //           <div style={styles.widgetFooter}>
// //             <button style={styles.button} onClick={handleStartStop}>
// //               {isTracking ? 'Pause' : 'Start'}
// //             </button>
// //             <button style={styles.button} onClick={handleReset}>
// //               Add Time
// //             </button>
// //           </div>
// //         </div>

// //         <div style={styles.widget}>
// //           <div style={styles.widgetHeader}>
// //             <h3 style={styles.widgetTitle}>Activity Time Stats</h3>
// //           </div>
// //           <div style={styles.widgetContent}>
// //             <Line data={chartData} options={chartOptions} />
// //           </div>
// //         </div>

// //         <div style={styles.widget}>
// //           <div style={styles.widgetHeader}>
// //             <h3 style={styles.widgetTitle}>Activity Selector</h3>
// //           </div>
// //           <div style={styles.widgetContent}>
// //             <button style={styles.activityButton} onClick={() => handleActivityChange('study')}>
// //               Study
// //             </button>
// //             <button style={styles.activityButton} onClick={() => handleActivityChange('work')}>
// //               Work
// //             </button>
// //             <button style={styles.activityButton} onClick={() => handleActivityChange('other')}>
// //               Other
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const styles = {
// //   dashboard: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     alignItems: 'center',
// //     backgroundColor: '#f4f7fa',
// //     fontFamily: 'Arial, sans-serif',
// //     minHeight: '100vh',
// //     padding: '20px',
// //   },
// //   dashboardTitle: {
// //     fontSize: '32px',
// //     marginBottom: '30px',
// //     color: '#333',
// //   },
// //   widgetsContainer: {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     gap: '20px',
// //     flexWrap: 'wrap',
// //     width: '100%',
// //     maxWidth: '1200px',
// //   },
// //   widget: {
// //     backgroundColor: '#fff',
// //     padding: '20px',
// //     borderRadius: '10px',
// //     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
// //     width: '30%',
// //     minWidth: '300px',
// //     marginBottom: '20px',
// //   },
// //   widgetHeader: {
// //     borderBottom: '2px solid #4CAF50',
// //     marginBottom: '15px',
// //     paddingBottom: '10px',
// //   },
// //   widgetTitle: {
// //     fontSize: '20px',
// //     fontWeight: 'bold',
// //     color: '#333',
// //   },
// //   widgetContent: {
// //     textAlign: 'center',
// //   },
// //   widgetFooter: {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     gap: '10px',
// //     marginTop: '15px',
// //   },
// //   button: {
// //     padding: '10px 20px',
// //     fontSize: '16px',
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     backgroundColor: '#4CAF50',
// //     border: 'none',
// //     borderRadius: '8px',
// //     cursor: 'pointer',
// //     transition: 'background-color 0.3s ease',
// //   },
// //   time: {
// //     fontSize: '36px',
// //     fontWeight: 'bold',
// //     color: '#333',
// //   },
// //   remainingTime: {
// //     fontSize: '24px',
// //     color: '#f39c12',
// //   },
// //   activityButton: {
// //     padding: '12px 25px',
// //     fontSize: '16px',
// //     color: '#fff',
// //     backgroundColor: '#4CAF50',
// //     border: 'none',
// //     borderRadius: '8px',
// //     cursor: 'pointer',
// //     marginBottom: '10px',
// //   },
// // };

// // export default ProductivityTracker;
// import React, { useState, useEffect } from 'react';
// import { supabase } from '../../services/supabaseClient.js'; // Import Supabase client
// import TaskManager from '../components/TaskManager.js'; // Import TaskManager
// import ProgressChart from '../components/ProgressChart.js'; // Import ProgressChart
// import HabitTracker from '../components/HabitTracker.js'; // Import HabitTracker
// import AppUsageTracker from '../components/AppUsageTracker.js'; // Import AppUsageTracker

// const Dashboard = () => {
//   const [user, setUser] = useState(null); // Store user data
//   const [loading, setLoading] = useState(true); // Track loading state
//   const [refreshing, setRefreshing] = useState(false); // Track refreshing state
//   const [showTaskManager, setShowTaskManager] = useState(true);
//   const [showProgressChart, setShowProgressChart] = useState(true);
//   const [showAppUsageTracker, setShowAppUsageTracker] = useState(true);
//   const [showProductivityTracker, setShowProductivityTracker] = useState(true);

//   // Inline styles for the dashboard layout
//   const styles = {
//     dashboard: {
//       padding: '20px',
//       fontFamily: 'Arial, sans-serif',
//       textAlign: 'center',
//       background: 'linear-gradient(135deg, #4e73df, #1cc88a)',
//       display: 'flex',
//       flexDirection: 'column',
//       minHeight: '100vh',
//       justifyContent: 'space-between',
//     },
//     habitTrackerContainer: {
//       display: 'flex',
//       justifyContent: 'center',
//       gap: '20px',
//       flexWrap: 'wrap',
//       margin: '20px 0',
//       flexGrow: 1,
//       overflow: 'hidden',
//     },
//     habitTracker: {
//       width: '300px',
//       background: '#f3f3f3',
//       padding: '15px',
//       borderRadius: '10px',
//       boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//       transition: 'all 0.3s ease',
//       maxHeight: '400px',
//       overflow: 'auto',
//     },
//     dashboardMainContent: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//       gap: '20px',
//       marginTop: '20px',
//       flexGrow: 1,
//       overflow: 'hidden',
//     },
//     loading: {
//       fontSize: '18px',
//       color: '#fff',
//     },
//     loginPrompt: {
//       fontSize: '18px',
//       color: '#fff',
//     },
//     dashboardTitle: {
//       fontSize: '36px',
//       color: '#fff',
//       marginBottom: '20px',
//       textTransform: 'uppercase',
//     },
//     refreshButton: {
//       padding: '12px 25px',
//       fontSize: '16px',
//       marginTop: '20px',
//       backgroundColor: '#007bff',
//       color: '#fff',
//       border: 'none',
//       borderRadius: '5px',
//       cursor: 'pointer',
//       transition: 'background-color 0.3s, transform 0.3s',
//       marginBottom: '20px',
//     },
//     refreshButtonHover: {
//       backgroundColor: '#0056b3',
//       transform: 'scale(1.05)',
//     },
//     toggleButton: {
//       padding: '10px 15px',
//       backgroundColor: '#28a745',
//       color: '#fff',
//       border: 'none',
//       borderRadius: '5px',
//       cursor: 'pointer',
//       transition: 'background-color 0.3s, transform 0.3s',
//       marginBottom: '10px',
//     },
//     toggleButtonHover: {
//       backgroundColor: '#218838',
//       transform: 'scale(1.05)',
//     },
//     buttonContainer: {
//       display: 'flex',
//       justifyContent: 'center',
//       gap: '10px',
//       flexWrap: 'wrap',
//     },
//   };

//   // Function to simulate refreshing the data
//   const refreshData = async () => {
//     setRefreshing(true);
//     console.log("Refreshing data...");
//     setTimeout(() => {
//       setRefreshing(false);
//     }, 2000);
//   };

//   // Check if the user is logged in when the component mounts
//   useEffect(() => {
//     const getSession = async () => {
//       const { data: { session } } = await supabase.auth.getSession();
//       if (session) {
//         setUser(session.user);
//       }
//       setLoading(false);
//     };

//     getSession();

//     const interval = setInterval(() => {
//       refreshData();
//     }, 10000); 

//     return () => clearInterval(interval);
//   }, []);

//   if (loading) {
//     return <div style={styles.loading}>Loading...</div>;
//   }

//   if (!user) {
//     return <div style={styles.loginPrompt}>Please log in first.</div>;
//   }

//   return (
//     <div style={styles.dashboard}>
//       <h1 style={styles.dashboardTitle}>Welcome to your Dashboard</h1>

//       {/* Habit Tracker Section */}
//       <div style={styles.habitTrackerContainer}>
//         <div style={styles.habitTracker}>
//           <HabitTracker
//             taskName="Morning Workout"
//             taskDescription="Start your day with some exercise to boost energy."
//             onComplete={(taskName) => console.log(`${taskName} has been completed.`)}
//           />
//         </div>
//         <div style={styles.habitTracker}>
//           <HabitTracker
//             taskName="Read a Book"
//             taskDescription="Spend 30 minutes reading a personal development book."
//             onComplete={(taskName) => console.log(`${taskName} has been completed.`)}
//           />
//         </div>
//         <div style={styles.habitTracker}>
//           <HabitTracker
//             taskName="Drink Water"
//             taskDescription="Drink a glass of water after waking up."
//             onComplete={(taskName) => console.log(`${taskName} has been completed.`)}
//           />
//         </div>
//       </div>

//       {/* Toggle buttons for displaying components */}
//       <div style={styles.buttonContainer}>
//         <button
//           style={showTaskManager ? { ...styles.toggleButton, ...styles.toggleButtonHover } : styles.toggleButton}
//           onClick={() => setShowTaskManager(prevState => !prevState)}
//         >
//           {showTaskManager ? 'Hide Task Manager' : 'Show Task Manager'}
//         </button>
//         <button
//           style={showProgressChart ? { ...styles.toggleButton, ...styles.toggleButtonHover } : styles.toggleButton}
//           onClick={() => setShowProgressChart(prevState => !prevState)}
//         >
//           {showProgressChart ? 'Hide Progress Chart' : 'Show Progress Chart'}
//         </button>
//         <button
//           style={showAppUsageTracker ? { ...styles.toggleButton, ...styles.toggleButtonHover } : styles.toggleButton}
//           onClick={() => setShowAppUsageTracker(prevState => !prevState)}
//         >
//           {showAppUsageTracker ? 'Hide App Usage Tracker' : 'Show App Usage Tracker'}
//         </button>
//         <button
//           style={showProductivityTracker ? { ...styles.toggleButton, ...styles.toggleButtonHover } : styles.toggleButton}
//           onClick={() => setShowProductivityTracker(prevState => !prevState)}
//         >
//           {showProductivityTracker ? 'Hide Productivity Tracker' : 'Show Productivity Tracker'}
//         </button>
//       </div>

//       {/* Conditionally render components based on state */}
//       <div style={styles.dashboardMainContent}>
//         {showProgressChart && <ProgressChart />}
//         {showTaskManager && <TaskManager />}
//         {showAppUsageTracker && <AppUsageTracker />}
//         {showProductivityTracker && <ProductivityTracker />}
//       </div>

//       {/* Refresh button */}
//       <button
//         style={refreshing ? { ...styles.refreshButton, ...styles.refreshButtonHover } : styles.refreshButton}
//         onClick={refreshData}
//         disabled={refreshing}
//       >
//         {refreshing ? 'Refreshing...' : 'Refresh Data'}
//       </button>
//     </div>
//   );
// };

// export default Dashboard;


// export default ProductivityTracker;
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
